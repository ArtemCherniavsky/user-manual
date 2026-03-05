## Limitations in Creating Relations

When creating or using relations between data sources, the following restrictions are:


* Selected data sources (parent and child) must be of the same type, i.e. types relations should be identical. If the types relations are different, then you can use the CashAllData property.

* Name must be present and correct, in terms of C# or VB.NET compiler. If the name is reserved in the source, you must add the @ symbol before the relation name. For example, @relation.

* Column-keys must comply with all rules of creation a relation to ADO.NET:

![](../../../../images/fly.png) Their number must be the same;

![](../../../../images/fly.png) Their types must match, so if the primary column-key of the String type, then the child column-key must be of the String type;

![](../../../../images/fly.png) Keys must be specified, so the relation cannot be created without keys.
