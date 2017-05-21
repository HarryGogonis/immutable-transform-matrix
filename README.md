[![Build Status](https://travis-ci.org/HarryGogonis/immutable-transform-matrix.svg?branch=master)](https://travis-ci.org/HarryGogonis/immutable-transform-matrix)
[![Coverage Status](https://coveralls.io/repos/github/HarryGogonis/immutable-transform-matrix/badge.svg?branch=master)](https://coveralls.io/github/HarryGogonis/immutable-transform-matrix?branch=master)
[![Dependancy Status](https://david-dm.org/harrygogonis/immutable-transform-matrix/status.svg)](https://david-dm.org/harrygogonis/immutable-transform-matrix)

# immutable-transform-matrix

A library for creating affine transform matrix (3x3) that extend an [Immutable Map](https://facebook.github.io/immutable-js/docs/#/Map).

These matrices can be used for matrix calcuations on SVG CTMs (current transform matrix).

Inspired by [transformation-matrix-js](https://www.npmjs.com/package/transformation-matrix-js)

## [API Documentation](docs/)

## Install

```sh
yarn add immutable-transform-matrix
```

## Examples

```js
import { Matrix } from 'immutable-transform-matrix'
import { isImmutable } from 'immutable'

const m1 = new Matrix()
const m2 = m1.translate(10, 20)

isImmutable(m1) // true
m1.get('e') // 0
m2.get('e') // 10

```

```jsx
const transform = new Matrix()
  .scale(2)
  .toString()

const ViewPort = () => <g transform={transform} />
```
