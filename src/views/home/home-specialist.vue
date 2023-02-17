<template>
    <main class="main">
        <!-- header -->
        <GlobalHeader title="Specialist Doctor" instance="back"></GlobalHeader>
        <!-- article -->
        <article class="article">
            <div class="specialist">
                <router-link :to="{ name: 'doctor-top-list' }" class="specialist__item bg-red-gradient" v-for="i in 6"
                    :key="i">
                    <div class="specialist__item__icon">
                        <img src="@assets/svg/heart.svg" alt="">
                    </div>
                    <div class="specialist__item__title">Cardio Specialist</div>
                    <div class="specialist__item__subtitle"> 252 Doctors</div>
                </router-link>
            </div>
        </article>
        <!-- menu -->
        <GlobalMenu active="home"></GlobalMenu>
    </main>
</template>
<style lang="scss" scoped>
.article {
    @apply py-6
}

.specialist {
    @apply grid grid-cols-2 gap-4;

    &__item {
        @apply text-white flex gap-2 py-6 px-8 rounded-xl flex-col items-center justify-center;

        &__icon {
            @apply py-2;
        }

        &__title {
            @apply font-semibold;
        }

        &__subtitle {
            @apply text-sm font-light;
        }
    }
}

.bg-red-gradient {
    background: linear-gradient(315deg, rgba(255, 24, 67, 0.9) -0.12%, rgba(255, 94, 124, 0.9) 99.88%);
}
</style>