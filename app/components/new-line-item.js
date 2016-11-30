import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    didReceiveAttrs() {
        this.set('lineItem', this.get('store').createRecord('lineItem'));
    },
    actions: {
        createLineItem() {
            this.get('lineItem').set('document', this.get('document'));
            this.get('lineItem').save().then(() => {
                this.set('lineItem', this.get('store').createRecord('lineItem'));
            });
        }
    }
});