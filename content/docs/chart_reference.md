+++
date = "2016-12-28T13:37:53-05:00"
title = "Modules"

[menu.main]
  identifier = "docs"
+++

# Chart Reference

## dex.charts.d3

### BumpChart

A Bump Chart is used to compare two discrete and distinct dimensions against
each other.  For example, they are useful for exploring the rank of a value
over a time dimension such as team ranking over the weeks of a season.

Bump Charts are similar to Parallel Coordinates only that they are a more
constrained interpretation.  The initial y-axis
locations of the categorical elements (For example, NFL teams) are ordered typically by descending
rank as one moves from the top to bottom axis vertically.  As the path
of the category moves from left to right through a typically ascending
sequence (typically time), the y-axis location changes according to the
rank of that categorical entry at that particular point in the sequence
(typically a point in time such as Week 1 of the NFL season).

If a category's line has a downward slope, that category is falling in rank
(ex: The NFL team moved down in the rankings).
If the category's line has an ascending slope, that category is increasing
in rank (The NFL team moved up in the rankings). If the category's line
is horizontal, that category is unchanging in rank (ie: the NFL team stayed
the same in the rankings).

Trust me, the bumpchart is easy to understand visually.  Technically correct
descriptions always make things sound more complex than they really are.
If you don't believe me, pick up any math textbook on the planet.

| Option    | Default | Description |
|-----------|---------|-------------|
| parent    | #BumpChartParent | A CSS selector pointing to the parent element of the chart. |
| id        | BumpChartId | The ID of this chart. |
| class     | BumpChartClass | The class of this chart. |
| resizable | true | If true, the chart will dynamically resize to the space allowed by it's parent element.  If false, will size itself statically to the height and width defined by the height and width parameters respectively. |
| csv       | minimal dataset | The data for this chart.  This chart assumes a CSV consisting [ category, sequence, rank ] |
| height    | 100% | The height of this chart expressed as a percentage when resizable is enabled, or as an integer representing the height of the chart in pixels when resizable is false. |
| width     | 100% | The width of this chart expressed as a percentage when resizable is enabled, or as an integer representing the width of the chart in pixels when resizable is false. |
| transform |  | An SVG transform to be applied to this chart. |
| margin    |  | The margins for this chart, expressed in pixels. |
| margin.top | 50 | The top margin for this chart. |
| margin.bottom | 50 | The bottom margin for this chart. |
| margin.left | 140 | The left margin for this chart. |
| margin.right | 160 | The right margin for this chart. |
| color | | |
| format | d3.format("d") | The format to be applied to the x and y axis ticks. |
| key | | Allows the user to override the default locations of the category, sequence, and rank values. |
| key.category | 0 | Allows the user to override the default location of the column to be used for category information. CSV header names or numeric indices are allowed. |
| key.sequence | 1 | Allows the user to override the default location of the column used for the x axis sequence information. CSV header names or numeric indices are allowed. |
| key.rank | 2 | Allows the user to override the default location of the column used for the y axis rank information. CSV header names or numeric indices are allowed. |
| [chartLabel](/docs/config.html#text) | | Allows the user to specify the appearance and behavior chart title. |
| [categoryLabel](/docs/config.html#text) | | Allows the user to specify the appearance of the category labels. |
| [sequenceLabel](/docs/config.html#text) | | Allows the user to specify the appearance of the sequence label. |
| [circle](/docs/config.html#circle) | | Allows the user to override the appearance and behavior of the circular data points of the bump chart. |
| [line](/docs/config.html#line) | | Allows the user to override the appearance and behavior of the bump chart lines. |

### Chord Diagram

| Option    | Default | Description |
|-----------|---------|-------------|
| parent    | #ChordParent | A CSS selector pointing to the parent element of the chart. |
| id        | ChordId | The ID of this chart. |
| class     | ChordClass | The class of this chart. |
| resizable | true | If true, the chart will dynamically resize to the space allowed by it's parent element.  If false, will size itself statically to the height and width defined by the height and width parameters respectively. |
| csv       | minimal dataset | The data for this chart.  This chart assumes a CSV consisting [ category, sequence, rank ] |
| height    | 100% | The height of this chart expressed as a percentage when resizable is enabled, or as an integer representing the height of the chart in pixels when resizable is false. |
| width     | 100% | The width of this chart expressed as a percentage when resizable is enabled, or as an integer representing the width of the chart in pixels when resizable is false. |
| transform |  | An SVG transform to be applied to this chart. |
| margin    |  | The margins for this chart, expressed in pixels. |
| margin.top | 50 | The top margin for this chart. |
| margin.bottom | 50 | The bottom margin for this chart. |
| margin.left | 140 | The left margin for this chart. |
| margin.right | 160 | The right margin for this chart. |
| padding | 0.05 | The padding for this chart. |