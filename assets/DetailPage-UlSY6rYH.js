import{d as m,u as x,r,o as u,c as v,a as e,n as $,h as l,t as i,e as _,C as y}from"./index-4Az9mWZ0.js";const P={class:"dp"},w={class:"detail-text"},B={class:"detail-name"},L={class:"price-group"},D={class:"price"},N={class:"detail-price md-line"},V={class:"detail-saleprice"},j={class:"detail-price"},z={class:"detail-ea"},E=e("div",{class:"ea-text"},"수량",-1),M={class:"ea-flex"},R={class:"ea ea-number"},q={class:"detail-total"},A=e("div",null,"총금액",-1),F=m({__name:"DetailItem",setup(p){const a=x(),t=a.detailItem,g=t.price.toLocaleString(),h=t.sale.toLocaleString(),f=(t.price-t.sale).toLocaleString(),c=r(0),n=r(),I=()=>{c.value>0?(c.value--,d()):alert("최저 갯수입니다.")},C=()=>{c.value++,d()},d=()=>{n.value=(c.value*t.sale).toLocaleString()},b=()=>{if(a.loginState==!0){let o=0;if(a.cartitems.length==0){const s={id:t.id,name:t.name,price:t.price,Image:t.Image,sale:t.sale,checked:!1,ea:1};a.addCartItem(s)}else{for(let s=0;s<a.cartitems.length;s++)a.cartitems[s].id==t.id?(a.cartitems[s].ea++,console.log("동작 했슴요")):(o++,console.log("다른템임"));if(a.cartitems.length==o){const s={id:t.id,name:t.name,price:t.price,Image:t.Image,sale:t.sale,checked:!1,ea:1};a.addCartItem(s)}}}},k=()=>{alert("정식 런칭 앱이 아니라서 구매기능은 구현되어있지 않습니다.")};return(o,s)=>(u(),v("div",null,[e("div",P,[e("div",{class:"detail-image",style:$({backgroundImage:`url(${l(t).Image})`})},null,4),e("div",w,[e("div",B,i(l(t).name),1),e("div",L,[e("div",D,[e("div",N,i(l(g))+"원/",1),e("div",V,i(l(h))+"원",1)]),e("div",j,"총 "+i(l(f))+"원 할인",1)]),e("div",z,[E,e("div",M,[e("div",{class:"ea cursor",onClick:s[0]||(s[0]=S=>I())},"-"),e("div",R,i(c.value),1),e("div",{class:"ea cursor",onClick:s[1]||(s[1]=S=>C())},"+")])]),e("div",q,[A,e("div",null,i(n.value)+" 원",1)]),e("div",{class:"detail-btn"},[e("div",{class:"cart-btn btn-box cursor",onClick:b},"장바구니"),e("div",{class:"buy-btn btn-box cursor",onClick:k},"구매하기")])])])]))}}),G={class:"total-container"},H={class:"wrap dt-wrap"},J={class:"detail-content"},O=m({__name:"DetailPage",setup(p){return(a,t)=>(u(),v("div",G,[e("div",H,[e("div",J,[_(F)]),_(y)])]))}});export{O as default};
