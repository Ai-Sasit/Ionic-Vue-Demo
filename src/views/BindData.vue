<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button text=""></ion-back-button>
        </ion-buttons>
        <ion-title>Binding Data</ion-title>
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
            <ion-button expand="full" fill="clear" @click="() => sendData()"
              >Send</ion-button
            >
          </ion-list>
        </ion-list>
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
  IonList,
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
} from "@ionic/vue";
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
export default defineComponent({
  name:"BindData",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonCard,
    IonList,
    IonItem,
    IonInput,
    IonButton,
    IonLabel,
  },
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
  methods: {
    sendData(){
      let payload = JSON.stringify({name: this.name, tel: this.tel, email: this.email, password: this.password})
      this.router.push({name:"ReceiveData", params: {data: payload}});
    }
  }
});
</script>