<template>
    <div>
        <div class="flex justify-between px-6  mb-9 items-center mt-5 mb-4">
            <h1 class="text-green-500 font-bold text-3xl uppercase"><span class="text-white">MY</span>Favourite</h1>
            <!----
                 live SearcBar functionalaty
                --- -->
            <div class="flex items-center relative">
                <div class="relative">
                    <div class="flex items-center relative">
                      <input @input="searchMoviesDebounced" type="text" placeholder="Search for Movie" class="p-3 px-12 rounded-[0.5rem] bg-gray-800 text-white"
                             v-model="searchQueryValue">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="gray"
                           class="w-6 h-6 absolute left-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                      </svg>
                    </div>
                    <div v-if="serachMovieValue.length < 0">
                         <p>Loading ...</p>
                      </div>
                      <div v-if="serachMovieValue.length > 0 "  class="absolute bottom-[-%100] mt-2 w-full p-2 rounded-lg z-10 bg-zinc-800 overflow-y-scroll scrollbar-hide scr max-h-[23vh] ">
                        <div v-for="movie in serachMovieValue" class="scrollbar-hide">
                          <router-link :to="{name:'Details',params:{id:movie.id}}">
                          <div class="flex items-center gap-3 p-2 rounded hover:bg-gray-500 ">
                            <img class="w-16 h-16 rounded aspect-square object-cover"  :src="imgURl(movie)">
                            <div class="flex flex-col gap-1">
                              <h3 class="text-zinc-200 font-bold text-sm overflow-hidden max-h-10 mb-1">{{movie.title}}</h3>
                              <div class="flex items-center gap-1">
                                <p class="text-gray-300">{{data(movie)}}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(161 161 170 / var(--tw-text-opacity))" viewBox="0 0 24 24" stroke-width="1.5" stroke="null" class="w-5 h-5 text-zinc-500">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          </router-link>
                        </div>
                      </div>
                 </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import { onMounted, ref} from "vue";
import axios from "../helpers/https.js";
import {fullImgUrl} from "../helpers/helpers";
import {debounce} from "lodash";

const searchQueryValue = ref('')
const serachMovieValue = ref([])

// const isSeraching = ()=>{
//   return searchQueryValue.value !=='';
// }

const searchMovie = async ()=>{
  const {data} = await axios.get(`search/movie`,{
    params:{
      query:searchQueryValue.value
    }
  })
  // searchQueryValue.value = data.results
  serachMovieValue.value = data.results;
}

const searchMoviesDebounced = debounce(searchMovie, 200)

const imgURl = (movie)=>{
  return fullImgUrl(movie.backdrop_path)
}

const data = (movie)=>{
  const voteAverage = movie.vote_average.toString();
  return voteAverage.substring(0, 3);
}

// watch(searchMovie,()=>{})

onMounted(()=>{
  searchMovie()
})

</script>