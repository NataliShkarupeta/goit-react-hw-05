"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{544:function(n,t,e){e.r(t);var c=e(439),r=e(791),o=e(689),i=e(87),a=e(422),u=e(77),f=e(184);t.default=function(){var n=(0,r.useState)([]),t=(0,c.Z)(n,2),e=t[0],s=t[1],d=(0,o.TH)();if((0,r.useEffect)((function(){(0,a.a8)().then((function(n){return n.ok?n.json():Promise.reject(new Error("Sorry no info"))})).then((function(n){return s(n.results)})).catch((function(n){return console.log(n)}))}),[]),e)return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(u.x,{children:[(0,f.jsx)(u.H2,{children:"Trending Today"}),e.map((function(n){return(0,f.jsx)("li",{children:(0,f.jsx)(i.rU,{to:"/movies/".concat(n.id),state:{from:d},children:n.title||n.name})},n.id)}))]}),(0,f.jsx)(r.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(o.j3,{})})]})}},77:function(n,t,e){e.d(t,{H2:function(){return u},x:function(){return a}});var c,r,o=e(168),i=e(444),a=i.ZP.div(c||(c=(0,o.Z)(["\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n  padding: 20px;\n"]))),u=i.ZP.h2(r||(r=(0,o.Z)(["\n  margin: 0;\n  font-weight: 500;\n  font-size: 30px;\n"])))},422:function(n,t,e){e.d(t,{a8:function(){return o},gR:function(){return i},nd:function(){return f},uL:function(){return a},v4:function(){return u}});var c="1bff0abb40f6fadb07212f8cd9949625",r="https://api.themoviedb.org/3",o=function(){return fetch("".concat(r,"/trending/all/day?api_key=").concat(c))},i=function(n){return fetch("".concat(r,"/movie/").concat(n,"?api_key=").concat(c))},a=function(n){return fetch("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(c))},u=function(n){return fetch("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(c))},f=function(n){return fetch("https://api.themoviedb.org/3/search/movie/?api_key=".concat(c,"&query=").concat(n))}}}]);
//# sourceMappingURL=544.805e3464.chunk.js.map