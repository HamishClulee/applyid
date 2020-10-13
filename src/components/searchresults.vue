<template>
    <section class="search-results-container">
        <h5>Results</h5>
        <!-- v-for="(user, index) in userResults.items" :key="index" -->
        <resultitem
            :user="{}"
        ></resultitem>
    </section>
</template>

<script>
import resultitem from './resultitem'
import { mapGetters } from 'vuex'
export default {
    name: 'searchresults',
    components: { resultitem },
    computed: {
        ...mapGetters(['userResults']),
    },
}
</script>

<style scoped lang="sass">

</style>