import{e as r,u as c,g as u}from"./entry.7b3d0449.js";import{u as i}from"./asyncData.55aa2485.js";import{u as l}from"./index.df8a6ccc.js";import{d,N as p,A as m,B as f}from"./swiper-vue.984dc4f3.js";const w=d({__name:"klogin",setup(_){const e=r(),n=c(),t=l(),s=i("Item",async()=>await t.loginState).data;return p(async()=>{const a=u();try{if(e.query.code){const o=await $fetch("https://kauth.kakao.com/oauth/token",{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},params:{grant_type:"authorization_code",client_id:a.public.restApi,redirect_uri:`${window.location.origin}/klogin`,code:e.query.code}});o?(s.value=!0,t.userToken=o.access_token,n.push("/")):console.log("Not found data")}else console.log("Not found code")}catch(o){console.log(o)}}),(a,o)=>(m(),f("div"))}});export{w as default};
