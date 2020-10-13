<template>
    <transition name="fade" mode="out-in">
        <div class="message-container" :class="type">
            {{ msg }}
        </div>
    </transition>
</template>

<script>
import { 
    EventBus,
    MESSAGES,
} from '../EventBus.ts'

const TIME_TO_DISAPPEAR = 7000
export default {
    name: 'usermessages',
    props: {
        type: {
            type: String,
            validator: (value) => {
                return ['success', 'warning', 'error', 'info', ''].indexOf(value) !== -1
            },
        },
        msg: {
            required: true,
            type: String,
        },
    },
    mounted() {
        setTimeout(() => {
            EventBus.$emit(MESSAGES, { is: false })
        }, TIME_TO_DISAPPEAR)
    },
}
</script>

<style scoped lang="sass">
.message-container
    position: fixed
    bottom: 20px
    right: 20px
    padding: 15px 40px
    border-radius: 3px
    border: 1px solid $light-gray
    font-family: $body-font
    font-size: 1.3em
    z-index: 6
.success
    background: $success
    color: $off-white
.warning
    background: $high-contrast
    color: $primary
.error
    background: $highlight
    color: $off-white
.info
    background: $link
    color: $off-white
.white
    background: $off-white
    color: $primary
</style>