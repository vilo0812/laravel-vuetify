<template>
<div>
    <v-toolbar class="info" dark >
    <v-btn icon>
      <v-icon @click="toogleDrawer">mdi-view-headline</v-icon>
    </v-btn>
      <v-toolbar-title>vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn to="/tareas">tareas</v-btn>
        
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
    <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    >
      <v-list>
         <v-list-item-group>
           <v-list-item>
             <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
              </v-list-item-content>
           </v-list-item>
           <v-divider></v-divider>
           <v-list-item to="/">
               <v-icon>mdi-home-city</v-icon>
               <v-list-item-title>Home</v-list-item-title>
           </v-list-item>
           <v-divider></v-divider>
           <v-list-item to="/tareas">
               <v-icon>mdi-format-list-checks</v-icon>
               <v-list-item-title>Tareas</v-list-item-title>
           </v-list-item>
         </v-list-item-group>
       </v-list>
    </v-navigation-drawer>
    
  </div>
</template>
<script>
export default{
  data(){
    return{
      drawer:null
    }
  },
  methods: {
    toogleDrawer() {
      this.drawer = !this.drawer;
    }
  }
}
</script>
