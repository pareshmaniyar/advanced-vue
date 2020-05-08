<template>
    <div :class="!textMode?'text-light':''">
        Blog
        <button @click="changeBackGround">Toggle</button>
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
