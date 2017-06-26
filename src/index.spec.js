import Matrix from '../src/index.js'
import { Map } from 'immutable'
const { describe, it, expect } = global

const mockMatrix = new Matrix(1, 2, 3, 4, 5, 6)

describe('constructor', () => {
  it('should extend an Immutable Map', () => {
    const matrix = mockMatrix
    expect(matrix instanceof Map).toBe(true)
  })

  it('should create an identity Matrix', () => {
    const matrix = new Matrix()
    expect(matrix.get('a')).toBe(1)
    expect(matrix.get('b')).toBe(0)
    expect(matrix.get('c')).toBe(0)
    expect(matrix.get('d')).toBe(1)
    expect(matrix.get('e')).toBe(0)
    expect(matrix.get('f')).toBe(0)
  })

  it('should create the specified Matrix', () => {
    const matrix = mockMatrix
    expect(matrix.get('a')).toBe(1)
    expect(matrix.get('b')).toBe(2)
    expect(matrix.get('c')).toBe(3)
    expect(matrix.get('d')).toBe(4)
    expect(matrix.get('e')).toBe(5)
    expect(matrix.get('f')).toBe(6)
  })
})

describe('scale', () => {
  it('should scale the Matrix', () => {
    const matrix = mockMatrix.scale(2, 3)
    expect(matrix.get('a')).toBe(2)
    expect(matrix.get('b')).toBe(4)
    expect(matrix.get('c')).toBe(9)
    expect(matrix.get('d')).toBe(12)
    expect(matrix.get('e')).toBe(5)
    expect(matrix.get('f')).toBe(6)
  })

  it('should scale the Matrix', () => {
    const matrix = mockMatrix.scale(2)
    expect(matrix.get('a')).toBe(2)
    expect(matrix.get('b')).toBe(4)
    expect(matrix.get('c')).toBe(6)
    expect(matrix.get('d')).toBe(8)
    expect(matrix.get('e')).toBe(5)
    expect(matrix.get('f')).toBe(6)
  })
})

describe('translate', () => {
  it('should translate the Matrix', () => {
    const matrix = mockMatrix.translate(2, 4)
    expect(matrix.get('a')).toBe(1)
    expect(matrix.get('b')).toBe(2)
    expect(matrix.get('c')).toBe(3)
    expect(matrix.get('d')).toBe(4)
    expect(matrix.get('e')).toBe(19)
    expect(matrix.get('f')).toBe(26)
  })
})

describe('rotate', () => {
  it('should rotate the Matrix', () => {
    const matrix = mockMatrix.rotate(1)
    expect(matrix.get('a')).toBe(3.064715260291829)
    expect(matrix.get('b')).toBe(4.4464885509678655)
    expect(matrix.get('c')).toBe(0.7794359327965228)
    expect(matrix.get('d')).toBe(0.47826725385676605)
    expect(matrix.get('e')).toBe(5)
    expect(matrix.get('f')).toBe(6)
  })
})

describe('rotateDeg', () => {
  it('should rotate the Matrix', () => {
    const matrix = mockMatrix.rotateDeg(180)
    expect(matrix.get('a')).toBe(-0.9999999999999997)
    expect(matrix.get('b')).toBe(-1.9999999999999996)
    expect(matrix.get('c')).toBe(-3)
    expect(matrix.get('d')).toBe(-4)
    expect(matrix.get('e')).toBe(5)
    expect(matrix.get('f')).toBe(6)
  })
})

describe('multiply', () => {
  it('should multiply the Matrix', () => {
    const matrix = mockMatrix.multiply(mockMatrix)
    expect(matrix.get('a')).toBe(7)
    expect(matrix.get('b')).toBe(10)
    expect(matrix.get('c')).toBe(15)
    expect(matrix.get('d')).toBe(22)
    expect(matrix.get('e')).toBe(28)
    expect(matrix.get('f')).toBe(40)
  })
})

describe('isIdentity', () => {
  expect(mockMatrix.isIdentity()).toBe(false)
  expect(new Matrix().isIdentity()).toBe(true)
})

describe('toString', () => {
  it('should return a matrix string', () => {
    let str = mockMatrix.toString()
    expect(str).toBe('matrix(1,2,3,4,5,6)')

    str = new Matrix(6, 5, 4, 3, 2, 1).toString()
    expect(str).toBe('matrix(6,5,4,3,2,1)')
  })
})

describe('determinant', () => {
  expect(mockMatrix.determinant()).toBe(-2)
  expect(new Matrix().determinant()).toBe(1)
  expect(new Matrix(1, 1, 1, 1, 0, 0).determinant()).toBe(0)
})

describe('isInvertable', () => {
  expect(mockMatrix.isInvertible()).toBe(true)
  expect(new Matrix().isInvertible()).toBe(true)
  expect(new Matrix(1, 1, 1, 1, 0, 0).isInvertible()).toBe(false)
})

describe('inverse', () => {
  const mockMatrixInverted = new Matrix(-2, 1, 1.5, -0.5, 1, -2)

  expect(mockMatrix.inverse().equals(mockMatrixInverted)).toBe(true)
  expect(new Matrix().inverse().equals(new Matrix())).toBe(true)
  expect(() => {
    new Matrix(1, 1, 1, 1, 0, 0).inverse()
  }).toThrow()
})
