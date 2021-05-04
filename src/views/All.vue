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

  <div>
    <h2 id="title">{{ message }}</h2>
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
        <tr scope="row" v-for="concert in concerts">
          <td>{{concert.date}}</td>
          <td><a v-on:click="artistDetails(concert)">{{concert.name}}</a></td>
          <td><a data-bs-toggle="modal" data-bs-target="#artistModal">{{concert.venue}}</a></td>
          <td><a v-bind:href="`${concert.tickets}`">Tickets</a></td>
        </tr>
      </tbody>
    </table>
    <router-link v-bind:to="`/${this.$route.params.id}`"> Back to Concert Summary Page</router-link>
  </div>

    <!-- artist modal -->
    <!-- <div class="modal" tabindex="-1" id="artistModal" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Artist</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div> -->
    

  </div>
</template>

<style>
#title {
  padding-top: 300px;
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
      selectedConcert: [],
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
    artistDetails: function (concert) {
      console.log("artist details");
      this.selectedConcert = concert;
      document.getElementById("#artistModal");
      console.log(this.selectedConcert);
    },
  },
};
</script>

