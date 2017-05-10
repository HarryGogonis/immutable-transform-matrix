## Functions

<dl>
<dt><a href="#transform">transform(a2, b2, c2, d2, e2, f2)</a></dt>
<dd><p>Multiplies current matrix with new matrix values.</p>
</dd>
<dt><a href="#scale">scale(sx, [sy])</a></dt>
<dd><p>Scales current matrix accumulative.
If the second param is ommitted it scale uniformly.</p>
</dd>
</dl>

<a name="transform"></a>

## transform(a2, b2, c2, d2, e2, f2)
Multiplies current matrix with new matrix values.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| a2 | <code>number</code> | scale x |
| b2 | <code>number</code> | shear y |
| c2 | <code>number</code> | shear x |
| d2 | <code>number</code> | scale y |
| e2 | <code>number</code> | translate x |
| f2 | <code>number</code> | translate y |

<a name="scale"></a>

## scale(sx, [sy])
Scales current matrix accumulative.
If the second param is ommitted it scale uniformly.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| sx | <code>number</code> | scale factor x (1 does nothing) |
| [sy] | <code>number</code> | scale factor y (1 does nothing) |

