# Admonition plug-in

A simple admonition plugin for markdown-it

> DISCLAIMER: This plugin do not provide CSS. Only transforms Markdown to HTML. Providing a CSS stylesheet is in your hand.
> Cool examples of CSS for markdown-it-admonition can be found at [docarys](http://docs.docarys.io) documenation

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
| note       |
| abstract   |
| info       |
| tip        |
| success    |
| question   |
| warning    |
| failure    |
| danger     |
| bug        |
| example    |
| quote"     |

> if no title is specified, adminition type will be used as default title.