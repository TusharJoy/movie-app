<template>
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg m-5" @click="gotToDetails(movie.id)">
    <img class="md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
         :src="imgPreUrl+movie.poster_path" alt="logo"/>
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{{ movie.original_title }}</h5>
      <p class="text-gray-700 text-base mb-4">
        {{ movie.overview }}
      </p>
      <p class="text-gray-600 text-xs">Release Date: {{ movie.release_date }}</p>
    </div>
  </div>
</template>

<script>
import router from "@/routes";

export default {
  name: "MovieCard",
  props: ['movie'],
  data() {
    return {
      imgPreUrl: "http://image.tmdb.org/t/p/w342"
    };
  },
  methods: {
    gotToDetails(movieId) {
      router.push({name: 'movie', query: {id: movieId}})
    }
  }
}
</script>

<style scoped>

</style>