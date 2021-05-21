/*! For license information please see component---src-pages-foundations-layout-mdx-922c18033a665d62732f.js.LICENSE.txt */
(self.webpackChunkparagon_pattern_library_documentation=self.webpackChunkparagon_pattern_library_documentation||[]).push([[148],{75900:function(e,n){var l;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var l=arguments[n];if(l){var i=typeof l;if("string"===i||"number"===i)e.push(l);else if(Array.isArray(l)&&l.length){var m=a.apply(null,l);m&&e.push(m)}else if("object"===i)for(var r in l)t.call(l,r)&&l[r]&&e.push(r)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(n,[]))||(e.exports=l)}()},58202:function(e,n,l){"use strict";l.r(n),l.d(n,{_frontmatter:function(){return C},default:function(){return y}});var t=l(19756),a=l(67294),i=l(64983),m=l(21379),r=l(438),o=l(59854),d=l(96156),s=l(75900),u=l.n(s),p=l(13378),c=l(24807);function x(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function N(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?x(Object(l),!0).forEach((function(n){(0,d.Z)(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):x(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}var f=function(e){var n,l=e.index,t=e.width,i=e.onChangeWidth,m=e.offset,r=e.onChangeOffset;return a.createElement("div",{className:u()("col mb-4",(n={},n["col-"+t]=t>0,n["offset-"+m]=m>0,n))},a.createElement("div",{className:"text-align-center p-1",style:{background:"#eee",minHeight:"2rem"}},a.createElement("div",{className:"form-inline m-2"},a.createElement("label",{className:"font-weight-normal",htmlFor:"column-"+l+"-width"},"Width"),a.createElement(p.Z,{type:"number",id:"column-"+l+"-width",className:"form-control-sm",value:t,placeholder:"Width (1 - 12)",style:{width:"3rem"},min:0,step:1,max:12,onChange:function(e){return i(l,e.target.value)}})),a.createElement("div",{className:"form-inline m-2"},a.createElement("label",{className:"font-weight-normal",htmlFor:"column-"+l+"-offset"},"Offset"),a.createElement(p.Z,{type:"number",id:"column-"+l+"-offset",className:"form-control-sm",value:m,placeholder:"Offset (1 - 11)",style:{width:"3rem"},min:0,step:1,max:11,onChange:function(e){return r(l,e.target.value)}}))))};f.defaultProps={width:0,offset:0};var h=function(){for(var e=(0,a.useState)(3),n=e[0],l=e[1],t=(0,a.useState)({0:3,1:6,2:3}),i=t[0],m=t[1],r=(0,a.useState)({}),o=r[0],d=r[1],s=[],x=0;x<n;x++)s.push(a.createElement(f,{key:x,index:x,width:i[x],onChangeWidth:function(e,n){var l;m(N(N({},i),{},((l={})[e]=n,l)))},offset:o[x],onChangeOffset:function(e,n){var l;d(N(N({},o),{},((l={})[e]=n,l)))}}));return a.createElement("div",null,a.createElement("p",null,"Drag the slider to add or remove columns. Edit the width and offset values for each column and see the output below."),a.createElement("div",{className:"form-inline mb-4"},a.createElement("label",{htmlFor:"num-cols-range mr-2"},"Number of Columns ",n),a.createElement(p.Z,{id:"num-cols-range",type:"range",value:n,min:1,step:1,max:12,onChange:function(e){return l(e.target.value)}})),a.createElement("div",{className:"row"},s),a.createElement(c.Z,{className:"language-jsx"},'\n<div className="row">\n'+s.map((function(e,n){var l,t=i[n],a=o[n];return'\n  <div className="'+u()("col",((l={})["col-"+t]=t>0,l["offset-"+a]=a>0,l))+'">\n    '+(t||"auto")+"\n  </div>\n      "})).join("")+"\n</div>\n    "))},C={},g={pageQuery:"599415723",_frontmatter:C},b=m.Z;function y(e){var n=e.components,l=(0,t.Z)(e,["components"]);return(0,i.mdx)(b,Object.assign({},g,l,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",null,"Layout"),(0,i.mdx)("p",null,"Paragon's layout is controlled by the Bootstrap grid system. Documentation can be found here:\n",(0,i.mdx)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.5/layout/grid/"},"https://getbootstrap.com/docs/4.5/layout/grid/")),(0,i.mdx)("h2",null,"Components"),(0,i.mdx)("p",null,"These components are pass throughs from React-Bootstrap.",(0,i.mdx)("br",null),(0,i.mdx)("a",{href:"https://react-bootstrap.github.io/components/layout/",target:"_blank",rel:"noopener noreferrer"},"See React-Bootstrap for documentation.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Container className="border">\n  {/* Stack the columns on mobile by making one full-width and the other half-width */}\n  <Row className="my-3">\n    <Col xs={12} md={8}>\n      <div className="p-3 border">xs=12 md=8</div>\n    </Col>\n    <Col xs={6} md={4}>\n      <div className="p-3 border">xs=6 md=4</div>\n    </Col>\n  </Row>\n\n  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}\n  <Row className="my-3">\n    <Col xs={6} md={4}>\n      <div className="p-3 border">xs=6 md=4</div>\n    </Col>\n    <Col xs={6} md={4}>\n      <div className="p-3 border">xs=6 md=4</div>\n    </Col>\n    <Col xs={6} md={4}>\n      <div className="p-3 border">xs=6 md=4</div>\n    </Col>\n  </Row>\n\n  {/* Columns are always 50% wide, on mobile and desktop */}\n  <Row className="my-3">\n    <Col xs={6}>\n      <div className="p-3 border">xs=6</div>\n    </Col>\n    <Col xs={6}>\n      <div className="p-3 border">xs=6</div>\n    </Col>\n  </Row>\n</Container>\n')),(0,i.mdx)("h2",null,"Grid"),(0,i.mdx)(h,{mdxType:"LayoutGenerator"}),(0,i.mdx)("h3",null,"Row"),(0,i.mdx)("p",null,"Rows contain columns. They are ",(0,i.mdx)("inlineCode",{parentName:"p"},"display: flex")," so\nany related flex box styles or css utilities\ncan be leveraged here."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".row"))),(0,i.mdx)("h6",null,"Related flexbox utilities"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".justify-content-start")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".justify-content-end")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".justify-content-center")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".justify-content-between")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".justify-content-around")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".align-items-start")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".align-items-end")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".align-items-center")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".align-items-baseline")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".align-items-stretch"))),(0,i.mdx)("p",null,"Responsive variations of these utilities also exist:\n",(0,i.mdx)("inlineCode",{parentName:"p"},".{property}-{breakpoint}-{value}"),"."),(0,i.mdx)("h6",null,"Some examples:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".justify-content-sm-start")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".align-items-md-start")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".align-items-l-between")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".justify-content-xl-between"))),(0,i.mdx)("h3",null,"Column"),(0,i.mdx)("p",null,"Columns lay on a 12 column grid."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".col")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".col-${width}")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".col-${breakpoint}-${width}")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"offset-${columns}")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"offset-${breakpoint}-${columns}"))),(0,i.mdx)("h6",null,"Examples"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".col-1")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".col-2")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".col-3")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".col-4")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".col-5")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".col-6")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".col-7")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".col-8")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".col-9")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".col-10")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".col-11")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".col-12"))),(0,i.mdx)("h6",null,"Related flexbox utilities"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".align-self-start")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".align-self-end")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".align-self-center")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".align-self-baseline")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".align-self-stretch")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".flex-fill"))),(0,i.mdx)("h3",null,"Breakpoint Utilities"),(0,i.mdx)("p",null,"Many css utility classes have variants that apply\nthe style only at a certain breakpoint and above."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Small and up ",(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"-sm-"))),(0,i.mdx)("li",{parentName:"ul"},"Medium and up ",(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"-md-"))),(0,i.mdx)("li",{parentName:"ul"},"Large and up ",(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"-lg-"))),(0,i.mdx)("li",{parentName:"ul"},"Extra Large and up ",(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"strong"},"-xl-")))),(0,i.mdx)("h6",null,"Examples"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".col-sm-4")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".col-md-4")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".col-lg-4")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".col-xl-4")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".align-items-sm-start")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".align-items-md-start")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".align-items-lg-start")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},".align-items-xl-start"))),(0,i.mdx)("h3",null,"Display Utilities"),(0,i.mdx)(o.Z,{selectors:(0,r.Z)(l.data.displayUtilities.nodes),mdxType:"CSSUtilitiesTable"}),(0,i.mdx)("h3",null,"Position"),(0,i.mdx)(o.Z,{selectors:(0,r.Z)(l.data.positionUtilities.nodes),mdxType:"CSSUtilitiesTable"}),(0,i.mdx)("h3",null,"Flexbox"),(0,i.mdx)(o.Z,{selectors:(0,r.Z)(l.data.flexUtilities.nodes),mdxType:"CSSUtilitiesTable"}),(0,i.mdx)("h3",null,"Max Width"),(0,i.mdx)(o.Z,{selectors:(0,r.Z)(l.data.maxWidthUtilities.nodes),mdxType:"CSSUtilitiesTable"}),(0,i.mdx)("h3",null,"Misc Layout"),(0,i.mdx)(o.Z,{selectors:(0,r.Z)(l.data.miscUtilities.nodes),mdxType:"CSSUtilitiesTable"}))}y.isMDXComponent=!0},59854:function(e,n,l){"use strict";var t=l(67294),a=l(9672);function i(e){var n=e.selectors,l=e.showExample;return t.createElement(a.Z,{className:"pgn-doc__status-table",data:n.map((function(e){var n=e.selector,a=e.declarations;return{selector:t.createElement("code",null,".",n),example:l?t.createElement("p",{style:{margin:"-.25em 0",display:"inline-block",padding:".25em .5em",border:"solid 1px transparent"},className:n},"Aa Bb Cc"):null,declarations:t.createElement("div",null,a.map((function(e){return t.createElement("code",{key:e,className:"mb-0 text-muted"},e)})))}})),columns:[{label:"Utility Class Name",key:"selector"},{label:"Example",hideHeader:!0,key:"example"},{label:"Declarations",key:"declarations",hideHeader:!0}]})}i.defaultProps={selectors:[],showExample:!1},n.Z=i},21379:function(e,n,l){"use strict";l.d(n,{Z:function(){return u}});var t=l(67294),a=l(64983),i=l(25444),m=l(82298),r=l(24807),o=l(14079),d=l(30974),s={pre:function(e){return t.createElement("div",e)},code:r.Z,Link:i.Link};function u(e){var n,l=e.children,i=e.pageContext;return t.createElement(o.Z,null,t.createElement(d.Z,{title:null==i||null===(n=i.frontmatter)||void 0===n?void 0:n.title}),t.createElement(m.Z,{size:"md",className:"py-5"},t.createElement(a.MDXProvider,{components:s},l)))}},438:function(e,n){"use strict";n.Z=function(e,n){if(!n)return e;var l=RegExp(n);return e.filter((function(e){return l.test(e.selector)}))}}}]);
//# sourceMappingURL=component---src-pages-foundations-layout-mdx-922c18033a665d62732f.js.map