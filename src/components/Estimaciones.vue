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
      <ion-button color="success" expand="block" @click="callApiEstimacion()">Calcular estimación</ion-button>
  </div>
    <ion-item lines="none" class="ion-text-center">
      <ion-thumbnail class="vertical-center">
        <ion-icon :icon="rainy" size="large"></ion-icon>
      </ion-thumbnail>
      <ion-label :v-if="latitud != null && longitud != null">{{datos[0].resultado_precipitacion}} mm</ion-label>
    </ion-item>
    <ion-item lines="none" class="ion-text-center">
      <ion-thumbnail class="vertical-center">
      <ion-icon :icon="thermometerOutline" size="large"></ion-icon>
      </ion-thumbnail>
      <ion-label :v-if="latitud != null && longitud != null">{{datos[0].resultado_max}} °C</ion-label>
    </ion-item>
    <ion-item lines="none" class="ion-text-center">
      <ion-thumbnail class="vertical-center">
      <ion-icon :icon="thermometer" size="large"></ion-icon>
      </ion-thumbnail>
      <ion-label :v-if="latitud != null && longitud != null">{{datos[0].resultado_min}} °C</ion-label>
    </ion-item>
    <ion-item lines="none" class="ion-text-center">
      <ion-thumbnail class="vertical-center">
      <ion-icon :icon="transgenderSharp" size="large"></ion-icon>
      </ion-thumbnail>
      <ion-label>Tremenda facha la de usted</ion-label>
    </ion-item>

<p>
  {{longitud}}</p>
  <p>
  {{latitud}}</p>
  
</template>

<script>
import { 
  IonItem,
  IonList,
  IonInput,
  IonButton,/* 
  IonHeader,
  IonToolbar,
  IonTitle, */
  IonIcon,
  IonThumbnail
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { rainy, thermometerOutline, thermometer, transgenderSharp} from 'ionicons/icons';
import axios from 'axios';

export default defineComponent({
  components: {
    IonItem,
    IonList,
    IonInput,
    IonButton,/* 
    IonHeader,
    IonToolbar,
    IonTitle, */
    IonIcon,
    IonThumbnail
  },
  data() {
    return {
      latitud: null,
      longitud: null,
      datos: null,
    };
  },
  setup(){
    return{
      rainy, thermometerOutline, thermometer, transgenderSharp
    };
  },
  /* mounted() {
    this.callApiEstimacion();
  }, */
  methods: {
    callApiEstimacion() {
      const urlApiEstimacion = "http://localhost:81/APIcpyd/public/grupo-c/" + this.longitud + "/" + this.latitud + "/estimacion";
      const token = "1|2TsaBbCn21waaEFpu1xi5etXPSC756slI1UVFjKb";
      axios.get(urlApiEstimacion, {
          headers: {
              Authorization: 'Bearer ' + token,
              'Content-Type' : 'application/json',
              'Accept' : 'application/json'
          }
      })
      .then(response => {
          this.datos = response.data
      })
    }
  },

  /*
  data: {
    longitud
    latitud
  },
  methods: {


  } */

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