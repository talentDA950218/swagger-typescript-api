import * as lodash from "lodash";

const optionFormatters = {
  number: (str) => +str,
  numeric: (str) => +str,
  str: (str) => `${str}`,
  string: (str) => `${str}`,
  bool: (str) => !!str,
  boolean: (str) => !!str,
};

const processFlags = (flags) => {
  let name = null;
  const keys = [];
  let value = null;
  const isNoFlag = flags.includes("--no-");

  lodash
    .compact(lodash.split(flags, " ").map((str) => str.replace(/,/g, "")))
    .forEach((str) => {
      if (str.startsWith("-")) {
        keys.push(str);
      } else if (value === null) {
        if (str.startsWith("{") || str.startsWith("[") || str.startsWith("<")) {
          const rawValue = str.replace(/[{[<>}\].]/g, "");
          const variadic = str.includes("...");
          value = {
            raw: str,
            variadic,
            name: rawValue,
            formatter: optionFormatters[rawValue] || optionFormatters.string,
          };
        }
      }
    });

  const longestKey = keys.slice().sort((a, b) => b.length - a.length)[0];

  if (!lodash.isEmpty(longestKey)) {
    name = lodash.camelCase(
      (isNoFlag ? longestKey.replace("--no-", "") : longestKey).replace(
        /(--?)/,
        "",
      ),
    );
  }

  return {
    isNoFlag,
    raw: flags,
    name,
    keys,
    value,
  };
};

const processOption = (option) => {
  const processedFlags = processFlags(option.flags);

  if (!processedFlags.name) {
    console.warn("invalid option", option);
    return null;
  }

  return {
    required: !!option.required,
    description: `${option.description || ""}`,
    default: option.default,
    flags: processedFlags,
    operation: option.operation,
    internal: option.internal,
  };
};

export { processOption };
