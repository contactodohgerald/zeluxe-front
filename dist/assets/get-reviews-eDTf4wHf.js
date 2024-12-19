import{j as s,bz as l,s as p,bA as g,L as h,p as j,bB as y,z as t,u as b,a as w,b as x,bC as N,d as v,q as k}from"./index-BA5QVVV7.js";import{C as R}from"./confirm-booking-payment-DGALm_Zh.js";import{C as u}from"./modal-B0eW36ol.js";import"./get-countries-CXopN7Dk.js";import"./get-category--d4SC50h.js";const _=({rentals:r})=>s.jsx(s.Fragment,{children:r==null?void 0:r.map(e=>{var i,o,m,n,a,c;return s.jsx(u,{className:"mb-[1.63rem] box-border w-full bg-[#D9D9D92B]",children:s.jsxs("div",{className:"flex flex-col sm:flex-row md:items-center",children:[s.jsx("div",{className:"mr-[1.4rem]",children:s.jsx("img",{src:((i=e==null?void 0:e.images[0])==null?void 0:i.url)||l,className:"h-[10.3rem] max-w-[13.85rem] rounded-[1.41rem] object-cover",alt:`${e.images} Images`,onError:f=>{const d=f.target;d.onerror=null,d.src=l}})}),s.jsxs("div",{className:"flex-grow",children:[s.jsx("h4",{className:`mb-[0.63rem] ${(e==null?void 0:e.name.length)>=15?"overflow-hidden text-ellipsis":""} max-w-xs text-nowrap font-raleway text-[1.5rem] font-bold leading-[1.8rem] tracking-[0.03em] text-secondary`,children:e==null?void 0:e.name}),s.jsxs("p",{className:"mb-[0.63rem] font-montserrat text-[1.1rem] font-semibold leading-[1.32rem] tracking-[0.03em] text-primary",children:["₦",Number(e==null?void 0:e.price),s.jsx("span",{className:"font-montserrat text-[0.5rem] font-medium leading-[0.8rem] tracking-[0.03em] text-secondary",children:"/Per Annum"})]}),s.jsxs(p,{className:"mb-[0.58rem] rounded-[1.2rem] bg-primary p-[0.6rem] font-raleway text-[0.63rem] font-medium leading-[0.74rem] tracking-[0.03em] text-white backdrop-blur-[10.09px] backdrop-filter",children:[(o=e==null?void 0:e.address)==null?void 0:o.nearest_landmark,", ",(m=e==null?void 0:e.address)==null?void 0:m.city]}),s.jsxs("div",{className:"mb-[0.63rem] flex items-center",children:[s.jsx("p",{className:"font-raleway text-[0.55rem] font-bold leading-[0.65rem] tracking-[0.03em] text-black",children:e!=null&&e.owner.is_verified?"verified":"not verified"}),s.jsx("p",{className:"",children:e!=null&&e.owner.is_verified?s.jsx(g,{className:"ml-2"}):null})]}),s.jsx(h,{to:j.app.rental.getHref(e==null?void 0:e.id),className:"flex cursor-pointer items-center font-raleway text-[0.4rem] font-[400] leading-[0.46rem] tracking-[0.03em] text-primary underline hover:text-primary hover:underline",children:"More Details"})]}),s.jsxs("div",{className:"mt-3 flex flex-col md:mt-32",children:[s.jsx("div",{className:"mb-[0.6rem]",children:s.jsxs("p",{className:"text-nowrap font-raleway text-[0.73rem] font-[400] leading-[0.63rem] tracking-[0.03em] text-secondary",children:[(n=e==null?void 0:e.owner)==null?void 0:n.first_name," ",(a=e==null?void 0:e.owner)==null?void 0:a.last_name]})}),s.jsx("div",{className:"mb-[0.6rem]",children:s.jsxs("p",{className:"flex items-center text-nowrap font-raleway text-[0.73rem] font-[400] leading-[0.63rem] tracking-[0.03em] text-secondary",children:[s.jsx(y,{className:"mr-2"})," ",s.jsxs("span",{children:[(c=e==null?void 0:e.owner)==null?void 0:c.phone," "]})]})})]})]},e.id)},e.id)})}),M=t.object({location:t.string().optional(),category:t.string().optional(),min_price:t.string().optional(),max_price:t.string().optional(),keyword:t.string().min(3,"keyword field is required"),bedrooms:t.string().optional()}),C=({data:r})=>x.post("/filter-my-rentals",r),A=({mutationConfig:r}={})=>{const e=b(),{onSuccess:i,...o}=r||{};return w({onSuccess:(...m)=>{e.invalidateQueries({queryKey:["rentals"]}),i==null||i(...m)},...o,mutationFn:C})},q=()=>{var i;const e=(i=N().state)==null?void 0:i.rentals;return!e||e.length===0?s.jsx("div",{className:"flex h-64 items-center justify-center",children:s.jsx("p",{children:"No results found"})}):s.jsx(s.Fragment,{children:s.jsx(_,{rentals:e})})},L=()=>s.jsx(R,{title:"Search Result",children:s.jsx(u,{className:"mt-4",children:s.jsx(q,{})})}),B=Object.freeze(Object.defineProperty({__proto__:null,SearchRentalsRoute:L},Symbol.toStringTag,{value:"Module"})),S=()=>x.get("/rentals-reviews"),F=()=>k({queryKey:["reviews"],queryFn:()=>S()}),E=({queryConfig:r={}}={})=>v({...F(),...r});export{_ as R,A as a,M as f,B as s,E as u};
