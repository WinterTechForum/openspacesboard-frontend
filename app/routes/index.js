import Ember from 'ember';

var sessions = [
  { "id": 11, "title": "Java 8: Functional Enough to Stem the Flow?",
    "date": "2016-02-29", "timeslot": "9:45-10:45", "space": "Stained Glass",
    "convener": "Bruce"},
  { "id": 12, "title":"All Things AI", "date":"2016-02-29",
    "timeslot": "09:45-10:45", "space": "Downstairs", "convener": "Julie" },
  { "id": 13, "title":"The Next Step to Creating a Trust Organization",
    "date":"2016-02-29", "timeslot": "11:00-12:00", "space": "Rumors",
    "convener":"Bruce" },
  { "id": 16, "title":"Cloud Event Handlers (AWS Lambda, Google Cloud Dataflow, etc)",
  "convener":"James",
    "date":"2016-02-29","timeslot": "11:00-12:00", "space": "Piano"},
  { "id": 14, "title":"Seeking failure as a counter-philosophy to demanding perfection",
    "date":"2016-03-01", "timeslot": "8:30-9:30", "space": "Stained Glass",
    "convener":"Bruce"  },
  { "id": 15, "title":"Graph data ases: do I want one?", "date":"2016-03-01",
    "timeslot": "10:00-11:00", "space": "Downstairs", "convener":"Drew"  },
];

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
   return categorizeSessions(sessions);
 }
});
