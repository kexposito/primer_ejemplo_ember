import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('not-found', { path: '/*path' }); // a partir de dodne quiero que pase esoto
  this.route('bands', function() {//{ path: '/'} //agrego a que rutas puedo acceder   ///aca voy a tener un {{outlet}} que me lleva al template(.hbs) de band
      this.route('band', { path: ':id'}, function() {    // el template de aca tiene dos div, uno con los link y el otro con un  {{otulet}} que me lleva el template (.hbs) de songs o de detail dependiendo lo que elija
        this.route('songs');
        this.route('details');
      });
  });
}); 


export default Router;
