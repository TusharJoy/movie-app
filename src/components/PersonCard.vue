<template>
  <div @click="goToDetails(person.id)"
       class="border-solid shadow-2xl  flex border-2 border-gray-50 flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg m-5">
    <img class="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
         :src="imgPreUrl + person.profile_path" alt="person logo"/>
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{{ person.name }}</h5>
      <p class="text-gray-600 text-xs">popularity: <b>{{ person.popularity }} </b></p>
      <p class="text-gray-600 text-xs">Known For: <b>{{ person.known_for_department }}</b></p>
    </div>
  </div>
</template>

<script>
import router from "@/routes";

export default {
  name: "PersonCard",
  props: ['person'],
  data() {
    return {
      imgPreUrl: "https://image.tmdb.org/t/p/w342"
    };
  },
  methods: {
    goToDetails(id) {
      router.push({name: 'person', query: {id: id}})
    }
  }
}
</script>

<style scoped>

</style>