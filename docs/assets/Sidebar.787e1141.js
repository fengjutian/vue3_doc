import{_ as L,r as B,o as n,c as i,d as k,f as y,i as P,j as h,A as ve,h as t,F as T,B as D,v as $,a as f,t as w,C as z,D as X,s as C,w as A,E as ie,q as N,e as K,G as J,H as Ne,I as Te,J as He,K as Y,L as Z,M as j,N as de,O as _e,x as R,u as pe,g as H,T as Ie,l as U,P as he,Q as q,R as G,S as Be,U as De,n as me,V as fe,W as be,b as Me,m as ge,X as Pe,y as Q,k as ke,Y as Re,Z as Ae,$ as Ee,a0 as Fe,a1 as Oe}from"./app.09cf2aff.js";const ze={},We={class:"theme-default-content"};function Ve(c,a){const e=B("Content");return n(),i("div",We,[k(e)])}var Ue=L(ze,[["render",Ve],["__file","HomeContent.vue"]]);const Ke={key:0,class:"features"},je=y({__name:"HomeFeatures",setup(c){const a=P(),e=h(()=>ve(a.value.features)?a.value.features:[]);return(u,r)=>t(e).length?(n(),i("div",Ke,[(n(!0),i(T,null,D(t(e),d=>(n(),i("div",{key:d.title,class:"feature"},[f("h2",null,w(d.title),1),f("p",null,w(d.details),1)]))),128))])):$("",!0)}});var qe=L(je,[["__file","HomeFeatures.vue"]]);const Ge=["innerHTML"],Je=["textContent"],Qe=y({__name:"HomeFooter",setup(c){const a=P(),e=h(()=>a.value.footer),u=h(()=>a.value.footerHtml);return(r,d)=>t(e)?(n(),i(T,{key:0},[t(u)?(n(),i("div",{key:0,class:"footer",innerHTML:t(e)},null,8,Ge)):(n(),i("div",{key:1,class:"footer",textContent:w(t(e))},null,8,Je))],64)):$("",!0)}});var Xe=L(Qe,[["__file","HomeFooter.vue"]]);const Ye=["href","rel","target","aria-label"],Ze=y({inheritAttrs:!1}),et=y({...Ze,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(c){const a=c,e=z(),u=He(),{item:r}=X(a),d=h(()=>J(r.value.link)),m=h(()=>Ne(r.value.link)||Te(r.value.link)),_=h(()=>{if(!m.value){if(r.value.target)return r.value.target;if(d.value)return"_blank"}}),s=h(()=>_.value==="_blank"),o=h(()=>!d.value&&!m.value&&!s.value),l=h(()=>{if(!m.value){if(r.value.rel)return r.value.rel;if(s.value)return"noopener noreferrer"}}),p=h(()=>r.value.ariaLabel||r.value.text),v=h(()=>{const g=Object.keys(u.value.locales);return g.length?!g.some(x=>x===r.value.link):r.value.link!=="/"}),b=h(()=>v.value?e.path.startsWith(r.value.link):!1),S=h(()=>o.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(e.path):b.value:!1);return(g,x)=>{const E=B("RouterLink"),M=B("AutoLinkExternalIcon");return t(o)?(n(),C(E,ie({key:0,class:{"router-link-active":t(S)},to:t(r).link,"aria-label":t(p)},g.$attrs),{default:A(()=>[N(g.$slots,"before"),K(" "+w(t(r).text)+" ",1),N(g.$slots,"after")]),_:3},16,["class","to","aria-label"])):(n(),i("a",ie({key:1,class:"external-link",href:t(r).link,rel:t(l),target:t(_),"aria-label":t(p)},g.$attrs),[N(g.$slots,"before"),K(" "+w(t(r).text)+" ",1),t(s)?(n(),C(M,{key:0})):$("",!0),N(g.$slots,"after")],16,Ye))}}});var I=L(et,[["__file","AutoLink.vue"]]);const tt={class:"hero"},at={key:0,id:"main-title"},nt={key:1,class:"description"},rt={key:2,class:"actions"},ot=y({__name:"HomeHero",setup(c){const a=P(),e=Y(),u=Z(),r=h(()=>u.value&&a.value.heroImageDark!==void 0?a.value.heroImageDark:a.value.heroImage),d=h(()=>a.value.heroText===null?null:a.value.heroText||e.value.title||"Hello"),m=h(()=>a.value.heroAlt||d.value||"hero"),_=h(()=>a.value.tagline===null?null:a.value.tagline||e.value.description||"Welcome to your VuePress site"),s=h(()=>ve(a.value.actions)?a.value.actions.map(({text:l,link:p,type:v="primary"})=>({text:l,link:p,type:v})):[]),o=()=>{if(!r.value)return null;const l=j("img",{src:de(r.value),alt:m.value});return a.value.heroImageDark===void 0?l:j(_e,()=>l)};return(l,p)=>(n(),i("header",tt,[k(o),t(d)?(n(),i("h1",at,w(t(d)),1)):$("",!0),t(_)?(n(),i("p",nt,w(t(_)),1)):$("",!0),t(s).length?(n(),i("p",rt,[(n(!0),i(T,null,D(t(s),v=>(n(),C(I,{key:v.text,class:R(["action-button",[v.type]]),item:v},null,8,["class","item"]))),128))])):$("",!0)]))}});var st=L(ot,[["__file","HomeHero.vue"]]);const lt={class:"home"},ut=y({__name:"Home",setup(c){return(a,e)=>(n(),i("main",lt,[k(st),k(qe),k(Ue),k(Xe)]))}});var $a=L(ut,[["__file","Home.vue"]]);const it=y({__name:"NavbarBrand",setup(c){const a=pe(),e=Y(),u=H(),r=Z(),d=h(()=>u.value.home||a.value),m=h(()=>e.value.title),_=h(()=>r.value&&u.value.logoDark!==void 0?u.value.logoDark:u.value.logo),s=()=>{if(!_.value)return null;const o=j("img",{class:"logo",src:de(_.value),alt:m.value});return u.value.logoDark===void 0?o:j(_e,()=>o)};return(o,l)=>{const p=B("RouterLink");return n(),C(p,{to:t(d)},{default:A(()=>[k(s),t(m)?(n(),i("span",{key:0,class:R(["site-name",{"can-hide":t(_)}])},w(t(m)),3)):$("",!0)]),_:1},8,["to"])}}});var ct=L(it,[["__file","NavbarBrand.vue"]]);const vt=y({__name:"DropdownTransition",setup(c){const a=u=>{u.style.height=u.scrollHeight+"px"},e=u=>{u.style.height=""};return(u,r)=>(n(),C(Ie,{name:"dropdown",onEnter:a,onAfterEnter:e,onBeforeLeave:a},{default:A(()=>[N(u.$slots,"default")]),_:3}))}});var $e=L(vt,[["__file","DropdownTransition.vue"]]);const dt=["aria-label"],_t={class:"title"},pt=f("span",{class:"arrow down"},null,-1),ht=["aria-label"],mt={class:"title"},ft={class:"navbar-dropdown"},bt={class:"navbar-dropdown-subtitle"},gt={key:1},kt={class:"navbar-dropdown-subitem-wrapper"},$t=y({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(c){const a=c,{item:e}=X(a),u=h(()=>e.value.ariaLabel||e.value.text),r=U(!1),d=z();he(()=>d.path,()=>{r.value=!1});const m=s=>{s.detail===0?r.value=!r.value:r.value=!1},_=(s,o)=>o[o.length-1]===s;return(s,o)=>(n(),i("div",{class:R(["navbar-dropdown-wrapper",{open:r.value}])},[f("button",{class:"navbar-dropdown-title",type:"button","aria-label":t(u),onClick:m},[f("span",_t,w(t(e).text),1),pt],8,dt),f("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":t(u),onClick:o[0]||(o[0]=l=>r.value=!r.value)},[f("span",mt,w(t(e).text),1),f("span",{class:R(["arrow",r.value?"down":"right"])},null,2)],8,ht),k($e,null,{default:A(()=>[q(f("ul",ft,[(n(!0),i(T,null,D(t(e).children,l=>(n(),i("li",{key:l.text,class:"navbar-dropdown-item"},[l.children?(n(),i(T,{key:0},[f("h4",bt,[l.link?(n(),C(I,{key:0,item:l,onFocusout:p=>_(l,t(e).children)&&l.children.length===0&&(r.value=!1)},null,8,["item","onFocusout"])):(n(),i("span",gt,w(l.text),1))]),f("ul",kt,[(n(!0),i(T,null,D(l.children,p=>(n(),i("li",{key:p.link,class:"navbar-dropdown-subitem"},[k(I,{item:p,onFocusout:v=>_(p,l.children)&&_(l,t(e).children)&&(r.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(n(),C(I,{key:1,item:l,onFocusout:p=>_(l,t(e).children)&&(r.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[G,r.value]])]),_:1})],2))}});var Lt=L($t,[["__file","NavbarDropdown.vue"]]);const ce=c=>decodeURI(c).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),yt=(c,a)=>{if(a.hash===c)return!0;const e=ce(a.path),u=ce(c);return e===u},Le=(c,a)=>c.link&&yt(c.link,a)?!0:c.children?c.children.some(e=>Le(e,a)):!1,ye=c=>!J(c)||/github\.com/.test(c)?"GitHub":/bitbucket\.org/.test(c)?"Bitbucket":/gitlab\.com/.test(c)?"GitLab":/gitee\.com/.test(c)?"Gitee":null,wt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},xt=({docsRepo:c,editLinkPattern:a})=>{if(a)return a;const e=ye(c);return e!==null?wt[e]:null},Ct=({docsRepo:c,docsBranch:a,docsDir:e,filePathRelative:u,editLinkPattern:r})=>{if(!u)return null;const d=xt({docsRepo:c,editLinkPattern:r});return d?d.replace(/:repo/,J(c)?c:`https://github.com/${c}`).replace(/:branch/,a).replace(/:path/,Be(`${De(e)}/${u}`)):null},St={key:0,class:"navbar-items"},Nt=y({__name:"NavbarItems",setup(c){const a=()=>{const o=me(),l=pe(),p=Y(),v=H();return h(()=>{var M,F,O;const b=Object.keys(p.value.locales);if(b.length<2)return[];const S=o.currentRoute.value.path,g=o.currentRoute.value.fullPath,x=o.currentRoute.value.hash;return[{text:(M=v.value.selectLanguageText)!=null?M:"unknown language",ariaLabel:(O=(F=v.value.selectLanguageAriaLabel)!=null?F:v.value.selectLanguageText)!=null?O:"unknown language",children:b.map(W=>{var ae,ne,re,oe,se,le;const xe=(ne=(ae=p.value.locales)==null?void 0:ae[W])!=null?ne:{},ee=(oe=(re=v.value.locales)==null?void 0:re[W])!=null?oe:{},te=`${xe.lang}`,Ce=(se=ee.selectLanguageName)!=null?se:te;let V;if(te===p.value.lang)V=g;else{const ue=S.replace(l.value,W);o.getRoutes().some(Se=>Se.path===ue)?V=`${ue}${x}`:V=(le=ee.home)!=null?le:W}return{text:Ce,link:V}})}]})},e=()=>{const o=H(),l=h(()=>o.value.repo),p=h(()=>l.value?ye(l.value):null),v=h(()=>l.value&&!J(l.value)?`https://github.com/${l.value}`:l.value),b=h(()=>v.value?o.value.repoLabel?o.value.repoLabel:p.value===null?"Source":p.value:null);return h(()=>!v.value||!b.value?[]:[{text:b.value,link:v.value}])},u=o=>fe(o)?be(o):o.children?{...o,children:o.children.map(u)}:o,d=(()=>{const o=H();return h(()=>(o.value.navbar||[]).map(u))})(),m=a(),_=e(),s=h(()=>[...d.value,...m.value,..._.value]);return(o,l)=>t(s).length?(n(),i("nav",St,[(n(!0),i(T,null,D(t(s),p=>(n(),i("div",{key:p.text,class:"navbar-item"},[p.children?(n(),C(Lt,{key:0,item:p},null,8,["item"])):(n(),C(I,{key:1,item:p},null,8,["item"]))]))),128))])):$("",!0)}});var we=L(Nt,[["__file","NavbarItems.vue"]]);const Tt=["title"],Ht={class:"icon",focusable:"false",viewBox:"0 0 32 32"},It=Me('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Bt=[It],Dt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Mt=f("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Pt=[Mt],Rt=y({__name:"ToggleColorModeButton",setup(c){const a=H(),e=Z(),u=()=>{e.value=!e.value};return(r,d)=>(n(),i("button",{class:"toggle-color-mode-button",title:t(a).toggleColorMode,onClick:u},[q((n(),i("svg",Ht,Bt,512)),[[G,!t(e)]]),q((n(),i("svg",Dt,Pt,512)),[[G,t(e)]])],8,Tt))}});var At=L(Rt,[["__file","ToggleColorModeButton.vue"]]);const Et=["title"],Ft=f("div",{class:"icon","aria-hidden":"true"},[f("span"),f("span"),f("span")],-1),Ot=[Ft],zt=y({__name:"ToggleSidebarButton",emits:["toggle"],setup(c){const a=H();return(e,u)=>(n(),i("div",{class:"toggle-sidebar-button",title:t(a).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:u[0]||(u[0]=r=>e.$emit("toggle"))},Ot,8,Et))}});var Wt=L(zt,[["__file","ToggleSidebarButton.vue"]]);const Vt=y({__name:"Navbar",emits:["toggle-sidebar"],setup(c){const a=H(),e=U(null),u=U(null),r=U(0),d=h(()=>r.value?{maxWidth:r.value+"px"}:{});ge(()=>{const s=m(e.value,"paddingLeft")+m(e.value,"paddingRight"),o=()=>{var l;window.innerWidth<=719?r.value=0:r.value=e.value.offsetWidth-s-(((l=u.value)==null?void 0:l.offsetWidth)||0)};o(),window.addEventListener("resize",o,!1),window.addEventListener("orientationchange",o,!1)});function m(_,s){var p,v,b;const o=(b=(v=(p=_==null?void 0:_.ownerDocument)==null?void 0:p.defaultView)==null?void 0:v.getComputedStyle(_,null))==null?void 0:b[s],l=Number.parseInt(o,10);return Number.isNaN(l)?0:l}return(_,s)=>{const o=B("NavbarSearch");return n(),i("header",{ref_key:"navbar",ref:e,class:"navbar"},[k(Wt,{onToggle:s[0]||(s[0]=l=>_.$emit("toggle-sidebar"))}),f("span",{ref_key:"navbarBrand",ref:u},[k(ct)],512),f("div",{class:"navbar-items-wrapper",style:Pe(t(d))},[N(_.$slots,"before"),k(we,{class:"can-hide"}),N(_.$slots,"after"),t(a).colorModeSwitch?(n(),C(At,{key:0})):$("",!0),k(o)],4)],512)}}});var La=L(Vt,[["__file","Navbar.vue"]]);const Ut={class:"page-meta"},Kt={key:0,class:"meta-item edit-link"},jt={key:1,class:"meta-item last-updated"},qt={class:"meta-item-label"},Gt={class:"meta-item-info"},Jt={key:2,class:"meta-item contributors"},Qt={class:"meta-item-label"},Xt={class:"meta-item-info"},Yt=["title"],Zt=K(", "),ea=y({__name:"PageMeta",setup(c){const a=()=>{const s=H(),o=Q(),l=P();return h(()=>{var M,F,O;if(!((F=(M=l.value.editLink)!=null?M:s.value.editLink)!=null?F:!0))return null;const{repo:v,docsRepo:b=v,docsBranch:S="main",docsDir:g="",editLinkText:x}=s.value;if(!b)return null;const E=Ct({docsRepo:b,docsBranch:S,docsDir:g,filePathRelative:o.value.filePathRelative,editLinkPattern:(O=l.value.editLinkPattern)!=null?O:s.value.editLinkPattern});return E?{text:x!=null?x:"Edit this page",link:E}:null})},e=()=>{const s=H(),o=Q(),l=P();return h(()=>{var b,S,g,x;return!((S=(b=l.value.lastUpdated)!=null?b:s.value.lastUpdated)!=null?S:!0)||!((g=o.value.git)!=null&&g.updatedTime)?null:new Date((x=o.value.git)==null?void 0:x.updatedTime).toLocaleString()})},u=()=>{const s=H(),o=Q(),l=P();return h(()=>{var v,b,S,g;return((b=(v=l.value.contributors)!=null?v:s.value.contributors)!=null?b:!0)&&(g=(S=o.value.git)==null?void 0:S.contributors)!=null?g:null})},r=H(),d=a(),m=e(),_=u();return(s,o)=>{const l=B("ClientOnly");return n(),i("footer",Ut,[t(d)?(n(),i("div",Kt,[k(I,{class:"meta-item-label",item:t(d)},null,8,["item"])])):$("",!0),t(m)?(n(),i("div",jt,[f("span",qt,w(t(r).lastUpdatedText)+": ",1),k(l,null,{default:A(()=>[f("span",Gt,w(t(m)),1)]),_:1})])):$("",!0),t(_)&&t(_).length?(n(),i("div",Jt,[f("span",Qt,w(t(r).contributorsText)+": ",1),f("span",Xt,[(n(!0),i(T,null,D(t(_),(p,v)=>(n(),i(T,{key:v},[f("span",{class:"contributor",title:`email: ${p.email}`},w(p.name),9,Yt),v!==t(_).length-1?(n(),i(T,{key:0},[Zt],64)):$("",!0)],64))),128))])])):$("",!0)])}}});var ta=L(ea,[["__file","PageMeta.vue"]]);const aa={key:0,class:"page-nav"},na={class:"inner"},ra={key:0,class:"prev"},oa={key:1,class:"next"},sa=y({__name:"PageNav",setup(c){const a=s=>s===!1?null:fe(s)?be(s):Re(s)?s:!1,e=(s,o,l)=>{const p=s.findIndex(v=>v.link===o);if(p!==-1){const v=s[p+l];return v!=null&&v.link?v:null}for(const v of s)if(v.children){const b=e(v.children,o,l);if(b)return b}return null},u=P(),r=ke(),d=z(),m=h(()=>{const s=a(u.value.prev);return s!==!1?s:e(r.value,d.path,-1)}),_=h(()=>{const s=a(u.value.next);return s!==!1?s:e(r.value,d.path,1)});return(s,o)=>t(m)||t(_)?(n(),i("nav",aa,[f("p",na,[t(m)?(n(),i("span",ra,[k(I,{item:t(m)},null,8,["item"])])):$("",!0),t(_)?(n(),i("span",oa,[k(I,{item:t(_)},null,8,["item"])])):$("",!0)])])):$("",!0)}});var la=L(sa,[["__file","PageNav.vue"]]);const ua={class:"page"},ia={class:"theme-default-content"},ca=y({__name:"Page",setup(c){return(a,e)=>{const u=B("Content");return n(),i("main",ua,[N(a.$slots,"top"),f("div",ia,[N(a.$slots,"content-top"),k(u),N(a.$slots,"content-bottom")]),k(ta),k(la),N(a.$slots,"bottom")])}}});var ya=L(ca,[["__file","Page.vue"]]);const va=["onKeydown"],da={class:"sidebar-item-children"},_a=y({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(c){const a=c,{item:e,depth:u}=X(a),r=z(),d=me(),m=h(()=>Le(e.value,r)),_=h(()=>({"sidebar-item":!0,"sidebar-heading":u.value===0,active:m.value,collapsible:e.value.collapsible})),[s,o]=Ae(m.value),l=v=>{e.value.collapsible&&(v.preventDefault(),o())},p=d.afterEach(v=>{Ee(()=>{s.value=e.value.collapsible?m.value:!0})});return Fe(()=>{p()}),(v,b)=>{var g;const S=B("SidebarItem",!0);return n(),i("li",null,[t(e).link?(n(),C(I,{key:0,class:R(t(_)),item:t(e)},null,8,["class","item"])):(n(),i("p",{key:1,tabindex:"0",class:R(t(_)),onClick:l,onKeydown:Oe(l,["enter"])},[K(w(t(e).text)+" ",1),t(e).collapsible?(n(),i("span",{key:0,class:R(["arrow",t(s)?"down":"right"])},null,2)):$("",!0)],42,va)),(g=t(e).children)!=null&&g.length?(n(),C($e,{key:2},{default:A(()=>[q(f("ul",da,[(n(!0),i(T,null,D(t(e).children,x=>(n(),C(S,{key:`${t(u)}${x.text}${x.link}`,item:x,depth:t(u)+1},null,8,["item","depth"]))),128))],512),[[G,t(s)]])]),_:1})):$("",!0)])}}});var pa=L(_a,[["__file","SidebarItem.vue"]]);const ha={key:0,class:"sidebar-items"},ma=y({__name:"SidebarItems",setup(c){const a=z(),e=ke();return ge(()=>{he(()=>a.hash,u=>{const r=document.querySelector(".sidebar");if(!r)return;const d=document.querySelector(`.sidebar a.sidebar-item[href="${a.path}${u}"]`);if(!d)return;const{top:m,height:_}=r.getBoundingClientRect(),{top:s,height:o}=d.getBoundingClientRect();s<m?d.scrollIntoView(!0):s+o>m+_&&d.scrollIntoView(!1)})}),(u,r)=>t(e).length?(n(),i("ul",ha,[(n(!0),i(T,null,D(t(e),d=>(n(),C(pa,{key:`${d.text}${d.link}`,item:d},null,8,["item"]))),128))])):$("",!0)}});var fa=L(ma,[["__file","SidebarItems.vue"]]);const ba={class:"sidebar"},ga=y({__name:"Sidebar",setup(c){return(a,e)=>(n(),i("aside",ba,[k(we),N(a.$slots,"top"),k(fa),N(a.$slots,"bottom")]))}});var wa=L(ga,[["__file","Sidebar.vue"]]);export{$a as H,La as N,ya as P,wa as S};
