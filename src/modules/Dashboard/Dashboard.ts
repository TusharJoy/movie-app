import { Options, Vue } from 'vue-class-component';
import AdminLayout from '@/layouts/Admin/index.vue';
import MoviesComponent from '@/components/Movies/index.vue';
import SearchBar from "@/components/SearchBar.vue";

@Options({
    components: {
        MoviesComponent,
        AdminLayout,SearchBar
    },
})
export default class Dashboard extends Vue {
    movies = [1,2,4,5,4,5]
}
