webpackJsonp([1],{"../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./styles/base.less":function(e,t,o){t=e.exports=o("../node_modules/css-loader/lib/css-base.js")(void 0),t.push([e.i,"*{padding:0;margin:0;box-sizing:border-box}body,pre{font-family:Roboto!important;line-height:1.5;font-size:15px;background-color:#f7f8f9}body,h1,pre{color:#677d9d}h1{font-weight:300;font-size:50px}label{font-size:15px}a,a:focus,a:hover{color:#4fa3ff;text-decoration:none}",""])},"../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./styles/normalize.less":function(e,t,o){t=e.exports=o("../node_modules/css-loader/lib/css-base.js")(void 0),t.push([e.i,"/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}",""])},"./components/App.tsx":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("../node_modules/react/react.js"),r=o("../node_modules/react-redux/es/index.js"),s=o("../node_modules/react-router-dom/es/index.js"),i=o("./components/Routes.tsx");o("./styles/normalize.less"),o("./styles/base.less"),t.default=function(e){var t=e.store;return n.createElement("div",null,n.createElement(r.Provider,{store:t},n.createElement("div",null,n.createElement(s.HashRouter,null,n.createElement(i.default,null)))))}},"./components/ForgotPassword/ForgotPassword.tsx":function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=o("../node_modules/react/react.js"),s=o("./components/PanelLayout/index.ts"),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){return r.createElement(s.default,{title:"Forgot your password?"},"Work in progress.")},t}(r.Component);t.default=i},"./components/ForgotPassword/index.ts":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("./components/ForgotPassword/ForgotPassword.tsx");t.default=n.default},"./components/Home/Home.tsx":function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=o("../node_modules/react/react.js"),s=o("./elements/Button/index.tsx"),i=o("./components/Home/styles.css"),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){return r.createElement("div",null,r.createElement("h1",{className:i.teal},"Welcome to Xchange."),r.createElement(s.default,null,"This is shared button."))},t}(r.Component);t.default=a},"./components/Home/index.ts":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("./components/Home/Home.tsx");t.default=n.default},"./components/Home/styles.css":function(e,t){e.exports={teal:"styles-teal-3yuTE"}},"./components/Login/Login.tsx":function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=o("../node_modules/react/react.js"),s=o("./components/PanelLayout/index.ts"),i=o("./components/Login/LoginForm.tsx"),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){return r.createElement(s.default,{title:"Sign In"},r.createElement(i.default,{onSubmit:this.onSubmit}))},t.prototype.onSubmit=function(){console.log("Login form submit")},t}(r.Component);t.default=a},"./components/Login/LoginForm.tsx":function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__assign||Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++){t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var s=o("../node_modules/react/react.js"),i=o("../node_modules/redux-form/lib/index.js"),a=o("../node_modules/react-router-dom/es/index.js"),l=o("./elements/TextField/index.tsx"),c=o("./elements/CheckboxField/index.tsx"),u=o("./elements/Button/index.tsx"),d=o("./components/Login/styles.css"),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=e.fields,o=t.email,n=t.password,i=t.rememberMe,p=e.handleSubmit;return s.createElement("form",{onSubmit:p},s.createElement("div",null,s.createElement(l.default,r({type:"text",label:"Your email"},o))),s.createElement("div",null,s.createElement(l.default,r({type:"password",label:"Password"},n))),s.createElement("div",{className:"row "+d.paddedRow},s.createElement("div",{className:"col-md-6"},s.createElement(c.default,r({label:"Keep me signed in"},i))),s.createElement("div",{className:"col-md-6 text-right"},s.createElement(a.Link,{to:"/forgot-password"},"Forgot your password?"))),s.createElement(u.default,{fullWidth:!0},"SIGN IN"))},t}(s.Component),f=i.reduxForm({form:"login",fields:["email","password","rememberMe"]})(p);t.default=f},"./components/Login/index.ts":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("./components/Login/Login.tsx");t.default=n.default},"./components/Login/styles.css":function(e,t){e.exports={paddedRow:"styles-paddedRow-3JyXP"}},"./components/PanelLayout/PanelLayout.tsx":function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=o("../node_modules/react/react.js"),s=o("./components/PanelLayout/styles.css"),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=e.title,o=e.colSize;return o=o||"col-md-5",r.createElement("div",{className:"container"},r.createElement("div",{className:"row justify-content-center"},r.createElement("div",{className:o},r.createElement("h1",{className:s.title},t),r.createElement("div",{className:s.panel},this.props.children))))},t}(r.Component);t.default=i},"./components/PanelLayout/index.ts":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("./components/PanelLayout/PanelLayout.tsx");t.default=n.default},"./components/PanelLayout/styles.css":function(e,t){e.exports={title:"styles-title-3nSwD",panel:"styles-panel-9Oyb3",paddedRow:"styles-paddedRow-1CIaI"}},"./components/Routes.tsx":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("../node_modules/react/react.js"),r=o("../node_modules/react-router/es/index.js"),s=o("./components/Home/index.ts"),i=o("./components/Login/index.ts"),a=o("./components/ForgotPassword/index.ts"),l=o("./components/Signup/index.ts");t.default=function(){return n.createElement("div",null,n.createElement(r.Switch,null,n.createElement(r.Route,{path:"/",exact:!0,component:s.default}),n.createElement(r.Route,{path:"/login",exact:!0,component:i.default}),n.createElement(r.Route,{path:"/signup",exact:!0,component:l.default}),n.createElement(r.Route,{path:"/forgot-password",exact:!0,component:a.default})))}},"./components/Signup/Signup.tsx":function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=o("../node_modules/react/react.js"),s=o("./components/Signup/SignupForm.tsx"),i=o("./components/PanelLayout/index.ts"),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){return r.createElement(i.default,{title:"Sign Up",colSize:"col-md-8"},r.createElement(s.default,{onSubmit:this.onSubmit}))},t.prototype.onSubmit=function(){console.log("Signup form submit")},t}(r.Component);t.default=a},"./components/Signup/SignupForm.tsx":function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__assign||Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++){t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var s=o("../node_modules/react/react.js"),i=o("../node_modules/redux-form/lib/index.js"),a=o("./elements/TextField/index.tsx"),l=o("./elements/Button/index.tsx"),c=o("./components/Signup/styles.css"),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=e.fields,o=t.name,n=t.email,i=t.phone,u=t.country,d=t.city,p=t.password,f=t.passwordRepeat,m=t.agree,y=e.handleSubmit;return s.createElement("form",{onSubmit:y},s.createElement("div",{className:"row"},s.createElement("div",{className:"col-md-6"},s.createElement(a.default,r({type:"text",label:"Your name"},o)),s.createElement(a.default,r({type:"text",label:"Your country"},u)),s.createElement(a.default,r({type:"text",label:"Your phone number"},i))),s.createElement("div",{className:"col-md-6"},s.createElement(a.default,r({type:"text",label:"Your e-mail"},n)),s.createElement(a.default,r({type:"text",label:"Your city"},d)))),s.createElement("div",{className:"row "+c.paddedRow},s.createElement("div",{className:"col-md-6"},s.createElement(a.default,r({type:"password",label:"Password"},p))),s.createElement("div",{className:"col-md-6"},s.createElement(a.default,r({type:"password",label:"Repeat password"},f)))),s.createElement("div",{className:"row "+c.bottomPanel},s.createElement("div",{className:"col-md-8 "+c.agreeCol},s.createElement("input",r({id:"agree",type:"checkbox"},m)),"  ",s.createElement("label",{htmlFor:"agree"},"I agree with the ",s.createElement("a",{href:"#"},"Terms of Use")," and want to continue")),s.createElement("div",{className:"col-md-4 text-right"},s.createElement(l.default,null,"SIGN UP"))))},t}(s.Component),d=i.reduxForm({form:"login",fields:["email","password","rememberMe"]})(u);t.default=d},"./components/Signup/index.ts":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("./components/Signup/Signup.tsx");t.default=n.default},"./components/Signup/styles.css":function(e,t){e.exports={paddedRow:"styles-paddedRow-3u666",agreeCol:"styles-agreeCol-2rfAn",bottomPanel:"styles-bottomPanel-1JHJ8"}},"./elements/Button/index.tsx":function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=o("../node_modules/react/react.js"),s=o("./elements/Button/styles.css"),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props.fullWidth,t=s.base;return e&&(t+=" "+s.fullWidth),r.createElement("div",{className:t},this.props.children)},t}(r.Component);t.default=i},"./elements/Button/styles.css":function(e,t){e.exports={base:"styles-base-12hG0",fullWidth:"styles-fullWidth-2iIad"}},"./elements/CheckboxField/index.tsx":function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__assign||Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++){t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var s=o("../node_modules/react/react.js"),i=o("./elements/CheckboxField/styles.css"),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props,t=e.label,o=e.name;return s.createElement("div",{className:i.group},s.createElement("input",r({className:i.input,type:"checkbox",id:o},this.props)),s.createElement("label",{htmlFor:o},t))},t}(s.Component);t.default=a},"./elements/CheckboxField/styles.css":function(e,t){e.exports={group:"styles-group-2Hhhh",input:"styles-input-3D9gG"}},"./elements/TextField/index.tsx":function(e,t,o){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__assign||Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++){t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};Object.defineProperty(t,"__esModule",{value:!0});var s=o("../node_modules/react/react.js"),i=o("./elements/TextField/styles.css"),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.render=function(){var e=this.props.label;return s.createElement("div",{className:i.group},s.createElement("input",r({className:i.input,type:"text"},this.props,{required:!0})),s.createElement("span",{className:i.bar}),s.createElement("label",{className:i.label},e))},t}(s.Component);t.default=a},"./elements/TextField/styles.css":function(e,t){e.exports={group:"styles-group-1_h1x",input:"styles-input-2e35D",label:"styles-label-1_zPe",bar:"styles-bar-2qcrc"}},"./index.tsx":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("../node_modules/react/react.js"),r=o("../node_modules/react-dom/index.js"),s=o("./components/App.tsx"),i=o("./utils/registerServiceWorker.ts"),a=o("./store/configure-store.ts"),l=a.default({});r.render(n.createElement("div",{id:"app-content"},n.createElement(s.default,{store:l})),document.getElementById("app")),i.default()},"./reducers/index.ts":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("../node_modules/redux/es/index.js"),r=o("./reducers/root.ts"),s=o("../node_modules/react-router-redux/lib/index.js"),i=o("../node_modules/redux-form/lib/index.js");t.default=n.combineReducers({root:r.default,routing:s.routerReducer,form:i.reducer})},"./reducers/root.ts":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){return void 0===e&&(e={}),t.type,"This is for debugging"};t.default=n},"./store/configure-store.dev.ts":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("../node_modules/redux/es/index.js"),r=o("../node_modules/redux-thunk/lib/index.js"),s=o("../node_modules/redux-logger/dist/redux-logger.js"),i=o("./reducers/index.ts"),a=n.compose(n.applyMiddleware(r.default,s.createLogger()));t.default=function(e){return n.createStore(i.default,e,a)}},"./store/configure-store.prod.ts":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("../node_modules/redux/es/index.js"),r=o("../node_modules/redux-thunk/lib/index.js"),s=o("./reducers/index.ts"),i=n.compose(n.applyMiddleware(r.default));t.default=function(e){return n.createStore(s.default,e,i)}},"./store/configure-store.ts":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(o("./store/configure-store.dev.ts"),o("./store/configure-store.prod.ts"));t.default=n.default},"./styles/base.less":function(e,t,o){var n=o("../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./styles/base.less");"string"==typeof n&&(n=[[e.i,n,""]]);var r={};r.transform=void 0,o("../node_modules/style-loader/lib/addStyles.js")(n,r),n.locals&&(e.exports=n.locals)},"./styles/normalize.less":function(e,t,o){var n=o("../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./styles/normalize.less");"string"==typeof n&&(n=[[e.i,n,""]]);var r={};r.transform=void 0,o("../node_modules/style-loader/lib/addStyles.js")(n,r),n.locals&&(e.exports=n.locals)},"./utils/registerServiceWorker.ts":function(e,t,o){"use strict";(function(e){function o(){"serviceWorker"in navigator&&window.addEventListener("load",function(){var t=e.env.PUBLIC_URL+"/service-worker.js";navigator.serviceWorker.register(t).then(function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}}).catch(function(e){console.error("Error during service worker registration:",e)})})}function n(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o,t.unregister=n}).call(t,o("../node_modules/node-libs-browser/node_modules/process/browser.js"))}},["./index.tsx"]);