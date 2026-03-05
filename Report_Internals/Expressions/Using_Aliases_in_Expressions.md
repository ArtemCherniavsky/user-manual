## Using Aliases in Expressions

To make it easier to understand expressions in a report, you can use aliases instead of explicitly specifying the variable or data source and column details. For example, if you have a variable in the data dictionary called "MyVariable" and you have set its alias to "my best variable" you can reference that variable directly by Name or by Alias.


To use the variable by the name, you would create an expression like this:


```
{MyVariable}
```


To use the variable by the alias, you would create an expression like this:


```
{[my best variable]}
```

Syntax - Variables

If you use spaces, punctuation, or characters within an alias that are not permitted under C# or VB.Net, then you MUST enclose the string representation of the alias in square brackets []. If no such characters are used then the square brackets are optional.


For example, if the alias was "MyBestVariable", then the expression can be written without brackets:


```
{MyBestVariable}
```


Otherwise, you MUST enclose the variable in square brackets. Examples of valid alias usage:


```
{Variable1}

{VariableAndValue}

{[Variable and Value]}

{[Variable and Value]}

{[Variable&Values]}

{[Variable-First]}
```


Just for extra clarification, examples of some INVALID alias usage


```
{Variable and Value} // spaces in the name cause this to fail

{Variable&Values} // reserved character causes this to fail
```

Syntax - Data

The same rule is used and when creating the names of data sources and columns. But there is one exception. When referring to the data column, only a part with incorrect characters for identifiers should be bracketed. For example:


```
{DataSource.[Data Column]}

{[Data-Source].DataColumn}

{[Data=Source].[Data=Column]}
```
