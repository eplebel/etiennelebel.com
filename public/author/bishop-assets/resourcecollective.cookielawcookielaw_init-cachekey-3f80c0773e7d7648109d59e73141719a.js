
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - ++resource++collective.cookielaw/cookielaw_init.js - */
// https://www.psy.ox.ac.uk/portal_javascripts/++resource++collective.cookielaw/cookielaw_init.js?original=1
$(function(){$.getJSON('@@cookies-enabled.js',{_:new Date().getTime()}, function(enabled){if(!enabled){$('#cookienotification').slideDown();$('#cookienotification .cookielaw-close a').click(function(event){event.preventDefault();$('#cookienotification').hide()})}});$('a.cookie-continue').click(function(event){event.preventDefault();$.getJSON($(this).attr('href'),{_:new Date().getTime()},
function(result){if(result){$('#cookienotification').slideUp()}})})})


/* - ++resource++collective.cookielaw/cookie_functions_cookielaw.js - */
// https://www.psy.ox.ac.uk/portal_javascripts/++resource++collective.cookielaw/cookie_functions_cookielaw.js?original=1
function createCookie(name,value,days){}
function readCookie(name){return null}

