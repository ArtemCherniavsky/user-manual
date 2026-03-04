## Conditional Formatting And Cross-Tables


The Cross Table condition editor has several differences from the standard condition editor. In particular there are signification differences when writing expressions within conditions, as it adds some special variables such as: value, tag, tooltip, and hyperlink.


The value variable contains the value of the cross table cell and can be used to calculate a condition:


tag > 50


In other words, if the value of the cell of a cross table is greater than 50, then the condition is true and formatting that was set to condition will be applied to the cell.


The tag, tooltip, and hyperlink variables contain the calculated values of the Tag, Tooltip, and Hyperlink properties. For example, you may specify the name of a product in the Tag property of the cross table cell:


{Products.ProductName}


Suppose we wanted to highlight in red the cell of the cross table in which the Coffee product is described. This can be achieved by setting the formatting and using the following condition:


tag == "Coffee"
