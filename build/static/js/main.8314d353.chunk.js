(this.webpackJsonpexam1=this.webpackJsonpexam1||[]).push([[0],{36:function(e,n,t){},37:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var a=t(5),c=t.n(a),i=t(21),s=t.n(i),r=(t(36),t(31)),o=(t(37),t(1)),u=function(){var e=Object(a.useState)([]),n=Object(r.a)(e,2),t=(n[0],n[1]);return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Veterinarian admin - clients"}),Object(o.jsx)("input",{type:"search",id:"searchbox",name:"q","aria-label":"Search through site content"}),Object(o.jsx)("button",{onClick:function(){var e=document.getElementById("searchbox").value;console.log(e),Object(a.useEffect)((function(){fetch("/api/clients?search=".concat(e)).then((function(e){t(e)}))}),[e])},children:"Kereses"})]})},m=t(20),d=[{name:"Kov\xe1cs B\xe9la",pets:[{name:"Bodri",animal:"dog",isVaccinated:!1},{name:"Cirmi",animal:"cat",isVaccinated:!1}]},{name:"Varga Lajos",pets:[{name:"Frakk",animal:"dog",isVaccinated:!1}]},{name:"Nagy B\xe9la",pets:[{name:"Cs\u0151rike",animal:"pigeon",isVaccinated:!1}]}];!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.environment,t=void 0===n?"test":n,a=Object(m.b)({environment:t,models:{client:m.a},seeds:function(e){},routes:function(){this.namespace="/api",this.timing=2e3,this.get("clients",(function(e,n){var t=n.queryParams.search;return d.filter((function(e){return e.name.includes(t)}))})),this.post("/pets",(function(e,n){var t=JSON.parse(n.requestBody),a=t.name,c=t.isVaccinated;return d.forEach((function(e){e.pets.forEach((function(e){e.name===a&&(e.isVaccinated=c)}))})),{success:!0}}))}})}({environment:"development"}),s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.8314d353.chunk.js.map