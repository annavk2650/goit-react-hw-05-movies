"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[402,969],{2402:function(t,e,n){n.r(e),n.d(e,{default:function(){return gt}});var r=n(9439),o=n(2791),a=n(1087),i=n(7689);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var f=n(3433);function d(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=d(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}var p=function(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=d(t))&&(r&&(r+=" "),r+=e);return r},m=["theme","type"],v=["delay","staleId"],g=function(t){return"number"==typeof t&&!isNaN(t)},h=function(t){return"string"==typeof t},y=function(t){return"function"==typeof t},b=function(t){return h(t)||y(t)?t:null},x=function(t){return(0,o.isValidElement)(t)||h(t)||y(t)||g(t)};function E(t){var e=t.enter,n=t.exit,r=t.appendPosition,a=void 0!==r&&r,i=t.collapse,s=void 0===i||i,c=t.collapseDuration,u=void 0===c?300:c;return function(t){var r=t.children,i=t.position,c=t.preventExitTransition,l=t.done,d=t.nodeRef,p=t.isIn,m=a?"".concat(e,"--").concat(i):e,v=a?"".concat(n,"--").concat(i):n,g=(0,o.useRef)(0);return(0,o.useLayoutEffect)((function(){var t,e=d.current,n=m.split(" "),r=function t(r){var o;r.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",t),e.removeEventListener("animationcancel",t),0===g.current&&"animationcancel"!==r.type&&(o=e.classList).remove.apply(o,(0,f.Z)(n)))};(t=e.classList).add.apply(t,(0,f.Z)(n)),e.addEventListener("animationend",r),e.addEventListener("animationcancel",r)}),[]),(0,o.useEffect)((function(){var t=d.current,e=function e(){t.removeEventListener("animationend",e),s?function(t,e,n){void 0===n&&(n=300);var r=t.scrollHeight,o=t.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(e,n)}))}))}(t,l,u):l()};p||(c?e():(g.current=1,t.className+=" ".concat(v),t.addEventListener("animationend",e)))}),[p]),o.createElement(o.Fragment,null,r)}}function T(t,e){return{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}}var _={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var e=arguments,n=this;this.list.has(t)&&this.list.get(t).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,f.Z)([].slice.call(e,1)))}),0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(o)}))}},O=function(t){var e=t.theme,n=t.type,r=l(t,m);return o.createElement("svg",u({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},w={info:function(t){return o.createElement(O,u({},t),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return o.createElement(O,u({},t),o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return o.createElement(O,u({},t),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return o.createElement(O,u({},t),o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function C(t){var e=(0,o.useReducer)((function(t){return t+1}),0),n=(0,r.Z)(e,2)[1],a=(0,o.useState)([]),i=(0,r.Z)(a,2),s=i[0],c=i[1],d=(0,o.useRef)(null),p=(0,o.useRef)(new Map).current,m=function(t){return-1!==s.indexOf(t)},E=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:m,getToast:function(t){return p.get(t)}}).current;function O(t){var e=t.containerId;!E.props.limit||e&&E.containerId!==e||(E.count-=E.queue.length,E.queue=[])}function C(t){c((function(e){return null==t?[]:e.filter((function(e){return e!==t}))}))}function I(){var t=E.queue.shift();P(t.toastContent,t.toastProps,t.staleId)}function L(t,e){var r=e.delay,a=e.staleId,i=l(e,v);if(x(t)&&!function(t){return!d.current||E.props.enableMultiContainer&&t.containerId!==E.props.containerId||p.has(t.toastId)&&null==t.updateId}(i)){var s=i.toastId,c=i.updateId,f=i.data,m=E.props,O=function(){return C(s)},L=null==c;L&&E.count++;var k,Z,N=u(u(u({},m),{},{style:m.toastStyle,key:E.toastKey++},i),{},{toastId:s,updateId:c,data:f,closeToast:O,isIn:!1,className:b(i.className||m.toastClassName),bodyClassName:b(i.bodyClassName||m.bodyClassName),progressClassName:b(i.progressClassName||m.progressClassName),autoClose:!i.isLoading&&(k=i.autoClose,Z=m.autoClose,!1===k||g(k)&&k>0?k:Z),deleteToast:function(){var t=T(p.get(s),"removed");p.delete(s),_.emit(4,t);var e=E.queue.length;if(E.count=null==s?E.count-E.displayedToast:E.count-1,E.count<0&&(E.count=0),e>0){var r=null==s?E.props.limit:1;if(1===e||1===r)E.displayedToast++,I();else{var o=r>e?e:r;E.displayedToast=o;for(var a=0;a<o;a++)I()}}else n()}});N.iconOut=function(t){var e=t.theme,n=t.type,r=t.isLoading,a=t.icon,i=null,s={theme:e,type:n};return!1===a||(y(a)?i=a(s):(0,o.isValidElement)(a)?i=(0,o.cloneElement)(a,s):h(a)||g(a)?i=a:r?i=w.spinner():function(t){return t in w}(n)&&(i=w[n](s))),i}(N),y(i.onOpen)&&(N.onOpen=i.onOpen),y(i.onClose)&&(N.onClose=i.onClose),N.closeButton=m.closeButton,!1===i.closeButton||x(i.closeButton)?N.closeButton=i.closeButton:!0===i.closeButton&&(N.closeButton=!x(m.closeButton)||m.closeButton);var R=t;(0,o.isValidElement)(t)&&!h(t.type)?R=(0,o.cloneElement)(t,{closeToast:O,toastProps:N,data:f}):y(t)&&(R=t({closeToast:O,toastProps:N,data:f})),m.limit&&m.limit>0&&E.count>m.limit&&L?E.queue.push({toastContent:R,toastProps:N,staleId:a}):g(r)?setTimeout((function(){P(R,N,a)}),r):P(R,N,a)}}function P(t,e,n){var r=e.toastId;n&&p.delete(n);var o={content:t,props:e};p.set(r,o),c((function(t){return[].concat((0,f.Z)(t),[r]).filter((function(t){return t!==n}))})),_.emit(4,T(o,null==o.props.updateId?"added":"updated"))}return(0,o.useEffect)((function(){return E.containerId=t.containerId,_.cancelEmit(3).on(0,L).on(1,(function(t){return d.current&&C(t)})).on(5,O).emit(2,E),function(){p.clear(),_.emit(3,E)}}),[]),(0,o.useEffect)((function(){E.props=t,E.isToastActive=m,E.displayedToast=s.length})),{getToastToRender:function(e){var n=new Map,r=Array.from(p.values());return t.newestOnTop&&r.reverse(),r.forEach((function(t){var e=t.props.position;n.has(e)||n.set(e,[]),n.get(e).push(t)})),Array.from(n,(function(t){return e(t[0],t[1])}))},containerRef:d,isToastActive:m}}function I(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function L(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function P(t){var e=(0,o.useState)(!1),n=(0,r.Z)(e,2),a=n[0],i=n[1],s=(0,o.useState)(!1),c=(0,r.Z)(s,2),u=c[0],l=c[1],f=(0,o.useRef)(null),d=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,o.useRef)(t),m=t.autoClose,v=t.pauseOnHover,g=t.closeToast,h=t.onClick,b=t.closeOnClick;function x(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",O),document.addEventListener("mouseup",w),document.addEventListener("touchmove",O),document.addEventListener("touchend",w);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=I(e.nativeEvent),d.y=L(e.nativeEvent),"x"===t.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function E(e){if(d.boundingRect){var n=d.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=r&&d.y<=o?_():T()}}function T(){i(!0)}function _(){i(!1)}function O(e){var n=f.current;d.canDrag&&n&&(d.didMove=!0,a&&_(),d.x=I(e),d.y=L(e),d.delta="x"===t.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(t.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function w(){document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",w);var e=f.current;if(d.canDrag&&d.didMove&&e){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(t.draggableDirection,"(0)"),e.style.opacity="1"}}(0,o.useEffect)((function(){p.current=t})),(0,o.useEffect)((function(){return f.current&&f.current.addEventListener("d",T,{once:!0}),y(t.onOpen)&&t.onOpen((0,o.isValidElement)(t.children)&&t.children.props),function(){var t=p.current;y(t.onClose)&&t.onClose((0,o.isValidElement)(t.children)&&t.children.props)}}),[]),(0,o.useEffect)((function(){return t.pauseOnFocusLoss&&(document.hasFocus()||_(),window.addEventListener("focus",T),window.addEventListener("blur",_)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",T),window.removeEventListener("blur",_))}}),[t.pauseOnFocusLoss]);var C={onMouseDown:x,onTouchStart:x,onMouseUp:E,onTouchEnd:E};return m&&v&&(C.onMouseEnter=_,C.onMouseLeave=T),b&&(C.onClick=function(t){h&&h(t),d.canCloseOnClick&&g()}),{playToast:T,pauseToast:_,isRunning:a,preventExitTransition:u,toastRef:f,eventHandlers:C}}function k(t){var e=t.closeToast,n=t.theme,r=t.ariaLabel,a=void 0===r?"close":r;return o.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":a},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Z(t){var e=t.delay,n=t.isRunning,r=t.closeToast,a=t.type,i=void 0===a?"default":a,c=t.hide,l=t.className,f=t.style,d=t.controlledProgress,m=t.progress,v=t.rtl,g=t.isIn,h=t.theme,b=c||d&&0===m,x=u(u({},f),{},{animationDuration:"".concat(e,"ms"),animationPlayState:n?"running":"paused",opacity:b?0:1});d&&(x.transform="scaleX(".concat(m,")"));var E=p("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":v}),T=y(l)?l({rtl:v,type:i,defaultClassName:E}):p(E,l);return o.createElement("div",s({role:"progressbar","aria-hidden":b?"true":"false","aria-label":"notification timer",className:T,style:x},d&&m>=1?"onTransitionEnd":"onAnimationEnd",d&&m<1?null:function(){g&&r()}))}var N=function(t){var e=P(t),n=e.isRunning,r=e.preventExitTransition,a=e.toastRef,i=e.eventHandlers,s=t.closeButton,c=t.children,l=t.autoClose,f=t.onClick,d=t.type,m=t.hideProgressBar,v=t.closeToast,g=t.transition,h=t.position,b=t.className,x=t.style,E=t.bodyClassName,T=t.bodyStyle,_=t.progressClassName,O=t.progressStyle,w=t.updateId,C=t.role,I=t.progress,L=t.rtl,N=t.toastId,R=t.deleteToast,j=t.isIn,M=t.isLoading,D=t.iconOut,B=t.closeOnClick,A=t.theme,S=p("Toastify__toast","Toastify__toast-theme--".concat(A),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":B}),z=y(b)?b({rtl:L,position:h,type:d,defaultClassName:S}):p(S,b),F=!!I||!l,H={closeToast:v,type:d,theme:A},q=null;return!1===s||(q=y(s)?s(H):(0,o.isValidElement)(s)?(0,o.cloneElement)(s,H):k(H)),o.createElement(g,{isIn:j,done:R,position:h,preventExitTransition:r,nodeRef:a},o.createElement("div",u(u({id:N,onClick:f,className:z},i),{},{style:x,ref:a}),o.createElement("div",u(u({},j&&{role:C}),{},{className:y(E)?E({type:d}):p("Toastify__toast-body",E),style:T}),null!=D&&o.createElement("div",{className:p("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},D),o.createElement("div",null,c)),q,o.createElement(Z,u(u({},w&&!F?{key:"pb-".concat(w)}:{}),{},{rtl:L,theme:A,delay:l,isRunning:n,isIn:j,closeToast:v,hide:m,type:d,style:O,className:_,controlledProgress:F,progress:I||0}))))},R=function(t,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:e}},j=E(R("bounce",!0)),M=(E(R("slide",!0)),E(R("zoom")),E(R("flip")),(0,o.forwardRef)((function(t,e){var n=C(t),r=n.getToastToRender,a=n.containerRef,i=n.isToastActive,s=t.className,c=t.style,l=t.rtl,f=t.containerId;function d(t){var e=p("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":l});return y(s)?s({position:t,rtl:l,defaultClassName:e}):p(e,b(s))}return(0,o.useEffect)((function(){e&&(e.current=a.current)}),[]),o.createElement("div",{ref:a,className:"Toastify",id:f},r((function(t,e){var n=e.length?u({},c):u(u({},c),{},{pointerEvents:"none"});return o.createElement("div",{className:d(t),style:n,key:"container-".concat(t)},e.map((function(t,n){var r=t.content,a=t.props;return o.createElement(N,u(u({},a),{},{isIn:i(a.toastId),style:u(u({},a.style),{},{"--nth":n+1,"--len":e.length}),key:"toast-".concat(a.key)}),r)})))})))})));M.displayName="ToastContainer",M.defaultProps={position:"top-right",transition:j,autoClose:5e3,closeButton:k,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var D,B=new Map,A=[],S=1;function z(){return""+S++}function F(t){return t&&(h(t.toastId)||g(t.toastId))?t.toastId:z()}function H(t,e){return B.size>0?_.emit(0,t,e):A.push({content:t,options:e}),e.toastId}function q(t,e){return u(u({},e),{},{type:e&&e.type||t,toastId:F(e)})}function Q(t){return function(e,n){return H(e,q(t,n))}}function V(t,e){return H(t,q("default",e))}V.loading=function(t,e){return H(t,q("default",u({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},V.promise=function(t,e,n){var r,o=e.pending,a=e.error,i=e.success;o&&(r=h(o)?V.loading(o,n):V.loading(o.render,u(u({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(t,e,o){if(null!=e){var a=u(u(u({type:t},s),n),{},{data:o}),i=h(e)?{render:e}:e;return r?V.update(r,u(u({},a),i)):V(i.render,u(u({},a),i)),o}V.dismiss(r)},l=y(t)?t():t;return l.then((function(t){return c("success",i,t)})).catch((function(t){return c("error",a,t)})),l},V.success=Q("success"),V.info=Q("info"),V.error=Q("error"),V.warning=Q("warning"),V.warn=V.warning,V.dark=function(t,e){return H(t,q("default",u({theme:"dark"},e)))},V.dismiss=function(t){B.size>0?_.emit(1,t):A=A.filter((function(e){return null!=t&&e.options.toastId!==t}))},V.clearWaitingQueue=function(t){return void 0===t&&(t={}),_.emit(5,t)},V.isActive=function(t){var e=!1;return B.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},V.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,r=B.get(n||D);return r&&r.getToast(t)}(t,e);if(n){var r=n.props,o=n.content,a=u(u(u({},r),e),{},{toastId:e.toastId||t,updateId:z()});a.toastId!==t&&(a.staleId=t);var i=a.render||o;delete a.render,H(i,a)}}),0)},V.done=function(t){V.update(t,{progress:1})},V.onChange=function(t){return _.on(4,t),function(){_.off(4,t)}},V.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},V.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},_.on(2,(function(t){D=t.containerId||t,B.set(D,t),A.forEach((function(t){_.emit(0,t.content,t.options)})),A=[]})).on(3,(function(t){B.delete(t.containerId||t),0===B.size&&_.off(0).off(1).off(5)}));var U,G,W,X,Y,K,J,$,tt,et=n(4952),nt=n(168),rt=n(6444),ot=rt.ZP.form(U||(U=(0,nt.Z)(["\n  margin: 30px auto 20px;\n  text-align: center;\n"]))),at=rt.ZP.div(G||(G=(0,nt.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: baseline;\n"]))),it=rt.ZP.input(W||(W=(0,nt.Z)(["\n  padding: 8px 20px;\n  border-radius: 8px;\n  outline: #527c82;\n  border-color: transparent;\n"]))),st=rt.ZP.button(X||(X=(0,nt.Z)(["\n  margin: 0px 10px 10px;\n  padding: 10px 20px 10px;\n  background-color: transparent;\n  border: 2px solid #e74c3c;\n  cursor: pointer;\n  font-size: 0.95em;\n  font-weight: 600;\n  line-height: 1;\n  text-decoration: none;\n  text-align: center;\n  text-transform: uppercase;\n  cursor: pointer;\n  background-color: #527c82;\n  border-color: #527c82;\n  border-radius: 8px;\n  color: #fff;\n  box-shadow: inset rgba(0, 0, 0, 0.541) -3px -3px 8px, inset rgba(255, 253, 253, 0.9) 3px 3px 8px,\n    rgba(0, 0, 0, 0.8) 3px 3px 8px -3px;\n  transition: all 150ms ease-in-out;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.356);\n    color: #fff;\n    box-shadow: 0 0 10px 0 #527c82 inset, 0 0 10px 4px #527c82;\n    outline: 0;\n  }\n  &:focus {\n    outline: 0;\n  }\n"]))),ct=rt.ZP.ul(Y||(Y=(0,nt.Z)(["\n  display: grid;\n  max-width: calc(100vw - 35px);\n  margin: 10px auto 0px;\n  padding: 0px 30px 0px;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: 16px;\n  list-style: none;\n"]))),ut=rt.ZP.li(K||(K=(0,nt.Z)(["\n  border-radius: 5px;\n  box-shadow: inset rgba(0, 0, 0, 0.5) -3px -3px 8px, inset rgba(255, 255, 255, 0.9) 3px 3px 8px,\n    rgba(90, 87, 87, 0.8) 3px 3px 8px -3px;\n  overflow: hidden;\n"]))),lt=rt.ZP.p(J||(J=(0,nt.Z)(["\n  text-align: center;\n  font-style: italic;\n  color: black;\n"]))),ft=rt.ZP.img($||($=(0,nt.Z)(["\n  width: 100%;\n  min-height: 410px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: pointer;\n  }\n"]))),dt=(0,rt.ZP)(a.OL)(tt||(tt=(0,nt.Z)(["\n  text-decoration: none;\n"]))),pt=n(4060),mt=n(969),vt=n(184),gt=function(){var t=(0,o.useState)([]),e=(0,r.Z)(t,2),n=e[0],s=e[1],c=(0,o.useState)(""),u=(0,r.Z)(c,2),l=u[0],f=u[1],d=(0,a.lr)(),p=(0,r.Z)(d,2),m=p[0],v=p[1],g=m.get("query")||"",h=(0,i.TH)();return(0,o.useEffect)((function(){g&&(0,et.pm)(g).then(s)}),[g]),(0,vt.jsxs)(ot,{onSubmit:function(t){if(t.preventDefault(),v({query:l}),!l)return V.info("Type something to find");f("")},children:[(0,vt.jsxs)(at,{children:[(0,vt.jsx)(it,{type:"text",value:l,autoComplete:"off",autoFocus:!0,placeholder:"Enter movie name...",onChange:function(t){var e=t.currentTarget.value;f(e)}}),(0,vt.jsx)(M,{}),(0,vt.jsx)(st,{type:"submit",children:"Search"})]}),n.length?(0,vt.jsx)(ct,{children:n.map((function(t){return(0,vt.jsx)(ut,{children:(0,vt.jsxs)(dt,{to:"/movies/".concat(t.id),state:{from:h},children:[(0,vt.jsx)(ft,{src:t.poster_path?"https://image.tmdb.org/t/p/w500/".concat(t.poster_path):pt,alt:"",width:"320"}),(0,vt.jsx)(lt,{children:t.title})]})},t.id)}))}):g&&(0,vt.jsx)(mt.default,{})]})}},969:function(t,e,n){n.r(e),n.d(e,{NotFound:function(){return c},default:function(){return u}});n(2791);var r,o=n(4772),a=n(168),i=n(6444).ZP.div(r||(r=(0,a.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n"]))),s=n(184),c=function(){return(0,s.jsx)(i,{children:(0,s.jsx)("img",{src:o,width:"450",alt:"error"})})},u=c},4952:function(t,e,n){n.d(e,{Hg:function(){return c},IQ:function(){return l},Jh:function(){return f},pm:function(){return d},s_:function(){return u}});var r=n(5861),o=n(7757),a=n.n(o),i=n(1243),s="5f61bbc4be8c630bff5f11f3eb886ee5";i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var t=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("search/movie?api_key=".concat(s,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},4772:function(t,e,n){t.exports=n.p+"static/media/no_found.98bc826327ced82ba54b.png"},4060:function(t,e,n){t.exports=n.p+"static/media/no_image.d94858f9ed2950bcb958.jpg"}}]);
//# sourceMappingURL=402.4f219a7a.chunk.js.map