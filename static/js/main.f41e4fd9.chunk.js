(this["webpackJsonpartemis-ui-v2"]=this["webpackJsonpartemis-ui-v2"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('[{"id":"175a4cde-056e-48bf-bd44-cd095e6814b5","person":"David Tull","hutName":"Coventry 3","hutNumber":987,"startDate":"2020-10-22T23:28:56.782Z","endDate":"2020-10-31T23:28:56.782Z"},{"id":"175a4cde-056e-48bf-bd44-cd095e6814b5","person":"David Tull","hutName":"Coventry 3","hutNumber":987,"startDate":"2020-10-22T23:28:56.782Z","endDate":"2020-10-31T23:28:56.782Z"},{"id":"175a4cde-056e-48bf-bd44-cd095e6814b5","person":"David Tull","hutName":"Coventry 3","hutNumber":987,"startDate":"2020-10-22T23:28:56.782Z","endDate":"2020-10-31T23:28:56.782Z"},{"id":"175a4cde-056e-48bf-bd44-cd095e6814b5","person":"David Tull","hutName":"Coventry 3","hutNumber":987,"startDate":"2020-10-22T23:28:56.782Z","endDate":"2020-10-31T23:28:56.782Z"}]')},22:function(e,a,t){e.exports=t(34)},27:function(e,a,t){},28:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),o=t.n(r),c=(t(27),t(28),t(18)),u=t(16),m=t.n(u),i=t(21),s=t(10),E=t(12),d=t(6),p=t(7),h=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],r=a[1],o=function(){return r(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{variant:"primary",onClick:function(){return r(!0)},style:{float:"left",marginBottom:10}},"Add Holiday"),l.a.createElement(s.a,{show:t,onHide:o},l.a.createElement(s.a.Header,{closeButton:!0},l.a.createElement(s.a.Title,null,"Add Holiday")),l.a.createElement(s.a.Body,null,l.a.createElement(d.a,null,l.a.createElement(d.a.Row,null,l.a.createElement(d.a.Group,{as:p.a},l.a.createElement(d.a.Label,null,"Person"),l.a.createElement(d.a.Control,{as:"select"},l.a.createElement("option",null,"Choose..."),l.a.createElement("option",null,"David Tull"))),l.a.createElement(d.a.Group,{as:p.a,md:{offset:4}},l.a.createElement(d.a.Label,null,"Hut"),l.a.createElement(d.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"#934 Coventry 3"}))),l.a.createElement(d.a.Row,null,l.a.createElement(d.a.Group,{as:p.a},l.a.createElement(d.a.Label,null,"Start"),l.a.createElement(d.a.Control,{as:"select"},l.a.createElement("option",null,"Choose..."),l.a.createElement("option",null,"David Tull"))),l.a.createElement(d.a.Group,{as:p.a,md:{offset:4}},l.a.createElement(d.a.Label,null,"End"),l.a.createElement(d.a.Control,{as:"select"},l.a.createElement("option",null,"Choose..."),l.a.createElement("option",null,"David Tull")))),l.a.createElement(d.a.Row,null,l.a.createElement(d.a.Group,{as:p.a,xs:2},l.a.createElement(d.a.Label,null,"Period"),l.a.createElement(d.a.Control,{as:"select"},l.a.createElement("option",null),l.a.createElement("option",null,"1"))),l.a.createElement(d.a.Group,{as:p.a,xs:2},l.a.createElement(d.a.Label,null,"Week"),l.a.createElement(d.a.Control,{as:"select"},l.a.createElement("option",null),l.a.createElement("option",null,"1"))),l.a.createElement(d.a.Group,{as:p.a,xs:2,md:{offset:4}},l.a.createElement(d.a.Label,null,"Period"),l.a.createElement(d.a.Control,{as:"select"},l.a.createElement("option",null),l.a.createElement("option",null,"1"))),l.a.createElement(d.a.Group,{as:p.a,xs:2},l.a.createElement(d.a.Label,null,"Week"),l.a.createElement(d.a.Control,{as:"select"},l.a.createElement("option",null),l.a.createElement("option",null,"1")))))),l.a.createElement(s.a.Footer,null,l.a.createElement(E.a,{variant:"secondary",onClick:o},"Close"),l.a.createElement(E.a,{variant:"primary",onClick:o},"Save Changes"))))},b=function(e){return m()(e).format("dddd Do MMMM yyyy")},f=function(e){var a=e.holidays;return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement(c.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Person"),l.a.createElement("th",null,"Hut"),l.a.createElement("th",null,"From"),l.a.createElement("th",null,"To"),l.a.createElement("th",null,"P/W"))),l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.person),l.a.createElement("td",null,"#",e.hutNumber," ",e.hutName),l.a.createElement("td",null,b(e.startDate)),l.a.createElement("td",null,b(e.endDate)),l.a.createElement("td",null,"13/4 - 13/5"))})))))},v=t(19),y=t(11),C=t(20),D=function(){return l.a.createElement(y.a,null,l.a.createElement("h2",null,"Dashboard"),l.a.createElement(C.a,null,l.a.createElement(p.a,null,l.a.createElement(f,{holidays:v}))))};var T=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(y.a,{fluid:!0},l.a.createElement(D,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(33);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.f41e4fd9.chunk.js.map