import {Options, Vue} from 'vue-class-component';
import router from "@/routes";

@Options({
    name: 'MovieComponent',
    props: ['movie'],
})

export default class Movie extends Vue {

    imgPreUrl = "http://image.tmdb.org/t/p/w342"

    goToDetails = (movieId: string) => {
        console.log(movieId);
        router.push({ name: 'movie', query: { id: movieId } })
    }
}
