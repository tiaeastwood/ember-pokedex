import Model, { attr } from '@ember-data/model';

export default class PokemonModel extends Model {
  @attr abilities;
  @attr base_experience;
  @attr forms;
  @attr game_indices;
  @attr height;
  @attr held_items;
  @attr id;
  @attr is_default;
  @attr location_area_encounters;
  @attr moves;
  @attr name;
  @attr order;
  @attr past_types;
  @attr species;
  @attr sprites;
  @attr stats;
  @attr types;
  @attr weight;
}
