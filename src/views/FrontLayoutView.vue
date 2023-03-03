<template>
  <NavbarComponent></NavbarComponent>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue'
export default {
  components: {
    NavbarComponent
  }
}
</script>
