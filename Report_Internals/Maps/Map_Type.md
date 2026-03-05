## Map Types


Maps can be with a group, heatmap and heatmap with group. You can change the type of a map in the map editor on the Data tab selecting the Map Type parameter:


![](../../images/topics/Report_Internals.Maps.Map_Type_1.png)


![](../../images/cross12.png)

In this case, the map, regardless of the style or color values of each key, will be filled with the base color. The map will remain to be split on items:


![](../../images/topics/Report_Internals.Maps.Map_Type_2.png)

![](../../images/cross12.png)

In this case, it is necessary to fill the Group column with data or specify data columns indication in the Group field. Each group of map elements will be drawn with one of the color map style or color that is defined for each entry:


![](../../images/topics/Report_Internals.Maps.Map_Type_3.png)


However, if the number of colors in the map style is less than the number of groups of elements of the map, colors can be repeated:


![](../../images/topics/Report_Internals.Maps.Map_Type_4.png)

![](../../images/cross12.png)

The heatmap provides an opportunity to graphically display values of map items. Therefore, it is necessary to specify the value of map items. Also, in the style of the map, it is necessary to determine the color of the heatmap. The reporting tool, at the time of the report creation process, will check all entries or all the values in the data column. The engine will determine the maximum value and assign to it the first color of the heatmap, and the minimum value will get the second color of the heatmap style. Then, for each value in the list, depending on how close the maximum or minimum values are, shades for values will be created. The shade will be applied to the map item.

![](../../images/topics/Report_Internals.Maps.Map_Type_5.png)

![](../../images/cross12.png)

To group the map elements and apply the heatmap to these groups, you should specify the type of a map as the Heatmap with Group. In this case, the map elements are grouped, and then the heatmap will be rendered. At the same time, it is necessary to fill the Group column or specify the data column in the Group field.
