import DS from 'ember-data';
import Ember from 'ember';
const { computed } = Ember;

export default DS.Model.extend({
    itemName: DS.attr('string'),
    notes: DS.attr('string'),
    quantity: DS.attr('number', { defaultValue: 1 }),
    unit: DS.attr('string'),
    section: DS.belongsTo('section'),
    rate: DS.attr('number'),
    document: DS.belongsTo('document'),
    total: computed('rate', 'quantity', function () {
        return this.get('rate') * this.get('quantity');
    })
});
