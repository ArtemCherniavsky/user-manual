## Data Sources

The Data Source is a structural description of the data used for the report. The Data Source is like a program "layer" which provides data from the database and its conversion and to the report generator. In other words, the data source is a description of the methods, parameters, and data access methods.


> **Information**
>
> The description of data does not contain actual data. Filling the data is carried out at the time of the report rendering process.

To create a data source you should select the New Data Source command in the New Item menu of the data dictionary or from the context menu:


![](../../../images/topics/Data.Data_Dictionary.DataSources_1.png)

Before the new data source is created, you need to connect to the data storage. In the dialog of creation the data source, connection types are grouped:

![](../../../images/img_1.png) The Connection group contains already created links to the data storage. If no connection is established, this group will not be displayed.

![](../../../images/img_2.png) The Favorites group lists the types of connections that have been marked by the user. In other words, the user can create a list of connections, checking them with stars. To do this, move the cursor to the upper right corner of the connection and press the left mouse button (in the case of the touch UI, simply press the input pointer). If the star is orange, the connection is added to the list of favorites. To remove the connection from the list of favorites, you must click on the "burning" star:


![](../../../images/topics/Data.Data_Dictionary.DataSources_2.png)

![](../../../images/topics/Data.Data_Dictionary.DataSources_3.png)

In the left picture, the star is not checked, the connection is not selected. In the right picture, the connection is selected. If no one is checked with the star then this group will not be displayed.


![](../../../images/img_3.png) This group contains a list of all connections that support SQL connection strings.

![](../../../images/img_4.png) This group contains data sources to connect to the data store using REST protocol.

![](../../../images/img_5.png) The Other group contains commands to create connections to data stores such as the XML, Excel, JSON, CSV, Dbase.

![](../../../images/img_6.png) To create a connection to the database containing objects, you should use this group. For example, for passing business objects from the repository in the report.

![](../../../images/img_7.png) This group contains previously created connections. In other words, ever created connections to the data stores but not available in the current report are located in this group.

![](../../../images/img_8.png) The Skip Schema Wizard parameter. When you create a data source, the following methods exist to obtain them from data storage:

* Get the data scheme. In this case, you will see a hierarchical list of data in the form of tables, views, stored procedures, etc. The user should select the required sources with flags;

* Generate a query to obtain data. For more details read about queries here.


To determine the method of obtaining the data is possible by means of the Skip Schema Wizard parameter. If you want to retrieve the database schema, you should uncheck this option. If you need to go to the creation of a query, check the flag for this parameter. It should be borne in mind that you can go to the creating of a query from the form of retrieving data by clicking the New Query button.


Once the connection is established, depending on the type of the data source and the Skip Schema Wizard value, the create data source form is created.
