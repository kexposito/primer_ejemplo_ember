import Route from '@ember/routing/route';
import bands from '../bands';

export default Route.extend({
    model(params){
        let band=this.modelFor('bands');
        return bands.findBy('slug',params.slug);// params.slug es pearl-jam
    }
});
