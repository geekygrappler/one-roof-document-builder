import DS from 'ember-data';
const { attr, hasMany } = DS;

export default DS.Model.extend({
    title: attr('string'),
    lineItems: hasMany('lineItem')
});
