<template>
    <z-bottom-sheet v-model="visible"
        hide-overlay>
        <z-sheet class="text-center" height="300">
            <z-card elevation="0" class="z-admin-theme-card">
                <z-card-title>
                    <z-list-item>
                        <z-list-item-avatar color="primary"></z-list-item-avatar>
                        <z-list-item-content>
                            <z-list-item-title class="headline">主题设置</z-list-item-title>
                        </z-list-item-content>
                        <z-list-item-action>
                            <z-btn icon @click="visible = !visible">
                                <z-icon>mdi-close</z-icon>
                            </z-btn>
                        </z-list-item-action>
                    </z-list-item>
                    <z-row no-gutters>
                        <z-col cols="auto">
                        </z-col>
                        <z-spacer></z-spacer>
                        <z-col cols="auto">
                        </z-col>
                    </z-row>
                </z-card-title>
                <z-divider></z-divider>
                <z-card-text>
                    <z-row no-gutters justify="start">
                        <z-col cols="3">
                            <z-color-picker v-model="primaryColor"
                                class="ma-2" canvas-height="100"
                                hide-inputs></z-color-picker>
                        </z-col>
                        <z-col>
                            <z-switch v-model="darkStatus"
                                class="ml-6 mb-2"
                                label="切换暗色主题"
                                @change="changeDark">
                            </z-switch>
                            <z-switch v-model="denseMode"
                                class="ml-6 mb-2"
                                label="切换紧凑模式"
                                @change="changeDenseMode">
                            </z-switch>
                        </z-col>
                        <z-col>
                            <z-slider v-model="menuWidth"
                                class="mt-6"
                                inverse-label
                                label="菜单宽度"
                                min="200" max="350"
                                thumb-color="red"
                                thumb-label="always" />
                            <z-switch v-model="miniMenuMode"
                                class="mb-2 ml-2"
                                label="切换主菜单迷你模式"
                                @change="changeMiniMenu">
                            </z-switch>
                            <z-switch v-model="menuDisplayMode"
                                class="mb-2 ml-2"
                                label="切换主菜单显示位置"
                                @change="changeMenuDisplayMode">
                            </z-switch>
                            <z-switch v-model="menuExpandMode"
                                class="mb-2 ml-2"
                                label="切换主菜单展开模式"
                                @change="changeMenuExpandMode">
                            </z-switch>
                        </z-col>
                        <z-col>
                        </z-col>
                    </z-row>
                </z-card-text>
                <z-card-actions>
                </z-card-actions>
            </z-card>
        </z-sheet>
    </z-bottom-sheet>
</template>

<script>
    export default {
        name: 'z-admin-theme',
        props: {
            value: {
                type: Boolean,
                default: false
            },
            miniMenu: {
                type: Boolean,
                default: true
            }
        },
        data() {
            const theme = this.$ui.getThemeOptions();
            return {
                visible: this.$props.value,
                primaryColor: this.$ui.getPrimaryColor(),
                darkStatus: theme.darkStatus,
                denseMode: theme.denseMode,
                miniMenuMode: theme.miniMenuMode,
                menuDisplayMode: theme.menuDisplayMode,
                menuExpandMode: theme.menuExpandMode,
                menuWidth: theme.menuWidth
            };
        },
        watch: {
            value() {
                this.visible = !this.visible;
            },
            primaryColor(val) {
                this.changePrimaryColor(val);
            },
            menuWidth(val) {
                this.changeMenuWidth(val);
            },
            miniMenu(val) {
                this.miniMenuMode = val;
            }
        },
        computed: {
        },
        methods: {
            changeDark(val) {
                this.$ui.changeDark(val);
                this.primaryColor = this.$ui.getPrimaryColor();
            },
            changePrimaryColor(val) {
                this.$ui.changePrimaryColor(val);
            },
            changeDenseMode(val) {
                this.$ui.changeTheme({
                    denseMode: val
                });
            },
            changeMiniMenu(val) {
                const theme = this.$ui.getThemeOptions();
                this.$ui.changeTheme({
                    miniMenuMode: val,
                    miniMenuLayout: !val ? false : theme.miniMenuLayout
                });
            },
            changeMenuDisplayMode(val) {
                this.$ui.changeTheme({
                    menuDisplayMode: val
                });
            },
            changeMenuExpandMode(val) {
                this.$ui.changeTheme({
                    menuExpandMode: val
                });
            },
            changeMenuWidth(val) {
                this.$ui.changeTheme({
                    menuWidth: val
                });
            }
        }
    };
</script>

<style lang="scss">
    .z-admin-theme-card {
        .v-card__title {
            padding: 3px 16px;
        }
    }
</style>
