## Creating Lists


Lists in a report can be output using three bands: Header 
![](../../images/topics/Report_Internals.Creating_Lists_1.png)
, Footer 
![](../../images/topics/Report_Internals.Creating_Lists_2.png)
, and Data 
![](../../images/topics/Report_Internals.Creating_Lists_3.png)
. Data are output using these bands. The basic band is the Data band. A data source is specified to each Data band. The data source is a table. Each data source has data fields. It is possible to output a table by placing text components with references to these fields. One data source can specify previously unknown number of rows with data. The Data band is output as many times as there are rows in the specified data source. For example, if there are 100 rows in the data source, then the Data bad will be output 100 times. If it is not enough space on one page, the second page will be generated and printing will be continued. Using the Header band, headers will be added to the table that is output using the Data band. Correspondingly, the Footer band is used to output different totals by the output table.
