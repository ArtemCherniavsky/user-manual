## Column Break

At the time of break one can only insert not only new pages but new columns. This can be done using the NewColumnBefore and New Column After properties. The logic of inserting new columns is the same as for the pages.


NewColumnBefore

To break and insert a column before a certain band you can use the NewColumnBefore property. If the property is set to false for the band, then the report generator reaching this band will output it after the previous band without generating a new column.


![](../../images/topics/Report_Internals.Page_and_Column_Break.Column_Break_1.png)

To make the break, set the NewColumnBefore property to true. In this case, the report generator at the time of rendering the band, will output a new column and add it before this band. The picture below shows the Data band with the NewColumnBefore property set to true.


![](../../images/topics/Report_Internals.Page_and_Column_Break.Column_Break_2.png)


In this case, it is necessary to consider that the new first column displays all service bands (Page Header Band, Page Footer Band, Header Band). Also, the construction of a new column, the report generator will take into account the value of the following properties: Break if Less Than and Skip First.

NewColumnAfter property

Also, you may need to make a break and insert a new column after a certain band. This can be done with the New Column After property. If the NewColumnAfter property is set to false, then all the bands will be displayed one after another.


![](../../images/topics/Report_Internals.Page_and_Column_Break.Column_Break_3.png)

To insert a new column the NewColumnAfter property should be set to true, after rendering the band, the report generator output a new column after this band. The picture below shows the Data band with the NewColumnAfter property set to true.


![](../../images/topics/Report_Internals.Page_and_Column_Break.Column_Break_4.png)
