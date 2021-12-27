<template>
    <ion-item v-for="dato in datos" :key="dato.id" button="true" @click="openModal(dato.nombre_estacion)" detail>
        <ion-label>
            {{dato.nombre_estacion}}
        </ion-label>
    </ion-item>
</template>

<script lang="ts">
import { 
    IonLabel,
    IonItem,
    modalController
} from '@ionic/vue';

import { defineComponent } from 'vue';
import axios from 'axios';
import Modal from './Modal.vue';

const sitioURL  =  'https://api.sebastian.cl/grupo-c/climas';
const token = '2|viCVCaSYgP9hN2zk6UEhWYeLq0SmvArCcxoCW1T8';

export default defineComponent({
    name: "Home",
    components: {
        IonItem,
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