import DS from 'ember-data';
const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
    name: attr('string'),
    document: belongsTo('document'),
    lineItems: hasMany('lineItem')
});
