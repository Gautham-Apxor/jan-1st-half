!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("apxor")):"function"==typeof define&&define.amd?define(["apxor"],e):(t=t||self)["apxor-qe"]=e(t.Apxor)}(this,(function(t){"use strict";function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function n(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,c(r.key),r)}}function o(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(t,e,n){return(e=c(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var d=window.ApxorLogger,h=function(t){return void 0!==t&&!function(t){return null===t}(t)},v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function p(t,e){return Array.from(e).map((function(e,n){return String.fromCharCode(e^function(t,e){return t.charCodeAt(Math.floor(e%t.length))}(t,n))})).join("")}var f=function(t,e){return p(t,e=function(t){var e,n,r,i,a,o,s=0,l=[];if(!t)return t;t+="";do{e=(o=v.indexOf(t.charAt(s++))<<18|v.indexOf(t.charAt(s++))<<12|(i=v.indexOf(t.charAt(s++)))<<6|(a=v.indexOf(t.charAt(s++))))>>16&255,n=o>>8&255,r=255&o,l.push(e),64!==i&&(l.push(n),64!==a&&l.push(r))}while(s<t.length);return l}(e))},g=function(t){switch(t){case"app_event":return"AE";case"client_event":return"CE";case"activity_time":case"activity_event":return"AE"}return"Unknown"},_=function(t){return t.toUpperCase()},m=function(t,e,n){switch(n){case"EQ":return t===e;case"GT":return t>e;case"GTE":return t>=e;case"LT":return t<e;case"LTE":return t<=e;case"NEQ":return t!==e;case"R":return y(e).test(t);default:return!1}},y=function(t){var e=t.replace(/.*\/([gimuy]*)$/,"$1");e===t&&(e="");var n=e?t.replace(new RegExp("^/(.*?)/"+e+"$"),"$1"):t;return new RegExp(n,e)},x=function(){var t=new Date;return t.getDate()+"/"+t.getMonth()+"/"+t.getFullYear()},E=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i="([^/]+)",a=n?n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"):"",o=e.replace(new RegExp(a,"g"),i),s=new RegExp("^".concat(o)+(r?"":"$")),l=t.match(s);return null!==l};function w(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,a=O(t,e);if(a){var o=function(){if(D(a)){return function(t){return S(t)}(a)}return d.info("Invalid target element. Width and height are 0 for element: ".concat(t,". Can't show tooltip")),!1};return o()}return n?(d.info("Not found yet. Rechecking the DOM."),b(i,r,t,e)):(d.info("Element with selector:".concat(t," not found.")),!1)}function b(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=setInterval((function(){var e=O(n,r);if(e){clearInterval(i);!function(){if(D()){S()}else d.info("Invalid target element. Width and height are 0 for element: ".concat(n,". Can't show tooltip"))}()}else(t-=1)<=0&&(clearInterval(i),console.warn("Element with selector:".concat(n," not found.")))}),e)}var O=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=document.getElementById(t);if(!r)try{r=document.querySelector(t)}catch(t){window.ApxorLogger.error("Error finding element in DOM:"+t)}(r||(r=A(t)),!r&&n.length>0)&&(r=null===(e=document.getElementById(n))||void 0===e||null===(e=e.contentWindow)||void 0===e||null===(e=e.document)||void 0===e?void 0:e.querySelector(t));return r},A=function(t){var e=t.indexOf("svg");-1!==e&&(t=t.substring(0,e)+"svg:svg");try{return document.UGKR(t,document,(function(t){return"svg"===t?"http://www.w3.org/2000/svg":null}),XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue}catch(t){window.ApxorLogger.error("Error finding element in DOM:"+t)}return null};function D(t){try{var e=t.getBoundingClientRect();if(0===e.width||0===e.height)return!1}catch(t){return!1}return!0}function S(t){var e,n,r,i;return!!(n=(e=t).offsetHeight,r=e.offsetWidth,(i=e.getBoundingClientRect()).left>=-r&&i.top>=-n&&i.right<=(window.innerWidth||document.documentElement.clientWidth)+r&&i.bottom<=(window.innerHeight||document.documentElement.clientHeight)+n)}var R=function(t){var e='\n        <style> \n          .apx-container{\n            padding:10px;\n          }\n        </style>\n        <div id="apx-innerElement" class="apx-container">\n              <div id="close-button" style="cursor: pointer;position:absolute;top:9px;right:9px;"><svg width="11" height="11" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path opacity="0.5" d="M11.0962 9.07071L17.8586 15.8331L15.8331 17.8586L9.0707 11.0962L8.99999 11.0255L8.92928 11.0962L2.16693 17.8586L0.141421 15.8331L6.90379 9.07071L6.9745 9L6.90379 8.92929L0.141421 2.16694L2.16693 0.141422L8.92928 6.9038L8.99999 6.97451L9.0707 6.9038L15.8331 0.141422L17.8586 2.16694L11.0962 8.92929L11.0255 9L11.0962 9.07071Z" fill="white" stroke="#002845" stroke-width="0.2"/>\n                </svg>\n              </div>\n              <div style="font-family: inherit;font-style: normal;font-weight: 600;font-size: 16px;line-height: 22px;\n              color: #FFFFFF; display: flex; gap: 12px;"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check-filled" width="33" height="33" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor" />\n</svg><div style = "align-self: center;padding-right:20px;">'.concat(t,"</div></div>\n        </div>\n      "),n=document.createElement("div");n.style="\n        z-index:99999999;\n        background:#16202f;\n        position:fixed;\n        top:1%;\n        right:1%;\n        border-radius: 12px;\n      ",n.innerHTML=e,n.id="apx-container",document.body.appendChild(n)},F=window.ApxorLogger,k=o((function e(){var n=this;i(this,e),s(this,"bDHV","ALL"),s(this,"MAbt",[]),s(this,"xlPs",[]),s(this,"userAttributesValidated",!0),s(this,"sessionAttributeValidated",!0),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(n.bDHV=t.audience.audience_type,n.MAbt=t.audience.attributes.user,n.xlPs=t.audience.attributes.session,!Array.isArray(n.MAbt)||!Array.isArray(n.xlPs))return F.error("No attributes"),!1}catch(t){return F.error(t),!1}return!0})),s(this,"validate",(function(e,r){var i=!0;"FTU"===n.bDHV&&(i=t.getController().getSessionInfo().is_first_session);var a=n.ApCM(e,n.MAbt),o=n.ApCM(r,n.xlPs);return a||(n.userAttributesValidated=!1),o||(n.sessionAttributeValidated=!1),i&&a&&o})),s(this,"ApCM",(function(t,e){var n=e.length,r=!0;try{for(var i,a=function(){var n=e[o];if(void 0===t[n.name]||!1===r)return{v:!1};var i=n.operator,a=n.type,s=n.value.map((function(t){if("s"===a)return t;if("l"===a)return parseInt(t);if("f"===a)return parseFloat(t);if("b"===a)switch(t){case"true":return!0;case"false":return!1}})),l=(Array.isArray(t[n.name])?t[n.name]:[t[n.name]]).some((function(t){return s.some((function(e){return"s"===a?t="".concat(t):"l"===a?t=parseInt(t):"f"===a?t=parseFloat(t):"b"===a&&(t=!!t),m(t,e,i)}))}));r=r&&l},o=0;o<n;o++)if(i=a())return i.v}catch(t){F.error(t),r=!1}return r}))})),P=window.ApxorLogger,T=o((function t(){var e=this;i(this,t),s(this,"vraJ",0),s(this,"UyPP",0),s(this,"RyRP","SESSION"),s(this,"SeXk",0),s(this,"wGys",0),s(this,"rOth",0),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{e.vraJ=t.frequency.count,-1===e.vraJ&&(e.vraJ=1e3),e.rOth=e.vraJ,e.UyPP=t.frequency.time_interval,e.RyRP=t.frequency.validity,e.wGys=t.frequency.ses_lmt,e._dayCount=t.frequency.day_lmt;var n=at.getInstance().getQeState();if(!h(n)||!h(n[t._id]))return!0;if("SESSION"===e.RyRP){if(e.vraJ=parseInt(e.vraJ)-parseInt(n[t._id].SESSION),e.vraJ<=0)return console.warn("Max count limit reached for session:"+t._id),!1}else{if("OVERALL"!==e.RyRP)return P.info("Invalid config."),!1;if(e.vraJ=parseInt(e.vraJ)-parseInt(n[t._id].OVERALL),e.vraJ<=0)return console.warn("Max count limit reached for overall:"+t._id),!1}}catch(t){return P.error(t),!1}return!0})),s(this,"RZdE",(function(){e.vraJ=e.vraJ-1})),s(this,"getFrequencyCount",(function(){return e.vraJ})),s(this,"FBUp",(function(){"SESSION"===e.RyRP&&(e.vraJ=e.rOth,P.info("Campaign Limit reset"))})),s(this,"KsMJ",(function(t){try{if(e.vraJ<=0)return!1;var n=at.getInstance().getQeState();if(!h(n)||!h(n[t]))return!0;if(0!==e.wGys)if(parseInt(e.wGys)-parseInt(n[t].SESSION)<=0)return!1;if(0!==e._dayCount){var r,i=x();if(parseInt(e._dayCount)-parseInt((null===(r=n[t])||void 0===r?void 0:r.DATES[i])||0)<=0)return!1}}catch(t){P.error("Error validating the frequency:"+t)}return!0}))})),C=o((function t(){var e=this;i(this,t),s(this,"KMTk",""),s(this,"bDHV",""),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var n,r;e.KMTk=t.meta.name,e.bDHV=t.meta.type,e._only_context=t.meta.only_context,e._attr=(null===(n=t.meta)||void 0===n?void 0:n.attr)||{},e._isExperiment=null===(r=t.meta)||void 0===r?void 0:r.isExperiment}catch(t){return window.ApxorLogger.error(t),!1}return!0}))})),N=window.ApxorLogger,Q=o((function t(){var e=this;i(this,t),s(this,"UqgI",-1),s(this,"OgLm",-1),s(this,"qwtr",-1),s(this,"jOCy",-1),s(this,"VHDR",!1),s(this,"_nudge_expired",!1),s(this,"_not_yet_active",!1),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(isNaN(Date.parse(t.validity.start_date))||isNaN(Date.parse(t.validity.end_date)))return N.error("Not valid dates"),!1;if(e.UqgI=Date.parse(t.validity.start_date),e.OgLm=Date.parse(t.validity.end_date),h(t.time_limits_in_day)&&(e.VHDR=t.time_limits_in_day,e.VHDR&&h(t.time_limits))){var n=(new Date).toISOString().split("T")[0];if(e.qwtr=Date.parse(n+"T"+t.time_limits.start_time+".000Z"),e.jOCy=Date.parse(n+"T"+t.time_limits.end_time+".000Z"),isNaN(e.qwtr)||isNaN(e.jOCy))return N.error("Not valid times"),!1}}catch(t){return N.error(t),!1}return!0})),s(this,"validate",(function(){var t=Date.now();return t>e.UqgI&&t<e.OgLm?!e.VHDR||t>=e.qwtr&&t<=e.jOCy:(t<e.UqgI?e._not_yet_active=!0:t>e.OgLm&&(e._nudge_expired=!0),!1)}))})),K=o((function t(){var e=this;i(this,t),s(this,"KMTk",""),s(this,"ikFY",{}),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{e.KMTk=t.name,e.ikFY=t.additional_info}catch(t){return!1}return!0}))})),U=o((function t(){var e=this;i(this,t),s(this,"pJrp",0),s(this,"SRSB",0),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(e.pJrp=Number(t.lower),e.SRSB=Number(t.upper),isNaN(e.pJrp)||isNaN(e.SRSB))return!1}catch(t){return!1}return!0}))})),L=o((function t(){var e=this;i(this,t),s(this,"datN",0),s(this,"mHZX",""),s(this,"pZQW",""),s(this,"pPRD",new K),s(this,"kdcJ",new U),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{return e.mHZX=t.event_type,e.pZQW=t.activity,e.pPRD.parse(t.details)&&e.kdcJ.parse(t.time_bounds)}catch(t){return!1}}))})),J=window.ApxorLogger,M=o((function t(){var e=this;i(this,t),s(this,"datN",0),s(this,"YuZe",-1),s(this,"vraJ",0),s(this,"nWAU",""),s(this,"pZQW",""),s(this,"mHZX",""),s(this,"kdcJ",new U),s(this,"pPRD",new K),s(this,"zcyZ",new L),s(this,"uAKU","AND"),s(this,"Wvez",!1),s(this,"bDHV",void 0),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{return e.YuZe=t.sequence,e.vraJ=t.count_config.count,e.nWAU=t.count_config.operator,e.pZQW=t.activity,e.mHZX=t.event_type,e.uAKU=t.combine_operator,e.bDHV=t.type,e.pPRD.parse(t.details)&&e.zcyZ.parse(t.trigger)&&e.kdcJ.parse(t.time_bounds)}catch(t){return J.error(t),!1}}))})),V=window.ApxorLogger,q=o((function t(){var e=this;i(this,t),s(this,"vraJ",0),s(this,"nWAU",""),s(this,"mHZX",""),s(this,"kdcJ",new U),s(this,"pPRD",new K),s(this,"uAKU","AND"),s(this,"parse",(function(t){try{return e.vraJ=t.count_config.count,e.nWAU=t.count_config.operator,e.mHZX=t.event_type,e.uAKU=t.combine_operator,e.pPRD.parse(t.details)&&e.kdcJ.parse(t.time_bounds)}catch(t){return V.error(t),!1}}))})),H=window.ApxorLogger,Z=function(){function e(){var n=this;i(this,e),s(this,"RjKO",0),s(this,"PrFh",""),s(this,"QOya",new M),s(this,"ZOjD",new q),s(this,"KCmG",!1),s(this,"Qlmh",!1),s(this,"xVPp",0),s(this,"uAKU","AND"),s(this,"xxlS","OR"),s(this,"Ujol",-1),s(this,"qsXc",[]),s(this,"xtHS",{}),s(this,"GbJQ",!1),s(this,"initialize",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";if(n.PrFh=r,n.xVPp=i,n.qsXc=o,"termination"===s&&""!==s){n.ZOjD.parse(e);return n.xxlS=n.ZOjD.uAKU,n.Etpm(),!0}var l=n.QOya.parse(e);if(l){if(n.uAKU=n.QOya.uAKU,n.QOya.Wvez){var u=n.QOya.pPRD.KMTk;"APX_PAGE_OPENED"===u&&(u=n.QOya.pPRD.ikFY.navigation_id,u=h(u)?u:n.QOya.pPRD.KMTk),n.Ujol=t.getController().getEventCount(u);var c=n.QOya.vraJ,d=n.QOya.nWAU;if(n.Qlmh=n.qzEh(n.Ujol-1,c,d,!1),n.KCmG=n.Qlmh,n.Qlmh&&"APX_PAGE_OPENED"===n.QOya.pPRD.KMTk)return!0}return a&&0!==i||n.ArnS(),!0}return!1})),s(this,"ArnS",(function(){var t,e=n.QOya,r=e.zcyZ,i=at.getInstance();"app_start"===r.mHZX?(n.KCmG=!0,i.registerForEvent(g(e.mHZX)+"___"+e.pPRD.KMTk,n.hWDG)):i.registerForEvent(g(e.mHZX)+"___"+r.pPRD.KMTk,n.hWDG),null!==(t=window.ApxorRTM)&&void 0!==t&&t.badgesLists.includes(n.PrFh)&&i.registerForEvent(g(e.mHZX)+"___"+"apxor-badge-container-".concat("-".concat(n.PrFh).replaceAll(" ","").replace(/[^\w\s]/gi,"")),n.hWDG)})),s(this,"Etpm",(function(){var t=n.ZOjD,e=at.getInstance();n.KCmG=!0,e.registerForEvent(g(t.mHZX)+"___"+t.pPRD.KMTk,n.emEF)})),s(this,"Clfx",(function(t,e,r,i){var a,o=(Date.now()-n.xtHS[e])/1e3;(null===(a=n.QOya)||void 0===a||null===(a=a.pPRD)||void 0===a||null===(a=a.ikFY)||void 0===a?void 0:a.time)/1e3>o&&n._displayCampaign(r)})),s(this,"dHvm",(function(t,e,r,i){var a,o;n.GbJQ=!0;var s=Date.now(),l=null===(a=n.QOya)||void 0===a||null===(a=a.zcyZ)||void 0===a?void 0:a.pPRD.KMTk,u=(s-n.xtHS[l])/1e3,c=null===(o=n.QOya)||void 0===o||null===(o=o.pPRD)||void 0===o||null===(o=o.ikFY)||void 0===o?void 0:o.time;(c/=1e3)>u&&n._displayCampaign(r)})),s(this,"hWDG",(function(e,r,i,a){var o,s,l=at.getInstance();if(n.KCmG){if(null!==(o=window.ApxorRTM)&&void 0!==o&&o.isBadgePresent&&null!==(s=window.ApxorRTM)&&void 0!==s&&s.badgesLists.includes(n.PrFh)&&t.getController().isBadgeTriggerSatisfied(n.PrFh))return n.Qlmh=!0,n.QOya.datN=i,void l.validate(n.PrFh,n.xVPp);g(n.QOya.mHZX)===e&&n.UGos(i-n.QOya.zcyZ.datN,n.QOya.kdcJ)&&n.QOya.pPRD.KMTk===r&&n.BKLW(n.QOya.pPRD.ikFY,a)&&(n.RjKO+=1,n.Qlmh=n.qzEh(n.RjKO,n.QOya.vraJ,n.QOya.nWAU),n.Qlmh&&(n.QOya.datN=i,l.validate(n.PrFh,n.xVPp)))}else if(n.KCmG=n.FhJI(e,r,i,a),n.KCmG){var u=n.QOya,c=u.zcyZ;if(c.datN=i,"activity_time"===(null==u?void 0:u.mHZX)){var d,h,v,p=null==u||null===(d=u.pPRD)||void 0===d||null===(d=d.ikFY)||void 0===d?void 0:d.time;(null==u||null===(h=u.pPRD)||void 0===h||null===(h=h.ikFY)||void 0===h?void 0:h.nkpi.length)>0&&(setTimeout((function(){n.GbJQ||(n.Qlmh=!0,n.Qlmh&&(n.RjKO+=1,n.Qlmh=n.qzEh(n.RjKO,n.QOya.vraJ,n.QOya.nWAU),n.Qlmh&&(n.QOya.datN=i,l.validate(n.PrFh,n.xVPp)))),u.pPRD.ikFY.nkpi.map((function(t){l.unregisterFromEvent(_(u.pPRD.ikFY.et)+"___"+t,n)}))}),p),u.pPRD.ikFY.nkpi.map((function(t){l.registerForEvent(_(u.pPRD.ikFY.et)+"___"+t,n.dHvm)}))),(null==u||null===(v=u.pPRD)||void 0===v||null===(v=v.ikFY)||void 0===v?void 0:v.kpi.length)>0&&(setTimeout((function(){u.pPRD.ikFY.kpi.map((function(t){l.unregisterFromEvent(_(u.pPRD.ikFY.et)+"___"+t,n)}))}),p),u.pPRD.ikFY.kpi.map((function(t){t===u.zcyZ.pPRD.KMTk?(l.unregisterFromEvent(g(c.mHZX)+"___"+c.pPRD.KMTk,n),l.registerForEvent(_(u.pPRD.ikFY.et)+"___"+t,n.Clfx)):l.registerForEvent(_(u.pPRD.ikFY.et)+"___"+t,n.dHvm)})))}else l.unregisterFromEvent(g(c.mHZX)+"___"+c.pPRD.KMTk,n),l.registerForEvent(g(u.mHZX)+"___"+u.pPRD.KMTk,n);n.xtHS[r]=Date.now()}})),s(this,"emEF",(function(t,e,r,i){var a=at.getInstance();g(n.ZOjD.mHZX)===t&&n.UGos(r,n.ZOjD.kdcJ)&&n.ZOjD.pPRD.KMTk===e&&n.BKLW(n.ZOjD.pPRD.ikFY,i)&&(n.RjKO+=1,n.Qlmh=n.qzEh(n.RjKO,n.ZOjD.vraJ,n.ZOjD.nWAU),n.Qlmh&&(n.ZOjD.datN=r,a.validateForTermination(n.PrFh,n.xVPp)))})),s(this,"FhJI",(function(t,e,r,i){var a=n.QOya.zcyZ;return g(a.mHZX)===t&&a.pPRD.KMTk===e&&n.UGos(r,a.kdcJ)&&n.BKLW(a.pPRD.ikFY,i)})),s(this,"UGos",(function(t,e){var n=Math.ceil(t);return n>e.pJrp&&n<e.SRSB})),s(this,"qzEh",(function(t,e,r){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];switch(i&&n.QOya.Wvez&&(t+=n.Ujol),r){case"EQ":return t===e;case"GT":return t>e;case"GTE":return t>=e;case"LT":return t<e;case"LTE":return t<=e;default:return!1}})),s(this,"BKLW",(function(t,e){var n=!0;try{var i,a=function(){if(!e[o]||!1===n)return{v:!1};if("object"===r(t[o])){var i,a=t[o].op,s=t[o].t;"s"===s?i=t[o].val:"l"!==s&&"f"!==s||(i=parseFloat(t[o].val));var l=(Array.isArray(e[o])?e[o]:[e[o]]).some((function(t){return m(t,i,a)}));n=n&&l}else n=n&&m(e[o],t[o],"EQ")};for(var o in t)if(i=a())return i.v}catch(t){H.error(t),n=!1}return n}))}return o(e,[{key:"_displayCampaign",value:function(t){var e=at.getInstance();this.Qlmh=!0,this.Qlmh&&(this.RjKO+=1,this.Qlmh=this.qzEh(this.RjKO,this.QOya.vraJ,this.QOya.nWAU),this.Qlmh&&(this.QOya.datN=t,e.validate(this.PrFh,this.xVPp)))}}]),e}(),I="apx_variant_code",j=window.ApxorLogger,G=o((function e(){var n=this;i(this,e),s(this,"byst",[]),s(this,"_ret_day",{}),s(this,"SttW",{}),s(this,"eAxE",!1),s(this,"skQw",!1),s(this,"retainedDaysValidated",!0),s(this,"retainedSessionValidated",!0),s(this,"eventDoneInLT",!1),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{n.byst=t.overall_cfg.events,n._ret_day=t.overall_cfg.ret_day,n.SttW=t.overall_cfg.session,n.eAxE=t.overall_cfg.toggleRetDay,n.skQw=t.overall_cfg.toggleSession}catch(t){return j.error(t),!1}return!0})),s(this,"validate",(function(){var e=parseInt(t.getController().getFromStorage("apx_retained_days")),r=parseInt(t.getController().getFromStorage("apx_retained_session"));if(n.eAxE&&!isNaN(e)&&!(e>=n._ret_day.from&&e<=n._ret_day.to))return n.retainedDaysValidated=!1,!1;if(n.skQw&&!isNaN(r)&&!(r>=n.SttW.from&&r<=n.SttW.to))return n.retainedSessionValidated=!1,!1;try{for(var i=t.getController().getFromStorage("_apx_lt_count"),a=t.getSiteId(),o=JSON.parse((new TextDecoder).decode(function(t){for(var e=new ArrayBuffer(t.length),n=new Uint8Array(e),r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return e}(f(a,i)))),s=0;s<n.byst.length;s++){if(o[n.byst[s].name.replace("'","").replace("’","")])return n.eventDoneInLT=!0,!1}}catch(t){j.error("Failed to validate the lt count:"+t)}return!0}))})),X=window.ApxorLogger,W=o((function t(){var e=this;i(this,t),s(this,"MAbt",[]),s(this,"xlPs",[]),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(e.MAbt=t.attributes.user,e.xlPs=t.attributes.session,!Array.isArray(e.MAbt)||!Array.isArray(e.xlPs))return X.error("No attributes"),!1}catch(t){return X.error(t),!1}return!0})),s(this,"validate",(function(t,n){return e.ApCM(t,e.MAbt)&&e.ApCM(n,e.xlPs)})),s(this,"ApCM",(function(t,e){var n=e.length,r=!0;try{for(var i,a=function(){var n=e[o];if(!t[n.name]||!1===r)return{v:!1};var i=n.operator,a=n.type,s=n.value.map((function(t){return"s"===a?t:"l"===a?parseInt(t):"f"===a?parseFloat(t):void 0})),l=(Array.isArray(t[n.name])?t[n.name]:[t[n.name]]).some((function(t){return s.some((function(e){return m(t,e,i)}))}));r=r&&l},o=0;o<n;o++)if(i=a())return i.v}catch(t){X.error(t),r=!1}return r}))})),z=o((function e(){var n=this;i(this,e),s(this,"tUGL",t.getController()),s(this,"type",""),s(this,"_duration_seconds",0),s(this,"KJNp",1),s(this,"parse",(function(t){try{var e,r,i;if(n.bDHV=null===(e=t.terminate_info.time_based)||void 0===e?void 0:e.type,n._duration_seconds=null===(r=t.terminate_info)||void 0===r?void 0:r.time_based.duration_seconds,n.KJNp=null===(i=t.terminate_info.time_based)||void 0===i?void 0:i.days,n.mhSw(t._id))return n.tUGL.persistTerminationInfoLocally(t._id),!1}catch(t){return!1}return!0})),s(this,"mhSw",(function(t){var e,r=JSON.parse(n.tUGL.getFromStorage("apx_termination_ID"));if(!r[t]||null===(e=r[t])||void 0===e||!e.startDate)return!1;var i,a=new Date(r[t].startDate),o=new Date((i=new Date).getMonth()+"/"+i.getDate()+"/"+i.getFullYear()),s=parseInt((o-a)/864e5,10),l=function(){var t=new Date;return{hours:t.getHours(),mins:t.getMinutes()}}(),u=r[t].qwtr;return s===n.KJNp&&l.hours>=u.hours||s>n.KJNp||r[t].goalAcheived}))})),Y=o((function t(){var e=this;i(this,t),s(this,"enable_goal_events",!1),s(this,"attributes",{}),s(this,"MZhu",new W),s(this,"JABx",new z),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var n,r,i;if(e.enable_time_based=null==t||null===(n=t.terminate_info)||void 0===n?void 0:n.enable_time_based,e.enable_time_based&&!e.JABx.parse(t))return!1;if(e.enable_goal_events=null==t||null===(r=t.terminate_info)||void 0===r?void 0:r.enable_goal_events,e.enable_attributes=null==t||null===(i=t.terminate_info)||void 0===i?void 0:i.enable_attributes,e.enable_attributes&&!e.MZhu.parse(t.terminate_info))return!1}catch(t){return window.ApxorLogger.error(t),!1}return!0})),s(this,"validate",(function(t,n){return e.MZhu.validate(t,n)}))})),B=o((function t(){var e=this;i(this,t),s(this,"Uwkk",""),s(this,"BzrB",""),s(this,"dbZm",""),s(this,"nVRn",""),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{return e.Uwkk=null==t?void 0:t.screen_binding,!e.Uwkk||(e.BzrB=null==t?void 0:t.binding.url,e.dbZm=null==t?void 0:t.binding.var,e.nVRn=null==t?void 0:t.binding.operator,!0)}catch(t){return window.ApxorLogger.error(t),!1}})),s(this,"validate",(function(){var t=e.BzrB,n=e.dbZm,r=e.nVRn,i=window.location.href;return!e.Uwkk||("EQ"===r?t.includes(n)?!!E(i,t,n,!1):i===t:"SW"===r?t.includes(n)?!!E(i,t,n,!0):!!i.startsWith(t):void 0)}))})),$=window.ApxorLogger,tt=o((function e(){var r=this;i(this,e),s(this,"JXex",[]),s(this,"XlAz",[]),s(this,"PrFh",""),s(this,"sOEl",new C),s(this,"skJQ",new k),s(this,"RyRP",new Q),s(this,"SFEW",new T),s(this,"vaRg",new G),s(this,"qYXX",new Y),s(this,"HOAT",new B),s(this,"aNoi",!1),s(this,"RUka",[]),s(this,"_variant_code",""),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var e;if(!h(t._id))return $.error("No Id"),!1;if(!h(t.enabled)||!t.enabled)return $.error("Not enabled"),!1;if(!(r.sOEl.parse(t)&&r.RyRP.parse(t)&&r.SFEW.parse(t)&&r.skJQ.parse(t)&&r.vaRg.parse(t)&&r.qYXX.parse(t)&&r.HOAT.parse(t)))return!1;if(r._variant_code=r.sOEl._isExperiment||r.sOEl._only_context?null===(e=r.sOEl._attr)||void 0===e?void 0:e[I]:"TG",!h(t.conditions)||!Array.isArray(t.conditions))return $.error("No valid conditions",t.conditions),!1;r.PrFh=t._id,r.aNoi=!!h(t.sequence_enabled)&&t.sequence_enabled,r.aNoi&&t.conditions.sort((function(t,e){return t.sequence<e.sequence}));var n=t.conditions,i=n.length,a=null==t?void 0:t.no_context_enabled;0===i&&a&&r.mXdt();for(var o=function(){r.RUka=[];var t=n[s];if("didn't"===t.type){var e,i={trigger_key:t.trigger.details.name,no_kpi_array:null==t||null===(e=t.details)||void 0===e||null===(e=e.additional_info)||void 0===e?void 0:e.nkpi,condition_id:null==t?void 0:t._id,time_bounds:t.time_bounds.upper};r.RUka=[].concat(l(r.RUka),[i])}var a=new Z;if(a.initialize(t,r.PrFh,s,r.aNoi,r.RUka)){r.JXex.push(a);var o=(null==t?void 0:t.timeout)/(null==t?void 0:t.findinterval),u=(null==t?void 0:t.frameid)||"",c=null==t?void 0:t.url;window.location.href===c&&"view_visibility"===t.event_type&&!0===w(t.view_id,u,null==t?void 0:t.enable_retry,null==t?void 0:t.findinterval,o)&&r.mXdt(!0),window.addEventListener("navigate",(function(e){var n=null==t?void 0:t.url;window.location.href===n&&"view_visibility"===t.event_type&&!0===w(t.view_id,u,null==t?void 0:t.enable_retry,null==t?void 0:t.findinterval,o)&&r.mXdt(!0)}))}},s=0;s<i;s++)o();if(r.qYXX.enable_goal_events)for(var u=t.terminate_info.goal_events.events,c=u.length,d=0;d<c;d++){var v=new Z;v.initialize(u[d],r.PrFh,d,!0,[],"termination")&&r.XlAz.push(v)}return r.JXex.length>0}catch(t){return $.error(t),!1}})),s(this,"UGKR",(function(t){if(!(t<0))if(r.aNoi){var e=r.JXex[t];if(h(e)&&e.Qlmh){var n=r.JXex[t-1];if(h(n)&&!n.Qlmh)return;var i=r.JXex[t+1];h(i)?i.ArnS():r.mXdt()}}else r.mXdt()})),s(this,"gxDe",(function(t){t<0||r.brln()})),s(this,"mXdt",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=t.getController().getUserAttributes(),a=t.getController().getSessionAttributes();if(!(r.RyRP.validate()&&r.skJQ.validate(i,a)&&r.vaRg.validate()&&r.HOAT.validate()))return r.vaRg.retainedDaysValidated||null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===r.sOEl.bDHV?"survey":"campaign",apx_nudge_id:r.PrFh,apx_nudge_name:r.sOEl.KMTk,apx_variant_code:r.sOEl._isExperiment||r.sOEl._only_context?r.sOEl._attr[I]:"TG",apx_failure_type:"warn",apx_reason:"Retained day criteria not met"}),r.vaRg.retainedSessionValidated||null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===r.sOEl.bDHV?"survey":"campaign",apx_nudge_id:r.PrFh,apx_nudge_name:r.sOEl.KMTk,apx_variant_code:r.sOEl._isExperiment||r.sOEl._only_context?r.sOEl._attr[I]:"TG",apx_failure_type:"warn",apx_reason:"User session criteria not met"}),r.vaRg.eventDoneInLT&&(null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===r.sOEl.bDHV?"survey":"campaign",apx_nudge_id:r.PrFh,apx_nudge_name:r.sOEl.KMTk,apx_variant_code:r.sOEl._isExperiment||r.sOEl._only_context?r.sOEl._attr[I]:"TG",apx_failure_type:"warn",apx_reason:"Event done in life time"})),r.skJQ.userAttributesValidated||null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===r.sOEl.bDHV?"survey":"campaign",apx_nudge_id:r.PrFh,apx_nudge_name:r.sOEl.KMTk,apx_variant_code:r.sOEl._isExperiment||r.sOEl._only_context?r.sOEl._attr[I]:"TG",apx_failure_type:"warn",apx_reason:"User property filter not met"}),r.skJQ.sessionAttributeValidated||null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===r.sOEl.bDHV?"survey":"campaign",apx_nudge_id:r.PrFh,apx_nudge_name:r.sOEl.KMTk,apx_variant_code:r.sOEl._isExperiment||r.sOEl._only_context?r.sOEl._attr[I]:"TG",apx_failure_type:"warn",apx_reason:"Session property filter not met"}),r.RyRP._not_yet_active&&(null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===r.sOEl.bDHV?"survey":"campaign",apx_nudge_id:r.PrFh,apx_nudge_name:r.sOEl.KMTk,apx_variant_code:r.sOEl._isExperiment||r.sOEl._only_context?r.sOEl._attr[I]:"TG",apx_failure_type:"warn",apx_reason:"nudge not yet active"})),void(r.RyRP._nudge_expired&&(null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===r.sOEl.bDHV?"survey":"campaign",apx_nudge_id:r.PrFh,apx_nudge_name:r.sOEl.KMTk,apx_variant_code:r.sOEl._isExperiment||r.sOEl._only_context?r.sOEl._attr[I]:"TG",apx_failure_type:"warn",apx_reason:"nudge expired"})));var o=r.JXex.length,s=o<1,l="";0===o&&(s=!0);for(var u=0;u<o;u++){var c=r.JXex[u],d=c.Qlmh;if(""===l.trim())s=d;else switch(l){case"AND":s=s&&d;break;case"OR":s=s||d}l=c.uAKU}if(!0===e&&(s=!0),s){var h,v;if(console.debug("onCondition satisfied"),!r.SFEW.KsMJ(r.PrFh)){if(console.warn("Maximum limit reached",r.PrFh),t.getController().isTestDevice()){R("Maximum limit reached for campaign name ".concat(r.sOEl.KMTk));var p=document.getElementById("close-button"),f=function(){var t=document.getElementById("apx-container");null==t||t.remove()};null==p||p.addEventListener("click",f),window.setTimeout(f,2e4)}return void(null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"campaign",apx_nudge_id:r.PrFh,apx_nudge_name:r.sOEl.KMTk,apx_variant_code:r.sOEl._isExperiment||r.sOEl._only_context?r.sOEl._attr[I]:"TG",apx_failure_type:"warn",apx_reason:"Campaign limit reached"}))}null!==(h=window.ApxorRTM)&&void 0!==h&&h.isBadgePresent&&null!==(v=window.ApxorRTM)&&void 0!==v&&v.badgesLists.includes(r.PrFh)&&t.getController().isBadgeTriggerSatisfied(r.PrFh)||null==t||t.logEvent("apx_trigger_satisfied",{apx_nudge_type:"SURVEY"===r.sOEl.bDHV?"survey":"campaign",apx_nudge_id:r.PrFh,apx_nudge_name:r.sOEl.KMTk,apx_variant_code:r.sOEl._isExperiment||r.sOEl._only_context?r.sOEl._attr[I]:"TG"}),console.log("Dispatching event",r.sOEl.bDHV),!0===r.sOEl._only_context&&t.logEvent("apx_context_evaluated",n(n({},r.sOEl._attr),{},{message_name:r.sOEl.KMTk,id:r.PrFh})),t.getController().dispatchEvent(r.sOEl.bDHV,{name:r.sOEl.bDHV,additional_info:{uuid:r.PrFh,name:r.sOEl.KMTk}})}})),s(this,"brln",(function(){for(var e=r.XlAz.length,i=e<1,a="",o=0;o<e;o++){var s=r.XlAz[o],l=s.Qlmh;if(""===a.trim())i=l;else switch(a){case"AND":i=i&&l;break;case"OR":i=i||l}a=s.xxlS}i&&(console.log("Dispatching event",r.sOEl.bDHV),t.getController().persistTerminationInfoLocally(r.PrFh),!0===r.sOEl._only_context&&t.logEvent("apx_context_evaluated",n(n({},r.sOEl._attr),{},{message_name:r.sOEl.KMTk,id:r.PrFh})),t.getController().dispatchEvent(r.sOEl.bDHV,{name:r.sOEl.bDHV,additional_info:{uuid:r.PrFh,name:r.sOEl.KMTk}}))})),s(this,"validateForTerminationAttributes",(function(){var e=t.getController().getUserAttributes(),n=t.getController().getSessionAttributes();return r.qYXX.validate(e,n)})),s(this,"RZdE",(function(){r.SFEW.RZdE()})),s(this,"getFrequencyCount",(function(){return r.SFEW.getFrequencyCount()})),s(this,"QpTM",(function(){return r.SFEW.FBUp()}))})),et=o((function t(){var e=this;i(this,t),s(this,"Trwk",{}),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{configs:[]};if(h(t)&&h(t.configs)){var n=t.configs;if(!Array.isArray(n))return;n.sort((function(t,e){var n,r;return(null!==(n=t.prio)&&void 0!==n?n:-1)-(null!==(r=e.prio)&&void 0!==r?r:-1)}));for(var r=0;r<n.length;r++){var i=n[r],a=i._id,o=new tt;o.parse(i)?e.Trwk[a]=o:console.warn("Failed to parse cfg",a)}}})),s(this,"validate",(function(t,n){e.Trwk[t]&&e.Trwk[t].UGKR(n)})),s(this,"getVariantCode",(function(t){return e.Trwk[t]?e.Trwk[t]._variant_code:""})),s(this,"validateForTermination",(function(t,n){e.Trwk[t]&&e.Trwk[t].gxDe(n)})),s(this,"validateForTerminationAttributes",(function(t){return!!e.Trwk[t]&&e.Trwk[t].validateForTerminationAttributes()})),s(this,"RZdE",(function(t){e.Trwk[t].RZdE()})),s(this,"getFrequencyCount",(function(t){var n=e.Trwk[t];if(null!=n)return n.getFrequencyCount()})),s(this,"resetFrequencyCounts",(function(){var t=e.Trwk;for(var n in t)t[n].QpTM()})),s(this,"wqEX",(function(t){try{if(e.Trwk){var n=e.Trwk[t];if(n&&n.sOEl)return n.sOEl}}catch(t){console.log("Error in getting the campaign meta ".concat(t))}return{}}))})),nt=window.ApxorLogger,rt=o((function e(){var n=this;i(this,e),s(this,"JKUD",{}),s(this,"zSQQ",[]),s(this,"glCv",!1),s(this,"initialize",(function(){var e=t.getController();e.registerForEvent("APP_EVENT",(function(t){return n.gUCK(t,"AE")})),e.registerForEvent("CLIENT_EVENT",(function(t){return n.gUCK(t,"CE")}))})),s(this,"dmRd",(function(){for(var t in n.zSQQ)n.wCNj(t.event,t.key,t.type);n.glCv=!0})),s(this,"BPsC",(function(t,e){var r;"function"==typeof e&&((r=n.JKUD[t]?n.JKUD[t]:[]).push(e),n.JKUD[t]=r,nt.debug("Listeners list: ",n.JKUD))})),s(this,"unregisterFromEvent",(function(t,e){if(n.JKUD[t]){for(var r=n.JKUD[t],i=[],a=0;a<r.length;a++){var o=r[a];o!==e&&i.push(o)}n.JKUD[t]=i}})),s(this,"gUCK",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"AE",r=e+"___"+t.name;n.wCNj(t,r,e)})),s(this,"wCNj",(function(e,r,i){if(n.glCv){if(nt.debug("Notifying listeners for event: "+e+", "+r,n.JKUD),n.JKUD[r])for(var a=n.JKUD[r],o=t.getController().getSDKRunningTimeInSec(),s=0;s<a.length;s++){(0,a[s])(i,e.name,o,e.additional_info)}}else n.zSQQ.push({event:e,key:r,type:i})}))})),it=window.ApxorLogger,at=function(){function e(){var n=this;return i(this,e),s(this,"Rbvf",!1),s(this,"FZHx",null),s(this,"dxbV",x()),s(this,"ShNA",new rt),s(this,"tEkK",t.getSiteId()),s(this,"oGNq",{}),s(this,"getQeState",(function(){try{var e=t.getController().getFromStorage("qe_state");return e?JSON.parse(f(n.tEkK,e)):(n.oGNq={},n.setQeState())}catch(t){return n.oGNq={},n.setQeState()}})),s(this,"setQeState",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{t.getController().persistToStorage("qe_state",n.oGNq,!0)}catch(r){""===e?n.oGNq={}:n.oGNq[e]={SESSION:0,OVERALL:0,DATES:{}},t.getController().persistToStorage("qe_state",n.oGNq,!0)}return n.oGNq})),s(this,"initialize",(function(){n.Rbvf||(n.Rbvf=!0,n.FZHx=new et,n.ShNA.initialize(),n.oGNq=n.getQeState(),it.info("QE Initialized.."))})),s(this,"parse",(function(t){n.jyqW()?(n.FZHx.parse(t),n.ShNA.dmRd()):it.warn("Must call init first. Unable to proceed")})),s(this,"validate",(function(t,e){n.jyqW()&&n.FZHx.validate(t,e)})),s(this,"getVariantCode",(function(t){return n.FZHx.getVariantCode(t)})),s(this,"validateForTermination",(function(t,e){n.jyqW()&&n.FZHx.validateForTermination(t,e)})),s(this,"validateForTerminationAttributes",(function(t,e){return n.FZHx.validateForTerminationAttributes(t,e)})),s(this,"updateCount",(function(t){try{h(n.oGNq[t])||n.createObjConfig(t),n.incrementFrequencies(t),n.setQeState(t),n.FZHx.RZdE(t)}catch(t){console.log("Could not update the count config:".concat(t))}})),s(this,"resetFrequencyCounts",(function(){n.FZHx.resetFrequencyCounts()})),s(this,"getFrequencyCount",(function(t){return n.FZHx.getFrequencyCount(t)})),s(this,"registerForEvent",(function(t,e){n.ShNA.BPsC(t,e)})),s(this,"unregisterFromEvent",(function(t,e){n.ShNA.unregisterFromEvent(t,e)})),s(this,"notifyEventListener",(function(t){n.ShNA.gUCK(t)})),s(this,"fetch",(function(e,n,r,i){t.getController().fetchConfiguration(e,n,r,i)})),s(this,"jyqW",(function(){return n.Rbvf})),s(this,"getCampaignMetaFromQueryEngine",(function(t){return n.FZHx.wqEX(t)})),s(this,"AHDM",(function(){return n.dxbV})),e.instance||(e.instance=this),e.instance}return o(e,[{key:"createObjConfig",value:function(t){try{this.oGNq=this.getQeState(),h(this.oGNq[t])||(this.oGNq[t]={SESSION:0,OVERALL:0,DATES:{}},this.dxbV&&(this.oGNq[t].DATES[this.dxbV]=0),this.setQeState(t))}catch(t){it.error("Can not create the frequency count object:"+t)}}},{key:"incrementFrequencies",value:function(t){this.oGNq=this.getQeState();var e=this.oGNq[t];e.SESSION=e.SESSION+1,e.OVERALL=e.OVERALL+1;var n=x();n===this.dxbV&&e.DATES&&e.DATES[n]||(this.dxbV=n,e.DATES={},e.DATES[this.dxbV]=0),e.DATES[this.dxbV]=e.DATES[this.dxbV]+1}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();s(at,"instance",void 0),window.ceVersion=151;try{void 0===exports&&null===exports||(exports.default=at,module.exports=exports.default)}catch(t){}return at}));
