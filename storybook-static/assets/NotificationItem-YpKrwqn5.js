import{j as t}from"./jsx-runtime-CexXSJP5.js";import{I as n}from"./Icon-CXLq-5W7.js";import{a as i}from"./emotion-element-43c6fea0.browser.esm-B3fc_abn.js";import{F as o,a as s}from"./theme-ui-components.esm-D5Q63Fx1.js";function u(e){return["howto_useful","research_useful"].includes(e)?"useful":["howto_approved","map_pin_approved","research_approved"].includes(e)?"check":["howto_needs_updates","map_pin_needs_updates","research_needs_updates"].includes(e)?"edit":"research_update"===e?"thunderbolt":"comment"}const r=e=>{const{type:a}=e;return t.jsx(o,{bg:"white","data-cy":"notification",sx:{flexDirection:"column",fontSize:"12px",marginBottom:2,paddingBottom:2,borderBottom:"1px solid #c7c7c7",fontFamily:"Inter, sans-serif"},children:t.jsx(i,{theme:{styles:{a:{textDecoration:"underline",color:"#61646b",display:"inline","&:hover":{textDecoration:"none"}}}},children:t.jsxs(o,{sx:{gap:1,flexDirection:"row"},children:[t.jsx(n,{glyph:u(a),size:15}),t.jsx(s,{sx:{textAlign:"left"},children:e.children})]})})})};try{r.displayName="NotificationItem",r.__docgenInfo={description:"",displayName:"NotificationItem",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"new_comment"'},{value:'"howto_useful"'},{value:'"howto_mention"'},{value:'"howto_approved"'},{value:'"howto_needs_updates"'},{value:'"map_pin_approved"'},{value:'"map_pin_needs_updates"'},{value:'"new_comment_discussion"'},{value:'"new_comment_research"'},{value:'"research_useful"'},{value:'"research_mention"'},{value:'"research_update"'},{value:'"research_approved"'},{value:'"research_needs_updates"'}]}}}}}catch{}export{r as N};