(this.webpackJsonpsample_form=this.webpackJsonpsample_form||[]).push([[0],[,,,,function(e,a,t){e.exports=t(12)},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(3),c=t.n(r),s=(t(9),t(1)),m=(t(10),function(e){var a=e.nextPage,t=Object(l.useState)(""),r=Object(s.a)(t,2),c=r[0],m=r[1],i=Object(l.useState)(""),b=Object(s.a)(i,2),p=b[0],u=b[1],o=Object(l.useState)(""),h=Object(s.a)(o,2),d=h[0],g=h[1];return n.a.createElement("main",{className:"pa4 black-80 shadow-1 mt3"},n.a.createElement("h1",{className:"measure center"},"Internship Application"),n.a.createElement("form",{className:"mt3",id:"basic-form"},n.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},n.a.createElement("div",{className:"mt2"},n.a.createElement("label",{className:"db fw6 lh-copy f6"},"First Name"),n.a.createElement("input",{value:c,onChange:function(e){return m(e.target.value)},className:"pa2 input-reset ba bg-transparent hover-bg-lightest-blue w-100",id:"firstname",type:"text",placeholder:"Michael"})),n.a.createElement("div",{className:"mt2"},n.a.createElement("label",{className:"db fw6 lh-copy f6"},"Last Name"),n.a.createElement("input",{onChange:function(e){return u(e.target.value)},className:"pa2 input-reset ba bg-transparent hover-bg-lightest-blue w-100",type:"text",id:"lastname",placeholder:"Scott"})),n.a.createElement("div",{className:"mt2"},n.a.createElement("label",{className:"db fw6 lh-copy f6"},"Email"),n.a.createElement("input",{onChange:function(e){return g(e.target.value)},className:"pa2 input-reset ba bg-transparent hover-bg-lightest-blue w-100",type:"email",id:"email",placeholder:"michael@dundermifflin.com"}))),n.a.createElement("input",{value:"Save",type:"submit",onClick:function(e){e.preventDefault();var t={firstName:c,lastName:p,email:d};console.log(t),a()},className:"grow pointer b--solid b--black-20 bg-white black pa2 b"})))}),i=function(e){var a=e.nextStep,t=e.prevStep,r=Object(l.useState)(""),c=Object(s.a)(r,2),m=c[0],i=c[1],b=Object(l.useState)(""),p=Object(s.a)(b,2),u=p[0],o=p[1],h=Object(l.useState)(""),d=Object(s.a)(h,2),g=d[0],f=d[1];return n.a.createElement("main",{className:"pa4 black-80 shadow-1 mt3"},n.a.createElement("h1",{className:"measure center ph5"},"Experience"),n.a.createElement("form",{className:"mt3",id:"basic-form"},n.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},n.a.createElement("div",{className:"mt2"},n.a.createElement("label",{className:"db fw6 lh-copy f6"},"Link to Resume"),n.a.createElement("input",{onChange:function(e){return i(e.target.value)},className:"pa2 input-reset ba bg-transparent hover-bg-lightest-blue w-100",id:"resumelink",type:"url",placeholder:""})),n.a.createElement("div",{className:"mt2"},n.a.createElement("label",{className:"db fw6 lh-copy f6"},"Skills"),n.a.createElement("textarea",{onChange:function(e){return o(e.target.value)},className:"pa2 input-reset ba bg-transparent hover-bg-lightest-blue w-100",type:"text",id:"skills"})),n.a.createElement("div",{className:"mt2"},n.a.createElement("label",{className:"db fw6 lh-copy f6"},"Past work experience"),n.a.createElement("textarea",{onChange:function(e){return f(e.target.value)},className:"pa2 input-reset ba bg-transparent hover-bg-lightest-blue w-100",type:"text",id:"experience"}))),n.a.createElement("div",null,n.a.createElement("input",{value:"Back",type:"submit",onClick:t,className:"grow pointer b--solid b--black-20 bg-white black pa2 b mr3"}),n.a.createElement("input",{value:"Save",type:"submit",onClick:function(e){e.preventDefault();var t={resume:m,skills:u,experience:g};console.log(t),a()},className:"grow pointer b--solid b--black-20 bg-white black pa2 b"}))))},b=function(e){var a=e.nextStep,t=e.prevStep,r=Object(l.useState)(""),c=Object(s.a)(r,2),m=c[0],i=c[1],b=Object(l.useState)(""),p=Object(s.a)(b,2),u=p[0],o=p[1];return n.a.createElement("main",{className:"pa4 black-80 shadow-1 mt3"},n.a.createElement("h1",{className:"measure center ph5"},"Experience"),n.a.createElement("form",{className:"mt3",id:"basic-form"},n.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},n.a.createElement("div",{className:"mt2"},n.a.createElement("label",{className:"db fw6 lh-copy f6"},"Why should you be hired for this job?"),n.a.createElement("textarea",{onChange:function(e){return i(e.target.value)},className:"pa2 input-reset ba bg-transparent hover-bg-lightest-blue w-100",id:"interview",type:"url",placeholder:""})),n.a.createElement("div",{className:"mt2"},n.a.createElement("label",{className:"db fw6 lh-copy f6"},"Are you available for this job?"),n.a.createElement("textarea",{onChange:function(e){return o(e.target.value)},className:"pa2 input-reset ba bg-transparent hover-bg-lightest-blue w-100",type:"text",id:"avail"}))),n.a.createElement("div",null,n.a.createElement("input",{value:"Back",type:"submit",onClick:t,className:"grow pointer b--solid b--black-20 bg-white black pa2 b mr3"}),n.a.createElement("input",{value:"Save",onClick:function(e){e.preventDefault();var t={inter:m,avail:u};console.log(t),a()},type:"submit",className:"grow pointer b--solid b--black-20 bg-white black pa2 b"}))))},p=function(){var e=Object(l.useState)(1),a=Object(s.a)(e,2),t=a[0],r=a[1],c=function(){return r(t+1)},p=function(){return r(t-1)};return 1===t?n.a.createElement(m,{nextPage:c}):2===t?n.a.createElement(i,{nextStep:c,prevStep:p}):3===t?n.a.createElement(b,{nextStep:c,prevStep:p}):4==t?n.a.createElement("h1",{className:"center mt6"},"Response Successfully Recorded"):void 0};t(11);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.1868af5b.chunk.js.map