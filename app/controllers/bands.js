import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';

export default Controller.extend({
    isAddingBand:false,
    newBandName:'',

    isAddButtonDisavled:empty('newBandName'), //previene nombres vacios

    actions:{
        addBand(){
            this.set('isAddingBand',true);
        },

        cancelAddBand(){
            this.set('isAddingBand',false);
        },

        saveBand(event){
            event.preventDefault();
            let newBand=Band.create({ name:this.get('newBandName') });
            this.get('model').pushObject(newBand);
            this.setProperties({
                newBandName: '',
                isAddingBand: false
            });
            this.get(router).transitionTo('bands.band.songs', newBand);
        }

        // mio 
       /* saveBand: function() {
            event.preventDefault();
            let newBand = this.get('store').createRecord('band', { name: this.get('newBandName')});
            return newBand.save()
                .then( () => {
                    this.setProperties({
                        newBandName: '',
                        isAddingBand: false

                    });
                                        this.get('router').transitionTo('bands.band.songs', newBand);

                });

        } */
    }
});
