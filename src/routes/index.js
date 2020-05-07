import Home from '../pages/home.vue'
import Blog from '../pages/blog.vue'
import Features from '../pages/features.vue'

export default [
    {
        path: '/home',
        component: Home,
        name: 'home'
    },
    {
        path: '/blog',
        component: Blog,
        name: 'blog'
    },
    {
        path: '/features',
        component: Features,
        name: 'features'
    },
    {
        path: '*',
        redirect: '/home'
    }
];
