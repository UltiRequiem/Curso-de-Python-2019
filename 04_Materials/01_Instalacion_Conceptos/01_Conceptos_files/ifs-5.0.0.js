!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=197)}({197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(198);function r(e){var t=window.location.search.match(new RegExp("[?&]"+e+"=([^&]*)(&?)","i"));return t?decodeURIComponent(t[1]):"null"}var i=new(n(199).default)(r("journeyId"),r("iframeId"));i.init(),new o.default(i,r("journeyCode")).init(),i.finishInitialization()},198:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.AD_KEY=void 0;var o=t(22);n.AD_KEY="__adid";var r=(i.prototype.init=function(){var e=null,t=o.getCookieValue(n.AD_KEY);t&&(e=JSON.parse(decodeURIComponent(t))[this.journeyCode]||null)&&(e.ed=e.ed||0,e.ed<(new Date).getTime()&&(e=null)),e&&this.hasBeenFiredInSession(e.da)&&(e=null),this.storageCommunicator.storeDirectMessage("ad",e)},i.prototype.hasBeenFiredInSession=function(e){var t=this.storageCommunicator.getItem("sessionId")+".Ve."+this.storageCommunicator.journeyId+".sessionData";return 1<=((this.storageCommunicator.getItem(t)||{})[e]||{}).appFires},i);function i(e,t){this.storageCommunicator=e,this.journeyCode=t}n.default=r},199:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(23),r=n(22),i="vetestcookie",s=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\./i;function a(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(e){}}function u(t){var n="null";try{return n=localStorage.getItem(t)||n,JSON.parse(n)}catch(e){if("SyntaxError"!==e.name)return;a(t,n)}return n}function c(e,t,n){a(e.journeyId+"."+t,n)}function d(e,t){return u(e.journeyId+"."+t)}function l(e,t){try{localStorage.removeItem(e.journeyId+"."+t)}catch(e){}}function f(e){var n=new RegExp("^"+e+"\\."),t={};try{return Object.keys(localStorage).filter(function(e){return n.test(e)}).reduce(function(e,t){return e[t.replace(n,"")]=u(t),e},t)}catch(e){}return t}function p(e,t,n){void 0===n&&(n="data");t.sessionId,e.sessionId;var o=function(e,t){var n,o,r=new RegExp("^"+t+"(?!tabs.)"),i={};for(n in e)!(o=r.test(n))&&s.test(n)||(i[o?n.replace(r,""):n]=e[n]);return i}(t,t.sessionId+"\\.");e.sendMessageToParent(n,o)}function y(t,e){var n,o;try{n=JSON.parse(e.data)||{}}catch(e){n={}}switch(n.command){case 1:t.sessionId=n.sessionId,o=f(t.journeyId),function(t,n){var o=new RegExp("^"+n.sessionId+"\\.");n.sessionId!==t.sessionId&&(Object.keys(n).filter(function(e){return o.test(e)}).forEach(function(e){delete n[e],l(t,e)}),c(t,"sessionId",t.sessionId),n.sessionId=t.sessionId)}(t,o),window.addEventListener("storage",function(e){return function(e,t){var n=new RegExp("^"+e.journeyId+"\\.");"storage"===t.type&&t.key&&n.test(t.key)&&p(e,f(e.journeyId))}(t,e)},!1),p(t,o);break;case 2:!function(e,t,n){var o=t.value;d(e,"sessionId")===n&&t.hasOwnProperty("value")&&t.hasOwnProperty("key")&&c(e,n+"."+t.key,o)}(t,n,t.sessionId);break;case 3:n.hasOwnProperty("key")&&l(t,t.sessionId+"."+n.key)}}var g=(v.prototype.init=function(e){var t=this;void 0===e&&(e=function(){return window.localStorage});try{e()}catch(e){this.ifsState.audit.isStorageAvailable=!1,this.ifsState.audit.message=e.message}this.extendState(),window.addEventListener("message",function(e){return y(t,e)},!1)},v.prototype.finishInitialization=function(){this.sendMessageToParent("ready",this.ifsState)},v.prototype.sendMessageToParent=function(e,t){void 0===t&&(t=null),window.parent.postMessage(JSON.stringify({id:this.iframeId,messageType:e,messageBody:t}),this.targetOrigin)},v.prototype.storeDirectMessage=function(e,t){void 0===t&&(t=null),"ad"===e&&(this.ifsState.ad=t),c(this,e,t)},v.prototype.getItem=function(e){return this.ifsState.audit.isStorageAvailable?d(this,e):null},v.prototype.extendState=function(){var e,t=this.ifsState.audit.isCookieAvailable,n=r.getCookieValue("__ssid")||"";e=t?n?o.default.crossStorage:o.default.unset:o.default.blocked,this.ifsState.state={veCookieId:n,veCookieStatus:e}},v);function v(e,t){this.iframeId=t,this.journeyId=e,this.targetOrigin=document.referrer.replace(/^([a-z]*:\/\/[^\/]+).*$/,"$1")||"*",this.ifsState={audit:{isCookieAvailable:function(){try{document.cookie=i+"=test; samesite=none; secure";var e=!!r.getCookieValue(i);return e&&(document.cookie=i+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; samesite=none; secure"),e}catch(e){return!1}}(),isStorageAvailable:!0,message:""},state:{veCookieId:"",veCookieStatus:o.default.unset}}}t.default=g},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setCookieValue=t.getCookieValue=void 0;t.getCookieValue=function(e){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null};t.setCookieValue=function(e,t,n){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var o="; expires="+n.toUTCString();return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+o+"; path=/",!0}},23:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={error:-3,blocked:-2,optedOut:-1,unset:0,crossStorage:1,storage:2,api:3,sessionApi:4}}});