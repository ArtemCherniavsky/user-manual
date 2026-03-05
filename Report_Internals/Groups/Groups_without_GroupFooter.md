## Groups Without A GroupFooter


In grouped reports is is usual to display both a group header and a group footer. However, what if you need to output only group headers without group footers?


It is possible to simply not include a Group Footer, but this is NOT recommended as it can lead to unexpected results particularly if you are working with Nested groups.  It is, therefore, recommended that you ALWAYS use Group Headers and Group Footers in pairs.


* Important: To render reports with grouping you should always use Group Headers and Group Footers in pairs to avoid the possibility of unexpected results.


If you do not want the Group Footer to be displayed it can be hidden by setting its height to 0 which will cause the report to be rendered successfully but the band will not appear in the output.
