<template>
    <div class="page-container restrict">
        <searchresults
            v-if="topicResults.items && topicResults.items.length > 0"
            resultType="topic"
        ></searchresults>
        <div v-else class="no-results layout-center-all layout-col">
            <h2>No Results</h2>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import searchresults from '../components/searchresults'
export default {
    name: 'topics',
    components: { searchresults },
    computed: {
        ...mapGetters(['topicResults']),
    },
}
</script>

<style lang="sass" scoped>
h2
    color: $secondary
.no-results
    height: 90vh
</style>
