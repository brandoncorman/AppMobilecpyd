<template>
  <ion-header>
    <ion-toolbar>
        <ion-buttons slot="start">
        <ion-button @click="closeModal">
            <ion-icon name="chevron-back"></ion-icon>
        </ion-button>
      </ion-buttons>
      <ion-title class="ion-text-center">{{ titulo }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content fullscreen>
    <ion-card>
      <img class="center" :src="require('@/assets/img/mapas/' + mapa + '.png')">
      <ion-card-header>
        <!-- <ion-card-title>{{descripcion[mapa]}}</ion-card-title> -->
        <ion-card-content>
            {{descripcion[mapa]}}
        </ion-card-content>
      </ion-card-header>
    </ion-card>
  </ion-content>
</template>

<script>
import { IonHeader, IonButton, IonContent, IonButtons, IonIcon, IonTitle, IonToolbar, modalController, IonCard, IonCardHeader, IonCardContent } from '@ionic/vue';
import { chevronBack } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Modal',
  props: {
    titulo: { type: String, default: 'Estación' },
    mapa: { type: String, default: 'Imagen' }
  },
  setup () {
      const closeModal = async () => {
      await modalController.dismiss();
    };
    return {
      closeModal, chevronBack
    };
  },
  data() {
    return {
      descripcion: {
      BalmacedaAd: 'Se ubica en la ciudad de Coyhaique, en la región de Aysén, en la zona austral de nuestro país.',
      CañalBajoOsornoAd: 'Se ubica en la zona sur de nuestro país, en la región de Los Lagos.',
      CarlosIbañezPuntaArenasAp: 'Está localizado en el extremo sur de Chile, entre la Patagonia, la isla Grande de Tierra del Fuego y varias islas ubicadas al oeste de esta hacia el océano Pacífico.',
      CarrielSurConcepciónAp: 'Se ubica en la zona central de nuestro país, al suroeste de Santiago, en la Región del Biobío.',
      CerroMorenoAntofagastaAp: 'Se ubica al norte de nuestro país en la región de Antofagasta.',
      ChacallutaAricaAp: 'Se ubica al entre el Norte de nuestro país y sur de Perú, en la Región de Arica y Parinacota',
      DesiertodeAtacamaCalderaAd: 'Se ubica al norte de nuestro país, cercano al desierto de Atacama.',
      DiegoAracenaIquiqueAp: 'Se ubica al norte de nuestro país, en la región de Iquique, cerca de Tarapacá.',
      ElLoaCalamaAd: 'Se ubica al norte de nuestro país, en Calama, región de Antofagasta.',
      ElTepualPuertoMonttAp: 'Se ubica en la zona sur de nuestro país, en la región de Los Lagos.',
      EulogioSánchezTobalabaAd: 'Se ubica en la zona central de nuestro país, en la región metropolitana.',
      GeneralBernardoOHigginsChillánAd: 'Se ubica en la zona central de nuestro país, en la región de Ñuble.',
      GeneralFreireCuricóAd: 'El Aeródromo General Freire, es un terminal ubicado al norte de la ciudad de Curicó, Provincia de Curicó, Región del Maule, Chile.',
      JuanFernándezEstaciónMeteorológica: 'Juan Fernández es una comuna perteneciente a la provincia y Región de Valparaíso, Chile.',
      LaFloridaLaSerenaAd: 'Se ubica en la zona norte de nuestro país (norte chico), en la región de Coquimbo.',
      MaquehueTemucoAd: 'Se ubica en la ciudad de Vilcún,al sur de Chile, en la región de la Araucanía.',
      PichoyValdiviaAd: 'Se ubica al sur de nuestro país, en la región de los Ríos.',
      PudahuelSantiago: 'Se ubica en la zona central de nuestro país, en la región Metropolitana.',
      PuntaÁngelesfaro: 'Se ubica cerca del Camino Costero, en la ciudad de Valparaíso, en la región de Valparaíso.',
      QuintaNormalSantiago: 'Se ubica en la zona central de nuestro país, cercana a la comuna de las condes, en la región Metropolitana.',
      RodelilloAd: 'Se ubica en la zona central de nuestro país, cerca de Valparaíso.',
      TenienteVidalCoyhaiqueAd: 'Se ubica en la ciudad de Coyhaique, en la región de Aysén, en la zona austral de nuestro país.'
      },
      content: 'Content',
    }
  },
  components: { IonHeader, IonTitle, IonContent, IonButton, IonButtons, IonIcon, IonToolbar, IonCard, IonCardHeader, IonCardContent }
});
</script>

<style scoped>
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}
</style>