<template>
    <z-app class="z-admin-application">
        <router-view></router-view>
        <slot></slot>
    </z-app>
</template>

<script>
    export default {
        name: 'z-admin-application',
        components: {},
        props: {},
        data() {
            return {};
        },
        watch: {},
        computed: {},
        beforeCreate() {
        },
        created() {
        },
        mounted() {
        },
        methods: {}
    };
</script>

<style lang="scss">
    .z-admin-application {
        // ignore
    }
</style>
