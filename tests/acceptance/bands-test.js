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
    debugger;
    server.create('band', { name: 'Radiohead' });
    server.create('band', { name: 'Long Distance Calling'});
    await visit ('/bands');

    let bandLinks=this.element.querySelectorAll('[data-test-band-link]');
    assert.equal(bandLinks.length, 2,"All band links are rendered");
    assert.ok(bandLinks[0].textContent.includes('Radiohead'),'First band link contains the name');
    assert.ok(bandLinks[1].textContent.includes('Long Distance Calling'),'The other band link contains the bad name'); 

  });
/*
  test('Create a band',async function(assert) {
    debugger;
    server.create('band', { name: 'Royal Blood'  });
    
    await visit('/bands');
    await click('[data-test-new-band-label]');//este esta malaso (se reseulve con los eber install ember-test-selectors)
    await fillIn('[data-test-new-band-input]', 'Caspian'); 
    await click('[data-test-new-band-button]');

    let bandLinks = this.element.querySelectorAll('[data-test-new-band-link]');
    assert.equal(bandLinks.length, 2 , 'All band links are rendered', 'A new band link is rendered');

    assert.ok(bandLinks[1].textContent.includes('Caspian'), 'The new band link is rendered');
  });*/
});
