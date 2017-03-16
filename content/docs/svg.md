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
| width | attribute | 600 | The width of the svg in pixels. |
| height | attribute | 800 | The height of the svg in pixels. |
| [transform](#transformations) | attribute | | A transformation to be applied to the svg. |
| viewBox | attribute | | The viewbox of the svg. |
| x | attribute | | For SVG embeded in parent SVG, this indicates the x-axis of the left corner of the SVG. |
| y | attribute | | For SVG embeded in parent SVG, this indicates the y-axis of the left corner of the SVG. |


### G

The g element is special in that it is used to group other SVG elements.  Any attributes
set within the g container are passed down to it's children where applicable.

### DEFS

This element is used as a container element for referenced elements and is out of scope for
coverage in this quick reference.

### USE

The use element is for reuse of definitions defined in the defs element.

### SYMBOL

Defines a graphical template object which can be instantiated by a use element.  Symbols
are not displayed, but rather made available for later use via the "use" element.  It is
good practice to enclose them in a defs specification element.

### IMAGE

The image element allows for the inclusion of an entire SVG or rastefile image.

### TEXT

This element is used to specify the content and appearance of text.

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| [font](#font) | attribute-group | All of the styles and attributes associated with fonts may be associated with a text element. |

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
| font | style | | This is a shorthand style for setting font-style, font-variant, font-weight, font-size, line-height and font-family all at once. |
| font-family | attribute | Times,serif | This contains a whitespace separated list of font family names or generic names. |
| font-size | attribute | 8 | This property refers to the size of the font from baseline to baseline when multiple lines of text are set solid in a multiline layout environment. For SVG, if a <length> is provided without a unit identifier (e.g., an unqualified number such as 128), the SVG user agent processes the length as a height value in the current user coordinate system. |
| <span style="white-space:nowrap;">font-size-adjust</span> | style | | This property allows authors to specify an aspect value for an element that will preserve the x-height of the first choice font in a substitute font. |
| font-stretch | style | | This property indicates the desired amount of condensing or expansion in the glyphs used to render the text.<hr>Values:<br><br>normal &#124; wider &#124; narrower &#124; ultra-condensed &#124; extra-condensed &#124; semi-condensed &#124; semi-expanded &#124; expanded &#124; extra-expanded &#124; ultra-expanded &#124; inherit |
| font-style | attribute | | This property specifies whether the text is to be rendered using a normal, italic or oblique face. <hr>Values:<br><br> normal &#124; italic &#124; oblique &#124; inherit |
| font-variant | attribute | | This property indicates whether the text is to be rendered using the normal glyphs for lowercase characters or using small-caps glyphs for lowercase characters. <hr>Values:<br><br>normal &#124; small-caps &#124; inherit |
| font-weight | style | bold |  This property refers to the boldness or lightness of the glyphs used to render the text, relative to other fonts in the same font family.  <hr>Values:<br><br>normal &#124; bold &#124; bolder &#124; lighter &#124; 100 &#124; 200 &#124; 300 &#124; 400 &#124; 500 &#124; 600 &#124; 700 &#124; 800 &#124; 900 &#124; inherit |

### Text 

<hr>Values:<br><br>start &#124;

| Name | Type | Examples | Description |
|------|------|----------|-------------|
| direction | attribute | attribute | | This property specifies the base writing direction of blocks and the direction of embeddings and overrides (see 'unicode-bidi') for the Unicode bidirectional algorithm. In addition, it specifies the direction of table column layout, the direction of horizontal overflow, and the position of an incomplete last line in a block in case of 'text-align: justify'. <hr>Values:<br><br>ltr &#124; rtl &#124; inherit |
| unicode-bidi | | |
| letter-spacing | attribute | | This property specifies spacing behavior between text characters supplemental to any spacing due to the ‘kerning’ property. <hr>Values:<br><br>normal &#124; (length) &#124; inherit |
| text-decoration | attribute | | This property describes decorations that are added to the text of an element. Conforming SVG Viewers are not required to support the blink value.<hr>Values:<br><br>none &#124; [underline &#124;&#124; overline &#124;&#124; line-through &#124;&#124; blink] &#124; inherit |
| word-spacing | attribute | | This property specifies spacing behavior between words. For SVG, if a <length> is provided without a unit identifier (e.g., an unqualified number such as 128), the SVG user agent processes the (length) as a width value in the current user coordinate system. <hr>Values:<br><br>normal &#124; (length) &#124; inherit |
| text-anchor | attribute | start | The ‘text-anchor’ property is used to align (start-, middle- or end-alignment) a string of text relative to a given point. <hr>Values:<br><br>start &#124; middle &#124; end &#124; inherit |
| <span style="white-space:nowrap;">dominant-baseline</span> | attribute | | The "dominant-baseline" property is used to determine or re-determine a scaled-baseline-table. A scaled-baseline-table is a compound value with three components: a baseline-identifier for the dominant-baseline, a baseline-table and a baseline-table font-size. Some values of the property re-determine all three values; other only re-establish the baseline-table font-size. When the initial value, auto, would give an undesired result, this property can be used to explicitly set the desire scaled-baseline-table. <hr>Values:<br><br>auto &#124; use-script &#124; &#124; no-change &#124; reset-size &#124; ideographic &#124; alphabetic &#124; hanging &#124; mathematical &#124; central &#124; middle &#124; text-after-edge &#124; text-before-edge &#124; inherit |
| [font](#font) | attribute-set | | |
| kerning | attribute | | Indicates whether the user agent should adjust inter-glyph spacing based on kerning tables that are included in the relevant font (i.e., enable auto-kerning) or instead disable auto-kerning and instead set inter-character spacing to a specific length (typically, zero).<hr>Values:<br><br>auto &#124; (length) &#124; inherit |
| writing-mode | style | | <hr>Values:<br><br>start &#124; rl-tb <hr>Values:<br><br>start &#124; lr <hr>Values:<br><br>start &#124; lr <hr>Values:<br><br>start &#124; inherit |
| glyph-orientation-vertical | style | |  |

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
| <span style="white-space:nowrap;">stroke-dasharray</span> | style | 1 1 | The dasharray style is used when there is a need for dotted or dashed lines. |
| stroke-linecap | style | _butt_, round, square | Shape of the ends of a line. |
| stroke-linejoin | style | _pointed_, miter, round, bevel | The shape of the corners of the polygon or series of lines. |
| <span style="white-space:nowrap;">stroke-miterlimit</span> | style | | The maximum ratio of length of the miter point to the width of the lines being drawn.  The default value is 4. |

### Transformations

| Transformation | Description |
|----------------|-------------|
| translate(x,y) | Move the user coordinate system by the specified x and y. |
| scale(xFactor, yFactor) | Mutiplies all user coordinate systems by the specified xFactor and yFactor. |
| scale(factor) | Same as scale(factor, factor) |
| rotate(angle) | Rotate the user coordinate system by the specified angle.  The center of rotation is assumed to be the origin(0, 0).  In the default coordinate system, angle measurement increases as you rotate clockwise, starting at 0 degrees for a horizontal line. |
| <span style="white-space:nowrap;">rotate(angle, centerX, centerY)</span> | Rotate with a specified origin. |
| skewX(angle) | Skews all x coordinates by the specified angle. |
| skewY(angle) | Skews all y coordinates by the specified angle. |

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

| Pen Command | Arguments | Description |
|-------------|-----------|-------------|
| M | x y | Move pen to coordinate (x,y) |
| m | x y | Move pen from current location (xc, yc) to (xc+x, yc+y). |
| L | x y | Draw a line from current pen location to (x, y). |
| l | x y | Draw a line from current pen location (xc, yc) to (xc+x, yc+y). |
| A | rx ry xaxis&#8209;rotation large&#8209;arc sweep x y | Draw an arc. |
| a | rx ry xaxis&#8209;rotation large&#8209;arc sweep x y | Draw an arc (relative). |
| H | x | Draw a horizontal line from the current pen location (xc, yc) to (x, yc). |
| h | x | Draw a horizontal line from the current location (xc, yc) to (xc+x, yc). |
| V | y | Draw a vertical line from the current pen location (xc, yc) to (xc, y) |
| v | y | Draw a vertical line from the current pen location (xc, yc) to (xc, yc+y) |
| Z |   | Close path |
| Q | x1 y1 x y | Draw a quadratic Bezier curve from current point (x, y) using control point (x1, y1). |
| q | x1 y1 x y | Draw a quadratic Bezier curve from current point (xc, yc) from (xc+x, yc+y) using control point (xc+x1, yc+y1). |
| T | x y | Draw a quadratic Bezier curve from the current point to (x, y).  The control point will be the reflection of the previous Q command's control point.  If there is no previous curve, the current point will be used as the control point. |
| t | x y | Draw a quadratic Bezier curve from the current point (xc, yc) to (xc+x, yc+y).  The control point will be the reflection of the previous Q command's control point.  If there is no previous curve, (xc+x, yc+y) will be used as the control point. |
| C | x1 y1 x2 y2 x y | Draw a cubic Bezier curve from the current point to (x, y) using control point (x1, y1) for the beginning of the curve, and (x2, y2) as the control point the the endpoint of the curve. |
| c | x1 y1 x2 y2 x y | Draw a cubic Bezier curve from the current point (xc, yc) to (xc+x, yc+y) using control point (xc+x1, yc+y2) for the beginning of the curve, and (xc+x1, yc+y2) as the control point the the endpoint of the curve. |
| S | x2 y2 x y | Draw a cubic Bezier curve from the current point to (x, y) using (x2, y2) as the control point for the new endpoint.  The first control point will be the reflection of the previous C command's ending control point.  If there is no previous curve, the current point will be used as the first control point. |
| s | x2 y2 x y | Draw a cubic Bezier curve from the current point (xc, yc) to (xc+x, yc+y) using (xc+x2, xc+y2) as the control point for the new endpoint.  The first control point will be the reflection of the previous C command's ending control point.  If there is no previous curve, the current point will be used as the first control point. |

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
