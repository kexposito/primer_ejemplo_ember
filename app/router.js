import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('bands', function() {
      this.route('band', { path: ':slug'}, function() {    //this.route('band', {path: '\':slug\''},function(){
        this.route('songs');
      });
  });
}); 

// genero la ruta /bands/banda_elegida/songs
    // ember generate route bands/band --path=':slug'    () :slug=banda_elegida

export default Router;
