import DS from 'ember-data';
import Ember from 'ember';
const { attr, hasMany } = DS;
const { computed } = Ember;

export default DS.Model.extend({
    title: attr('string'),
    lineItems: hasMany('lineItem'),
    locations: hasMany('location'),
    stages: hasMany('stage'),
    total: computed('lineItems.@each.total', function() {
        return this.get('lineItems').reduce((a, b) => a + (isNaN(b.get('total')) ? 0 : b.get('total')), 0);
    })
});
