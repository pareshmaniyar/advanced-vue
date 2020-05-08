<template>
    <div>
        Home
        <button @click="$store.dispatch('toggleAction')">Toggle</button>
    </div>
</template>
<script>

export default {
    name: 'app'
}
</script>
<style>
</style>
