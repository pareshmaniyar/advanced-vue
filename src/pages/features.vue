<template>
    <div>
        Features
        <button @click="switchBackgorund">Toggle</button>
        <button @click="changeTitle">Change Title</button>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
import { eventBus } from '../index'

export default {
    name: 'features',
    methods: {
        ...mapMutations({
            switchBackgorund: 'toggle'
        }),
        changeTitle(){
            eventBus.$emit('ChangeTitle', 'Wow! Those features were awesome!');
        }
    }
}
</script>
<style>
</style>
