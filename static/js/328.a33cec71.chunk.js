"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[328],{1328:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a,c,i,o,u=e(9439),s=e(2791),p=e(7689),f=e(4952),h=e(168),x=e(6444),d=x.ZP.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: -15px;\n  text-align: center;\n  min-height: 450px;\n"]))),l=x.ZP.li(a||(a=(0,h.Z)(["\n  width: 200px;\n  height: 350px;\n  margin: 15px;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,\n    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n"]))),v=x.ZP.img(c||(c=(0,h.Z)(["\n  height: 250px;\n  width: 100%;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    transform: scale(1.08);\n    cursor: zoom-in;\n  }\n"]))),m=x.ZP.h4(i||(i=(0,h.Z)(["\n  margin-bottom: 0px;\n  font-size: 17px;\n  font-weight: 600;\n  color: black;\n"]))),g=x.ZP.p(o||(o=(0,h.Z)(["\n  font-size: 15px;\n  color: black;\n"]))),b=e(4060),w=e(184),Z=function(){var n=(0,p.UO)().movieId,t=(0,s.useState)([]),e=(0,u.Z)(t,2),r=e[0],a=e[1];return(0,s.useEffect)((function(){(0,f.IQ)(n).then(a)}),[n]),(0,w.jsx)(w.Fragment,{children:r.length?(0,w.jsx)(d,{children:r.map((function(n){return(0,w.jsxs)(l,{children:[(0,w.jsx)(v,{src:n.profile_path?"https://www.themoviedb.org/t/p/w500/".concat(n.profile_path):b,alt:n.original_name}),(0,w.jsx)(m,{children:n.original_name}),(0,w.jsx)(g,{children:n.character})]},n.id)}))}):(0,w.jsx)("div",{children:" We don't have any cast for this movie."})})}},4952:function(n,t,e){e.d(t,{Hg:function(){return u},IQ:function(){return p},Jh:function(){return f},pm:function(){return h},s_:function(){return s}});var r=e(5861),a=e(7757),c=e.n(a),i=e(1243),o="5f61bbc4be8c630bff5f11f3eb886ee5";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(o,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4060:function(n,t,e){n.exports=e.p+"static/media/no_image.d94858f9ed2950bcb958.jpg"}}]);
//# sourceMappingURL=328.a33cec71.chunk.js.map