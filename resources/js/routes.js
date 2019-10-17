// import ExampleComponent from './components/ExampleComponent.vue';
import Home from './views/Home.vue';
import Tareas from './views/Tareas.vue';

export const routes = [
  {
    path:'/',
    component:Home
  },
  {
    path:'/tareas',
    component:Tareas
  }
]
