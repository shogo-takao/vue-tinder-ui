<template>
  <div id="app">
    <Card :avatars="avatars"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { GET_AVATARS } from "./vuex/mutation-type";

import Card from "./components/Card";

export default {
  name: "App",
  components: {
    Card
  },
  computed: {
    ...mapGetters(["avatars"])
  },
  mounted() {
    this.GET_AVATARS();
  },
  methods: {
    ...mapActions([GET_AVATARS])
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
