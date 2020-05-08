<template>
    <div>
        Features
        <button @click="switchBackgorund">Toggle</button>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
    name: 'features',
    methods: {
        ...mapMutations({
            switchBackgorund: 'toggle'
        })
    }
}
</script>
<style>
</style>
