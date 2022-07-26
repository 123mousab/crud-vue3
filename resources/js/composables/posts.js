import { ref } from 'vue';

export default function usePosts() {
    const posts = ref([]);

    const getPosts = async (
        page = 1,
        category = '',
        order_column = 'id',
        order_direction = 'desc'
    ) => {
        axios.get('/api/posts?page=' +page + '&category=' + category
            + '&order_column=' + order_column + '&order_direction=' + order_direction)
            .then(res => posts.value = res.data)
            .catch(error => console.log(error))
    }

    return { posts, getPosts}
}
