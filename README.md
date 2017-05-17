<a name="module_immutable-transform-matrix"></a>

## immutable-transform-matrix
A library for creating affine transform matrix (3x3) that are Immutable.
These matrices can be used for matrix calcuations on SVG CTMs (current transform matrix).

**Example**  
```js
import { Matrix } from 'immutable-transform-matrix'
import { isImmutable } from 'immutable'
const m1 = new Matrix()
isImmutable(m1) // true
const m2 = m1.translate(10, 20)
```

* [immutable-transform-matrix](#module_immutable-transform-matrix)
    * [~Matrix](#module_immutable-transform-matrix..Matrix) ⇐ <code>Immutable.Map</code>
        * _instance_
            * [.transform(a2, b2, c2, d2, e2, f2)](#module_immutable-transform-matrix..Matrix+transform) ⇒ <code>Matrix</code>
            * [.scale(sx, [sy])](#module_immutable-transform-matrix..Matrix+scale) ⇒ <code>Matrix</code>
            * [.translate(tx, ty)](#module_immutable-transform-matrix..Matrix+translate) ⇒ <code>Matrix</code>
            * [.rotate(angle)](#module_immutable-transform-matrix..Matrix+rotate)
            * [.rotateDeg(angle)](#module_immutable-transform-matrix..Matrix+rotateDeg)
        * _static_
            * [.Matrix](#module_immutable-transform-matrix..Matrix.Matrix)
                * [new Matrix(a, b, c, d, e, f)](#new_module_immutable-transform-matrix..Matrix.Matrix_new)

<a name="module_immutable-transform-matrix..Matrix"></a>

### immutable-transform-matrix~Matrix ⇐ <code>Immutable.Map</code>
**Kind**: inner class of [<code>immutable-transform-matrix</code>](#module_immutable-transform-matrix)  
**Extends**: <code>Immutable.Map</code>  

* [~Matrix](#module_immutable-transform-matrix..Matrix) ⇐ <code>Immutable.Map</code>
    * _instance_
        * [.transform(a2, b2, c2, d2, e2, f2)](#module_immutable-transform-matrix..Matrix+transform) ⇒ <code>Matrix</code>
        * [.scale(sx, [sy])](#module_immutable-transform-matrix..Matrix+scale) ⇒ <code>Matrix</code>
        * [.translate(tx, ty)](#module_immutable-transform-matrix..Matrix+translate) ⇒ <code>Matrix</code>
        * [.rotate(angle)](#module_immutable-transform-matrix..Matrix+rotate)
        * [.rotateDeg(angle)](#module_immutable-transform-matrix..Matrix+rotateDeg)
    * _static_
        * [.Matrix](#module_immutable-transform-matrix..Matrix.Matrix)
            * [new Matrix(a, b, c, d, e, f)](#new_module_immutable-transform-matrix..Matrix.Matrix_new)

<a name="module_immutable-transform-matrix..Matrix+transform"></a>

#### matrix.transform(a2, b2, c2, d2, e2, f2) ⇒ <code>Matrix</code>
Multiplies current matrix with new matrix values.

**Kind**: instance method of [<code>Matrix</code>](#module_immutable-transform-matrix..Matrix)  

| Param | Type | Description |
| --- | --- | --- |
| a2 | <code>number</code> | scale x |
| b2 | <code>number</code> | shear y |
| c2 | <code>number</code> | shear x |
| d2 | <code>number</code> | scale y |
| e2 | <code>number</code> | translate x |
| f2 | <code>number</code> | translate y |

<a name="module_immutable-transform-matrix..Matrix+scale"></a>

#### matrix.scale(sx, [sy]) ⇒ <code>Matrix</code>
Scales current matrix accumulative.
If the second param is ommitted it scale uniformly.

**Kind**: instance method of [<code>Matrix</code>](#module_immutable-transform-matrix..Matrix)  

| Param | Type | Description |
| --- | --- | --- |
| sx | <code>number</code> | scale factor x (1 does nothing) |
| [sy] | <code>number</code> | scale factor y (1 does nothing) |

<a name="module_immutable-transform-matrix..Matrix+translate"></a>

#### matrix.translate(tx, ty) ⇒ <code>Matrix</code>
Translate current matrix accumulative.

**Kind**: instance method of [<code>Matrix</code>](#module_immutable-transform-matrix..Matrix)  

| Param | Type | Description |
| --- | --- | --- |
| tx | <code>number</code> | translation for x |
| ty | <code>number</code> | translation for y |

<a name="module_immutable-transform-matrix..Matrix+rotate"></a>

#### matrix.rotate(angle)
Rotates current matrix accumulative by angle.

**Kind**: instance method of [<code>Matrix</code>](#module_immutable-transform-matrix..Matrix)  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>number</code> | angle in radians |

<a name="module_immutable-transform-matrix..Matrix+rotateDeg"></a>

#### matrix.rotateDeg(angle)
Helper method to make a rotation based on an angle in degrees.

**Kind**: instance method of [<code>Matrix</code>](#module_immutable-transform-matrix..Matrix)  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>number</code> | angle in degrees |

<a name="module_immutable-transform-matrix..Matrix.Matrix"></a>

#### Matrix.Matrix
**Kind**: static class of [<code>Matrix</code>](#module_immutable-transform-matrix..Matrix)  
<a name="new_module_immutable-transform-matrix..Matrix.Matrix_new"></a>

##### new Matrix(a, b, c, d, e, f)
Construct a Matrix. Creates an Identiy matrix if no params are supplied.


| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 
| c | <code>number</code> | 
| d | <code>number</code> | 
| e | <code>number</code> | 
| f | <code>number</code> | 

