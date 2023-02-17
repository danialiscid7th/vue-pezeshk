
<script>

import axios from 'axios'
import { useCookies } from "vue3-cookies";
import router from '../../router/router';
export default {

    methods: {
        async login() {

            axios.post(import.meta.env.VITE_HOST + '/api/login', {
                email: this.$refs.email.InputValue,
                password: this.$refs.password.InputValue,
            })
                .then(function (response) {
                    if (response.data.success === true) {
                        // successful login
                        localStorage.setItem("api_token", response.data.api_token);
                        router.push({ name: 'home' })
                    } else {
                        console.log(response.data.message);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                    //refresh or something
                });

        },
        async checkme() {
            axios.defaults.headers.common["Authorization"] = `${localStorage.getItem("api_token")}`;
            axios.post(import.meta.env.VITE_HOST + '/api/checkme')
                .then(function (response) {
                    if (response.data.success === true) {
                        console.log(response.data.message);
                    } else {
                        console.log(response.data.message);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                    //refresh or some
                });
            console.log(
                localStorage.getItem("api_token")
            );
        },
        async logout() {




            axios.post(import.meta.env.VITE_HOST + '/api/logout')
                .then(response => {
                    if (response.data.success === true) {
                        //FIXME: maybe danger too remove all localstorage items

                        //remove all cookies 
                        document.cookie.split(';').forEach(function (c) {
                            document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
                        });
                        //remove all localstorage 
                        localStorage.clear();


                        console.log(response.data.message);
                    } else {
                        console.log(response.data.message);
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        },

    },

    mounted() {


    },
}

</script>
<template>
    <main class="main">

        <debug>
            <div v-if="false" class="flex gap-1">
                <button @click="checkme" class="bg-blue-200">check-me</button>
                <button @click="logout" class="bg-blue-200">logout</button>
            </div>
        </debug>

        <div class="logo">
            <img src="@assets/img/logo-lg.png">
        </div>
        <div class="form">
            <div class="form__title">Sign in to your account</div>
            <div class="form__fields">
                <FormInput value="subdanial@gmail.com" ref="email" description="You can login with phone or email"
                    label="Login" placeholder="Phone / Email">
                </FormInput>

                <FormInput value="password" ref="password" description="You can login with phone or email" label="password"
                    placeholder="Phone / Email">
                </FormInput>
            </div>
            <div class="form__buttons">
                <FormButton @click="login()" rounded primary>Sign in</FormButton>
            </div>
            <div class="form__register">
                <router-link to="/auth/register">
                    <div> Not registred yet ?</div>
                </router-link>
            </div>
        </div>
        <footer class="footer">
            <div class="footer__copyright">
                Copyright © 2022 - 2023
            </div>
        </footer>
    </main>
</template>







<style lang="scss" scoped>
.main {
    @apply flex flex-col justify-around;

}

.logo img {
    @apply mx-auto px-6;
}

.form {
    &__title {
        @apply text-center font-medium;
    }

    &__fields {
        @apply py-12;
    }

    &__register {
        @apply text-primary text-center font-medium py-4;
    }
}

.footer {
    &__copyright {
        @apply text-center text-sm;
    }
}
</style>