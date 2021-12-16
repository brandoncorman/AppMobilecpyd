<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="tab1" href="/tabs/tab1">
                    <ion-icon :icon="home"/>
                    <ion-label>Inicio</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="tab2" href="/tabs/tab2">
                    <ion-icon :icon="people"/>
                    <ion-label>Integrantes</ion-label>
                </ion-tab-button>

            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script lang="ts">
    import { 
        IonTabBar, 
        IonTabButton, 
        IonTabs, 
        IonLabel, 
        IonIcon, 
        IonPage, 
        IonRouterOutlet 
    } from '@ionic/vue';

    import { people, home } from 'ionicons/icons';

    export default {
        name: 'Tabs',
        props: ['pageTitle'],
        components: { 
            IonLabel, 
            IonTabs, 
            IonTabBar, 
            IonTabButton, 
            IonIcon,
            IonPage, 
            IonRouterOutlet 
        },
        setup() {
            return {
                people,
                home,
            }
        }
    }
</script>