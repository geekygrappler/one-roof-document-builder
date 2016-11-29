import DS from 'ember-data';

export default DS.Model.extend({
    itemName: DS.attr('string'),
    notes: DS.attr('string'),
    quantity: DS.attr('number'),
    unit: DS.attr('string'),
    section: DS.belongsTo('section')
});
