import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    notes: DS.attr('string'),
    lineItems: DS.hasMany('line-item'),
    document: DS.belongsTo('document')
});
