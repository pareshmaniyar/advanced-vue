<template>
    <div :class="lightMode?'light':'dark'">
        <div class="title">
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
import { mapGetters } from 'vuex';

export default {
    name: 'app',
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters({
            lightMode: 'mode'
        })
    }
}
</script>
<style lang="scss" scoped>
    @import 'App.scss';
    header {
        a {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 10px;
        }
    }
</style>
