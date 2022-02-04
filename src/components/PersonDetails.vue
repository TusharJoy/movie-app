<template>
  <div class="flex items-center bg-indigo-100 w-screen min-h-screen" style="font-family: 'Montserrat', sans-serif;">
    <div class="container flexjustify-center">
      <div class="w-full sm:w-9/12  ml-auto mr-auto">
        <div class="flex flex-wrap">
          <div class="w-full sm:w-3/12 bg-red-200 p-5 sm:pb-20">
            <h1 class="font-bold text-lg">{{ person.name }}</h1>
            <div class="w-10 h-1 bg-red-600"></div>
            <ul class="space-y-2 mt-2 sm:mb-8">
              <li>
                <span class="text-xs text-gray-700">popularity</span>
                <strong class="block text-sm text-gray-700">{{ person.popularity }}</strong>
              </li>
              <li>
                <span class="text-xs text-gray-700">Place of Birth</span>
                <strong class="block text-sm text-gray-700"
                >{{ person.place_of_birth }}</strong>
              </li>
              <li>
                <span class="text-xs text-gray-700">Known For</span>
                <strong class="block text-sm text-gray-700"
                >{{ person.known_for_department }}</strong>
              </li>
              <li>
                <span class="text-xs text-gray-700">Birthday</span>
                <strong class="block text-sm text-gray-700"
                >{{ person.birthday }}</strong>
              </li>
            </ul>
          </div>
          <div class="w-full sm:w-9/12 h-64 sm:h-auto bg-indigo-900 bg-cover relative flex items-center justify-center">
            <img :src="imgPreUrl + person.profile_path" alt="poster"/>
          </div>
        </div>
        <div class="flex flex-wrap">

          <div class="w-full sm:w-9/12 bg-gray-100 flex">
            <div class="bg-white sm:-mt-16 sm:mr-8 w-full h-64 relative rounded-tr-lg">
              <ul class="flex flex-wrap pl-2 pr-2 mb-2 sm:pt-5 sm:pb-5 sm:pl-8 sm:pr-8 sm:space-x-6 text-sm font-light">
                <li class="cursor-pointer font-semibold border-b-2 border-red-600 leading-loose pr-3">
                  Biography
                </li>
              </ul>
            </div>
            <div class="row m-4">
              <div class="col-6 m-5">
                {{ person.biography }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonDetails",
  props: ['person'],
  data() {
    return {
      imgPreUrl: "https://image.tmdb.org/t/p/w342"
    };
  },
}
</script>

<style scoped>

</style>