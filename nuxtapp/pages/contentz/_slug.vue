<template>
    <div>
        <h4>Content</h4>
        <pre>
          npm install @nuxt/content
        </pre>
        <nuxt-content :document="doc" />
    </div>
</template>

<script>
export default {
  
  async asyncData ({ $content, params }) {
    console.log($content, params)
    const doc = await $content(params.slug).fetch()

    return {
      doc
    }
  }

}
</script>