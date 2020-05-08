<template>
    <div :class="!textMode?'text-light':''">
        Blog
        <button @click="changeBackGround">Toggle</button>
        <button @click="changeTitle">Change Title</button>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { eventBus } from '../index'

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
        }),
        changeTitle(){
            eventBus.$emit('ChangeTitle', 'Wow! That Blog was fun!');
        }
    }
}
</script>
<style lang="scss">
.text-light {
    color: white;
}
</style>
