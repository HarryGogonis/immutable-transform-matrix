[![Build Status](https://travis-ci.org/HarryGogonis/immutable-transform-matrix.svg?branch=master)](https://travis-ci.org/HarryGogonis/immutable-transform-matrix)
[![Coverage Status](https://coveralls.io/repos/github/HarryGogonis/immutable-transform-matrix/badge.svg?branch=master)](https://coveralls.io/github/HarryGogonis/immutable-transform-matrix?branch=master)
[![Dependancy Status](https://david-dm.org/harrygogonis/immutable-transform-matrix/status.svg)](https://david-dm.org/harrygogonis/immutable-transform-matrix)

# immutable-transform-matrix

A library for creating affine transform matrix (3x3) that are Immutable.
These matrices can be used for matrix calcuations on SVG CTMs (current transform matrix).

## [API Documentation](docs/)

## Install

```sh
yarn add immutable-transform-matrix
```

## Example

```js
import { Matrix } from 'immutable-transform-matrix'
import { isImmutable } from 'immutable'
const m1 = new Matrix()
isImmutable(m1) // true
const m2 = m1.translate(10, 20)
```
