## Indicator Style

The Indicator style is applied to the [Indicator](../../../Dashboards/Indicator.md) element. To create an indicator style, you should do the following:
* In the style designer, click the Add Style button and select the Indicator style.

* Use the style properties to customize the formatting.

* Apply the style to the [report components](index.md#applystyle) or [dashboard elements](../../../Dashboards/Appearance.md#ApplyStyle).


![](../../../images/topics/Report_Internals.Appearance.Styles.Creating_Indicator_Style_1.png)

> **Information**
>
> It is not possible to edit the preset Indicator styles. However, it is possible to create a custom style based on the preset style and adjust it. To do this, please follow these steps:
>
> Assign the preset style to the Indicator component or element and select that component.
>
> Call up the Style Designer and click the [Get Style from Selected Components](Style_Designer.md#GetStyleFromSelectedComponents) button.
>
> Adjust the obtained style using its properties.
>
> Assign this custom style to the Indicator component or element.

Below is a list of properties that are used to set the indicator style.


Name

Description

Name

Sets the name of the current style.

Description

Specifies a description for the current style.

Collection Name

Adds an existing style to the [style collection](Style_Collections.md) or create a new style collection.

Conditions

Sets the conditions for [conditions for applying the current style](Style_Conditions.md) if it is included in the styles collection.

Back Color

Changes the background color of an element.

Fore Color

Changes the text color of an element.

Glyph Color

Changes the background color of a glyph of the element.

Hot Back Color

Changes the background color of an element when hovering over the element in the viewer.

Negative Color

Changes the text color for a negative deviation value in the current element.

Positive Color

Changes the text color for a positive deviation value in the current element.
