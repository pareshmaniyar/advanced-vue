<template>
    <div>
        <h1>Home</h1>
        <b-button @click="$store.dispatch('toggleAction')">Toggle</b-button>
        <b-button variant="warning" @click="changeTitle">Change Title</b-button>
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
