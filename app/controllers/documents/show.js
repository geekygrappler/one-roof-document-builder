import Ember from 'ember';
// import DS from 'ember-data';
import _ from 'underscore';
// import { task } from 'ember-concurrency';
const { computed } = Ember;

export default Ember.Controller.extend({
    groupedLineItems: computed('model.lineItems.@each.location', function() {
        const lineItems = this.get('model').get('lineItems').toArray();
        return this.sortObject(_.groupBy(lineItems, (lineItem) => lineItem.get('location').get('name')));
    }),

    // Will sort an object by it's keys.
    // Copied and pasted from SO. Should probably be a mixin/utility, but fuck it.
    sortObject(obj) {
        return Object.keys(obj).sort().reduce(function (result, key) {
            result[key] = obj[key];
            return result;
        }, {});
    }
});
