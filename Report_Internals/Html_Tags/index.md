## HTML Tags

Stimulsoft Reports has the ability to format text using standard HTML formatting tags. Sometimes it is necessary to make part of a text expression look Bold, Italic, or Underlined. For example you may wish to achieve something like this:


The fifth word is bold


HTML tags can help achieve this. The output shown above could be generated using the following expression:

The fifth word is <b>bold</b>


It is possible to get a similar result without using HTML by using the Rich text component, but there are some difficulties and the Rich text component works very slowly, so using HTML tags is often the best way to achieve the desired result.


HTML tags can be included only in the text part of expression, in other words their use is possible only in the Text property of the Text component.


> **Information**
>
> HTML tags can be included only in the text part of an expression.

For example, the following expressions are correct:

This is a simple <i>expression {1+2}</i>
This is a simple <i>expression</i> {1+2}
This is a simple expression <i>{1+2}</i>

These expressions however are incorrect:


The is a simple <i>expression {1</i>+2}


The is a simple <i>expression {1+2</i>}


The is a simple expression {<i>1+2}</i>

In the examples above the HTML tags are placed within the body of an expression that will be calculated by C# or VB.Net, shown by the curly braces, so they are impossible to process.


> **Information**
>
> Do NOT place HTML tags inside the curly braces of any expression or the expression will fail.

Available Tags

There are few limitations  - most valid HTML style tags can be inserted, with the exception of ordered list and unordered list tags.  If you need to generate such lists you can use the Rich Text control or create the layout manually.


> **Information**
>
> You cannot use Ordered and Unordered List tags within expressions.

HTML tags can be nested to an unlimited depth. For example:


This is a <b>simple <i>expression {1+2}</i></b>


If a tag is not closed, then the tag works to the end of the text line.


If HTML tags are used in a text expression then any line breaks in that expression are ignored. If you need to enforce a line break in your text, use the <br> tag.


> **Information**
>
> Use the <br> tag to break a line when using HTML tags.

Activating HTML Tags

It is important to know that by default HTML tags in expressions are simply ignored. To allow the use of HTML tags it is necessary to set the AllowHtmlTags property of the Text component to true.


> **Information**
>
> Set the AllowHtmlTags property to true to allow the use of HTML tags in the text expression.

The list of HTML tags, which are supported in the Stimulsoft software


**Name**

**Description**


Font tags**:**

<font color="#rrggbb" face="FontName" size="1..n"> </font>

Defines the color, font and size of a text. [Learn More.](Font_Tag/index.md)

<font-face="FontName"> </font-face>

Defines the font of a text. [Learn More.](Font_Tag/Face_Parameter.md)

<font-name="FontName"> </font-name>

Defines the font of a text. [Learn More.](Font_Tag/Face_Parameter.md)

<font-family="FontName"> </font-family>

Defines the font of a text. [Learn More.](Font_Tag/Face_Parameter.md)

<font-size="1..n"> </font-size>

Defines the size of a text. [Learn More.](Font_Tag/Size_Parameter.md)

<font-color="#rrggbb"> </font-color>

Defines the color of a text. [Learn More.](Font_Tag/Color_Parameter.md)


Font style tags**:**

<b> </b>

Makes a text bold. [Learn More.](HTML_Tags_to_Change_Font_Style/Html_tag_b.md)

<i> </i>

Makes a text italicized. [Learn More.](HTML_Tags_to_Change_Font_Style/Html_tag_i.md)

<u> </u>

Underlines a text. [Learn More.](HTML_Tags_to_Change_Font_Style/Html_tag_u.md)

<s> </s>

Displays an underlined text. It is a shorthand note of the <strike> tag. [Learn More.](HTML_Tags_to_Change_Font_Style/Html_tag_s.md)

<sub> </sub>

Displays a text as a subscript. The text will be located below the base text line and its size will be reduced. [Learn More.](HTML_Tags_to_Change_Font_Style/Html_tag_sub.md)

<sup> </sup>

Displays a text as a superscript. The text will be located above the base text line and its size will be reduced. [Learn More.](HTML_Tags_to_Change_Font_Style/Html_tag_sup.md)

<strong> </strong>

Accentuates a text, i.e determines the importance of the text and makes it in bold in the browser.  [Learn More.](HTML_Tags_to_Change_Font_Style/Html_tag_strong.md)

<em> </em>

Accentuates a text, in other words determines the importance of the text, and highlights it in a browser in the italic font style. [Learn More.](HTML_Tags_to_Change_Font_Style/HTML_Tag_em.md)

<strike> </strike>

Displays an underlined text, it's analogous to the <s> tag. [Learn More.](HTML_Tags_to_Change_Font_Style/Html_tag_s.md)


Spacing tags**:**

<letter-spacing="0"> </letter-spacing>

Defines a spacing between symbols within an element, in units of a font height. [Learn More.](Letter_Spacing.md)

<word-spacing="0"> </word-spacing>

Sets a spacing between words, in units of a font height. [Learn More.](Html_tag_word-spacing.md)

<line-height="1"> </line-height>

Sets a line spacing of a text. [Learn More.](Html_tag_line-height.md)

<text-align="left"> </text-align>

Changes the horizontal alignment of a text - **left**, **right**, **center** and **justify**.  [Learn More.](Html_tag_text_align.md)


Paragraph tags**:**

<br> , <br />

Inserts a line break. Unlike the <p> tag, it doesn`t add a blank indent before a line. [Learn More.](HTML_Tags_to_Change_Font_Style/Html_tag_br.md)

<p> </p>

Defines a text paragraph. The tag is a block element, a blank line is always added before it, and paragraphs of a text following each other are separated by vertical space. [Learn More.](HTML_Tags_to_Change_Font_Style/Html_tag_p.md)


Tags of lists**:**

<ul> </ul>

Sets a bulleted list. Each element of the list should start with the **<li>** tag. [Learn More.](HTML_Tags_to_Change_Font_Style/HTML_ul_Tag.md)

<ol> </ol>

Sets a numbered list. Each element of the list should start with the **<li>** tag. [Learn More.](HTML_Tags_to_Change_Font_Style/Html_tag_ol.md)

<li> </li>

Defines a separate item of a bulleted or a numbered list.


URL tags**:**

<a href="...">…</a>

Sets a URL address to insert, when clicking on a text which is enclosed between opening and closing tags


Color and background tags**:**

<color="#rrggbb"> </color>

Defines the color of a text.

<background-color="#rrggbb"> </background-color>

Defines the color of a text background.


Style attributes:

color

Defines the color of a text in an element.

background-color

Defines the color of an element background.

text-decoration: underline, line-through, none

Sets the kind of text decoration:

underline - underline text;

line-through - cross out text;

none - cancels all effects, including effects for links.

font-weight: bold, normal

Defines a font weight – bold or normal.

font-style: normal, italic

Defines font style – normal or italic.

font-size

Defines font size.

font-face, font-family, font-name

Defines a font.

vertical-align: baseline, sub, super

Defines the vertical alignment:

baseline is analogous to the </sub> or the </super> tags.

sub. An element is displayed as a subscript. And font size won't be changed. It is analogous to the <sup> tag.

super. An element is displayed as superscript. This will not change the font size. Similar to the <sup> tag.

letter-spacing: normal, x.x

Defines a spacing between symbols within an element:

normal is a value by default;

x.x is a custom value in a font height units.

word-spacing: normal, x.x

Defines a spacing between symbols within an element:

normal is a value by default;

x.x is a custom value in a font height units.

line-height: normal, x.x

Sets a line spacing:

normal is a value by default;

x.x is a custom value in a font height units.

text-align: left, center, right, justify

Defines the horizontal alignment:

left - align an element to the left;

center - align an element to the center;

right - align an element to the right;

justify - align an element to the width

margin-top, margin-bottom

Sets the amount of an indent from the top and the bottom edge of an element. It is relevant only for the <p> tag.

margin

Sets the amount of an indent from the top and the bottom edge of an element. It is relevant only for the <p> tag.


Color formats:

#rrggbb

Defines a color in the RGB format as a HEX code.

#rgb

Defines a color in the RGB format as a HEX code in a short form.

rgb(r,g,b)

Defines a color in the RGB format with the help of decimal values.


Special characters ([more than 200](Special_Characters.md)). Below is a list of the most frequently used:

&amp;

Displays the ampersand - &. [Learn More.](Special_Characters.md)

&lt;

Displays the sign less than - <. [Learn More.](Special_Characters.md)

&gt;

Displays the sign greater than - >. [Learn More.](Special_Characters.md)

&quot;

It gives the ability to display the double quote - ". [Learn More.](Special_Characters.md)

&apos;

It gives the ability to display the quote - '. [Learn More.](Special_Characters.md)

&nbsp;

Displays the no-break space. [Learn More.](Special_Characters.md)

&#xxxx;

The template of symbol entry in the ASCII encryption. [Learn More.](Special_Characters.md)


Font format:

Font name formats: name name1,name2

Specifies several fonts.
