<template>
    <section class="navbar-con">

        <div class="navbar-left">
            <searchbar v-if="$route.name !== 'notfound'"></searchbar>
        </div>

        <div class="navbar-right">

            <div class="text-item" :class="checkvis('Users') ? 'active-route' : 'inactive-route'">
                <router-link :to="{ path: '/'}">Users</router-link>
            </div>
             <div class="text-item" :class="checkvis('Topics') ? 'active-route' : 'inactive-route'">
                <router-link :to="{ path: '/topics'}">Topics</router-link>
            </div>
            
        </div>

    </section>
</template>
<script>
import searchbar from './searchbar'
export default {
    name: 'topbar',
    components: { searchbar },
    methods: {
        checkvis(item) {
            return item === this.$route.name
        },
    },
}
</script>
<style lang="sass" scoped>
.navbar-con, .navbar-left, .navbar-right
    display: flex
    flex-direction: row
    background-color: white
    z-index: 200
    a
        color: $font
        text-transform: uppercase
        margin-right: 20px
.navbar-left
    align-items: center
    justify-content: flex-start
    width: 80%
    padding-left: 10px
.navbar-con
    position: fixed
    width: 100%
    top: 0
    z-index: 200
    opacity: 0.9
    background-color: white
    border-bottom: 1px solid $medium-gray
    height: $navbar-height
    box-shadow: 0px 7px 5px -7px $light-gray
.navbar-right
    align-items: center
    justify-content: flex-end
    width: 15%
    margin-right: 20px
    border-left: 1px solid $light-gray
.active-route
    display: flex
    flex-direction: column
    &:after
        content: ''
        width: 30px
        height: 2px
        background-color: $primary
        position: relative
        top: 2px
        right: 2px
.inactive-route
    display: flex
    flex-direction: column
    &:hover
        &:after
            content: ''
            width: 30px
            height: 2px
            background-color: lighten($primary, 20)
            position: relative
            top: 2px
            right: 2px
    &:after
        content: ''
        width: 30px
        height: 2px
        background-color: white
        position: relative
        top: 2px
        right: 2px
</style>