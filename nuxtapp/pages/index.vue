<template>
  <div>

    <Banner/>

    <div class="search">
      <input @keyup.enter="$fetch" type="text" v-model.lazy="searchInput" /> {{searchInput}}
      <button v-show="searchInput !=''">Search Clear</button>
    </div>

    <div v-if="searchInput !==''" class="movies-grid">
      <h4>searchedMovies</h4>
      <div class="movie col-3" v-for="(movie, index) in searchedMovies" :key="index">
        <small>{{index}}</small>
        <div class="_img">
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />
        </div>
        <h4>{{movie.original_title}}</h4>
        <NuxtLink :to="{ name: 'movies-movieid', params: { movieid: movie.id }  }">View more info</NuxtLink>
      </div>
    </div>

    <div v-else class="movies-grid">
      <div class="movie col-3" v-for="(movie, index) in movies" :key="index">
        <small>{{index}}</small>
        <div class="_img">
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />
        </div>
        <h4>{{movie.original_title}}</h4>
        <NuxtLink :to="{ name: 'movies-movieid', params: { movieid: movie.id }  }">View more info</NuxtLink>
      </div>
    </div>



  </div>
</template>

<script>
import axios from 'axios'

export default {
  //layout: "default", // add "shop" and check
  data() {
    return {
      movies: [],
      searchedMovies: [],
      searchInput: ''
    }
  },

  async fetch() {
    // in Nuxtjs we need to use fetch method to get 
    
    if(this.searchInput === '') {
      await this.getMovies()
      console.log("Not input")
    }

    if(this.searchInput !== '') {
      await this.searchMovies()
      console.log("Something..")
    }

  },
  methods: {
    async getMovies() {
      const data = axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US&page=1`)
      const result = await data;
      // console.log(result)

      result.data.results.forEach((movie)=>{
        this.movies.push(movie)
      })
      console.log(this.movies)
    },

    async searchMovies() {
      const data = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US&page=1&query=${this.searchInput}`)
      const result = await data;

      result.data.results.forEach((movie)=>{
        this.searchedMovies.push(movie)
      })

    }
  }
}
</script>


<style scoped>
.col-3 {
  width: 25%;
  float: left;
}
._img img {
  max-height: 80px;
}
</style>