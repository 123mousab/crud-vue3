import './bootstrap';

// include css file
import '../css/app.css';

// For Vue.js
import { createApp } from 'vue/dist/vue.esm-bundler'

import PostIndex from './components/Posts/index.vue'

const app = createApp({})
app.component('posts-index', PostIndex)

app.mount('#app')
