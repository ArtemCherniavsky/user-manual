## Postnet

The POSTNET (POSTal Numeric Encoding Technique) barcode was developed by the United States Postal Service to encode ZIP-codes in letters for quickly and reliable sorting with the help of the BCSs. It can encode ZIP, ZIP+4, and ZIP+4+2 postal codes.


Valid symbols:

0123456789

Length:

Fixed, 5, 9 or 11 characters

Check digit:

One, algorithm modulo-10

The Postnet barcode can encode 0-9 digits. The barcode consists of short and long bars. Each symbol of data is encoded using five bars. This barcode always contains only one check symbol, that is calculated by the modulo-10 algorithm.


![](../../../../images/topics/Report_Internals.BarCodes.Linear_Barcodes.Other_barcodes.Postnet_1.png)


A "Postnet" barcode. "11387975204" is a number encoded in the barcode.
