<a name="module_immutable-transform-matrix"></a>

## immutable-transform-matrix
A library for creating affine transform matrix (3x3) that are Immutable.
These matrices can be used for matrix calcuations on SVG CTMs (current transform matrix).


* [immutable-transform-matrix](#module_immutable-transform-matrix)
    * [~Matrix](#module_immutable-transform-matrix..Matrix) ⇐ <code>Immutable.Map</code>
        * _instance_
            * [.transform(a2, b2, c2, d2, e2, f2)](#module_immutable-transform-matrix..Matrix+transform) ⇒ <code>Matrix</code>
            * [.scale(sx, [sy])](#module_immutable-transform-matrix..Matrix+scale) ⇒ <code>Matrix</code>
            * [.translate(tx, ty)](#module_immutable-transform-matrix..Matrix+translate) ⇒ <code>Matrix</code>
            * [.rotate(angle)](#module_immutable-transform-matrix..Matrix+rotate) ⇒ <code>Matrix</code>
            * [.rotateDeg(angle)](#module_immutable-transform-matrix..Matrix+rotateDeg) ⇒ <code>Matrix</code>
            * [.multiply(m)](#module_immutable-transform-matrix..Matrix+multiply) ⇒ <code>Matrix</code>
            * [.isIdentity()](#module_immutable-transform-matrix..Matrix+isIdentity) ⇒ <code>boolean</code>
            * [.toString()](#module_immutable-transform-matrix..Matrix+toString) ⇒ <code>string</code>
            * [.determinant()](#module_immutable-transform-matrix..Matrix+determinant) ⇒ <code>number</code>
            * [.isInvertible()](#module_immutable-transform-matrix..Matrix+isInvertible) ⇒ <code>boolean</code>
            * [.inverse()](#module_immutable-transform-matrix..Matrix+inverse) ⇒ <code>Matrix</code>
            * [.divide(m)](#module_immutable-transform-matrix..Matrix+divide) ⇒ <code>Matrix</code>
            * [.applyToPoint(x, y)](#module_immutable-transform-matrix..Matrix+applyToPoint) ⇒ <code>Object</code>
        * _static_
            * [.Matrix](#module_immutable-transform-matrix..Matrix.Matrix)
                * [new Matrix(a, b, c, d, e, f)](#new_module_immutable-transform-matrix..Matrix.Matrix_new)
            * [.fromCTM(ctm)](#module_immutable-transform-matrix..Matrix.fromCTM) ⇒ <code>Matrix</code>

<a name="module_immutable-transform-matrix..Matrix"></a>

### immutable-transform-matrix~Matrix ⇐ <code>Immutable.Map</code>
**Kind**: inner class of [<code>immutable-transform-matrix</code>](#module_immutable-transform-matrix)  
**Extends**: <code>Immutable.Map</code>  

* [~Matrix](#module_immutable-transform-matrix..Matrix) ⇐ <code>Immutable.Map</code>
    * _instance_
        * [.transform(a2, b2, c2, d2, e2, f2)](#module_immutable-transform-matrix..Matrix+transform) ⇒ <code>Matrix</code>
        * [.scale(sx, [sy])](#module_immutable-transform-matrix..Matrix+scale) ⇒ <code>Matrix</code>
        * [.translate(tx, ty)](#module_immutable-transform-matrix..Matrix+translate) ⇒ <code>Matrix</code>
        * [.rotate(angle)](#module_immutable-transform-matrix..Matrix+rotate) ⇒ <code>Matrix</code>
        * [.rotateDeg(angle)](#module_immutable-transform-matrix..Matrix+rotateDeg) ⇒ <code>Matrix</code>
        * [.multiply(m)](#module_immutable-transform-matrix..Matrix+multiply) ⇒ <code>Matrix</code>
        * [.isIdentity()](#module_immutable-transform-matrix..Matrix+isIdentity) ⇒ <code>boolean</code>
        * [.toString()](#module_immutable-transform-matrix..Matrix+toString) ⇒ <code>string</code>
        * [.determinant()](#module_immutable-transform-matrix..Matrix+determinant) ⇒ <code>number</code>
        * [.isInvertible()](#module_immutable-transform-matrix..Matrix+isInvertible) ⇒ <code>boolean</code>
        * [.inverse()](#module_immutable-transform-matrix..Matrix+inverse) ⇒ <code>Matrix</code>
        * [.divide(m)](#module_immutable-transform-matrix..Matrix+divide) ⇒ <code>Matrix</code>
        * [.applyToPoint(x, y)](#module_immutable-transform-matrix..Matrix+applyToPoint) ⇒ <code>Object</code>
    * _static_
        * [.Matrix](#module_immutable-transform-matrix..Matrix.Matrix)
            * [new Matrix(a, b, c, d, e, f)](#new_module_immutable-transform-matrix..Matrix.Matrix_new)
        * [.fromCTM(ctm)](#module_immutable-transform-matrix..Matrix.fromCTM) ⇒ <code>Matrix</code>

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

#### matrix.rotate(angle) ⇒ <code>Matrix</code>
Rotates current matrix accumulative by angle.

**Kind**: instance method of [<code>Matrix</code>](#module_immutable-transform-matrix..Matrix)  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>number</code> | angle in radians |

<a name="module_immutable-transform-matrix..Matrix+rotateDeg"></a>

#### matrix.rotateDeg(angle) ⇒ <code>Matrix</code>
Helper method to make a rotation based on an angle in degrees.

**Kind**: instance method of [<code>Matrix</code>](#module_immutable-transform-matrix..Matrix)  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>number</code> | angle in degrees |

<a name="module_immutable-transform-matrix..Matrix+multiply"></a>

#### matrix.multiply(m) ⇒ <code>Matrix</code>
Multiplies current matrix with an other matrix.

**Kind**: instance method of [<code>Matrix</code>](#module_immutable-transform-matrix..Matrix)  

| Param | Type | Description |
| --- | --- | --- |
| m | <code>Matrix</code> | the other matrix |

<a name="module_immutable-transform-matrix..Matrix+isIdentity"></a>

#### matrix.isIdentity() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Matrix</code>](#module_immutable-transform-matrix..Matrix)  
**Returns**: <code>boolean</code> - true if identity (no transforms applied)  
<a name="module_immutable-transform-matrix..Matrix+toString"></a>

#### matrix.toString() ⇒ <code>string</code>
**Kind**: instance method of [<code>Matrix</code>](#module_immutable-transform-matrix..Matrix)  
<a name="module_immutable-transform-matrix..Matrix+determinant"></a>

#### matrix.determinant() ⇒ <code>number</code>
**Kind**: instance method of [<code>Matrix</code>](#module_immutable-transform-matrix..Matrix)  
**Returns**: <code>number</code> - determinant of the current matrix  
<a name="module_immutable-transform-matrix..Matrix+isInvertible"></a>

#### matrix.isInvertible() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Matrix</code>](#module_immutable-transform-matrix..Matrix)  
**Returns**: <code>boolean</code> - true if matrix is invertible  
<a name="module_immutable-transform-matrix..Matrix+inverse"></a>

#### matrix.inverse() ⇒ <code>Matrix</code>
**Kind**: instance method of [<code>Matrix</code>](#module_immutable-transform-matrix..Matrix)  
**Returns**: <code>Matrix</code> - inverse of the current matrix.  
**Throws**:

- Will throw an error if the matrix is not invertable

<a name="module_immutable-transform-matrix..Matrix+divide"></a>

#### matrix.divide(m) ⇒ <code>Matrix</code>
**Kind**: instance method of [<code>Matrix</code>](#module_immutable-transform-matrix..Matrix)  
**Throws**:

- Will throw if m is not invertible or not a Matrix


| Param | Type | Description |
| --- | --- | --- |
| m | <code>Matrix</code> | matrix divisor |

<a name="module_immutable-transform-matrix..Matrix+applyToPoint"></a>

#### matrix.applyToPoint(x, y) ⇒ <code>Object</code>
Apply current matrix to x and y point.

**Kind**: instance method of [<code>Matrix</code>](#module_immutable-transform-matrix..Matrix)  
**Returns**: <code>Object</code> - A new transformed point object  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | value for x |
| y | <code>number</code> | value for y |

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

<a name="module_immutable-transform-matrix..Matrix.fromCTM"></a>

#### Matrix.fromCTM(ctm) ⇒ <code>Matrix</code>
Construct a new Matrix constructed from an SVGMatrix

**Kind**: static method of [<code>Matrix</code>](#module_immutable-transform-matrix..Matrix)  

| Param | Type |
| --- | --- |
| ctm | <code>SVGMatrix</code> | 

