import Ember from 'ember';
const { computed } = Ember;
import _ from 'underscore';


export default Ember.Component.extend({
    sortBy: ["stage.name"],
    sortedLineItems: computed.sort('lineItems', 'sortBy'),
    listTotal: computed('lineItems.@each.total', function() {
        let lineItems = this.get('lineItems');
        return lineItems.reduce((a, b) => a + (isNaN(b.get('total')) ? 0 : b.get('total')), 0);
    }),

    lineItemGroups: computed('lineItems.@each', function() {
        const lineItems = this.get('lineItems');
        return this.sortObject(_.groupBy(lineItems.toArray(), (lineItem) => lineItem.get(this.get('secondaryGroup')).get('name')));
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
