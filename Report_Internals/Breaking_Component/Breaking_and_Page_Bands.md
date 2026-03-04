## Breaking and Page Bands


There is no possibility for the Page Header and PageFooter bands to change the value of the CanBreak property, because it is always set to the one value. By default, the CanBreak property is set to true. This means that, when designing a report, if sizes of page bands is more than a page size, then bands will broken. You should also take into account the value of the property of the component, located on the band page. If the CanBreak property of a component placed on the band page is set to false, then in that case, there will be auto-break. If the CanBreak property of a component placed on the band page is set to true, then the break will be executed, depending on the type of a component (text, panel, picture, Rich Text).
