<template>
    <!-- 迷你模式, 支持浮动菜单, 支持tooltip -->
    <z-list v-if="miniMenuMode"
        subheader
        :dense="dense"
        :expand="expand"
        class="z-admin-menu-list">
        <template v-for="(item, index) in menuData">
            <!-- 有子路由 -->
            <template v-if="item.children && item.children.length > 0">
                <z-list-group :key="index"
                    @mouseenter="showFloatMenu($event, item)"
                    @mouseleave="hideFloatMenu(item)">
                    <template v-slot:activator>
                        <z-list-item-icon>
                            <z-icon :size="dense ? 20 : 24">{{item.icon}}</z-icon>
                        </z-list-item-icon>
                        <z-list-item-title v-if="!miniMenuMode" v-text="item.name"></z-list-item-title>
                    </template>
                </z-list-group>
            </template>
            <!-- 没有子路由, 显示 tooltip -->
            <z-list-item v-else :key="index" :value="item.name" :to="{path: item.path, query: item.query}">
                <z-tooltip right content-class="z-admin-menu-tooltip">
                    <template v-slot:activator="{ on, attrs }">
                        <z-list-item-icon v-bind="attrs" v-on="on" @mouseenter="closeFloatMenu">
                            <z-icon :size="dense ? 20 : 24">{{item.icon}}</z-icon>
                        </z-list-item-icon>
                    </template>
                    <span>{{item.name}}</span>
                </z-tooltip>
                <z-list-item-title v-text="item.name"></z-list-item-title>
            </z-list-item>
        </template>
    </z-list>

    <!-- 展开模式(非迷你模式) -->
    <z-list v-else
        subheader
        :dense="dense"
        :expand="expand"
        class="z-admin-menu-list">
        <template v-for="(item, index) in menuData">
            <!-- 有子路由 -->
            <template v-if="item.children && item.children.length > 0">
                <z-list-group v-model="item.active" :key="index">
                    <template v-slot:activator>
                        <z-list-item-icon>
                            <z-icon :size="dense ? 20 : 24">{{item.icon}}</z-icon>
                        </z-list-item-icon>
                        <z-list-item-title v-text="item.name"></z-list-item-title>
                    </template>
                    <template v-if="item.children && item.children.length > 0"
                        v-for="(child, childIndex) in item.children">
                        <template v-if="!child.hidden">
                            <admin-menu-children :item="child" :key="childIndex"></admin-menu-children>
                        </template>
                    </template>
                </z-list-group>
            </template>
            <!-- 没有子路由 -->
            <z-list-item v-else :key="index" :value="item.name" :to="{path: item.path, query: item.query}">
                <z-list-item-icon>
                    <z-icon :size="dense ? 20 : 24">{{item.icon}}</z-icon>
                </z-list-item-icon>
                <z-list-item-title v-text="item.name"></z-list-item-title>
            </z-list-item>
        </template>
    </z-list>
</template>

<script>
    import {events} from './menu-events.js';
    import adminMenuFloat from './menu-float.vue';
    import adminMenuChildren from './menu-children1.vue';

    export default {
        name: 'z-admin-menu',
        components: {
            adminMenuFloat,
            adminMenuChildren
        },
        props: {
            items: {
                type: Array,
            },
            miniMenuMode: {
                type: Boolean,
                default: true
            },
            dense: {
                type: Boolean,
                default: true
            },
            expand: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                open: ['public'],
                tree: [],
                menuData: [],
                listIndex: 0,
            };
        },
        watch: {
            items(list) {
                this.renderMenus(list);
            }
        },
        created() {
            this.renderMenus(this.items);
        },
        mounted() {
        },
        methods: {
            renderMenus(menus) {
                const menuData = Object.assign([], menus);
                this.setActive(menuData, this.$route);
                this.$nextTick(() => {
                    this.menuData = menuData;
                });
            },
            showFloatMenu(event, item) {
                events.$emit('showFloatMenu', {
                    width: event.target.offsetWidth,
                    left: event.target.offsetWidth,
                    top: event.target.offsetTop,
                    dense: this.$props.dense,
                    menu: item,
                });
            },
            hideFloatMenu(item) {
                events.$emit('hideFloatMenu', item);
            },
            closeFloatMenu() {
                events.$emit('closeFloatMenu');
            },
            setActive(items, route) {
                let parentActive = false;
                items.forEach(item => {
                    item.active = false;
                    let active = item.path === route.path;
                    if (item.children && item.children.length > 0) {
                        const activeChildren = this.setActive(item.children, route);
                        if (activeChildren) {
                            active = true;
                        }

                    }
                    item.active = active;

                    if (active) {
                        parentActive = true;
                    }
                });
                return parentActive;
            }
        }
    };
</script>

<style lang="scss">
    .z-admin-application {
        > .z-admin-menu-list {
            padding-bottom: 0;
        }

        > .z-admin-menu-tooltip {
            left: 60px !important;
            font-size: 14px !important;
            line-height: 26px !important;
        }
    }
</style>
