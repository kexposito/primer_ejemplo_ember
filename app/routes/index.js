import Route from '@ember/routing/route';
import bands from '../controllers/bands';

export default Route.extend({
    beforeModel:function() {
        if (bands.get('description')){
            this.transitionTo('bands.band.details');
        } 
        else {
            this.transitionTo('bands.band.songs')
        }
        this.transitionTo('bands');
    }
});
