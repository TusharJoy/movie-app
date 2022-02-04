<template>
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
         :src="imgPreUrl + person.profile_path" alt="person logo"/>
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{{ person.name }}</h5>
      <p class="text-gray-600 text-xs">popularity: {{ person.popularity }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonCard",
  props: ['person'],
  data() {
    return {
      imgPreUrl: "http://image.tmdb.org/t/p/w342"
    };
  },
}
</script>

<style scoped>

</style>