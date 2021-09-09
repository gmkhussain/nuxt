<template>
    <div>
        <h4>About</h4>
        <br>
        <br>
        
        <LazyFasty v-if="show" />
        <button v-if="!show" @click="show = true">Show LazyFasty</button>

    </div>
</template>

<script>
export default {
    middleware: 'authenticated',
  
    data() {
        return {
            title: "About Us",
            show: false
        }
    },
    head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'descriptionId',
            name: 'description',
            content: 'My custom description'
          }
        ]
      }
    }
}
</script>
