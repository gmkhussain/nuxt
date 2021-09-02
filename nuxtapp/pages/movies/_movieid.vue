<template>
    <div>
        <h4>Product</h4>
        <Loading v-if="$fetchState.pending" />
        <div class="movie-detail">
            
            <h4>{{movie.title}}</h4>
        
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default { 
    data() {
        return {
            movie: []
        }
    },
    async fetch() {
        await this.getSingleMovie()
    },
    fetchDelay: 4000,
    methods: {
        async getSingleMovie() {
            const data = axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.movieid}?api_key=37ed43a4f8eaa2abd75f9283692947bc&language=en-US`)

            const result = await data;
            this.movie = result.data
        }
    }
}
</script>
