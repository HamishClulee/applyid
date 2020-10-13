import { Results, State } from './types'
import { EventBus, LOADING, MESSAGES, API_SUCCESS } from '../EventBus'
import { AxiosResponse } from 'axios'

const USER_RESULTS = 'USER_RESULTS'
const TOPIC_RESULTS = 'TOPIC_RESULTS'

const mutations = {
    // I'm aware that these two mutations could be stuck together, but future proofing and
    // making the assumption that each resuts set might grow over time in its own direction
    // weighed against saving 3 LOC
    [USER_RESULTS]: (state: State, results: AxiosResponse) => {
        state.userResults = results.data
        EventBus.$emit(MESSAGES, API_SUCCESS)
        EventBus.$emit(LOADING, false)
    },
    [TOPIC_RESULTS]: (state: State, results: Results) => {
        state.topicResults = results
        EventBus.$emit(MESSAGES, API_SUCCESS)
        EventBus.$emit(LOADING, false)
    },

}

export default mutations
