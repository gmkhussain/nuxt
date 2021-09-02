<template>
    <div>
        <h4>Error</h4>
        <p v-if="error.statusCode === 404">Page not found</p>
        <p v-else>An error occurred</p>
        <NuxtLink to="/">Home page</NuxtLink>
    </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error' // you can set a custom layout for the error page
}
</script>
