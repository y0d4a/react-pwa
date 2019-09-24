import Dashboard from '../components/class/Dashboard';
import NotFound from '../components/class/NotFound';
import Posts from '../components/class/Posts';
import DetailsComponent from '../components/class/Details';

const routes = [
    {
        path: '/',
        exact: true,
        component: Dashboard
    },
    {
        path: '/posts/:cname',
        component: Posts
    },
    {
        path: '/categories/:cid/posts/:pid/details',
        component: DetailsComponent
    },
    {
        path: '*',
        restricted: false,
        component: NotFound
    }
];

export default routes;