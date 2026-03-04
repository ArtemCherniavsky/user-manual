## Events And The GroupHeaderBand

Important


Scripts can be a security risk, so they are disabled in the [Interpretation mode](../../Reports_Designer/Template/Calculation_Mode.md). However, if you are confident in the safety of your scripts, you can use them in the [Compilation mode](../../Reports_Designer/Template/Calculation_Mode.md).

Like the Data band, the Group Header band has three specific events:

* BeginRenderEvent,

* EndRenderEvent and

* RenderingEvent.


BeginRenderEvent

The BeginRenderEvent is called before a group is rendered, in other words whenever a new group is output. This event can be used for the initialization of data or variables, or for calling certain actions.


EndRenderEvent

The EndRenderEvent is called after the group is output. Usually in the handler for this event data processing and the calculation of totals is done.


RenderingEvent

The  RenderingEvent is called when the engine is rendering one data row from a group.
