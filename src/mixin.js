import { eventBus } from './index'

export const firtMixin = {
    
    methods: {
        changeTitle(){
            eventBus.$emit('ChangeTitle', 'Wow! That Blog was fun!');
        }
    }
}