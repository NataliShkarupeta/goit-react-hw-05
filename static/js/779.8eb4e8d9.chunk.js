"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{779:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var c,r=e(439),o=e(791),i=e(422),u=e(689),a=e(168),f=e(444).ZP.li(c||(c=(0,a.Z)(["\nlist-style:none;\n"]))),s=e(184),h=function(){var n=(0,u.UO)().movieId,t=(0,o.useState)([]),e=(0,r.Z)(t,2),c=e[0],a=e[1];return(0,o.useEffect)((function(){(0,i.uL)(n).then((function(n){return n.ok?n.json():Promise.reject(new Error("Sorry no image"))})).then((function(n){return a(n.results)})).catch((function(n){return console.log(n)}))}),[n]),(0,s.jsxs)(s.Fragment,{children:[0===c.length&&(0,s.jsx)("p",{children:"We don`t have any reviews for this movie"}),c.map((function(n){var t=n.id,e=n.author,c=n.content;return(0,s.jsxs)(f,{children:[(0,s.jsx)("h4",{children:e}),(0,s.jsx)("p",{children:c})]},t)}))]})}},422:function(n,t,e){e.d(t,{a8:function(){return o},gR:function(){return i},nd:function(){return f},uL:function(){return u},v4:function(){return a}});var c="1bff0abb40f6fadb07212f8cd9949625",r="https://api.themoviedb.org/3",o=function(){return fetch("".concat(r,"/trending/all/day?api_key=").concat(c))},i=function(n){return fetch("".concat(r,"/movie/").concat(n,"?api_key=").concat(c))},u=function(n){return fetch("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(c))},a=function(n){return fetch("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(c))},f=function(n){return fetch("".concat(r,"/search/movie?api_key=").concat(c,"&query=").concat(n))}}}]);
//# sourceMappingURL=779.8eb4e8d9.chunk.js.map