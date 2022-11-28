import { module, test } from 'qunit';
import { setupTest } from 'emberdex/tests/helpers';

module('Unit | Route | pokemon', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:pokemon');
    assert.ok(route);
  });
});
