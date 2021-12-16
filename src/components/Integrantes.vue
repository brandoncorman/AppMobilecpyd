<template>
    <ion-card>
        <ion-card-header>
        <ion-card-subtitle>Desarrollador</ion-card-subtitle>
        <ion-card-title>1</ion-card-title>
        </ion-card-header>
    </ion-card>

    <ion-card>
        <ion-card-header>
        <ion-card-subtitle>Desarrollador</ion-card-subtitle>
        <ion-card-title>2</ion-card-title>
        </ion-card-header>
    </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';

import { defineComponent } from 'vue';

export default defineComponent({
    components: { 
        IonCard, 
        IonCardContent, 
        IonCardHeader, 
        IonCardSubtitle, 
        IonCardTitle
    }
});
</script>

<style scoped>
    img {
        object-fit: cover;
        object-position: 100% 0;
        width: auto;
        height: 100vw;
        min-width: 100%;
    }
</style>