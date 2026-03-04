## Font Size


Using conditional formatting it is possible to change the font size of a text component. Let us consider in more detail changing the font size of the contents of a text component. The picture below shows a report page:


![](../../../images/topics/Report_Internals.Conditional_Formatting.Visual_Styles_Menu.Font_Size_1.png)


For example, you can use different font sizes to display the contents of a text component in the odd and even rows. To do this, select a text component, for example a text component with the {Customers.Country} expression, in the DataBand and call the Conditions editor. Then, you must specify the condition, for example: Line % 2 == 1. Change the formatting options, in this case, the Font Size. The picture below shows the Conditions editor dialog box:


![](../../../images/topics/Report_Internals.Conditional_Formatting.Visual_Styles_Menu.Font_Size_2.png)


After making changes in the report template, the report engine will perform conditional formatting of text components, according to the specified parameters. In this case, the font size of the selected text component will be changed, depending on the condition. The picture below shows the page of the rendered report with conditional formatting:


![](../../../images/topics/Report_Internals.Conditional_Formatting.Visual_Styles_Menu.Font_Size_3.png)


As can be seen in the picture above, the text components of the Country column, located in the even and odd lines, use different font sizes.
