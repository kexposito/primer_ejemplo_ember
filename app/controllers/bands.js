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

        saveBand: function() {
            event.preventDefault();
            let newBand = this.get('store').createRecord('band', { name: this.get('newBandName')});
            return newBand.save()
                .then( () => {
                    this.setProperties({
                        newBandName: '',
                        isAddingBand: false

                    });
                    this.transitionToRoute('bands.band.songs', newBand);
                });

        }
    }
});
