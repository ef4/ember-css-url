ember-css-url
==============================================================================

A helper for safely embedding URLs in style properties. Avoids CSS XSS exposure and sanitizes user-provided URLs.

```hbs
<div style={{css-url "background-image" @user.avatarURL}} ></div>
```

```html
<div style='background-image: url("https://example.com/avatar.png")' ></div>
```



Compatibility
------------------------------------------------------------------------------

* Ember.js v3.16 or above
* Embroider or ember-auto-import v2
* Node.js v14 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-css-url
```


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
