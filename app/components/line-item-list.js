import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
    listTotal: computed('lineItems.@each.quantity', function() {
        let lineItems = this.get('lineItems');
        return lineItems.reduce((a, b) => a + (isNaN(b.get('quantity')) ? 0 : b.get('quantity')), 0);
    })
});
