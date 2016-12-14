import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.modelFor('documents.show').get('locations');
    },

    setupController(controller, model) {
        this._super(controller, model);
        controller.set('defaultStage', this.modelFor('documents.show').get('stages').get('firstObject'));
    }
});
