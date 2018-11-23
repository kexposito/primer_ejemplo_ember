import Route from '@ember/routing/route';
import Band from 'rarwe/models/band';
import Song from 'rarwe/models/song';


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
