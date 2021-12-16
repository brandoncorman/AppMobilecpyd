<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title class="ion-margin-top">Integrantes</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <Integrantes/>
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

/* import ExploreContainer from '@/components/ExploreContainer.vue'; */
import Integrantes from '@/components/Integrantes.vue';

    export default  {
        name: 'Tab1',
        components: 
        { 
            /* ExploreContainer, */
            Integrantes,
            IonHeader,
            IonToolbar,
            IonTitle,
            IonContent,
            IonPage
        }
    }
</script>