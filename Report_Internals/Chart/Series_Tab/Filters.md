## Filters

Filtering series values involves selecting values based on a specific condition.

![](../../../images/topics/Report_Internals.Chart.Series_Tab.Filters_2.png)

To apply filters to series values, follow these steps:
* In the component editor, go to the Series tab and select the Filters section;
* Click Add Filter;
* Configure the filtering condition using the filter editor.


Filter Editor
The filter editor defines the selection criteria for series values.


![](../../../images/topics/Report_Internals.Chart.Series_Tab.Filters_3.png)


![](../../../images/topics/Report_Internals.Chart.Series_Tab.Filters_4.png)
 Field Is determines the source of the values: Values, Arguments, or an Expression;

![](../../../images/topics/Report_Internals.Chart.Series_Tab.Filters_5.png)
 Data Type defines the data type of both the source value and the filtering value;

![](../../../images/topics/Report_Internals.Chart.Series_Tab.Filters_6.png)
 Condition specifies the filtering operation (see the table below);

![](../../../images/topics/Report_Internals.Chart.Series_Tab.Filters_8.png)
 Value specifies the filtering value, i.e., the value for which the filter condition will be true.

> **Information**
>
> For some operations, multiple filtering values may be required. For example, if using the between operation, both a starting and ending value must be specified to define a range.

The list of available operations depends on the data type. Each operation defines a logical condition between the source value and the filtering value.


String

Numeric

Date

Boolean

equal to

+

+

+

+

The condition is true if the source value equals the filtering value.

not equal to

+

+

+

+

The condition is true if the source value does not equal the filtering value.

between


+

+


The condition is true if the source value is within the specified range.

not between


+

+


The condition is true if the source value is outside the specified range.

greater than


+

+


The condition is true if the source value is greater than the filtering value.

greater than or equal to


+

+


The condition is true if the source value is greater than or equal to the filtering value.

less than


+

+


The condition is true if the source value is less than the filtering value.

less then or equal to


+

+


The condition is true if the source value is less than or equal to the filtering value.

containing

+

The condition is true if the source value contains the filtering value. This operation applies only to strings.

not containing

+

The condition is true if the source value does not contain the filtering value. This operation applies only to strings.

beginning with

+

The condition is true if the source value starts with the filtering value. This operation applies only to strings.

ending with

+

The condition is true if the source value ends with the filtering value. This operation applies only to strings.
