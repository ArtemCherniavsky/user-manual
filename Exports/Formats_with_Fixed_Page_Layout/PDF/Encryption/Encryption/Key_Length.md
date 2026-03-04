## Key Length


The PDF Reference defines both 40-bit, 128-bit and 256-bit encryption. By default 40-bit key is used.

256-bit and 128-bit keys is more secure the 40-bit key. But is some countries the key length of encryption is limited.


Quote from PDF Reference:

"A PDF document can be encrypted to protect its contents from unauthorized access. The encryption of data in a PDF file is based on the use of an encryption key computed by the security handler. Different security handlers can compute the key in a variety of ways, more or less cryptographically secure. In particular, PDF’s standard encryption handler limits the key to 5 bytes (40 bits) in length, in accordance with U.S. cryptographic export requirements in effect at the time of initial publication of the PDF 1.3 specification."
