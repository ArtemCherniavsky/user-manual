## PDF417 Macro

PDF417 Macro is an extension of the standard PDF417 format that allows encoding very large data sets by splitting them into multiple symbol segments. Each segment is represented by a separate PDF417 barcode, and together they form one logical message.


This mechanism makes PDF417 Macro especially useful for encoding documents, long texts, or records that exceed the data capacity of a single PDF417 symbol.


Key Features of PDF417 Macro


* Segmentation of large data

Data is divided into chunks (segments), each encoded into a separate PDF417 symbol.


* Message identification

Each barcode contains metadata identifying the sequence of the message:


File ID — a unique identifier of the entire data set.

Segment Index — the position of the current segment within the sequence

Segment Count — the total number of segments.

Checksum — optional, for data integrity validation.


* Automatic reconstruction

Scanners and decoding software that support PDF417 Macro automatically recognize multiple barcodes with the same File ID, arrange them in the correct order using segment indices, and reconstruct the original full data set.


Differences Between Standard PDF417 and PDF417 Macro


Feature

PDF417

PDF417 Macro

Data capacity

Limited to the maximum size of a single symbol (approx. 1.1 KB).

Virtually unlimited, by splitting data into multiple symbols.

Segmentation

Not supported. Each symbol is independent.

Supported. The large data is divided into multiple segments.

Message identification

No support for linking multiple symbols.

Includes File ID, segment indices, and other metadata to link symbols.

Use cases

Boarding passes, ID cards, transport labels, smaller data payloads.

Electronic documents, medical records, legal/financial documents, datasets exceeding single-symbol capacity.

Decoding

Scanner reads one symbol at a time.

Scanner/software can automatically assemble multiple symbols into one dataset.
