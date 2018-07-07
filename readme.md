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

The following adminition types are recognized by this plugin:

| Type       |
| -----------|
|  note | 
| hint|
| attention |
| caution |
| danger |
| error |

> if no title is specified, admonition type will be used as default title.
