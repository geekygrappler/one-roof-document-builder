import { moduleForModel, test } from 'ember-qunit';

moduleForModel('document', 'Unit | Model | document', {
  // Specify the other units that are required for this test.
  needs: ['model:section']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});