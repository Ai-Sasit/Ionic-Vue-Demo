<template>
  <ion-page>
    <ion-header mode="ios">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text=""></ion-back-button>
        </ion-buttons>
        <ion-title>Binding Data Alert</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card>
        <ion-list>
          <ion-list>
            <ion-item lines="full">
              <ion-label>Name</ion-label>
              <ion-input type="text" v-model="name"></ion-input>
            </ion-item>
            <ion-item lines="full">
              <ion-label>Phone</ion-label>
              <ion-input type="tel" v-model="tel"></ion-input>
            </ion-item>
            <ion-item lines="full">
              <ion-label>Email</ion-label>
              <ion-input type="email" v-model="email"></ion-input>
            </ion-item>
            <ion-item lines="full">
              <ion-label>Password</ion-label>
              <ion-input type="password" v-model="password"></ion-input>
            </ion-item>
                <ion-button expand="full" fill="clear" @click="() => showData()">Show Data</ion-button>
          </ion-list>
        </ion-list>
      </ion-card>
      
      <ion-modal
        :is-open="modelHandle"
        :swipe-to-close="true"
        :presenting-element="$parent.$refs.ionRouterOutlet"
      >
        <ion-content>
          <ion-header mode="ios">
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-back-button text=""></ion-back-button>
              </ion-buttons>
              <ion-title>Show Input Data</ion-title>
              <ion-chip slot="end" color="danger" @click="() => hideData()">
                <ion-label color="danger">close</ion-label>
              </ion-chip>
            </ion-toolbar>
          </ion-header>
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
      </ion-modal>
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
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonModal,
  IonChip,
} from "@ionic/vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "BindDataAlert",
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
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonModal,
    IonChip,
  },
  data() {
    return {
      name: "",
      tel: "",
      email: "",
      password: "",
      modelHandle: false,
    };
  },
  methods: {
    alert(message) {
      alert(message);
    },
    showData() {
      this.modelHandle = true;
    },
    hideData() {
      this.modelHandle = false;
    },
  },
});
</script>