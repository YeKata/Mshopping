import{d as m,r as g,A as e,B as o,C as r,D as h,Y as i,Z as d,E as l,_ as I,u as s,$ as w,a0 as x,a1 as k}from"./swiper-vue.17f8de98.js";import{_ as y}from"./ProductList.vue.6e334974.js";import{_ as S}from"./CopyRight.60144985.js";import{u as j}from"./index.598285eb.js";import"./entry.16d1cc6a.js";const v=[{Id:0,Image:"https://img.freepik.com/free-photo/vibrant-colors-silk-textiles-create-elegance-generated-by-ai_188544-37191.jpg?t=st=1696652348~exp=1696655948~hmac=a8178da2c843c1bd584f4eb1c07e26406f50c3957ca9fb77304a79248347ee15&w=2000"},{Id:1,Image:"https://img.freepik.com/free-photo/top-view-fabric-texture_23-2148952745.jpg?w=1800&t=st=1696658702~exp=1696659302~hmac=3aab096d7fd24c130365cd37f6b2a2f58efbd52823ebc3d885c71baf10881e84"},{Id:2,Image:"https://img.freepik.com/free-photo/multi-color-fabric-texture-samples_1373-434.jpg?w=1800&t=st=1696658970~exp=1696659570~hmac=8f39dd3b7a696d868cbe80c7a51361348328995cca8b0d40e6d457f1a69b5b4e"},{Id:3,Image:"https://img.freepik.com/free-photo/close-up-wool-texture-details_23-2149620481.jpg?w=740&t=st=1696658785~exp=1696659385~hmac=1c94d0ce12ab0696a7fffd473e417d752a1ecea82400b3bfa27208ab77bbf639"},{Id:4,Image:"https://img.freepik.com/free-photo/close-up-wool-texture-details_23-2149620477.jpg?w=740&t=st=1696658851~exp=1696659451~hmac=b181998a34dc28f05ff01b63c17455404ab945ccbe3505a05ca7337eb718c961"},{Id:5,Image:"https://img.freepik.com/free-photo/detail-color-fabric-texture-samples_1373-99.jpg?w=1480&t=st=1696658884~exp=1696659484~hmac=b5e02b5df6dcb462edb4e3265bf373368ef3afd15ceed7edf24519ce4916a124"}],A=m({__name:"ItemSlider",setup(f){const p=g(v);return(t,u)=>{const n=x,c=k;return e(),o("div",null,[r(c,{loop:!0,speed:500,autoplay:{delay:3e3,disableOnInteraction:!1},modules:["SwiperAutoplay"in t?t.SwiperAutoplay:s(w)]},{default:h(()=>[(e(!0),o(i,null,d(s(p),a=>(e(),l(n,{key:a.Id,style:I({background:`url(${a.Image})  no-repeat center center/cover`})},null,8,["style"]))),128))]),_:1},8,["modules"])])}}}),O=m({__name:"index",setup(f){const t=j().products;return(u,n)=>{const c=A,a=y,_=S;return e(),o("div",null,[r(c),(e(!0),o(i,null,d(Object.entries(s(t)),b=>(e(),l(a,{product:b},null,8,["product"]))),256)),r(_)])}}});export{O as default};
