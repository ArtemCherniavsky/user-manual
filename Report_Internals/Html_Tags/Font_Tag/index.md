## HTML tag

The tag is used to add style, size, and color to a text expression. If there is no closing tag then all changed font characteristics will be applied from the beginning of the tag and to the end of the text.


Syntax:

<font face="FontName" color="#rrggbb" size="n"> </font>

Parameters:

color    Defines the color of the text.

face    Defines the font of the text.

size    Defines the size of the text.

Not all of these attributes have to be used. The default value is set within the attributes of the text component, so if the font size of the text component is 8 points and the size parameter is not used in the tag, then the text will be output at 8 points. The same rule works for the other attributes.

Example:

If you enter the following expression:

Test <font color="red" face="Courier" size="18">Test</font> Test

then after calculation the result appearing in the report will be:
