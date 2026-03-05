## Data Summary Types


When rendering a cross-table, the report generator should know how the values in the summary cells will be summarize. Summation function is set using the Summary property of a summary cell. For each summary cell its own function can be specified. A Cross Table works with the following functions:


Function

Description

None

Do not summarize the cell values

Sum

Returns the sum of values that are contained in the cell

Average

Returns the average of values that are contained in the cell

Min

Returns the minimal of values that are contained in the cell

Max

Returns the maximal of values that are contained in the cell

Count

Returns the number of values that are contained in the cell

CountDistinct

Returns the number of distinct values that are contained in the cell

Image

A cross table will show the first value as an image


In addition to the Summary property, there is another property that affects on the summary. This is the Summary Values property. This property identifies and process the 0 and null values when calculating totals.
