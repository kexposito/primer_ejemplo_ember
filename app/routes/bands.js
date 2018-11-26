import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.findAll('band');
    },
    actions:{
        didTransition: function(){
            document.title='Bands - Rock & Roll';
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
                    this.get('router').transitionTo('bands.band.songs', newBand);
                });

        }
    }
});
