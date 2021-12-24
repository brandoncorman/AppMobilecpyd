<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Wena crack

        </ion-title>

        <div class="logout" slot="end" @click="logout">
          Salir
        </div>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <h1>Wena los pibes, esta es mi página</h1>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from "@ionic/vue";

export default {
  name: "Explorer",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
  },
  methods: {
    logout() {
      this.$router.push("/login");
      // var gapi = window.gapi;
      //  gapi.auth2.getAuthInstance().disconnect();
      //  this.googleUserProfile = undefined;
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.logout {
  margin-right: 20px;
}
</style>
