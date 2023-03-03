<template>
  <h2>products page</h2>
  <div class="d-flex flex-wrap gap-3">
     <div v-for="product in products" :key="product.title" class="card" style="width: 18rem">
    <img :src="product.imageUrl" class="card-img-top" :alt="product.title" />
    <div class="card-body">
      <h5 class="card-title">{{product.title}}</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <router-link :to="`product/${product.id}`" class="btn btn-primary">看產品</router-link>
    </div>
  </div>
  </div>
 
</template>
<script>
const { VITE_URL, VITE_PATH } = import.meta.env
export default {
  data() {
    return {
      products: []
    }
  },
  mounted() {
    this.$http
      .get(`${VITE_URL}api/${VITE_PATH}/products`)
      .then((res) => {
        console.log(res)
        this.products = res.data.products
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
