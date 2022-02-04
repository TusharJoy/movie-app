import {Options, Vue} from 'vue-class-component';
import router from "@/routes";

@Options({
    name: 'MovieComponent',
    props: ['movie', 'type'],
})

export default class Movie extends Vue {

    imgPreUrl = "http://image.tmdb.org/t/p/w342"

    goToDetails = (Id: string, type: string) => {

        router.push({name: type, query: {id: Id}})
    }
}
