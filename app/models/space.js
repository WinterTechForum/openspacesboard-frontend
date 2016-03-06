import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr(),
  space_name: DS.attr(),
  location: DS.belongsTo('location'),
  // = db.Column(db.String(64), db.ForeignKey('location.id'))
  event_date: DS.attr(),
  start_time: DS.attr(),
  end_time: DS.attr()
});
