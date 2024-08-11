import { SCHEMA_TYPES } from "../../constants.js";
import { MonoSchemaParser } from "../mono-schema-parser.js";

class PrimitiveSchemaParser extends MonoSchemaParser {
  parse() {
    let contentType = null;
    const { additionalProperties, type, description, items } =
      this.schema || {};

    if (type === this.config.Ts.Keyword.Object && additionalProperties) {
      const fieldType =
        typeof additionalProperties === "object"
          ? this.schemaParserFabric
              .createSchemaParser({
                schema: additionalProperties,
                schemaPath: this.schemaPath,
              })
              .getInlineParseContent()
          : this.config.Ts.Keyword.Any;
      contentType = this.config.Ts.RecordType(
        this.config.Ts.Keyword.String,
        fieldType,
      );
    }

    if (Array.isArray(type) && type.length) {
      contentType = this.schemaParser._complexSchemaParsers.oneOf({
        ...(typeof this.schema === "object" ? this.schema : {}),
        oneOf: type.map((type) => ({ type })),
      });
    }

    if (Array.isArray(items) && type === SCHEMA_TYPES.ARRAY) {
      contentType = this.config.Ts.Tuple(
        items.map((item) =>
          this.schemaParserFabric
            .createSchemaParser({ schema: item, schemaPath: this.schemaPath })
            .getInlineParseContent(),
        ),
      );
    }

    return {
      ...(typeof this.schema === "object" ? this.schema : {}),
      $schemaPath: this.schemaPath.slice(),
      $parsedSchema: true,
      schemaType: SCHEMA_TYPES.PRIMITIVE,
      type: SCHEMA_TYPES.PRIMITIVE,
      typeIdentifier: this.config.Ts.Keyword.Type,
      name: this.typeName,
      description: this.schemaFormatters.formatDescription(description),
      // TODO: probably it should be refactored. `type === 'null'` is not flexible
      content:
        type === this.config.Ts.Keyword.Null
          ? type
          : contentType || this.schemaUtils.getSchemaType(this.schema),
    };
  }
}

export { PrimitiveSchemaParser };
