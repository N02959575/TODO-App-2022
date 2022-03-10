import{o as _,c as u,a as s,d as f,u as h,w as T,b as y,e as l,p as P,f as E,v as x,g as d,h as p,i as q,r as b,t as v,j as A,k as j,l as B,m as D,n as L,F as V,q as F,s as H}from"./vendor.3d31fa23.js";const U=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}};U();const R="modulepreload",S={},M="/",W=function(n,i){return!i||i.length===0?n():Promise.all(i.map(e=>{if(e=`${M}${e}`,e in S)return;S[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const r=document.createElement("link");if(r.rel=t?"stylesheet":R,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t)return new Promise((I,O)=>{r.addEventListener("load",I),r.addEventListener("error",O)})})).then(()=>n())};var g=(a,n)=>{const i=a.__vccOpts||a;for(const[e,t]of n)i[e]=t;return i};const J={},Y={class:"section"},z=s("h1",{class:"title"},"Home Page!",-1),K=[z];function G(a,n){return _(),u("div",Y,K)}var Q=g(J,[["render",G]]);const c=a=>(P("data-v-99bc598e"),a=a(),E(),a),X={class:"hero is-fullheight"},Z={class:"hero-body has-background-light"},ss={class:"container"},ts=l(" For Testing: "),es=c(()=>s("br",null,null,-1)),os=l(" In the user name field enter: "),as=c(()=>s("br",null,null,-1)),ns=l(" @johndoe "),is=c(()=>s("br",null,null,-1)),rs=l(" @deborahdoe "),ls=c(()=>s("br",null,null,-1)),cs=l(" or "),ds=c(()=>s("br",null,null,-1)),_s=l(" @obodoe "),us=c(()=>s("br",null,null,-1)),hs=l(" The password for all is password "),ps={class:"columns is-centered"},ms={class:"column is-5-tablet is-4-desktop is-3-widescreen"},fs={class:"card has-background-primary"},vs={class:"card-content"},bs=c(()=>s("h1",{class:"title has-text-centered has-text-primary-light"},"Login To Your Account",-1)),gs={class:"field"},$s={class:"control has-icons-left has-icons-right"},ws=c(()=>s("span",{class:"icon is-small is-left"},[s("i",{class:"fa-solid fa-id-card"})],-1)),ks=c(()=>s("span",{class:"icon is-small is-right"},[s("i",{class:"fas fa-check"})],-1)),ys={class:"field"},xs={class:"control has-icons-left"},Ls=c(()=>s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-lock"})],-1)),Ss={class:"field has-text-centered"},Cs=c(()=>s("button",{class:"button is-light"}," Login ",-1)),Ns=f({setup(a){function n(){N("@deborahdoe","password")}const i="",e="";return(t,o)=>(_(),u("div",X,[s("div",Z,[s("div",ss,[ts,es,os,as,ns,is,rs,ls,cs,ds,_s,us,hs,s("div",ps,[s("div",ms,[s("div",fs,[s("div",vs,[bs,s("form",{onSubmit:[o[3]||(o[3]=r=>h(N)(i,e)),o[4]||(o[4]=T(()=>{},["prevent"]))]},[s("div",gs,[s("p",$s,[y(s("input",{class:"input",type:"text",placeholder:"Enter username or email","onUpdate:modelValue":o[0]||(o[0]=r=>i=r),required:""},null,512),[[x,i]]),ws,ks])]),s("div",ys,[s("p",xs,[y(s("input",{class:"input",type:"password",placeholder:"Password","onUpdate:modelValue":o[1]||(o[1]=r=>e=r),required:""},null,512),[[x,e]]),Ls])]),s("div",Ss,[Cs,s("button",{class:"button is-light",onClick:o[2]||(o[2]=r=>n())}," Login2 ")])],32)])])])])])])]))}});var Ps=g(Ns,[["__scopeId","data-v-99bc598e"]]);const Es={},Is={class:"hero is-fullheight"},Os={class:"hero-body has-background-light"},Ts={class:"container"},qs={class:"columns is-centered"},As={class:"column is-5-tablet is-4-desktop is-3-widescreen"},js={class:"tile is-parent is-vertical"},Bs=q('<div class="tile is-child notification is-primary"><h1 class="title has-text-centered has-text-primary-light">Create Your Account</h1><div class="field"><p class="control has-icons-left has-icons-right"><input class="input" type="text" placeholder="Username" required><span class="icon is-small is-left"><i class="fa-solid fa-user"></i></span><span class="icon is-small is-right"><i class="fas fa-check"></i></span></p></div><div class="field"><p class="control has-icons-left has-icons-right"><input class="input" type="email" placeholder="Email" required><span class="icon is-small is-left"><i class="fas fa-envelope"></i></span><span class="icon is-small is-right"><i class="fas fa-check"></i></span></p></div><div class="field"><p class="control has-icons-left"><input class="input" type="password" placeholder="Password" required><span class="icon is-small is-left"><i class="fas fa-lock"></i></span></p></div><div class="field"><p class="control has-icons-left"><input class="input" type="password" placeholder="Confirm Password" required><span class="icon is-small is-left"><i class="fas fa-lock"></i></span></p></div><div class="field has-text-centered"><button class="button is-light"> Sign Up </button></div></div>',1),Ds={class:"tile is-child notification is-primary"},Vs=s("h1",{class:"title has-text-centered has-text-primary-light"},"Already have an account?",-1),Fs=s("div",{class:"field has-text-centered"},[s("button",{class:"button is-light"}," Login ")],-1);function Hs(a,n){const i=b("router-link");return _(),u("div",Is,[s("div",Os,[s("div",Ts,[s("div",qs,[s("div",As,[s("div",js,[Bs,s("div",Ds,[Vs,d(i,{to:"/login"},{default:p(()=>[Fs]),_:1})])])])])])])])}var Us=g(Es,[["render",Hs]]);const Rs={class:"section"},Ms={class:"title"},C=f({props:{title:{type:String,default:"Hello World"}},setup(a){const n=a;return(i,e)=>(_(),u("div",Rs,[s("h1",Ms,v(n.title),1)]))}}),Ws=[{path:"/",component:Q},{path:"/about",component:C,props:{title:"About Page!"}},{path:"/contact",component:C,props:{title:"Contact Page!"}},{path:"/signup",component:Us},{path:"/login",component:Ps},{path:"/tasktracker",component:()=>W(()=>import("./TaskTracker.519b53fb.js"),["assets/TaskTracker.519b53fb.js","assets/vendor.3d31fa23.js"])}],$=A({history:j(),routes:Ws,linkActiveClass:"is-active"});$.beforeEach((a,n)=>{if(["/tasktracker"].includes(a.path)&&!m.user)return"/login"});const Js=[{firstName:"John",lastName:"Doe",handle:"@johndoe",password:"password",email:"email@email.com",pic:"https://randomuser.me/api/portraits/men/1.jpg",id:1},{firstName:"Deborah",lastName:"Doe",handle:"@deborahdoe",password:"password",email:"deborah@email.com",pic:"https://randomuser.me/api/portraits/women/2.jpg",id:2},{firstName:"Obo",lastName:"Doe",handle:"@obodoe",password:"password",email:"Obo@email.com",pic:"https://randomuser.me/api/portraits/men/3.jpg",id:3}],w=B({user:null});async function N(a,n){const i=Js.find(e=>e.handle===a);if(!i)throw{message:"User not found"};if(i.password!==n)throw{message:"Incorrect password"};w.user=i,$.push("/tasktracker")}function Ys(){w.user=null,$.push("/")}var m=w;const k=a=>(P("data-v-8402c638"),a=a(),E(),a),zs={key:0,class:"buttons"},Ks=k(()=>s("strong",null,"Sign up",-1)),Gs=l(" Log in "),Qs={key:1,class:"buttons"},Xs={class:"avatar"},Zs=["src"],st=l(),tt=k(()=>s("br",null,null,-1)),et=k(()=>s("strong",null,"Log out",-1)),ot=[et],at=f({setup(a){return(n,i)=>{const e=b("router-link");return h(m).user?(_(),u("div",Qs,[s("div",Xs,[s("img",{src:h(m).user.pic},null,8,Zs),s("div",null,[s("strong",null,v(h(m).user.firstName)+" "+v(h(m).user.lastName),1),st,tt,s("i",null,v(h(m).user.email),1)])]),s("a",{class:"button is-primary",onClick:i[0]||(i[0]=t=>h(Ys)())},ot)])):(_(),u("div",zs,[d(e,{class:"button is-primary",to:"/signup"},{default:p(()=>[Ks]),_:1}),d(e,{class:"button is-light",to:"/login"},{default:p(()=>[Gs]),_:1})]))}}});var nt=g(at,[["__scopeId","data-v-8402c638"]]);const it={class:"navbar is-primary"},rt={class:"navbar-brand"},lt=s("a",{class:"navbar-item",href:"https://bulma.io"},[s("img",{src:"https://bulma.io/images/bulma-logo-white.png",alt:"Bulma: a modern CSS framework based on Flexbox",width:"112",height:"28"})],-1),ct=s("span",null,null,-1),dt=s("span",null,null,-1),_t=s("span",null,null,-1),ut=[ct,dt,_t],ht={class:"navbar-start"},pt=l(" Home "),mt=l(" Task Tracker "),ft={class:"navbar-item has-dropdown is-hoverable"},vt=s("a",{class:"navbar-link"}," More ",-1),bt={class:"navbar-dropdown"},gt=l(" About "),$t=s("a",{class:"navbar-item"}," Jobs ",-1),wt=l(" Contact "),kt=s("hr",{class:"navbar-divider"},null,-1),yt=s("a",{class:"navbar-item"}," Report an issue ",-1),xt={class:"navbar-end"},Lt={class:"navbar-item"},St=s("div",{class:"navbar-item"},[s("a",{class:"bd-tw-button button","data-social-network":"Twitter","data-social-action":"tweet","data-social-target":"https://bulma.io",target:"_blank",href:"https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"},[s("span",{class:"icon"},[s("i",{class:"fab fa-twitter"})]),s("span",null," Tweet ")])],-1),Ct=f({setup(a){const n=D(!1);return(i,e)=>{const t=b("router-link");return _(),u("nav",it,[s("div",rt,[lt,s("a",{role:"button",class:L(["navbar-burger",{"is-active":n.value}]),"aria-label":"menu","aria-expanded":"false",onClick:e[0]||(e[0]=o=>n.value=!n.value)},ut,2)]),s("div",{class:L(["navbar-menu",{"is-active":n.value}])},[s("div",ht,[d(t,{class:"navbar-item",to:"/"},{default:p(()=>[pt]),_:1}),d(t,{class:"navbar-item",to:"/tasktracker"},{default:p(()=>[mt]),_:1}),s("div",ft,[vt,s("div",bt,[d(t,{class:"navbar-item",to:"/about"},{default:p(()=>[gt]),_:1}),$t,d(t,{class:"navbar-item",to:"/contact"},{default:p(()=>[wt]),_:1}),kt,yt])])]),s("div",xt,[s("div",Lt,[d(nt)]),St])],2)])}}}),Nt=f({setup(a){return(n,i)=>{const e=b("router-view");return _(),u(V,null,[d(Ct),d(e)],64)}}});F(Nt).use($).use(H()).mount("#app");export{g as _,Js as l,m as s};
