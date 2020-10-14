<template>
    <main class="app-container">

        <topbar :mode="getMode"></topbar>

        <transition name="fade" mode="out-in">
            <div v-show="showGlobalSpinner" class="global-spinner-con">
                <loading></loading>
            </div>
        </transition>

        <keep-alive>
            <router-view v-show="!showGlobalSpinner"></router-view>
        </keep-alive>

        <usermessages v-bind="{ msg, type }" v-if="showUserMessage"></usermessages>

    </main>
</template>

<script>
import { USER_MODE, TOPIC_MODE } from './constants'
import topbar from './components/topnav'
import usermessages from './components/usermessages'
import loading from './components/loading'
import Vue from 'vue'
import { 
    EventBus,
    LOADING,
    MESSAGES,
} from './EventBus.ts'
export default {
    name: 'App',
    components: {
        topbar,
        usermessages,
        loading,
    },
    data() {
        return {
            showGlobalSpinner: false,
            showUserMessage: false,
            msg: '',
            type: '',
        }
    },
    mounted() {
        // EventBus handling global loading spinner
        EventBus.$on(LOADING, is => this.showGlobalSpinner = is )

        // EventBus handling usermessages component
        EventBus.$on(MESSAGES, deets => {
            this.showUserMessage = deets.is
            this.msg = deets.msg
            this.type = deets.type
        })
    },
    computed: {
        getMode() {
            if (this.$route.name === USER_MODE) return USER_MODE
            if (this.$route.name === TOPIC_MODE) return TOPIC_MODE
            else return ''
        },
    },
}
</script>

<style lang="sass">
.fade-enter-active, .fade-leave-active
    transition: opacity .2s
.fade-enter, .fade-leave-to
    opacity: 0
</style>
