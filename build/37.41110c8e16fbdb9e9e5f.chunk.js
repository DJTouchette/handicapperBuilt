webpackJsonp([37,46],{1057:function(t,r,e){"use strict";function n(t,r){return r.slice(0,t)}function a(t,r){return r.slice(t)}function i(t){return Array.prototype.concat.apply(this,t)}function s(t,r){if(r.length){var e=n(t,r),c=a(t,r);return i.call([e],[s(t,c)])}return[]}function c(t,r){return s(t,r).map(function(r,e){var n=t*e;return{start:n+1,end:n+r.length,items:r}})}r.a=c},1148:function(t,r,e){"use strict";function n(t,r,n){if("string"==typeof t[0][r]){var i=t.filter(function(t){return t[r].toLowerCase()==n.toLowerCase()||t[r].toLowerCase().includes(n.toLowerCase())});return{searchList:i,searchPage:e.i(a.a)(25,i)}}var s=t.filter(function(t){return t[r]==n});return{searchList:s,searchPage:e.i(a.a)(25,s)}}var a=e(1057);r.a=n},1158:function(t,r,e){"use strict";function n(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}e.d(r,"a",function(){return i}),e.d(r,"b",function(){return s});var a,i="app/Events/DEFAULT_ACTION",s=(a={REQUEST_ACTIONS:"REQUEST_ACTIONS",RECEIVING_ACTIONS:"RECEIVING_ACTIONS",REQUEST_DELETE:"REQUEST_DELETE",DELETE:"DELETE"},n(a,"REQUEST_DELETE","REQUEST_DELETE"),n(a,"DELETE","DELETE"),n(a,"REQUEST_UPDATE","REQUEST_UPDATE"),n(a,"UPDATE","UPDATE"),n(a,"SEARCH_ID","SEARCH_ID"),a)},997:function(t,r,e){"use strict";function n(t){if(Array.isArray(t)){for(var r=0,e=Array(t.length);r<t.length;r++)e[r]=t[r];return e}return Array.from(t)}function a(){var t=arguments.length<=0||void 0===arguments[0]?f:arguments[0],r=arguments[1];switch(r.type){case E.a:return t;case E.b.REQUEST_ACTIONS:return Object.assign({},t,o({},t,{apiKey:r.apiKey}));case E.b.DELETE:var a=t.actionsList.filter(function(t){return t.id!==r.id});return Object.assign({},t,{actionsList:a});case E.b.REQUEST_DELETE:return t;case E.b.RECEIVING_ACTIONS:return Object.assign({},t,o({},t,{actionsList:r.actions,page:e.i(c.a)(25,r.actions)}));case E.b.UPDATE:var i=t.actionsList.map(function(t,e){if(t.id==r.id){var a=Object.assign.apply(Object,[{}].concat(n(r.form)));return Object.assign({},t,a)}return t});if(t.searchList){var s=t.searchList.map(function(t,e){if(t.id==r.id){var a=Object.assign.apply(Object,[{}].concat(n(r.form)));return Object.assign({},t,a)}return t});return Object.assign({},t,{actionsList:i,searchList:s})}return Object.assign({},t,{actionsList:i});case E.b.REQUEST_UPDATE:return t;case E.b.SEARCH_ID:var T=e.i(u.a)(t.actionsList,r.field,r.value);return Object.assign({},t,{searchList:T.searchList,searchPage:T.searchPage});default:return t}}var i=e(120),s=i&&i.__esModule?function(){return i["default"]}:function(){return i};e.d(s,"a",s);var c=e(1057),u=e(1148),E=e(1158),o=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},f=e.i(i.fromJS)({});r["default"]=a}});