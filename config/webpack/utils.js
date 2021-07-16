const path = require('path');

const REACT_APP = /^REACT_APP_/i;

function resolve(dir) {
  return path.join(__dirname, '..', '..', dir);
}

function addSlash(str) {
  return str.endsWith('/') ? str : str + '/'
}

function getPublicUrlOrPath(isEnvDevelopment, envPublicUrl) {
  const stubDomain = 'https://github.com';

  if (envPublicUrl) {
    envPublicUrl = addSlash(envPublicUrl)

    const validPublicUrl = new URL(envPublicUrl, stubDomain);

    if (isEnvDevelopment) {
      if (envPublicUrl.startsWith('.')) {
        return '/assets/';
      }

      return validPublicUrl.pathname;
    }

    return envPublicUrl;
  }

  return '/assets/';
}

function publicUrlOrPath(){
  return getPublicUrlOrPath(
    process.env.NODE_ENV === 'development',
    process.env.PUBLIC_URL
  );
}

function getClientEnvironment() {
  const raw = Object.keys(process.env)
    .filter(key => REACT_APP.test(key))
    .reduce(
      (env, key) => {
        env[key] = process.env[key];
        return env;
      },
      {
        NODE_ENV: process.env.NODE_ENV || 'development',
      }
    );

  return {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {}),
  };
}


module.exports = {
  resolve,
  getClientEnvironment,
  publicUrlOrPath,
}