<template>
  <ion-list>
    <ion-item>
      <ion-input type="text" placeholder="Longitud"></ion-input> 
    </ion-item>
    <ion-item>
      <ion-input type="password" placeholder="Latitud"></ion-input>
    </ion-item>
  </ion-list>
    <div padding="">  
      <ion-button color="primary" expand="block">Estimar</ion-button> 
    </div>
    <ion-item>
      <ion-thumbnail slot="start">
        <ion-icon name="rainy"></ion-icon>
      </ion-thumbnail>
      <ion-label>mm</ion-label>
    </ion-item>
    <ion-item>
      <ion-thumbnail slot="start">
      <ion-icon name="thermometer"></ion-icon>
      </ion-thumbnail>
      <ion-label>C°</ion-label>
    </ion-item>
    <ion-item>
      <ion-thumbnail slot="start">
      <ion-icon name="thermometer"></ion-icon>
      </ion-thumbnail>
      <ion-label>C°</ion-label>
    </ion-item>
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
import { rainy, thermometer } from 'ionicons/icons';

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
  setup(){
    return{
      rainy, thermometer
    }
  }
});
</script>