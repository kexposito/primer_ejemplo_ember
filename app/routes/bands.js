import Route from '@ember/routing/route';
//import EmberObject from '@ember/object';
import EmberObject,{computed} from '@ember/object';
import {dasherize} from '@ember/string';

let Band=EmberObject.extend({
    name:'',

    slug: computed('name',function(){
        return dasherize (this.get('name'));

    })

});

let Song=EmberObject.extend({
    title:'',
    rating:0,
    band:''
});

export default Route.extend({
    model(){
        //creo las canciones
        let blackDog = Song.create({
            title: 'Black Dog',
            band: 'Led Zeppelin',//banda
            rating: 3
        });
        let yellowLedbetter = Song.create({
            title: 'Yellow Ledbetter',
            band: 'Pearl Jam',//banda
            rating: 4
        });
        let pretender = Song.create({
            title: 'The Pretender',
            band: 'Foo Fighters',//banda
            rating: 2
        });
        let daughter = Song.create({
            title: 'Daughter',
            band: 'Pearl Jam',//banda
            rating: 5
        });

        //creo las banddas con el conjunto de canciones
        let ledZeppelin = Band.create({ name: 'Led Zeppelin', songs:
            [blackDog] });
        let pearlJam = Band.create({ name: 'Pearl Jam', songs:
            [yellowLedbetter, daughter] });
        let fooFighters = Band.create({ name: 'Foo Fighters', songs:
            [pretender] });
        return [ledZeppelin,pearlJam,fooFighters];
    }
});
