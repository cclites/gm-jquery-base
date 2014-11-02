// ==UserScript==
// @name        name
// @namespace   namespace
// @include     *//MySite*
// @version     1
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

/*
 * Author: cclites@sweeps-soft.com, Oct. 2014
 * 
 * Base Greasemonkey script to import JQuery.
 */
this.$ = this.jQuery = jQuery.noConflict(true);

window.onload = function() {
	if (window.jQuery) { // jQuery is loaded, so continue
	   //... 
	} else { 
		//This message will display if jQuery is already loaded.
		console.log("JQuery check.");
		return;
	}
}