<template>
  <div class="home">
  <header id="header">
    <h1>Local Scene</h1>
    <p >The easiest way to find the best concerts in your scene</p>
  </header>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
       Select Your City
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
       <li v-for="city in cities"><router-link v-bind:to="`/${city.city}`" class="dropdown-item" href="/`${city.city}`">{{city.city}}</router-link></li>
      </ul>
    </div>
  </div>
</template>

<style>
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
