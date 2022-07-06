import { helper } from '@ember/component/helper';
import cssUrl from '../index';
function asHelper(params) {
  return cssUrl(...params);
}
export default helper(asHelper);
