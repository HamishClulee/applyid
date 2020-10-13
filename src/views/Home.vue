<template>
    <div class="page-container restrict">
        <h1>Search Users</h1>
        <searchbar></searchbar>
        <searchresults></searchresults>
    </div>
</template>

<script>
import searchbar from '../components/searchbar'
import searchresults from '../components/searchresults'
export default {
    name: 'home',
    components: { searchbar, searchresults },
}
</script>

<style lang="sass" scoped>
h1
    color: $primary
</style>
