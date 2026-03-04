## Bookmark Nesting


Nesting depends on which components generated bookmarks. For example, the page bookmark will always be one level higher then other bookmarks. The bookmark, created with the Group Header band, is one level higher then the bookmark, created by the Data band, in this group. In the Master-Detail relation the Master bookmark will enable all Detail bookmarks. For example, we have a report with a group.


**Group**

--Data 1

--Data 2

--Data 3

**Group**

--Data 1

--Data 2

--Data 3


In this report groups include data. And bookmarks from the group will include bookmarks from data. As a result we get the same structure in the tree of bookmark. For example:


**Group 1**

--**Group 2**

----Data 1

----Data 2

----Data 3


**Group 1**

--**Group 2**

----Data 1

----Data 2

----Data 3


In the tree of bookmarks two nodes will be created. They are Group 1, Group 1. Each of these nodes will include the Group 2 node. The Group 2 nodes will include the data nodes. For example, the Master-Detail report:


**Master-Data**

--Data 1

--Data 2

--Data 3

**Master-Data**

--Data 1

--Data 2

--Data 3


In this example the nodes of the Master band form the Master-Data nodes. Each of these nodes will include nodes formed with the Detail band.
