import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        this.get('store').createRecord('document', {
            title: "Placeholder Tender title"
        }).save().then((model) => {
            this.transitionTo("documents.show", model);
        });
    }
});
