"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[823],{2070:function(e,n,r){r.d(n,{Z:function(){return s}});var i,t=r(168),a=r(6088).Z.div(i||(i=(0,t.Z)(["\n  margin: 0 auto;\n  padding: 0 15px;\n  max-width: 1200px;\n"]))),d=r(184);function s(e){var n=e.children;return(0,d.jsx)(a,{children:n})}},4160:function(e,n,r){r.d(n,{Z:function(){return s}});var i,t=r(168),a=r(6088).Z.h2(i||(i=(0,t.Z)(["\n  font-family: 'Permanent Marker', cursive;\n  margin: 0 auto;\n  text-align: center;\n"]))),d=r(184);function s(e){var n=e.title;return(0,d.jsx)(a,{children:n})}},7944:function(e,n,r){r.d(n,{M8:function(){return t},oz:function(){return d},tp:function(){return a}});var i=r(2797),t=i.Ry({email:i.Z_().email().required(),password:i.Z_().min(8).required()}).required(),a=i.Ry({email:i.Z_().email().required(),password:i.Z_().min(8).required(),name:i.Z_().required()}).required(),d=i.Ry({name:i.Z_().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),number:i.Z_().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").required()}).required()},9823:function(e,n,r){r.r(n),r.d(n,{default:function(){return J}});var i,t,a,d,s,l=r(885),o=r(2791),u=r(9434),c=r(6720),x=r(1134),m=r(4695),f=r(5985),h=r(7322),Z=r(3811),j=r(168),p=r(6088),b=r(6650),v=(0,p.Z)(b.Z)(i||(i=(0,j.Z)(["\n  padding: 8px 16.5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),g=p.Z.div(t||(t=(0,j.Z)(["\n  font-family: 'Patrick Hand', cursive;\n  font-size: 20px;\n"]))),w=p.Z.span(a||(a=(0,j.Z)(["\n  font-size: 22px;\n"]))),y=p.Z.span(d||(d=(0,j.Z)(["\n  margin-left: 10px;\n"]))),q=p.Z.ul(s||(s=(0,j.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),_=r(184);function k(e){var n=e.name,r=e.number,i=e.id,t=e.onEdit,a=(0,u.I0)(),d=function(e){t(e.currentTarget.dataset.id)};return(0,_.jsxs)(v,{as:"li",elevation:3,children:[(0,_.jsxs)(g,{"data-id":i,onClick:d,children:[(0,_.jsxs)(w,{children:[n,": "]}),(0,_.jsx)(y,{children:r})]}),(0,_.jsxs)(q,{children:[(0,_.jsx)("li",{children:(0,_.jsx)(Z.Z,{"aria-label":"call",color:"success",href:"tel: ".concat(r),children:(0,_.jsx)(h.P8R,{})})}),(0,_.jsx)("li",{children:(0,_.jsx)(Z.Z,{"aria-label":"edit","data-id":i,onClick:d,children:(0,_.jsx)(h.cqP,{})})}),(0,_.jsx)("li",{children:(0,_.jsx)(Z.Z,{"aria-label":"delete",color:"error","data-id":i,onClick:function(e){a((0,c.xX)(e.currentTarget.dataset.id))},children:(0,_.jsx)(h.ZkW,{})})})]})]})}var C=r(2070),S=r(5095),z=r.n(S),A=r(228),P=r(5316),E=r(4160),I=r(9947);function N(){var e=(0,u.I0)();return(0,_.jsxs)(A.Z,{sx:{padding:"10px",mb:"25px"},children:[(0,_.jsx)(E.Z,{title:"Filter"}),(0,_.jsx)(A.Z,{sx:{textAlign:"center"},children:(0,_.jsx)(P.Z,{id:"standard-basic",label:"Filter",variant:"standard",onChange:z()((function(n){e((0,I.zK)(n.target.value))}),300)})})]})}var Q=r(1413),R=r(7614),F=r(9276),K=r(6916),M=function(e){return e.contacts.addet},X=(0,K.P1)([function(e){return e.contacts.items},function(e){return e.filter.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}));function B(e){var n=e.control,r=e.handleSubmit,i=e.onSubmit,t=e.editContacts,a=(0,u.v9)(M);return(0,_.jsx)(b.Z,{as:"li",elevation:3,children:(0,_.jsx)("form",{onSubmit:r(i),children:(0,_.jsxs)(F.Z,{sx:{display:"flex"},children:[(0,_.jsxs)(F.Z,{sx:{width:"75%"},children:[(0,_.jsx)(x.Qr,{control:n,type:"text",name:"name",render:function(e){var n=e.field;return(0,_.jsx)(P.Z,(0,Q.Z)((0,Q.Z)({sx:{width:"50%"}},n),{},{disabled:t,required:!0,id:"outlined-required",label:"Name"}))}}),(0,_.jsx)(x.Qr,{control:n,type:"tel",name:"number",render:function(e){var n=e.field;return(0,_.jsx)(P.Z,(0,Q.Z)((0,Q.Z)({sx:{width:"50%"}},n),{},{disabled:t,required:!0,id:"outlined-required",label:"Phone Number"}))}})]}),(0,_.jsx)(R.Z,{sx:{width:"25%"},type:"submit",loading:a,disabled:a||t,variant:"outlined",children:"Add"})]})})})}var L,T=r(7944);function V(e){var n,r,i=e.onEdit,t=e.id,a=e.name,d=e.number,s=(0,u.I0)(),l=(0,x.cI)({resolver:(0,m.X)(T.oz),defaultValues:{name:a,number:d}}),o=l.control,h=l.handleSubmit,Z=l.formState.errors,j=(null===(n=Z.name)||void 0===n?void 0:n.message)||(null===(r=Z.number)||void 0===r?void 0:r.message);return f.Am.warn(j),(0,_.jsx)(b.Z,{as:"li",elevation:3,children:(0,_.jsx)("form",{onSubmit:h((function(e){s((0,c.KY)({id:t,data:e})),i(!1)})),children:(0,_.jsxs)(F.Z,{sx:{display:"flex"},children:[(0,_.jsxs)(F.Z,{sx:{width:"75%"},children:[(0,_.jsx)(x.Qr,{control:o,type:"text",name:"name",render:function(e){var n=e.field;return(0,_.jsx)(P.Z,(0,Q.Z)((0,Q.Z)({sx:{width:"50%"}},n),{},{required:!0,id:"outlined-required",label:"Name"}))}}),(0,_.jsx)(x.Qr,{control:o,type:"tel",name:"number",render:function(e){var n=e.field;return(0,_.jsx)(P.Z,(0,Q.Z)((0,Q.Z)({sx:{width:"50%"}},n),{},{required:!0,id:"outlined-required",label:"Phone Number"}))}})]}),(0,_.jsx)(R.Z,{sx:{width:"25%"},type:"submit",variant:"outlined",children:"Edit"}),(0,_.jsx)(R.Z,{sx:{width:"25%"},type:"button",variant:"outlined",color:"error",onClick:function(){i(!1)},children:"Back"})]})})})}var H=p.Z.ul(L||(L=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  padding: 25px 0;\n"])));function J(){var e,n,r=(0,o.useState)(),i=(0,l.Z)(r,2),t=i[0],a=i[1],d=(0,u.I0)(),s=(0,x.cI)({resolver:(0,m.X)(T.oz),defaultValues:{name:"",number:""}}),h=s.control,Z=s.handleSubmit,j=s.reset,p=s.formState.errors,b=(0,u.v9)(X);(0,o.useEffect)((function(){d((0,c.K2)())}),[d]);var v=(null===(e=p.name)||void 0===e?void 0:e.message)||(null===(n=p.number)||void 0===n?void 0:n.message);return f.Am.warn(v),(0,_.jsxs)(C.Z,{children:[(0,_.jsx)(N,{}),(0,_.jsxs)("section",{children:[(0,_.jsx)(E.Z,{title:"contacts"}),(0,_.jsxs)(H,{children:[(0,_.jsx)(B,{editContacts:!!t,control:h,handleSubmit:Z,onSubmit:function(e){d((0,c.je)(e)),j()}}),b.map((function(e){var n=e.id,r=e.name,i=e.number;return t!==n?(0,_.jsx)(k,{name:r,number:i,id:n,onEdit:a},n):(0,_.jsx)(V,{id:n,name:r,number:i,onEdit:a},n)}))]})]})]})}}}]);
//# sourceMappingURL=823.ec583792.chunk.js.map