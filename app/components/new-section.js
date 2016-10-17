import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),
    didReceiveAttrs() {
        this.set('section', this.get('store').createRecord('section', {
            document: this.get('document')
        }));
    },
    actions: {
        createSection() {
            this.get('section').save().then(() => {
                this.set('section', this.get('store').createRecord('section', {
                    document: this.get('document')
                }));
            });
        }
    }
});
