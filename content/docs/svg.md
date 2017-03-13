+++
date = "2016-12-28T13:37:53-05:00"
title = "SVG Reference"

[menu.main]
  identifier = "docs"
+++

# SVG Reference

## ELEMENTS

### SVG

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| width | attribute | | |
| height | attribute | | |
| [transform](#transformations) | attribute | |
| viewBox | attribute | |

### G

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| transform | attribute | |


### USE

### DEFS

### SYMBOL

### IMAGE

## STYLES & ATTRIBUTES

### Colors

Colors may be specified in a number of different ways:

| Method | Example | Description |
|--------|---------|-------------|
| none   | none    | No color |
| name   | red | Certain colors may be specified by name. |
| hex-6  | #ff0000 | A 6 digit hexadecimal format of the form #rrggbb may be used. |
| hex-3  | #f00 | A 3 digit hexadecimal format of the form #rgb may be used. |
| rgb(r,g,b) | rgb(255, 0, 0) or rgb(100%, 0%, 0%) | A functional notation of the form rgb(r,g,b) may be used specifying the amount of red, green and blue as a decimal ranging from 0-255 or as a percentage ranging from 0%-100%. |

### Font

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| font | | |
| font-family | | |
| font-size | | |
| font-size-adjust | | |
| font-stretch | | |
| font-style | | |
| font-variant | | |
| font-weight | | |

### Text 

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| direction | | |
| letter-spacing | | |
| text-decoration | | |
| unicode-bidi | | |
| word-spacing | | |

### Fill

Fills define characteristics of how a shape is painted or filled.

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| fill | style | none, color-name, #rrggbb, #rgb, rgb(r,gb) | The fill color. |
| fill-opacity | style | 0.0, 0.5, 1.0 | The fill opacity. |
| fill-rule | style | nonzero, evenodd | This determines how the shape is filled and generates different effects only when a shape has intersecting lines or holes in it. |

### Stroke

Strokes define the characteristics of the outline of a shape.

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| stroke-width | style | 5 | The width of the stroke. |
| stroke | style | black | The color of the stroke specified as a color name or 6 digit hexadecimal color of the form #rrggbb or as a 3 digit hexadecimal color of the form #rgb or finally as a rgb function of the form rgb(r, g b) |
| stroke-opacity | style | 0.2 | The opacity expressed as a value from 0.0 to 1.0 where 0 is transparent and 1.0 is fully opaque. |
| stroke-dasharray | style | 1 1 | The dasharray style is used when there is a need for dotted or dashed lines. |
| stroke-linecap | style | _butt_, round, square | Shape of the ends of a line. |
| stroke-linejoin | style | _pointed_, miter, round, bevel | The shape of the corners of the polygon or series of lines. |
| stroke-miterlimit | style | | The maximum ratio of length of the miter point to the width of the lines being drawn.  The default value is 4. |

### Transformations

| Transformation | Description |
|----------------|-------------|
| translate(x,y) ||
| scale(xFactor, yFactor) ||
| rotate(angle) ||
| rotate(angle, centerX, centerY ||
| skewX(angle) ||
| skewY(angle) ||

## Shapes

### Rectangle

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| x | attribute |  |  |
| y | attribute |  |  |
| width |  |  |  |
| height |  |  |  |
| rx | attribute |  |  |
| ry | attribute |  |  |
| [stroke](#stroke) | style |  |  |
| [fill](#fill) | style |  |  |
|  |  |  |  |
|  |  |  |  |

### Circle

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| cx | attribute |  |  |
| cy | attribute |  |  |
| r  | attribute |  |  |
| [stroke](#stroke) | style |  |  |
| [fill](#fill) | style |  |  |

### Ellipse

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| cx | attribute |  |  |
| cy | attribute |  |  |
| rx | attribute |  |  |
| ry | attribute |  |  |
| [stroke](#stroke) | style |  |  |
| [fill](#fill) | style |  |  |

### Polyline

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| points | attribute | 5 20, 20 20 | A list of x-y coordinates.  Each x-y pair is separated by a whitespace and each coordinate pair is separated by a comma.  The line is drawn in the order of defined points. |
| [stroke](#stroke) | style |  |  |
| [fill](#fill) | style |  |  |

### Polygon

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| points | attribute |  |  |
| [stroke](#stroke) | style |  |  |
| [fill](#fill) | style |  |  |
|  |  |  |  |

### Path

| Name | Type | Examples | Description |
|------|------|----------|-------------|
|  d | attribute |  | Specifies the pen stroke of the path. |

| Pen Commands | Description |
|--------------|-------------|
| M | Move pen |
| m | Move pen (relative). |
| L | Draw a line. |
| l | Draw a line (relative). |
| A | Draw an arc. |
| a | Draw an arc (relative). |
| H | Draw a horizontal line. |
| h | Draw a horizontal line (relative). |
| V | Draw a vertical line. |
| v | Draw a vertical line (relative) |
| Z | Close path |
| Q | Quadratic Bezier curve. |
| q | Quadratic Bezier curve (relative). |
| T | Smooth Quadratic Curve |
| t | Smooth Quadratic Curve (relative) |
| C | Cubic Bezier curve |
| c | Cubic Bezier curve (relative) |
| S | Continue Cubic Bezier curve |
| s | Continue Cubic Bezier curve (relative). |

#### Path Example

Given the following path:

  <pre>M 40 60, L 10 60, L 40 42.68, M 60 60, L 90 60, L 60 42.68</pre>

It breaks down into the following actions by the pen:
  
| Subpath | Description |
|---------|-------------|
| M 40 60 | Move pen to (40, 60) |
| L 10 60 | Draw line to (10, 60) |
| L 40 42.68 | Draw line to (40, 42.68) |
| M 60 60 | Start a new subpath; move pen to (60, 60) |
| L 90 60 | Draw a line to (90, 60) |
| L 60 42.68 | Draw a line to (60, 42.68) |

### Marker

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| markerWidth | attribute |  |  |
| markerHeight | attribute |  |  |
| marker-start | style | | |
| marker-mid | style | | |
| marker-end | style | | |
| refX | attribute | | |
| refY | attribute | | |
| orient | attribute | | |
| path or shape | child-element | | |

### Something

| Name | Type | Examples | Description |
|------|------|----------|-------------|
|  |  |  |  |
|  |  |  |  |