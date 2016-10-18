import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
    model(params) {
        return RSVP.hash({
            document: this.get('store').findRecord('document', params.document_id),
            sections: this.get('store').findRecord('document', params.document_id).then((document) => {
                return document.get('sections');
            })
        });
    }
});
