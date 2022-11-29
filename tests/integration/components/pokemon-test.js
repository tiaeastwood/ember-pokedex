import { module, test } from 'qunit';
import { setupRenderingTest } from 'emberdex/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pokemon', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.setProperties({
      pokemon: {
        abilities: [
          {
            ability: {
              name: 'overgrow',
              url: 'https://pokeapi.co/api/v2/ability/65/',
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: 'chlorophyll',
              url: 'https://pokeapi.co/api/v2/ability/34/',
            },
            is_hidden: true,
            slot: 3,
          },
        ],
        base_experience: 64,
        name: 'bulbasaur',
        height: 7,
        id: 1,
        moves: [{}, {}, {}],
        sprites: {},
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        weight: 69,
      },
    });

    await render(hbs`<Pokemon @pokemon={{this.pokemon}}/>`);

    assert.dom('.pokemon-card h3').includesText('bulbasaur');
  });
});
