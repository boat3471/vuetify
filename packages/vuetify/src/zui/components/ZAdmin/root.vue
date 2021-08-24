<template>
    <div class="z-admin-main-wrap">
        <z-app-bar app
            :elevation="toolbarElevation"
            :color="toolbarColor"
            :clipped-left="theme.menuDisplayMode"
            :dense="theme.denseMode"
            :dark="toolbarDark">
            <z-app-bar-nav-icon v-if="!theme.miniMenuMode"
                style="margin-right: 16px;"
                @click.stop="actionNavDrawer">
            </z-app-bar-nav-icon>
            <slot name="logo">
                <z-admin-logo></z-admin-logo>
            </slot>
            <z-toolbar-title class="mr-12 align-center">
                <slot name="title">
                    <span class="title" style="user-select: none;">{{projectDisplayName}}</span>
                </slot>
            </z-toolbar-title>
            <slot name="toolbar-prepend">
            </slot>
            <z-spacer></z-spacer>
            <slot name="toolbar-append">
            </slot>
            <slot name="profile-area">
                <z-admin-profile
                    @action="actionProfile"
                    @logout="logout">
                    <slot name="profile">
                    </slot>
                    <template #photo>
                        <slot name="photo"></slot>
                    </template>
                    <template #menus>
                        <slot name="profile-menus"></slot>
                    </template>
                </z-admin-profile>
            </slot>
            <!--
            <z-btn icon>
                <z-icon>mdi-dots-vertical</z-icon>
            </z-btn>
            -->
        </z-app-bar>

        <!-- 菜单区域 -->
        <slot name="menu-area">
            <z-navigation-drawer v-model="theme.menuVisible" app
                class="z-admin-navigation-drawer"
                :width="theme.menuWidth"
                :permanent="theme.miniMenuMode"
                :mini-variant="theme.miniMenuLayout"
                :clipped="theme.menuDisplayMode">

                <!-- 主菜单顶部附加功能 -->
                <template #prepend>
                    <slot name="menu-prepend">
                    </slot>
                </template>

                <!-- 主菜单 -->
                <slot name="menus">
                    <z-admin-menu :items="menus"
                        :mini-menu-mode="theme.miniMenuLayout"
                        :dense="theme.denseMode"
                        :expand="theme.menuExpandMode">
                    </z-admin-menu>
                </slot>

                <!-- 主菜单底部附加功能 -->
                <template #append>
                    <slot name="menu-append">
                    </slot>

                    <!-- 皮肤和收起菜单 -->

                    <z-list :dense="theme.denseMode" subheader>
                        <z-list-item @click="onShowThemePanel()">
                            <z-list-item-icon>
                                <z-icon v-if="theme.darkStatus" color="grey darken-1" size="18">mdi-brightness-4
                                </z-icon>
                                <z-icon v-else color="grey darken-1" size="18">mdi-brightness-7</z-icon>
                            </z-list-item-icon>
                            <z-list-item-title class="grey--text text--darken-1">
                                Theme
                            </z-list-item-title>
                        </z-list-item>
                        <z-list-item @click="actionNavDrawer()">
                            <z-list-item-icon>
                                <z-icon v-if="theme.miniMenuLayout">mdi-chevron-right</z-icon>
                                <z-icon v-else>mdi-chevron-left</z-icon>
                            </z-list-item-icon>
                            <z-list-item-title class="grey--text text--darken-1">
                                Fold
                            </z-list-item-title>
                        </z-list-item>
                    </z-list>
                </template>
            </z-navigation-drawer>
        </slot>

        <!-- 主体 -->
        <slot name="main-area">
            <z-main class="z-admin-main">
                <slot name="main">
                    <transition mode="out-in" name="fade">
                        <router-view></router-view>
                    </transition>
                </slot>
            </z-main>
        </slot>

        <!-- 页脚 -->
        <slot name="footer-area">
            <z-footer v-if="footerVisible" app
                :color="toolbarColor"
                :inset="!theme.menuDisplayMode"
                :dark="toolbarDark"
                class="z-admin-footer">
                <slot name="footer">
                    <span class="text-truncate caption">
                        Copyright © 2019-2020 {{projectDisplayName}} | Powered By ZPMC
                    </span>
                </slot>
            </z-footer>
        </slot>

        <!-- 皮肤组件 -->
        <z-admin-theme
            v-if="menusSize"
            v-model="showThemePanel"
            :miniMenu="theme.miniMenuMode" />

        <!-- 浮动主菜单 -->
        <z-admin-menu-float v-if="menusSize" :dense="theme.denseMode" />
    </div>
</template>

<script>
    import ZAdminLogo from './root/logo.vue';
    import ZAdminProfile from './root/profile.vue';
    import ZAdminTheme from './root/theme.vue';
    import ZAdminMenu from './root/menu.vue';
    import ZAdminMenuFloat from './root/menu-float.vue';

    export default {
        name: 'z-admin-home',
        components: {
            ZAdminLogo,
            ZAdminProfile,
            ZAdminTheme,
            ZAdminMenu,
            ZAdminMenuFloat
        },
        props: {
            toolbarDark: {
                type: Boolean,
                default: true
            },
            toolbarColor: {
                type: String,
                default: 'primary'
            },
            footerVisible: {
                type: Boolean,
                default: true
            },
            toolbarElevation: {
                type: String,
                default: '2'
            },
            projectName: {
                type: String,
                default: ''
            },
        },
        data() {
            return {
                /** @type {ThemeCustomOptions} */
                theme: this.$ui.getThemeOptions(),
                showThemePanel: false,
                menus: [],
                menusSize: 0,
                projectDisplayName: this.$props.projectName || this.$ui.appName || 'Admin Project Name',
            };
        },
        watch: {
            projectName(val) {
                this.projectDisplayName = val;
            },
        },
        computed: {},
        beforeCreate() {
        },
        created() {
            this.$ui.on('initMenus', (menus) => {
                this.menus = this.filterMenusData(menus || this.$ui.menus);
                this.menusSize = this.menus.length;
            });
        },
        mounted() {
            this.$ui.emit('menuViewComplete');
        },
        methods: {
            /**
             * 过滤菜单数据
             * @param list
             * @param parentPath
             */
            filterMenusData(list, parentPath = '/') {
                if (list && list.length > 0) {
                    return list.map(item => {
                        if (item.visible === false) {
                            return null;
                        }
                        const info = {
                            ...item,
                            title: item.title || item.name,
                        };

                        if (info.path && info.path.indexOf('/') !== 0) {
                            info.path = `${parentPath}/${info.path}`;
                        }
                        info.children = this.filterMenusData(item.children, info.path);
                        delete info.component;
                        return info;
                    }).filter(item => item !== null);
                }
                return [];
            },
            actionNavDrawer() {
                const theme = this.theme;
                if (theme.miniMenuMode) {
                    const miniMenuLayout = !theme.miniMenuLayout;
                    theme.miniMenuLayout = miniMenuLayout;
                    this.$ui.changeTheme({
                        miniMenuLayout: miniMenuLayout,
                    });
                } else {
                    const menuVisible = !theme.menuVisible;
                    theme.menuVisible = menuVisible
                    this.$ui.changeTheme({
                        menuVisible: menuVisible,
                    });
                }
            },
            onShowThemePanel() {
                this.showThemePanel = !this.showThemePanel;
            },
            actionProfile(item) {
                switch (item.key) {
                    case 'logout':
                        this.logout();
                        break;
                    default:
                        break;
                }
            },
            logout() {
                this.$emit('logout');
            },
        },
    };
</script>

<style lang="scss">
    .z-admin-application {
        .z-admin-navigation-drawer {
            .v-navigation-drawer__append {
                .v-list {
                    padding-bottom: 0;
                }
            }
        }

        .z-admin-main-wrap {
            min-height: 100%;

            .z-admin-main {
                min-height: 100%;
            }
        }

        .z-admin-footer {
            padding: 3px 12px;
        }

        &.v-application--is-ltr {
            .v-list-item__action:first-child,
            .v-list-item__icon:first-child {
                // ignore
            }

            .v-list--dense .v-list-group--sub-group .v-list-group__header {
                padding-left: 32px;
            }

            .v-list--dense .v-list-item .v-list-item__icon {
                justify-content: center;

                > .v-icon {
                    font-size: 20px;
                }
            }
        }
    }
</style>
