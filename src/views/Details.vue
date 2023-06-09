<template>
    <div v-if="details" class="w-[100%] h-[97vh] relative mx-auto ">
          <img
            :src="imgURl"
            alt=""
            class="group-hover:blur-sm duration-200 w-full h-full  object-cover" />
          <div
            class="absolute w-full inset-0 bg-opacity-50 bg-gray-800 p-10 flex items-center">
            <div class="flex justify-center items-center gap-7">

              <div class="prose  mb-6">
                <img :src="`https://image.tmdb.org/t/p/w500${details.poster_path}`"/>
              </div>

              <div>
              <h1 class="mb-3 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl lg:mb-4 text-white">
				       <!-- title of Movie -->
				       {{ details.original_title }}
			        </h1>
              
                  	<!-- Type of Movie -->
              <p class="flex items-center gap-x-4 gap-y-2 text-sm mb-4 flex-wrap lg:mb-6">
                <span class="flex flex-wrap items-center gap-2">
                  <span class="flex flex-wrap items-center gap-2 justify-between">
                            </span>
                </span>
                  <!-- status of Movie -->
                <span class="flex flex-wrap items-center gap-2">
                  <span><a aria-label="2023" href="" class="text-white">{{details.release_date}}</a></span>
                  </span>				
                </p>
                <p class="prose truncate text-white max-w-2xl text-sm sm:text-base md:text-xl mb-6">{{ details.overview }}</p>
              </div>
             
              
            </div>
          </div>
        </div>
 
    <span v-else class="loading"></span>
    <div>Other detqails</div>
</template>

<script setup>
import { onMounted, ref,computed } from 'vue';
import axios from "@/helpers/https"
import {useRoute} from "vue-router";
import {fullImgUrl} from "@/helpers/helpers.js";

const props = defineProps(["id"])
const route = useRoute();
const details = ref()


const fetchMovieDetails = async ()=> {
  try {
    const {data} = await axios.get(`/movie/${route.params.id}`)
    details.value = data
    console.log(data)
  }catch (error){
    console.log(error)
  }
}

const imgURl = computed(()=>{
    console.log(details)
    return fullImgUrl(details.value.poster_path)
})


onMounted(()=>{
    fetchMovieDetails()
})

</script>

<style scoped>
.loading{
    width: 100px;
    height: 100px;
    background-color:transparent;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -50px;
    margin-top: -50px;
    border-radius: 50%;
    border: 5px solid #4a1ee9;
    transition: transform 0.3s;
    border-left-color: transparent;
    animation-name: spin;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  