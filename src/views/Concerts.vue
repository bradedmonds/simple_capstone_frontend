<template>
  <div class="concerts">
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
    <h3>The best upcoming shows in your area:</h3>
    <p></p>
    <p v-for="concert in sortedConcerts">
      {{ concert.date }}
      {{ concert.name }}
      {{ concert.venue }}
      <a v-bind:href="`${concert.tickets}`"> Tickets </a>
      </p>
      <router-link v-bind:to="`${this.$route.params.id}/all`"> See The Full List of Concerts Here </router-link>
  </div>
</template>

<style>
h2 {
  font-size: 5em;
  font-family: "Courier New", Courier, monospace;
  text-shadow: 2px 2px 2px black;
}
h3 {
  font-size: 1.5em;
  text-shadow: 2px 2px black;
}
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
      this.largeConcerts = this.concerts.filter((concert) => concert.category === "Large");
      console.log(this.largeConcerts);
      this.largeConcerts = this.largeConcerts.sort((a, b) => (a.score > b.score ? -1 : 1));
      console.log(this.largeConcerts);
      this.xlConcerts = this.concerts.filter((concert) => concert.category === "XL");
      console.log(this.xlConcerts);
      this.xlConcerts = this.xlConcerts.sort((a, b) => (a.score > b.score ? -1 : 1));
      console.log(this.xlConcerts);
      if (this.xlConcerts.length > 5) {
        this.sortedConcerts.push(
          this.xlConcerts[0],
          this.xlConcerts[1],
          this.xlConcerts[2],
          this.xlConcerts[3],
          this.xlConcerts[4]
        );
      } else {
        this.xlConcerts.forEach((concert) => {
          this.sortedConcerts.push(concert);
        });
      }
      if (this.largeConcerts.length > 5) {
        this.sortedConcerts.push(
          this.largeConcerts[0],
          this.largeConcerts[1],
          this.largeConcerts[2],
          this.largeConcerts[3],
          this.largeConcerts[4]
        );
      } else {
        this.largeConcerts.forEach((concert) => {
          this.sortedConcerts.push(concert);
        });
      }

      this.sortedConcerts.sort((a, b) => (a.date > b.date ? 1 : -1));
      console.log(this.sortedConcerts);
    });
  },
  methods: {
    allConcerts: function () {
      console.log(this.concerts);
    },
  },
};
</script>

