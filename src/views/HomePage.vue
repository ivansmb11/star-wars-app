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
      <h2 style="text-align: center;">Bienvenido a la aplicación de Star Wars</h2>

      <div style="display: flex; justify-content: center;">
        <img src="../assets/starwarsLogo.png" alt="star wars logo">
      </div>

      <p style="text-align: center;">Desarrollada por Ivan Mendoza, José Contró y Pablo Botello.</p>
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
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonMenu, IonList, IonItem, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonMenu, IonList, IonItem, IonIcon, IonLabel, IonRouterOutlet },
});
</script>