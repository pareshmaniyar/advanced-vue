<template>
    <div>
        Home
        <button @click="$store.dispatch('toggle')">Toggle</button>
    </div>
</template>
<script>

export default {
    name: 'app'
}
</script>
<style>
</style>
