<template>
  <v-app>
    <Header></Header>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/NavBar.vue'
export default {
  components: {
    Header
  }
}
</script>
