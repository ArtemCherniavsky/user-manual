## Formatting Tags

The report generator supports nine tags for changing a font style: <b>, <i>, <u>, <s>, <sup>, <sub>, <strong>, <p>, <br>. These HTML tags are called formatting tags. These formatting tags can make text bold, italic, sub/superscripted, and more.


The example below shows how the <b> tag works in a text expression.  If you enter the following expression:


This <b>text</b> is bold.


then after calculation the result appearing in the report will be:

This text is bold.

> **Information**
>
> Note that the word 'text' is enclosed within the opening and closing <b> and </b> tags.

Formatting tags can be used in combination with other formatting tags to changing the text style. For example, if you  enter the following expression:

This <i><b>text</b></i> is bold italic.

then after calculation the result appearing in the report will be:

This text is bold italic.

Style intersection is not allowed, formatting tags may not be nested partly inside and partly outside another formatting tag. For example:

<b>This <i>text</b> is bold</i> italic.  // This will fail

The available formatting tags are discussed in detail in the following topics.
