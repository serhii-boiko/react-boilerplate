'use strict';

const webpackConfigs = require('./config/webpack');
const defaultConfig = 'development';

module.exports = (configName) => {
    const requestedConfig = configName || defaultConfig;
    let LoadedConfig;
    if (webpackConfigs[requestedConfig] !== undefined) {
        LoadedConfig = webpackConfigs[requestedConfig];
        console.log(`Selected config: ${requestedConfig}`);
    } else {
        console.warn(
            `Provided environment "${configName}" was not found.
            Please use one of the following ones:
            ${Object.keys(webpackConfigs).join(' ')}`
        );
        LoadedConfig = webpackConfigs[defaultConfig];
    }
    return LoadedConfig;
};
