import { helper } from '@ember/component/helper';

const formatPokemonName = (name) => {
  return name.charAt(0).toUpperCase;
};

export default helper(formatPokemonName);
