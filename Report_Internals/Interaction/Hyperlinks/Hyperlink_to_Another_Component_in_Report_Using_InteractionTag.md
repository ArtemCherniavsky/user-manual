## Hyperlink to Another Component in Report Using Interaction.Tag


In this case it is necessary to add two # symbols before a hyperlink. In this case the search is executed using the Interaction.Tag property of components (two # symbols in the text of a hyperlink are skipped). Interaction.Tag properties are not shown in the structure of a report. If one want to make navigation without bookmarks showing in the structure of a report then one should use this way.


* **Notice:** When using the **Interaction.Tag** property, one should not use the hyperlink to another component in a report in **ASP.NET**. In **ASP.NET**, when creating a report, it is impossible to use hyperlink to another component in a report, created using  the **Interaction.Tag** property.
