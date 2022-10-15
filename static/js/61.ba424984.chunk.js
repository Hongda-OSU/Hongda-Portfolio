"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[61],{9061:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var r=n(2791),i=n(1523),o=n(6842),a=n(184),c=function(e){var t=e.data,n=e.last;return(0,a.jsxs)("li",{className:"course-container",children:[(0,a.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,a.jsx)("p",{className:"course-name",children:t.title}),!n&&(0,a.jsx)("div",{className:"course-dot",children:(0,a.jsx)("p",{className:"course-name",children:" \u2022"})})]})};c.defaultProps={last:!1};var s=c,l=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,a.jsx)(s,{data:t,last:n===e.length-1},t.title)}))},u=function(e){var t=e.data;return(0,a.jsxs)("div",{className:"courses",children:[(0,a.jsx)("div",{className:"link-to",id:"courses"}),(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h3",{children:"Courses"})}),(0,a.jsx)("ul",{className:"course-list",children:l(t)})]})};u.defaultProps={data:[]};var y=u;function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=n(9611);function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){if(t&&("object"===b(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var i=g(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return v(this,n)}}var h=n(4942),d=n(1413),S=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,a.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},D=function(e){var t=e.data,n=e.categories,r=t.category,i=t.competency,o=t.title,c={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},s=(0,d.Z)((0,d.Z)({},c),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return(0,a.jsxs)("div",{className:"skillbar clearfix",children:[(0,a.jsx)("div",{className:"skillbar-title",style:c,children:(0,a.jsx)("span",{children:o})}),(0,a.jsx)("div",{className:"skillbar-bar",style:s}),(0,a.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};D.defaultProps={categories:[]};var j=D,O=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,p.Z)(e,t)}(o,e);var t,n,r,i=f(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=i.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return(0,d.Z)((0,d.Z)({},n),{},(0,h.Z)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,d.Z)((0,d.Z)({},e),{},(0,h.Z)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=o,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,a.jsx)(j,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,a.jsx)(S,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,a.jsxs)("div",{className:"skills",children:[(0,a.jsx)("div",{className:"link-to",id:"skills"}),(0,a.jsxs)("div",{className:"title",children:[(0,a.jsx)("h3",{children:"Skills"}),(0,a.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,a.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,a.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&m(t.prototype,n),r&&m(t,r),Object.defineProperty(t,"prototype",{writable:!1}),o}(r.Component);O.defaultProps={skills:[],categories:[]};var k=O,P=n(907);var C=n(181);var E,x=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:3,category:["Web Development","Javascript"]},{title:"React",competency:3,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:4,category:["Web Development","Tools"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"ElasticSearch",competency:2,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"Redis",competency:3,category:["Web Development","Databases"]},{title:"Data Mining",competency:3,category:["Data Science"]},{title:"Express.JS",competency:2,category:["Web Development","Javascript"]},{title:"D3",competency:2,category:["Web Development","Javascript"]},{title:"Flask",competency:2,category:["Web Development","Python"]},{title:"Git/Mercurial",competency:3,category:["Tools"]},{title:"Kubernetes",competency:2,category:["Tools","Data Engineering"]},{title:"Google Cloud Compute",competency:2,category:["Tools","Web Development"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python"]},{title:"Numba",competency:2,category:["Data Science","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:3,category:["Data Science","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Typescript",competency:2,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"C++",competency:2,category:["Languages"]},{title:"Julia",competency:2,category:["Languages"]},{title:"MATLAB",competency:2,category:["Languages"]},{title:"R",competency:2,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science","Javascript"]},{title:"GraphQL",competency:2,category:["Web Development","Databases"]},{title:"Pandas",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:3,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","Data Science","Python"]},{title:"Hadoop",competency:2,category:["Data Engineering","Data Science"]},{title:"Spark",competency:2,category:["Data Engineering","Data Science"]},{title:"Dagster",competency:2,category:["Data Engineering","Python"]},{title:"Mypy",competency:3,category:["Python"]},{title:"Pylint",competency:4,category:["Data Engineering","Python"]}].map((function(e){return(0,d.Z)((0,d.Z)({},e),{},{category:e.category.sort()})})),w=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],T=(E=new Set(x.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return(0,P.Z)(e)}(E)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(E)||(0,C.Z)(E)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:w[t]}})),N=[{title:"Capstone: Game Design and Development",number:"CSE 5912",university:"The Ohio State University"},{title:"Data Visualization",number:"CSE 5544",university:"The Ohio State University"},{title:"Mobile Application Development",number:"CSE 5236",university:"The Ohio State University"},{title:"Real-Time Rendering",number:"CSE 5542",university:"The Ohio State University"},{title:"Virtual Reality",number:"CSE 5546",university:"The Ohio State University"},{title:"Project: Web Applications",number:"CSE 3901",university:"The Ohio State University"},{title:"Project: Interactive Systems",number:"CSE 3902",university:"The Ohio State University"},{title:"Computer Game and Animation",number:"CSE 3541",university:"The Ohio State University"},{title:"Computer Networking and Internet",number:"CSE 3461",university:"The Ohio State University"},{title:"Database Systems",number:"CSE 3241",university:"The Ohio State University"},{title:"Principles of Programming Languages",number:"CSE 3341",university:"The Ohio State University"},{title:"Software Engineering",number:"CSE 3231",university:"The Ohio State University"},{title:"Programming in C++",number:"CSE 4252",university:"The Ohio State University"},{title:"Programming in Python",number:"CSE 4256",university:"The Ohio State University"},{title:"Low-Level Programming and Computer Organization",number:"CSE 2421",university:"The Ohio State University"},{title:"Operating Systems",number:"CSE 2431",university:"The Ohio State University"},{title:"Discrete Structures",number:"CSE 2321",university:"The Ohio State University"},{title:"Data Structures and Algorithms",number:"CSE 2331",university:"The Ohio State University"},{title:"Software Development and Design",number:"CSE 2231",university:"The Ohio State University"},{title:"Software Development and Design",number:"CSE 2231",university:"The Ohio State University"}],L=function(){return(0,a.jsx)(o.Z,{title:"Stats",description:"Some statistics about Hongda Lin",children:(0,a.jsxs)("article",{className:"post",id:"resume",children:[(0,a.jsx)("header",{children:(0,a.jsx)("div",{className:"title",children:(0,a.jsx)("h2",{"data-testid":"heading",children:(0,a.jsx)(i.rU,{to:"/stats",children:"Stats"})})})}),(0,a.jsx)(y,{data:N}),(0,a.jsx)(k,{skills:x,categories:T})]})})}},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},1413:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(4942);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=61.ba424984.chunk.js.map