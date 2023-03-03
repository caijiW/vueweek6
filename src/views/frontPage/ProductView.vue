<template>
    <h2>產品頁</h2>
    {{product.title}}
    <img :src="product.imageUrl" :alt="product.title">
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
    data(){
        return{
            product:{}
        }
    },
     mounted() {
        //console.log(this.$route.params.id);
        const { id } = this.$route.params;
    this.$http
      .get(`${VITE_URL}api/${VITE_PATH}/product/${id}`)
      .then((res) => {
        console.log(res)
        this.product=res.data.product;
        console.log(this.product);
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
<style>
img{
    width: 200px;
}
</style>