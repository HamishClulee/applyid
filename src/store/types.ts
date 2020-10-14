export interface State {
    userResults: Results,
    topicResults: Results,
}
export interface Results {
    total_count?: Number,
    items?: Array<any>,
}