import { module, test } from 'qunit';
import { setupRenderingTest } from 'emberdex/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | footer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Footer />`);

    assert.dom(this.element).hasText('Tia Eastwood 2022');
  });
});
