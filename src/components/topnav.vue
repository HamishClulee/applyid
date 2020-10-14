<template>
    <section class="navbar-con">

        <div class="navbar-left">
            <searchbar :mode="mode" v-if="$route.name !== 'notfound'"></searchbar>
        </div>

        <div class="navbar-right">

            <router-link
                class="router-button layout-center-all layout-col"
                :to="{ path: '/'}">Users
            </router-link>

             <router-link 
                class="router-button layout-center-all layout-col"
                :to="{ path: '/topics'}">Topics
            </router-link>
            
        </div>

    </section>
</template>
<script>
import searchbar from './searchbar'
export default {
    name: 'topbar',
    components: { searchbar },
    props: {
        mode: {
            type: String,
            required: true,
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
.navbar-left
    align-items: center
    justify-content: flex-start
    width: 100%
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
    width: 170px
    .router-button
        width: 84px
        color: $font
        text-transform: uppercase
        height: $navbar-height
        border-left: 1px solid $light-gray
        cursor: pointer
        &:hover
            background: $light-gray
    .router-link-exact-active
        display: flex
        flex-direction: column
        background: $secondary
        color: white
        &:hover
            background: $secondary

</style>