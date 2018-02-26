import { helper } from '@ember/component/helper';
import cssUrl from 'ember-css-url';
function asHelper(params) {
  return cssUrl(...params);
}
export default helper(asHelper);
