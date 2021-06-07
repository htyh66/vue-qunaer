<template>
  <div>
    <city-header></city-header>
  </div>
</template>

<script>
import CityHeader from "./components/Header.vue";
export default {
  components: {
    CityHeader,
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.geCityInfoSucc);
    },
    getCityInfoSucc(cityRes) {
      cityRes = cityRes.data;
      if (cityRes.ret && cityRes.data) {
        const data = cityRes.data;
      }
    },
  },
};
</script>

<style>
</style>