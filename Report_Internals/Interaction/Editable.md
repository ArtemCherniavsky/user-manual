## Editing


In our reporting we have the ability to edit some of the components of a rendered report in the viewer, or in the preview tab. As a rule, it must be made before printing or exporting. The components that can be changed are:

* Text;

* Text in Cells;

* Rich text;

* Checkbox.


To make it possible to edit the report components, you should set the Editable property of these components to Yes. Then, you can modify these components in the viewer using the tool Editor. In text components editing means changing the text, and in the checkbox editing means changing the value (true or false).


**For PDF and Word documents:**

By default, when you export a PDF document you can edit it. But it is possible to include the mode in which after exporting editing will be available only for the report components with the Editable property enabled. If No is set, then you can edit all components, unless it is not limited with safety parameters. If you select Yes then you can only edit components with the Editable property enabled. The Word document can also be editable. However, with the parameter Restrict Editing it is possible to allow editing only the components that have the Editable property set to Yes. For this set Restrict Editing to Except Editable Fields.
