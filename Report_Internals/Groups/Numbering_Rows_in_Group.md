## Numbering Rows In A Group


If you wish to display line numbers within a group you should use the Line system variable.  The reference to this variable should be specified in the expression assigned to a text component placed on the group Data band.


For example, put a text component on the Data band and write the following expression in it:


{Line}


After the report has been rendered there will be a numbered list of rows in each group, the numbers starting 1.


In each new group within a report the numbering starts all over again at 1.  If you want the numbers to continue from one group into the next group (known as 'through-numbering') you should use the LineThrough system variable instead. For example, write the following expression in the text component:


{LineThrough()}


As a result the row numbers in the subsequent group will continue from the numbers in the preceding group.
