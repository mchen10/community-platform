import{j as e}from"./jsx-runtime-CexXSJP5.js";import{B as p}from"./Button-39qdgyIk.js";import{E as x}from"./ExternalLink-DFvpNOKB.js";import{C as m,F as t,c as f,T as a}from"./theme-ui-components.esm-D5Q63Fx1.js";const h="https://donorbox.org/embed/onearmy?a=b",o="Support our work",g="Thank you for helping to make this possible",y="Download",i=n=>{const{body:i,callback:r,iframeSrc:s,imageURL:d,link:l}=n,c={allowpaymentrequest:"allowpaymentrequest",allow:"payment","data-donorbox-id":"DonorBox-f2","data-testid":"donationRequestIframe",frameBorder:"0",name:"donorbox",seamless:!0,src:s||h};return e.jsxs(e.Fragment,{children:[e.jsxs(m,{sx:{overflowY:"auto",scrollbarWidth:"thin",borderRadius:"4px 4px 0 0"},"data-cy":"DonationRequest","data-testid":"DonationRequest",children:[e.jsx("script",{src:"https://donorbox.org/widget.js","data-paypalexpress":"false"}),e.jsxs(t,{sx:{flexDirection:["column","row"]},children:[e.jsxs(t,{sx:{flexDirection:"column",flex:1},children:[d&&e.jsx(t,{sx:{display:["none","inline"]},children:e.jsx(f,{loading:"lazy",ratio:16/9,src:d,alt:o,"data-testid":"donationRequestImage"})}),e.jsxs(a,{sx:{padding:[2,4,6]},children:[e.jsx(a,{as:"h1",children:o}),e.jsx("p",{children:i}),e.jsx("p",{children:g})]})]}),e.jsx(t,{sx:{borderLeft:[0,"2px solid"],minHeight:"542px",width:["100%","350px","400px"]},children:e.jsx("iframe",{...c,loading:"lazy",style:{border:"0",overflow:"scroll",width:"100%"}})})]})]}),e.jsx(t,{sx:{backgroundColor:"offWhite",borderRadius:"0 0 4px 4px",flexDirection:["column","row"],padding:2,gap:2,justifyContent:"flex-end",alignItems:"center"},children:e.jsx(x,{href:l,onClick:r,"data-cy":"DonationRequestSkip","data-testid":"DonationRequestSkip",children:e.jsx(p,{children:y})})})]})};try{i.displayName="DonationRequest",i.__docgenInfo={description:"",displayName:"DonationRequest",props:{body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"string | undefined"}},callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"() => void"}},iframeSrc:{defaultValue:null,description:"",name:"iframeSrc",required:!0,type:{name:"string | undefined"}},imageURL:{defaultValue:null,description:"",name:"imageURL",required:!0,type:{name:"string | undefined"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}}}}}catch{}export{i as D};