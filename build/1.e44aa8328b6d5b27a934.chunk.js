webpackJsonp([1,46],{419:function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(){var e=arguments.length<=0||void 0===arguments[0]?b:arguments[0],r=arguments[1];switch(r.type){case c.a:return e;case c.b.REQUEST_LOGIN:return e;case c.b.LOG_OUT:return Object.assign({},e,i({},e,{activeUser:null}));case c.b.RECEIVE_LOGIN:return Object.assign({},e,i({},e,{activeUser:r.activeUser}));case c.b.ADD_USER_ID:return Object.assign({},e,i({},e,{userInfo:r.userInfo}));case c.b.RECEIVING_ERR:return Object.assign({},e,i({},e,{err:r.err}));case c.b.ADD_API_KEY:return Object.assign({},e,i({},e,{apiKey:r.apiKey}));case c.b.UPDATE_FORM:return i({},e,n({},r.field,r.value));default:return e}}var s=t(120),u=s&&s.__esModule?function(){return s["default"]}:function(){return s};t.d(u,"a",u);var c=t(418),i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},b=t.i(s.fromJS)({});r["default"]=a}});