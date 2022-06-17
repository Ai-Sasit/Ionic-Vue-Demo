<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text=""></ion-back-button>
        </ion-buttons>
        <ion-title>Receive Data</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card mode="ios">
        <img src="https://ionicframework.com/img/meta/ionic-vue-og.png?v1" />
        <ion-card-header>
          <ion-card-subtitle>VueJS Framework</ion-card-subtitle>
          <ion-card-title>Congratulations!</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Name: {{ name }}<br />
          Phone: {{ tel }}<br />
          Email: {{ email }}<br />
          Password: {{ password }}
        </ion-card-content>
      </ion-card>
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
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ReceiveData",
  props: ["data"],
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
  },
  created() {
    const payload = JSON.parse(this.data);
    this.name = payload.name;
    this.tel = payload.tel;
    this.email = payload.email;
    this.password = payload.password;
  },
  data() {
    return {
      name: "",
      tel: "",
      email: "",
      password: "",
    };
  },
});
</script>