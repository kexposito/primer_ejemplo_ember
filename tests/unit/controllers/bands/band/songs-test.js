import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | bands/band/songs', function(hooks) {
  setupTest(hooks);

  test('isAddingButtonDisabled', function(assert) {
    
    //    let controller = this.owner.lookup('controller:bands/band/songs');
    let controller = this.owner.lookup('controller:bands/band/songs');
    controller.set(
      'newSongTitle',
       'Belenos'
       );

    assert.notOk(controller.get(
      'isAddingButtonDisabled'),
      'The button is not disabled when there is a title'
      );

    controller.set('newSongTitle'
    ,''
    );
    assert.ok(controller.get(
      'isAddingButtonDisabled'),
      'The button is disabled when de title is empty'
      );

  });
});
