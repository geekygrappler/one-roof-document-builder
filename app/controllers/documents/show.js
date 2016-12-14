import Ember from 'ember';
// import DS from 'ember-data';
import _ from 'underscore';
// import { task } from 'ember-concurrency';
const { computed, defineProperty } = Ember;

export default Ember.Controller.extend({
    queryParams: ['viewBy', 'currentView'],
    viewBy: "location",
    currentView() {
        return this.get('model').get('locations').get('firstObject');
    },

    init() {
        this._super(...arguments);
        let viewBy = this.get('viewBy');
        defineProperty(this, 'viewByPath', computed.alias(`model.lineItems.@each.${viewBy}`));
    },

    viewGroup: computed('viewBy', function() {
        return this.get('model').get(`${this.get('viewBy')}s`);
    }),

    groupedLineItems: computed('viewByPath', 'viewBy', function() {
        const lineItems = this.get('model').get('lineItems').toArray();
        const viewBy = this.get('viewBy');
        return this.sortObject(_.groupBy(lineItems, (lineItem) => lineItem.get(viewBy).get('name')));
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
