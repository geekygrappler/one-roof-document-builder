import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route('documents', function() {
        this.route('new');
        this.route('show', { path: ":document_id" }, function() {
            this.route('stages', function() {
                this.route('show', { path: ":stage_id" });
            });
            this.route('locations', function() {
                this.route('show', { path: ":location_id" });
            });
        });
    });
});

export default Router;
