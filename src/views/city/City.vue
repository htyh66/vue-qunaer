<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "./components/Header.vue";
import CitySearch from "./components/Search.vue";
import CityList from "./components/List.vue";
import CityAlphabet from "./components/Alphabet.vue";
import axios from "axios";
export default {
    data(){
        return {
            cities: {},
            hotCities: [],
        }
    },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.getCityInfoSucc);
    },
    getCityInfoSucc(cityRes) {
      cityRes = cityRes.data
      if (cityRes.ret && cityRes.data) {
        const data = cityRes.data
        this.hotCities = data.hotCities
        this.cities = data.cities
        
      }
    },
  },
  mounted(){
      this.getCityInfo();
  }
};
</script>

<style>
</style>