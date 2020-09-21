/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import { FeathersVuex } from 'feathers-vuex';
import auth from './store.auth';


Vue.use(Vuex);
Vue.use(FeathersVuex)


export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  plugins: [auth]
});
