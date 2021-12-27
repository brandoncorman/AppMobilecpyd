<template>
  <ion-list>
    <ion-item>
        <ion-avatar slot="start">
            <img src="../assets/img/icono.png" />
        </ion-avatar>
        <ion-label>
            <h2>Diego Ahumada Moreno</h2>
            <h3>UTEM</h3>
            <p>Estudiante de Ing. Civil en</p>
            <p>Computación mención Informática</p>
        </ion-label>
    </ion-item>
    <ion-item>
        <ion-avatar slot="start">
            <img src="../assets/img/icono.png" />
        </ion-avatar>
        <ion-label>
            <h2>Brandon Corman Genovez</h2>
            <h3>UTEM</h3>
            <p>Estudiante de Ing. Civil en</p>
            <p>Computación mención Informática</p>
        </ion-label>
    </ion-item>
    <ion-item>
        <ion-avatar slot="start">
            <img src="../assets/img/icono.png" />
        </ion-avatar>
        <ion-label>
            <h2>Lukas Jara Marin</h2>
            <h3>UTEM</h3>
            <p>Estudiante de Ing. Civil en</p>
            <p>Computación mención Informática</p>
        </ion-label>
    </ion-item>
  </ion-list>

</template>

<script>
import { 
  IonItem,
  IonList, 
  IonLabel,
  IonAvatar
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonItem,
    IonList, 
    IonLabel,
    IonAvatar
  }
});
</script>