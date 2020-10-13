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

    private buildTopicParams(sortBy: String, onlyfeatured: Boolean): String {
        if(!sortBy && !onlyfeatured) return ``
        else if (sortBy && !onlyfeatured) return `&sort:${sortBy}`
        else if (!sortBy && onlyfeatured) return `+is:featured`
        else return `+is:featured&sort:${sortBy}`
    }

    private buildUserParams(sortBy: String): String {
        if (!sortBy) sortBy = 'joined'
        return `sort:${sortBy}`
    }

    searchUsers(query: String, sortby: String): AxiosPromise<AxiosResponse> {
        this.ax.defaults.headers.common['Accept'] = 'application/vnd.github.v3+json'
        return this.ax.get(`/search/users?q=${query}+${this.buildUserParams(sortby)}`)
    }

    searchTopics(query: String, sortby: String, onlyfeatured: Boolean = false): AxiosPromise<AxiosResponse> {
        this.ax.defaults.headers.common['Accept'] = 'application/vnd.github.mercy-preview+json'
        return this.ax.get(`/search/topics?q=${query}${this.buildTopicParams(sortby, onlyfeatured)}`)
    }
}
