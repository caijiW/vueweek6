import{_ as I,o as d,c,a as t,F as i,e as _,t as a,f,g,v as C,d as v,h as b}from"./index-a3de4301.js";const{VITE_URL:u,VITE_PATH:h}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"caiji_hexschool",BASE_URL:"/vueweek6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},x={data(){return{carts:[],loadingId:"",updataloadingId:""}},methods:{getCartList(){this.$http.get(`${u}api/${h}/cart`).then(e=>{console.log(e),this.carts=e.data.data}).catch(e=>{console.log(e)})},delCartItem(e){this.loadingId=e,this.$http.delete(`${u}api/${h}/cart/${e}`).then(l=>{console.log(l),this.loadingId="",this.getCartList()}).catch(l=>{console.log(l)})},updateCartItem(e){this.updataloadingId=e.product.id;const l={product_id:e.product.id,qty:e.qty};this.$http.put(`${u}api/${h}/cart/${e.id}`,{data:l}).then(r=>{console.log(r),this.updataloadingId="",this.getCartList()}).catch(r=>{console.log(r)})}},mounted(){this.getCartList()}},y=t("h2",null,"購物車",-1),V={key:0,class:"table align-middle"},$=t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",null,"單價"),t("th",null,"小計")])],-1),k=["onClick"],E={class:"fas fa-spinner fa-pulse"},L={class:"input-group input-group-sm"},m={class:"input-group mb-3"},T=["onChange","onUpdate:modelValue","disabled"],S=["value"],w={class:"input-group-text",id:"basic-addon2"},D=t("td",{colspan:"4",class:"text-end"},"總計：",-1),R={class:"text-start"},U=t("tr",null,null,-1);function q(e,l,r,B,n,p){return d(),c(i,null,[y,n.carts.carts?(d(),c("table",V,[$,t("tbody",null,[(d(!0),c(i,null,_(n.carts.carts,s=>(d(),c("tr",{key:s.product.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:o=>p.delCartItem(s.id)},[g(t("i",E,null,512),[[C,s.id===n.loadingId]]),v(" x ")],8,k)]),t("td",null,a(s.product.title)+" ",1),t("td",null,[t("div",L,[t("div",m,[g(t("select",{class:"form-select",onChange:o=>p.updateCartItem(s),"onUpdate:modelValue":o=>s.qty=o,disabled:n.updataloadingId===s.product.id},[(d(),c(i,null,_(10,o=>t("option",{key:o+1,value:o},a(o),9,S)),64))],40,T),[[b,s.qty]]),t("span",w,a(s.product.unit),1)])])]),t("td",null,a(s.product.price),1),t("td",null,a(s.total),1)]))),128))]),t("tfoot",null,[t("tr",null,[D,t("td",R,a(n.carts.total),1)]),U])])):f("",!0)],64)}const N=I(x,[["render",q]]);export{N as default};
