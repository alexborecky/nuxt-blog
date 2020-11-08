<template>
    <div class="page header">
        <div class="container flex">
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/blog">Blog</nuxt-link>
            <nuxt-link to="/about">About us</nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'topHeader'
    }
</script>

<style lang="scss" scoped>

.header {
    height: 80px;
    background-color: $sec-colour;
    .container {
        justify-content: center;
        height: 100%;
        a {
            color: white;
            height: 100%;
            display: flex;
            align-items: center;
            margin: 0 16px;
        }
    }
}

</style>