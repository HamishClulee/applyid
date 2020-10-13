<template>
    <section class='result-item-container layout-row'>
        <div class="avatar-container layout-col layout-center-all">
            <img :src="testing.avatar_url" class="avatar"/>
        </div>
        <div class="text-items-container layout-col">
            <h2>{{ testing.login }}</h2>
            <h5>{{ testing.type }}</h5>
            <a :href="testing.html_url" target="_blank"><h5>VIEW PROFILE</h5></a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'resultitem',
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            testing: {
                'login': 'HamishClulee',
                'id': 11382674,
                'node_id': 'MDQ6VXNlcjExMzgyNjc0',
                'avatar_url': 'https://avatars3.githubusercontent.com/u/11382674?v=4',
                'gravatar_id': '', 'url': 'https://api.github.com/users/HamishClulee',
                'html_url': 'https://github.com/HamishClulee',
                'followers_url': 'https://api.github.com/users/HamishClulee/followers',
                'following_url': 'https://api.github.com/users/HamishClulee/following{/other_user}',
                'gists_url': 'https://api.github.com/users/HamishClulee/gists{/gist_id}',
                'starred_url': 'https://api.github.com/users/HamishClulee/starred{/owner}{/repo}',
                'subscriptions_url': 'https://api.github.com/users/HamishClulee/subscriptions',
                'organizations_url': 'https://api.github.com/users/HamishClulee/orgs',
                'repos_url': 'https://api.github.com/users/HamishClulee/repos', 
                'events_url': 'https://api.github.com/users/HamishClulee/events{/privacy}',
                'received_events_url': 'https://api.github.com/users/HamishClulee/received_events',
                'type': 'User',
                'site_admin': false,
                'score': 1, 
            },
        }
    },
}
</script>

<style scoped lang="sass">
.avatar
    border-radius: 50%
    height: 250px
    border: 1px solid $light-gray
.avatar-container
    margin-right: 30px
.result-item-container
    border-bottom: 2px solid $medium-gray
    padding-bottom:15px
</style>