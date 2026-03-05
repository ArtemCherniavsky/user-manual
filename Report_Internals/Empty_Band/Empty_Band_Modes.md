## Empty Band Modes


The **Empty** band has only one special property - **SizeMode**. This property indicates the behavior of the Empty Band on the bottom of a page. There are 4 values of the property: **IncreaseLastRow**, **DecreaseLastRow**, **AlignFooterToBottom**, **AlignFooterToTop**.


* The **IncreaseLastRow** indicates that if, when filling the page by an Empty band, there is a free space to partially output an Empty Band, then it is possible to increase the last row. The picture below shows this.

* DecreaseLastRow. The last row of the Empty Band will be decreased by height. The picture below shows this.

* AlignFooterToBottom. If there is no free space for the Empty band then this band is not output. The picture below shows this.

* AlignFooterToTop. (this is the default value of the SizeMode property). The Footer Bands will be output on the bottom (the PrintAtBottom = true) and moved to top to fill the free space of the Empty Band. The picture below shows this.
