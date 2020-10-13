<template>
    <main class="app-container">

        <topbar></topbar>

        <!-- GLOBAL SPINNER -->
        <transition name="fade" mode="out-in">

            <div v-show="showGlobalSpinner" class="global-spinner-con">
                <loading></loading>
            </div>

        </transition>

		<!-- APP ACTUAL -->
        <transition name="fade" mode="out-in">

            <router-view v-show="!showGlobalSpinner"></router-view>

        </transition>

        <usermessages v-bind="{ msg, type }" v-if="showUserMessage"></usermessages>

    </main>
</template>

<script>
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
}
</script>

<style lang="sass">
.fade-enter-active, .fade-leave-active
    transition: opacity .2s
.fade-enter, .fade-leave-to
    opacity: 0
</style>
