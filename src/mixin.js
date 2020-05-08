import { eventBus } from './index'

export const firtMixin = {
    created() {
        console.log("Using mixin");
    },
    methods: {
        changeTitle(){
            eventBus.$emit('ChangeTitle', 'Wow! That Blog was fun!');
        }
    }
}