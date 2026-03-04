## Formatting in Text


The Text Format tool allows values formatting using a lot of parameters and options. But this tool has one weak point. Formatting is applied on the whole text object. For example, if the text component is used to output data, then it is easy to format. But to do if it is required to format only one value from an expression? Or what to do if it is required to format two or more values of an expression? In this case it is recommended to use the string.Format method. This method is used to make almost the same kind of formatting as if you use the Text Format tool. But the string.Format method is more flexible. For example, to format the value as a currency the C specificator is used:


Currency values: {string.Format(“{0:C}”, Value) }


if Value is 123.12, then after formatting the line will be:

Currency values: $123.12


The string.Format method may have more than one parameter of formatting, for example:

Currency values: {string.Format(“value1 - {0:C}, value2 - {0: 1}”, Value1, Value2) }


Please read MSDN to get more information about string.Format.
