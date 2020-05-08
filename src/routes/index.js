
const Home = () => import('../pages/home.vue')
const Blog = () => import('../pages/blog.vue')
const Features = () => import('../pages/features.vue')
const Store = () => import('../pages/store.vue')

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
        path: '/store',
        component: Store,
        name: 'store'
    },
    {
        path: '*',
        redirect: '/home'
    }
];
