import { click, fillIn } from '@ember/test-helpers';

export async function createBand(name) {
    await click('[data-test-new-band-label]');
    await fillIn('[data-test-new-band-input]',name);
    return click('[data-test-new-band-button]');
}