'use strict';

const webpackConfigs = {
  development: 'development',
  production: 'production',
  analyzer: 'analyzer',
};

const nodeEnvMap = {
  development: 'development',
  production: 'production',
  analyzer: 'production',
}

module.exports = (config) => {
  const requestedConfigName = Object.keys(webpackConfigs).find((key) => config[key]);
  let LoadedConfig;
  if (webpackConfigs[requestedConfigName]) {
    console.log(`Selected config: ${requestedConfigName}`);
    process.env.NODE_ENV = nodeEnvMap[requestedConfigName];
    const webpackConfigs = require('./config/webpack')
    LoadedConfig = webpackConfigs[requestedConfigName];

    return LoadedConfig;
  }

  console.warn(
    `Provided environment "${JSON.stringify(config)}" was not found.
        Please use one of the following ones:
        ${Object.keys(webpackConfigs).join(' ')}`
  );
  process.exit(1);
};
