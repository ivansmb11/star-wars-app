<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Inicio</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <p>Bienvenido a la aplicación de Star Wars</p>

      <ion-item>
        <ion-label position="floating">Nombre</ion-label>
        <ion-input></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Correo electrónico</ion-label>
        <ion-input></ion-input>
      </ion-item>
    </ion-content>

    <ion-menu side="start" content-id="main">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Menú</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item :router-link="'/characters'">
            <ion-icon slot="start" name="people-outline"></ion-icon>
            <ion-label>Personajes</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-router-outlet id="main"></ion-router-outlet>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonMenu, IonList, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonInput } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonMenu, IonList, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonInput },
});
</script>