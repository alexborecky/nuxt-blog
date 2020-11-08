<template>
    <div class="page" v-editable="blok">
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
              version: context.isDev ? 'draft' : 'published',
          })
          .then(res => {
              return {
                  blok: res.data.story.content,
                  title: res.data.story.content.title,
                  content: res.data.story.content.content,
              }
          })
      },
      mounted () {
            this.$storybridge.on(['input', 'published', 'change'], (event) => {
                if (event.action == 'input') {
                if (event.story.id === this.story.id) {
                    this.story.content = event.story.content
                }
                } else {
                window.location.reload()
                }
            })
        },
    } 
</script>

<style lang="scss" scoped>

.container {
    p {
        white-space: pre-line;
    }
}

</style>