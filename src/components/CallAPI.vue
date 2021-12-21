<template>
    <ion-page>
        <ion-list>
            <ion-item-sliding v-for="dato in datos" :key="dato.id">
                <ion-item button="true" @click="openModal(dato.nombre_estacion)">
                    <ion-thumbnail slot="end" class="vertical-center">
                            <ion-icon :icon="informationCircle" size="large"></ion-icon>
                    </ion-thumbnail>
                        <ion-label>
                            {{dato.nombre_estacion}}
                        </ion-label>
                </ion-item>
            </ion-item-sliding>
        </ion-list>
    </ion-page>
</template>

<script lang="ts">
import { 
    IonItem, 
    IonList,
    IonItemSliding,
    IonIcon,
    modalController
} from '@ionic/vue';

import { informationCircle } from 'ionicons/icons';
import { defineComponent } from 'vue';
import axios from 'axios';
import Modal from './Modal.vue';

const sitioURL  =  'https://api.sebastian.cl/grupo-c/climas';
const token = '2|viCVCaSYgP9hN2zk6UEhWYeLq0SmvArCcxoCW1T8';
  
export default defineComponent({
    name: "Home",
    setup() {
        return { informationCircle };
    },
    components: {
        IonItem,
        IonList,
        IonItemSliding,
        IonIcon
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
        async openModal(nombreEstacion: string) {
            const modal = await modalController
                .create({
                    component: Modal,
                    cssClass: 'my-custom-class',
                    componentProps: {
                        title: nombreEstacion,
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