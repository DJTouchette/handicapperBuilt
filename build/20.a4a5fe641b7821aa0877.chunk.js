webpackJsonp([20,46],{1028:function(e,t,r){"use strict";function n(){var e,t,n;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=3,r.i(c.take)(u.b.REQUEST_HANDICAPPERS);case 3:return e=s.sent,s.prev=4,s.next=7,r.i(c.call)(f.b,e.apiKey,E.e.handicappers);case 7:return t=s.sent,s.next=10,r.i(c.put)(r.i(R.a)(t.response.rows));case 10:return s.next=12,r.i(c.call)(f.b,e.apiKey,E.e.payments);case 12:return n=s.sent,s.next=15,r.i(c.put)(r.i(R.b)(n.response.rows));case 15:return s.next=17,r.i(c.put)(r.i(R.c)());case 17:s.next=22;break;case 19:s.prev=19,s.t0=s["catch"](4),console.log(s.t0);case 22:s.next=0;break;case 24:case"end":return s.stop()}},l[0],this,[[4,19]])}function s(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.i(p.a)(u.b.REQUEST_DEMOGRAPHIC,E.e.demographic,R.d);case 2:case"end":return e.stop()}},l[1],this)}function o(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.i(p.a)(u.b.REQUEST_PRODUCTS,E.e.operations,R.e);case 2:case"end":return e.stop()}},l[2],this)}function a(){var e,t,n;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=3,r.i(c.take)(u.b.REQUEST_ORDERS);case 3:return e=s.sent,console.log("IN SAAGA"),console.log(e),s.prev=6,s.next=9,r.i(c.call)(f.b,e.apiKey,"http://thesportsmatrix.com/api/v1/users/"+e.id+"/handicapper/orders");case 9:return t=s.sent,console.log(t),s.next=13,r.i(c.put)(r.i(R.f)(t.response.rows));case 13:return s.next=15,r.i(c.call)(f.b,e.apiKey,"http://thesportsmatrix.com/api/v1/users/"+e.id+"/payments");case 15:return n=s.sent,console.log(n.response.rows),s.next=19,r.i(c.put)(r.i(R.g)(n.response.rows));case 19:s.next=24;break;case 21:s.prev=21,s.t0=s["catch"](6),console.log(s.t0);case 24:s.next=0;break;case 26:case"end":return s.stop()}},l[3],this,[[6,21]])}var c=r(1056),i=c&&c.__esModule?function(){return c["default"]}:function(){return c};r.d(i,"a",i);var u=r(1167),p=r(1071),f=r(88),E=r(412),R=r(1183);t.defaultSaga=n,t.requestDemo=s,t.getProducts=o,t.getOrders=a;var l=[n,s,o,a].map(regeneratorRuntime.mark);t["default"]=[n,o,a,s]},1056:function(e,t,r){e.exports=r(413)},1071:function(e,t,r){"use strict";function n(e,t,n){var s,o,a,c;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=3,r.i(u.take)(e);case 3:return s=i.sent,i.prev=4,i.next=7,r.i(u.call)(f.b,s.apiKey,t);case 7:return o=i.sent,console.log(o),a=o,c=a.response.rows,i.next=13,r.i(u.put)(n(c));case 13:i.next=19;break;case 15:return i.prev=15,i.t0=i["catch"](4),i.next=19,E.notify.show("Something went wrong with the request","error",3e3);case 19:i.next=0;break;case 21:case"end":return i.stop()}},A[0],this,[[4,15]])}function s(e,t,n){var s,o,a,c;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=3,r.i(u.take)(e);case 3:return s=i.sent,i.prev=4,i.next=7,r.i(u.call)(f.b,s.apiKey,t+"/"+s.id);case 7:return o=i.sent,a=o,c=a.response.rows,console.log(c),i.next=13,r.i(u.put)(n(c));case 13:i.next=20;break;case 15:return i.prev=15,i.t0=i["catch"](4),i.next=19,E.notify.show("Something went wrong with the request","error",3e3);case 19:console.log(i.t0);case 20:i.next=0;break;case 22:case"end":return i.stop()}},A[1],this,[[4,15]])}function o(e,t,n){var s,o=this;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=3,r.i(u.take)(e);case 3:return s=a.sent,console.log("IN DELLLEEEEEETE"),console.log(s),a.prev=6,a.delegateYield(regeneratorRuntime.mark(function c(){var e,a,i,p;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,r.i(u.call)(f.c,s.apiKey,t,s.id);case 2:return e=o.sent,console.log(e),a=e,0==a.success&&(i=Object.keys(a.errors),p=i.map(function(e,t){return a.errors[e][0]+"  "}),E.notify.show(p,"error",4e3)),o.next=8,r.i(u.put)(n(s.id));case 8:return o.next=10,E.notify.show("Deleted the record with a ID of "+s.id,"success",3e3);case 10:case"end":return o.stop()}},c,o)})(),"t0",8);case 8:a.next=14;break;case 10:return a.prev=10,a.t1=a["catch"](6),a.next=14,E.notify.show("Something went wrong with the request","error",3e3);case 14:a.next=0;break;case 16:case"end":return a.stop()}},A[2],this,[[6,10]])}function a(e,t,n){var s,o,a,c;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=3,r.i(u.take)(e);case 3:return s=i.sent,i.prev=4,i.next=7,r.i(u.call)(f.d,s.apiKey,t,s.item);case 7:return o=i.sent,i.next=10,JSON.parse(o);case 10:return a=i.sent,c=a.response.rows,i.next=14,r.i(u.put)(n(c));case 14:i.next=20;break;case 16:return i.prev=16,i.t0=i["catch"](4),i.next=20,E.notify.show("Something went wrong with the request","error",3e3);case 20:i.next=0;break;case 22:case"end":return i.stop()}},A[3],this,[[4,16]])}function c(e,t){var n,s=this;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=3,r.i(u.take)(e);case 3:return n=o.sent,console.log(n),o.prev=5,o.delegateYield(regeneratorRuntime.mark(function a(){var e,o,c,i;return regeneratorRuntime.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,r.i(u.call)(f.e,n.apiKey,t,n.item);case 2:e=s.sent,o=e,console.log(o),0==o.success&&(c=Object.keys(o.errors),i=c.map(function(e,t){return o.errors[e][0]+"  "}),E.notify.show(i,"error",4e3)),1==o.success&&E.notify.show("Succesfully added item","success",3e3);case 7:case"end":return s.stop()}},a,s)})(),"t0",7);case 7:o.next=12;break;case 9:o.prev=9,o.t1=o["catch"](5),console.log(o.t1);case 12:o.next=0;break;case 14:case"end":return o.stop()}},A[4],this,[[5,9]])}function i(e,t,n){var s,o,a=this;return regeneratorRuntime.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=3,r.i(u.take)(e);case 3:return s=c.sent,console.log("IN UPDDAAATE"),console.log(s),c.prev=6,c.delegateYield(regeneratorRuntime.mark(function i(){var e,o,c,p,R;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r.i(u.call)(f.f,s.apiKey,t+"/"+s.id,s.form);case 2:if(e=a.sent,o=e,0!=o.success){a.next=9;break}return c=Object.keys(o.errors),p=c.map(function(e,t){return o.errors[e][0]+"  "}),E.notify.show(p,"error",4e3),a.abrupt("return",{v:void 0});case 9:return a.next=11,r.i(u.call)(f.b,s.apiKey,t);case 11:return R=a.sent,a.next=14,r.i(u.put)(n(R.response.rows));case 14:return a.next=16,E.notify.show("Update item with a ID of "+s.id,"success",3e3);case 16:case"end":return a.stop()}},i,a)})(),"t0",8);case 8:if(o=c.t0,"object"!==("undefined"==typeof o?"undefined":l(o))){c.next=11;break}return c.abrupt("return",o.v);case 11:c.next=18;break;case 13:return c.prev=13,c.t1=c["catch"](6),console.log(c.t1),c.next=18,E.notify.show("Something went wrong with the request","error",3e3);case 18:c.next=0;break;case 20:case"end":return c.stop()}},A[5],this,[[6,13]])}var u=r(1056),p=u&&u.__esModule?function(){return u["default"]}:function(){return u};r.d(p,"a",p);var f=r(88),E=r(411),R=E&&E.__esModule?function(){return E["default"]}:function(){return E};r.d(R,"a",R),t.a=n,t.d=s,t.b=o,t.c=i;var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},A=[n,s,o,a,c,i].map(regeneratorRuntime.mark)},1167:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return s});var n="app/OverviewHandicapper/DEFAULT_ACTION",s={REQUEST_HANDICAPPERS:"REQUEST_HANDICAPPERS",ADD_HANDICAPPERS:"ADD_HANDICAPPERS",REQUEST_DEMOGRAPHIC:"REQUEST_DEMOGRAPHIC",REQUEST_PRODUCTS:"REQUEST_PRODUCTS",REQUEST_ORDERS:"REQUEST_ORDERS",ADD_OPERATIONS:"ADD_OPERATIONS",ADD_DEMOGRAPHIC:"ADD_DEMOGRAPHIC",ADD_ORDERS:"ADD_ORDERS",SEARCH_OPERATIONS_BY:"SEARCH_OPERATIONS_BY",SEARCH_DEMOGRAPHIC_BY:"SEARCH_DEMOGRAPHIC_BY",SEARCH_ORDERS_BY:"SEARCH_ORDERS_BY",SEARCH_PAYMENT_ORDERS_BY:"SEARCH_PAYMENT_ORDERS_BY",ADD_PAYMENTS:"ADD_PAYMENTS",MAKE_HANDICAPPER_LIST:"MAKE_HANDICAPPER_LIST",ADD_INFO_PAYMENT:"ADD_INFO_PAYMENT",CLEAR_ORDERS:"CLEAR_ORDERS"}},1183:function(e,t,r){"use strict";function n(e){return{type:_.b.REQUEST_HANDICAPPERS,apiKey:e}}function s(e){return{type:_.b.ADD_HANDICAPPERS,list:e}}function o(){return{type:_.b.CLEAR_ORDERS}}function a(e){return{type:_.b.ADD_PAYMENTS,list:e}}function c(e){return{type:_.b.ADD_INFO_PAYMENT,list:e}}function i(){return{type:_.b.MAKE_HANDICAPPER_LIST}}function u(e){return{type:_.b.REQUEST_DEMOGRAPHIC,apiKey:e}}function p(e){return{type:_.b.REQUEST_PRODUCTS,apiKey:e}}function f(e){return{type:_.b.ADD_OPERATIONS,operationsList:e}}function E(e){return{type:_.b.ADD_ORDERS,list:e}}function R(e,t){return{type:_.b.REQUEST_ORDERS,apiKey:e,id:t}}function l(e){return{type:_.b.ADD_DEMOGRAPHIC,list:e,page:paginate(25,e)}}function A(e,t){return{type:_.b.SEARCH_PAYMENT_ORDERS_BY,field:e,value:t}}function D(e,t){return{type:_.b.SEARCH_ORDERS_BY,field:e,value:t}}function S(e,t){return{type:_.b.SEARCH_DEMOGRAPHIC_BY,field:e,value:t}}var _=r(1167);t.h=n,t.a=s,t.k=o,t.b=a,t.g=c,t.c=i,t.i=u,t.j=p,t.e=f,t.f=E,t.m=R,t.d=l,t.o=A,t.n=D,t.l=S}});