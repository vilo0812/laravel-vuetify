<template>
  <v-container>
    <v-row>
      <v-col sm="6">
        <v-card class="mb-3" v-for="(item,index) in listaTareas" :key="index">
          <v-card-title>
            <v-chip
               class="ma-2"
               color="pink"
               label
               text-color="white"
             >
               <v-icon left>mdi-label</v-icon>
               {{item.titulo}}
             </v-chip>
          </v-card-title>
          <v-card-text>
          <p>{{item.descripcion}}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="warning" text @click="editar(index)">editar</v-btn>
            <v-btn color="error" text @click="eliminarTarea(item.id)">eliminar</v-btn>
          </v-card-actions>
        </v-card>
        <!--<v-card>
          <v-card-title>
            <v-chip
               class="ma-2"
               color="pink"
               label
               text-color="white"
             >
               <v-icon left>mdi-label</v-icon>
               Titulo tarea #2
             </v-chip>
          </v-card-title>
          <v-card-text>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="warning" text>editar</v-btn>
            <v-btn color="error" text>eliminar</v-btn>
          </v-card-actions>
        </v-card>-->
      </v-col>
      <v-col sm="6" class="pa-3 mb-3">
        <v-card v-if="formAgregar">
          <v-form @submit.prevent="agregarTarea">
            <v-text-field label="titulo de tarea" v-model="titulo"></v-text-field>
            <v-textarea label="descripcion de tarea" v-model="descripcion"></v-textarea>
            <v-btn block color="success" type="submit">agregar tarea</v-btn>
          </v-form>
        </v-card>
        <v-card v-if="!formAgregar">
          <v-form @submit.prevent="guardarTareaEditada">
            <v-text-field label="titulo de tarea" v-model="titulo"></v-text-field>
            <v-textarea label="descripcion de tarea" v-model="descripcion"></v-textarea>
            <v-btn block color="warning" type="submit">editar tarea</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
    
    <v-snackbar
     v-model="snackbar"
   >
     {{ mensaje }}
     <v-btn
       color="pink"
       text
       @click="snackbar = false"
     >
       Cerrar
     </v-btn>
   </v-snackbar>  
  </v-container>
</template>

<script>
export default{
  data(){
    return{
      listaTareas:[
        {id:1,titulo:'titulo de tarea 1',descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {id:2,titulo:'titulo de tarea 2',descripcion:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
      ],
      titulo:'',
      descripcion:'',
      mensaje:'',
      snackbar:false,
      formAgregar:true,
      indexEditarTarea:null
    }
  },
  methods: {
    agregarTarea() {
      // console.log(this.titulo, this.descripcion);
      if(this.titulo === '' || this.descripcion === ''){
        this.snackbar = true
        this.mensaje = 'llena todos los campos!'
      }else{
        this.listaTareas.push({
          id: Date.now(),
          titulo: this.titulo,
          descripcion:this.descripcion
        })
        this.titulo = ''
        this.descripcion = ''
        this.snackbar = true
        this.mensaje = 'Tarea agregada'
      }
    },
    eliminarTarea(id){
      this.listaTareas = this.listaTareas.filter( e => e.id != id)      
    },
    editar(index){
      this.formAgregar = false
      this.titulo = this.listaTareas[index].titulo
      this.descripcion = this.listaTareas[index].descripcion
      this.indexEditarTarea = index
    },
    guardarTareaEditada(){
      this.listaTareas[this.indexEditarTarea].titulo = this.titulo
      this.listaTareas[this.indexEditarTarea].descripcion = this.descripcion
      this.formAgregar = true 
      this.titulo = ''
      this.descripcion = ''
      this.snackbar = true
      this.mensaje = 'editaste la tarea :3'
    }
  }
}
</script>
