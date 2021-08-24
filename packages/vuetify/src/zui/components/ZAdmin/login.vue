<template>
    <z-container class="z-admin-login">
        <z-row class="z-admin-login-body" align="center" justify="center">
            <z-card elevation="5" width="300" style="margin-top: -10vh;">
                <z-card-title class="headline">
                    <slot name="title">
                        {{projectDisplayName}}
                    </slot>
                </z-card-title>
                <z-card-subtitle>
                    <slot name="subtitle">
                    </slot>
                </z-card-subtitle>
                <z-card-text>
                    <z-form ref="loginForm" lazy-validation>
                        <z-row no-gutters>
                            <b style="line-height: 30px;">Username</b>
                        </z-row>
                        <z-row no-gutters>
                            <z-text-field v-model="username" autofocus
                                class="z-admin-login-input"
                                required outlined l persistent-hint :hide-details="false"
                                :rules="usernameRules"
                                @keyup.enter="login">
                            </z-text-field>
                        </z-row>
                        <z-row no-gutters>
                            <b style="line-height: 30px;">Password</b>
                        </z-row>
                        <z-row no-gutters>
                            <z-text-field v-model="password"
                                class="z-admin-login-input"
                                required outlined l persistent-hint :hide-details="false"
                                :rules="passwordRules"
                                :append-icon="loginPd ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="loginPd ? 'password' : 'text'"
                                @click:append="loginPd = !loginPd"
                                @keyup.enter="login">
                            </z-text-field>
                        </z-row>
                        <z-row no-gutters>
                            <z-checkbox v-model="remember" dense label="Remember me"></z-checkbox>
                        </z-row>
                    </z-form>
                </z-card-text>
                <z-card-actions class="pa-4">
                    <z-row justify="end" no-gutters>
                        <z-btn color="primary" m
                            :disabled="disabled"
                            @click.stop="login">
                            Sign in
                        </z-btn>
                    </z-row>
                </z-card-actions>
            </z-card>
        </z-row>
    </z-container>
</template>

<script>
    export default {
        name: 'z-admin-login',
        data() {
            return {
                projectDisplayName: this.$ui.appName || 'Admin Project Name',
                username: '',
                usernameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length >= 4 && v.length <= 20) || '用户名至少4个字符，最多20个字符',
                ],
                password: '',
                passwordRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length >= 4 && v.length <= 20) || '密码至少4个字符，最多20个字符',
                ],
                remember: false,
                loginPd: true,
                loginError: false,
                disabled: false,
                errorShake: false,
                errorMessage: "",
            }
        },
        methods: {
            login() {
                if (this.$refs.loginForm.validate()) {
                    this.disabled = true;
                    const {auth} = this.$ui;
                    if (auth && auth.login) {
                        auth.login({
                            username: this.username,
                            password: this.password,
                            remember: this.remember
                        }).then((res) => {
                            if (auth.verifyLogin && auth.verifyLogin(res)) {
                                console.info('login success', res);
                            } else {
                                this.disabled = false;
                            }
                        }).catch(e => {
                            console.info('login failed', e);
                            this.disabled = false;
                        })
                    } else {
                        this.$router.replace({path: '/'});
                    }
                }
            },
        },
        mounted() {
        },
        destroyed() {
        }
    }
</script>

<style lang="scss">
    .z-admin-login {
        height: 100%;

        .z-admin-login-body {
            height: 100%;
        }

        .z-admin-login-input {
            .v-text-field__details {
                margin-bottom: 0;
                padding: 0;
            }
        }
    }
</style>
