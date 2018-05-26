# Admonition plug-in

A simple admonition plugin for markdown-it

This plugin has been adapted for use with boostnote. Credit to @Docarys for providiungt the full plugin. This variant reduced the number of admonition types from the original 12 down to 6. 

## Usage

To use this plugin, simply:

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
