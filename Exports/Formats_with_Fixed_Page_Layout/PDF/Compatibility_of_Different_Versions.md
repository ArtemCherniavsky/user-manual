## Compatibility of Different Versions


The information below shows the compatibility of Adobe Acrobat versions.


Adobe Acrobat 5:

* the PageScaling option from the file is ignored. By default the option in parameters of Adobe Acrobat is set to "None" but "Fit to printable area" value is used.


Adobe Acrobat 5 & 6:

* when editing Adobe Acrobat does not recognize the Unicode - only Latin characters are output (Latin-1 encoding), other characters are output as dots;

* if the "UseUnicode" option in export parameters is enabled, then it is necessary to embed fonts (the "Embedded Fonts" option), otherwise the will be output incorrectly.


Adobe Acrobat 7:

* it is necessary to embed fonts to the PDF file. Otherwise, when editing, any font will be replaced on the default font (usually on Tahoma).


Adobe Acrobat 7 Reader:

* there are some problems with 7.0.5 - 7.0.9 versions. In these versions the field is not included into the editing mode, if there are non Latin characters present in the text field (different from Latin-1).


**Adobe Acrobat 9**

* Support for 256-bit encryption. In earlier versions, files with 256-bit encryption algorithm will not be opened.


**Adobe Acrobat Х**

* Support for 256-bit encryption with improved internal calculations, and hence with a more crypto-stable algorithm.
