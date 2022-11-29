import { module, test } from 'qunit';
import { setupRenderingTest } from 'emberdex/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | pokemon/detailed', function (hooks) {
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
        order: 1,
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

    await render(hbs`<Pokemon::Detailed @pokemon={{this.pokemon}}/>`);

    assert.dom('article img').exists();

    assert.dom('article .details h2').includesText('bulbasaur');

    assert.dom('article .details p').includesText('Pokedex No: 1');
  });
});
