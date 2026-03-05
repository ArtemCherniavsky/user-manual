## Console Commands

You can launch the Stimulsoft Designer using commands in the console. Begin by navigating to the application folder. For Stimulsoft BI Designer, the path will be "c:\Program Files (x86)\Stimulsoft Designer %version%\". Below is a table of console commands and their parameters.


Command

Description

start Designer.exe

To launch the report designer.

start Designer.exe -startscreen="false"

To launch the report designer with Welcome Screen mode, if the startscreen parameter sets to true or without Welcome Screen mode if this parameter sets to false.

start Designer.exe -runwizard=""

To launch the report designer with wizard. The "-runwizard" parameter can be assigned the following values:

- blank - launches the report designer with a blank report page;
- blankdashboard - initiates the report designer with a blank dashboard;
- standard - starts the report designer with a simple list using the report wizard;
- masterdetail - begins the report designer with the Master-Detail wizard;
- label - opens the report designer with the wizard for creating a report with labels;
- crosstab - activates the report designer with the wizard for creating a Cross-tab report;
- chart - accesses the report designer with the wizard for creating a report with a chart.

start Designer.exe d:\Report.mrt

To launch the report designer by loading a report template into it. After calling the designer with the command, specify the path to the .mrt/.mrz/.mrx files.

start Designer.exe -cloudreport="Access key"

To load a report from the Stimulsoft Cloud service, utilize the "-cloudreport" parameter, assigning the report access key as its value. The Access key for a report can be obtained from Stimulsoft Cloud by selecting the report and choosing the Access Key command from the More menu.

start Designer.exe -data=d:\MyData

To launch the report designer with binding XML data sources. The value for the data parameter is the path to the folder containing XML data files.

start Designer.exe d:\Report.mrt -run

To launch the report viewer with report template *.mrt, *.mrz, *.mrx or a generated report *.mdc, *.mdz, *.mdx

start Designer.exe -schedule scheduleName

To launch the scheduler where scheduler's name passed as its value. All created schedulers can be found in the path "c:\Users\%USERNAME%\AppData\Local\Stimulsoft\Scheduler".
