## Using Functions in Expressions

Built-In Functions

Stimulsoft Reports has a large number of built-in functions available for you to use. You can access these functions directly from the data dictionary and within the Expression Editor. Examples of built-in functions and their usage would be:


```
{Trim(MyString)}
```


or


```
{Trim(MyDataSource, MyDataColumn)}
```


In each case, the use of the Trim function removes leading and trailing spaces from the result shown in the report.

.NET Framework Methods

In addition to the built-in functions, you can use any available .Net Framework methods. For string expressions, you could use any of the following examples:


```
{MyString.Trim()} // Removes leading and trailing spaces
```


```
{"Test".ToUpper()} // Converts the value to upper case "TEST"
```


```
{MyString.Length} // Returns the length of the string - if the value of MyString is "Test" then the method will return 4
```


For numerical expressions, you could use any of the following examples:


```
{Math.Round(MyValue, 2)} // Rounds the value to two decimal places
```


```
{Math.Sqrt(MyValue)} // Returns the square root of MyValue
```


```
{MyValue.ToString() + " times"} // Converts the number to a string and adds the word "times" -
// if MyValue is 5 this returns "5 times"
```


There are no limits to the number of Framework methods you can access - if they are available within **.NET** for the type you are using in a report, you can use them without restriction.
