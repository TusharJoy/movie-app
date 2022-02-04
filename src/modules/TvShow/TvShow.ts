import {Options, Vue} from 'vue-class-component';
import MovieComponent from '@/components/Movie/index.vue';
import {Http} from '@/services/http-common';
import AdminLayout from '@/layouts/Admin/index.vue';
import SearchBar from "@/components/SearchBar.vue";
@Options({
    components: {
        MovieComponent, AdminLayout,SearchBar
    },
})
export default class TvShow extends Vue {
    tvData = null

    created() {
        Http.get(`https://api.themoviedb.org/3/discover/tv?api_key=015ba765160b1e8bff2e97a5eb446a98&sort_by=popularity.desc`)
            .then(response => {
                this.tvData = response.data.results
            })
            .catch()
    }
}
