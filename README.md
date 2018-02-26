# ember-css-url

A helper for safely embedding URLs in style properties. Avoids CSS XSS exposure and sanitizes user-provided URLs.

```hbs
<div style={{css-url "background-image" user.avatarURL}} ></div>
```

```html
<div style='background-image: url("https://example.com/avatar.png")' ></div>
```


## Installation

* `git clone <repository-url>` this repository
* `cd ember-css-url`
* `yarn install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `yarn test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
