<template>
    <div>
        <div>
            Wow! That's fun!
        </div>
        <header>
            <router-link to="/home">home</router-link>
            <router-link to="/blog">blog</router-link>
            <router-link to="/features">features</router-link>
        </header>
        <router-view></router-view>
    </div>
</template>
<script>

export default {
    name: 'app'
}
</script>
<style>
</style>
