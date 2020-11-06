<template>
    <div class="page">
        <div class="container">
            <h1>{{ title }}</h1>
            <p>{{ content }}</p>
        </div>
    </div>
</template>

<script>
    export default {
      asyncData(context) {
          return context.app.$storyapi
          .get('cdn/stories/about', {
              version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
          })
          .then(res => {
              return {
                  title: res.data.story.content.title,
                  content: res.data.story.content.content,
              }
          })
      }
    } 
</script>

<style lang="scss" scoped>

.container {
    p {
        white-space: pre-line;
    }
}

</style>