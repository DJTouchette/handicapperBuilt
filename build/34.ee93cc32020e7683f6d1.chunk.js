webpackJsonp([34,46],{1021:function(r,t,e){"use strict";function n(r){if(Array.isArray(r)){for(var t=0,e=Array(r.length);t<r.length;t++)e[t]=r[t];return e}return Array.from(r)}function a(){var r=arguments.length<=0||void 0===arguments[0]?f:arguments[0],t=arguments[1];switch(t.type){case u.a:return r;default:return r;case u.b.REQUEST_OPERATIONS:return Object.assign({},r,E({},r,{apiKey:t.apiKey}));case u.b.DELETE:var a=r.operationsList.filter(function(r){return r.id!==t.id});return Object.assign({},r,{operationsList:a});case u.b.REQUEST_DELETE:return r;case u.b.RECEIVING_OPERATIONS:return Object.assign({},r,E({},r,{operationsList:t.operations,page:e.i(c.a)(25,t.operations)}));case u.b.UPDATE:var i=r.operationsList.map(function(r,e){if(r.id==t.id){var a=Object.assign.apply(Object,[{}].concat(n(t.form)));return Object.assign({},r,a)}return r});if(r.searchList){var s=r.searchList.map(function(r,e){if(r.id==t.id){var a=Object.assign.apply(Object,[{}].concat(n(t.form)));return Object.assign({},r,a)}return r});return Object.assign({},r,{operationsList:i,searchList:s})}return Object.assign({},r,{operationsList:i});case u.b.REQUEST_UPDATE:return r;case u.b.SEARCH_ID:var p=e.i(o.a)(r.brandsList,t.field,t.value);return Object.assign({},r,{searchList:p.searchList,searchPage:p.searchPage})}}var i=e(120),s=i&&i.__esModule?function(){return i["default"]}:function(){return i};e.d(s,"a",s);var c=e(1057),o=e(1148),u=e(1165),E=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},f=e.i(i.fromJS)({});t["default"]=a},1057:function(r,t,e){"use strict";function n(r,t){return t.slice(0,r)}function a(r,t){return t.slice(r)}function i(r){return Array.prototype.concat.apply(this,r)}function s(r,t){if(t.length){var e=n(r,t),c=a(r,t);return i.call([e],[s(r,c)])}return[]}function c(r,t){return s(r,t).map(function(t,e){var n=r*e;return{start:n+1,end:n+t.length,items:t}})}t.a=c},1148:function(r,t,e){"use strict";function n(r,t,n){if("string"==typeof r[0][t]){var i=r.filter(function(r){return r[t].toLowerCase()==n.toLowerCase()||r[t].toLowerCase().includes(n.toLowerCase())});return{searchList:i,searchPage:e.i(a.a)(25,i)}}var s=r.filter(function(r){return r[t]==n});return{searchList:s,searchPage:e.i(a.a)(25,s)}}var a=e(1057);t.a=n},1165:function(r,t,e){"use strict";e.d(t,"a",function(){return n}),e.d(t,"b",function(){return a});var n="app/Operations/DEFAULT_ACTION",a={REQUEST_OPERATIONS:"REQUEST_OPERATIONS",RECEIVING_OPERATIONS:"RECEIVING_OPERATIONS",REQUEST_DELETE:"REQUEST_DELETE",DELETE:"DELETE",REQUEST_UPDATE:"REQUEST_UPDATE",UPDATE:"UPDATE",SEARCH_ID:"SEARCH_ID"}}});