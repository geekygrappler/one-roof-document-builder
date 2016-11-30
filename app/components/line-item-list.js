import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
    listTotal: computed('lineItems.@each.total', function() {
        let lineItems = this.get('lineItems');
        return lineItems.reduce((a, b) => a + (isNaN(b.get('total')) ? 0 : b.get('total')), 0);
    })
});
