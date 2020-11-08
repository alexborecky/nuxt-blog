<template>
  <div class="page">
    <div class="container flex">
      <postPreview 
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :previewText="post.previewText"
        :thumbnail="post.thumbnail"
        :id="post.id"
      />
    </div>
  </div>
</template>

<script>

export default {
  asyncData(context) {
    return context.app.$storyapi
    .get("cdn/stories", {
      version: context.isDev ? 'draft' : 'published',
      starts_with: 'blog/'
    })
    .then(res => {
      console.log(res);
      return {
        posts: res.data.stories.map(bp => {
          return {
            id: bp.slug,
            title: bp.content.title,
            previewText: bp.content.textPreview,
            thumbnail: bp.content.thumbnail,
          }
        })
      }
    });
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
    // data () {
    //   return {
    //     posts: [
    //       {
    //         title: 'A new post',
    //         previewText: 'This is an awesome text',
    //         thumbnail: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    //         id: 'new-post'
    //       },
    //       {
    //         title: 'A second post',
    //         previewText: 'This is an awesome text',
    //         thumbnail: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    //         id: 'second-post'
    //       },
    //       {
    //         title: 'A third post',
    //         previewText: 'This is an awesome text',
    //         thumbnail: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    //         id: 'third-post'
    //       },
    //       {
    //         title: 'A fourth post',
    //         previewText: 'This is an awesome text',
    //         thumbnail: 'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
    //         id: 'fourth-post'
    //       },
    //     ],
    //   }
    // }
}
</script>

<style lang="scss" scoped>

.container {
  justify-content: space-between;
  flex-wrap: wrap;
}

</style>
