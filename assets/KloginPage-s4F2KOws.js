import{d as n,j as c,k as r,u as _,p as d,q as u,c as i,o as p}from"./index-pj1NBf2R.js";var l={VITE_REST_API:"0267004bbd623d25f53b271d6e141135",VITE_REDIRECT_URI:"http://localhost:5173/myshopping/klogin",VITE_REDIRECT_GIT:"https://yekata.github.io/myshopping",VITE_SERVICE_APP_ADMIN_KEY:"ecb2f674de96cb0c1d45f614e43ee58d",BASE_URL:"/myshopping/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const f=n({__name:"KloginPage",setup(E){const o=c(),s=r(),a=_();return d(async()=>{const t=l;try{if(o.query.code){const e=await u("https://kauth.kakao.com/oauth/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=utf-8"},params:{grant_type:"authorization_code",client_id:t.VITE_REST_API,redirect_uri:t.VITE_REDIRECT_URI,code:o.query.code}});e?(a.changeLogIn(o.path),a.userToken=e.data.access_token,s.push("/")):console.log("Not found data")}else console.log("Not found code")}catch(e){console.log(e)}}),(t,e)=>(p(),i("div"))}});export{f as default};
