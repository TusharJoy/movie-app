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
        Http.get("tv/" + movieId)
            .then(response => {
                this.movieDetails = response.data
            })
            .catch()
    }
}
