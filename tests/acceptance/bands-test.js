import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';


module('Acceptance | Bands', function(hooks) {
  
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.afterEach(function() {
    server.db.emptyData();
  });

  test('List bands', async function(assert) {
    server.create('band', { name: 'Radiohead' });
    server.create('band', { name: 'Long Distance Calling'});
    await visit ('/bands');

    let bandLinks=this.element.querySelectorAll('.rr-band-link');
    assert.equal(bandLinks.length, 2,"All band links are rendered");
    assert.ok(bandLinks[0].textContent.includes('Radiohead'),'First band link contains the name');
    assert.ok(bandLinks[1].textContent.includes('Long Distance Calling'),'The other band link contains the bad name'); 

  });

  test('Create a band',async function(assert) {
    server.create('band', { name: 'Royal Blood'  });
    debugger
    await visit('/bands');
    await click('ml1');//este esta malaso
    await fillIn('.rr-input', 'Caspian');
    await click('.rr-action-button');

    let bandLinks = this.element.querySelectorAll('.rr-band-link');
    assert.equal(bandLinks.length, 2 , 'All band links are rendered', 'A new band link is rendered');
    assert.ok(bandLinks[1].textContent.includes('Caspian'), 'The new band link is rendered');
    assert.ok(this.element.querySelector('.navbar-item > .active').textContent.includes('Songs'),'The Songs tab is active');
  });
});
