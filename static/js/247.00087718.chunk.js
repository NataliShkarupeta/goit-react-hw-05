"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(t,n,e){e.r(n);var c=e(439),r=e(422),o=e(689),a=e(791),i=e(184);n.default=function(){var t=(0,o.UO)().movieId,n=(0,a.useState)([]),e=(0,c.Z)(n,2),u=e[0],f=e[1];return(0,a.useEffect)((function(){(0,r.v4)(t).then((function(t){return t.ok?t.json():Promise.reject(new Error("Sorry no image"))})).then((function(t){return f(t.cast)})).catch((function(t){return console.log(t)}))}),[t]),u?u.map((function(t){var n=t.character,e=t.original_name,c=t.profile_path,r=t.id;return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(c),alt:e}),(0,i.jsx)("p",{children:e}),(0,i.jsxs)("p",{children:["Character:",n]})]},r)})):null}},422:function(t,n,e){e.d(n,{a8:function(){return o},gR:function(){return a},nd:function(){return f},uL:function(){return i},v4:function(){return u}});var c="1bff0abb40f6fadb07212f8cd9949625",r="https://api.themoviedb.org/3",o=function(){return fetch("".concat(r,"/trending/all/day?api_key=").concat(c))},a=function(t){return fetch("".concat(r,"/movie/").concat(t,"?api_key=").concat(c))},i=function(t){return fetch("".concat(r,"/movie/").concat(t,"/reviews?api_key=").concat(c))},u=function(t){return fetch("".concat(r,"/movie/").concat(t,"/credits?api_key=").concat(c))},f=function(t){return fetch("https://api.themoviedb.org/3/search/movie/?api_key=".concat(c,"&query=").concat(t))}}}]);
//# sourceMappingURL=247.00087718.chunk.js.map