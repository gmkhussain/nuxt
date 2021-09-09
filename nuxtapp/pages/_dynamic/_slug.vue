<template>
    <div>
        <h4>Dynamic</h4>
        <p>
            {{this.dynamic}} / {{this.slug}}
        </p>
    </div>
</template>

<script>
 export default {
    async asyncData({ params }) {
      const dynamic = params.dynamic
      const slug = params.slug
      return { dynamic, slug }
    }
  }
</script>
