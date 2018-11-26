import Controller from '@ember/controller';

export default Controller.extend({
    isEditing: false,

    actiones:{
        toggleIsEditing() {
            this.toggleProperty('isEditing');

        }
    }
});
