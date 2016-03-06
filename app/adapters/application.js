import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  // Application specific overrides go here
  host: 'http://localhost:8080',
  namespace: 'conference_sessions/api/1.0',
  ajax: function(url, method, hash) {
    hash = hash || {}; // hash may be undefined
    hash.crossDomain = true;
    // TODO: not sure if we need this, API currently doesn't support credentials
    //hash.xhrFields = {withCredentials: true};
    return this._super(url, method, hash);
  }
});
