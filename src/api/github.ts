import axios, { AxiosResponse, AxiosInstance, AxiosPromise } from 'axios'

import { EventBus, MESSAGES, SERVER_ERROR } from '../EventBus'

export class GitHub {

    private BASE_URL = `https://api.github.com` // ?q=tom+repos:%3E42+followers:%3E1000

    ax: AxiosInstance;

    constructor() {

        this.ax = axios.create({
            baseURL: this.BASE_URL,
            headers: {
                'Authorization': `Bearer ${process.env.VUE_APP_API_TOKEN}`,
                'Accept': 'application/vnd.github.v3+json',
            },
        })

        // Catch any response codes outside of the 200 range
        this.ax.interceptors.response.use(function (response) {
            return response
        }, function (error) {
            EventBus.$emit(MESSAGES, SERVER_ERROR)
            return Promise.reject(error)
        })

    }

    private buildQueryParams(sortBy: String): String {
        return sortBy
    }

    search(query: String, sortBy: String): AxiosPromise<AxiosResponse> {
        return this.ax.get(`/search/users?q=${query}`)
    }
}
