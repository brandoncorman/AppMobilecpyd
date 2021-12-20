<template>
    <ion-page>
        <ion-list>
            <ion-item-sliding v-for="dato in datos" :key="dato.id">
                <ion-item>
                    <p>
                        {{dato.nombre_estacion}}
                    </p>
                </ion-item>
            </ion-item-sliding>
        </ion-list>
    </ion-page>
</template>

<script>
import { 
    IonItem, 
    IonList,
    IonItemSliding
} from '@ionic/vue';

import { defineComponent } from 'vue';
import axios from 'axios';

const sitioURL  =  'https://api.sebastian.cl/grupo-c/climas';
const token = '2|viCVCaSYgP9hN2zk6UEhWYeLq0SmvArCcxoCW1T8';

export default defineComponent({
    components: {
        IonItem,
        IonList,
        IonItemSliding
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