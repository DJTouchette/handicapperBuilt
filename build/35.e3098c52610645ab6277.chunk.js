webpackJsonp([35,46],{1006:function(r,t,e){"use strict";function a(r){if(Array.isArray(r)){for(var t=0,e=Array(r.length);t<r.length;t++)e[t]=r[t];return e}return Array.from(r)}function n(){var r=arguments.length<=0||void 0===arguments[0]?f:arguments[0],t=arguments[1];switch(t.type){case E.a:return r;case E.b.REQUEST_HANDICAPPERS:return Object.assign({},r,o({},r,{apiKey:t.apiKey}));case E.b.DELETE:var n=r.handicappersList.filter(function(r){return r.id!==t.id});return Object.assign({},r,{handicappersList:n});case E.b.REQUEST_DELETE:return r;case E.b.RECEIVING_HANDICAPPERS:return Object.assign({},r,o({},r,{handicappersList:t.handicappersList,page:e.i(c.a)(25,t.handicappersList)}));case E.b.UPDATE:var i=r.handicappersList.map(function(r,e){if(r.id==t.id){var n=Object.assign.apply(Object,[{}].concat(a(t.form)));return Object.assign({},r,n)}return r});if(r.searchList){var s=r.searchList.map(function(r,e){if(r.id==t.id){var n=Object.assign.apply(Object,[{}].concat(a(t.form)));return Object.assign({},r,n)}return r});return Object.assign({},r,{handicappersList:i,searchList:s,searchPage:e.i(c.a)(25,s)})}return Object.assign({},r,{handicappersList:i});case E.b.REQUEST_UPDATE:return r;case E.b.SEARCH_ID:var p=e.i(u.a)(r.handicappersList,t.field,t.value);return Object.assign({},r,{searchList:p.searchList,searchPage:p.searchPage});default:return r}}var i=e(120),s=i&&i.__esModule?function(){return i["default"]}:function(){return i};e.d(s,"a",s);var c=e(1057),u=e(1148),E=e(1161),o=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a])}return r},f=e.i(i.fromJS)({});t["default"]=n},1057:function(r,t,e){"use strict";function a(r,t){return t.slice(0,r)}function n(r,t){return t.slice(r)}function i(r){return Array.prototype.concat.apply(this,r)}function s(r,t){if(t.length){var e=a(r,t),c=n(r,t);return i.call([e],[s(r,c)])}return[]}function c(r,t){return s(r,t).map(function(t,e){var a=r*e;return{start:a+1,end:a+t.length,items:t}})}t.a=c},1148:function(r,t,e){"use strict";function a(r,t,a){if("string"==typeof r[0][t]){var i=r.filter(function(r){return r[t].toLowerCase()==a.toLowerCase()||r[t].toLowerCase().includes(a.toLowerCase())});return{searchList:i,searchPage:e.i(n.a)(25,i)}}var s=r.filter(function(r){return r[t]==a});return{searchList:s,searchPage:e.i(n.a)(25,s)}}var n=e(1057);t.a=a},1161:function(r,t,e){"use strict";e.d(t,"a",function(){return a}),e.d(t,"b",function(){return n});var a="app/Handicappers/DEFAULT_ACTION",n={REQUEST_HANDICAPPERS:"REQUEST_HANDICAPPERS",RECEIVING_HANDICAPPERS:"RECEIVING_HANDICAPPERS",REQUEST_DELETE:"REQUEST_DELETE",DELETE:"DELETE",REQUEST_UPDATE:"REQUEST_UPDATE",UPDATE:"UPDATE",SEARCH_ID:"SEARCH_ID"}}});