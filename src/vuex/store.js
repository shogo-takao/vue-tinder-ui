import Vuex from "vuex";
import Vue from "vue";

import { GET } from "../util/api";

Vue.use(Vuex);

// State
const state = {
  avatars: []
};

const dummyRes = [
  {
    id: 1,
    src:
      "https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg"
  },
  {
    id: 2,
    src:
      "http://static.stylemagazin.hu/medias/29280/Nem-ehezik-a-Women-of-the-Year-legjobb-modell-dijara-eselyes-szepseg_32fc7c86954a8847610499a0fc7261e2.jpg"
  },
  {
    id: 3,
    src: "http://w1nd.cc/promo/347.jpg"
  },
  {
    id: 4,
    src:
      "http://ell.h-cdn.co/assets/cm/15/01/54a769be3112d_-_elle-rata-insta-1-24375723.png"
  },
  {
    id: 5,
    src:
      "http://static.stylemagazin.hu/medias/29280/Nem-ehezik-a-Women-of-the-Year-legjobb-modell-dijara-eselyes-szepseg_32fc7c86954a8847610499a0fc7261e2.jpg"
  }
];

// Action
const actions = {
  GET_AVATARS: async ({ commit }) => {
    let list = [];
    for (let i = 0; i < 5; i++) {
      // CORS....
      // const res = await GET("https://lorempixel.com/400/300/", {});
      const res = dummyRes[i];
      list.push(res);
    }
    commit("GET_AVATARS", list);
  }
};

// Mutation
const mutations = {
  GET_AVATARS: (state, list) => {
    state.avatars = list;
  }
};

// Getter
const getters = {
  avatars: state => state.avatars
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
