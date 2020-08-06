import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID bK2MUwQKoqLlBFsVxJYCzNpHLgVaayG_c6N08i5nAVM",
    },
})