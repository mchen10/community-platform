"use strict";(self.webpackChunkoa_docs=self.webpackChunkoa_docs||[]).push([[635],{5846:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var i=s(4848),o=s(8453);const r={},l="Installing your own instance",t={id:"Install",title:"Installing your own instance",description:"Requirements",source:"@site/docs/Install.md",sourceDirName:".",slug:"/Install",permalink:"/Install",draft:!1,unlisted:!1,editUrl:"https://github.com/ONEARMY/community-platform/edit/master/packages/documentation/docs/Install.md",tags:[],version:"current",frontMatter:{}},c={},d=[{value:"Community Platform Maintainers",id:"community-platform-maintainers",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"installing-your-own-instance",children:"Installing your own instance"})}),"\n",(0,i.jsx)(n.p,{children:"Requirements"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.a,{href:"https://console.firebase.google.com/",children:"Google Firebase project"})]}),"\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.a,{href:"https://firebase.google.com/docs/projects/learn-more#adding_apps_to_a_project",children:"Firebase Web App"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://firebase.google.com/docs/hosting/quickstart#install-cli",children:"FireBase Hosting enabled"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://firebase.google.com/docs/auth?authuser=0",children:"Authentication"})," with the Sign-in providers ",(0,i.jsx)(n.strong,{children:"Email/Password"})," enabled."]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://firebase.google.com/docs/firestore/quickstart",children:"Cloud Firestore"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://firebase.google.com/docs/database?authuser=0&hl=en",children:"Realtime Database"})}),"\n",(0,i.jsxs)(n.li,{children:["Firebase CLI tools](",(0,i.jsx)(n.a,{href:"https://firebase.google.com/docs/cli",children:"https://firebase.google.com/docs/cli"}),") locally"]}),"\n",(0,i.jsxs)(n.li,{children:["Create an application](",(0,i.jsx)(n.a,{href:"https://console.cloud.google.com/appengine/start/create",children:"https://console.cloud.google.com/appengine/start/create"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Your project must be on the Blaze pay as you go pricing plan"}),"\n",(0,i.jsxs)(n.li,{children:["Configure ",(0,i.jsx)(n.code,{children:"cors.json"})," on the storage bucket](",(0,i.jsx)(n.a,{href:"https://cloud.google.com/storage/docs/configuring-cors",children:"https://cloud.google.com/storage/docs/configuring-cors"}),") to support your deployed origin. See: functions/src/config/cors.md"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Deploying:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"firebase use <my-new-project-id>\nfirebase deploy\n"})}),"\n",(0,i.jsx)(n.p,{children:"Troubleshooting:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Error: Can't determine Firebase Database URL"}),"\nIf you see this message it is likely you skipped adding the ",(0,i.jsx)(n.a,{href:"https://firebase.google.com/docs/database?authuser=0&hl=en",children:"Realtime Database"}),". Easily done!"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"The caller does not have permission"}),"\nThis occurs more commonly when deploying from a CI environment, and usually signifies additional permissions are required for the service account that is used for deployment. You can view the service account details from the ",(0,i.jsx)(n.a,{href:"https://console.cloud.google.com/logs",children:"GCP Logs Explorer"}),", filtering by severity and expanding to see more information."]}),"\n",(0,i.jsxs)(n.p,{children:["Examples of previously noted permissions required can be found in ",(0,i.jsx)(n.a,{href:"/Deployment/circle-ci",children:"Deployment via CircleCI"})," and ",(0,i.jsx)(n.a,{href:"/Backend%20Development/firestore-backup",children:"Firestore DB Backup"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"community-platform-maintainers",children:"Community Platform Maintainers"}),"\n",(0,i.jsx)(n.p,{children:"We deploy to our instances directly from the default branch of the git repository."}),"\n",(0,i.jsx)(n.p,{children:"You will need to set up a CircleCI context for each target environment. This context should contain the following variables:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"FIREBASE_TOKEN"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"GOOGLE_APPLICATION_CREDENTIALS_JSON"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VITE_BRANCH"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VITE_FIREBASE_API_KEY"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VITE_FIREBASE_AUTH_DOMAIN"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VITE_FIREBASE_DATABASE_URL"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VITE_FIREBASE_MESSAGING_SENDER_ID"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VITE_FIREBASE_PROJECT_ID"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VITE_FIREBASE_STORAGE_BUCKET"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VITE_GA_TRACKING_ID"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"VITE_PLATFORM_THEME"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"VITE_CDN_URL"})," - ",(0,i.jsx)(n.code,{children:"https://cdn-url.com"})," - this is the URL to the CDN where the assets are stored. This is used to load the assets from the CDN instead of the local server. It should ",(0,i.jsx)(n.strong,{children:"not"})," include a trailing slash."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"VITE_PLATFORM_PROFILES"})," - comma separated list of available profiles. Use ",(0,i.jsx)(n.code,{children:"ProfileType"})," from modules/profile/index for guidance here. For example: ",(0,i.jsx)(n.code,{children:"member,workspace"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"VITE_SUPPORTED_MODULES"})," \u2013\xa0comma separated list of available modules. See ",(0,i.jsx)(n.code,{children:"/src/modules/index.ts"})," for the definitions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"VITE_API_URL"})," \u2013 '",(0,i.jsx)(n.a,{href:"https://api-url.com",children:"https://api-url.com"}),"' - this is the URL to the API service. It should ",(0,i.jsx)(n.strong,{children:"not"})," include a trailing slash."]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"SITE_NAME"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>t});var i=s(6540);const o={},r=i.createContext(o);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);