import{r as l,j as e,c as m,S as p,d as x,q as f,b as g}from"./index-BQGAvRb0.js";import{c as y,S as b}from"./get-reviews-CP1KRBQV.js";const h=y("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-white shadow hover:bg-primary/90",destructive:"bg-red-500",outline:"border border-input shadow-sm",secondary:"bg-secondary shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}}),v=l.forwardRef(({className:s,variant:a,size:n,asChild:o=!1,children:i,isLoading:t,icon:r,...u},d)=>{const c=o?b:"button";return e.jsxs(c,{className:m(h({variant:a,size:n,className:s})),ref:d,...u,children:[t&&e.jsx(p,{size:"sm",className:"text-current"}),!t&&r&&e.jsx("span",{className:"mr-2",children:r}),e.jsx("span",{className:"mx-2",children:i})]})});v.displayName="Button";const j=()=>g.get("/categories"),w=()=>f({queryKey:["categories"],queryFn:()=>j()}),z=({queryConfig:s={}}={})=>x({...w(),...s});export{v as B,z as u};