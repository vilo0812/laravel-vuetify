<template>
  <v-container>
    <v-row>
    <v-col sm="6">
      <v-card>
        <v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg"></v-img>
        <v-card-title> Lorem ipsum dolor</v-card-title>
        <v-card-text><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></v-card-text>
        <v-card-actions>
          <v-btn color="info" text>accion</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col sm="6">
      <v-card>
        <v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        >
          <v-card-title>imagen bonita</v-card-title>
        </v-img>
        <v-card-title> Lorem ipsum dolor</v-card-title>
        <v-card-text><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></v-card-text>
        <v-card-actions>
          <v-btn color="info" text @click="dialog = true">accion</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    </v-row>
    <!--Dialog-->
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title>
          Privacy Policy
        </v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--fin Dialog-->
  </v-container>
</template>
<script>
export default{
  data(){
    return{
      dialog:false
    }
  }
}
</script>
