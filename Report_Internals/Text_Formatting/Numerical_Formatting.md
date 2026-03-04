## Numerical Formatting


To display numeric values, it is recommended to use a numeric format. Below is a report with a list of products, their price, as well as key product and category. By default, all text components use a text format General without any formatting.


![](../../images/topics/Report_Internals.Text_Formatting.Numerical_Formatting_1.png)


Set the numeric format for the values **ProductID**, **CategoryID**, **UnitPrice**. For this you should select the text components which contain references to the relevant data columns and click the 
![](../../images/topics/Report_Internals.Text_Formatting.Numerical_Formatting_2.png)
 button of the **Text Format** property. In the **Format** dialog box you should go to the **Number** tab and define the settings.


![](../../images/topics/Report_Internals.Text_Formatting.Numerical_Formatting_3.png)


It should be noted that there were two ways available to determine the format mask:

Use local settings. The text is formatted according to the current settings of the operating system.

Each parameter is defined by the format mask manually.


Sometimes there were some disadvantages in both cases. For example, when using local settings to change the format parameters you should edit formats of the operating system. In the second case, when it is needed to change one parameter you should adjust others as well. Considering disadvantages of these methods, there is a third way to determine the format. Using the local settings you can change any parameter format. To do this, set the flag next to the parameter and set its value.


![](../../images/topics/Report_Internals.Text_Formatting.Numerical_Formatting_4.png)


![](../../images/img_1.png) Group separator

When the Group Separator is used then number will be separated into number positions.

![](../../images/img_2.png) Local setting

When using the Local settings, numerical values are formatted according to the current OS installations.

![](../../images/img_3.png) Decimal digits

Number of decimal digits, which are used to format numerical values.

![](../../images/img_4.png) Decimal separator

Used as a decimal separator to separate numerical values in formatting.

![](../../images/img_5.png) Group separator

Used as a group separator when numerical values formatting.

![](../../images/img_6.png) Group size

The number of digits in each group in currency values formatting.

![](../../images/img_7.png) Negative pattern


This pattern is used to format negative values.


Thus, for columns ProductID, CategoryID we change only the number of digits in the fractional part.


![](../../images/topics/Report_Internals.Text_Formatting.Numerical_Formatting_5.png)
