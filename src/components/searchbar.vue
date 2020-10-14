<template>
    <section class="seachbar-container layout-row" v-on:keyup.enter="search">

        <div class="search-actual layout-col">
            <h5 class="title">Search {{ $route.name }}:</h5>
            <div class="search-actual layout-row">
                <input class="input query" v-model="query"  :placeholder="$route.meta.placeholder" />
                <button class="button primary search-button" @click="search">Go!</button>
            </div>
        </div>


        <div class="user-controls layout-col" v-if="mode === USER_MODE">

            <h5>Sort by:</h5>
            <div class="radios-container layout-row">
                <div class="radio-item layout-col">
                    <input type="radio" v-model="sortby" name="sortby" value="followers">
                    <label for="followers">Followers</label><br>
                </div>
                <div class="radio-item layout-col">
                    <input type="radio" v-model="sortby" name="sortby" value="repos">
                    <label for="repos">Repos</label><br>
                </div>
                <div class="radio-item layout-col">
                    <input type="radio" v-model="sortby" name="sortby" value="joined" checked="true">
                    <label for="joined">Joined</label>  
                </div>
            </div>
        </div>
    
        <div class="user-controls layout-col" v-if="mode === TOPIC_MODE">

            <h5>Sort by:</h5>

            <div class="radios-container layout-row">

                <div class="radio-item layout-col">
                    <input type="radio" v-model="sortby" name="sortby" value="name">
                    <label for="name">Name</label><br>
                </div>

                <div class="radio-item layout-col">
                    <input type="radio" v-model="sortby" name="sortby" value="created">
                    <label for="created">Created At</label><br>
                </div>

                <div class="radio-item layout-col final-radio">
                    <input type="radio" v-model="sortby" name="sortby" value="none">
                    <label for="none">No Sort</label><br>
                </div>

                <div class="radio-item layout-col">
                    <input type="checkbox" name="featured" v-model="onlyfeatured" value="fetauredonly">
                    <label for="featured">Featured Only</label>
                </div>

            </div>
        </div>

    </section>
</template>

<script>
import { mapMutations } from 'vuex'
import { USER_MODE, TOPIC_MODE } from '../constants'
import { EventBus, USER_RESULTS, LOADING } from '../EventBus'
export default {
    name: 'searchbar',
    props: {
        mode: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            query: '',
            sortby: null,
            onlyfeatured: false,
            // have to proxy the constants for usage in template blocks
            USER_MODE: USER_MODE,
            TOPIC_MODE: TOPIC_MODE,
        }
    },
    created() {
        this.sortby = this.buildSortBy
    },
    methods: {
        ...mapMutations(['USER_RESULTS', 'TOPIC_RESULTS']),
        async search() {

            if (this.query !== '') {

                EventBus.$emit(LOADING, true)

                if (this.mode === USER_MODE) {

                    this.USER_RESULTS(await this.$GitHub.searchUsers(this.query, this.sortby))

                }

                if (this.mode === TOPIC_MODE) {

                    this.TOPIC_RESULTS(await this.$GitHub.searchTopics(this.query, this.sortby, this.onlyfeatured))

                }
                
            }
        },
    },
    computed: {
        buildSortBy() {
            if (this.mode === USER_MODE) return 'joined'
            if (this.mode === TOPIC_MODE) return 'none'
            else return ''
        },
    },
    watch:{
        $route: function () {
            this.sortby = this.buildSortBy
        },
    }, 
}
</script>

<style lang="sass" scoped>
.final-radio
    border-right: 1px solid $light-gray
    padding-right: 25px
.seachbar-container
    width: 100%
.user-controls
    padding: 5px 20px
.radio-item
    align-items: center
    margin: 0 15px
.input.query
    font-size: 1.2em
    border-bottom: 1px solid $medium-gray
    border-top: none
    border-left: none
    border-right: none
    border-radius: 0
    font-size: 1.2em
    padding: 7px 0
    width: 300px
    outline: none
    &:hover 
        border-bottom: 1px solid $medium-gray
        border-top: none
        border-left: none
        border-right: none
    &:focus 
        border-bottom: 1px solid $secondary
        border-top: none
        border-left: none
        border-right: none
        box-shadow: none
h5
    color: $secondary
</style>