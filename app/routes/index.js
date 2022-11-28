import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const pokes = await response.json();

    const data = pokes.results;

    return data;
  }
}
