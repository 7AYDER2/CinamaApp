<template>
  <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
      </router-view>
</template>


<script setup>
  import Home from './views/Home.vue'
</script>

<style scoped>

</style>
