import DS from 'ember-data';
//import Ember from 'ember-metal';

export default DS.Model.extend({
  //id: DS.attr(),
  title: DS.attr(),
  description: DS.attr(),
  convener: DS.attr(),
  date: DS.attr(),
  location: DS.attr(),
  space_name: DS.attr(),
      //timespan:
      //  end_time: "Mon, 29 Feb 2016 10:45:00 GMT",
      //  start_time: "Mon, 29 Feb 2016 09:45:00 GMT"
  //space: DS.belongsTo('space'),
  /*
  time_slot: Ember.computed('start_time', 'end_time', function() {
    return `${this.get('start_time')}-${this.get('end_time')}`;
  })
  */
});
