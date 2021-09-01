<template>
    <div>
        <nuxt-link to="/about">About</nuxt-link>
        <h4>{{pageTitle}}</h4>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            pageTitle: "Home"
        }
    }
}
</script>
