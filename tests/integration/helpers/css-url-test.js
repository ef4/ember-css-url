import { module, test } from 'qunit';
import hbs from 'htmlbars-inline-precompile';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import cssURL from 'ember-css-url';

module('css-url', 'helper:css-url', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('avatar', '/picture.png');
    await render(hbs`<div class="example" style={{css-url "background-image" avatar}}></div>`);

    let style = this.element.querySelector('.example').getAttribute('style');
    assert.equal(style, `background-image: url("/picture.png")`);
  });

  test('it rejects any funny protocols', async function(assert) {
    assert.throws(() => {
      cssURL('background-image', 'weird://foo');
    }, /disallowed protocol/);
  });

  test('it encodes any quotes', async function(assert) {
    assert.equal(cssURL('background-image', 'foo"bar').toString(), 'background-image: url("foo%22bar")');
  });

});
