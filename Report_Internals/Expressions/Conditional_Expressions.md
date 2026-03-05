## Conditional Expressions

Conditional Expressions are not allowed in Stimulsoft Reports by default. However, there are two ways force conditional behavior should you find it necessary to do so:


The IIF Function

Firstly, you can use the built-in IIF function which you can insert from the data dictionary. The function uses the following syntax:


```
{IIF(Condition, Value1, Value2)}
```


This evaluates Condition, and if the Condition returns true, then the expression will return Value1. If it returns false, then it will return Value2. For example, if you enter the following expression:


```
Number of Stores: {Store.Count > 0, Store.Count, "None"}
```


then if the value of Store.Count is 10 after calculation the result appearing in the report will be:


```
Number of Stores: 10
```


If the value of Store.Count is 0 after calculation the result appearing in the report will be:


```
Number of Stores: None
```

The C# Ternary Operator

If you are using C# as your report language, it is also possible to use the ternary operator. The syntax for the ternary operator is as follows:


```
{Condition ? Value1 : Value2}
```


In the same way as the IIF function, if Condition evaluates to true, then the expression will return Value1. If false, then it will return Value2.
