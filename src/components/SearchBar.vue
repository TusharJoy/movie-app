<template>
  <div class="row navbar-bg mb-5">
    <div class="col-lg-12">

      <input class="border-2 border-gray-300 bg-gradient h-10 px-10   focus:outline-none"
             type="search" name="search" v-model="query" placeholder="Search for a movie, Tv .">

      <button type="submit" class="btn-success btn-lg" @click="getSearch">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script>
import router from "@/routes";

export default {
  name: "SearchBar",
  data() {
    return {
      query: null
    }
  },
  methods: {
    getSearch() {
      router.push({name: 'search', query: {query: this.query}})
    }
  }
}
</script>

<style scoped>

</style>