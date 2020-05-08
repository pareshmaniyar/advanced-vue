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
                            required
                            placeholder="Enter Features"
                            v-on:keyup.enter="onFeatureSubmit"
                            ></b-form-input>
                        </b-form-group>
                    </b-form>
                    <b-list-group>
                        <b-list-group-item v-for="(item, index) in features">
                            {{item}}
                            <b-button @click="removeFeature(index)">Remove</b-button>
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
                    <b-list-group>
                        <b-list-group-item>Cras justo odio</b-list-group-item>
                        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                        <b-list-group-item>Morbi leo risus</b-list-group-item>
                        <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
                        <b-list-group-item>Vestibulum at eros</b-list-group-item>
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
import { mapGetters } from 'vuex';
import { eventBus } from './index'

export default {
    name: 'app',
    data() {
        return {
            title: 'Wow! That\'s fun!',
            feature_to_add: '',
            features: ['asd','asfdf']
        }
    },
    computed: {
        ...mapGetters({
            lightMode: 'mode',
            features
        })
    },
    created(){
        eventBus.$on('ChangeTitle', title => this.title = title);
    },
    methods: {
        changeTitle(title) {
            this.title = title;
        },
        onFeatureSubmit(){
            console.log("onFeatureSubmit");
            this.feature_to_add = '';
        },
        removeFeature(index){
            console.log("onFeatureSubmit");
        }
    }
}
</script>
<style lang="scss">
    @import 'App.scss';
</style>
