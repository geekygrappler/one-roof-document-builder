import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.get('store').findRecord('document', params.document_id, { include: 'lineItems.location' });
    }
});
