## Support for GS1 standard

The GS1 barcode standard is an international system for identifying products, services, and objects, enabling their unique labeling worldwide.


Key points:

* The GS1 organization manages the standards, ensuring consistency of codes across different countries.

* Each code is based on a unique identifier (GTIN), which links the product to its information in databases.

* Different barcode formats are used: linear (EAN-13, UPC, ITF-14) and two-dimensional (QR, DataMatrix, GS1 Digital Link).


On the surface, GS1 barcodes may look like ordinary EAN-13, Code 128, or DataMatrix codes, but internally they encode information according to strict rules that distinguish them from “regular” uses of the same formats.


Main differences in data encoding inside the code:


Structure and identifiers

In GS1, there are Application Identifiers (AI)—service prefixes that indicate what exactly is encoded (for example, 01 = GTIN, 17 = expiration date, 10 = batch number).

In regular barcodes, the data is stored “as is” without such identifiers.


Global uniqueness

GTIN and other codes follow the principle: country prefix → manufacturer code → product code → check digit.

In regular barcodes, the structure can be arbitrary, and uniqueness is maintained only within a local database.


Support for multiple fields in one code

GS1-128 or GS1 DataMatrix can store GTIN, date, batch, serial number, etc., all in one code. To separate fields of variable length, the FNC1 character (or special markers) is used.

Standard barcodes usually encode only a single data string.


Interpretation in software

Scanners that recognize GS1 automatically detect AIs and map the data into structured fields (GTIN, expiration date, etc.).

Regular barcodes simply transmit a string of characters without understanding its structure.


In simple terms:

GS1 takes familiar “boxes” (barcode formats) and standardizes how and in what order the content is placed inside them—so that any scanner worldwide can understand what it is and where it comes from.


Supported Barcode Types in Our Product

EAN-13 — the most common barcode in retail, based on GTIN-13;

EAN-8 — a shorter version for small packages;

UPC-A — the U.S. equivalent of EAN-13 (GTIN-12);

UPC-E — a compressed version of UPC-A;

ITF-14 — used for transport packaging (GTIN-14);

GS1-128 — a version of Code 128 with AI fields (GTIN, expiration date, batch, serial numbers, etc.);

SSCC (Serial Shipping Container Code) — used to label logistic units such as pallets, containers, and boxes, rather than individual products;

GS1 DataMatrix — widely used in medicine, pharmaceuticals, and industrial product marking;

GS1 QR Code — a QR code with AI support (including GS1 Digital Link for direct access to product-related web pages);
