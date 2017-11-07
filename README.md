# Usage

You need to put a config html element in a html file and load the script as below:

	<!-- Mon:1, Tue:2, Wed:3, Thr:4, Fri:5, Sat:6, Sun:7 -->
	<div id="r-setDayConfig" data-activeDay="3"></div>
	<script src="../dist/r-setActiveDay-1.0.0.js"></script>
	
- You can set which day to be "active", just change the number of **data-activeDay**. If the element is set to empty, it wil be set "Sunday" as a default.

The basic html structure would be like this:

	<div id="js-SPDayWrapper">
		<section class="c-IconSPDayOuter">
			<article class="c-IconSPDayInner">
				<div class="c-IconSPDay">
					<img src="IMAGE_URL">
				</div>
			</article>
			<article class="c-IconSPDayInner">
				<div class="c-IconSPDay">
					<img src="IMAGE_URL">
				</div>
			</article>

			<div class="col-xs-12 c-SPDayNotice">
				This text shows on specific day.
			</div>
		</section>
	</div>
	
- Please give **id="js-SPDayWrapper"** for the area you need to apply the feature
- You have control of **".c-SPDayNotice"** inside **".c-IconSPDayOuter"** and also **".c-IconSPDay"** inside **".c-IconSPDayInner"**.
- **"r-setActiveDay.js"** gives "active" class to **".c-IconSPDayOuter"** and **".c-IconSPDayInner"**. You can just add css class such as *"display:none"* or *"display:block"* as you need.



## Purpose

* To manipulate HTML elements on specific day in a week

## Requirement

jquery > 1.4.2


## Required HTML Element structure

See `/example/index.html`

| Element | Required | Conrigurable | Descriptions |
| :--- | :--- | :--- | :--- |
| #js-SPDayWrapper | Yes | No | Root element to have config parameter attributes. |

## Config Parameters

| data-attribute | Required | Type | Default Value | Descriptions |
| :--- | :--- | :--- | :--- | :--- |
| data-activeDay | Yes | Number | true | Mon:1, Tue:2, Wed:3, Thr:4, Fri:5, Sat:6, Sun:7 |


## Version History

| Version | Release Note |
| :--- | :--- |
| 1.0.0 | First release. |
