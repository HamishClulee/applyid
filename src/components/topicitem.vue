<template>
    <section class='result-item-container layout-col' v-if="topic.display_name && topic.description">
        <h5>{{ topic.display_name }}</h5>
        <p>{{ topic.description }}</p>
        <h6>Created By {{ topic.created_by }}</h6>
    </section>
</template>

<script>
export default {
    name: 'useritem',
    props: {
        topic: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped lang="sass">
h6
    color: $primary
.result-item-container
    border-bottom: 2px solid $light-gray
    padding: 15px
</style>