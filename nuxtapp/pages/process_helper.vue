<template>
    <div>
      <h4>Proccess Helper</h4>
      <p>I am rendered on the {{ renderedOn }} side</p>
    </div>
</template>

<script>
  export default {
    beforeMount () {
      window.alert('before Mount');
    },
    mounted () {
      window.alert('mounted');
      if (process.client) {
        console.log("Process on client side")
      } else {
        console.log("Process on server side")
      }

    },
    asyncData() {
      return { 
        
        renderedOn: process.client ? 'client' : 'server'
      }
    }
  }
</script>