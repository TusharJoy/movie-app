<template>
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg m-5" @click="gotToDetails(tv.id)">
    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
         :src="imgPreUrl+tv.poster_path" alt="TV logo"/>
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{{ tv.name }}</h5>
      <p class="text-gray-700 text-base mb-4">
        {{ tv.overview }}
      </p>
      <p class="text-gray-600 text-xs">popularity : {{ tv.popularity }}</p>
    </div>
  </div>
</template>

<script>
import router from "@/routes";

export default {
  name: "TvCard",
  props: ['tv'],
  data() {
    return {
      imgPreUrl: "https://image.tmdb.org/t/p/w342"
    };
  },
  methods: {
    gotToDetails(movieId) {
      router.push({name: 'tv', query: {id: movieId}})
    }
  }
}
</script>

<style scoped>

</style>