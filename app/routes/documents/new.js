import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.get('store').createRecord('document', {
            title: "Placeholder Tender title"
        }).save().then((model) => {
            this.transitionTo("documents.show", model);
        });
    }
});
