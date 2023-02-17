



<template>
    <main class="main">

        <!-- header -->

        <GlobalHeader route="home" title="Avicenna"></GlobalHeader>
        <article class="article">
            <!-- specialists -->

            <router-link :to="{ name: 'specialist' }" class="section-swiper specialist">
                <header class="section-swiper__header">
                    <div class="section-swiper__header__title">
                        Specialist Doctor
                    </div>
                    <div class="section-swiper__header__action">See all</div>
                </header>
                <div class="section-swiper__swiper-basic">
                    <swiper :slides-per-view="3" :space-between="18" @swiper="onSwiper" @slideChange="onSlideChange">
                        <swiper-slide v-for="i in specialist" :key="i">
                            <div class="section-swiper__swiper-basic__slide bg-red-gradient">
                                <img class="section-swiper__swiper-basic__slide__image" src="@assets/svg/heart.svg" alt="">
                                <div class="section-swiper__swiper-basic__slide__title">
                                    Cardio Specialist
                                </div>
                                <div class="section-swiper__swiper-basic__slide__subtitle">
                                    252 Doctors
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </router-link>

            <!-- doctors -->
            <router-link :to="{name:'doctor-top-list'}" class="section-swiper  specialist">
                <header class="section-swiper__header">
                    <div class="section-swiper__header__title">
                        Top Doctor
                    </div>
                    <div class="section-swiper__header__action">See all</div>
                </header>
                <div class="section-swiper__swiper-person ">
                    <swiper :slides-per-view="2" :space-between="18" @swiper="onSwiper" @slideChange="onSlideChange">
                        <swiper-slide v-for="i in specialist" :key="i">
                            <div class="section-swiper__swiper-person__slide">
                                <img class="section-swiper__swiper-person__slide__image" src="@assets/img/doctor.png"
                                    alt="">
                                <div class="section-swiper__swiper-person__slide__title">
                                    Dr. Jenny Wilson
                                </div>
                                <div class="section-swiper__swiper-person__slide__subtitle">
                                    Dental Specialist
                                </div>
                            </div>
                        </swiper-slide>

                    </swiper>
                </div>
            </router-link>
        </article>
        <!-- menu -->
        <GlobalMenu active="home"></GlobalMenu>
    </main>
</template>
<style lang="scss" scoped>
//background-colors

.bg-red-gradient {
    background: linear-gradient(315deg, rgba(255, 24, 67, 0.9) 0%, rgba(255, 94, 124, 0.9) 100%);
}


.article {
    @apply flex flex-col gap-6 py-10;
}

.section-swiper {

    &__header {
        @apply flex justify-between items-center;

        &__title {
            @apply text-neutral-1 font-semibold text-xl;
        }

        &__action {
            @apply text-primary font-medium;
        }
    }

    //swiper basic
    &__swiper-basic {
        @apply py-4;

        &__slide {
            @apply text-white rounded-lg flex flex-col gap-4 text-center py-6 justify-between items-center;

            &__title {
                @apply text-base px-6;
            }

            &__subtitle {
                @apply text-sm font-light;
            }
        }
    }


    //swiper person
    &__swiper-person {
        @apply py-4;

        &__slide {
            @apply rounded-xl flex flex-col text-center justify-between items-center;

            &__image {
                @apply rounded-t-xl w-full object-cover aspect-square max-h-80;
            }

            &__title {
                @apply w-full border-r border-l font-semibold pt-4 pb-0.5;
            }

            &__subtitle {
                @apply w-full border-r border-l border-b rounded-b-xl text-sm pb-4 pt-0.5;
            }
        }
    }
}
</style>
<!-- eslint-disable vue/no-unused-components -->
<script >
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import GlobalMenu from '../../components/global/GlobalMenu.vue';
export default {
    data() {
        return {
            specialist: [
                ['heart.svg', 'Cardio Specialist', '252 Doctors'],
                ['heart.svg', 'Cardio Specialist', '252 Doctors'],
                ['heart.svg', 'Cardio Specialist', '252 Doctors'],
                ['heart.svg', 'Cardio Specialist', '252 Doctors'],
            ]
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        GlobalMenu
    },
    setup() {
        const onSwiper = () => {
        };
        const onSlideChange = () => {
        };
        return {
            onSwiper,
            onSlideChange,
        };
    },
};
</script>