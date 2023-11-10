const packageDesc = require("../../package.json");

import * as Components from "../packages";
export * from "../packages";

/**
 * 
 * @param {*} app 
 * @param {*} appConfigOptions 
 */
const install = (app, appConfigOptions) => {
  const componentsKeysArray = Object.keys(Components);
  componentsKeysArray.forEach((componentName) => {
    app.use(Components[componentName]);
  });
  console.log(app, "vue app");
};

export default {
  version: packageDesc.version,
  name: packageDesc.name,
  install,
  ...Components,
};
