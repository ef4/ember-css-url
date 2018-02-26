import { htmlSafe } from '@ember/string';

export default function cssUrl(propertyName, url) {
  if (!/^[-a-zA-Z]+$/.test(propertyName )) {
    throw new Error(`Potentially unsafe property name ${propertyName}`);
  }
  if (!url) {
    return;
  }
  let encodedURL = encodeURI(url);
  let m = /^([^:]+):/.exec(encodedURL);
  if (m) {
    let proto = m[1].toLowerCase();
    if (proto !== 'http' && proto !== 'https') {
      throw new Error(`disallowed protocol in css url: ${url}`);
    }
  }
  return htmlSafe(`${propertyName}: url("${encodedURL}")`);
}
