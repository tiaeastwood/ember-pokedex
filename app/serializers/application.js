import JSONAPISerializer from '@ember-data/serializer/json-api';
import JSONSerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  //   normalizeFindAllResponse() {
  //     const payload = super.normalizeFindAllResponse(...arguments);

  //     const res = { data: payload.results };

  //     console.log('res -->', res.data);

  //     return res;
  //   }

  //primaryKey: 'name',

  normalizeFindAllResponse() {
    const payload = super.normalizeFindAllResponse(...arguments);

    //console.log(payload.results);

    return {
      data: payload.results.map((el) => {
        //console.log(el);

        const item = {
          id: el.name,
          attributes: {
            name: el.name,
            url: el.url,
          },
        };

        console.log('item -->', item);

        return item;
      }),
    };
  }
}
