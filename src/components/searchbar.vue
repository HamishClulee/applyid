<template>
    <section class="seachbar-container layout-row" v-on:keyup.enter="search">

        <div class="search-actual layout-col">
            <h5 class="title">Search {{ $route.name }}:</h5>
            <div class="search-actual layout-row">
                <input class="input query" v-model="query"  :placeholder="$route.meta.placeholder" />
                <button class="button primary search-button" @click="search">Go!</button>
            </div>
        </div>


        <div class="user-controls layout-col" v-if="$route.name === 'Users'">
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
    
        <div class="user-controls layout-col" v-if="$route.name === 'Topics'">
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
import { EventBus, USER_RESULTS, LOADING } from '../EventBus'
export default {
    name: 'searchbar',
    data() {
        return {
            query: '',
            sortby: '',
            onlyfeatured: false,
        }
    },
    created() {
        this.sortby = this.$route.name === 'Users' ? 'joined' : 'none'
    },
    methods: {
        ...mapMutations(['USER_RESULTS', 'TOPIC_RESULTS']),
        async search() {
            if (this.query !== '') {

                EventBus.$emit(LOADING, true)

                if (this.$route.name === 'Users') {

                    this.USER_RESULTS(await this.$GitHub.searchUsers(this.query, this.sortby))

                }

                if (this.$route.name === 'Topics') {

                    this.TOPIC_RESULTS(await this.$GitHub.searchTopics(this.query, this.sortby, this.onlyfeatured))

                }

                
            }
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
    width: 400px
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