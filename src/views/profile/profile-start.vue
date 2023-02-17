
<template>
    <main>
        <header class="header">
            <GlobalHeader instance="logo" title="Profile">
                <div class="header__icon">
                    <font-awesome-icon color="#2972fe" icon="fa-solid fa-edit" />
                </div>
            </GlobalHeader>
        </header>
        <article class="article">
            <div class="user">
                <div class="user__image">
                    <img src="@assets/img/doctor.png">
                </div>
                <div class="user__detail">
                    <div class="user__detail__title">Adam Smith</div>
                    <div class="user__detail__email">adam.smith@yourdomain.com</div>
                    <div class="user__detail__country">Indonesia</div>
                </div>
            </div>
            <div class="links">
                <div class="links__item" v-for="i in links">
                    <div class="links__item__icon">
                        <font-awesome-icon color="#2972fe" icon="fa-solid fa-edit" />
                    </div>
                    <div class="links__item__title">{{ i.title }}</div>
                    <div class="links__item__arrow">
                        <font-awesome-icon color="#2972fe" icon="fa-solid fa-arrow-right" />
                    </div>
                </div>
                <div class="links__item logout" @click="logout()">
                    <div class="links__item__icon ">
                        <font-awesome-icon color="#2972fe" icon="fa-solid fa-edit" />
                    </div>
                    <div class="links__item__title">logout</div>
                    <div class="links__item__arrow">
                        <font-awesome-icon color="#2972fe" icon="fa-solid fa-arrow-right" />
                    </div>
                </div>
            </div>
        </article>
        <global-menu active="profile"></global-menu>
    </main>
</template>


<style lang="scss" scoped>
.article {
    @apply py-6 flex flex-col gap-6;
}

.header {
    &__icon {
        @apply w-11 h-11 rounded-xl flex items-center justify-center bg-primary/10;
    }
}

.user {
    @apply flex items-center gap-4;

    &__image img {
        @apply rounded-full w-24 h-24;
    }

    &__detail {
        @apply flex flex-col gap-1;

        &__title {
            @apply font-bold text-lg;
        }

        &__email {
            @apply text-neutral-3;
        }

        &__country {
            @apply text-neutral-3;
        }
    }
}

.links {
    &__item {
        @apply flex items-center border-t border-neutral-1/10 py-6 gap-4;

        &__icon {
            @apply w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10;
        }

        &__title {
            @apply font-semibold;
        }

        &__arrow {
            @apply ml-auto;

        }


    }
}
</style>


<script >
import router from '../../router/router';
export default {
    data() {
        return {
            links: [
                {

                    "title": "Notification",
                    "icon": "fa-solid fa-edit",

                },
                {

                    "title": "Security",
                    "icon": "fa-solid fa-edit",

                },

                {

                    "title": "Invite friends",
                    "icon": "fa-solid fa-edit",

                },
                {

                    "title": "Help",
                    "icon": "fa-solid fa-edit",

                },

            ]

        }
    },
    methods: {
        logout() {
            //remove all cookies 
            document.cookie.split(';').forEach(function (c) {
                document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
            });
            //remove all localstorage 
            localStorage.clear();
            console.log(
                router.push({ name: 'auth-login' })
            );
        }
    },
}
</script>