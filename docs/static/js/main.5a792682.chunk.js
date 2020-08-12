(this["webpackJsonpreact-admin"]=this["webpackJsonpreact-admin"]||[]).push([[16],{101:function(e,n,t){"use strict";var r=t(213),a=t(90),o=t(214),c=t(215),u=t(216),i=t(145),s=t(17),l={path:"/",key:"root",name:"root",menu:!1,component:Object(s.a)((function(){return Promise.all([t.e(0),t.e(22),t.e(14)]).then(t.bind(null,229))})),login:!0,routes:[{path:"/welcome",key:"welcome",name:"\u9996\u9875",icon:r.a,menu:!0,exact:!0,component:Object(s.a)((function(){return t.e(19).then(t.bind(null,220))}))},{path:"/dashboard",key:"dashboard",name:"Dashboard",icon:a.a,menu:!0,component:Object(s.a)((function(){return t.e(4).then(t.bind(null,230))})),routes:[{path:"/dashboard/a",key:"dashboard-a",name:"dashboard-a",icon:a.a,menu:!0,component:Object(s.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(20),t.e(5)]).then(t.bind(null,231))}))},{path:"/dashboard/b",key:"dashboard-b",name:"dashboard-b",icon:a.a,menu:!0,component:Object(s.a)((function(){return t.e(6).then(t.bind(null,221))}))}]},{path:"/form",key:"form",name:"\u8868\u5355",icon:o.a,menu:!0,component:Object(s.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(11)]).then(t.bind(null,219))}))},{path:"/grid",key:"grid",name:"\u6570\u636e",icon:c.a,menu:!0,component:Object(s.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(12)]).then(t.bind(null,228))})),routes:[{path:"/grid/info/:id",key:"grid-info",name:"grid-info",menu:!1,component:Object(s.a)((function(){return t.e(13).then(t.bind(null,222))}))}]},{path:"/detail",key:"detail",name:"\u8be6\u60c5",icon:u.a,menu:!0,authority:["user"],component:Object(s.a)((function(){return t.e(7).then(t.bind(null,223))}))},{path:"/result",key:"result",name:"\u7ed3\u679c",icon:i.a,menu:!0,authority:["admin","user"],component:Object(s.a)((function(){return t.e(17).then(t.bind(null,224))}))},{path:"/error",key:"error",name:"\u9519\u8bef",icon:i.a,menu:!0,component:Object(s.a)((function(){return t.e(8).then(t.bind(null,225))}))},{path:"/403",key:"error-403",name:"403",menu:!1,component:Object(s.a)((function(){return t.e(9).then(t.bind(null,226))}))},{key:"error-404",name:"404",menu:!1,component:Object(s.a)((function(){return t.e(10).then(t.bind(null,227))}))}]};n.a=l},121:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var r=t(8),a=t(21),o=t(72),c=t(129),u={isLogin:!1,loading:!1,userInfo:null,msg:null,remember:!1,loginType:""},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(r.a)({},u),n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case"REQUEST":return Object(r.a)(Object(r.a)({},e),{},{loading:!0});case"LOGIN_SUCCESS":return Object(r.a)(Object(r.a)({},e),{},{isLogin:!0,loading:!1,userInfo:Object(r.a)({},a.userInfo),msg:null,remember:a.remember,loginType:a.loginType});case"LOGIN_FAILURE":return Object(r.a)(Object(r.a)(Object(r.a)({},e),u),a);case"LOGOUT_SUCCESS":case"LOGOUT_FAILURE":return Object(r.a)({},u);case"CLEAR_LOGIN_MESSAGE":return Object(r.a)(Object(r.a)({},e),{},{msg:null});case"SEND_CAPTCHA_SUCCESS":case"SEND_CAPTCHA_FAILURE":return Object(r.a)(Object(r.a)({},u),a);default:return e}},s={key:"root",storage:t.n(c).a},l={lang:"zh",theme:"default"};function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case"CHANGE_LANG":return Object.assign({},e,{lang:r});default:return e}}function m(e){var n=Object(a.c)(Object(r.a)({global:p,user:i},e));return Object(o.a)(s,n)}},151:function(e,n,t){e.exports=t(212)},17:function(e,n,t){"use strict";var r=t(125),a=t.n(r),o=t(0),c=t(86),u=t.n(c),i=(t(160),function(){return Object(o.useEffect)((function(){return u.a.start(),function(){u.a.done()}}),[]),null});n.a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return a()({loader:e,loading:n})}},198:function(e,n,t){},212:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(16),c=t.n(o),u=t(42),i=t(44),s=t(124),l=t(12),p=t(17),m=t(101),f=t(99),d=function(){return a.a.createElement(u.a,null,a.a.createElement(l.d,null,a.a.createElement(l.b,{exact:!0,path:"/login",component:Object(p.a)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(15)]).then(t.bind(null,969))}))}),a.a.createElement(f.a,m.a)))},b=function(){return a.a.createElement(d,null)},h=t(21),O=t(142),g=t(72),j=t(121),y=t(13),v=t.n(y),E=t(11),S=t(24),w=t(8),x={login:function(e){return console.log("loginInfo ----- ",e),new Promise((function(n,t){setTimeout((function(){"account"===e.loginType?"admin"===e.username&&"123456"===e.password?n({id:123,username:"admin"}):t({msg:{type:"error",content:"\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef"}}):"mobile"===e.loginType&&("13112341234"===e.mobile&&"1234"===e.captcha?n({id:123,username:"admin"}):t({msg:{type:"error",content:"\u624b\u673a\u53f7\u7801\u9a8c\u8bc1\u5931\u8d25"}}))}),1e3)}))},getMoreUserInfo:function(e){return new Promise((function(n,t){setTimeout((function(){123===e.id?n(Object(w.a)(Object(w.a)({},e),{},{roles:["admin"]})):t({msg:{type:"error",content:"\u83b7\u53d6\u767b\u5f55\u7528\u6237\u4fe1\u606f\u5931\u8d25"}})}),1e3)}))},logout:function(e){return new Promise((function(e,n){setTimeout((function(){e()}),1e3)}))},sendCaptcha:function(e){return new Promise((function(n,t){setTimeout((function(){"13112341234"===e?n({msg:{type:"success",content:"\u83b7\u53d6\u9a8c\u8bc1\u7801\u6210\u529f\uff01\u9a8c\u8bc1\u7801\u4e3a\uff1a1234"}}):t({msg:{type:"error",content:"\u83b7\u53d6\u9a8c\u8bc1\u7801\u5931\u8d25"}})}),1e3)}))}},k=v.a.mark(_),C=v.a.mark(T),A=v.a.mark(L),U=v.a.mark(I);function _(e){var n,t;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(E.c)({type:S.h});case 2:return r.prev=2,r.next=5,Object(E.b)(x.login,e.payload);case 5:return n=r.sent,r.next=8,Object(E.b)(x.getMoreUserInfo,n);case 8:return t=r.sent,r.next=11,Object(E.c)({type:S.d,payload:{userInfo:t,remember:e.payload.remember,loginType:e.payload.loginType}});case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(2),r.next=17,Object(E.c)({type:S.b,payload:r.t0});case 17:case"end":return r.stop()}}),k,null,[[2,13]])}function T(e){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(E.c)({type:S.h});case 2:return n.prev=2,n.next=5,Object(E.b)(x.logout,e.payload.userInfo);case 5:return n.next=7,Object(E.c)({type:S.g});case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(2),n.next=13,Object(E.c)({type:S.e});case 13:case"end":return n.stop()}}),C,null,[[2,9]])}function L(e){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(E.c)({type:S.h});case 2:return t.prev=2,t.next=5,Object(E.b)(x.sendCaptcha,e.payload);case 5:return n=t.sent,t.next=8,Object(E.c)({type:S.k,payload:n});case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(2),t.next=14,Object(E.c)({type:S.j,payload:t.t0});case 14:case"end":return t.stop()}}),A,null,[[2,10]])}function I(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.d)(S.c,_);case 2:return e.next=4,Object(E.d)(S.f,T);case 4:return e.next=6,Object(E.d)(S.i,L);case 6:case"end":return e.stop()}}),U)}var P=I,G=t(59),R=t(108),N=t(130),D=t.n(N).a.create({});D.interceptors.request.use((function(e){return console.log("---------- do something before request ----------"),e}),(function(e){return console.log("---------- do something by request error ----------"),Promise.reject(e)})),D.interceptors.response.use((function(e){return console.log("---------- do something by response ----------"),e}),(function(e){return console.log("---------- do something by response error ----------"),Promise.reject(e)}));var F=function(e,n){return D.request(Object(w.a)({url:e},n))};function q(e){return H.apply(this,arguments)}function H(){return(H=Object(R.a)(v.a.mark((function e(n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("http://localhost:3001/products",{method:"get"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=v.a.mark(M),z=v.a.mark(B);function M(e){var n,t;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.payload,r.next=3,Object(E.c)({type:G.d});case 3:return r.prev=3,r.next=6,Object(E.b)(q,Object(w.a)(Object(w.a)({},n.queryParams),n.pagination));case 6:return t=r.sent,r.next=9,Object(E.c)({type:G.c,payload:{products:t.data.products,queryParams:n.queryParams||{},pagination:{total:t.data.total,pageSize:n.pagination.pageSize,current:n.pagination.current||1}}});case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(3),r.next=15,Object(E.c)({type:G.a});case 15:case"end":return r.stop()}}),Q,null,[[3,11]])}function B(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.d)(G.b,M);case 2:case"end":return e.stop()}}),z)}var Y=B,J=v.a.mark(W);function W(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)([P(),Y()]);case 2:case"end":return e.stop()}}),J)}var $=Object(O.a)(),K=Object(h.e)(Object(j.a)(),Object(h.a)($));$.run(W),K.injectedReducers={};var V=Object(g.b)(K),X=K;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(198),t(199);var Z=t(36),ee=t(139),ne=t(118),te={zh:ee.a,en:ne.a},re=function(){var e=Object(i.d)((function(e){return e.global}));return a.a.createElement(Z.a,{locale:te[e.lang]},a.a.createElement(b,null))};c.a.render(a.a.createElement(i.a,{store:X},a.a.createElement(s.a,{loading:null,persistor:V},a.a.createElement(u.a,null,a.a.createElement(re,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},24:function(e,n,t){"use strict";t.d(n,"h",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"d",(function(){return o})),t.d(n,"b",(function(){return c})),t.d(n,"f",(function(){return u})),t.d(n,"g",(function(){return i})),t.d(n,"e",(function(){return s})),t.d(n,"i",(function(){return l})),t.d(n,"k",(function(){return p})),t.d(n,"j",(function(){return m})),t.d(n,"a",(function(){return f}));var r="REQUEST",a="LOGIN_SAGA",o="LOGIN_SUCCESS",c="LOGIN_FAILURE",u="LOGOUT_SAGA",i="LOGOUT_SUCCESS",s="LOGOUT_FAILURE",l="SEND_CAPTCHA",p="SEND_CAPTCHA_SUCCESS",m="SEND_CAPTCHA_FAILURE",f="CLEAR_LOGIN_MESSAGE"},59:function(e,n,t){"use strict";t.d(n,"d",(function(){return r})),t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return c}));var r="REQUEST",a="QUERY_PRODUCT_SAGA",o="QUERY_PRODUCT_SUCCESS",c="QUERY_PRODUCT_FAILURE"},99:function(e,n,t){"use strict";var r=t(143),a=t(0),o=t.n(a),c=t(12),u=t(141),i=t(44);function s(){return function(e){return function(n){var t=Object(i.d)((function(e){return e.user})).isLogin;return n.login&&!t?function(){return o.a.createElement(c.a,{to:{pathname:"/login",state:{from:n.location&&n.location.pathname}}})}:e(n)}}}function l(){return function(e){return function(n){var t=Object(i.d)((function(e){return e.user})).userInfo;return n.authority&&Array.isArray(n.authority)&&!n.authority.includes(t.username)?function(){return o.a.createElement(c.a,{to:{pathname:"/403"}})}:e(n)}}}function p(e){return function(n){var t=e.map((function(e){return e(n)}));return m.apply(void 0,Object(u.a)(t))((function(){return function(e){return e.component}(n)}))(n)}}function m(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return 0===n.length?function(e){return e}:1===n.length?n[0]:n.reduce((function(e,n){return function(){return e(n.apply(void 0,arguments))}}))}var f=t(126),d=t(127),b=t(144),h=t(138),O=t(232),g=t(218),j=function(e){Object(b.a)(t,e);var n=Object(h.a)(t);function t(){var e;Object(f.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={hasError:!1},e}return Object(d.a)(t,[{key:"componentDidCatch",value:function(e,n){console.log("---------- catch component render error ----------"),console.log(e),console.log(n)}},{key:"render",value:function(){return this.state.hasError?this.props.errorShow?this.props.errorShow:o.a.createElement(O.a,{status:"error",title:"Uncatch Error",subTitle:"Sorry, something went wrong.",extra:o.a.createElement(g.a,{type:"primary"},"Back Home")}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(o.a.Component);n.a=function(e){e.component;var n,t=Object(r.a)(e,["component"]),a=(n=e,p([l,s])(n));return o.a.createElement(j,null,o.a.createElement(c.b,Object.assign({},t,{render:function(e){return o.a.createElement(a,Object.assign({},e,t))}})))}}},[[151,18,21]]]);
//# sourceMappingURL=main.5a792682.chunk.js.map