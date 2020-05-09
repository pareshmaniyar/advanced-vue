import { eventBus } from './index'

export const firstMixin = {
    
    methods: {
        changeTitle(){
            eventBus.$emit('ChangeTitle', 'Wow! That Blog was fun!');
        }
    }
}