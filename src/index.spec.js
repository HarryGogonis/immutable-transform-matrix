import { expect } from 'chai'
import Matrix from '../src/index.js'
const { describe, it } = global

const mockMatrix = new Matrix(1, 2, 3, 4, 5, 6)

describe('constructor', () => {
  it('should create an identity Matrix', () => {
    const matrix = new Matrix()
    expect(matrix.get('a')).to.be.equal(1)
    expect(matrix.get('b')).to.be.equal(0)
    expect(matrix.get('c')).to.be.equal(0)
    expect(matrix.get('d')).to.be.equal(1)
    expect(matrix.get('e')).to.be.equal(0)
    expect(matrix.get('f')).to.be.equal(0)
  })

  it('should create the specified Matrix', () => {
    const matrix = mockMatrix
    expect(matrix.get('a')).to.be.equal(1)
    expect(matrix.get('b')).to.be.equal(2)
    expect(matrix.get('c')).to.be.equal(3)
    expect(matrix.get('d')).to.be.equal(4)
    expect(matrix.get('e')).to.be.equal(5)
    expect(matrix.get('f')).to.be.equal(6)
  })
})

describe('scale', () => {
  it('should scale the Matrix', () => {
    const matrix = mockMatrix.scale(2, 3)
    expect(matrix.get('a')).to.be.equal(2)
    expect(matrix.get('b')).to.be.equal(4)
    expect(matrix.get('c')).to.be.equal(9)
    expect(matrix.get('d')).to.be.equal(12)
    expect(matrix.get('e')).to.be.equal(5)
    expect(matrix.get('f')).to.be.equal(6)
  })

  it('should scale the Matrix', () => {
    const matrix = mockMatrix.scale(2)
    expect(matrix.get('a')).to.be.equal(2)
    expect(matrix.get('b')).to.be.equal(4)
    expect(matrix.get('c')).to.be.equal(6)
    expect(matrix.get('d')).to.be.equal(8)
    expect(matrix.get('e')).to.be.equal(5)
    expect(matrix.get('f')).to.be.equal(6)
  })
})

describe('translate', () => {
  it('should translate the Matrix', () => {
    const matrix = mockMatrix.translate(2, 4)
    expect(matrix.get('a')).to.be.equal(1)
    expect(matrix.get('b')).to.be.equal(2)
    expect(matrix.get('c')).to.be.equal(3)
    expect(matrix.get('d')).to.be.equal(4)
    expect(matrix.get('e')).to.be.equal(19)
    expect(matrix.get('f')).to.be.equal(26)
  })
})

describe('rotate', () => {
  it('should rotate the Matrix', () => {
    const matrix = mockMatrix.rotate(1)
    expect(matrix.get('a')).to.be.equal(3.064715260291829)
    expect(matrix.get('b')).to.be.equal(4.4464885509678655)
    expect(matrix.get('c')).to.be.equal(0.7794359327965228)
    expect(matrix.get('d')).to.be.equal(0.47826725385676605)
    expect(matrix.get('e')).to.be.equal(5)
    expect(matrix.get('f')).to.be.equal(6)
  })
})

describe('rotateDeg', () => {
  it('should rotate the Matrix', () => {
    const matrix = mockMatrix.rotateDeg(180)
    expect(matrix.get('a')).to.be.equal(-0.9999999999999997)
    expect(matrix.get('b')).to.be.equal(-1.9999999999999996)
    expect(matrix.get('c')).to.be.equal(-3)
    expect(matrix.get('d')).to.be.equal(-4)
    expect(matrix.get('e')).to.be.equal(5)
    expect(matrix.get('f')).to.be.equal(6)
  })
})
