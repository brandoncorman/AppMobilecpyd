<template>
    <LoadingScreen :isLoading="isLoading" />
    <div v-if="!isLoading">
        <ion-router-outlet/>
        <ion-page>
            <ion-list>
                <ion-item-sliding v-for="dato in datos" :key="dato.id">
                    <ion-item>
                        <p>
                            {{dato.nombre_estacion}}
                        </p>
                    </ion-item>
                    <ion-item-options side="end">
                        <ion-item-option @click="showDetails()">
                            <ion-icon slot="icon-only" :icon="informationCircle"></ion-icon>
                        </ion-item-option>
                    </ion-item-options>
                </ion-item-sliding>
            </ion-list>
        </ion-page>
    </div>
</template>

<script>
import { 
    IonItem, 
    IonList,
    IonItemSliding,
    IonItemOption, 
    IonItemOptions,
    IonIcon
} from '@ionic/vue';

import { informationCircle } from 'ionicons/icons';

import { defineComponent } from 'vue';
import axios from 'axios';

const sitioURL  =  'http://localhost:81/APIcpyd/public/grupo-c/climas';
const token = '4|KOwRA4T1yvcWjnjPaEbGid6E55Flyi8LWcZo3r9s';

export default defineComponent({
    components: {
        IonItem,
        IonList,
        IonItemSliding,
        IonItemOption, 
        IonItemOptions,
        IonIcon,
    },
    setup() {
        return {
            informationCircle
        }
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
    }
});
</script>

<style scoped>
    ion-thumbnail {
        position: relative;
        display: inline-block;
        text-align: center;
    }

    .centrado {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: black;
    }

    .centrado > strong {
        text-shadow: 2px 2px 0px rgba(0,0,0,0.6);
        color: white;
    }
</style>