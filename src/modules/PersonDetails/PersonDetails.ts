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
        Http.get("person/" + personId)
            .then(response => {
                this.details = response.data
            })
            .catch()
    }
}
