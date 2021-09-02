<template>
    <div>
        <h4>Posts</h4>
        
        <NuxtLink :to="{ name: 'post-id', params: { id: 1 }  }">1</NuxtLink>
    </div>
</template>


<script>
export default { }
</script>
