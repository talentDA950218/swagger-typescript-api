import { consola } from "consola";
import lodash from "lodash";

class Request {
  /**
   * @type {CodeGenConfig}
   */
  config;

  constructor(config) {
    this.config = config;
  }

  /**
   * @param url {string}
   * @param disableStrictSSL
   * @param authToken
   * @param options {Partial<RequestInit>}
   * @return {Promise<string>}
   */
  async download({ url, disableStrictSSL, authToken, ...options }) {
    /**
     * @type {Partial<RequestInit>}
     */
    const requestOptions = {};

    if (disableStrictSSL && !url.startsWith("http://")) {
      const undiciGlobalDispatcher =
        global[Symbol.for("undici.globalDispatcher.1")];
      if (!undiciGlobalDispatcher) {
        throw new Error("Could not find the global Undici dispatcher");
      }
      const newDispatcher = new undiciGlobalDispatcher.constructor({
        connect: {
          rejectUnauthorized: false,
        },
      });
      global[unidiciGlobalDispatcherSymbol] = newDispatcher;
    }
    if (authToken) {
      requestOptions.headers = {
        Authorization: authToken,
      };
    }

    lodash.merge(requestOptions, options, this.config.requestOptions);

    try {
      const response = await fetch(url, requestOptions);
      return await response.text();
    } catch (error) {
      const message = `error while fetching data from URL "${url}"`;
      consola.error(message, "response" in error ? error.response : error);
      return message;
    }
  }
}

export { Request };
