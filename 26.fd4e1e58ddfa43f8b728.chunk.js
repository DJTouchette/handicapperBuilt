webpackJsonp([26,37],{638:function(r,t,e){"use strict";function i(r){if(Array.isArray(r)){for(var t=0,e=Array(r.length);t<r.length;t++)e[t]=r[t];return e}return Array.from(r)}function s(){var r=arguments.length<=0||void 0===arguments[0]?u:arguments[0],t=arguments[1];switch(t.type){case c.a:return r;case c.b.REQUEST_PICKS:return Object.assign({},r,E({},r,{apiKey:t.apiKey}));case c.b.RECEIVING_PICKS:return Object.assign({},r,E({},r,{picksList:t.picks}));case c.b.DELETE:var e=r.picksList.filter(function(r){return r.id!==t.id});return Object.assign({},r,{picksList:e});case c.b.REQUEST_DELETE:return r;case c.b.UPDATE:var s=r.picksList.map(function(r,e){if(r.id==t.id){var s=Object.assign.apply(Object,[{}].concat(i(t.form)));return Object.assign({},r,s)}return r});if(r.searchList){var n=r.searchList.map(function(r,e){if(r.id==t.id){var s=Object.assign.apply(Object,[{}].concat(i(t.form)));return Object.assign({},r,s)}return r});return Object.assign({},r,{picksList:s,searchList:n})}return Object.assign({},r,{picksList:s});case c.b.REQUEST_UPDATE:return r;case c.b.SEARCH_ID:if("string"==typeof r.picksList[0][t.field]){var a=r.picksList.filter(function(r){return r[t.field].toLowerCase()==t.value.toLowerCase()||r[t.field].toLowerCase().includes(t.value.toLowerCase())});return Object.assign({},r,{searchList:a})}var o=r.picksList.filter(function(r){return r[t.field]==t.value});return Object.assign({},r,{searchList:o});default:return r}}var n=e(84),a=n&&n.__esModule?function(){return n["default"]}:function(){return n};e.d(a,"a",a);var c=e(886),E=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i])}return r},u=e.i(n.fromJS)({});t["default"]=s},886:function(r,t,e){"use strict";e.d(t,"a",function(){return i}),e.d(t,"b",function(){return s});var i="app/Picks/DEFAULT_ACTION",s={REQUEST_PICKS:"REQUEST_PICKS",RECEIVING_PICKS:"RECEIVING_PICKS",REQUEST_DELETE:"REQUEST_DELETE",DELETE:"DELETE",REQUEST_UPDATE:"REQUEST_UPDATE",UPDATE:"UPDATE",SEARCH_ID:"SEARCH_ID"}}});