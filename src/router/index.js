// router.js

import { createRouter, createWebHistory } from 'vue-router';
import ProjectDetails from '../views/ProjectDetails.vue';
import Guestbook from '../views/Guestbook.vue';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,

    },
    {
        path: '/project/:id',
        name: 'ProjectDetails',
        displayName: 'Project Details',
        component: ProjectDetails,
        props: true
    },
    {
        path: '/guestbook',
        name: 'Guestbook',
        displayName: 'Guestbook',
        component: Guestbook
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
