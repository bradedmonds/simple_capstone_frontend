<template>
  <div class="home">
  <header class="home">
    <h1>LocalScene</h1>
    <p class="home">The easiest way to find the best concerts in your city</p>
  </header>
    <div class="dropdown">
      <button class="btn btn-secondary btn-large dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
       Select Your City
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
       <li v-for="city in cities"><router-link v-bind:to="`/${city.city}`" class="dropdown-item" href="/`${city.city}`">{{city.city}}</router-link></li>
      </ul>
    </div>
  </div>
</template>

<style>
h1 {
  font-size: 7em;
  font-family: "Courier New", Courier, monospace;
  text-shadow: 3px 3px 3px black;
}
p.home {
  font-size: 1.5em;
  color: white;
  text-shadow: 2px 2px black;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "LocalScene",
      cities: [],
    };
  },
  created: function () {
    axios.get("api/cities").then((response) => {
      console.log("doing the cities index");
      console.log(response.data);
      this.cities = response.data;
    });
  },
  methods: {},
};
</script>
