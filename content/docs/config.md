+++
date = "2016-12-28T13:37:53-05:00"
title = "Configuration"

[menu.main]
  identifier = "docs"
+++

# Chart Configuration

This document describes the basic configuration for dex.js charting components.  In
general, charts default configurations which work well for the general case, however,
you will undoubtably wish to alter some aspects of this configuration.  Let's suppose
for example, a chart provides a general margin convention of:

```javascript
var defaults = {
  // Other options...
  "margin" : { "top": 10, "bottom": 10, "left": 10, "right":10 },
  // Other options...
}
```

Let's suppose the user wishes to extend the bottom margin to 100 pixels.  This can be
achieved via providing chart configuration options of:

```javascript
  var myChart = dex.charts.d3.Chord({
    "margin" : { "top": 10, "bottom": 100, "left": 10, "right":10 }
  });
```

Or it could be set via a dot.notation shorthand:

```javascript
  var myChart = dex.charts.d3.Chord({
    "margin.bottom" : 100,
  });
```

Configuration can also be changed after the chart is already instantiated via the attr function.

```javascript
  myChart.attr("margin.bottom", 100);
```

## Common Configuration

This section defines common structures which can be configured within dex.js.

### Fonts

Fonts can be configured via the following options:

| OPTION         | DEFAULT    | DESCRIPTION |
| -------------- |------------| ------------|
| decoration     | none       | The font decoration. |
| family         | sans-serif | Sets the basic font family.  Ex: 'Arial'. |
| letterSpacing  | normal     | Sets the font letter spacing. |
| style          | normal     | Sets the style of the font. Ex: normal, italic, oblique |
| variant        | normal     | Sets the font variant.  Ex: normal, small-caps |
| weight         | normal     | Sets the weight of the font.  Ex: normal, bold, 100, 200, 300, 400, 500, 600, 700, 800, 900 |
| stretch        |            | This property indicates the desired amount of condensing or expansion in the glyphs used to render the text. |
| size           | 14         | Sets the size, in pixels, of the font. |
| sizeAdjust     |            | Allows authors to specify an aspect value for an element that will preserve the x-height of the first choice font in a substitute font. |

### Strokes

Strokes define the color of a line, text, or outline of an element.

| Option    | Default | Description |
| --------- |--------|-----|
| color     | black   | Sets the color of the stroke. Named colors and colors of the form #fff and #ffffff are accepted. |
| dasharray | empty   | Sets the pattern of the line to be drawn.  Ex: '1 1' would be a dashed line. |
| opacity   | 1       | Sets the opacity.  Values range from 0 to 1 with 0 representing a stroke which is fully tranparent and 1 representing a stroke which is fully opaque. |
| width     | 1       | Sets the width (in pixels) of the stroke. |

### Fills

Fills specify how an element is filled or shaded.

| Option      | Default | Description |
| ----------- |--------| -----|
| fill        |         | Sets the color of the entity to be filled. |
| fillOpacity |         | Sets the opacity of the filling. |

### Links

Links are really just a composite of a stroke and a fill.

| Option      | Default | Description |
| ----------- |--------| -----|
| stroke      | [Stroke](#strokes)  | See Strokes. |
| fill        |         | Sets the color of the entity to be filled. |
| fillOpacity |         | Sets the opacity of the filling. 

### Text

| Option     | Default | Description |
| ---------- |:------------| -----:|
| x                        | 0     | Sets the x location of this label. |
| y                        | 0     | Sets the y location of this label. |
| transform                | 0     | Applies a SVG transformation to this label. |
| dy                       | .71em | Sets the number of minor ticks to display. |
| font                     | [Font](#fonts)  | Sets the font for this label.  See: Fonts. |
| text                     | ''    | Sets the text value of this label. |
| anchor                   | 5     | Sets the anchor of this label.  Ex: start, middle, end |
| color                    | 5     | Sets the color of the label. |
| textLength               | ',d'  | Sets the length of the text.  The text will be adjusted to fit this length. |
| lengthAdjust             |       | Configures the tick label.  See Label configuration options. |
| writingMode              |       | Specifies whether the text is left to right, right to left, top to bottom, etc... Ex: lr-tb, rl-tb, tb-rl, lr, rl, tb, inherit |
| glyphOrientationVertical |       | The glyph orientation affects the amount that the current text position advances as each glyph is rendered.  |
| kerning        |            |  Indicates whether the user agent should adjust inter-glyph spacing based on kerning tables that are included in the relevant font (i.e., enable auto-kerning) or instead disable auto-kerning and instead set inter-character spacing to a specific length (typically, zero). |
| letterSpacing  | normal     | Sets the amount of space that will be added between text characters supplemental any spacing due to the kerning property. |
| wordSpacing    | 'normal' | Sets an additional amount of space between words. Ex: normal, <length>, iherit |
| decoration     | none       | Allows for added characteristics or decorations to be added to the text. Ex: (none, underline, overline, line-through, blink, inherit) |

### Axis

| Option        | Default | Description |
| --------------|:--------| -----------:|
| scale         | 5       | Set the scale of the axis.  Ex: d3.scale.linear(), d3.scale.ordinal() |
| orient        | 3       | Sets the orientation of the axis. Ex: top, bottom, left, right. This parameter also determines whether or not the axis runs vertically or horizontally. |
| ticks         |         | A hint to suggest how many ticks to display. |
| tickValues    |         | Specific values to display tick marks at. |
| tickSize      |         | The size (in pixels) of a tick mark. |
| innerTickSize |         | The size (in pixels) of inner tick marks. |
| outerTickSize |         | The size (in pixels) of outer tick marks. |
| tickPadding   |         | If padding is specified, sets the padding to the specified value in pixels and returns the axis. If padding is not specified, returns the current padding which defaults to 3 pixels. |
| tickFormat    |         | If format is specified, sets the format to the specified function and returns the axis. If format is not specified, returns the current format function, which defaults to null. A null format indicates that the scale's default formatter should be used, which is generated by calling scale.tickFormat. In this case, the arguments specified by ticks are likewise passed to scale.tickFormat. |
| tickSubdivide |         | This specifies how many minor ticks to place between major ticks. |

### Shapes

#### Points

| Option | Default | Description |
| ------ |:--------| -----------:|
| x      | 0       | The x coordinate of the point. |
| y      | 0       | The y coordinate of the point. |

#### Rectangles

| Option  | Default | Description |
| ------- |:--------| -----------:|
| width   | 0       | The width of the rectangle in pixels. |
| height  | 0       | The height of the rectangle in pixels. |
| x       | 0       | The x coordinate of the upper left vertex of the rectangle. |
| y       | 0       | The y coordinate of the upper left vertex of the rectangle. |
| rx      | 0       | The x radius of the edges of the rectangle.  Non-zero values will cause the rectangle to be rounded at the corners.  |
| ry      | 0       | The y radius of the edges of the rectangle.  Non-zero values will cause the rectangle to be rounded at the corners.  |
| opacity | 1       | The opacity of the rectangle where 0 is transparent, 1 is opaque. |
| color   |         | The color of the rectangle. |
| stroke  | [Stroke](#strokes)  | See Strokes. |


#### Circles

| Option        | Default | Description |
| ------------- |:--------| -----------:|
| center        | [Point](#points)   | The center of the circle.  See Points. |
| radius        | 0       | The radius of the circle in pixels. |
| style.stroke  | [Stroke](#strokes)  | See Strokes. |
| style.color   |         | The color of the circle. |
| style.opacity | 1       | The opacity of the circle.  |
