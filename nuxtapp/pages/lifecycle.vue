<template>
    <div>
        <h4>Lifecycle</h4>

<h5>Server</h5>

<pre>
For SSR, these steps will be executed for every initial request to your app
    The server starts (nuxt start)

When using static site generation, the server steps are only executed on build time, but once for every page that will be generated
    The generation process starts (nuxt generate)
    Nuxt hooks
    serverMiddleware

    Server-side Nuxt plugins
        in order as defined in nuxt.config.js

    nuxtServerInit
        Vuex action that is called only on server-side to pre-populate the store
        First argument is the Vuex context, second argument is the Nuxt.js context
            Dispatch other actions from here → only "entry point" for subsequent store actions on server-side
        can only be defined in store/index.js

    Middleware
        Global middleware
        Layout middleware
        Route middleware

    asyncData

    beforeCreate (Vue lifecycle method)

    created (Vue lifecycle method)

    The new fetch (top to bottom, siblings = parallel)

    Serialization of state (render:routeContext Nuxt.js hook)

    the HTML rendering happens (render:route Nuxt.js hook)

    render:routeDone hook when HTML has been sent to the browser

    generate:before Nuxt.js hook

    HTML files are generated
        Full static generation
            e.g. static payloads are extracted
        generate:page (HTML editable)
        generate:routeCreated (Route generated)

    Generate:done when all HTML files have been generated
</pre>

<h5>Client</h5>

<pre>
This part of the lifecycle is fully executed in the browser, no matter which Nuxt.js mode you've chosen.

    Receives the HTML
    Loading assets (e.g. JavaScript)
    Vue Hydration
    Middleware
        Global middleware
        Layout middleware
        Route middleware
    client-side Nuxt.js plugin
        in order as defined in nuxt.config.js
    asyncData (blocking)
    beforeCreate (Vue lifecycle method)
    created (Vue lifecycle method)
    The new fetch (top to bottom, siblings = parallel) (non-blocking)
    beforeMount (Vue lifecycle method)
    mounted (Vue lifecycle method)
    </pre>
    
   </div>
</template>

<script>
export default {
    asyncData() {
      console.log("--> asyncData()")
    },
    beforeCreate(){
      console.log("--> beforeCreate()")
    },
    created(){
      console.log("--> created()")
    },
    fetch() {
      console.log("--> Fetch()")
    },
    mounted() {
      console.log("--> mounted()")
    }
}
</script>
