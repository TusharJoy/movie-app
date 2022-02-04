import {Options, Vue} from 'vue-class-component';
import AdminLayout from '@/layouts/Admin/index.vue';
import {Http} from "@/services/http-common";
import MovieCard from '@/components/MovieCard.vue';
import PersonCard from '@/components/PersonCard.vue';
import TvCard from '@/components/TvCard.vue';

@Options({
    components: {
        AdminLayout,
        MovieCard, TvCard, PersonCard
    },
})
export default class Search extends Vue {
    tvData = [];
    movieData = [];
    personData = [];
    query = null;

    getSearchedResult() {
        this.resetResult()
        Http.get("https://api.themoviedb.org/3/search/multi?api_key=015ba765160b1e8bff2e97a5eb446a98&language=en-US&query=" + this.query)
            .then(response => {
                let data = response.data.results

                data.forEach((element: any, index: any) => {
                    console.log(element.media_type);
                    console.log(this.movieData);
                    if (element.media_type === "movie") {
                        // @ts-ignore
                        this.movieData.push(element);
                    }
                    if (element.media_type === "tv") {
                        // @ts-ignore
                        this.tvData.push(element);
                    }
                    if (element.media_type === "person") {
                        // @ts-ignore
                        this.personData.push(element);
                    }
                })

            })
            .catch()
    }

    resetResult() {
        this.movieData = [];
        this.tvData = [];
        this.personData = [];
    }
}
