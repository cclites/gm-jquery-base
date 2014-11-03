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
  if (window.jQuery) { // jQuery is loaded
    console.log("Starting");
  } else {
    //This message will display if jQuery is already loaded.
    console.log("JQuery not loaded/re-loaded.");
  }
  
  /*
  * NOTE: In order to load files from an outside resource, you
  *       may need to relax security in your browser.
  *       https://developer.mozilla.org/en-US/docs/Security/MixedContent/How_to_fix_website_with_mixed_content
  *       http://www.thewindowsclub.com/disable-mixed-content-firefox
  *
  *       If one is using noscript, this may be helpful:
  *       http://noscript.net/abe/
  *
  *       Debugging messages are printed to the JavaScript console: ctrl-shift-j
  */
  
  //loads javascript
  var scriptElement = document.createElement( "script" );
  scriptElement.type = "text/javascript";
  scriptElement.src = "http://localhost/js/site.js";
  document.body.appendChild( scriptElement );

  var link = window.document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'http://localhost/css/site.css';
  document.getElementsByTagName("HEAD")[0].appendChild(link);
  
};
