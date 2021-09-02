<template>
    <div>
        <h4>About</h4>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "About Us"
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
