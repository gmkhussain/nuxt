<template>
  <div>
    <div>{{ content }}</div>
    <button @click="refresh">Refresh</button>

  </div>
</template>

<script>

  export default {
    mounted() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        console.log("Mounted")
        setTimeout(() => this.$nuxt.$loading.finish(), 5000)
      })
    },
    created(){
      if (process.browser){
        console.log(window);
        window.onNuxtReady(() => {
          console.log('Nuxt.js is ready and mounted')
        })

      }
    },
    asyncData() {
      return { content: 'Created at: ' + new Date() }
    },
    methods: {
      
      refresh() {
        this.$nuxt.refresh()
      }
    }
  }
</script>
