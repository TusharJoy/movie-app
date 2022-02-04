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

    created() {
        // @ts-ignore
        let param = this.$route.query.query;
        console.log(param)
        if (param != null) {
            // @ts-ignore
            this.query = param;
            this.getSearchedResult()
        }
    }

    getSearchedResult() {
        this.resetResult()
        Http.get("search/multi?query=" + this.query)
            .then(response => {
                let data = response.data.results

                data.forEach((element: any, index: any) => {
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
