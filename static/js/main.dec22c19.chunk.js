(this.webpackJsonptimerhooksonly=this.webpackJsonptimerhooksonly||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),s=n(6),o=n.n(s),a=(n(11),n(2)),i=n(3),l=n.n(i),u=n(0);var m=function(t){var e=t.stopTimer,n=t.startTimer,c=t.onPause,s=t.resetTimer,o=t.pauseTimer,i=Object(r.useState)(0),m=Object(a.a)(i,2),b=m[0],j=m[1],p=Object(r.useState)(!1),O=Object(a.a)(p,2),f=O[0],T=O[1];return Object(u.jsxs)("div",{className:l.a.controllers,children:[c?Object(u.jsx)("button",{className:l.a.btnCntr,onClick:n,children:"start"}):Object(u.jsx)("button",{className:l.a.btnCntr,onClick:e,children:"stop"}),Object(u.jsx)("button",{className:l.a.btnCntr,onClick:s,children:"reset"}),Object(u.jsx)("button",{className:l.a.btnCntr,onClick:function(){j(setTimeout((function(){f&&T(!1)}),300))},onDoubleClick:function(){clearTimeout(b),T(!0),o()},children:"wait"})]})},b=n(5),j=n.n(b);var p=function(t){var e=t.seconds,n=t.startTimer,r=t.stopTimer,c=t.resetTimer,s=t.pauseTimer,o=t.onPause;return Object(u.jsxs)("div",{className:j.a.timerDisplay,children:[Object(u.jsx)(m,{startTimer:n,stopTimer:r,onPause:o,resetTimer:c,pauseTimer:s}),Object(u.jsx)("span",{className:j.a.time,children:function(){var t="0".concat(e%60).slice(-2),n="".concat(Math.floor(e/60)),r="0".concat(n%60).slice(-2),c="".concat(Math.floor(e/3600)),s="0".concat(c%24).slice(-2);return"".concat(s," : ").concat(r," : ").concat(t)}()})]})};var O=function(){var t=Object(r.useState)(0),e=Object(a.a)(t,2),n=e[0],c=e[1],s=Object(r.useState)(!0),o=Object(a.a)(s,2),i=o[0],l=o[1],m=Object(r.useRef)(0);return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(p,{seconds:n,startTimer:function(){l(!1),m.current=setInterval((function(){c((function(t){return t+1}))}),1e3)},stopTimer:function(){l(!0),clearInterval(m.current),c(0)},onPause:i,resetTimer:function(){l(!1),c(0)},pauseTimer:function(){l(!0)}})})};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={controllers:"BtnControllers_controllers__QH52b",btnCntr:"BtnControllers_btnCntr__2-oXO"}},5:function(t,e,n){t.exports={timerDisplay:"TimerDisplay_timerDisplay__1vb2d",time:"TimerDisplay_time__L3KwM"}}},[[13,1,2]]]);
//# sourceMappingURL=main.dec22c19.chunk.js.map