import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginComponent from './components/LoginComponent';
import AdminComponent from './components/AdminComponent';
import ProfileComponent from './components/ProfileComponent'; 
import EventComponent from './components/EventComponent'; 
import PeopleComponent from './components/PeopleComponent'; 
import LiveFeedComponent from './components/LiveFeedComponent'; 


Vue.use(VueRouter);

const routes =[
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: LoginComponent
    },
    {
        path: '/admin',
        component: AdminComponent,
        name: 'Admin',
        children: [
            //Admin Routes
            {
                path: 'profile',
                component: ProfileComponent,
                name: 'Profile' 
            },
            {
                path: 'event',
                component: EventComponent,
                name: 'event' 
            },
            {
                path: 'people',
                component: PeopleComponent,
                name: 'people' 
            },
            {
                path: 'newsfeed',
                component: LiveFeedComponent,
                name: 'newsfeed' 
            },
            ]
    },
    
];

export default new VueRouter({routes});
