<template>
  <header>
   <div class="container">
     <h4>Header</h4>
     <NuxtLink to="/">Home</NuxtLink>
     <NuxtLink to="/about">About</NuxtLink>
     <NuxtLink to="/refreshing">refreshing</NuxtLink>
     <NuxtLink to="/process_helper">process helper</NuxtLink>
     <NuxtLink to="/lifecycle">Lifecycle</NuxtLink>
     <NuxtLink to="/datafetching">datafetching</NuxtLink>
     <NuxtLink to="/keypath">Key Path</NuxtLink>
     
     <NuxtLink to="/datafetching">datafetching</NuxtLink>
     <NuxtLink to="/process_helper">process_helper Path</NuxtLink>

     <a href="https://nuxtjs.org">Use A Tag for External Link</a>
   </div>
  </header>
</template>

<style scoped>
.nuxt-link-active,
.nuxt-link-exact-active {
  font-weight: 800;
}
.nuxt-link-exact-active {
  color: green;
}
</style>