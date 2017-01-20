'use sreict';

import Vue from 'vue';
{{#router}}
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Info from '@components/info';
{{/router}}

import App from './app';

{{#if router}}

const Outer = { template: '<router-view></router-view>' };

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Outer,
            children: [
                // 嵌套路由 https://github.com/vuejs/vue-router/blob/next-doc/docs/en/advanced-routing/nested.md
                { path: '', component: App },
                { path: 'info', component: Info }
            ],
        }
    ]
});

const app = new Vue({
    router,
    ...Outer
});

{{else}}

const app = new Vue({
    ...App
});

{{/if}}

app.$mount('#app');
