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
        Http.get(`https://api.themoviedb.org/3/discover/movie?api_key=015ba765160b1e8bff2e97a5eb446a98&sort_by=popularity.desc`)
            .then(response => {
                this.moviesData = response.data.results
            })
            .catch()
    }
}
