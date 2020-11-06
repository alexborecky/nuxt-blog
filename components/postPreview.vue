<template>
    <nuxt-link 
        :to="'/blog/' + id">
        <div class="post-preview">
          <div
            :style="{backgroundImage: 'url(' + thumbnail + ')'}" 
            class="post-preview-thumbnail">
          </div>
          <div class="post-preview-content">
            <h1>{{ title }}</h1>
            <p>{{ previewText }}</p>
          </div>
        </div>
      </nuxt-link>
</template>

<script>
    export default {
        name: 'postPreview',
        props: {
            title: {
                type: String,
                required: true
            },
            previewText: {
                type: String,
                required: true
            },
            thumbnail: {
                type: String,
                required: true
            },
            id: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

a {
    text-decoration: none;
    width: 48%;
    margin: 16px 0;
    @media only screen and (max-width: 450px) {
        width: 100%;
    }
    .post-preview {
        width: 100%;
        .post-preview-thumbnail {
            width: 100%;
            height: 320px;
            background-position: center;
            background-size: cover;
        }
    }
}

</style>