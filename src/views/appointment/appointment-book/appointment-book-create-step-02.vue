<template>
    <main>
        <GlobalHeader title="Dr. Jenny Wilson" instance="back">
            <!-- empty slot -->
        </GlobalHeader>
        <article class="artice">
            <div class="make_appointment">
                <div class="make_appointment__title">Make Appointment</div>
                <div class="make_appointment__swiper">
                    <swiper :slides-per-view="'auto'" :space-between="12" @swiper="onSwiper" @slideChange="onSlideChange">
                        <swiper-slide class="flex !w-max">
                            <div class="make_appointment__swiper__item active">
                                <div class="make_appointment__swiper__item__week">Mon</div>
                                <div class="make_appointment__swiper__item__day">12</div>
                            </div>
                        </swiper-slide>
                        <swiper-slide v-for="i in 8" class="flex !w-max">
                            <div class="make_appointment__swiper__item ">
                                <div class="make_appointment__swiper__item__week">Mon</div>
                                <div class="make_appointment__swiper__item__day">{{ i + 12 }}</div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
            <div class="clock">
                <div class="clock__title">Choose the Hour</div>
                <div class="clock__times">
                    <div class="clock__times__item">
                        <FormButton rounded primary_outline>11:00</FormButton>
                    </div>

                    <div class="clock__times__item" v-for='i in 5'>
                        <FormButton rounded primary_outline_deactive>12:{{ i * 10 }}</FormButton>
                    </div>

                    <div class="clock__times__item">
                        <FormButton rounded primary>13:30</FormButton>
                    </div>
                    <div class="clock__times__item" v-for="i in 5">
                        <FormButton rounded primary_outline>13:{{ i * 10 }}</FormButton>
                    </div>
                    <div class="clock__times__item" v-for="i in 3">
                        <FormButton rounded primary_outline>14:{{ i * 10 }}</FormButton>
                    </div>
                </div>
            </div>
            <div class="buttons mt-auto ">
                <router-link :to="{ name: 'appointment-book-create-step-03' }">
                    <FormButton primary lg rounded>Reserve</FormButton>
                </router-link>
            </div>
        </article>
    </main>
</template>
<style lang="scss" scoped>
.artice {
    @apply flex-col h-full flex grow gap-6 py-8;
}



.make_appointment {
    &__title {
        @apply font-semibold;
    }

    &__swiper {
        @apply py-2;

        &__item {
            @apply flex flex-col justify-center h-24 items-center text-primary border border-primary w-[60px] relative px-3 py-4 rounded-xl;

            &.active {
                @apply bg-primary text-white;
            }

            &__week {
                @apply text-sm;
            }

            &__day {
                @apply font-semibold text-2xl;
            }
        }
    }
}

.clock {
    @apply flex flex-col gap-2;

    &__title {
        @apply font-semibold;
    }

    &__times {
        @apply grid grid-cols-3 gap-x-3 gap-y-2;

        &__item {
            @apply col-span-1;
        }
    }
}
</style>
<script >
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
};
</script>