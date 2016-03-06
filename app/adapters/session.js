import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
   namespace: 'conference_sessions/api/1.0',
   pathForType: function(type) {
    return '';
  }
});
