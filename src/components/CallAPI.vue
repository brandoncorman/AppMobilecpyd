<template>
    <ion-item v-for="dato in datos" :key="dato.id" button="true" @click="openModal(dato.nombre_estacion)">
        <ion-thumbnail slot="end" class="vertical-center">
                <!-- <ion-icon :icon="chevronForward" size="large"></ion-icon> -->
        </ion-thumbnail>
            <ion-label>
                    {{dato.nombre_estacion}}
            </ion-label>
    </ion-item>
</template>

<script lang="ts">
import { 
    IonLabel,
    IonThumbnail,
    IonItem,/* 
    IonIcon, */
    modalController
} from '@ionic/vue';

/* import { chevronForward } from 'ionicons/icons'; */
import { defineComponent } from 'vue';
import axios from 'axios';
import Modal from './Modal.vue';

const sitioURL  =  'https://api.sebastian.cl/grupo-c/climas';
const token = '2|viCVCaSYgP9hN2zk6UEhWYeLq0SmvArCcxoCW1T8';

export default defineComponent({
    name: "Home",
    /* setup() {
        return { chevronForward };
    }, */
    components: {
        IonItem,
        IonThumbnail,/* 
        IonIcon, */
        IonLabel
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
                    cssClass: 'ion-margin-top',
                    componentProps: {
                        titulo: nombreEstacion,
                        mapa: nombreEstacion.replace(/[.', ]/g, '')
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