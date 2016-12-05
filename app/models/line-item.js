import DS from 'ember-data';
import Ember from 'ember';
const { attr, belongsTo } = DS;
const { computed } = Ember;

export default DS.Model.extend({
    itemName: attr('string'),
    notes: attr('string'),
    quantity: attr('number', { defaultValue: 1 }),
    unit: attr('string'),
    section: belongsTo('section'),
    rate: attr('number'),
    document: belongsTo('document'),
    location: belongsTo('location'),
    stage: belongsTo('stage'),
    total: computed('rate', 'quantity', function () {
        return this.get('rate') * this.get('quantity');
    })
});
