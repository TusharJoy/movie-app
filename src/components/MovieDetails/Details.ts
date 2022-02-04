import {Options, Vue} from 'vue-class-component';


@Options({
    name: 'MovieDetailsComponent',
    props:['movieDetails']
})

export default class Movie extends Vue {
    imgPreUrl = "http://image.tmdb.org/t/p/w342"
}
