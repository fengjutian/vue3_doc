if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,t)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let r={};const u=s=>l(s,n),o={module:{uri:n},exports:r,require:u};e[n]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(t(...s),r)))}}define(["./workbox-7d6a3f4d"],(function(s){"use strict";self.skipWaiting(),s.precacheAndRoute([{url:"404.html",revision:"3175192d77329d0cb581cd3a4f24befc"},{url:"assets/404 2.9f6e6faf.js",revision:null},{url:"assets/404.1d781f0c.js",revision:null},{url:"assets/404.html.265028f6.js",revision:null},{url:"assets/404.html.2893c348.js",revision:null},{url:"assets/app.09cf2aff.js",revision:null},{url:"assets/assemble.html.b0e45045.js",revision:null},{url:"assets/assemble.html.cb07945f.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/component.html.9ff35e93.js",revision:null},{url:"assets/component.html.fd4f9f5c.js",revision:null},{url:"assets/composeAPI.html.28702ff4.js",revision:null},{url:"assets/composeAPI.html.eb75a074.js",revision:null},{url:"assets/composeMixin.html.2d72a575.js",revision:null},{url:"assets/composeMixin.html.5c7d28b9.js",revision:null},{url:"assets/config.html.942974e0.js",revision:null},{url:"assets/config.html.b71f1124.js",revision:null},{url:"assets/getting-started.html.b97e3ba8.js",revision:null},{url:"assets/getting-started.html.f2a00a69.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.184046ad.js",revision:null},{url:"assets/index.html.25f4dbac.js",revision:null},{url:"assets/index.html.41bf7936.js",revision:null},{url:"assets/index.html.ec5876bf.js",revision:null},{url:"assets/install.html.03bdd69e.js",revision:null},{url:"assets/install.html.3e9f385c.js",revision:null},{url:"assets/introduce.html.0ee94087.js",revision:null},{url:"assets/introduce.html.61917d8f.js",revision:null},{url:"assets/Layout 2.d6e11ca9.js",revision:null},{url:"assets/Layout.05de3506.js",revision:null},{url:"assets/Setup.html.766ce6fb.js",revision:null},{url:"assets/Setup.html.8690198e.js",revision:null},{url:"assets/Sidebar.787e1141.js",revision:null},{url:"assets/style.78bc0985.css",revision:null},{url:"assets/template.html.05891bc0.js",revision:null},{url:"assets/template.html.1db45cfb.js",revision:null},{url:"config.html",revision:"475dc93dc99e121356e13550c00b50b3"},{url:"guide/assemble.html",revision:"da9eeeab4e4703bbe85d1b6b478ca813"},{url:"guide/component.html",revision:"f5a603840ff9d1c1ffa554fbe5f35280"},{url:"guide/composeAPI.html",revision:"81a2b1de4cfae127dbf0ff6434619db9"},{url:"guide/composeMixin.html",revision:"e2e159d38f7b6a84c9bf1052fe8cb564"},{url:"guide/getting-started.html",revision:"eed704918b7e359786bb41d1745c4a81"},{url:"guide/index.html",revision:"6dbfd98049acebd87afaef52d1a5c536"},{url:"guide/install.html",revision:"8562f53657280c1c828d4cd05665a20b"},{url:"guide/introduce.html",revision:"b89a30c87dc4bcf90ac397f71d6be66c"},{url:"guide/Setup.html",revision:"74f3ccb4108d2405e4c48f3b2a6200e1"},{url:"guide/template.html",revision:"367a10f75504b6add10c3cf921ee311e"},{url:"images/lifecycle.svg",revision:"d2f8a1b763c9d39f7511b5767b3dce79"},{url:"index.html",revision:"12f5a7c08b8f44679c74eaa3e08caa95"}],{})}));
