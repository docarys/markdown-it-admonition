[![Travis][travis-image]][travis-link]
[![npm][npm-image]][npm-link]


[travis-image]: https://travis-ci.org/docarys/markdown-it-admonition.svg?branch=master
[travis-link]: https://travis-ci.org/docarys/markdown-it-admonition
[npm-image]: https://img.shields.io/npm/dt/markdown-it-admonition.svg
[npm-link]: https://www.npmjs.com/package/markdown-it-admonition

# Admonition plug-in

A simple admonition plugin for markdown-it

## Usage

To use this plugin, simply:

```bash
npm install markdown-it-adminition --save
```

```js
    var markdown = require("markdown-it")({html: true})        
        .use(require("markdown-it-adminition"));
```

```md
!!! note This is the admonition title
This is the admonition body
!!!
````

This will output the following HTML

```html
<div class="admonition note">
<p class="admonition-title">This is the admonition title</p>
<p>This is the admonition body</p>
</div>
```

The following adminition types, supported by Docarys, are recognized by this plugin:

 | Type       |
 | -----------|
 | note       |
 | abstract   |
 | info       |
 | tip        |
 | success    |
 | question   |
 | warning    |
 | failure    |
 | danger     |
 | bug        |
 | example    |
 | quote"     |
 
 You can customize the types you want to use by passing it as opts.

> if no title is specified, admonition type will be used as default title.