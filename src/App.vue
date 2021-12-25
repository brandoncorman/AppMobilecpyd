<template>
  <ion-app>
    
        <LoadingScreen :isLoading="isLoading" />
        <ion-router-outlet v-if="!isLoading"/>
       <!-- <main v-if="!isLoading">
            <Login />
        </main> -->
  </ion-app>
</template>

<script>/* 
import Login from "./views/Login"; */
import LoadingScreen from "./views/LoadingScreen";
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: "App",
  components: { 
    IonApp,
    IonRouterOutlet,/* 
    Login, */
    LoadingScreen
  },
  data() {
    return { isLoading: true };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 5000); /* luego cambiar a 3000 */
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>