import {Options, Vue} from 'vue-class-component';
import AdminLayout from '@/layouts/Admin/index.vue';
import MovieDetailsComponent from '@/components/MovieDetails/index.vue';
import {Http} from "@/services/http-common";

@Options({
    components: {
        AdminLayout,
        MovieDetailsComponent
    },
})
export default class TvDetails extends Vue {

    movieDetails = null;

    created() {
        let movieId = this.$route.query.id;
        Http.get("https://api.themoviedb.org/3/tv/" + movieId + "?api_key=015ba765160b1e8bff2e97a5eb446a98")
            .then(response => {
                this.movieDetails = response.data
            })
            .catch()
    }
}
