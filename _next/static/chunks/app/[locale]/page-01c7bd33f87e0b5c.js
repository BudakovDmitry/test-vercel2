(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61],{4813:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.r(t),n.d(t,{default:function(){return l}});var a=n(2265),o=n(923);function l(e){let{locale:t,...n}=e;if(!t)throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl-docs.vercel.app/docs/configuration#locale");return a.createElement(o.P,r({locale:t},n))}},5101:function(e,t,n){Promise.resolve().then(n.bind(n,4813))},3098:function(e,t,n){"use strict";var r=n(2265).createContext(void 0);t.IntlContext=r},923:function(e,t,n){"use strict";var r=n(2265),a=n(1616),o=n(3098),l=r&&r.__esModule?r:{default:r};t.P=function(e){let{children:t,defaultTranslationValues:n,formats:i,getMessageFallback:s,locale:c,messages:u,now:f,onError:g,timeZone:d}=e,[p]=r.useState(()=>new Map),m=r.useMemo(()=>({...a.initializeConfig({locale:c,defaultTranslationValues:n,formats:i,getMessageFallback:s,messages:u,now:f,onError:g,timeZone:d}),messageFormatCache:p}),[n,i,s,c,p,u,f,g,d]);return l.default.createElement(o.IntlContext.Provider,{value:m},t)}},1616:function(e,t){"use strict";function n(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(".")}function r(e){return n(e.namespace,e.key)}function a(e){console.error(e)}t.defaultGetMessageFallback=r,t.defaultOnError=a,t.initializeConfig=function(e){let{getMessageFallback:t,messages:n,onError:o,...l}=e;return{...l,messages:n,onError:o||a,getMessageFallback:t||r}},t.joinPath=n}},function(e){e.O(0,[971,938,744],function(){return e(e.s=5101)}),_N_E=e.O()}]);