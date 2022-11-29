import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    let detailedPokemon = [];

    const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    const pokes = await res.json();
    const data = pokes.results;

    for (const pokemon of data) {
      const res = await fetch(`${pokemon.url}`);
      const pokeData = await res.json();
      detailedPokemon.push(pokeData);
    }

    console.log(detailedPokemon);
    return detailedPokemon;
  }
}
