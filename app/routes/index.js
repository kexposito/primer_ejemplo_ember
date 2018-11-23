import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel:function() {
        this.transitionTo('bands');// this.transitionTo('bands.band.songs', 'pearl-jam');
    }
});
