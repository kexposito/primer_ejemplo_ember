import { module, test } from 'qunit';
import { visit, } from '@ember/test-helpers';//click, fillIn 
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { createBand } from 'rarwe/tests/helpers/custom-helpers';

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
    /*
    forma 1
    let bandLinks=this.element.querySelectorAll('[data-test-band-link]');
    assert.equal(bandLinks.length, 2,"All band links are rendered");
    assert.ok(bandLinks[0].textContent.includes('Radiohead'),'First band link contains the name');
    assert.ok(bandLinks[1].textContent.includes('Long Distance Calling'),'The other band link contains the bad name'); 
   */
  assert.dom('[data-test-band-link]').exists({ count: 2}, 'All band link are rendered');
  assert.dom('[data-test-band-link]:first-child').hasText("Radiohead", 'The forst band link contains the band name');
  assert.dom('[data-test-band-list-item]:last-child').hasText("Long Distance Calling",'The other band link contains the band name');
  });
 
  test('Create a band',async function(assert) {

    server.create('band', { name: 'Royal Blood'  });
    await visit('/bands');
    /* cambio 2 
    await click('[data-test-new-band-label]');
    await fillIn('[data-test-new-band-input]', 'Caspian'); 
    await click('[data-test-new-band-button]');
    */
    await createBand('Caspian');
    
    /*
    forma 1
    let bandLinks = this.element.querySelectorAll('[data-test-band-link]');
    
    
    assert.equal(bandLinks.length, 2 , 'All band links are rendered', 'A new band link is rendered');
    assert.ok(bandLinks[1].textContent.includes('Caspian'), 'The new band link is rendered');
   // assert.ok(this.element.querySelector('[data-test-band-nav-item] > .active').textContent.includes('Songs'), 'The Songs tab is active');*/
   assert.dom('[data-test-band-list-item]').exists({ count: 2 }, 'A new band link is rendered');
   assert.dom('[data-test-band-list-item]:last-child').hasText('Caspian','The new band link is rendered as the last item');
   assert.dom('[data-test-band-nav-item] > .active').hasText('Songs','The Song tab is active');
  });/**/
});
