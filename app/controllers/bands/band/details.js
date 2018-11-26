import Controller from '@ember/controller';

export default Controller.extend({
    isEditing: false,

    actions:{

        edit() {
            this.set('isEditing',true);
        },
        
        save() {
            let band = this.get('model');
            return band.save()
                .then ( () => {
                    this.set('isEditing',false);

                });
        }  
    }
});
