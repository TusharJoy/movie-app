import { Options, Vue } from 'vue-class-component';
import MovieComponent  from '@/components/Movie/index.vue';
import {Http} from '@/services/http-common';

@Options({
    name: 'MoviesComponent',
    components: {
        MovieComponent,
    },
})
export default class Movies extends Vue {
    movies = [1,2,3,4];
    moviesData =null

    created(){
        Http.get(`/discover/movie`)
            .then(response => {
                this.moviesData = response.data.results
            })
            .catch()
    }
}
