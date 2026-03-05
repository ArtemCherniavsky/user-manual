## Expression Condition


When you choose to use an Expression condition you define a text expression that returns a boolean value. The value returned determines whether or not the formatting is applied. The configuration panel is shown below:


![](../../images/topics/Report_Internals.Conditional_Formatting.Expression_Condition_1.png)


![](../../images/img_1.png) Field Is. Field is used to select the type of conditions.

![](../../images/img_2.png) Expression. This field is used to define an expression that should return a boolean value.


For example, a suitable expression in **C#**:


Customers.CustomerName == "MyCustomer"


If the expression cannot return a boolean value then the report generator will not be able to render the conditional formatting.


* **Important:** The expression MUST return a boolean value or the conditional formatting will fail.
