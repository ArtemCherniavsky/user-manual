## AutoWidth Property


The AutoWidth property of a Table component indicates whether the reporting tool will fix the cells size after the report rendering.


* The AutoWidth property is set to None. Column size is not changed. In this case setting the AutoWidthType property of a table and the FixedWidth property of cells will not affect on a table.

* The AutoWidth property is set to Page. If a rendered table is placed on several pages then columns will have different width on different pages. It depends on data.

* The AutoWidth property is set to Report. If a rendered table is placed on several pages then columns will have the same width in a report.
