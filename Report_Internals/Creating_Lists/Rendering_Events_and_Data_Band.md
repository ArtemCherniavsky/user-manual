## Events and Data Band

Important


Scripts can be a security risk, so they are disabled in the [Interpretation mode](../../Reports_Designer/Template/Calculation_Mode.md). However, if you are confident in the safety of your scripts, you can use them in the [Compilation mode](../../Reports_Designer/Template/Calculation_Mode.md).

Except standard event for all components the Data band has three special events: BeginRenderEvent, EndRenderEvent, and RenderingEvent. The Data band must be created for each data row of the specified data source. For example, if there are 10 rows in the data source, then the Data band will be created 10 times. The BeginRenderEvent is called before the data is rendered. In other words when data rows are not output. The event can be used for initialization some data ans variables, calling some actions. The EndRenderEvent is called after the Data band is rendered, when all data rows will be output. In this event data processing, totals calculation processing is done. The RenderingEvent is called when rendering one data row. The event is called before the Data band is printed. If these are 10 data rows, then the RenderingEvent will be output 10 times.


Calculate a number of elements in the data source. Write the following code in the BeginRenderEvent:


myvariable = 0;


Also it is necessary to create the myvariable variable in the data dictionary. Write the following code in the RenderingEvent:


myvariable = myvariable + 1;


And the EndRenderEvent is not used in this case. As a result of calculation the myvariable will store the value that equal to number of elements in the data source. To output this value in the Text component the following expression will be used:


{myvariable}


Also it is necessary to set the ProcessAtEnd property of the Text component to true. It is necessary to output calculated value in the myvariable.
