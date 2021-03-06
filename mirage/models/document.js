import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
    lineItems: hasMany(),
    locations: hasMany(),
    stages: hasMany()
});
