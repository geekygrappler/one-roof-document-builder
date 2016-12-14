import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
    document: belongsTo(),
    lineItems: hasMany()
});
