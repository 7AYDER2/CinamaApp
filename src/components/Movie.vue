<template> 
        <router-link :to="{name: 'Details', params: {id: movie.id}}">
        <div class="relative">
            <img :src="imgURl" alt="">
            <h2 class="absolute bottom-3 text-white px-5">{{ movie.title }}</h2>
        </div>
    </router-link>
  </template>
  
  <script setup>
   import { computed } from 'vue';
   import {fullImgUrl} from "@/helpers/helpers.js";

   const props = defineProps({
    movie:Object
   })
   
   const imgURl = computed(()=>{
    return fullImgUrl(props.movie.poster_path)
   })

   const getVoteAverage = computed(()=>{
    const voteAverage = props.movie.vote_average.toString();
    return voteAverage.substring(0, 3);
   })

  </script>

  <style scoped>
</style>