(this["webpackJsonpsimple-address-book"]=this["webpackJsonpsimple-address-book"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(5),i=n.n(s),r=(n(14),n(4)),o=n(6),l=n(7),d=n(2),u=n(9),b=n(8),h=(n(15),n(0)),m=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).nameHandler=function(t){a.setState({name:t.target.value})},a.contactHandler=function(t){a.setState({contact:t.target.value})},a.state={name:"",contact:null,list:[]},a.nameHandler=a.nameHandler.bind(Object(d.a)(a)),a.contactHandler=a.contactHandler.bind(Object(d.a)(a)),a.submitHandler=a.submitHandler.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"submitHandler",value:function(t){alert("New contact added: "+this.state.name+" "+this.state.contact),t.preventDefault(),this.setState({list:[].concat(Object(r.a)(this.state.list),[{name:this.state.name,contact:this.state.contact}])});var e={name:this.state.name,contact:this.state.contact};this.setState({list:[].concat(Object(r.a)(this.state.list),[e]),name:"",contact:""})}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"main",children:[Object(h.jsx)("h1",{children:"Save your contacts here!"}),Object(h.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(h.jsx)("label",{for:"name",id:"nameLabel",children:"Name"}),Object(h.jsx)("input",{id:"name",value:this.state.name,type:"text",placeholder:"Enter name here",onChange:this.nameHandler}),Object(h.jsx)("label",{for:"contact",id:"contactLabel",children:"Contact"}),Object(h.jsx)("input",{id:"contact",value:this.state.contact,type:"text",placeholder:"Enter phone number here",onChange:this.contactHandler}),Object(h.jsx)("input",{type:"submit",value:"Submit"})]}),Object(h.jsx)("ul",{id:"mainList",children:this.state.list.map((function(t){return Object(h.jsxs)("li",{children:[t.name," ",t.contact]})}))})]})}}]),n}(c.a.Component),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),s(t),i(t)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),j()}},[[17,1,2]]]);
//# sourceMappingURL=main.a32eb760.chunk.js.map