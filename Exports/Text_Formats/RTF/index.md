## RTF


Rich Text Format (RTF) is a free document file format developed by Microsoft for cross-platform document interchange. The first version of the RTF standard appeared in 1987. Since that time format specification was changed and added. RTF-documents are supported by many text editors.


Export options in RTF:


![](../../../images/topics/Exports.Text_Formats.RTF_1.png)

![](../../../images/img_1.png) The checkbox **All** enables processing of all report pages.

![](../../../images/img_2.png) The checkbox **Current Page** enables processing only the current (selected) report page.

![](../../../images/img_3.png) The checkbox **Pages** has the field. This field specifies the number of pages to be processed. You can specify a single page, several pages (using a comma as the separator) and also specify a range by defining the start page and end page range separated with "-". For example, 1,3,5-12.

![](../../../images/img_4.png) The **Image Resolution** is used to change DPI (image property PPI (Pixels Per Inch)). The greater the number of pixels per inch is, the greater is the quality of the image. It should be noted that the value of this parameter affects the size of the finished file. The higher the value is, the greater is the size of the finished file.

![](../../../images/img_5.png) The **Image Quality** allows changing the image quality. Keep in mind that if you change this option the size of the finished file will increase. The higher the quality is, the larger is the size of the finished file.

![](../../../images/img_6.png) The checkbox **Export Mode** provides the ability to define the presentation of the report data after export. If you select **Table**, then, after exporting, the entire report will look like a table, where each report component is a table cell. All components are located in different cells with relations created between them. If the **Frame** is selected, then, after export, each component will be a single frame, but without relations between them.

![](../../../images/img_7.png) The checkbox **Use Page** **Headers and** **Footers** is used to define the Page Header and Footer as the header and footer of the Word document. If this option is not set, then, after exporting, page header and footer will be a table cell or an individual frame. In case of editing a report they may change its location. If this option is enabled, the data bands will be output as objects a header and footer in the Word document.


* **Notice:** If the checkbox **Use Page Headers and Footers** is on, it should be taken into consideration that, in this case, the height of the lines will be minimum allowable.


![](../../../images/img_8.png) The checkbox **Remove Empty Space at Bottom of the Page** is used to display data one after the other while minimizing empty space at the bottom of the page. If this option is enabled, then, if empty space is available, the part of data from the next page will be moved to the empty space. If this option is disabled, the empty space is ignored and the report will be displayed in the viewer or in the tab Preview.

![](../../../images/img_9.png) The flag **Open After Export** enables/disables the automatic opening of the created document (after completion of exports), the default program for these file types.
