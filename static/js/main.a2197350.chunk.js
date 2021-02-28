(this.webpackJsonpgroendakmonitor=this.webpackJsonpgroendakmonitor||[]).push([[0],{177:function(e,t,c){},178:function(e,t,c){},184:function(e,t,c){},185:function(e,t,c){},186:function(e,t,c){},187:function(e,t,c){},188:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),r=c(61),i=c.n(r),l=c(3),o=c(62),d=c(65),j=function(){var e=localStorage.getItem("customerId");if(e)return parseInt(e)},u=Object(d.a)((function(e,t){return{customerId:j(),waterData:[],setCustomerId:function(t){localStorage.setItem("customerId",t.toString()),e({customerId:t})},fetchWaterData:function(){var c=t().customerId;void 0!==c&&fetch("".concat("https://chatter-somber-scallion.glitch.me","/water/").concat(c)).then((function(e){return e.json()})).then((function(t){e({waterData:t})}))},getTotalIncoming:function(){return t().waterData.reduce((function(e,t){return e+=t.incoming}),0)},getTotalOutgoing:function(){return t().waterData.reduce((function(e,t){return e+=t.outgoing}),0)}}})),b={scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{ticks:{callback:function(e,t,c){return new Date(e).toLocaleTimeString()}}}]},tooltips:{callbacks:{title:function(e){return new Date(e[0].label).toLocaleString()}}},legend:{}},m=function(){var e=u((function(e){return e.waterData})),t=u((function(e){return e.fetchWaterData}));Object(a.useEffect)((function(){var e=setInterval((function(){t()}),2e3);return function(){return clearInterval(e)}}),[t]);var c=Object(a.useMemo)((function(){var t=[],c=[];return e.reduce((function(e,n){return e.labels.push(n.date),t.push(n.incoming),c.push(n.outgoing),e}),{labels:[],datasets:[{label:"Inkomend water",data:t,backgroundColor:"rgb(129, 173, 248)",fill:"start"},{label:"Uitgaand water",data:c,backgroundColor:"rgb(66, 133, 244)",fill:"start"}]})}),[e]);return Object(n.jsx)(n.Fragment,{children:c&&Object(n.jsx)(o.a,{type:"line",data:c,options:b})})};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var c,n,a=function(e,t){if(null==e)return{};var c,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)c=s[n],t.indexOf(c)>=0||(a[c]=e[c]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)c=s[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(a[c]=e[c])}return a}var x=a.createElement("circle",{fill:"none",strokeWidth:4,strokeLinecap:"round",cx:33,cy:33,r:30,className:"circle"});function f(e,t){var c=e.title,n=e.titleId,s=O(e,["title","titleId"]);return a.createElement("svg",h({width:"40px",height:"40px",viewBox:"0 0 66 66",xmlnsName:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},s),c?a.createElement("title",{id:n},c):null,x)}var g=a.forwardRef(f),v=(c.p,c(177),function(e){var t=e.children,c=e.loading;return Object(n.jsxs)("div",{className:"widget",children:[t,c&&Object(n.jsx)("div",{className:"widget-loading",children:Object(n.jsx)(g,{className:"spinner"})})]})}),N=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){return s(!1)}),1e3);return function(){return clearTimeout(e)}}),[]),Object(n.jsxs)(v,{loading:c,children:[Object(n.jsx)("div",{className:"widget-head",children:Object(n.jsx)("span",{className:"title",children:"Waterbalans"})}),Object(n.jsx)("div",{className:"widget-chart-container",children:Object(n.jsx)("div",{id:"main-chart",children:Object(n.jsx)(m,{})})})]})},p=(c(178),function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(a.useEffect)((function(){fetch("".concat("/groendakmonitor","/api/weather-current.json")).then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(e){console.error("Error:",e)}))}),[]),c?Object(n.jsxs)("div",{className:"widget widget-tile be-loading",children:[Object(n.jsx)("div",{className:"widget-head",children:Object(n.jsx)("div",{className:"title",children:null===c||void 0===c?void 0:c.name})}),Object(n.jsxs)("div",{className:"widget-container container-fluid",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-sm-4 text-center",children:[Object(n.jsx)("div",{className:"weather_icon weather_few_clouds"}),Object(n.jsxs)("div",{className:"weather-today",children:["(",c.weather[0].description,")"]})]}),Object(n.jsx)("div",{className:"col-sm-4 d-flex flex-column justify-content-center",children:Object(n.jsxs)("div",{className:"temperature",children:[c.main.temp.toFixed(1),"\xb0"]})}),Object(n.jsxs)("div",{className:"col-sm-4",children:["hum: ",c.main.humidity,"%"]})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-sm-3 text-center",children:[Object(n.jsx)("div",{className:"weather_icon weather_full_sun"}),w(1).toLocaleDateString()]}),Object(n.jsxs)("div",{className:"col-sm-3 text-center",children:[Object(n.jsx)("div",{className:"weather_icon weather_sun_rain_clouds"}),w(2).toLocaleDateString()]}),Object(n.jsxs)("div",{className:"col-sm-3 text-center",children:[Object(n.jsx)("div",{className:"weather_icon weather_thunder"}),w(3).toLocaleDateString()]}),Object(n.jsxs)("div",{className:"col-sm-3 text-center",children:[Object(n.jsx)("div",{className:"weather_icon weather_snow"}),w(4).toLocaleDateString()]})]})]})]}):null}),w=function(e){return new Date((new Date).getTime()+864e5*e)},k=c(40),y=function(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),c=t[0],s=t[1];Object(a.useEffect)((function(){var e=setTimeout((function(){return s(!1)}),1e3);return function(){return clearTimeout(e)}}),[]);var r=u((function(e){return e.getTotalIncoming()})),i=u((function(e){return e.getTotalOutgoing()})),o=Object(a.useMemo)((function(){return i-r}),[r,i]),d=Object(a.useMemo)((function(){return Math.ceil(o/80)}),[o]);return Object(n.jsxs)(v,{loading:c,children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-xs-6",children:[Object(n.jsx)("div",{className:"widget-head",children:Object(n.jsx)("span",{className:"title",children:"Opgevangen water"})}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("h1",{className:"col-xs-6",children:[o.toFixed(1),"L"]}),Object(n.jsx)("h1",{className:"col-xs-6",children:Object(n.jsx)(k.a,{icon:"tint",color:"rgb(66, 133, 244)"})})]})]}),Object(n.jsxs)("div",{className:"col-xs-6",children:[Object(n.jsx)("div",{className:"widget-head",children:Object(n.jsx)("span",{className:"title",children:"Dat zijn"})}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("h1",{className:"col-xs-6",children:d}),Object(n.jsx)("h1",{className:"col-xs-6",children:Object(n.jsx)(k.a,{icon:"bath",color:"rgb(66, 133, 244)"})})]}),Object(n.jsx)("div",{children:"Badkuipen"})]})]}),Object(n.jsx)("div",{className:"widget-head"}),Object(n.jsx)("div",{className:"widget-chart-container"})]})};function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var c,n,a=function(e,t){if(null==e)return{};var c,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)c=s[n],t.indexOf(c)>=0||(a[c]=e[c]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)c=s[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(a[c]=e[c])}return a}var T=a.createElement("path",{d:"M1280 704q0-26-19-45t-45-19q-172 0-318 49.5t-259.5 134T403 1043q-19 21-19 45 0 26 19 45t45 19q24 0 45-19 27-24 74-71t67-66q137-124 268.5-176t313.5-52q26 0 45-19t19-45zm512-198q0 95-20 193-46 224-184.5 383T1230 1350q-214 108-438 108-148 0-286-47-15-5-88-42t-96-37q-16 0-39.5 32t-45 70-52.5 70-60 32q-43 0-63.5-17.5T16 1459q-2-4-6-11t-5.5-10-3-9.5T0 1415q0-35 31-73.5t68-65.5 68-56 31-48q0-4-14-38t-16-44q-9-51-9-104 0-115 43.5-220t119-184.5 170.5-139T696 347q55-18 145-25.5t179.5-9 178.5-6 163.5-24T1476 226l29.5-29.5 29.5-28 27-20 36.5-16 43.5-4.5q39 0 70.5 46t47.5 112 24 124 8 96z"});function L(e,t){var c=e.title,n=e.titleId,s=S(e,["title","titleId"]);return a.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",id:"leaf",viewBox:"0 0 1792 1896.0833",ref:t,"aria-labelledby":n},s),c?a.createElement("title",{id:n},c):null,T)}var C=a.forwardRef(L),D=(c.p,function(){var e=u((function(e){return e.getTotalIncoming()})),t=u((function(e){return e.getTotalOutgoing()})),c=Object(a.useMemo)((function(){return e/t*100}),[e,t]);return Object(n.jsxs)(v,{loading:isNaN(c),children:[Object(n.jsx)("div",{className:"widget-head",children:Object(n.jsx)("span",{className:"title",children:"Verzadiging"})}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("h1",{className:"col-xs-6",children:Object(n.jsx)(C,{})}),Object(n.jsx)("h1",{className:"col-xs-6",children:isNaN(c)?"":"".concat(c.toFixed(1),"%")})]}),Object(n.jsx)("div",{className:"widget-head"}),Object(n.jsx)("div",{className:"widget-chart-container"})]})}),q=function(){return localStorage.getItem("token")},_=function(e){var t=e.data,c=e.selected,a=e.onClick,s=t.last_water?new Date(t.last_water).toLocaleString():"-";return Object(n.jsxs)("tr",{onClick:function(){return a(t)},className:c?"selected":"",children:[Object(n.jsx)("td",{children:Object(n.jsxs)("span",{className:"d-block badge badge-info",children:["ID: ",t.id]})}),Object(n.jsx)("td",{children:t.name}),Object(n.jsx)("td",{children:s})]})},E=(c(184),function(e){var t=e.data,c=e.onLogout,a=u((function(e){return e.setCustomerId})),s=u((function(e){return e.customerId}));return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("table",{className:"table table-striped table-hover customer-list",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",style:{width:32},children:"#"}),Object(n.jsx)("th",{scope:"col",children:"Name"}),Object(n.jsx)("th",{scope:"col",children:"Last data"})]})}),Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsx)(_,{data:e,onClick:function(){return a(e.id)},selected:s===e.id},e.id)}))})]}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("button",{className:"w-100 btn btn-success",onClick:c,children:"Logout"})})]})}),P=c.p+"static/media/groendak.8ad2a181.jpg",F=function(e){var t=e.onLogin,c=Object(a.useState)("safehouse ominous overdrive"),s=Object(l.a)(c,2),r=s[0],i=s[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{className:"text-center",children:"Log in to groendakmonitor"}),Object(n.jsx)("form",{children:Object(n.jsx)("div",{className:"mt-5",children:Object(n.jsx)("div",{className:"form-group",children:Object(n.jsxs)("label",{className:"form-label text-start w-100",children:["Password",Object(n.jsx)("input",{type:"password",className:"form-control mt-2",onChange:function(e){i(e.currentTarget.value)},value:r})]})})})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("button",{className:"w-100 btn btn-success",onClick:function(){fetch("".concat("https://chatter-somber-scallion.glitch.me","/login"),{method:"post",headers:[["Content-Type","application/json"]],body:JSON.stringify({password:r})}).then((function(e){401===e.status?console.warn("WRONG PW"):e.text().then((function(e){var c;t(),c=e,localStorage.setItem("token",c)}))}))},children:"Login"})}),Object(n.jsx)("img",{src:P,alt:"dak",className:"card-img-top"})]})},M=function(e){var t=e.onClose,c=Object(a.useState)(!!q()),s=Object(l.a)(c,2),r=s[0],i=s[1],o=Object(a.useState)(),d=Object(l.a)(o,2),j=d[0],u=d[1];return Object(a.useEffect)((function(){r&&q()&&fetch("".concat("https://chatter-somber-scallion.glitch.me","/customers"),{method:"get",headers:[["Content-Type","application/json"],["x-auth-token",q()]]}).then((function(e){return e.json()})).then((function(e){u(e)}))}),[r]),Object(n.jsx)("div",{className:"modal fade show d-block",role:"dialog","aria-hidden":"true",children:Object(n.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsxs)("div",{className:"modal-header",children:[Object(n.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Admin"}),Object(n.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:t,children:Object(n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(n.jsxs)("div",{className:"modal-body",children:[!r&&Object(n.jsx)(F,{onLogin:function(){return i(!0)}}),r&&j&&Object(n.jsx)(E,{data:j,onLogout:function(){localStorage.removeItem("token"),i(!1),t()}})]})]})})})},W=c(66),B=(c(185),function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(W.a)(["~"],(function(e){s((function(e){return!e}))})),Object(n.jsxs)("div",{className:"app d-flex pb-4 align-items-center",children:[Object(n.jsxs)("div",{className:"main-content container-fluid d-flex flex-column px-4",children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-xs-12 col-md-6 col-lg-3",children:Object(n.jsx)(y,{})}),Object(n.jsx)("div",{className:"col-xs-12 col-md-6 col-lg-3",children:Object(n.jsxs)("div",{className:"widget widget-tile",children:[Object(n.jsx)("div",{id:"spark2",className:"chart sparkline"}),Object(n.jsxs)("div",{className:"data-info",children:[Object(n.jsx)("div",{className:"desc"}),Object(n.jsxs)("div",{className:"value",children:[Object(n.jsx)("span",{className:"indicator indicator-positive mdi mdi-chevron-up"}),Object(n.jsx)("span",{"data-toggle":"counter","data-end":80,"data-suffix":"%",className:"number",children:"0"})]})]})]})}),Object(n.jsx)("div",{className:"col-xs-12 col-md-6 col-lg-3",children:Object(n.jsxs)("div",{className:"widget widget-tile",children:[Object(n.jsx)("div",{id:"spark3",className:"chart sparkline"}),Object(n.jsxs)("div",{className:"data-info",children:[Object(n.jsx)("div",{className:"desc",children:"Impressions"}),Object(n.jsxs)("div",{className:"value",children:[Object(n.jsx)("span",{className:"indicator indicator-positive mdi mdi-chevron-up"}),Object(n.jsx)("span",{"data-toggle":"counter","data-end":532,className:"number",children:"0"})]})]})]})}),Object(n.jsx)("div",{className:"col-xs-12 col-md-6 col-lg-3",children:Object(n.jsx)(D,{})})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-8",children:Object(n.jsx)(N,{})}),Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsx)(p,{})})]})]}),c&&Object(n.jsx)(M,{onClose:function(){return s(!1)}})]})}),z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,189)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};c(186),c(187);i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root")),z()}},[[188,1,2]]]);
//# sourceMappingURL=main.a2197350.chunk.js.map