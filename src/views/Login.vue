<template>
  <ion-page>
    <ion-content class="ion-padding">
      <img
        class="logo"
        src="..\assets\img\logo_utem_png.png"
      />
      <!-- <form>
        <ion-list>
          <ion-item>
            <ion-label>Email</ion-label>
            <ion-input type="email" v-model="email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Clave</ion-label>
            <ion-input type="password" v-model="password"></ion-input>
          </ion-item>
        </ion-list>
      </form> -->

        <!-- <ion-button expand="block" :routerLink="{ name: 'profile' }" >Iniciar sesión</ion-button>
        <ion-button color="danger" expand="block">
          Este botón no hace nada
        </ion-button> -->


        <div class="oauth-btns">
          Iniciar sesión con Utem.cl
        <ion-button expand="block" @click="googleAuth"><ion-icon slot="start" :icon="logoGoogle" />Google Utem</ion-button>
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
 /*  IonList,
  IonItem,
  IonLabel,
  IonInput, */
  IonButton,
  IonIcon
} from "@ionic/vue";

import { logoGoogle } from "ionicons/icons";

export default {
  name: "Login",
  components: {
    IonPage,
    IonContent,
    /* IonList,
    IonItem,
    IonLabel,
    IonInput, */
    IonButton,
    IonIcon
  },
  data() {
    return {
      email: null,
      password: null,
      googleUserProfile: undefined
    };
  },
  setup() {
    return {
      logoGoogle
    }
  },
  methods: {
    login() {
      console.log(this.user);
    },
    googleAuth() {
        const gapi = window.gapi;
        const clientId ="489748739332-lqo3a60is9pe4nfqqudnok4ff6b1ekef.apps.googleusercontent.com";
        const apiKey ="AIzaSyBCUwXORDTNZujm27yzs0UIDl1BgL8l9cg";
        const discoveryDocs =["https://www.googleapis.com/discovery/v1/apis/oauth2/v2/rest"];
        const scope ="https://www.googleapis.com/auth/userinfo.profile";
        gapi.load("client:auth2", () => {
            gapi.client.init({
                apiKey,
                clientId,
                discoveryDocs,
                scope,
            }).then(() => {
                if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
                    this.googleUserProfile = gapi.auth2.getAuthInstance().currentUser.get();
                    this.loginApiCall(this.googleUserProfile);
                    console.log("logged in...");
                } else {
                    gapi.auth2.getAuthInstance().signIn().then(() => {
                    this.googleUserProfile = gapi.auth2.getAuthInstance().currentUser.get();
                    this.loginApiCall(this.googleUserProfile);
                    console.log("NOT logged in...");
                    }).catch(err => {
                        /* alert(`Google auth error: ${err}`); */
                        /* alert(`Google auth error: ${err}`); */
                        console.log(err);
                    });
                }
            })
            .catch((err) => {
                console.log(err);
                /* alert(err); */
            })
        });
    },
    loginApiCall(data) {
      // API call to handle googleUserProfile data
      // then redirect to home/profile page
      console.log("googleUserProfile", data);
      this.$router.push("/tabs/tab1");
    }
  },
};
</script>

<style scoped>
.logo {
  display: block;
  margin: 24px auto;
  max-height: 96px;
}

ion-button {
  margin: 10px;
}

.oauth-btns {
  margin: 40px;
  text-align: center;
}
</style>