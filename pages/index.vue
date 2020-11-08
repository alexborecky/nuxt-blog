<template>
  <div class="page">
    <div class="container flex">
      This is a home page
    </div>
  </div>
</template>

<script>

export default {
  asyncData(context) {
    return context.app.$storyapi
    .get("cdn/stories", {
      version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
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
