<template>
    <div class="post" v-editable="block">
        <div class="container">
            <div class="post-thumbnail" :style="{backgroundImage: 'url('+ image +')'}"></div>
            <div class="content">
                <h1>{{ title }}</h1>
                <p>{{ content }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        asyncData(context) {
            return context.app.$storyapi
            .get("cdn/stories/blog/" + context.params.postId, {
                version: process.env.NODE_ENV == 'production' ? 'published' : 'draft'
            })
            .then(res => {
                return {
                    block: res.data.story.content,
                    image: res.data.story.content.thumbnail,
                    title: res.data.story.content.title,
                    content: res.data.story.content.content,
                }
            });
        },
    }
</script>

<style lang="scss" scoped>


.post {
    .container {
        .post-thumbnail {
            width: 100%;
            height: 600px;
            background-size: cover;
            background-position: center;
        }
        .content {
            p {
                white-space: pre-line;
            }
        }
    }
}

</style>