import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
    quantityAsString: computed('lineItem.quantity', {
        get() {
            return "" + this.get('lineItem.quantity');
        },
        set(_, value) {
            this.set('lineItem.quantity', parseInt(value));
        }
    })
});
