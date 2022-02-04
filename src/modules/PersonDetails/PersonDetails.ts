import {Options, Vue} from 'vue-class-component';
import AdminLayout from '@/layouts/Admin/index.vue';
import {Http} from "@/services/http-common";
import PersonDetails from "@/components/PersonDetails.vue"

@Options({
    components: {
        AdminLayout, PersonDetails
    },
})
export default class TvDetails extends Vue {

    details = null;

    created() {
        let personId = this.$route.query.id;
        console.log(personId);
        Http.get("https://api.themoviedb.org/3/person/" + personId + "?api_key=015ba765160b1e8bff2e97a5eb446a98")
            .then(response => {
                this.details = response.data
            })
            .catch()
    }
}
