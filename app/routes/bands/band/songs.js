import Route from '@ember/routing/route';

export default Route.extend({
    //model: function() {
      //  return this.modelFor('bands.band');

      resetController(controller){
          controller.setProperties({
              isAddingSong:false,
              newSongTitle:''
          });
 
    },
    actions:{
        didTransition: function(){
            let band=this.modelFor('bands.band');
            document.title= `${band.get('name')} songs - Rock & Roll`;
        },
        saveSong(event ) { 
            event.preventDefault();
            let band = this.get('band');
            let newSong = this.get('store').createRecord('song', {
                title: this.get('newSongTitle'),
                band
            });
            return newSong.save()
                .then( () => {
                    this.set('newSongTitle','');
                });
        },
    }

});