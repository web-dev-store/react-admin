(this["webpackJsonpreact-admin"]=this["webpackJsonpreact-admin"]||[]).push([[14],{229:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(101),c=a(272),o=a(967),u=a(973),i=a(974),m=(a(435),o.a.Header),s=function(e){var t=e.type,a=e.logo,n=e.rightContentRender,l=e.menu;return r.a.createElement(m,{className:"layout-header",style:{paddingLeft:"inline"!==t?0:50,backgroundColor:"inner"===t?"#ffffff":"#001529"}},function(e,t){return e&&"inner"!==t?r.a.createElement("div",{className:"layout-header-logo"},e):null}(a,t),e.children,r.a.createElement("div",{className:"layout-header-menu"},l),r.a.createElement("div",{className:"layout-header-right"},n))},d=o.a.Sider,f=function(e){var t=e.type,a=e.collapsed,n=e.logo,l=e.menu,c=e.siderWidth;return r.a.createElement(d,{trigger:null,collapsible:!0,collapsed:a,width:c,theme:"default"===t?"light":"dark"},n&&r.a.createElement("div",{className:"layout-header-logo"},n),r.a.createElement("div",{className:"layout-header-menu"},l))},E=a(12),y=a(99),g=o.a.Content,p=function(e){var t=e.routeConfig;return r.a.createElement(g,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:"unset"}},r.a.createElement(E.d,null,t.routes&&t.routes.map((function(e){return r.a.createElement(y.a,e)}))))},h=a(972),v=(a(614),function(){var e=Object(E.g)().pathname.split("/");return r.a.createElement("div",{className:"layout-content-header"},r.a.createElement(h.a,null,r.a.createElement(h.a.Item,null,"\u9996\u9875"),e.map((function(e,t){return e&&r.a.createElement(h.a.Item,{key:t+e},e)}))))}),C=a(42),N=a(353),b=function(e){var t=Object(E.g)(),a=e.type,n=e.mode,l=e.routes;return r.a.createElement(N.a,{theme:"default"===a?"light":"dark",mode:n,selectedKeys:[t.pathname]},function e(t){return t.map((function(t){var a=t.routes||[];return!!t.menu&&(a.filter((function(e){return e.menu})).length>0?r.a.createElement(N.a.SubMenu,{key:"/".concat(t.key),icon:r.a.createElement(t.icon,null),title:t.name},e(a)):r.a.createElement(N.a.Item,{key:"/".concat(t.key),icon:r.a.createElement(t.icon,null)},r.a.createElement(C.b,{to:t.path},t.name)))}))}(l))},k=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),l=a[0],m=a[1],d=e.type,E=e.logo,y=e.routeConfig,g=e.rightContentRender,h=e.siderWidth;return r.a.createElement(o.a,{id:"layout",className:"layout"},r.a.createElement(s,{type:d,logo:E,rightContentRender:g},r.a.createElement(l?u.a:i.a,{className:"trigger",style:{color:"#ffffff"},onClick:function(){return m(!l)}})),r.a.createElement(o.a,{className:"site-layout"},r.a.createElement(f,{type:d,collapsed:l,menu:r.a.createElement(b,{routes:y.routes,type:d,mode:"inline"}),siderWidth:h}),r.a.createElement(o.a,{className:"site-layout"},r.a.createElement(v,null),r.a.createElement(p,{type:d,routeConfig:y}))))},j=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),l=a[0],m=a[1],d=e.type,E=e.logo,y=e.routeConfig,g=e.rightContentRender,h=e.siderWidth;return r.a.createElement(o.a,{id:"layout",className:"layout"},r.a.createElement(f,{type:d,collapsed:l,menu:r.a.createElement(b,{routes:y.routes,type:d,mode:"inline"}),logo:E,siderWidth:h}),r.a.createElement(o.a,{className:"site-layout"},r.a.createElement(s,{type:d,rightContentRender:g},r.a.createElement(l?u.a:i.a,{className:"trigger",onClick:function(){return m(!l)}})),r.a.createElement(v,null),r.a.createElement(p,{type:d,routeConfig:y})))},O=function(e){var t=e.type,a=e.logo,n=e.routeConfig,l=e.rightContentRender;return r.a.createElement(o.a,{id:"layout",className:"layout"},r.a.createElement(s,{type:t,menu:r.a.createElement(b,{routes:n.routes,type:t,mode:"horizontal"}),logo:a,rightContentRender:l}),r.a.createElement(o.a,{className:"site-layout"},r.a.createElement(v,null),r.a.createElement(p,{type:t,routeConfig:n})))},R=function(e){switch(e.type){case"inner":return r.a.createElement(j,e);case"inline":return r.a.createElement(O,e);case"default":default:return r.a.createElement(k,e)}},w=a(44),H=a(374),W=a(218),I=a(975),S=a(976),z=a(356),G=function(){var e=Object(w.c)(),t=Object(w.d)((function(e){return e.user})),a=r.a.createElement(N.a,{onClick:function(a){"logout"===a.key&&e(Object(z.c)(t))}},r.a.createElement(N.a.Divider,null),r.a.createElement(N.a.Item,{key:"logout",icon:r.a.createElement(I.a,null)},"\u9000\u51fa\u7cfb\u7edf"));return r.a.createElement(H.a,{overlay:a,trigger:["click"]},r.a.createElement(W.a,{type:"link",className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},r.a.createElement(S.a,null)))},x=(a(615),a(375));t.default=function(e){"/"===e.location.pathname&&e.history.push("/welcome");var t=Object(w.c)(),a=Object(w.d)((function(e){return e.global}));return r.a.createElement(R,{type:"inner",routeConfig:l.a,logo:r.a.createElement("div",{className:"logo",style:{width:199}},r.a.createElement("h3",null,"Hello")),rightContentRender:r.a.createElement(r.a.Fragment,null,r.a.createElement(x.default.Group,{defaultValue:a.lang,size:"small",onChange:function(e){return t({type:"CHANGE_LANG",payload:e.target.value})}},r.a.createElement(x.default.Button,{value:"zh"},"ZH"),r.a.createElement(x.default.Button,{value:"en"},"EN")),r.a.createElement("span",{className:"header-settings"},r.a.createElement(G,null)))})}},356:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return l})),a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return o}));var n=a(24),r=function(e){return{type:n.c,payload:e}},l=function(e){return{type:n.f,payload:e}},c=function(){return{type:n.a}},o=function(e){return{type:n.i,payload:e}}},435:function(e,t,a){},614:function(e,t,a){},615:function(e,t,a){}}]);
//# sourceMappingURL=layout.b69566fa.chunk.js.map