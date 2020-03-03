
/* - mark_special_links.js - */
// https://www.psy.ox.ac.uk/portal_javascripts/mark_special_links.js?original=1
function scanforlinks(){var elonw,mslinks,url,protocols,contentarea,res;if(typeof external_links_open_new_window==="string"){elonw=external_links_open_new_window.toLowerCase()==="true"} else{elonw=false}
if(typeof mark_special_links==="string"){mslinks=mark_special_links.toLowerCase()==="true"} else{mslinks=false}
url=window.location.protocol+"//"+window.location.host;if(elonw){jQuery("a[href^='http://']:not(.link-plain):not([target]):not([href^='"+url+"'])").attr("target","_blank")}
if(mslinks){protocols=/^(mailto|ftp|news|irc|h323|sip|callto|https|feed|webcal)/;contentarea=jQuery("#content");contentarea.find("a[href^=http]:not(.link-plain):not([href^='"+url+"']):not(:has(img))").addClass("link-external");contentarea.find("a[href]:not([href^=http]):not(.link-plain):not([href^='"+url+"']):not(:has(img))").each(function(){res=protocols.exec(this.href);if(res){jQuery(this).addClass("link-"+res[0])}})}}
jQuery(scanforlinks);
