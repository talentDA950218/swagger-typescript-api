const _ = require("lodash");
const { pascalCase } = require("../../util/pascal-case");
const { SCHEMA_TYPES } = require("../../constants");
const { MonoSchemaParser } = require("../mono-schema-parser");

class DiscriminatorSchemaParser extends MonoSchemaParser {
  parse() {
    const { discriminator, ...noDiscriminatorSchema } = this.schema;

    if (this.typeName == null || !discriminator.mapping) {
      return this.schemaParserFabric
        .createSchemaParser({
          schema: noDiscriminatorSchema,
          typeName: this.typeName,
          schemaPath: this.schemaPath,
        })
        .parseSchema();
    }

    // https://github.com/acacode/swagger-typescript-api/issues/456
    const skipMappingType = !!noDiscriminatorSchema.oneOf;

    const abstractSchemaStruct = this.createAbstractSchemaStruct();
    const complexSchemaStruct = this.createComplexSchemaStruct();
    const discriminatorSchemaStruct = this.createDiscriminatorSchema({
      skipMappingType,
      abstractSchemaStruct,
    });

    const schemaContent = this.config.Ts.IntersectionType(
      [
        abstractSchemaStruct?.content,
        this.config.Ts.ExpressionGroup(
          this.config.Ts.UnionType([complexSchemaStruct?.content, discriminatorSchemaStruct?.content].filter(Boolean)),
        ),
      ].filter(Boolean),
    );

    return {
      ...(_.isObject(this.schema) ? this.schema : {}),
      $parsedSchema: true,
      schemaType: SCHEMA_TYPES.COMPLEX,
      type: SCHEMA_TYPES.PRIMITIVE,
      typeIdentifier: this.config.Ts.Keyword.Type,
      name: this.typeName,
      description: this.schemaFormatters.formatDescription(this.schema.description),
      content: schemaContent,
    };
  }

  createDiscriminatorSchema = ({ skipMappingType, abstractSchemaStruct }) => {
    const refPath = this.schemaComponentsMap.createRef("schemas", this.typeName);
    const { discriminator } = this.schema;
    const { mapping, propertyName } = discriminator;
    const mappingEntries = _.entries(mapping);
    const complexSchemaKeys = _.keys(this.schemaParser._complexSchemaParsers);
    const ableToCreateMappingType = !skipMappingType && !!(abstractSchemaStruct?.typeName && mappingEntries.length);
    const mappingContents = [];
    let mappingTypeName;

    if (ableToCreateMappingType) {
      mappingTypeName = this.config.componentTypeNameResolver.resolve([
        pascalCase(`${abstractSchemaStruct.typeName} ${propertyName} Mapping`),
        pascalCase(`${abstractSchemaStruct.typeName} Map Type By ${propertyName}`),
        pascalCase(`${abstractSchemaStruct.typeName} Mapping`),
        pascalCase(`${abstractSchemaStruct.typeName} Mapper`),
        pascalCase(`${abstractSchemaStruct.typeName} MapType`),
      ]);
      const component = this.schemaComponentsMap.createComponent("schemas", mappingTypeName, {
        internal: true,
      });
      const schema = this.schemaParserFabric
        .createSchemaParser({ schema: component, schemaPath: this.schemaPath })
        .parseSchema();
      schema.genericArgs = [{ name: "Key" }, { name: "Type" }];
      schema.internal = true;
      schema.content = this.config.Ts.IntersectionType([
        this.config.Ts.ObjectWrapper(this.config.Ts.TypeField({ key: propertyName, value: "Key" })),
        "Type",
      ]);
      component.typeData = schema;
    }

    const createMappingContent = (mappingSchema, mappingKey) => {
      const content = this.schemaParserFabric
        .createSchemaParser({
          schema: mappingSchema,
          schemaPath: this.schemaPath,
        })
        .getInlineParseContent();

      if (ableToCreateMappingType) {
        return this.config.Ts.TypeWithGeneric(mappingTypeName, [this.config.Ts.StringValue(mappingKey), content]);
      } else {
        return this.config.Ts.ExpressionGroup(
          this.config.Ts.IntersectionType([
            this.config.Ts.ObjectWrapper(
              this.config.Ts.TypeField({
                key: propertyName,
                value: this.config.Ts.StringValue(mappingKey),
              }),
            ),
            content,
          ]),
        );
      }
    };

    for (const [mappingKey, schema] of mappingEntries) {
      const mappingSchema = typeof schema === "string" ? { $ref: schema } : schema;

      // override parent dependencies
      if (mappingSchema.$ref && abstractSchemaStruct?.component?.$ref) {
        const mappingRefSchema = this.schemaUtils.getSchemaRefType(mappingSchema)?.rawTypeData;
        if (mappingRefSchema) {
          complexSchemaKeys.forEach((schemaKey) => {
            if (_.isArray(mappingRefSchema[schemaKey])) {
              mappingRefSchema[schemaKey] = mappingRefSchema[schemaKey].map((schema) => {
                if (schema.$ref === refPath) {
                  return { ...schema, $ref: abstractSchemaStruct.component.$ref };
                }
                return schema;
              });
            }
          });
        }
      }

      mappingContents.push(createMappingContent(mappingSchema, mappingKey));
    }

    if (skipMappingType) return null;

    const content = this.config.Ts.ExpressionGroup(this.config.Ts.UnionType(mappingContents));

    return {
      content,
    };
  };

  createAbstractSchemaStruct = () => {
    const { discriminator, ...noDiscriminatorSchema } = this.schema;
    const complexSchemaKeys = _.keys(this.schemaParser._complexSchemaParsers);
    const schema = _.omit(_.clone(noDiscriminatorSchema), complexSchemaKeys);
    const schemaIsEmpty = !_.keys(schema).length;

    if (schemaIsEmpty) return null;

    const typeName = this.config.componentTypeNameResolver.resolve([
      pascalCase(`Abstract ${this.typeName}`),
      pascalCase(`Discriminator ${this.typeName}`),
      pascalCase(`Internal ${this.typeName}`),
      pascalCase(`Polymorph ${this.typeName}`),
    ]);
    const component = this.schemaComponentsMap.createComponent("schemas", typeName, {
      ...schema,
      internal: true,
    });
    const content = this.schemaParserFabric
      .createSchemaParser({ schema: component, schemaPath: this.schemaPath })
      .getInlineParseContent();

    return {
      typeName,
      component,
      content,
    };
  };

  createComplexSchemaStruct = () => {
    const complexType = this.schemaUtils.getComplexType(this.schema);

    if (complexType === SCHEMA_TYPES.COMPLEX_UNKNOWN) return null;

    return {
      content: this.config.Ts.ExpressionGroup(this.schemaParser._complexSchemaParsers[complexType](this.schema)),
    };
  };
}

module.exports = {
  DiscriminatorSchemaParser,
};
