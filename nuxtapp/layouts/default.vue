<template>
    <div class="app">
        <Header />
        <Nuxt keep-alive :nuxt-child-key="someKey" />
        <Footer />
    </div>
</template>

<script>
export default { }
</script>


<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 1;
}
</style>