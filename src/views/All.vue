<template>
  <div class="all">
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
     <div class="container-fluid">
      <a class="navbar-brand" href="/">LocalScene</a>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
       </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li> 
      </ul>
     </div>
  </div>
</nav>
    <h2>{{ message }}</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Artist</th>
          <th scope="col">Venue</th>
          <th scope="col">Tickets</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="concert in concerts">
          <th scope="row">{{concert.date}}</th>
          <td>{{concert.name}}</td>
          <td>{{concert.venue}}</td>
          <td><a v-bind:href="`${concert.tickets}`">Tickets</a></td>
        </tr>
      </tbody>
    </table>
    <router-link v-bind:to="`/${this.$route.params.id}`"> Back to Concert Summary Page</router-link>
  </div>
</template>

<style>
/* div.list {
  top: 5%;
} */
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: `${this.$route.params.id} Concerts`,
      concerts: [],
      xlConcerts: [],
      largeConcerts: [],
      sortedConcerts: [],
    };
  },
  created: function () {
    axios.get(`api/concerts/${this.$route.params.id}`).then((response) => {
      console.log("doing the concerts index");
      console.log(response.data);
      this.concerts = response.data;
    });
  },
  methods: {
    allConcerts: function () {
      console.log(this.concerts);
    },
  },
};
</script>

