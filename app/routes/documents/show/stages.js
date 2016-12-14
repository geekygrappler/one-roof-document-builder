import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.modelFor('documents.show').get('stages');
    },

    setupController(controller, model) {
        this._super(controller, model);
        controller.set('defaultLocation', this.modelFor('documents.show').get('locations').get('firstObject'));
    }
});
