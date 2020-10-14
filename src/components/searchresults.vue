<template>
    <section class="search-results-container">

        <template v-if="buildItems.total_count > 0">
            <h5>Showing first {{ buildItems.items.length }} of a possible {{ buildItems.total_count }} items.</h5>
            <h6 v-if="mode === TOPIC_MODE">Malformed items have been removed which can cause the data above to appear incorrect.</h6>
        </template>


        <template v-if="mode === USER_MODE">
            <useritem
                v-for="(user, index) in buildItems.items" :key="index" 
                :user="user"
            ></useritem>
        </template>

        <template v-else-if="mode === TOPIC_MODE">
            <topicitem
                v-for="(topic, index) in buildItems.items" :key="index" 
                :topic="topic"
            ></topicitem>
        </template>

        <div v-else class="no-results layout-center-all layout-col">
            <h2>No results to display.</h2>
        </div>

    </section>
</template>

<script>
import { USER_MODE, TOPIC_MODE } from '../constants'
import useritem from './useritem'
import topicitem from './topicitem'
import { mapGetters } from 'vuex'
export default {
    name: 'searchresults',
    components: { useritem, topicitem },
    props: {
        mode: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            // have to proxy the constants for usage in template blocks
            USER_MODE: USER_MODE,
            TOPIC_MODE: TOPIC_MODE,
        }
    },
    computed: {
        ...mapGetters(['userResults', 'topicResults']),
        buildItems() {
            if (this.mode === USER_MODE) return this.userResults
            if (this.mode === TOPIC_MODE) return this.topicResults
            else return ''
        },
    },
}
</script>

<style scoped lang="sass">
h5
    margin-top: 170px
    color: $medium-gray
h6
    color: $primary
    font-size: 1em
    opacity: 0.6
h2
    color: $tertiary
.no-results
    height: 102vh
</style>