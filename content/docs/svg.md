+++
date = "2016-12-28T13:37:53-05:00"
title = "SVG Reference"

[menu.main]
  identifier = "docs"
+++

# SVG Reference

## SVG

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| width | attribute | | |
| height | attribute | | |
| transform | | |
| viewBox | | |

## Font

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

## Text 

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| direction | | |
| letter-spacing | | |
| text-decoration | | |
| unicode-bidi | | |
| word-spacing | | |

## Stroke

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| stroke-width | style | 5 | The width of the stroke. |
| stroke | style | black | The color of the stroke specified as a color name or 6 digit hexadecimal color of the form #rrggbb or as a 3 digit hexadecimal color of the form #rgb or finally as a rgb function of the form rgb(r, g b) |
| stroke-opacity | style | 0.2 | The opacity expressed as a value from 0.0 to 1.0 where 0 is transparent and 1.0 is fully opaque. |
| stroke-dasharray | style | 1 1 | The dasharray style is used when there is a need for dotted or dashed lines. |
| stroke-linecap | style | _butt_, round, square | Shape of the ends of a line. |
| stroke-linejoin | style | _pointed_, miter, round, bevel | The shape of the corners of the polygon or series of lines. |
| stroke-miterlimit | style | | The maximum ratio of length of the miter point to the width of the lines being drawn.  The default value is 4. |

## Rectangles

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| x | attribute |  |  |
| y | attribute |  |  |
| width |  |  |  |
| height |  |  |  |
| rx | attribute |  |  |
| ry | attribute |  |  |
| [stroke](#Stroke) | style |  |  |
| [fill](#Fill) | style |  |  |
|  |  |  |  |
|  |  |  |  |

## Circles

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| cx | attribute |  |  |
| cy | attribute |  |  |
| r  | attribute |  |  |
| [stroke](#Stroke) | style |  |  |
| [fill](#Fill) | style |  |  |

## Ellipse

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| cx | attribute |  |  |
| cy | attribute |  |  |
| rx | attribute |  |  |
| ry | attribute |  |  |
| [stroke](#Stroke) | style |  |  |
| [fill](#Fill) | style |  |  |

## Polygon

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| points | attribute |  |  |
| [stroke](#Stroke) | style |  |  |
| [fill](#Fill) | style |  |  |
|  |  |  |  |

## Fill

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| fill | style | none, color-name, #rrggbb, #rgb, rgb(r,gb) | The fill color. |
| fill-opacity | style | 0.0, 0.5, 1.0 | The fill opacity. |
| fill-rule | style | nonzero, evenodd | This determines how the shape is filled and generates different effects only when a shape has intersecting lines or holes in it. |

## Path

| Name | Type | Examples | Description |
|------|------|----------|-------------|
|  d | attribute |  | Specifies the pen stroke of the path. |

  * M 40 60, L 10 60, L 40 42.68, M 60 60, L 90 60, L 60 42.68
    * Move pen to (40, 60)
    * Draw line to (10, 60)
    * Draw line to (40, 42.68)
    * Start a new subpath; move pen to (60, 60)
    * Draw a line to (90, 60)
    * Draw a line to (60, 42.68)
    
  * M - Move Pen
  * m - Relative move to
  * L - Line to
  * l - Relative line to
  * A - Draw Arc
  * a - Relative Arc
  * H - Horizontal Line
  * h - Relative horizontal line
  * V - Vertical Line
  * v - Relative vertical line
  * Z - Close path
  * Q - Quadratic Bezier Curve
  * q - Relative Quadratic Bezier Curve
  * T - Smooth Quadratic Curve
  * t - Relative Smooth Quadratic Curve
  * C - Cubic Bezier Curve
  * c - Relative Cubic Bezier Curve
  * S - Continue Cubic Bezier Curve
  * s - Relative Continue Cubic Bezier Curve

## Marker

| Name | Type | Examples | Description |
|------|------|----------|-------------|
|  markerWidth | attribute |  |  |
|  markerHeight | attribute |  |  |
| marker-start | style | | |
| marker-mid | style | | |
| marker-end | style | | |
| refX | attribute | | |
| refY | attribute | | |
| orient | attribute | | |
| path or shape | child-element | | |

## Something

| Name | Type | Examples | Description |
|------|------|----------|-------------|
|  |  |  |  |
|  |  |  |  |