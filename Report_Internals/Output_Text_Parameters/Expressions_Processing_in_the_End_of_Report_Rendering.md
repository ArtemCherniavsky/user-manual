## Expression Processing in the End of Report Rendering


By default, the report generator immediately processes all expressions which are met in the text. But sometimes it is necessary to process expressions after the report rendering. For example, while report rendering, the calculation of a variable is in process. The result of calculation will be known right after the report rendering, and the result of calculation is to be output on every page of a report. To do this, set the value of the Process At property of the Text component to true.


* **Important:** When the content of the text component is processed in the end of the report rendering, the report generator cannot define the true size of the component when it is output. Therefore, auto change of the component size will work with failure.
