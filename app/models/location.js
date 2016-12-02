import DS from 'ember-data';
const { attr, belongsTo } = DS;

export default DS.Model.extend({
    name: attr('string'),
    belongsTo: belongsTo('document')
});
