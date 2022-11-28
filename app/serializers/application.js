import JSONAPISerializer from '@ember-data/serializer/json-api';
import JSONSerializer from '@ember-data/serializer/json-api';

export default class ApplicationSerializer extends JSONAPISerializer {
  //   normalizeFindAllResponse() {
  //     const payload = super.normalizeFindAllResponse(...arguments);
  //     let payloadResponse;
  //     let arr = [];
  //     payload.results.map((el) => {
  //       const item = {
  //         id: el.name,
  //         name: el.name,
  //         url: el.url,
  //       };
  //       arr.push(item);
  //     });
  //     payloadResponse = { data: arr };
  //     console.log(payloadResponse);
  //     return payloadResponse;
  //   }
}
