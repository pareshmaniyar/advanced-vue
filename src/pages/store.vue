<template>
    <div>
        <h1>Store</h1>
        <b-button @click="switchBackgorund">Toggle</b-button>
        <b-button variant="warning" @click="changeTitle">Change Title</b-button>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
import { eventBus } from '../index'

export default {
    name: 'store',
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
