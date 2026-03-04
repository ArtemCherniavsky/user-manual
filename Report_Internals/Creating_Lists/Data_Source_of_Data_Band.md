## Data Source of Data Band


It is necessary to specify what data source will be used when you output lists in the Data band. It is important because report generator should know how many times the Data band must be printed. Therefore, the reference to the Data band is specified. This can be done with several ways. First, it is possible to use the Data band editor. To call the editor it is enough double-click on the Data band. Also it is possible to call the editor from the context menu. See below an example of this menu.


![](../../images/topics/Report_Internals.Creating_Lists.Data_Source_of_Data_Band_1.png)


Also the editor can be called using the DataSource property of the Data band.


![](../../images/topics/Report_Internals.Creating_Lists.Data_Source_of_Data_Band_2.png)


Data band editor allows quickly selecting data source. Data source is selected on the first bookmark of the Data band editor. All data sources are grouped in categories. Each category is one data connection with data in the Dictionary of Data. The picture below shows data in the Data band editor.


![](../../images/topics/Report_Internals.Creating_Lists.Data_Source_of_Data_Band_3.png)

![](../../images/topics/Report_Internals.Creating_Lists.Data_Source_of_Data_Band_4.png)


![](../../images/img_1.png) Select data source bookmark of the Data band.

![](../../images/img_2.png) Select this node if there is no need to specify any data source.

![](../../images/img_3.png) The "Demo" category of data.

![](../../images/img_4.png) The "Demo" category of data source.


Second, it is possible to use quick button on the Data band and select data source from menu. Basic elements of menu are represented on the picture below.


![](../../images/topics/Report_Internals.Creating_Lists.Data_Source_of_Data_Band_5.png)


![](../../images/img_1.png) Quick button the select data source.

![](../../images/img_2.png) This menu item is used to reset data source selection.

![](../../images/img_3.png) The Customers data source is selected.
