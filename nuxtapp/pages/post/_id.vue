<template>
    <div>
        <h4>Post Id</h4>

        <p>Id: {{post.id}}</p>
        <p>Title: {{post.title}}</p>
        
        <button @click="showContext" >Click Me {{result}}</button>

        <div v-if="$nuxt.isOffline">You are offline</div>
        <div v-else>You online</div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      result: "Nothing Now.."
    }
  },
  methods: {
    showContext(context) {
      console.log("Element", context)
      
      this.result = "Check console"
      // We can see body context too on body load on etc event..
    }
  }, 
    async asyncData({params, $axios}) { 
      
      const post = await $axios.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
      console.log(post)
      return { post }
       
  }
}

</script>
