import { createRouter, createWebHistory } from '@ionic/vue-router';
import CharactersPage from '../views/CharactersPage.vue';
import CharacterDetails from '../views/CharacterDetails.vue';
import HomePage from '@/views/HomePage.vue';

const routes: Array<any> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/characters',
    name: 'Characters',
    component: CharactersPage,
  },
  {
    path: '/characters/:id',
    name: 'CharacterDetails',
    component: CharacterDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;