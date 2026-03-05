## Totals


In the report, besides the list of data and its title, totals are present. This can be the amount, quantity, minimum, average, maximum value for a particular source, band or page. Depending on the desired result, you should select the type of the total function. All results of the functions can be divided conditionally into two types:
* Associated with bands. In this case, the results are calculated at the time of the report creation process. Every time, when one operation is performed with Data band, a single value is calculated. Appropriately, the text component with the total should be placed on any band which associates directly with any band that is associates with the Data band.

* Not associated with bands. In this case, the calculation of totals is not associated with the operation of rendering the Data band. Consequently, the text component with the total functions can be located anywhere in the report. It is worth noting that all functions have the Totals prefix. It is the format - {Totals.Functions ()}.
