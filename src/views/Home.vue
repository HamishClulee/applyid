<template>
    <div class="page-container restrict">
        <searchresults
            :mode="mode"
        ></searchresults>
    </div>
</template>

<script>
import { USER_MODE } from '../constants'
import searchresults from '../components/searchresults'
export default {
    name: 'home',
    components: { searchresults },
    data() {
        return {
            mode: USER_MODE,
        }
    },
}
</script>

<style lang="sass" scoped>
h2
    color: $secondary
.no-results
    height: 90vh
</style>
