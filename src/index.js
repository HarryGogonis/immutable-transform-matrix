import { Map } from 'extendable-immutable'
/**
Notes:
- Is this a sparce matrix?
*/

/**
 * An immutable Matrix
 */
export default class Matrix extends Map {
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
}
