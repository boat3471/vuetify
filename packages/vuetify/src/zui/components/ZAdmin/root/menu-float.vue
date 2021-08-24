<template>
    <z-card v-show="visible"
        style="position: fixed; z-index: 2;"
        :style="style"
        outlined
        @mouseenter="enter()"
        @mouseleave="leave()">
        <z-list dense subheader min-width="150"
            class="z-admin-menu-float-list">
            <z-list-item v-for="(child, index) in menu.children" :key="index"
                @click="to(child)"
                @mouseenter="enterChildMenu($event, child)"
                @mouseleave="leaveChildMenu($event, child)">
                <template v-if="child.children && child.children.length > 0">
                    <z-row justify="center" align="center" no-gutters>
                        <z-col>
                            <z-list-item-title>{{child.name}}</z-list-item-title>
                        </z-col>
                        <z-col cols="auto">
                            <z-icon :size="dense ? 20 : 24">mdi-chevron-right</z-icon>
                        </z-col>
                    </z-row>
                </template>
                <template v-else>
                    <z-row justify="center" align="center" no-gutters
                        @mouseenter="forceCloseChild">
                        <z-col>
                            <z-list-item-title>{{child.name}}</z-list-item-title>
                        </z-col>
                    </z-row>
                </template>
            </z-list-item>
        </z-list>
        <z-card v-show="childVisible" outlined
            style="position: absolute;" :style="childStyle"
            @mouseenter="enterChildPanel()">
            <z-list dense subheader min-width="150">
                <z-list-item v-for="(grandson, index) in child.children" :key="index"
                    @click="to(grandson)">
                    <z-list-item-title>{{grandson.name}}</z-list-item-title>
                </z-list-item>
            </z-list>
        </z-card>
    </z-card>
</template>

<script>
    import {events} from './menu-events.js';

    export default {
        name: 'z-admin-menu-float',
        props: {
            dense: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                visible: false,
                menu: {},
                style: {},
                child: {},
                childStyle: {},
                childVisible: false,
            };
        },
        created() {
            events.$on('closeFloatMenu', () => {
                this.forceClose();
            });
            events.$on('showFloatMenu', item => {
                clearTimeout(this.closeTimer);
                this.menu = item.menu;
                this.style = {
                    left: (item.left + 3) + 'px',
                    top: (item.top + (this.$props.dense ? 48 : 64)) + 'px',
                }
                this.visible = true;
            });
            events.$on('hideFloatMenu', menu => {
                this.leave()
            });
        },
        methods: {
            enter() {
                this.visible = true;
                clearTimeout(this.closeTimer);
            },
            leave() {
                this.closeTimer = setTimeout(() => {
                    this.visible = false;
                    this.childVisible = false;
                }, 300);
            },
            enterChildMenu(event, child) {
                if (child && child.children && child.children.length > 0) {
                    clearTimeout(this.closeTimer);
                    this.childStyle = {
                        left: (event.target.offsetLeft + event.target.offsetWidth + 3) + 'px',
                        top: (event.target.offsetTop) + 'px',
                    }
                    this.childVisible = true;
                    this.child = child;
                }
            },
            leaveChildMenu() {
                this.closeTimer = setTimeout(() => {
                    this.childVisible = false;
                }, 300);
            },
            enterChildPanel() {
                clearTimeout(this.closeTimer);
            },
            forceClose() {
                this.visible = false;
                this.childVisible = false;
            },
            forceCloseChild() {
                this.childVisible = false;
            },
            to(item) {
                this.forceClose();
                if (item.children && item.children.length > 0) {
                    return;
                }
                if (item.href) {
                    window.open(item.href, item.target || '_blank');
                    return
                }
                if (this.$route.path !== item.path) {
                    this.$router.push({
                        path: item.path,
                        query: item.query
                    });
                }
            }
        },
    };
</script>

<style lang="scss">
    .z-admin-menu-float-list {
        padding-top: 0;
        padding-bottom: 0;
        // box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.2), 0 0 1px 1px rgba(0, 0, 0, 0.14);
    }
</style>
