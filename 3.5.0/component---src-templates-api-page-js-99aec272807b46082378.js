(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,a){"use strict";a.r(t);a(73);var n=a(7),r=a.n(n),l=a(0),s=a.n(l),i=a(4),c=a.n(i),o=a(144),p=(a(74),a(140),a(33),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.filename,a=e.lineNum,n=e.linkUrl;return s.a.createElement("span",{className:"code-info"},s.a.createElement("span",{className:"code"},s.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},t)),s.a.createElement("span",{className:"code"},s.a.createElement("a",{href:n+"#L"+a,target:"_blank",rel:"noopener noreferrer"},"line ",a)))},t}(s.a.Component));p.propTypes={data:c.a.object};var m=p,u=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getFunctionNameComponent=function(e){return e.replace(/\((.*?)\)/g,function(e,t){return"("+t.split(",").map(function(e){return'<span class="param">'+e+"</span>"})+")"})},a.render=function(){var e=this.props,t=e.deprecated,a=e.override,n=e.name,r=e.codeInfo;return s.a.createElement("h4",{className:"title"},t?s.a.createElement("span",{className:"signiture deprecated"},"deprecated"):null,a?s.a.createElement("span",{className:"signiture override"},"override"):null,s.a.createElement("span",{className:"name",dangerouslySetInnerHTML:{__html:this.getFunctionNameComponent(n)}}),s.a.createElement(m,{data:r}))},t}(s.a.Component);u.propTypes={deprecated:c.a.bool,override:c.a.bool,name:c.a.string,codeInfo:c.a.object};var d=u,E=a(141),f=a.n(E),h=["number","boolean","string","array","object","function","date","htmlelement","jquery","jqueryevent","any"],y=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.makeType=function(e,t){var a=function(e){var t=e.toLowerCase();return h.indexOf(t)>-1?t:"etc"}(e);return"etc"===a?s.a.createElement(f.a,{to:"/"+e,key:"type-"+t,className:"type "+a},e):s.a.createElement("span",{key:"type-"+t,className:"type "+a},e)},a.makeTypeApplicationName=function(e,t){var a=this,n=e.split("."),r=n[0],l=n[1].split(",").map(function(e,t){return a.makeType(e,t)});return s.a.createElement("span",{key:"type-"+t},r,".<",l,">")},a.makeOptionalType=function(e){var t=this.props,a=t.defaultVal,n=t.data,r=n.prefix,l=n.isOptional,i=a?" = "+this.props.defaultVal:"";return l?s.a.createElement("span",{className:"types-wrapper"},"[ ",r,e," ]",i):s.a.createElement("span",{className:"types-wrapper"},r,e,i)},a.render=function(){var e=this,t=this.props.data.names;if(t){var a=t.map(function(t,a){return t.indexOf(".")>-1?e.makeTypeApplicationName(t):e.makeType(t,a)});return s.a.createElement("p",{className:"types"},this.makeOptionalType(a))}return null},t}(s.a.Component);y.propTypes={data:c.a.object.isRequired,defaultVal:c.a.oneOfType([c.a.bool,c.a.string])};var v=y,N=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getTableRows=function(e){return e.map(function(e,a){var n,r=e.name,l=e.types,i=e.defaultVal,c=e.description,o=e.properties;return o&&(n=o.slice()).pop(),s.a.createElement("tr",{key:"tr-"+a,className:"comment"},s.a.createElement("td",null,s.a.createElement("p",{className:"name"},r)),s.a.createElement("td",null,s.a.createElement(v,{data:l,defaultVal:i})),s.a.createElement("td",null,s.a.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:c}}),n&&s.a.createElement(t,{properties:n,isProperties:!0})))})},a.render=function(){var e=this.props,t=e.properties,a=e.isProperties,n=e.isPropertyTitle;return t.length?s.a.createElement("div",{className:a?"properties":"params-wrapper"},s.a.createElement("h5",{className:"title"},a||n?"PROPERTIES":"PARAMETERS"),s.a.createElement("table",{className:a?"":"params"},s.a.createElement("colgroup",null,s.a.createElement("col",{className:"first-column"}),s.a.createElement("col",{className:"second-column"}),s.a.createElement("col",null)),s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"Type"),s.a.createElement("th",null,"Description"))),s.a.createElement("tbody",null,this.getTableRows(t)))):null},t}(s.a.Component);N.propTypes={properties:c.a.array,isProperties:c.a.bool,isPropertyTitle:c.a.bool};var g=N,T=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.items;return e.length?s.a.createElement("div",null,s.a.createElement("h5",{className:"title"},"EXAMPLES"),e.map(function(e,t){var a=e.description,n=e.code;return s.a.createElement("div",{key:"tutorial-"+t},a?s.a.createElement("p",{className:"description"},a):null,s.a.createElement("pre",{className:"codeblock tui-language-javascript"},s.a.createElement("code",{dangerouslySetInnerHTML:{__html:n}})))})):null},t}(s.a.Component);T.propTypes={items:c.a.array};var b=T,I=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement("div",null,s.a.createElement("h5",{className:"title"},this.props.title),s.a.createElement("ul",{className:"items"},this.props.items.map(function(e,t){return s.a.createElement("li",{key:"list-"+t,className:"item",dangerouslySetInnerHTML:{__html:e}})})))},t}(s.a.Component);I.propTypes={title:c.a.string,items:c.a.array};var k=I,S=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,a=e.hasProperties,n=t.deprecated,r=t.name,l=t.description,i=t.codeInfo,c=t.examples,o=t.sees,p=t.todos,m=t.augments,u=t.params,E=[o.slice(),p.slice(),m.slice(),u.slice()];return E.forEach(function(e){e.length&&e.pop()}),s.a.createElement("div",{className:"overview"},s.a.createElement("div",{className:"subsection"},s.a.createElement("dl",null,s.a.createElement("dt",{className:"subsection-term"},s.a.createElement(d,{deprecated:n,name:r,codeInfo:i})),s.a.createElement("dd",{className:"subsection-description"},s.a.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:l}}),E[0].length?s.a.createElement(k,{title:"SEES",items:E[0]}):null,E[1].length?s.a.createElement(k,{title:"TODOS",items:E[1]}):null,E[2].length?s.a.createElement(k,{title:"EXTENDS",items:E[2]}):null,s.a.createElement(g,{properties:E[3],isPropertyTitle:a}),c.length?s.a.createElement(b,{items:c}):null))))},t}(s.a.Component);S.propTypes={data:c.a.object,hasProperties:c.a.bool};var P=S,C=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.children;return s.a.createElement("div",{className:"subsection main-category"},s.a.createElement("h3",{className:"title"},t),a)},t}(s.a.Component);C.propTypes={title:c.a.string,children:c.a.array};var w=C,_=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,a=e.isFirstItem,n=t.pid,r=t.override,l=t.deprecated,i=t.name,c=t.types,o=t.description,p=t.codeInfo,u=t.examples;return s.a.createElement("div",{id:n,className:"definition-list"+(a?" first-child":"")},s.a.createElement("dl",null,s.a.createElement("dt",{className:"subsection-term"},s.a.createElement("h4",{className:"title"},l?s.a.createElement("span",{className:"signiture deprecated"},"deprecated"):null,r?s.a.createElement("span",{className:"signiture override"},"override"):null,s.a.createElement("span",{className:"name"},i,": ")," ",s.a.createElement(v,{data:c}),s.a.createElement(m,{data:p}))),s.a.createElement("dd",{className:"subsection-description"},s.a.createElement("p",{className:"description"},o),s.a.createElement(b,{items:u}))))},t}(s.a.Component);_.propTypes={data:c.a.object,isFirstItem:c.a.bool};var j=_,F=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data;if(e){var t=e.types,a=e.description,n=a?" - "+a:"";return s.a.createElement("div",{className:"returns"},s.a.createElement("h5",{className:"title"},"RETURNS:"),s.a.createElement("span",{className:"description"},"{"," ",s.a.createElement(v,{data:t})," ","}",n))}return null},t}(s.a.Component);F.propTypes={data:c.a.object};var O=F,M=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,a=e.isFirstItem,n=t.type,r=t.pid,l=t.override,i=t.deprecated,c=t.name,o=t.description,p=t.codeInfo,m=t.examples,u=t.sees,E=t.todos,f=t.params,h=t.returns,y=[u.slice(),E.slice(),f.slice(),h.slice()];return y.forEach(function(e){e.length&&e.pop()}),s.a.createElement("div",{id:r,className:"definition-list"+(a?" first-child":"")},s.a.createElement("dl",null,s.a.createElement("dt",{className:"subsection-term"},s.a.createElement(d,{deprecated:i,override:l,name:c,codeInfo:p})),s.a.createElement("dd",{className:"subsection-description"},s.a.createElement("p",{className:"description",dangerouslySetInnerHTML:{__html:o}}),y[0].length?s.a.createElement(k,{title:"SEES",items:y[0]}):null,y[1].length?s.a.createElement(k,{title:"TODOS",items:y[1]}):null,s.a.createElement(g,{properties:y[2],isPropertyTitle:"event"===n}),y[3].length?s.a.createElement(O,{data:y[3][0]}):null,m.length?s.a.createElement(b,{items:m}):null)))},t}(s.a.Component);M.propTypes={data:c.a.object,isFirstItem:c.a.bool};var R=M;a(143);a.d(t,"query",function(){return x});var L=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=e.pathname,a=e.hash,n=this.props.data.apiPageJson,r=n.parentPid,l=n.title,i=n.items,c=""+t.split("/").pop()+a,p=i.filter(function(e){return"overview"===e.type}),m=i.filter(function(e){return"static-property"===e.type}),u=i.filter(function(e){return"static-function"===e.type}),d=i.filter(function(e){return"instance-function"===e.type}),E=i.filter(function(e){return"event"===e.type}),f=i.filter(function(e){return"typedef"===e.type});return s.a.createElement(o.a,{tabIndex:0,selectedNavItemId:c},s.a.createElement("header",null,s.a.createElement("h2",{className:"title"},l)),s.a.createElement("article",null,p.length?s.a.createElement(P,{data:p[0],hasProperties:"typedef"===r}):null,m.length?s.a.createElement(w,{title:"Static Properties"},m.map(function(e,t){return s.a.createElement(j,{key:"static-method-"+t,isFirstItem:0===t,data:e})})):null,u.length?s.a.createElement(w,{title:"Static Methods"},u.map(function(e,t){return s.a.createElement(R,{key:"static-method-"+t,isFirstItem:0===t,data:e})})):null,d.length?s.a.createElement(w,{title:"Instance Methods"},d.map(function(e,t){return s.a.createElement(R,{key:"instance-method-"+t,isFirstItem:0===t,data:e})})):null,E.length?s.a.createElement(w,{title:"Events"},E.map(function(e,t){return s.a.createElement(R,{key:"event-"+t,isFirstItem:0===t,data:e})})):null,f.length?s.a.createElement(w,{title:"Typedef"},f.map(function(e,t){return s.a.createElement(R,{key:""+t,isFirstItem:0===t,data:e})})):null))},t}(s.a.Component);L.propTypes={data:c.a.shape({apiPageJson:c.a.object.isRequired}),location:c.a.shape({pathname:c.a.string,hash:c.a.string})};t.default=L;var x="2393403431"}}]);
//# sourceMappingURL=component---src-templates-api-page-js-99aec272807b46082378.js.map