<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hotCities="hotCities"
      :letter="letter"
    ></city-list>
    <city-alphabet :cities="cities" @change="letterChange"
    
    ></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "./components/Header.vue";
import CitySearch from "./components/Search.vue";
import CityList from "./components/List.vue";
import CityAlphabet from "./components/Alphabet.vue";
import axios from "axios";
export default {
  data() {
    return {
      cities: {},
      hotCities: [],
      letter:'',
    };
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  methods: {
    getCityInfo() {
      axios.get("/api/city.json").then(this.getCityInfoSucc);
    },
    getCityInfoSucc(cityRes) {
      cityRes = cityRes.data;
      if (cityRes.ret && cityRes.data) {
        const data = cityRes.data;
        this.hotCities = data.hotCities;
        this.cities = data.cities;
      }
    },
    letterChange(letter) {
      this.letter = letter;
    },

  },
  mounted() {
    this.getCityInfo();
  },
};
</script>

<style>
</style>