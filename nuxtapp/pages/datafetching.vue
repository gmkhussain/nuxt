<template>
    <div>
        <h4>Data Fetching</h4>
        <p v-if="$fetchState.pending">Fetching mountains...</p>
        <p v-else-if="$fetchState.error">An error occurred :(</p>
        <div v-else >
            <ul>
                <li v-for="post of posts" :key="post.slug">{{ post.title }}</li>
    
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        posts: []
      }
    },
    activated() {
      console.log("activated()")
      // Call fetch again if last fetch more than 5 sec ago
      if (this.$fetchState.timestamp <= Date.now() - 5000) {
          
        this.$fetch()
      }
    },
    async fetch() {
        console.log("Fetch()")
        console.log(this.$fetchState.timestamp)
        this.posts = await fetch('https://api.nuxtjs.dev/posts').then(res =>
        res.json()
      )
    }
  }

</script>
