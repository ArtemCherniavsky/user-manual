## Using Dictionary Variables

You can create variables in the designer data dictionary, which can then be used in expressions. When you specify the name of a variable in the expression, the value of the variable will be included in the report. The syntax is simply the name of the variable surrounded by curly braces. For example, if you set the value of the variable to 5 and you enter the following expression:


```
Value = {MyVariable}
```


then after calculation, the result appearing in the report will be:


```
Value = 5
```


Calculating with Variables

Variables can also be used in calculations. For example, if the value of MyVariable is 15, and you enter the following expression:


```
Value = {MyVariable + 10}
```


then after calculation, the result appearing in the report will be:


```
Value = 25
```


**Important**


If the report language is **C#**, then variable names are case sensitive. If the report language is **VB.Net**, then variable names are not case sensitive.
