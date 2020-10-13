<template>
    <section class='result-item-container layout-row'>
        <div class="avatar-container layout-col layout-center-all">
            <img :src="user.avatar_url" class="avatar"/>
        </div>
        <div class="text-items-container layout-col">
            <h4>{{ user.login }}</h4>
            <h5>{{ user.type }}</h5>
            <a :href="user.html_url" target="_blank"><h5>VIEW PROFILE</h5></a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'useritem',
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped lang="sass">
.avatar
    border-radius: 50%
    height: 200px
    border: 1px solid $light-gray
.avatar-container
    margin-right: 30px
.result-item-container
    border-bottom: 2px solid $light-gray
    padding: 15px
</style>