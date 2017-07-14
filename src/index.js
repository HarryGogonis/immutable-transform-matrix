import { Map } from 'extendable-immutable'

/**
 * A library for creating affine transform matrix (3x3) that are Immutable.
 * These matrices can be used for matrix calcuations on SVG CTMs (current transform matrix).
 *
 * @module immutable-transform-matrix
 */

/**
 * @class Matrix
 * @extends Immutable.Map
 */
class Matrix extends Map {
  /**
   * Construct a Matrix. Creates an Identiy matrix if no params are supplied.
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @param {number} d
   * @param {number} e
   * @param {number} f
   */
  constructor (...args) {
    if (args.length > 0) {
      super({
        a: args[0],
        b: args[1],
        c: args[2],
        d: args[3],
        e: args[4],
        f: args[5]
      })
    } else {
      super({
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        e: 0,
        f: 0
      })
    }
  }

  /**
   * Construct a new Matrix constructed from an SVGMatrix
   * @param {SVGMatrix} ctm
   * @return {Matrix}
   */
  static fromCTM (ctm) {
    const {a, b, c, d, e, f} = ctm
    return new Matrix(a, b, c, d, e, f)
  }

  /**
   * Multiplies current matrix with new matrix values.
   * @param {number} a2 - scale x
   * @param {number} b2 - shear y
   * @param {number} c2 - shear x
   * @param {number} d2 - scale y
   * @param {number} e2 - translate x
   * @param {number} f2 - translate y
   * @return {Matrix}
   */
  transform (a2, b2, c2, d2, e2, f2) {
    const a1 = this.get('a')
    const b1 = this.get('b')
    const c1 = this.get('c')
    const d1 = this.get('d')
    const e1 = this.get('e')
    const f1 = this.get('f')

    return this.withMutations(matrix => matrix
      .set('a', (a1 * a2) + (c1 * b2))
      .set('b', (b1 * a2) + (d1 * b2))
      .set('c', a1 * c2 + c1 * d2)
      .set('d', b1 * c2 + d1 * d2)
      .set('e', a1 * e2 + c1 * f2 + e1)
      .set('f', b1 * e2 + d1 * f2 + f1)
    )
  }

  /**
   * Scales current matrix accumulative.
   * If the second param is ommitted it scale uniformly.
   * @param {number} sx - scale factor x (1 does nothing)
   * @param {number} [sy] - scale factor y (1 does nothing)
   * @return {Matrix}
   */
  scale (...args) {
    const sx = args[0]
    let sy = sx
    if (args.length > 1) {
      sy = args[1]
    }
    return this.transform(sx, 0, 0, sy, 0, 0)
  }

  /**
   * Translate current matrix accumulative.
   * @param {number} tx - translation for x
   * @param {number} ty - translation for y
   * @return {Matrix}
   */
  translate (tx, ty) {
    return this.transform(1, 0, 0, 1, tx, ty)
  }

  /**
   * Rotates current matrix accumulative by angle.
   * @param {number} angle - angle in radians
   * @return {Matrix}
   */
  rotate (angle) {
    var cos = Math.cos(angle)
    var sin = Math.sin(angle)
    return this.transform(cos, sin, -sin, cos, 0, 0)
  }

  /**
   * Helper method to make a rotation based on an angle in degrees.
   * @param {number} angle - angle in degrees
   * @return {Matrix}
   */
  rotateDeg (angle) {
    return this.rotate(angle * Math.PI / 180)
  }

  /**
   * Multiplies current matrix with an other matrix.
   * @param {Matrix} m - the other matrix
   * @return {Matrix}
   */
  multiply (matrix) {
    return this.transform(
      matrix.get('a'),
      matrix.get('b'),
      matrix.get('c'),
      matrix.get('d'),
      matrix.get('e'),
      matrix.get('f')
    )
  }

  /**
   * @return {boolean} true if identity (no transforms applied)
   */
  isIdentity () {
    return this.get('a') === 1 &&
      this.get('b') === 0 &&
      this.get('c') === 0 &&
      this.get('d') === 1 &&
      this.get('e') === 0 &&
      this.get('f') === 0
  }

  /**
   * @return {string}
   */
  toString () {
    const values = [
      this.get('a'),
      this.get('b'),
      this.get('c'),
      this.get('d'),
      this.get('e'),
      this.get('f')
    ]
    return `matrix(${values.join()})`
  }

  /**
   * @return {number} determinant of the current matrix
   */
  determinant () {
    return (this.get('a') * this.get('d')) - (this.get('b') * this.get('c'))
  }

  /**
   * @return {boolean} true if matrix is invertible
   */
  isInvertible () {
    return this.determinant() !== 0
  }

  /**
   * @return {Matrix} inverse of the current matrix.
   * @throws Will throw an error if the matrix is not invertable
   */
  inverse () {
    if (this.isIdentity()) {
      return new Matrix()
    }

    if (!this.isInvertible()) {
      throw new Error('Matrix is not invertible.')
    }

    const dt = this.determinant()
    const a = this.get('a')
    const b = this.get('b')
    const c = this.get('c')
    const d = this.get('d')
    const e = this.get('e')
    const f = this.get('f')

    return this.withMutations(matrix => matrix
      .set('a', d / dt)
      .set('b', -b / dt)
      .set('c', -c / dt)
      .set('d', a / dt)
      .set('e', ((c * f) - (d * e)) / dt)
      .set('f', -((a * f) - (b * e)) / dt)
    )
  }

  /**
   * @param {Matrix} m - matrix divisor
   * @return {Matrix}
   * @throws Will throw if m is not invertible or not a Matrix
   */
  divide (m) {
    if (!(m instanceof Matrix)) {
      throw new Error('Must pass a Matrix to divide.')
    }

    if (!m.isInvertible()) {
      throw new Error('Input matrix is not invertible.')
    }

    const inverse = m.inverse()
    return this.transform(
      inverse.get('a'),
      inverse.get('b'),
      inverse.get('c'),
      inverse.get('d'),
      inverse.get('e'),
      inverse.get('f')
    )
  }

  /**
   * Apply current matrix to x and y point.
   *
   * @param {number} x - value for x
   * @param {number} y - value for y
   * @returns {{x: number, y: number}} A new transformed point object
   */
  applyToPoint (x, y) {
    return {
      x: (x * this.get('a')) + (y * this.get('c')) + this.get('e'),
      y: (x * this.get('b')) + (y * this.get('d')) + this.get('f')
    }
  }
}

export default Matrix
