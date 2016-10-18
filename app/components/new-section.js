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
            let document = this.get('document');
            let newSection = this.get('section');

            document.get('sections').addObject(newSection);
            newSection.save().then(() => {
                document.save().then(() => {
                    this.set('section', this.get('store').createRecord('section', {
                        document: this.get('document')
                    }));
                });
            });
        }
    }
});
