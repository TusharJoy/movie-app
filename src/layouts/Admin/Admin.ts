import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Options, Vue } from 'vue-class-component';
import NavbarComponent from '@/components/Navbar/index.vue';

@Options({
    components: {
        NavbarComponent,
    },
})
export default class Admin extends Vue {}
