<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
            <ion-buttons class="logout" slot="end" @click="logout">
                <ion-button>
                    Salir
                </ion-button>
            </ion-buttons>
            <!-- <div class="logout" slot="end" @click="logout">Salir</div> 
            /* class="ion-margin-top" */-->
                <ion-title >Estimaciones</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <Estimaciones/>
        </ion-content>
    </ion-page>
</template>

<!--lang="ts"-->
<script >
    import { 
        IonPage,
        IonHeader, 
        IonToolbar, 
        IonTitle, 
        IonContent,
        IonButtons,
        IonButton 
    } from '@ionic/vue';

    import Estimaciones from '@/components/Estimaciones.vue';

    export default  {
        name: 'Tab3',
        components: 
        { 
            Estimaciones,
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
};
</script>