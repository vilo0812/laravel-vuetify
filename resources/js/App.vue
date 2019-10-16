<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title class="headline text-uppercase">
      <span>Vuetify 2.0.7 with laravel 5.8</span>
      <v-icon color="rgb(255, 26, 0)">mdi-cards-heart</v-icon>
      <span class="font-weight-light">MATERIAL DESIGN</span>
      <v-icon color="rgb(0, 64, 255)">mdi-material-design</v-icon>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
      flat
      href="https://vuetifyjs.com/en/"
      tarnget="_blank"
      >
      <span>Vuetify</span>
      <v-icon color="rgb(73, 73, 73)">mdi-open-in-new</v-icon>
      </v-btn>
    </v-toolbar>
  </v-app>
</template>

<script>
export default {
}
</script>
<style>
.fondo{
  background-color:rgb(44, 0, 255);
}
</style>
<style lang="sass">
.sass
  background: map-get($material-light, 'cards')
</style>

<style lang="scss">
.scss {
  background: map-get($material-light, 'cards')
}
</style>
