/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'openspacesboard-frontend',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  ENV.contentSecurityPolicyHeader = 'Content-Security-Policy';
  ENV.contentSecurityPolicy = {
    // Deny everything by default
    'default-src': "'none'",
    'script-src': ["'self'"],
    'font-src': ["'self'"],
    'connect-src': ["'self'", "http://localhost:8080"],
    'img-src': "'self'",
    'style-src': ["'self'"],
    'media-src': null
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.API_HOST = 'http://localhost:8080';
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
