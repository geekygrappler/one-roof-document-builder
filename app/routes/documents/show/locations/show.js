import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('location', params.location_id, { include: 'lineItems' });
    },

    /*
     * We need to pass in the document to the component which creates a new line Item
     */
    setupController(controller, model) {
        this._super(controller, model);
        controller.set('document', this.modelFor('documents.show'));
    }
});
