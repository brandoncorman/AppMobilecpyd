<template>
    <ion-router-outlet/>
    <ion-page>
        <ion-list>
            <ion-item>
                <ion-label>
                    <p>Información climatológica de Chile.</p>
                </ion-label>
            </ion-item>
            <ion-item-sliding v-for="dato in datos" :key="dato.id">
                <ion-item>
                    <p>
                        {{dato.temperatura_maxima}};
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

const sitioURL  =  'http://localhost:81/APIparalela/public/grupo-u/climas';
const token = '3|GdQhgz4VFO3JkEoqRufDGKFWolCKS9btpOjChMvA';

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