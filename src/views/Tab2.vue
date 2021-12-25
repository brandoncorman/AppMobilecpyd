<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
            <ion-buttons class="logout" slot="end" @click="logout">
                <ion-button>
                    Salir
                </ion-button>
            </ion-buttons>
                <ion-title>Integrantes</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <Integrantes/>
        </ion-content>
    </ion-page>
</template>

<script>
    import { 
        IonPage, 
        IonHeader, 
        IonToolbar, 
        IonTitle, 
        IonContent,
        IonButtons,
        IonButton 
    } from '@ionic/vue';

import Integrantes from '@/components/Integrantes.vue';

    export default  {
        name: 'Tab1',
        components: 
        { 
            Integrantes,
            IonHeader,
            IonToolbar,
            IonTitle,
            IonContent,
            IonPage,
            IonButtons,
            IonButton 
        },
        methods: {
            logout() {
                this.$router.push("/login");
                const gapi = window.gapi;
                gapi.auth2.getAuthInstance().disconnect();
                this.googleUserProfile = undefined;
            }
        }
    }
</script>