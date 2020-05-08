<template>
    <div :class="!textMode?'text-light':''">
        <h1>Blog</h1>
        <b-button @click="changeBackGround">Toggle</b-button>
        <b-button variant="warning" @click="changeTitle">Change Title</b-button>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'blog',
    date(){
        return {
            // textMode: true
        }
    },
    computed: {
        ...mapState({
            textMode: 'mode'
        })
    },
    methods: {
        ...mapActions({
            changeBackGround: 'toggleAction'
        })
    }
}
</script>
<style lang="scss">
.text-light {
    color: white;
}
</style>
