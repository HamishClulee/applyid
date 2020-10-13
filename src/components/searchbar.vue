<template>
    <section class="seachbar-container layout-center-all layout-row" v-on:keyup.enter="search">
        <div>Users:</div>
        <input class="query" v-model="query"  placeholder="Enter a github user name..." />
        <button @click="search">Go!</button>
    </section>
</template>

<script>
import { mapMutations } from 'vuex'
import { EventBus, USER_RESULTS, LOADING } from '../EventBus'
export default {
    name: 'searchbar',
    data() {
        return {
            query: '',
        }
    },
    mounted() {

    },
    methods: {
        ...mapMutations(['USER_RESULTS']),
        async search() {
            if (this.query !== '') {
                EventBus.$emit(LOADING, true)
                this.USER_RESULTS(await this.$GitHub.search(this.query))
            }
        },
    },
}
</script>

<style lang="sass" scoped>
.seachbar-container

</style>