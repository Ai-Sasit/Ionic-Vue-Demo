<template>
  <ion-page>
    <ion-header mode="ios">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text=""></ion-back-button>
        </ion-buttons>
        <ion-title>Page Detail</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
        <ion-card>
          <img src="https://ionicframework.com/img/meta/ionic-vue-og.png?v1" />
          <ion-card-header>
            <ion-card-subtitle>VueJS Framework</ion-card-subtitle>
            <ion-card-title>Congratulations!</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            You have successfully to use Roter Link in Ionic VueJS.
          </ion-card-content>
        </ion-card>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
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
  name: "PageDetail",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent
  },
});
</script>