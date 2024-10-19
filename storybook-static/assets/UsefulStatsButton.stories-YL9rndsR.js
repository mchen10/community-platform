import{j as d}from"./jsx-runtime-CexXSJP5.js";import{r as n}from"./index-BP8_t0zE.js";import{U as u}from"./UsefulStatsButton-DvP1vs4v.js";import"./Button-39qdgyIk.js";import"./Icon-CXLq-5W7.js";import"./emotion-styled.browser.esm-mtFmFg5E.js";import"./extends-CF3RwP-h.js";import"./emotion-element-43c6fea0.browser.esm-B3fc_abn.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-UWD3gXM2.js";import"./supporter-D7hp958O.js";import"./icon-arrow-down-CJeToCJe.js";import"./icon-star-active-ClN6U5FF.js";import"./theme-ui-core-jsx-runtime.browser.esm-BGkPH8X1.js";import"./hoist-non-react-statics.cjs-CQI8syxn.js";import"./theme-ui-components.esm-D5Q63Fx1.js";import"./Tooltip-B29JjCvL.js";import"./index-Snk9MO9S.js";import"./index-DDbH4maQ.js";const q={title:"Components/UsefulStatsButton",component:u},o=()=>d.jsx(u,{isLoggedIn:!1,hasUserVotedUseful:!1,votedUsefulCount:99,onUsefulClick:()=>Promise.resolve()}),s=()=>{const[e,t]=n.useState(99),[s,o]=n.useState(!1);return d.jsx(u,{votedUsefulCount:e,hasUserVotedUseful:s,isLoggedIn:!0,onUsefulClick:async()=>{await new Promise((e=>setTimeout((()=>e()),2e3))),t((e=>s?e-1:e+1)),o((e=>!e))}})},r=()=>{const[e,t]=n.useState(100),[s,o]=n.useState(!0);return d.jsx(u,{votedUsefulCount:e,hasUserVotedUseful:s,isLoggedIn:!0,onUsefulClick:async()=>{await new Promise((e=>setTimeout((()=>e()),2e3))),t((e=>s?e-1:e+1)),o((e=>!e))}})};var m,p,f,U,v,C,g,V,S;o.parameters={...o.parameters,docs:{...null==(m=o.parameters)?void 0:m.docs,source:{originalSource:"() => <UsefulStatsButton isLoggedIn={false} hasUserVotedUseful={false} votedUsefulCount={99} onUsefulClick={() => Promise.resolve()} />",...null==(f=null==(p=o.parameters)?void 0:p.docs)?void 0:f.source}}},s.parameters={...s.parameters,docs:{...null==(U=s.parameters)?void 0:U.docs,source:{originalSource:"() => {\n  const [count, setCount] = useState<number>(99);\n  const [voted, setVoted] = useState(false);\n  const clickVote = async () => {\n    await new Promise<void>(resolve => setTimeout(() => resolve(), 2000));\n    setCount(val => voted ? val - 1 : val + 1);\n    setVoted(val => !val);\n  };\n  return <UsefulStatsButton votedUsefulCount={count} hasUserVotedUseful={voted} isLoggedIn={true} onUsefulClick={clickVote} />;\n}",...null==(C=null==(v=s.parameters)?void 0:v.docs)?void 0:C.source}}},r.parameters={...r.parameters,docs:{...null==(g=r.parameters)?void 0:g.docs,source:{originalSource:"() => {\n  const [count, setCount] = useState<number>(100);\n  const [voted, setVoted] = useState(true);\n  const clickVote = async () => {\n    await new Promise<void>(resolve => setTimeout(() => resolve(), 2000));\n    setCount(val => voted ? val - 1 : val + 1);\n    setVoted(val => !val);\n  };\n  return <UsefulStatsButton votedUsefulCount={count} hasUserVotedUseful={voted} isLoggedIn={true} onUsefulClick={clickVote} />;\n}",...null==(S=null==(V=r.parameters)?void 0:V.docs)?void 0:S.source}}};const z=["LoggedOutWithCount","LoggedInWithCount","CurrentUserHasVoted"];export{r as CurrentUserHasVoted,s as LoggedInWithCount,o as LoggedOutWithCount,z as __namedExportsOrder,q as default};