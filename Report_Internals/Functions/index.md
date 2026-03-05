## Functions

The data dictionary has the **Functions** category. This category contains the elements using which you can calculate a specific total or return the desired value. All elements of the Function category are divided into groups. The table below shows a list of functions and their brief description and examples.


> **Information**
>
> Please note that when processing number values in reports, a data type of the result depends on a data type of arguments. In dashboards, all arguments are converted to the highest possible type. As a rule, it's either double or decimal. Accordingly, the result of function calculation will mostly have decimal or double data type.

View the Functions:

Function

Description

Sample


Date:

{DateDiff(,)}

Calculates the distance between the specified dates
 Arguments should be of the DateTime type
 Returns the TimeSpan value

{DateDiff(DateSerial(2022,1,30),DateSerial(2022,1,1))} - the result is 29.00:00:00, that means 29 days.
{DateDiff(DataSource.Column1,DataSource.Column2)} - the result will be calculated for each value in Column1

{DateSerial(,,)}

Specifies date. 
 Arguments should be year, month, day
 Returns the DateTime value

{DateSerial(2022,1,30)} - the result is 1/30/2022 12:00:00 AM
The function returns the DateTime value, but if you want to display only the date, you should apply text formatting to the text component

{Day()}

Shows a day from the specified date
 Arguments should be of the DateTime type
 Returns the long value

{Day(DateSerial(2022,1,30))} - the result is 30, since in arguments the January 30 2016 is specified
{Day(DataSource.Column)} - the result will be calculated for each Column value

{DayOfWeek()}

Display a day of the week from a specified date in text form.
 In arguments specify:

![](../../images/img_1.png) Date (the DateTime type)
![](../../images/img_2.png) Culture (the string type)
![](../../images/img_3.png) The value true or false (the bool type), to display the result with a capital letter or with a lowercase
![](../../images/img_4.png) The value true or false (the bool type), depending on which the system culture or designer localization will be used
 Returns the string type

{DayOfWeek(DateSerial(2022,1,30))} - the result is Sunday.
{DayOfWeek(DataSource.Column)} - for each value a day of the week will be calculated

{DayOfWeek(DateSerial(2022,1,30),"de")} - the result will be Samstag, because the de culture is set.
{DayOfWeek(DataSource.Column,"de")} - all results will correspond to the de culture

{DayOfWeek(DateSerial(2022,1,30),"en", false)} - the day of the week will start from the lower-case letter, i.e. sunday.
{DayOfWeek(DataSource.Column,"de", true)} - the days of the week will start with the capital letter, for example Samstag.

{DayOfWeek(DateSerial(2022,1,30), false)} - the day of the week will be displayed on the culture that is used by the system.
{DayOfWeek(DataSource.Column, true)} - the day of the week will be displayed in the culture that is used in the report designer.

{DayOfYear()}

Displays a day of the year 
 Specifies the date in the argument (the DateTime type)
 Returns the long value

{DayOfYear(DateSerial(2022,2,14))} - the result is 45, since February 14 is the 45th day of a year.
{DayOfYear(DataSource.Column)} - for each value of the Column the data of a year will be calculated.

{DaysInMonth()}

Displays the number of days in the month:
 In arguments specify: 
![](../../images/img_1.png) Date (the DateTime type)
![](../../images/img_2.png) Year and month (the long type)
 Returns the long value

{DaysInMonth(DateSerial(2024,2,1))} - the result will be 29, because 2024 is a leap year and there are 29 days in February.
{DaysInMonth(DataSource.Column)} - for each value the number of days in a month will be calculated.

{DaysInMonth(2022,3)} - the result will be 31, since there are 31 days in March.

{DaysInYear()}

Displays the number of days in a year:
 Specifies the date in arguments (the DateTime type) or a year (the long type)
 Returns the long value

{DaysInYear(2024)} - the result will be 366 days, since 2024 is a leap year.
{DaysInYear(DataSource.Column)} - for each value of the Column the number of days in a year will be calculated.

{Hour()}

Displays an hour:
 Specifies time in arguments (the DateTime type) 
 Returns the long value

{Hour(DataSource.Column)} - an hour will be displayed from each value. For example, if time is 16:22:36, then the result is 16.

{Minute()}

Displays minutes:
 Specifies time in arguments (the DateTime type) 
 Returns the long value

{Minute(DataSource.Column)} - minutes will be displayed from each value. For example, if time is 16:22:36, then the result is 22.

{Month()}

Displays months:
 Specifies time in arguments (the DateTime type) 
 Returns the long value

{Month(DateSerial(2022,12,1))} - the result will be 12, as the date is set on December 1, 2022.
{Month(DataSource.Column)} - for each value of the Column a month will be displayed.

{MonthName()}

Displays the month name of the specified date
 Specifies in arguments:
![](../../images/img_1.png) Date (the DateTime type) and culture (the string type)
![](../../images/img_2.png) Culture (the string type),

![](../../images/img_3.png) The true or false value (the bool type), to display the result with a capital letter or with a small letter.
![](../../images/img_4.png) The true or false value (the bool type), depending on which the system culture or designer localization will be used
 Returns the string value

{MonthName(DateSerial(2022,1,1))} - the result is January, because the 1 of January 2022 is set.
{MonthName(DataSource.Column)} - the result is the name of the month for each Column value.


{MonthName(DateSerial(2022,2,1),"de")} - the result will correspond to the de culture, i.e. Februar.
{MonthName(DataSource.Column,"en")} - all the names of months will correspond to the en culture.

{MonthName(DateSerial(2022,1,1), false)} - the name of the month will be in lower case.
{MonthName(DataSource.Column, true)} - the name of the months will start with a capital letter.

{MonthName(DateSerial(2022,1,1), false)} - the name of the month will correspond to the culture used by the system.
{MonthName(DataSource.Column, true)} - the names of months will correspond to the culture that corresponds to the culture of the report designer.

{Second()}

Displays seconds:
 Specifies time in arguments (the DateTime type) 
 Returns the long value

{Second(DataSource.Column)} - seconds will be displayed from each value. For example, if time is 16:22:36, then the result is 36.

{TimeSerial(,,)}

Displays time:

Specifies hours, minutes, seconds in arguments (the long type) 
 Returns the TimeSpan value

{TimeSerial(1,14,20)} - the result is 01:14: 20, 1 hour, 14 minutes, 20 seconds.

{Year()}

Displays year:

Specifies date in arguments (the DateTime type) 
 Returns the long value

{Year(DateSerial(2022,1,2))} - the result will be 2022, since the date is January 2, 2022.
{Year(DataSource.Column)} - the years from each Column value will be displayed.


Math:

{Abs()}

Displays the absolute number.
 Specifies the number is arguments (the double,decimal,long type) 
 Returns respectively double, decimal, long

{Abs(-42)} - the result is 42
{Abs(DataSource.Column1)} - the result will be absolute numbers from the values of Column1, i.e. without considering the number.

{Acos()}

Displays the angle value in radians.
 The cos values in arguments (the double type) 
 Returns the angle value in radians of the double type

{Acos(-1)} - the angle in radians will be calculated for the value cos = -1, i.e. the angle will be ~ 3.14.
{Acos(DataSource.Column1)} - for all cos values, the angle in radians will be calculated.

{Asin()}

Displays the angle value in radians.
 The sin value in arguments (the double type) 
 Returns the value of the angle in radians of the double type

{Asin(0)} - the angle in radians will be calculated for the value sin = 0, i.e. the angle is 0
{Asin(DataSource.Column1)} - for all sin values, the angle will calculated in radians.

{Atan()}

Displays the angle value in radians.
 The tan value in arguments (the double type) 
 Returns the value of the angle in radians of the double type

{Atan(-1)} - the angle in radians will be calculated for the value tan = -1, i.e. the angle will be ~ -0.79
{Atan(DataSource.Column1)} - for all tan values the angle in radians will be calculated

{Ceiling()}

Displays the maximum integer value for a specified number

The value is specified in arguments (the double, decimal type) 
 Returns the value of the angle in radians of the double and decimal type

{Ceiling(25.124)} - It is worth noting that when this function is used, the number is not rounded.
{Ceiling(25.9)} - the result is 26
{Ceiling(DataSource.Column)} -  for all Column values, the nearest maximal integers will be found and displayed.

{Cos()}

Calculates and displays the cos value:

The value of the angle in radians is specified in arguments (the double type) 
 Returns double, decimal values

{Cos(0)} - the result is 1.
{Cos(DataSource.Column1)} - for all values, the cos of the angle will be calculated.

{Div()}

Displays the result of the division of one argument to another:
 In arguments, the following is specified:
![](../../images/img_1.png) The dividend and divisor (the double, decimal, long type).

![](../../images/img_2.png) The dividend and divisor and value that is the result, if the divisor is equal to 0.


Returns the value of the double, decimal, and long types

{Div(2,1)} - the result is 2, because 2 / 1 = 2
{Div(2,0,4)} - the result is 4, because the divisor is 0 and the third argument will be displayed

{Div(DataSource.Column1,DataSource.Column2,DataSource.Column3)} - the results of dividing the Column1 values by the values of Column2 will be displayed. In this case, if Column2 contains zero values, then, instead of the result of the division, in this line, the values from Column3 will be displayed.

{Exp()}

Displays the result of rising to the specified degree the number e:

The arguments indicate the degree to which the number e must rise (the long type) 
 Returns the value of the double type

{Exp(4)} - the number e will be raised to the 4th degree.
{Exp(DataSource.Column1)} - each value from Column1 will be the degree to which the number e will be raised.

{Floor()}

Displays the minimum integer value to the specified number:

The value is specified in arguments (the double, decimal type) 
 Returns the value of the double, decimal types

{Floor(123.59)} - the result will be 123 because this is the nearest minimum integer. It should be noted that this function does not round numbers.
Floor(101.99)} -  the result is 101
{Floor(DataSource.Column1)} - for all Column1 values, the nearest minimum integers will be found and displayed.

{Log()}

Calculates the natural logarithm:

The value is specified in arguments (the double type) 
 Returns the value of the double type

{Log(x)}, where x is a number or an expression, the result is a calculation of the natural logarithm.

{Maximum(,)}

Compares the two values and displays the maximum:

Two values are specified in arguments (the long, decimal, double type) 
 Returns the value of the long, decimal, double types

{Maximum(5,9)} - the result is 9.
{Maximum(DataSource.Column1,DataSource.Column2)} - all the Column1 values are equal to the Column2 values. The report will display the maximum numbers.


{Minimum(,)}

Compares the two values and displays the minimum:

Two values are specified in arguments (the long, decimal, double type) 
 Returns the value of the long, decimal, double types

{Minimum(5,9)} - the result is 5.
{Minimum(DataSource.Column1,DataSource.Column2)} - all the Column1 values are equal to the Column2 values. The report will display the minimum numbers.

{Round()}

Rounds up the value to an integer or up to the certain number of decimal:

In arguments, the following is specified:
![](../../images/img_1.png) The value (the decimal, double types),

![](../../images/img_2.png) Number of characters to which the fractional part should be rounded (the int type)

Returns the value of the decimal, double types

{Round(7.56)} - the result is 8
{Round(DataSource.Column1)} - all Column1 values will be rounded according to the mathematical rounding rules.

{Round(5.7896541897,3)} - the result is 5.789
{Round(DataSource.Column1,2)} - all values from the data column will be rounded up to two decimal places in the fractional part, according to the mathematical rounding rules.

{Sign()}

Displays an indicator. For positive numbers 1, 0 - for all zero values, -1 - for negative values:

The value is specified in arguments (the long, decimal, double types). 
 Returns the value of the long type

{Sign(256)} - the result is 1.
{Sign(0)} - the result is 0.
{Sign(-157)} - the result is -1.
{Sign(DataSource.Column1)} - to each value from Column1, depending on the sign of the number, an indicator will be assigned.

{Sin(0)}

Calculates sin of an angle:

The value of an angle in radians is specified in arguments (the double type). 
 Returns the value of the long type

{Sin(0)} - the result is 0.
{Sin(DataSource.Column1)} - for all values, the sin angle is calculated.

{Sqrt()}

Calculates the square root of the number:
 The number is specified in arguments (the double type). 
 Returns the value of the double type

{Sqrt(4)} - the result will be 2 because the square root of 4 is 2.
{Sqrt(DataSource.Column1)} - for all Column1 values, the square root will be calculated.

{Tan()}

Calculates tg of an angle:

The value of an angle in radians is specified in arguments (the double type). 
 Returns the value of the long type

{Tan(90)} - the result is ~ -1.995
{Tan(DataSource.Column1)} - for all values, the tan of the angle will be calculated.

{Truncate()}

Displays only the integer part without rounding:
 The value is specified in arguments (the double, decimal types). 
 Returns the value of the double, decimal types

{Truncate(Sqrt(5))} - the result will be number 2 because the square root of 5 is ~ 2.236. The whole part in this number is 2.

{Truncate(DataSource.Column1)} - only the integer part of all Column1 values will be displayed.


Print State:

{IsNull(,)}

Identifies null values in the specified data column. If there is a null value, the result is true, otherwise - false.

In arguments, the following is specified:
![](../../images/img_1.png) The data source (the object type)
![](../../images/img_2.png) The column name (the string type).

Returns the value of the bool type

{IsNull(DataSource.Column)} - in the rendered report, instead of null values, the true values will be output, and instead of other values, false values will be shown.

{Next(,)}

Displays the value from the next line. If the value of the next line is null, the result is 0.

The data source is specified in arguments (the object type) and a column name (the string type). 
 Returns the value of the object type

For example, the Column column contains values 2, 5, 9. Then, using the function {Next(DataSource, "Column")}, the first value will be 5, the second 9, and the third will be null.

{NextIsNull(,)}

Compares the value of the string with the value of the next line. If the value of the next line is 0 or null, the result is true, otherwise - false.

In arguments, the following is specified:

![](../../images/img_1.png) The data source (the object type)
![](../../images/img_2.png) The column name (the string type).

Returns the value of the bool type

For example, the Column data column contains the values 2, 0, 9. Then, using the function {NextIsNull(DataSource, "Column")}, the first value is true; the second is false; the third is true.

{Previous(,)}

Displays the value from the previous line. If the value of the next line is null, the result is 0.

In arguments, the following is specified:

![](../../images/img_1.png) The data source (the object type)
![](../../images/img_2.png) The column name (the string type).

Returns the value of the object type

For example, the Column column contains values 2, 5, 9. Then, using the function {Previous(DataSource, "Column")}, the first value will be null, the second value will be 2, the third value will be 5.

{PreviousIsNull(,)}

Compares the value of the string with the value of the previous row. If the value of the previous line is 0 or null, the result is true, otherwise - false.

In arguments, the following is specified:
![](../../images/img_1.png) The data source (the object type).
![](../../images/img_2.png) The column name (the string type).

Returns the value of the bool type.

For example, the Column data column contains the values 2, 9, 0. Then, using the function {PreviousIsNull (DataSource, "Column")}, the first value is true; the second is false; the third is false.


Programming Shortcut:

{Choose()}

Displays the value by index.

The arguments specify the index and values.
 Returns values by index.

All product groups are grouped by category: expensive goods, medium price goods, cheap goods. An index is assigned to each group: expensive - index 1, average - index 2, cheap - index 3. The report should be displayed instead of their index - category. In this case, you can use the Choose function.


{Choose(DataSource.Column1, "expensive", "average", "cheap")} - instead of index 1, the value expensive will be displayed, instead of index 2 - average, instead of index 3 - cheap.

{IIF(,,)}

Used to display a particular value, depending on the condition:

In arguments, the condition is specified, the value if the condition is true (true) and the value if the condition is false (false)
 Returns the value of the object type

In the inventory report, you need to track the number of items. The logistician's task is that, when the quantity of goods is coming to 0 (less than 6), it is necessary to order these goods. To highlight critical positions in the report visually, you can use the function {IIF (,,)}


{IIF(DataSource.Column1 > 6,"Minimum","Normal")}, 
where DataSource.Column1 - the column with the values of the quantity of goods, 6 - the extreme quantity of goods, Minimum - the value that will be displayed if the stock of goods is less than 6, Normal - the value to be displayed if the stock of goods is 6 or more.

{Switch()}

Assigns the specified value when the specified condition is complete:
 In arguments, specify the condition and the value that will be assigned, if the condition is complete. Such condition-value pairs can be specified
 Returns the value of the object type

For example, a list of employees is displayed in the report, and you need to display their position: Nancy is the lead project manager, Andrew is the chief developer, the remaining employees (6 people) are Juniors. In this case, the Switch function will have three pairs of "condition-value" arguments:

{Switch(Employees.FirstName == "Nancy", "Manager", Employees.FirstName == "Andrew", "Developer", Employees.FirstName! = "", "Junior" )}


Strings:

{Arabic()}

Converts these numbers to Arabic numerals:
 The value is specified in arguments ( the string or int types)
 Returns the value of the string type

{Arabic(2)} - the number 2 will have an Arabic spelling.
{Arabic(DataSource.Column1)} - all the numbers from Column1 will have an Arabic spelling.

{DateToStr()}

Converts date to text value:
 In arguments, the following is specified:
![](../../images/img_1.png) Date (the DateTime type) 
![](../../images/img_2.png) Boolean values (true or false) for displaying the header that starts with a capital letter or with a lowercase letter.
 Returns the value of the string type

{DateToStr(DataSource.Column1)} - all dates from Column1 will be displayed in text form.

{DateToStrPl(DataSource.Column1,true)} - dates will be displayed in text form, in Polish and the first character is a capital letter.

{DateToStrPl(DataSource.Column1,false)} - dates will be displayed in text form, in Polish and the first character is a lowercase letter.

{DateToStrPtBr(DataSource.Column1)} - the dates will be displayed in text form in the Brazilian language.

{Insert(,,)}

Inserts a value after a certain character into another value:

In arguments, the following is specified:
![](../../images/img1.png) The value in which to insert text (the string type),

![](../../images/img_2.png) The number of a character, after which the value is inserted (the int type),

![](../../images/img_3.png) The value for insertion (the string type)
 Returns the value of the string type

{Insert("25",2," dollars")} - in the value 25, after the second symbol, the value dollars will be inserted, i.e. the result will be 25 dollars.

{Insert(DataSource.Column1,2,DataSource.Column2)} - in the Column1 value, after the second character, Column2 values will be inserted. For example, Column1 - contains the value of Category, Column2 - Products, then the result will be CaProductstegory.

{Left()}

Displays the specified number of characters from the left side of the value:
 The value is specified in arguments of the string type string and the number of characters to be displayed (the int type)
 Returns the value of the string type

{Left("Beverages", 4)} - only four characters from the Beverages value will be displayed, the result will be Beve.

{Left(DataSource.Column1, 2)} - only the first two characters for each Column1 value will be displayed.

{Length()}

Displays the number of characters for the specified value:

The value is specified in arguments (the string type)
 Returns the value of the int type

{Length("Beverages")} - the result will be number 9 because the value Beverages consists of nine characters.
{Length(DataSource.Column1)} - for each Column1 value, the number of characters will be calculated, and this result will be displayed.

{Mid()}

Displays characters from a value. In this case, you can set the reference position:
 In arguments, the following is specified:
![](../../images/img_1.png) The value (the string type)

![](../../images/img_2.png) Index of the reference position (the int type)

![](../../images/img_3.png) Number of characters to display (the int type)
 Returns the value of the int type

{Mid("Beverages",2,3)} - three symbols will be displayed after the first two, the result will be ver.

Mid(DataSource.Column1,3,2)} - 2 characters will be displayed after the first three for all values.

{Persian()}

Converts specified numbers to numbers in Persian:
 The value is specified in arguments of the string or int types
 Returns the value of the string type

{Persian(5)} - number 2 will have Persian spelling.
{Persian(DataSource.Column1)} - all the numbers from Column1 will have Persian spelling.

{Remove()}

Deletes the specified number of characters from the index of a specific position:
 In arguments, the following is specified:
![](../../images/img_1.png) The value (the string type)

![](../../images/img_2.png) Index of the reference position (the int type)

![](../../images/img_3.png) Number of characters to delete (the int type)
 Returns the value of the int type

{Remove("Beverages",2,3)} - after the second character, three characters will be deleted, the result is Beages.

{Remove(DataSource.Column1,3,2)}  - for all values from Column1, two characters will be deleted after the first three.

{Replace(,,)}

Replaces certain characters or their combination with other characters:
 In arguments, the following is specified:
![](../../images/img_1.png) The value (the string type) in which the replacement will be made

![](../../images/img_2.png) Characters to be replaced (the string type)

![](../../images/img_3.png) Characters to be inserted (the string type)
 Returns the value of the string type

{Replace("Beverages","ver","NEW")} - in the value Beverages, the ver characters will be replaced by the characters NEW, the result is BeNEWages.

{Replace(DataSource.Column1, "rex","sum")} - for Column1 values, in which the combination of rex characters occurs, rex will be replaced by sum. In values where there is no combination of rex, a replacement will not be done.

{Right()}

Displays the specified number of characters from the right side of the value:
 The value is specified in arguments of the string type and the number of characters which should be displayed (the int type)
 Returns the value of the string type

{Right("Beverages",3)} - three characters from the right side of the value will be displayed, ges.

{Right(DataSource.Column1,4)} - for each Column1 value, four characters will be displayed from the right side.

{Roman()}

Converts Arabic numerals to Roman numerals:
 In the arguments, specify the number (the int type)
 Returns the value of the string type

{Roman(4)} - the number 4 will have a Roman spelling.
{Roman(DataSource.Column1)} - all the numbers from Column1 will have a Roman spelling.

{Substring()}

Displays a certain number of characters from the specified position:
 In arguments, the following is specified:
![](../../images/img_1.png) The value (the string type) from which the characters will be displayed

![](../../images/img_2.png) The index of position (the int type), how many characters are skipped

![](../../images/img_3.png) Number of characters to display (the int type)
 Returns the value of the string type

{Substring("Beverages",6,3)} - the first six characters are skipped and three characters will be displayed, the result is ges.

{Substring("Beverages",0,2)} - two characters will be displayed starting with zero, the result will be Be.

{Substring(DataSource.Column1,1,4)} - the first character is skipped, and four are counted starting from the second one. This is the result for each Column1 value, which is displayed in the report.

{ToCurrencyWords()}

Displays the currency value as the text.
 You can pass to the function:
![](../../images/img_1.png) Argument as numeric value (double, decimal, long) which will be converted to text;

![](../../images/img_2.png) Argument (true or false) to display text with a capital letter;

![](../../images/img_3.png) Argument (true or false) to display cents;

![](../../images/img_4.png) Single and plural formats for currency and cents (the string type);

![](../../images/img_5.png) You can also specify a base unit for the integer part and a fractional.


In addition, various combinations of arguments are possible. There are also some types of this function that support different cultures. Pay attention to you can specify the currencies ISO code (the string type).

Returns the value of the string type

{ToCurrencyWords(100)} - the used currency is dollars of the USA, so that the result will be:  "One hundred dollars and zero cents.

{ToCurrencyWords(100, false)} - the result will be displayed without displaying cents (since it is set to true), the result will be: "One hundred dollars".


{ToCurrencyWords(100,false,true)} - the result will be displayed with the first lowercase letter (since it is set to false) and with displaying cents (since it is set to true), the result will be: "one hundred dollars and zero cents".


{ToCurrencyWords(125.9,true,true,"currency","cent name")} - in this case, the result will be displayed with the first uppercase letter (since it is set to true) and with displaying cents (since it is set to true). Also, we defined the basic unit as "currency", and the fractional unit as "cent name". The result will be: "One hundred and twenty-five currency and ninety cent name".

{ToCurrencyWordsEnGb(1.25,"EUR",2)} - the ISO code EUR will be applied, and the result will be one euro and twenty-five cents.


{ToCurrencyWordsEnIn("dollars","cents",1.25M,0,true)} - the base unit for the integer part as dollars will be specified, the fractional part - cents, the number for conversion 1.25, then the number of decimal signs to convert and the value true means that the entry will start with the capital letter.

{ToLowerCase()}

Displays the value in lowercase:
 The value is specified in arguments (the string type)
 Returns the value of the string type

{ToLowerCase("EURO")} - the result is euro.
{ToLowerCase(DataSource.Column1)} - all values of this column will be displayed in lowercase.

{ToOrdinal()}

Converts numerals to ordinal:
 The value is specified in arguments (the long type)
 Returns the value of the string type

{ToOrdinal(25)} - - the result is 25th.
{ToOrdinal(DataSource.Column1)} - all the values of this column will be converted to ordinal numerals.

{ToProperCase()}

Converts the text to the format - the first character is capital, the rest characters are in lowercase:
 The value is specified in arguments (the string type)
 Returns the value of the string type

{ToProperCase("dOllars")} - - the result is Dollars.
{ToProperCase("dollars")} - - the result is Dollars.
{ToProperCase("dOLLARS")} - - the result is Dollars.
{ToProperCase(DataSource.Column1)} - all values from this column will be with the first capital letter and the rest ones in lowercase.

{ToUpperCase()}

Displays the value in uppercase:
 The value is specified in arguments (the string type)
 Returns the value of the string type

{ToUpperCase("dollars")} - the result is DOLLARS.
{ToUpperCase("dOllars")} - the result is DOLLARS.
{ToUpperCase("dOLLARS")} - the result is DOLLARS.
{ToProperCase(DataSource.Column1)} - all values will be written in uppercase.

{ToWords()}

Displays the numerals as text:
 In arguments, the following is specified:

![](../../images/img_1.png) A numeric value that will be converted to text (decimal, double, long)
![](../../images/img_2.png) True or false values whether to display the first character with a capital letter
![](../../images/img_3.png) True or false values to return null and empty values
![](../../images/img_4.png) It is also possible to specify true or false values to provide the feminine form for the result

 Returns the value of the string type

{ToWords(100)} - the result is one hundred.
{ToWords(100, true)} - the result is One hundred.
{ToWordsEnIn(0,false)} - the result is Zero.
{ToWordsEnIn(0,true)} - there will be no results.
{ToWordsEs(100,true,true)} - the result starts with a capital letter and in feminine form, Cien
{ToProperCase(DataSource.Column1)} - all values will be displayed in text.

{Trim()}

Trims the spaces at the beginning or end of the line:
 The value is specified in arguments (the string type)
 Returns the value of the string type

{Trim("   <1 dollars>   ")} - the result in this case is <1 dollars>".
{Trim(DataSource.Column1)} - the spaces before each value and after each value will be truncated.

{TryParseDecimal()}
{TryParseDouble()}
{TryParseLong()}

Checks the value for conversion to decimal, double, long:
 The value is specified in arguments (the string type)
 Returns a value of the bool type. If true, then the conversion will be successful, otherwise it will be false.

{TryParseLong("100")} - The value can be converted to long.
{TryParseLong(" { 100")} - the result is false. The value cannot be converted to long.
{TryParseLong(DataSource.Column1)} - each value will be checked on possibility to be converted to long.


[Totals in-depth](Totals/index.md)
