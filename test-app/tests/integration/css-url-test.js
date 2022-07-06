import { module, test } from 'qunit';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'test-app/tests/helpers';
import { render } from '@ember/test-helpers';
import cssURL from 'ember-css-url';

module('Integration | helper | css-url', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('avatar', '/picture.png');
    await render(
      hbs`<div class="example" style={{css-url "background-image" this.avatar}}></div>`
    );

    let style = this.element.querySelector('.example').getAttribute('style');
    assert.strictEqual(style, `background-image: url("/picture.png")`);
  });

  test('it rejects any funny protocols', async function (assert) {
    assert.throws(() => {
      cssURL('background-image', 'weird://foo');
    }, /disallowed protocol/);
  });

  test('it encodes any quotes', function (assert) {
    assert.strictEqual(
      cssURL('background-image', 'foo"bar').toString(),
      'background-image: url("foo%22bar")'
    );
  });

  test("it doesn't double-encode URLs that already have encoding", function (assert) {
    assert.strictEqual(
      cssURL('background-image', '/?title=I%20%22Think%22%20So').toString(),
      'background-image: url("/?title=I%20%22Think%22%20So")'
    );
  });
});
