<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title class="ion-margin-top">Lista de estaciones</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <CallAPI/>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import { 
        IonPage,
        IonHeader, 
        IonToolbar, 
        IonTitle, 
        IonContent 
    } from '@ionic/vue';

import CallAPI from '@/components/CallAPI.vue';

    export default  {
        name: 'Tab1',
        components: 
        { 
            CallAPI,
            IonHeader,
            IonToolbar,
            IonTitle,
            IonContent,
            IonPage
        }
    }
</script>