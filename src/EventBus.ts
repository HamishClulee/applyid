import Vue from 'vue'

export const EventBus = new Vue()

// ---------- TYPES OF EVENT
export const LOADING = 'LOADING'
export const MESSAGES = 'MESSAGES'

// --------- EVENT PARAMS
export const SERVER_ERROR = {
    is: true,
    type: 'error',
    msg: 'Something went wrong with the GitHub Api Call.',
}

export const API_SUCCESS = {
    is: true,
    type: 'success',
    msg: 'Search successful.',
}
