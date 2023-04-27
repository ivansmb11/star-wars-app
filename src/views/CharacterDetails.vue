<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>{{ character.name }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Detalles del personaje</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-grid>
            <ion-row>
              <ion-col size="3">Nombre:</ion-col>
              <ion-col>{{ character.name }}</ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="3">Género:</ion-col>
              <ion-col>{{ character.gender }}</ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="3">Altura:</ion-col>
              <ion-col>{{ character.height }} cm</ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="3">Peso:</ion-col>
              <ion-col>{{ character.weight }} kg</ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="3">Color de cabello:</ion-col>
              <ion-col>{{ character.hairColor }}</ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="3">Color de piel:</ion-col>
              <ion-col>{{ character.skinColor }}</ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="3">Color de ojos:</ion-col>
              <ion-col>{{ character.eyeColor }}</ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="3">Año de nacimiento:</ion-col>
              <ion-col>{{ character.birthYear }}</ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'CharacterDetails',
  components: { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol },
  setup() {
    const route = useRoute();

    const character = computed(() => {
      return {
        name: route.params.name,
        gender: route.params.gender,
        height: route.params.height,
        weight: route.params.weight,
        hairColor: route.params.hairColor,
        skinColor: route.params.skinColor,
        eyeColor: route.params.eyeColor,
        birthYear: route.params.birthYear,
      };
    });

    return {
      character,
    };
  },
};
</script>