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
    }),
    actions: {
        deleteLineItem() {
            // Ember.Object.destroy() immediately removes (including relationship) and updates view
            // DS.Model.destroyRecord() does not update view for some reason.
            this.get('lineItem').destroy();
            // Presist on back end
            this.get('lineItem').destroyRecord();
        }
    }
});
