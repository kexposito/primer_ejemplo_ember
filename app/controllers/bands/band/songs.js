import Controller from '@ember/controller';
//import Song from 'rarwe/models/song';
import { empty } from '@ember/object/computed';

export default Controller.extend({

    isAddingSong:false,
    newSongTitle:'',

    isAddingButtonDisabled: empty('newSongTitle'),

    actions:{
        addSong(){
            this.set('isAddingSong',true);
        },
        saveSong() {
            const band = this.get('model');
            let newSong = this.get('store').createRecord('song', {
                title: this.get('newSongTitle'),
                band
            });
            return newSong.save()
                .then(() => {
                    this.set('newSongTitle','');
                });
        },
        cancelAddSong(){
            this.set('isAddingSong',false);
        },
        updateRating(song, rating){
           let currentRating=song.get('rating');
           song.set('rating',currentRating===rating ? 0 : rating);
           return song.save();
        }

    }
})