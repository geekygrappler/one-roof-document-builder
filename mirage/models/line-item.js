import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
    document: belongsTo(),
    location: belongsTo(),
    stage: belongsTo()
});
