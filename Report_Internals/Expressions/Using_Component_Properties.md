## Using Component Properties

When creating expressions, you can use the properties of any component contained within a report.


Syntax

The syntax is the same whether the report language is C# or VB.NET. You enter the name of the component and the property name separated by a decimal point or full-stop character, surrounded by curly braces:


```
{Component.Property}
```


**Important**


If the report language is **C#**, then names are case sensitive. If the report language is **VB.NET**, then names are not case sensitive.

**For example**, to display the name of a component called **MyComponent**, you would enter the expression:


```
{MyComponent.Name}
```


If you wish to access a calculated value from within a component, you should use the property that contains the result you require. For example, if the component has a hyperlink value which calculates a hyperlink from the other component properties, you would access it by entering the expression:


```
{MyComponent.HyperlinkValue}
```


You can use component properties in calculations should this be necessary. For example, the following would display the area taken up by the component:


```
{MyComponent.Width*MyComponent.Height}
```
