import { moduleForModel, test } from 'ember-qunit';

moduleForModel('title:string', 'Unit | Model | title:string', {
  // Specify the other units that are required for this test.
  needs: ['model:section']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
