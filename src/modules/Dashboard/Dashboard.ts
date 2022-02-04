import { Options, Vue } from 'vue-class-component';
import HelloWorldComponent from '@/components/HelloWorld/index.vue';
import AdminLayout from '@/layouts/Admin/index.vue';
import MoviesComponent from '@/components/Movies/index.vue';

@Options({
    components: {
        HelloWorldComponent,
        MoviesComponent,
        AdminLayout,
    },
})
export default class Dashboard extends Vue {
    movies = [1,2,4,5,4,5]
}
