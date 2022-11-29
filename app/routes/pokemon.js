import Route from '@ember/routing/route';

export default class PokemonRoute extends Route {
  async model(params) {
    // I have passed the pokemon's name as the param (I have specified name in the route and name exists on the pokemon model i have created)
    console.log('params -->', { params });

    const { name } = params;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemonData = await response.json();

    // detailed Pokemon data
    console.log('data --->', pokemonData);

    return pokemonData;
  }
}
