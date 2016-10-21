import DS from 'ember-data';

export default DS.Model.extend({
  notes: DS.attr('string'),
  quantity: DS.attr('string'),
  rate: DS.attr('integer'),
  price: DS.attr('integer'),
  section: DS.belongsTo('section')
});
