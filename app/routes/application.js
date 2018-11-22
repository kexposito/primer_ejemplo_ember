//voy a controlar application hbs
import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
// la saco de emberObject y defino
let Song=EmberObject.extend({
    title:'',
    band:'',
    rating:0
});

export default Route.extend({
    model(){

        //patron de arriba
        let blackDog=Song.create({
            title:'Black Dog',
            band:'Led Zeppelin',
            rating:3
        });

        let yellowLedbetter=Song.create({
            title:'Yellow Ledbetter',
            band:'Pearl Jam',
            rating:4
        });

        let pretender=Song.create({
            title:'The Pretender',
            band:'Foo Fighters',
            rating:2
        });

        return [blackDog,yellowLedbetter,pretender];
    }
});
