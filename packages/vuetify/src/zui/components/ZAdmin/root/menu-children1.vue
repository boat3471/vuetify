<template>
    <z-list-group v-if="item.children && item.children.length > 0" v-model="item.active" no-action sub-group>
        <template v-slot:activator>
            <z-list-item-content>
                <z-list-item-title v-text="item.name"></z-list-item-title>
            </z-list-item-content>
        </template>
        <template v-for="(child, childIndex) in item.children">
            <template v-if="!child.hidden">
                <admin-menu-children2 :item="child" :key="childIndex"></admin-menu-children2>
            </template>
        </template>
    </z-list-group>
    <z-list-item v-else-if="item.href" :value="item.name" :href="item.href" :target="item.target || '_blank'">
        <z-list-item-action>
            <z-icon>{{item.icon}}</z-icon>
        </z-list-item-action>
        <z-list-item-content>
            <z-list-item-title v-text="item.name"></z-list-item-title>
        </z-list-item-content>
    </z-list-item>
    <z-list-item v-else :value="item.name" :to="{path: item.path, query: item.query}">
        <z-list-item-action>
            <z-icon>{{item.icon}}</z-icon>
        </z-list-item-action>
        <z-list-item-content>
            <z-list-item-title v-text="item.name"></z-list-item-title>
        </z-list-item-content>
    </z-list-item>
</template>

<script>
    import adminMenuChildren2 from './menu-children2.vue';

    export default {
        name: 'z-admin-menu-children2',
        components: {
            adminMenuChildren2
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
