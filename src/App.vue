<template>
    <div :class="lightMode?'light':'dark'">
        <div>
            <b-navbar type="dark" variant="dark">
                <b-navbar-nav>
                    <b-nav-item :to="'home'">Home</b-nav-item>
                    <b-nav-item :to="'blog'">Blog</b-nav-item>
                    <b-nav-item :to="'features'">Features</b-nav-item>
                    <b-nav-item :to="'store'">Store</b-nav-item>
                </b-navbar-nav>
            </b-navbar>
        </div>
        <b-card>
            <h2>{{title}}</h2>
            <h6><i>"Practice makes a man confident in the Interview"</i></h6>
            <b-card-group deck>
                <b-card
                    border-variant="secondary"
                    header="Features"
                    header-border-variant="secondary"
                    align="center"
                >
                    <b-card-text>
                        <b-form>
                            <b-form-group id="input-group-2" label="Add features:" label-for="input-2">
                                <b-form-input
                                id="input-2"
                                v-model="feature_to_add"
                                placeholder="Enter Features.."
                                v-on:keyup.enter="addFeatures(feature_to_add),feature_to_add = ''"
                                v-focus
                                ></b-form-input>
                            </b-form-group>
                        </b-form>
                        <b-list-group>
                            <b-list-group-item v-for="(item, index) in features" :key="index">
                                {{item}}
                                <b-button size="sm" pill variant="outline-danger" @click="removeFeatures(index)">Remove</b-button>
                            </b-list-group-item>
                        </b-list-group>
                    </b-card-text>
                </b-card>
                <b-card
                    border-variant="secondary"
                    header="Secondary"
                    header-border-variant="secondary"
                    align="center"
                >
                    <b-card-text>
                        <b-form>
                            <b-form-group id="input-group-2" label="Add blogs:" label-for="input-2">
                                <b-form-input
                                id="input-2"
                                v-model="blog_to_add"
                                placeholder="Enter blogs.."
                                v-on:keyup.enter="addContent(blog_to_add),blog_to_add = ''"
                                ></b-form-input>
                            </b-form-group>
                        </b-form>
                        <b-list-group>
                            <b-list-group-item v-for="(item, index) in content" :key="index">
                                {{item}}
                                <b-button size="sm" @click="removeContent(index)">Remove</b-button>
                            </b-list-group-item>
                        </b-list-group>
                    </b-card-text>
                </b-card>
            </b-card-group>
        </b-card>
        <router-view v-on:changetitle="changeTitle($event)">
            <b>Random stuff to see in the footer</b>
        </router-view>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import { eventBus } from './index'
import { BFormGroup, BForm, BFormInput, 
    BNavbar, BNavItem, BNavbarNav, 
    BCardText, BCard, BCardGroup, BButton,
    BListGroup, BListGroupItem } from 'bootstrap-vue'

export default {
    name: 'app',
    data() {
        return {
            title: 'Wow! That\'s fun!',
            feature_to_add: '',
            blog_to_add: ''
        }
    },
    components: {
        BFormGroup, BForm, BFormInput, 
        BNavbar, BNavItem, BNavbarNav, 
        BCardText, BCard, BCardGroup,
        BListGroup, BListGroupItem
    },
    computed: {
        ...mapGetters({
            lightMode: 'mode',
            features: 'features',
            content: 'blog/content'
        })
    },
    created(){
        eventBus.$on('ChangeTitle', title => this.title = title);
    },
    methods: {
        changeTitle(title) {
            this.title = title;
        },
        ...mapMutations(['addFeatures', 'removeFeatures']),
        ...mapMutations({
            addContent: 'blog/addContent',
            removeContent: 'blog/removeContent'
        })
    }
}
</script>
<style lang="scss">
    @import 'App.scss';
</style>
