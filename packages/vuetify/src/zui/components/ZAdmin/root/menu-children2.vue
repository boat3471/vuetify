<template>
    <z-list-group v-if="item.children && item.children.length > 0" v-model="item.active" no-action sub-group>
        <template v-slot:activator>
            <z-list-item-title v-text="item.name"></z-list-item-title>
        </template>
        <template v-for="(child, childIndex) in item.children">
            <template v-if="!child.hidden">
            </template>
        </template>
    </z-list-group>
    <z-list-item v-else-if="item.href" :value="item.name" :href="item.href" :target="item.target || '_blank'">
        <z-list-item-title v-text="item.name"></z-list-item-title>
    </z-list-item>
    <z-list-item v-else :value="item.name" :to="{path: item.path, query: item.query}">
        <z-list-item-title v-text="item.name"></z-list-item-title>
    </z-list-item>
</template>

<script>
    export default {
        name: 'z-admin-menu-children',
        components: {
        },
        props: {
            item: {
                type: Object,
            },
        },
        data: () => ({}),
        created() {
        },
        mounted() {
        },
        watch: {},
    };
</script>
