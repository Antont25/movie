import axios from "axios";

const instance = axios.create({
    baseURL: 'https://imdb-api.com/en/API/'
})

const key = 'k_x297nk26'

export const api = {
    fetchMovies: async () => {
        const response = await instance.get(`AdvancedSearch/${key}?title_type=feature&release_date=2022-01-01,2022-07-07`)
        return response.data.results
    },
    fetchInfoMovie: async (id: string) => {
        const response = await instance.get(`Title/${key}/${id}/Wikipedia`)
        return response.data
    },
    fetchYouTubeTrailer: async (id: string) => {
        const response = await instance.get(`YouTubeTrailer/${key}/${id}`)
        return response.data
    },

}
