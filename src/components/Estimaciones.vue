<template>
  <ion-list>
    <ion-item>
      <ion-input type="text" placeholder="Longitud" v-model="longitud"></ion-input> 
    </ion-item>
    <ion-item>
      <ion-input type="text" placeholder="Latitud" v-model="latitud"></ion-input>
    </ion-item>
  </ion-list>
  <div padding="">  
      <ion-button color="success" expand="block" @click="callApiEstimacion">Calcular estimación</ion-button>
  </div>
  <div v-if = "datos != null">
    <ion-item lines="none" class="ion-text-center">
      <ion-thumbnail class="vertical-center">
        <ion-icon :icon="rainy" size="large"></ion-icon>
      </ion-thumbnail>
      <ion-label>{{datos.resultado_precipitacion}} mm</ion-label>
    </ion-item>
    <ion-item lines="none" class="ion-text-center">
      <ion-thumbnail class="vertical-center">
      <ion-icon :icon="thermometerOutline" size="large"></ion-icon>
      </ion-thumbnail>
      <ion-label>{{datos.resultado_max}} °C</ion-label>
    </ion-item>
    <ion-item lines="none" class="ion-text-center">
      <ion-thumbnail class="vertical-center">
      <ion-icon :icon="thermometer" size="large"></ion-icon>
      </ion-thumbnail>
      <ion-label>{{datos.resultado_min}} °C</ion-label>
    </ion-item>
  </div>

  <div v-else>
    <ion-item lines="none" class="ion-text-center">
      <ion-thumbnail class="vertical-center">
        <ion-icon :icon="rainy" size="large"></ion-icon>
      </ion-thumbnail>
      <ion-label> mm</ion-label>
    </ion-item>
    <ion-item lines="none" class="ion-text-center">
      <ion-thumbnail class="vertical-center">
      <ion-icon :icon="thermometerOutline" size="large"></ion-icon>
      </ion-thumbnail>
      <ion-label>°C</ion-label>
    </ion-item>
    <ion-item lines="none" class="ion-text-center">
      <ion-thumbnail class="vertical-center">
      <ion-icon :icon="thermometer" size="large"></ion-icon>
      </ion-thumbnail>
      <ion-label>°C</ion-label>
    </ion-item>
  </div>

  
</template>

<script>
import { 
  IonItem,
  IonList,
  IonInput,
  IonButton,
  IonIcon,
  IonThumbnail
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { rainy, thermometerOutline, thermometer } from 'ionicons/icons';
import axios from 'axios';

export default defineComponent({
  components: {
    IonItem,
    IonList,
    IonInput,
    IonButton,
    IonIcon,
    IonThumbnail
  },
  data() {
    return {
      latitud: null,
      longitud: null,
      datos: null
    };
  },
  setup(){
    return{
      rainy, thermometerOutline, thermometer
    };
  },
  methods: {
    callApiEstimacion() {
      const urlApiEstimacion = "https://api.sebastian.cl/grupo-c/" + this.longitud + "/" + this.latitud + "/estimacion";
      const token = "2|viCVCaSYgP9hN2zk6UEhWYeLq0SmvArCcxoCW1T8";
      axios.get(urlApiEstimacion, {
          headers: {
              Authorization: 'Bearer ' + token,
              'Content-Type' : 'application/json',
              'Accept' : 'application/json'
          }
      })
      .then(response => {
          this.datos = response.data
      });
    },
    
  },
});
</script>
<style scoped>
    .vertical-center{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>