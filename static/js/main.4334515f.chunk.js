(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{35:function(t,e,n){},45:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);var r=n(3),c=n(0),i=n.n(c),a=n(11),s=n.n(a),o=(n(45),n(6)),l=n(7),j=n(9),u=n(8),b=(n(28),n(35),n(38)),d=n(14),O=n(18),h=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(O.a,{bg:"dark",variant:"dark",expand:"md",children:[Object(r.jsx)(O.a.Brand,{children:"To Don't List"}),Object(r.jsx)(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsxs)(O.a.Collapse,{id:"basic-navbar-nav",children:[Object(r.jsx)(d.a,{className:"mr-auto"}),Object(r.jsx)(d.a,{children:Object(r.jsx)(O.a.Text,{className:"nav-link",children:Object(r.jsx)("a",{href:"https://www.matthewcotton.dev/#/projects",children:"Back to Portfolio"})})})]})]})}}]),n}(i.a.Component),p=n(26),f=n(22),v=n(13),x="ADD_TASK",k="REMOVE_TASK",m="TOGGLE_TASK",y="SET_VISIBILITY_FILTER",C="SHOW_ALL",g="SHOW_COMPLETED",T="SHOW_ACTIVE",S=0;var A=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t,e=this;return Object(r.jsxs)(p.a,{onSubmit:function(n){var r;(n.preventDefault(),t.value.trim())&&(e.props.dispatch((r=t.value,{type:x,id:S++,text:r})),t.value="")},children:[Object(r.jsx)(p.a.Label,{children:"Enter description of a task not to do:"}),Object(r.jsx)(p.a.Control,{className:"input-area",as:"textarea",rows:"2",ref:function(e){t=e}}),Object(r.jsx)(f.a,{className:"add-btn",variant:"warning",type:"submit",children:"Add"})]})}}]),n}(i.a.Component),L=Object(v.b)()(A),D=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(d.a.Item,{children:Object(r.jsx)(d.a.Link,{eventKey:this.props.children,onClick:this.props.onClick,disabled:this.props.active,children:this.props.children})})}}]),n}(i.a.Component);var E=Object(v.b)((function(t,e){return{active:e.filter===t.VisibilityFilter}}),(function(t,e){return{onClick:function(){var n;t((n=e.filter,{type:y,filter:n}))}}}))(D),I=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(d.a,{variant:"tabs",defaultActiveKey:"All",children:[Object(r.jsx)(E,{filter:C,children:"All"}),Object(r.jsx)(E,{filter:T,children:"Don't Do"}),Object(r.jsx)(E,{filter:g,children:"Accidentally Done"})]})}}]),n}(i.a.Component),w=n(34),_=n(37),F=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:this.props.id}),Object(r.jsx)("td",{children:Object(r.jsx)("span",{style:{textDecoration:this.props.completed?"line-through":"none"},onClick:this.props.onClick,children:this.props.description})}),Object(r.jsx)("td",{children:Object(r.jsx)(f.a,{variant:"warning",onClick:this.props.removeClick,children:"Remove"})})]})}}]),n}(i.a.Component),V=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(r.jsxs)(_.a,{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Task ID"}),Object(r.jsx)("th",{children:"Task Description"}),Object(r.jsx)("th",{children:"Actions"})]})}),Object(r.jsx)("tbody",{children:this.props.tasks.map((function(e){return Object(r.jsx)(F,Object(w.a)(Object(w.a)({},e),{},{onClick:function(){return t.props.onTaskClick(e.id)},removeClick:function(){return t.props.removeClick(e.id)}}),e.id)}))})]})}}]),n}(i.a.Component);function H(t,e){switch(e){case"SHOW_COMPLETED":return t.filter((function(t){return t.completed}));case"SHOW_ACTIVE":return t.filter((function(t){return!t.completed}));case"SHOW_ALL":default:return console.log("test1"),t}}var N=Object(v.b)((function(t){return{tasks:H(t.tasks,t.VisibilityFilter)}}),(function(t){return{onTaskClick:function(e){t(function(t){return{type:m,id:t}}(e))},removeClick:function(e){t(function(t){return{type:k,id:t}}(e))}}}))(V),W=function(t){Object(j.a)(n,t);var e=Object(u.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(h,{}),Object(r.jsxs)(b.a,{children:[Object(r.jsx)("br",{}),Object(r.jsx)(L,{}),Object(r.jsx)("br",{}),Object(r.jsx)(I,{}),Object(r.jsx)(N,{})]})]})}}]),n}(i.a.Component),B=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),r(t),c(t),i(t),a(t)}))},K=n(17),P=n(39);var J=Object(K.b)({VisibilityFilter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:return e.filter;default:return t}},tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x:return[].concat(Object(P.a)(t),[{id:e.id,description:e.text,completed:!1}]);case k:return t.filter((function(t){return e.id!==t.id}));case m:return t.map((function(t){return t.id===e.id?Object.assign({},t,{completed:!t.completed}):t}));default:return t}}});var M=function(){var t=localStorage.getItem("state");if(t)return JSON.parse(t)}(),R=Object(K.c)(J,M);R.subscribe((function(){!function(t){var e=JSON.stringify(t);localStorage.setItem("state",e)}(R.getState())})),s.a.render(Object(r.jsx)(v.a,{store:R,children:Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(W,{})})}),document.getElementById("root")),B()}},[[52,1,2]]]);
//# sourceMappingURL=main.4334515f.chunk.js.map