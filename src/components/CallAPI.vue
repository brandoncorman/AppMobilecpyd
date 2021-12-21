<template>
    <ion-page>
        <ion-list>
            <ion-item-sliding v-for="dato in datos" :key="dato.id">
                <!-- setOpen(true) -->
                <ion-item button="true" @click="openModal">
                    <ion-thumbnail slot="end" class="vertical-center">
                            <ion-icon :icon="informationCircle" size="large"></ion-icon>
                    </ion-thumbnail>
                        <ion-label>
                            {{dato.nombre_estacion}}
                        </ion-label>
                </ion-item>
                <!-- <ion-modal
                    :is-open="isOpenRef"
                    @onDidDismiss="setOpen(false)"
                >
                <base-modal :rootPage="ModalHome"></base-modal>
                </ion-modal>   -->  
            </ion-item-sliding>
        </ion-list>
    </ion-page>
</template>

<script lang="ts">
import { 
    IonItem, 
    IonList,
    IonItemSliding,
    IonIcon,/* 
    IonModal, */
    modalController/* 
    BaseModal */
} from '@ionic/vue';

import { informationCircle } from 'ionicons/icons';
import { defineComponent /* , ref  */} from 'vue';
/* import BaseModal from "./BaseModal.vue";
import ModalHome from "./ModalHome.vue"; */
import axios from 'axios';
import Modal from './Modal.vue';

const sitioURL  =  'https://api.sebastian.cl/grupo-c/climas';
const token = '2|viCVCaSYgP9hN2zk6UEhWYeLq0SmvArCcxoCW1T8';
  
export default defineComponent({
    name: "Home",
    setup() {
        /* const isOpenRef = ref(false);
        const setOpen = (state: boolean) => (isOpenRef.value = state); */
        return { /* isOpenRef, setOpen,  ModalHome, */ informationCircle };
    },
    components: {
        IonItem,
        IonList,
        IonItemSliding,
        IonIcon/* 
        IonModal,
        BaseModal */
    },
    data() {
        return {
            datos:null
        }
    },
    mounted() {
        this.getDatos();
    },
    methods: {
        getDatos() {
            axios.get(sitioURL, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type' : 'application/json',
                    'Accept' : 'application/json'
                }
            })
            .then(response => {
                this.datos = response.data
            })
        },
        async openModal() {
            const modal = await modalController
                .create({
                component: Modal,
                cssClass: 'my-custom-class',
                componentProps: {
                    title: 'New Title'
                },
                })
            return modal.present();
        },
    }
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

<!--<template>
  <ion-page>
      <ion-button @click="openModal">Open Modal</ion-button>
  </ion-page>
</template>

<script>
import { IonButton, /* IonContent */ IonPage, modalController } from '@ionic/vue';
import Modal from './modal.vue'

export default {
  components: { IonButton, /* IonContent, */ IonPage },
  methods: {
    async openModal() {
      const modal = await modalController
        .create({
          component: Modal,
          cssClass: 'my-custom-class',
          componentProps: {
            title: 'New Title'
          },
        })
      return modal.present();
    },
  },
}
</script>-->