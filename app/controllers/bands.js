import Controller from '@ember/controller';
import Band from 'rarwe/models/band';
import {empty} from 'ember/object/computed';

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

        saveBand(){
            let newBand=Band.create({name:this.get('newBandName')});
            this.get('model').pushObject(newBand);
            this.set('newBandName','');
        }
    }
});
