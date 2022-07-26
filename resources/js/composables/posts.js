import { ref } from 'vue';

export default function usePosts() {
    const posts = ref([]);

    const getPosts = async (page = 1) => {
        axios.get('/api/posts?page=' +page)
            .then(res => posts.value = res.data)
            .catch(error => console.log(error))
    }

    return { posts, getPosts}
}
