import Ember from 'ember';

function categorizeSessions(sessions) {
  var sortedSessions = [];
  for (var i = 0; i < sessions.length; i++) {
    var s = sessions[i];
    if (sortedSessions[s.date] === undefined) {
      sortedSessions[s.date] = [];
    }
    if (sortedSessions[s.date][s.timeslot] === undefined) {
      sortedSessions[s.date][s.timeslot] = [];
    }
    sortedSessions[s.date][s.timeslot].push(s);
  }

  console.log(sortedSessions);
  return sortedSessions;
}


export default Ember.Route.extend({
  model() {
   return this.store.findAll('session');
 }
});
