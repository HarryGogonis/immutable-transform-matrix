import { expect } from 'chai'
import Matrix from '../src/index.js'
const { describe, it } = global

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
    const [a, b, c, d, e, f] = [1, 2, 3, 4, 5, 6]
    const matrix = new Matrix(a, b, c, d, e, f)
    expect(matrix.get('a')).to.be.equal(a)
    expect(matrix.get('b')).to.be.equal(b)
    expect(matrix.get('c')).to.be.equal(c)
    expect(matrix.get('d')).to.be.equal(d)
    expect(matrix.get('e')).to.be.equal(e)
    expect(matrix.get('f')).to.be.equal(f)
  })
})

describe('scale', () => {
  it('should scale the Matrix', () => {
    const matrix = new Matrix(1, 1, 1, 1, 1, 1).scale(2, 3)
    expect(matrix.get('a')).to.be.equal(2)
    expect(matrix.get('b')).to.be.equal(2)
    expect(matrix.get('c')).to.be.equal(3)
    expect(matrix.get('d')).to.be.equal(3)
    expect(matrix.get('e')).to.be.equal(1)
    expect(matrix.get('f')).to.be.equal(1)
  })

  it('should scale the Matrix', () => {
    const matrix = new Matrix(1, 1, 1, 1, 1, 1).scale(2)
    expect(matrix.get('a')).to.be.equal(2)
    expect(matrix.get('b')).to.be.equal(2)
    expect(matrix.get('c')).to.be.equal(2)
    expect(matrix.get('d')).to.be.equal(2)
    expect(matrix.get('e')).to.be.equal(1)
    expect(matrix.get('f')).to.be.equal(1)
  })
})

describe('translate', () => {
  it('should translate the Matrix', () => {
    const matrix = new Matrix().translate(2, 4)
    expect(matrix.get('a')).to.be.equal(1)
    expect(matrix.get('b')).to.be.equal(0)
    expect(matrix.get('c')).to.be.equal(0)
    expect(matrix.get('d')).to.be.equal(1)
    expect(matrix.get('e')).to.be.equal(2)
    expect(matrix.get('f')).to.be.equal(4)
  })
})
