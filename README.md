# dirname [![NPM version](https://badge.fury.io/js/dirname.png)](http://badge.fury.io/js/dirname)

> {%= description %}

```bash
npm i {%= name %} --save
```
## Usage

```js
var dirname = require('dirname');
var utils = dirname('./utils');
var foo = require(utils.dir('foo'));
var bar = require(utils.dir('bar'));
```

## Methods

### dirname

By default the `dirname()` method expects a string. The string is the path to the directory to bind to.

`dirname()` returns an object with one method called `dir()`. `dir()` is bound to the path provided earlier.

Use `dir()` in places that you would normally use `path.join()` but it will start from the provided path

## Authors

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/jonschlinkert)


## License
Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
Released under the MIT license

***

[package.json]: https://npmjs.org/doc/json.html
