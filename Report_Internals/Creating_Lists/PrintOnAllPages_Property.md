## PrintOnAllPages Property


HeaderBand, FooterBand, ColumnHeaderBand, ColumnFooterBand, GroupHeaderBand have the PrintOnAllPages property, which may have two of the following values: true and false. If the property is set to false, then bands are printed one time in a report before/after the DataBand to which they are related. If the property is set to true, then these bands are printed only on report pages where a Data Band to which they are related is printed. The bands mentioned above are printed before/after their Data Band. By default the PrintOnAllPages property is set to true for HeaderBand and ColumnHeaderBand. For other bands this property is set to false.
