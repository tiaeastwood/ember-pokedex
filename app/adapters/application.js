import JSONAPIAdapter from '@ember-data/adapter/json-api';
import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends JSONAPIAdapter {
  // host = 'https://pokeapi.co';
  // namespace = 'api/v2/pokemon';
  // buildURL(...args) {
  //   //return `${super.buildURL(...args)}`;
  //   return this.host + '/' + this.namespace;
  // }
}

// The adapter builds the correct url that we need to request for our api
// by default it would be something like /rentals which isnt a full url and results in a 404
// the adaptor changes it to something like /api/rentals/grand-old-mansion and appends .json to the end

// build url will append a pluralised version of the route to the endpoint unless you override it
