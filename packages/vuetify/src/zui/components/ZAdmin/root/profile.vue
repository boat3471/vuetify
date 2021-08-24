<template>
    <z-menu v-model="showProfileMenu"
        left
        nudge-bottom="36"
        :close-on-content-click="false">
        <template v-slot:activator="{on:menu}">
            <z-btn icon class="mr-1" v-on="{...menu}">
                <z-avatar>
                    <slot name="photo">
                        <z-icon size="28">mdi-account-circle</z-icon>
                    </slot>
                </z-avatar>
            </z-btn>
        </template>
        <z-card width="256">
            <slot></slot>
            <z-list nav dense>
                <slot name="menus"></slot>
                <z-list-item @click="logout">
                    <z-list-item-icon>
                        <z-icon>mdi-logout</z-icon>
                    </z-list-item-icon>
                    <z-list-item-content>
                        <z-list-item-title>
                            Logout
                        </z-list-item-title>
                    </z-list-item-content>
                </z-list-item>
            </z-list>
        </z-card>
    </z-menu>
</template>

<script>
    export default {
        name: 'z-admin-profile',
        data() {
            return {
                showProfileMenu: false,
            };
        },
        methods: {
            logout() {
                this.showProfileMenu = false;
                const {auth} = this.$ui;
                if (auth && auth.logout) {
                    auth.logout();
                } else {
                    window.console.warn('未配置登出');
                }
            }
        }
    };
</script>

<style lang="scss">
    // ignore
</style>
