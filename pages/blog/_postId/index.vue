<template>
    <div class="post" v-editable="blok">
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
                console.log(res.data)
                return {
                    blok: res.data.story.content,
                    image: res.data.story.content.thumbnail,
                    title: res.data.story.content.title,
                    content: res.data.story.content.content,
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
            @media only screen and (max-width: 450px) {
                height: 240px;
            }
        }
        .content {
            p {
                white-space: pre-line;
            }
        }
    }
}

</style>