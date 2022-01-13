import { createWebHistory, createRouter } from 'vue-router'
import Index from '@/views/Index.vue'
import Todo from '@/views/Todo.vue'

const routes = [
    {
        path:'/',
        name:'index',
        component: Index
    },
    {
        path:'/todo',
        name:'todo',
        component: Todo
    }
]

const router = new createRouter({
    history : createWebHistory(),
    routes
})

export default router