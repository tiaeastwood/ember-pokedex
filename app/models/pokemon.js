import Model, { attr } from '@ember-data/model';

export default class PokemonModel extends Model {
  @attr name;
}
