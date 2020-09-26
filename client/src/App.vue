<template>
  <v-app>
    <v-main>
      <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      </v-app-bar>
      <router-view/>
    </v-main>
    <v-footer
      dark
      padless
    >
      <v-card
        class="flex"
        flat
        tile
      >
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Made With 🖤 🧡 Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
/* eslint-disable */
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
};
</script>
 