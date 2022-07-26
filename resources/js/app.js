import './bootstrap';

// include css file
import '../css/app.css';

// For Vue.js
import { createApp } from 'vue/dist/vue.esm-bundler'
import PostIndex from './components/Posts/index.vue'
import LaravelVuePagination from 'laravel-vue-pagination';

const app = createApp({})
app.component('posts-index', PostIndex)
app.component('Pagination', LaravelVuePagination)

app.mount('#app')
