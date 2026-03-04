## Breaking Component


If, when rendering a report, the component will not fit the entire page, it will be carried to the next page. In addition, there are cases where the component has a size larger than the page size and cannot be output entirely on a page. In this case, you can use the CanBreak property. Components for which this property is set to true, can be "broken" with the Report Engine. The first part of a component will be printed on one page, and the second one on the next page. For example, a component of the Text has 10 lines, on the first page 7 lines will be output, and 3 lines on the next page.
