## ResetPageNumber Property


The numbering of the pages of the report begins with the number 1 and is defined consistently for each page built by the report.


![](../../images/topics/Report_Internals.Pagination.ResetPageNumber_Property_1.png)


On the picture above the first page of a template is represented.


![](../../images/topics/Report_Internals.Pagination.ResetPageNumber_Property_2.png)


On the picture above the second page of a template is represented.


If, when report rendering, the ResetPageNumber is set to  false, then numeration will look like on the picture below:


![](../../images/topics/Report_Internals.Pagination.ResetPageNumber_Property_3.png)


If the set the ResetPageNumber page property to  true, then numeration for each page of a template will start from 1:

![](../../images/topics/Report_Internals.Pagination.ResetPageNumber_Property_4.png)


* **Information:** The **ResetPageNumber** property works with the following variables: **PageNumber**, **PageNofM**, **TotalPageCount**. With system variables: **PageNumberThrough**, **PageNofMThrough**, **TotalPageCountThrough** - this property does not work.


By default the property is set to false.
