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
                <ion-title >Lista de estaciones</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <CallAPI/>
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