## Color Attribute

The color parameter defines the color of the text in the font element. The color can be set in two ways:


By Name

You can define the color by name - a collection of 147 color names is supported. If the report generator is not able to identify the color set, then it ignores the color attribute. For example:

<font color="red" ...>
<font color="black" ...>
<font color="white" ...>


By Hex Value

You can also specify the color using a hex (hexadecimal) value like"#ff0000". It is very important to add the hash symbol '#' before the hexadecimal notation.


The color is a combination of Red, Green and Blue values (#rrggbb). Each of the three colors may have hex values from 00 through to FF. The first two rr symbols indicate the red part of the color, gg symbols indicate the green part of the color, and bb symbols indicate the blue part. A color can be set in a short form using one symbol for each color. For example:

<font color="#FF0000" ...>
<font color="#F00" ...>
<font color="#FF0000" ...>
<font color="#998877" ...>
<font color="#FF00FF" ...>

> **Information**
>
> If the color value set is not recognized or is invalid, then the color specified in the Text component or in the tag is used.

Alternative Tags

The tag or the tag can also be used to define the text color.For example:

<font-color="red">
<color="red">
