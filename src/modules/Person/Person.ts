import {Options, Vue} from 'vue-class-component';
import {Http} from '@/services/http-common';
import PersonCard from "@/components/PersonCard.vue";
import AdminLayout from '@/layouts/Admin/index.vue';
import SearchBar from "@/components/SearchBar.vue";
@Options({
    components: {
        PersonCard,
        AdminLayout,SearchBar
    },
})
export default class Persons extends Vue {

    persons = null

    created() {
        Http.get(`https://api.themoviedb.org/3/person/popular?api_key=015ba765160b1e8bff2e97a5eb446a98&sort_by=popularity.desc`)
            .then(response => {
                this.persons = response.data.results
            })
            .catch()
    }
}
