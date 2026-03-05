## Calculating Values in Expressions

An expression can contain many different types of variables as well as functions and field values from databases. These various parts can be combined to calculate a value to be printed or displayed within a report.


Using Code in an Expression

When calculating a value within an expression, you may also include code written in the programming language of a report. Curly braces (the “{“ and “}” symbols) are used to separate code item from other text. The opening brace symbol “{“ indicates the beginning of a calculation. The closing brace symbol “}” indicates the end of a calculation. The code between symbols is calculated, and the value included in the result of the calculation. In text expressions, the result of the calculation is automatically converted into a string. For example, if you enter the following expression:


```
Value = {1 + 2}
```


then after calculation, the result appearing in the report will be:


```
Value = 3
```

Multiple Code Insertions

When using calculations, an unlimited number of code insertions are allowed in any one expression. For example, if you enter the following expression:


```
ValueA = {1 + 2}, ValueB = {2 + 3}
```


then after calculation the result appearing in the report will be:


```
ValueA = 3, ValueB = 5
```

Nested Code Insertions

When you perform calculations in an expression, the nesting of code sections is not allowed. For example, the following expression is not correct and will cause the calculation to fail:


```
Value = {1 + 2 + {2 + 3}}
```


**Important**


Code nesting is not allowed when making calculations in expressions.
