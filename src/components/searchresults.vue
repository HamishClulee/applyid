<template>
    <section class="search-results-container">

        <h5>Showing first {{ buildItems.items.length }} of a possible {{ buildItems.total_count }} items.</h5>
        <h6 v-if="resultType === 'topic'">Malformed items have been removed which can cause the data above to appear incorrect.</h6>

        <template v-if="resultType === 'user'">
            <useritem
                v-for="(user, index) in buildItems.items" :key="index" 
                :user="user"
            ></useritem>
        </template>

        <template v-else>
            <topicitem
                v-for="(topic, index) in buildItems.items" :key="index" 
                :topic="topic"
            ></topicitem>
        </template>

    </section>
</template>

<script>
import useritem from './useritem'
import topicitem from './topicitem'
import { mapGetters } from 'vuex'
export default {
    name: 'searchresults',
    components: { useritem, topicitem },
    props: {
        resultType: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapGetters(['userResults', 'topicResults']),
        buildItems() {
            return this.resultType === 'user' ? this.userResults : this.topicResults
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
    text-transform: uppercase
    font-size: 1em
    opacity: 0.6
</style>