<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Personajes de Star Wars</ion-title>
      </ion-toolbar>
      <ion-searchbar v-model="searchText" placeholder="Buscar por nombre"></ion-searchbar>
    </ion-header>

    <ion-content>
      <ion-segment v-model="filter" color="primary">
        <ion-segment-button value="all">Todos</ion-segment-button>
        <ion-segment-button value="male">Masculino</ion-segment-button>
        <ion-segment-button value="female">Femenino</ion-segment-button>
      </ion-segment>

      <ion-list>
        <ion-item v-for="character in filteredCharacters" :key="character.id" :router-link="'/characters/' + character.id">
          <ion-avatar slot="start">
            <img :src="character.image">
          </ion-avatar>
          <ion-label>
            <h2>{{ character.name }}</h2>
            <p>{{ character.gender }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonSegment, IonSegmentButton, IonList, IonItem, IonAvatar, IonLabel } from '@ionic/vue';
import { ref, computed, watchEffect } from 'vue';
import axios from 'axios';

export default {
  name: 'CharactersPage',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonSegment, IonSegmentButton, IonList, IonItem, IonAvatar, IonLabel },
  setup() {
    const characters = ref([]);
    const searchText = ref('');
    const filter = ref('all');

    axios.get('https://swapi.dev/api/people/')
      .then(async response => {
        const results = response.data.results;
        for (let i = 0; i < results.length; i++) {
          const character = results[i];
          const id = character.url.split('/').slice(-2, -1)[0];
          const image = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
          const detailsResponse = await axios.get(character.url);
          const details = detailsResponse.data;
          characters.value.push({
            id,
            name: character.name,
            gender: character.gender,
            height: details.height,
            weight: details.mass,
            hairColor: details.hair_color,
            skinColor: details.skin_color,
            eyeColor: details.eye_color,
            birthYear: details.birth_year,
            image,
          });
        }
      })
      .catch(error => {
        console.error(error);
      });

    const filteredCharacters = computed(() => {
      return characters.value.filter(character => {
        if (filter.value === 'all') {
          return true;
        } else {
          return character.gender === filter.value;
        }
      }).filter(character => {
        return character.name.toLowerCase().includes(searchText.value.toLowerCase());
      });
    });

    watchEffect(() => {
      console.log(filteredCharacters.value);
    });

    return {
      characters,
      searchText,
      filter,
      filteredCharacters,
    };
  },
};
</script>

<style scoped>
ion-item ion-label h2 {
  font-size: 20px;
}

ion-item ion-label p {

font-size: 16px;
margin-top: 4px;
}
</style>