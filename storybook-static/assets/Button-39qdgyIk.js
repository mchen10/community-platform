import{j as t}from"./jsx-runtime-CexXSJP5.js";import{I as i}from"./Icon-CXLq-5W7.js";import{B as c,F as v,T as s}from"./theme-ui-components.esm-D5Q63Fx1.js";const u={small:{px:2,py:1,pl:7,fontSize:1,height:"2rem"},default:{px:3,pl:9},large:{px:4,py:3,pl:10,fontSize:4,height:"3.5rem"}};function o(e,l){if(!u[`${e}`]&&!l)return{};if(!u[`${e}`]&&l)return{px:3,pl:9};const a={...u[`${e}`]};return l||delete a.pl,a}function d(e){return"large"===e?1.25:1}function p(e,l){const a={...e};return l.forEach((e=>{a[e]&&delete a[e]})),a}const r=e=>{var l;const[a]=Object.keys(e).filter((e=>Object.prototype.hasOwnProperty.call(u,e)));return t.jsxs(c,{...p(e,["small","large","showIconOnly","iconColor"]),sx:{...o(a,!!e.icon),...e.showIconOnly?{pr:0}:{},...e.sx},children:[e.icon&&t.jsx(v,{"aria-hidden":!0,sx:{position:"absolute",top:0,left:0,height:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center",px:(null==(l=o(a,!!e.icon))?void 0:l.px)||0,boxSizing:"border-box",fontSize:0,maxWidth:"100%",lineHeight:0,transform:`translateY(-1px) scale(${d(a)})`,pointerEvents:"none"},children:t.jsx(i,{glyph:e.icon,color:e.iconColor})}),t.jsx(s,{sx:{...e.showIconOnly?{clipPath:"inset(100%)",clip:"rect(1px, 1px, 1px, 1px)",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",width:"1px"}:{}},children:e.children})]})};try{r.displayName="Button",r.__docgenInfo={description:"",displayName:"Button",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"account-circle"'},{value:'"account"'},{value:'"add"'},{value:'"arrow-curved-bottom-right"'},{value:'"arrow-back"'},{value:'"arrow-down"'},{value:'"arrow-forward"'},{value:'"arrow-full-down"'},{value:'"arrow-full-up"'},{value:'"bazar"'},{value:'"check"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"close"'},{value:'"comment"'},{value:'"contact"'},{value:'"discord"'},{value:'"delete"'},{value:'"difficulty"'},{value:'"download"'},{value:'"download-cloud"'},{value:'"edit"'},{value:'"email"'},{value:'"email-outline"'},{value:'"employee"'},{value:'"external-link"'},{value:'"external-url"'},{value:'"facebook"'},{value:'"filter"'},{value:'"flag-unknown"'},{value:'"hide"'},{value:'"hyperlink"'},{value:'"image"'},{value:'"impact"'},{value:'"instagram"'},{value:'"loading"'},{value:'"location-on"'},{value:'"lock"'},{value:'"machine"'},{value:'"mail-outline"'},{value:'"map"'},{value:'"menu"'},{value:'"more-vert"'},{value:'"notifications"'},{value:'"patreon"'},{value:'"pdf"'},{value:'"plastic"'},{value:'"profile"'},{value:'"revenue"'},{value:'"show"'},{value:'"slack"'},{value:'"sliders"'},{value:'"social-media"'},{value:'"star"'},{value:'"star-active"'},{value:'"step"'},{value:'"supporter"'},{value:'"thunderbolt"'},{value:'"thunderbolt-grey"'},{value:'"time"'},{value:'"turned-in"'},{value:'"update"'},{value:'"upload"'},{value:'"useful"'},{value:'"verified"'},{value:'"view"'},{value:'"volunteer"'},{value:'"website"'},{value:'"search"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean"}},large:{defaultValue:null,description:"",name:"large",required:!1,type:{name:"boolean"}},showIconOnly:{defaultValue:null,description:"",name:"showIconOnly",required:!1,type:{name:"boolean"}},iconColor:{defaultValue:null,description:"",name:"iconColor",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}}}}}catch{}export{r as B};