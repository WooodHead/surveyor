webpackJsonp([0,4],{268:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function a(e){return{changeRoute:function(n){return e(t.i(d.push)(n))},setIntroductionWatched:function(){return e(t.i(p.u)())}}}var u=t(6),l=u&&u.__esModule?function(){return u["default"]}:function(){return u};t.d(l,"a",l);var f=t(83),c=f&&f.__esModule?function(){return f["default"]}:function(){return f};t.d(c,"a",c);var d=t(75),s=d&&d.__esModule?function(){return d["default"]}:function(){return d};t.d(s,"a",s);var p=t(84),y=t(618),v=t(628),m=t(689),h=m&&m.__esModule?function(){return m["default"]}:function(){return m};t.d(h,"a",h),t.d(n,"IntroPage",function(){return x});var b=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(n,t,r,o){var i=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var u in i)void 0===t[u]&&(t[u]=i[u]);else t||(t=i||{});if(1===a)t.children=o;else if(a>1){for(var l=Array(a),f=0;a>f;f++)l[f]=arguments[f+3];t.children=l}return{$$typeof:e,type:n,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}(),_=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),g=t(712),w=b(v.a,{}),x=function(e){function n(){var e,t,i,a;r(this,n);for(var u=arguments.length,l=Array(u),f=0;u>f;f++)l[f]=arguments[f];return t=i=o(this,(e=Object.getPrototypeOf(n)).call.apply(e,[this].concat(l))),i.openRoute=function(e){i.props.changeRoute(e)},i.toSurveyor=function(){i.props.setIntroductionWatched(),i.openRoute("/")},a=t,o(i,a)}return i(n,e),_(n,[{key:"render",value:function(){return b(y.a,{buttonAction:this.toSurveyor},void 0,w,b("div",{className:h.a.padding,dangerouslySetInnerHTML:{__html:g}}))}}]),n}(l.a.Component);n["default"]=t.i(f.connect)(null,a)(x)},615:function(e,n,t){"use strict";function r(e){var n,t=[u.a.button,e.type&&u.a[e.type]?u.a[e.type]:"",e.disabled?u.a.disabled:""];return e.disabled||(n=e.onClick),l("button",{className:t.join(" "),onClick:n},void 0,e.children)}var o=t(6),i=o&&o.__esModule?function(){return o["default"]}:function(){return o};t.d(i,"a",i);var a=t(623),u=a&&a.__esModule?function(){return a["default"]}:function(){return a};t.d(u,"a",u);var l=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(n,t,r,o){var i=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var u in i)void 0===t[u]&&(t[u]=i[u]);else t||(t=i||{});if(1===a)t.children=o;else if(a>1){for(var l=Array(a),f=0;a>f;f++)l[f]=arguments[f+3];t.children=l}return{$$typeof:e,type:n,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}();n.a=r},616:function(e,n,t){"use strict";function r(e){return l("div",{className:u.a.buttons},void 0,e.children)}var o=t(6),i=o&&o.__esModule?function(){return o["default"]}:function(){return o};t.d(i,"a",i);var a=t(624),u=a&&a.__esModule?function(){return a["default"]}:function(){return a};t.d(u,"a",u);var l=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(n,t,r,o){var i=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var u in i)void 0===t[u]&&(t[u]=i[u]);else t||(t=i||{});if(1===a)t.children=o;else if(a>1){for(var l=Array(a),f=0;a>f;f++)l[f]=arguments[f+3];t.children=l}return{$$typeof:e,type:n,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}();n.a=r},617:function(e,n,t){"use strict";function r(e){return c("footer",{className:f.a.footer+" "+e.className},void 0,c("nav",{},void 0,c("div",{className:f.a.container+" "+f.a["nav-container"]},void 0,d,s,p,y)),c("div",{className:f.a.container},void 0,v,m,h))}var o=t(6),i=o&&o.__esModule?function(){return o["default"]}:function(){return o};t.d(i,"a",i);var a=t(265),u=a&&a.__esModule?function(){return a["default"]}:function(){return a};t.d(u,"a",u);var l=t(625),f=l&&l.__esModule?function(){return l["default"]}:function(){return l};t.d(f,"a",f);var c=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(n,t,r,o){var i=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var u in i)void 0===t[u]&&(t[u]=i[u]);else t||(t=i||{});if(1===a)t.children=o;else if(a>1){for(var l=Array(a),f=0;a>f;f++)l[f]=arguments[f+3];t.children=l}return{$$typeof:e,type:n,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}(),d=c("a",{href:"http://www.nypl.org/help/about-nypl/legal-notices/privacy-policy",target:"_blank"},void 0,"Privacy Policy"),s=c("a",{href:"http://www.nypl.org/help/about-nypl/legal-notices/rules-and-regulations",target:"_blank"},void 0,"Rules and Regulations"),p=c("a",{href:"http://www.nypl.org/policy-patron-generated-web-content",target:"_blank"},void 0,"Policy on Patron-Generated Web Content"),y=c("a",{href:"http://www.nypl.org/help/about-nypl/legal-notices/website-terms-and-conditions",target:"_blank"},void 0,"Terms and Conditions"),v=c("p",{},void 0,"A ",c("a",{href:"http://spacetime.nypl.org/"},void 0,"NYC Space/Time Directory")," project"),m=c("p",{},void 0,"© The New York Public Library, Astor, Lenox, and Tilden Foundation 2013-2016"),h=c("p",{},void 0,c("img",{src:u.a}));n.a=r},618:function(e,n,t){"use strict";function r(e){return d("div",{className:c.a.container},void 0,d("article",{className:c.a.article},void 0,e.children),d(l.a,{},void 0,d(u.a,{onClick:e.buttonAction,type:"primary"},void 0,"Start Surveying!")),d(a.a,{className:c.a.footer}))}var o=t(6),i=o&&o.__esModule?function(){return o["default"]}:function(){return o};t.d(i,"a",i);var a=t(617),u=t(615),l=t(616),f=t(626),c=f&&f.__esModule?function(){return f["default"]}:function(){return f};t.d(c,"a",c);var d=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(n,t,r,o){var i=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var u in i)void 0===t[u]&&(t[u]=i[u]);else t||(t=i||{});if(1===a)t.children=o;else if(a>1){for(var l=Array(a),f=0;a>f;f++)l[f]=arguments[f+3];t.children=l}return{$$typeof:e,type:n,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}();n.a=r},619:function(e,n,t){n=e.exports=t(262)(),n.push([e.i,"._3tez2OnhHZXdCwD81hRXzS{cursor:pointer;box-sizing:border-box;display:inline;background-color:#dededf;border-radius:2rem;color:#fff;display:inline-block;margin:.6rem;padding:.5rem 1.3rem .3rem;text-transform:uppercase;border:1px solid hsla(0,0%,100%,0)}._3tez2OnhHZXdCwD81hRXzS:focus{outline:0}._3tez2OnhHZXdCwD81hRXzS:not(._3ISOLl3xbvzjUffCWl1oT3):active{border-color:#fff}._371bnJ8txOs2SLokYSFtMm{background-color:#d0343a}._1rR3F0EgPd16FrJDWzWJ60{color:#d0343a;background:none}._3ISOLl3xbvzjUffCWl1oT3{background-color:#dededf;cursor:inherit}",""]),n.locals={button:"_3tez2OnhHZXdCwD81hRXzS",disabled:"_3ISOLl3xbvzjUffCWl1oT3",primary:"_371bnJ8txOs2SLokYSFtMm",secondary:"_1rR3F0EgPd16FrJDWzWJ60"}},620:function(e,n,t){n=e.exports=t(262)(),n.push([e.i,"._3F7V9M2-PAppGaYPXANKxW{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:distribute;justify-content:space-around;width:100%;max-width:300px;margin:0 auto;-ms-flex-negative:0;flex-shrink:0}",""]),n.locals={buttons:"_3F7V9M2-PAppGaYPXANKxW"}},621:function(e,n,t){n=e.exports=t(262)(),n.push([e.i,"._12LGeWyqxzQ-d7QrWjWm94{width:100%;font-size:.8em;margin-top:2em;margin-bottom:2em}._12LGeWyqxzQ-d7QrWjWm94 ._1KP6vkZpft0IGd0usTiAbi{max-width:90%;margin:0 auto}._12LGeWyqxzQ-d7QrWjWm94 nav{padding-top:12px;padding-bottom:10px;width:100%;margin-bottom:1em}._2sLDfzkM1hCQd9MGqsQb19{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}._12LGeWyqxzQ-d7QrWjWm94 nav a{text-align:center;padding:0 .5em}._12LGeWyqxzQ-d7QrWjWm94 nav a,._12LGeWyqxzQ-d7QrWjWm94 nav a:visited{color:#fff}._12LGeWyqxzQ-d7QrWjWm94 nav a:focus,._12LGeWyqxzQ-d7QrWjWm94 nav a:hover{text-decoration:underline}._12LGeWyqxzQ-d7QrWjWm94 img{margin:0 auto;width:55px}._12LGeWyqxzQ-d7QrWjWm94 p{text-align:center}",""]),n.locals={footer:"_12LGeWyqxzQ-d7QrWjWm94",container:"_1KP6vkZpft0IGd0usTiAbi","nav-container":"_2sLDfzkM1hCQd9MGqsQb19"}},622:function(e,n,t){n=e.exports=t(262)(),n.push([e.i,".Bx84jMCskO46cj_SYztq{overflow-y:auto;width:100%;-ms-flex:1;flex:1}._35S30RSzYCndMCfSKaf_j8{width:760px;max-width:90%;margin:0 auto;padding-top:1em;box-sizing:border-box}._35S30RSzYCndMCfSKaf_j8 h1{text-align:center}._35S30RSzYCndMCfSKaf_j8 ol,._35S30RSzYCndMCfSKaf_j8 ul{margin:1em}._35S30RSzYCndMCfSKaf_j8 img{margin:1em 0;max-width:100%}._13H9hJkRQquROl0HbN4Fwz nav{background-color:#080808}",""]),n.locals={container:"Bx84jMCskO46cj_SYztq",article:"_35S30RSzYCndMCfSKaf_j8",footer:"_13H9hJkRQquROl0HbN4Fwz"}},623:[729,619],624:[729,620],625:[729,621],626:[729,622],628:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function i(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var a=t(6),u=a&&a.__esModule?function(){return a["default"]}:function(){return a};t.d(u,"a",u);var l=t(264),f=l&&l.__esModule?function(){return l["default"]}:function(){return l};t.d(f,"a",f);var c=t(631),d=c&&c.__esModule?function(){return c["default"]}:function(){return c};t.d(d,"a",d);var s=t(630),p=s&&s.__esModule?function(){return s["default"]}:function(){return s};t.d(p,"a",p);var y=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(n,t,r,o){var i=n&&n.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var u in i)void 0===t[u]&&(t[u]=i[u]);else t||(t=i||{});if(1===a)t.children=o;else if(a>1){for(var l=Array(a),f=0;a>f;f++)l[f]=arguments[f+3];t.children=l}return{$$typeof:e,type:n,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}}(),v=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),m="https://dl.dropboxusercontent.com/u/12905316/space-time/tutorial.mp4",h=y("source",{src:m,type:"video/mp4"}),b=function(e){function n(){return r(this,n),o(this,Object.getPrototypeOf(n).apply(this,arguments))}return i(n,e),v(n,[{key:"render",value:function(){return u.a.createElement("video",{className:p.a.video,poster:d.a,ref:"video",onEnded:this.ended.bind(this),onClick:this.play.bind(this)},h)}},{key:"play",value:function(){var e=t.i(l.findDOMNode)(this.refs.video);e.play(),e.setAttribute("controls","controls")}},{key:"ended",value:function(){var e=t.i(l.findDOMNode)(this.refs.video);e.load()}}]),n}(u.a.Component);n.a=b},629:function(e,n,t){n=e.exports=t(262)(),n.push([e.i,"._3sbXm42l9uO15T-m7BM3z-{width:100%;cursor:pointer}",""]),n.locals={video:"_3sbXm42l9uO15T-m7BM3z-"}},630:[729,629],631:function(e,n,t){e.exports=t.p+"349fef84fde63225ad3c4bf09743922e.jpg"},671:function(e,n,t){n=e.exports=t(262)(),n.push([e.i,"._2eI4HaWbhXLx-zKRVf_kd-{padding-top:1em}",""]),n.locals={padding:"_2eI4HaWbhXLx-zKRVf_kd-"}},689:[729,671],712:function(e,n){e.exports="<p>Help The New York Public Library put NYC history on the map!</p> <p>You’ll be presented with an item from the Library’s digitized collections.</p> <p>Use clues in the item’s metadata and the image itself to locate on a map of New York City. You might recognize some instantly while others can require a bit of investigation. Visit the item in our Digital Collections for more clues and to view the image in high resolution.</p> <p>Once you’ve identified the item’s location, hit submit and we’ll show you a new image! Not sure about the location or want a different challenge? It’s always okay to skip!</p> <p>After you pin an item on the map, you’ll have the optional step of marking the direction and angle of the view. Start Surveying or view a demo of the process:</p>"},729:function(e,n,t,r){var o=t(r);"string"==typeof o&&(o=[[e.i,o,""]]),t(263)(o,{}),o.locals&&(e.exports=o.locals)}});