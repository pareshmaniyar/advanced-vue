<template>
    <div :class="lightMode?'light':'dark'">
        <div>
            <b-navbar type="dark" variant="dark">
                <b-navbar-nav>
                    <b-nav-item :to="'home'">Home</b-nav-item>
                    <b-nav-item :to="'blog'">Blog</b-nav-item>
                    <b-nav-item :to="'features'">Features</b-nav-item>
                    <b-nav-item :to="'store'">Store</b-nav-item>
                </b-navbar-nav>
            </b-navbar>
        </div>
        <b-card :title="title">
            Practice makes a man confident in the Interview
        </b-card>
        <router-view v-on:changetitle="changeTitle($event)">
            <b>Random stuff to see in the footer</b>
        </router-view>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { eventBus } from './index'

export default {
    name: 'app',
    data() {
        return {
            title: 'Wow! That\'s fun!'
        }
    },
    computed: {
        ...mapGetters({
            lightMode: 'mode'
        })
    },
    created(){
        eventBus.$on('ChangeTitle', title => this.title = title);
    },
    methods: {
        changeTitle(title) {
            this.title = title;
        }
    }
}
</script>
<style lang="scss">
    @import 'App.scss';
</style>
