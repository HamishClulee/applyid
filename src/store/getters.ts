import { State } from './types'

const getters = {
    topicResults: (state: State) => state.topicResults,
    userResults: (state: State) => state.userResults,
}

export default getters
