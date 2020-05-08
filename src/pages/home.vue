<template>
    <div>
        Home
        <button @click="$store.dispatch('toggleAction')">Toggle</button>
        <button @click="changeTitle">Change Title</button>
        <footer>
            <slot></slot>
        </footer>
    </div>
</template>
<script>

export default {
    name: 'app',
    methods: {
        changeTitle(){
            this.$emit('changetitle', "There is no place like Home!");
        }
    }
}
</script>
<style>
</style>
