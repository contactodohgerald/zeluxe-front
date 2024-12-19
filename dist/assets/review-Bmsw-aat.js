import{d as m,q as p,b as o,j as e,N as g,R as w,w as j,x as f,S as L}from"./index-BA5QVVV7.js";import{C}from"./confirm-booking-payment-DGALm_Zh.js";import{C as h}from"./modal-B0eW36ol.js";const u=({reviewId:i})=>o.get(`/rentals-reviews/${i}`),v=i=>p({queryKey:["reviews",i],queryFn:()=>u({reviewId:i})}),d=({reviewId:i,queryConfig:t})=>m({...v(i),...t}),b=({reviewId:i})=>{var r,x,a,c;const t=d({reviewId:i}),l=(r=t==null?void 0:t.data)==null?void 0:r.data;return t.isLoading,!l||(l==null?void 0:l.length)===0?e.jsx(h,{children:e.jsx("p",{children:"No Listing Available"})}):e.jsx(e.Fragment,{children:e.jsx("section",{className:"relative pt-4",children:e.jsx("div",{className:"mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-6",children:e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"h-[2.93rem] w-[2.93rem] shrink-0 rounded-full",children:e.jsx("img",{src:g,alt:"",className:"h-[2.93rem] w-[2.93rem] shrink-0 rounded-full"})}),e.jsx("h2",{className:"font-raleway text-[1.01rem] font-bold leading-[1.2rem] tracking-[0.03em]",children:(x=l==null?void 0:l.user)==null?void 0:x.username})]}),e.jsx("div",{className:"mb-8",children:e.jsx("p",{className:"text-lg font-normal leading-8 text-gray-500",children:l==null?void 0:l.description})}),e.jsx("h4",{className:"font-raleway text-[1.01rem] font-bold leading-[1.2rem] tracking-[0.03em]",children:"Other Reviews"}),e.jsxs("div",{className:"mb-11 grid grid-cols-12",children:[e.jsx("div",{className:"col-span-12 flex items-center xl:col-span-4",children:e.jsxs("div",{className:"box mx-auto flex w-full flex-col gap-y-4 max-xl:max-w-3xl",children:[e.jsxs("div",{className:"flex w-full items-center",children:[e.jsx("p",{className:"mr-[2px] py-[1px] text-lg font-medium text-black",children:"5"}),e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{clipPath:"url(#clip0_12042_8589)",children:e.jsx("path",{d:"M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z",fill:"#FBBF24"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_12042_8589",children:e.jsx("rect",{width:"20",height:"20",fill:"white"})})})]}),e.jsx("p",{className:"ml-5 mr-3 h-2 w-full rounded-[30px] bg-gray-200 sm:min-w-[278px]",children:e.jsx("span",{className:"flex h-full w-[30%] rounded-[30px] bg-success"})}),e.jsx("p",{className:"mr-[2px] py-[1px] text-lg font-medium text-black",children:"30"})]}),e.jsxs("div",{className:"flex w-full items-center",children:[e.jsx("p",{className:"mr-[2px] py-[1px] text-lg font-medium text-black",children:"4"}),e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{clipPath:"url(#clip0_12042_8589)",children:e.jsx("path",{d:"M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z",fill:"#FBBF24"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_12042_8589",children:e.jsx("rect",{width:"20",height:"20",fill:"white"})})})]}),e.jsx("p",{className:"ml-5 mr-3 h-2 w-full rounded-[30px] bg-gray-200 xl:min-w-[278px]",children:e.jsx("span",{className:"flex h-full w-[40%] rounded-[30px] bg-success"})}),e.jsx("p",{className:"mr-[2px] py-[1px] text-lg font-medium text-black",children:"40"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"mr-[2px] py-[1px] text-lg font-medium text-black",children:"3"}),e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{clipPath:"url(#clip0_12042_8589)",children:e.jsx("path",{d:"M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z",fill:"#FBBF24"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_12042_8589",children:e.jsx("rect",{width:"20",height:"20",fill:"white"})})})]}),e.jsx("p",{className:"ml-5 mr-3 h-2 w-full rounded-[30px] bg-gray-200 xl:min-w-[278px]",children:e.jsx("span",{className:"flex h-full w-[20%] rounded-[30px] bg-success"})}),e.jsx("p",{className:"mr-[2px] py-[1px] text-lg font-medium text-black",children:"20"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"mr-[2px] py-[1px] text-lg font-medium text-black",children:"2"}),e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{clipPath:"url(#clip0_12042_8589)",children:e.jsx("path",{d:"M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z",fill:"#FBBF24"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_12042_8589",children:e.jsx("rect",{width:"20",height:"20",fill:"white"})})})]}),e.jsx("p",{className:"ml-5 mr-3 h-2 w-full rounded-[30px] bg-gray-200 xl:min-w-[278px]",children:e.jsx("span",{className:"flex h-full w-[16%] rounded-[30px] bg-success"})}),e.jsx("p",{className:"mr-[2px] py-[1px] text-lg font-medium text-black",children:"16"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"mr-[2px] py-[1px] text-lg font-medium text-black",children:"1"}),e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{clipPath:"url(#clip0_12042_8589)",children:e.jsx("path",{d:"M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z",fill:"#FBBF24"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_12042_8589",children:e.jsx("rect",{width:"20",height:"20",fill:"white"})})})]}),e.jsx("p",{className:"ml-5 mr-3 h-2 w-full rounded-[30px] bg-gray-200 xl:min-w-[278px]",children:e.jsx("span",{className:"flex h-full w-[8%] rounded-[30px] bg-success"})}),e.jsx("p",{className:"mr-[2px] py-[1px] text-lg font-medium text-black",children:"8"})]})]})}),e.jsx("div",{className:"col-span-12 min-h-[230px] w-full max-xl:mt-8 xl:col-span-8 xl:pl-8",children:e.jsxs("div",{className:"grid h-full w-full grid-cols-12 rounded-3xl bg-gray-100 px-8 max-xl:mx-auto max-xl:max-w-3xl max-lg:py-8",children:[e.jsx("div",{className:"col-span-12 flex items-center md:col-span-8",children:e.jsxs("div",{className:"flex h-full w-full flex-col items-center max-lg:justify-center sm:flex-row",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center border-gray-200 sm:border-r sm:pr-3",children:[e.jsx("h2",{className:"font-manrope mb-4 text-center text-5xl font-bold text-black",children:"4.3"}),e.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_13624_3137)",children:e.jsx("path",{d:"M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z",fill:"#FBBF24"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_13624_3137",children:e.jsx("rect",{width:"36",height:"36",fill:"white"})})})]}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_13624_3137)",children:e.jsx("path",{d:"M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z",fill:"#FBBF24"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_13624_3137",children:e.jsx("rect",{width:"36",height:"36",fill:"white"})})})]}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_13624_3137)",children:e.jsx("path",{d:"M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z",fill:"#FBBF24"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_13624_3137",children:e.jsx("rect",{width:"36",height:"36",fill:"white"})})})]}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_13624_3137)",children:e.jsx("path",{d:"M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z",fill:"#FBBF24"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_13624_3137",children:e.jsx("rect",{width:"36",height:"36",fill:"white"})})})]}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_13624_3137)",children:e.jsx("path",{d:"M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z",fill:"#FBBF24"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_13624_3137",children:e.jsx("rect",{width:"36",height:"36",fill:"white"})})})]})]}),e.jsx("p",{className:"text-lg font-normal leading-8 text-gray-400",children:"46 Ratings"})]}),e.jsxs("div",{className:"flex flex-col items-center justify-center border-gray-200 sm:border-l sm:pl-3",children:[e.jsx("h2",{className:"font-manrope mb-4 text-center text-5xl font-bold text-black",children:"4.8"}),e.jsxs("div",{className:"mb-4 flex items-center gap-3",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_13624_3137)",children:e.jsx("path",{d:"M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z",fill:"#FBBF24"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_13624_3137",children:e.jsx("rect",{width:"36",height:"36",fill:"white"})})})]}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_13624_3137)",children:e.jsx("path",{d:"M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z",fill:"#FBBF24"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_13624_3137",children:e.jsx("rect",{width:"36",height:"36",fill:"white"})})})]}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_13624_3137)",children:e.jsx("path",{d:"M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z",fill:"#FBBF24"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_13624_3137",children:e.jsx("rect",{width:"36",height:"36",fill:"white"})})})]}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_13624_3137)",children:e.jsx("path",{d:"M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z",fill:"#FBBF24"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_13624_3137",children:e.jsx("rect",{width:"36",height:"36",fill:"white"})})})]}),e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_13624_3137)",children:e.jsx("path",{d:"M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z",fill:"#FBBF24"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_13624_3137",children:e.jsx("rect",{width:"36",height:"36",fill:"white"})})})]})]}),e.jsx("p",{className:"text-lg font-normal leading-8 text-gray-400",children:"Last Month"})]})]})}),e.jsx("div",{className:"col-span-12 max-lg:mt-8 md:col-span-4 md:pl-8",children:e.jsxs("div",{className:"flex h-full w-full flex-col items-center justify-center",children:[e.jsx("button",{className:"mb-6 w-full whitespace-nowrap rounded-full bg-success px-6 py-4 text-center text-lg font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-success hover:shadow-green-400",children:"Write A Review"}),e.jsx("button",{className:"w-full whitespace-nowrap rounded-full bg-white px-6 py-4 text-center text-lg font-semibold text-success shadow-sm shadow-transparent transition-all duration-500 hover:bg-green-100 hover:shadow-green-200",children:"See All Reviews"})]})})]})})]}),e.jsxs("div",{className:"border-b border-gray-200 pb-8 max-xl:mx-auto max-xl:max-w-3xl",children:[e.jsx("h4",{className:"font-manrope mb-6 text-3xl font-semibold leading-10 text-black",children:"Most helpful positive review"}),(a=l==null?void 0:l.other_reviews)==null?void 0:a.map(s=>{var n;return e.jsxs(w.Fragment,{children:[e.jsxs("div",{className:"mb-4 flex flex-col justify-between sm:flex-row sm:items-center",children:[e.jsx("div",{className:"flex items-center gap-3",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_13624_2974)",children:e.jsx("path",{d:"M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z",fill:"#FBBF24"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_13624_2974",children:e.jsx("rect",{width:"30",height:"30",fill:"white"})})})]})}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("h6",{className:"text-lg font-semibold leading-8 text-black",children:["@",(n=s==null?void 0:s.user)==null?void 0:n.username]}),e.jsx("p",{className:"text-base font-medium leading-7 text-gray-400",children:j(s==null?void 0:s.created_at)})]})]}),e.jsx("p",{className:"text-lg font-normal leading-8 text-gray-500",children:s==null?void 0:s.description})]},s==null?void 0:s.id)})]}),e.jsxs("div",{className:"flex flex-col items-center justify-between pt-8 max-xl:mx-auto max-xl:max-w-3xl sm:flex-row",children:[e.jsxs("p",{className:"py-[1px] text-lg font-normal text-black",children:[(c=l==null?void 0:l.other_reviews)==null?void 0:c.length," reviews"]}),e.jsx("form",{children:e.jsx("div",{className:"flex",children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute -left-0 top-0 px-2 py-2",children:e.jsx("p",{className:"text-lg font-normal leading-8 text-gray-500",children:"Sort by:"})}),e.jsx("input",{type:"text",className:"shadow-xs block h-11 w-60 cursor-pointer rounded-full bg-transparent py-2.5 pl-20 pr-4 text-lg font-medium leading-8 text-black placeholder-black focus:outline-gray-200",placeholder:"Most Relevant"}),e.jsx("div",{id:"dropdown-button","data-target":"dropdown",className:"dropdown-toggle absolute right-0 top-2 z-10 inline-flex flex-shrink-0 cursor-pointer items-center bg-transparent px-4 py-2.5 pl-2 text-center text-base font-medium text-gray-900",children:e.jsx("svg",{className:"ml-2",width:"12",height:"7",viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5",stroke:"#6B7280",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("div",{id:"dropdown",className:"absolute right-0 top-9 z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700",children:e.jsxs("ul",{className:"py-2 text-sm text-gray-700 dark:text-gray-200","aria-labelledby":"dropdown-button",children:[e.jsx("li",{children:e.jsx("a",{href:"#",className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"Most Relevant"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"last week"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:"oldest"})})]})})]})})})]})]})})})})},B=()=>{const t=f().reviewId;return d({reviewId:t}).isLoading?e.jsx("div",{className:"flex h-48 w-full items-center justify-center",children:e.jsx(L,{size:"lg"})}):e.jsx(C,{title:"",children:e.jsx(h,{className:"mb-20 mt-2 h-full w-full border bg-white shadow-md",children:e.jsx(b,{reviewId:t})})})};export{B as ReviewRoute};
