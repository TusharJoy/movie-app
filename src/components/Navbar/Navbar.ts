import {Options, Vue} from 'vue-class-component';
import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {BellIcon, MenuIcon, XIcon} from '@heroicons/vue/outline'
import router from "@/routes";

@Options({
    name: 'NavbarComponent',
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        BellIcon,
        MenuIcon,
        XIcon,
    },
})

export default class Navbar extends Vue {
    navigation = [
        {name: 'Movies', href: '/movies', current: true},
        {name: 'TV Shows', href: '/tv-series', current: false},
        {name: 'People', href: '/persons', current: false},
    ]
}