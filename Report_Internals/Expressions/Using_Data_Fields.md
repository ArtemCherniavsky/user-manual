## Using Data Fields

Values from data sources can be used in expressions. To reference a field from the data source you must provide a string representation of the field. The syntax of the reference is simple - you give the name of the data source and the field name separated by a decimal point or full-stop character, surrounded by curly braces:


```
{DataSource.Column}
```


For example, if you have an entry in the customers table with the company name field set to "The Big Company" and you enter the following expression:


```
Company Name: {Customers.CompanyName}
```


then after calculation, the result appearing in the report will be:


```
Company Name: The Big Company
```


> **Information**
>
> To avoid having to create this sort of expression manually, you can use drag and drop from the data dictionary directly to the page of a report or within the expression editor to insert the necessary information automatically and with the correct syntax.

Parent Relationships

If the data source has a parent relationship with other data sources you can directly reference fields from the parent data source. The syntax of the reference is similar to the examples already given - you give the name of the data source, then the relation name, and then the field name each separated by a decimal point or full-stop character, and the whole thing surrounded by curly braces. For example:


```
{Datasource.Relation.Field}
```


Assuming that you have a set of information like this:

- Products is the name of a data source;
- ParentCategories is the name of the relation, with what two data sources are related. In this case, two data sources are related:
- Products is a list of products, and Categories is a list of categories of these products.
- CategoryName is a column name in the Categories data source.


if you enter the following expression:


```
{Products.ParentCategories.CategoryName}
```


then after calculation, the result appearing in the report will be the name of a category for a product.


There are no limits on the number of relationships you can use in Stimulsoft Reports. Therefore a column can be called through two or three or even more relationships. For example, Assuming that you have a set of information like this:

- OrderDetails is the name of a data source;
- ParentProducts is the name of the relations between OrdersDetails and Products data sources;
- ParentCategories. is the name of the relation between Products and Categories data sources;
- CategoryName is a field in the Categories data source.


if you enter the following expression:


```
{OrderDetails.ParentProducts.ParentCategories.CategoryName}
```


then after calculation, the result appearing in the report will still be the name of a category for a product, but the value of the CategoryName field has been obtained using relationships and bypassing the OrderDetails data source to get to the Categories data source. No direct call to the Categories data source has been used


**Important**


If the report language is **C#**, then names are case sensitive. If the report language is **VB.Net**, then names are not case sensitive.

It should be remembered that all the values in data sources are typed. This means that all data items are dynamically converted to the type that is specified in the options column, which helps to accelerate the development of reports. However, if you need to get data from a column without conversion, you will need to specify the data source directly. For example, in C#:


```
{Products["ProductName"]}
```


This expression will return data from the Products data source "as is" without conversion. The example below shows the same expression for **VB.Net**:


```
{Products.Item("ProductName")}
```
