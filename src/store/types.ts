export interface State {
    userResults: Results,
    topicResults: Results,
}
export interface Results {
    totalItems?: Number,
    items?: Array<any>,
}