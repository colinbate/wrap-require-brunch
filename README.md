# wrap-require-brunch

A brunch plugin.

Wraps a require statement which requires a particular filetype, making it a no-op. This can be used to import a CSS file from an NPM package without leaving a dangling module reference to cause a runtime error.

## Configuration

Accepts two possible options:

### `pattern`

Which files to match to search for the require statements in. By default, looks at: `.js`, `.jsx`, `.ts`, `.tsx`

### `requireExt`

Which extension being required should we search for. Defaults to `css`.