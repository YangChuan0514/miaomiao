export default{
    path: '/movie',
    component: () => import('../../views/Movie'),
    children:[
        {
            path: '/movie/search',
            component: () => import('@/components/Search'),
        },
        {
            path: '/movie/city',
            component: () => import('@/components/City'),
        },
        {
            path: '/movie/nowplaying',
            component: () => import('@/components/Nowplaying'),
        },
        {
            path: '/movie/comingsoon',
            component: () => import('@/components/Comingsoon'),
        },
        {
            path:'/*',
            redirect:'/movie/nowplaying'
        }
    ]
}