import {Options, Vue} from 'vue-class-component';
import AdminLayout from '@/layouts/Admin/index.vue';
import MovieDetailsComponent from '@/components/MovieDetails/index.vue';
import {Http} from "@/services/http-common";
import SearchBar from "@/components/SearchBar.vue";

@Options({
    components: {
        AdminLayout,
        MovieDetailsComponent,SearchBar
    },
})
export default class MovieDetails extends Vue {

    movieDetails = null;

    created() {
        let movieId = this.$route.query.id;
        Http.get("movie/" + movieId)
            .then(response => {
                this.movieDetails = response.data
            })
            .catch()
    }
}
