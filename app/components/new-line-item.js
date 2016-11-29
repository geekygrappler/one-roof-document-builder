import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    didReceiveAttrs() {
        this.set('lineItem', this.get('store').createRecord('lineItem', {
            section: this.get('section')
        }));
    },
    actions: {
        createLineItem() {
            let section = this.get('section');
            let newLineItem = this.get('lineItem');

            section.get('lineItems').addObject(newLineItem);
            newLineItem.save().then(() => {
                section.save().then(() => {
                    this.set('lineItem', this.get('store').createRecord('lineItem', {
                        section: this.get('section')
                    }));
                });
            });
        }
    }
});
