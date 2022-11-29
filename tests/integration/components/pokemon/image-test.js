import { module, test } from 'qunit';
import { setupRenderingTest } from 'emberdex/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pokemon/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(
      hbs`<Pokemon::Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' alt='a picture of bulbasaur'/>`
    );

    assert
      .dom('img')
      .exists()
      .hasAttribute(
        'src',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
      )
      .hasAttribute('alt', 'a picture of bulbasaur');
  });
});


