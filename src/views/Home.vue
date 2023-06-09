<template>
   <Header/>
  <swiper class="mySwiper w-full h-[80vh] my-10 ">
    <swiper-slide v-for="movie in movies" :key="movie" class="w-full h-full">
      <router-link :to="{ name: 'Details', params: { id: movie.id } }">
        <div class="w-[95vw] h-[80vh] relative mx-auto ">
          <img
            :src="`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`"
            alt=""
            class="group-hover:blur-sm duration-200 rounded-lg   w-full h-full  object-cover" />
          <div
            class="absolute w-full inset-0 bg-opacity-50 bg-gray-800 p-10 flex items-center">
            <div class="flex justify-center items-center gap-7">

              <div class="prose  mb-6">
                <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"/>
              </div>

              <div>
              <h1 class="mb-3 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl lg:mb-4 text-white">
				       <!-- title of Movie -->
				       {{ movie.title }}
			        </h1>
              
                  	<!-- Type of Movie -->
              <p class="flex items-center gap-x-4 gap-y-2 text-sm mb-4 flex-wrap lg:mb-6">
                <span class="flex flex-wrap items-center gap-2">
                  <span class="flex flex-wrap items-center gap-2 justify-between">
                    <span class="inline-flex items-center gap-1 font-bold h-6 rounded bg-green-400 px-2 text-zinc-900 text-xs">{{ movie.media_type }}</span>
                            </span>
                </span>
                  <!-- status of Movie -->
                <span class="flex flex-wrap items-center gap-2">
                  <span><a aria-label="2023" href="" class="text-white">{{movie.release_date}}</a></span>
                  </span>				
                </p>
                <p class="prose truncate text-white max-w-2xl text-sm sm:text-base md:text-xl mb-6">{{ movie.overview }}</p>
              </div>
             
              
            </div>
          </div>
        </div>
      </router-link>
    </swiper-slide>
  </swiper>
  
  <div class="w-full px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
   <Movie v-for="movie in movies" :movie ="movie" :key="movie"/>
  </div>
</template>

<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {};
  },
};
</script>

<script setup>
   import Movie from "../components/Movie.vue";
   import Header from "../components/Header.vue";
   import { ref,onMounted } from "vue";
   import axios from "@/helpers/https.js";
   
   const movies = ref([])
   const fetchMovie = async()=>{
    try {
      const {data} = await axios.get('/trending/movie/day',{});
      movies.value =data.results;
      console.log(data)
    }catch(error){
      console.log(error)
    }
   }

   onMounted(()=>{
    fetchMovie()
   })
</script>