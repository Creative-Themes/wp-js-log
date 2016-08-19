## Synopsis

A simple way of doing logging on the JavaScript side in WordPress.

## Code Example

```javascript
log = require('ct-wp-js-log');
log('simple log');
log.log('another one');
log.error('error log');
```

## Motivation

We wanted a _very_ simple way of doing logs, while checking for the `WP_DEBUG`
global variable. And we got this as a result.

## Installation

Don't forget to localize your server side `WP_DEBUG` constant.
```php
if (defined('WP_DEBUG')) {
	wp_localize_script(
		'your-handle',
		'WP_DEBUG',
		!! defined('WP_DEBUG')
	);
}
```

