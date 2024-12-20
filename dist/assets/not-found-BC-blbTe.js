import{r as N,k,f as S,i as A,ar as w,bw as F,p as s,j as e,L as n,c as _,S as C}from"./index-BQGAvRb0.js";import{F as x}from"./get-listings-BeTtOIxE.js";import{h,s as I}from"./get-states-C-Ja6L8L.js";const v="fa fa-plus-circle",y=[{text:"Home",path:s.home.getHref()},{text:"About Us",path:s.about.getHref()},{text:"Contact Us",path:s.contact.getHref()}],$=()=>{var j;const[a,t]=N.useState(0),[l,c]=N.useState(!1),{isAuthenticated:r,setIsAuthenticated:f}=k(),{addNotification:L}=S(),H=A(),m=w(),g=F({onSuccess(){L({type:"success",title:"success",message:"Logout successfully"}),H(s.auth.login.getHref())}}),d=(j=m==null?void 0:m.data)==null?void 0:j.data;return e.jsxs(e.Fragment,{children:[e.jsx("header",{children:e.jsx("div",{className:"container mx-auto px-4 py-2",children:e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("nav",{className:"navigation relative flex w-full flex-wrap items-center justify-between px-4 py-[0.5rem]",children:[e.jsx(n,{className:"flex-shrink-0",to:s.home.getHref(),children:e.jsx("img",{src:d==null?void 0:d.site_logo,alt:"Dnest homes",className:"h-10"})}),e.jsxs("button",{onClick:()=>c(!l),type:"button",className:"inline-flex h-10 w-14 items-center justify-center rounded-lg border p-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden","aria-controls":"navbar-default","aria-expanded":"false",children:[e.jsx("span",{className:"sr-only",children:"Open main menu"}),e.jsx("svg",{className:"h-5 w-5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 17 14",children:e.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 1h15M1 7h15M1 13h15"})})]}),e.jsxs("div",{className:"hidden md:items-center lg:flex lg:flex-grow",children:[e.jsx("ul",{className:"flex flex-col lg:ml-auto lg:flex-row",children:e.jsx("li",{className:"nav-item",children:y.map((i,o)=>e.jsx(n,{to:i.path,className:`${a===o?"text-link":"text-[#00000080] hover:text-grey-6"} cursor-pointer px-4 py-2 transition-colors`,onClick:()=>t(o),children:i.text},o))})}),e.jsxs("ul",{className:"flex flex-col lg:ml-auto lg:flex-row",children:[r?e.jsx("li",{className:"nav-item",children:e.jsx(n,{className:"nav-link login-button",to:"#",onClick:()=>{f(!1),g.mutate()},children:"Logout"})}):e.jsx("li",{className:"nav-item",children:e.jsx(n,{className:"nav-link login-button",to:s.auth.login.getHref(),children:"Portal Login"})}),e.jsx("li",{className:"nav-item",children:e.jsxs(n,{className:"nav-link add-button text-white",to:s.app.owner.addListings.getHref(),children:[e.jsx(x,{icon:v})," ",e.jsx("span",{className:"ml-2",children:"Add Listing"})]})})]})]})]})})})}),e.jsxs("div",{className:`container mx-auto p-8 transition-transform duration-300 ease-in-out lg:hidden ${l?"block translate-y-0 opacity-100":"hidden -translate-y-full opacity-0"}`,children:[e.jsx("ul",{className:"flex flex-col space-y-2",children:e.jsx("li",{className:"flex flex-col",children:y.map((i,o)=>e.jsx(n,{to:i.path,className:`${a===o?"text-link":"text-[#00000080] hover:text-grey-6"} cursor-pointer px-4 py-2 transition-colors`,onClick:()=>t(o),children:i.text},o))})}),e.jsxs("ul",{className:"flex flex-col space-y-2 md:ml-auto md:flex-row",children:[r?e.jsx("li",{className:"",children:e.jsx(n,{className:"nav-link login-button w-[200px]",to:"#",onClick:()=>{g.mutate(),f(!1)},children:"Logout"})}):e.jsx("li",{className:"mt-[6px]",children:e.jsx(n,{className:"nav-link login-button w-[200px]",to:s.auth.login.getHref(),children:"Portal Login"})}),e.jsx("li",{className:"",children:e.jsxs(n,{className:"nav-link add-button w-[200px] text-white",to:s.app.owner.addListings.getHref(),children:[e.jsx(x,{icon:v})," ",e.jsx("span",{className:"ml-2",children:"Add Listing"})]})})]})]})]})},p=({className:a,children:t,...l})=>e.jsx(n,{className:_("text-[#6c757d] hover:underline"),...l,children:t}),b=({title:a,links:t})=>e.jsxs("div",{className:"col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 text-center",children:[e.jsx("h6",{className:"mb-4 uppercase text-[#008000]",children:a}),t.map(({label:l,to:c})=>e.jsx("p",{className:"mb-4 mt-0",children:e.jsx(p,{to:c,children:l})},l))]}),u=({icon:a,text:t,link:l})=>e.jsx("p",{className:"text-grey-5",children:l?e.jsxs(p,{to:l,children:[e.jsx(x,{icon:a}),e.jsx("span",{className:"ml-2",children:t})]}):e.jsxs(e.Fragment,{children:[e.jsx(x,{icon:a}),e.jsx("span",{className:"ml-2",children:t})]})}),P=()=>{var c;const a=w(),t=(c=a==null?void 0:a.data)==null?void 0:c.data,{isAuthenticated:l}=k();return a.isLoading?e.jsx("div",{className:"flex h-48 w-full items-center justify-center",children:e.jsx(C,{size:"lg"})}):e.jsxs("footer",{className:"bg-body-tertiary custom-footer text-center text-muted lg:text-start",children:[e.jsx("div",{className:"container mx-auto mt-2 px-[15px] text-center md:text-start",children:e.jsxs("div",{className:"-mx-3 mt-3 flex flex-wrap",children:[e.jsxs("div",{className:"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 text-center",children:[e.jsx("img",{src:t==null?void 0:t.site_logo,alt:"Logo",className:"mx-auto mb-4 h-10"}),e.jsx("p",{className:"text-grey-5",children:"Our goal is to offer a home away from home experience, with the convenience of hotel-like services."})]}),e.jsx(b,{title:"Products",links:[{label:"Apartments",to:"#!"},...l?[]:[{label:"Register",to:s.auth.chooseAccount.getHref()},{label:"Login",to:s.auth.login.getHref()}]]}),e.jsx(b,{title:"Useful Links",links:[{label:"Terms",to:s.terms.getHref()},{label:"Privacy",to:s.privacy.getHref()}]}),e.jsxs("div",{className:"col-md-4 col-lg-3 col-xl-3 mx-auto mb-4 text-center",children:[e.jsx("h6",{className:"mb-4 uppercase",style:{color:"green"},children:"Contact"}),e.jsx(u,{icon:h.home,text:`${t==null?void 0:t.address}`,link:"#"}),e.jsx(u,{icon:h.envelope,text:`${t==null?void 0:t.site_email}`,link:`mailto:${t==null?void 0:t.support_email}`}),e.jsx(u,{icon:h.phone,text:`${t==null?void 0:t.site_phone}`,link:"#"})]})]})}),e.jsx("div",{className:"border-t border-gray-200 py-3",children:e.jsx("div",{className:"flex justify-center space-x-4 p-2",children:I.map(r=>e.jsx(p,{target:"_blank",to:r.link,className:"text-gray-600 hover:text-gray-800",children:e.jsx(x,{icon:r.name})},r.name))})}),e.jsx("div",{className:"container mx-auto mt-2 text-center",children:e.jsx("p",{className:"text-grey-5",children:"© 2024 | Zeltech Innovations Ltd, All rights reserved."})})]})},M=()=>e.jsxs(e.Fragment,{children:[e.jsx($,{}),e.jsx("main",{className:"grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl",children:"404 - Not Found"}),e.jsx("p",{className:"mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8",children:"Sorry, we couldn’t find the page you’re looking for."}),e.jsx("div",{className:"mt-10 flex items-center justify-center gap-x-6",children:e.jsx(n,{to:s.home.getHref(),className:"rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-success focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",replace:!0,children:"Go to home"})})]})}),e.jsx(P,{})]}),z=Object.freeze(Object.defineProperty({__proto__:null,NotFoundRoute:M},Symbol.toStringTag,{value:"Module"}));export{P as F,$ as H,z as n};