## Grid Lines Horizontal

Grid Lines Horizontal are lines in the chart area corresponding to each Y-axis value, running parallel to the X-axis. In other words, a line of a specific style and color will extend from each Y-axis value to the opposite edge of the chart area, parallel to the X-axis.
![](../../../images/topics/Report_Internals.Chart.Area_Tab.Grid_Lines_Horizontal_2.png)
To set up horizontal grid lines in the chart area, you need:
* In the component editor, navigate to the Area tab and select the Grid Lines Horizontal section;
* Set the required property values.

> **Informmation**
>
> The chart area can also display minor horizontal grid lines.

Below is a table of properties used to configure horizontal grid lines.

Name

Description

Allow Apply Style

Enables the use of horizontal grid line styling settings from the chart style. If this property is set to True, the styling settings for horizontal grid lines will be taken from the selected chart style. If set to False, additional properties will be displayed, allowing customization of the main and minor grid line styles and colors.

Color

Allows selecting the color of the main horizontal grid lines.

Minor Color

Allows selecting the color of the minor horizontal grid lines.

Minor Count

Sets the number of minor horizontal grid lines. Minor lines are displayed between the main grid lines at equal intervals.

Minor Style

Defines the style of minor grid lines: Solid, Dash, Dash Dot, Dash Dot Dot, Dot, Double. If set to None, minor grid lines will not be displayed.

Minor Visible

Enables or disables the display of minor grid lines. If set to True, minor grid lines will be shown. If set to False, they will be hidden.

Style

Defines the style of the main grid lines: Solid, Dash, Dash Dot, Dash Dot Dot, Dot, Double. If set to None, neither main nor minor grid lines will be displayed.

Visible

Enables or disables the display of the main grid lines. If set to True, the main lines will be displayed. If set to False, they will be hidden.
