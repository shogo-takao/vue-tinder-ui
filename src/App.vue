<template>
  <div id="app">
    <Card :avatars="avatars"/>
  </div>
</template>

<script>
import Card from "./components/Card";

export default {
  name: "App",
  components: {
    Card
  },
  data() {
    return {
      avatars: [
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
          src:
            "http://w1nd.cc/promo/347.jpg"
        },
        {
          id: 4,
          src:
            "http://ell.h-cdn.co/assets/cm/15/01/54a769be3112d_-_elle-rata-insta-1-24375723.pngs"
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
