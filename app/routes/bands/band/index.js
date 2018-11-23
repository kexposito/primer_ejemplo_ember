import Route from '@ember/routing/route';

export default Route.extend({
    afterModel: function(band){
        if(band.get('description')){
            this.transitionTo('bands.band.details');
        }
        else{
            this.transitionTo('bands.band.songs');
        }
    }

});
