/**
 * dirname
 * https://github.com/assemble/dirname
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

'use strict';

// node_modules
var expect = require('chai').expect;

// node
var path = require('path');

// Local libs
var dirname = require('../');

/**
 * Tests
 */

describe('dirname', function() {

  it('should bind to local test directory', function() {
    var local = dirname(__dirname);
    var expected = fs.readFileSync(path.join(__dirname, 'test.js'), 'utf8');
    var actual = fs.readFileSync(local.dir('test.js'), 'utf8');
    expect(actual).to.eql(expected);
  });

});