<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>

<script>
import CityHeader from "./components/Header.vue";
import CitySearch from "./components/Search.vue";
import CityList from "./components/List.vue";
export default {
  components: {
    CityHeader,
    CitySearch,
    CityList
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