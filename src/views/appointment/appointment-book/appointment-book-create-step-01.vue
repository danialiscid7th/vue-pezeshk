<template>
    <main>
        <GlobalHeader title="Dr. Jenny Wilson" instance="back">
            <div class="flex gap-2 items-center">
                <div class="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <font-awesome-icon color="#2972fe" icon="fa-solid  fa-heart" />
                </div>
                <div class="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <font-awesome-icon color="#2972fe" icon="fa-solid fa-share-nodes" />
                </div>
            </div>
        </GlobalHeader>
        <article class="artice">
            <GlobalDoctor></GlobalDoctor>
            <AppointmentInformation></AppointmentInformation>
            <div class="describe">
                <div class="describe__title">About Doctor</div>
                <div class="describe__content">
                    Dr. Jenny Wilson is the top most Cardiologist specialist in Nanyang Hospital at London. She achived
                    several awards for her wonderful contribution in medical field. She is available for private
                    consultation.
                </div>
            </div>
            <div class="describe">
                <div class="describe__title">Working Time</div>
                <div class="describe__content">
                    Mon - Fri, 09.00 AM - 20.00 PM
                </div>
            </div>

            <div class="type">
                <title class="type__title">Fee information</title>
                <div class="type__items">
                    <div class="type__items__item">
                        <div class="type__items__item__icon">
                            <font-awesome-icon icon="fa-solid fa-comment-dots" color="#2972fe" />
                        </div>
                        <div class="type__items__item__text">
                            <div class="type__items__item__text__title">
                                Messaging
                            </div>
                            <div class="type__items__item__text__describe">
                                Can messaging with doctor
                            </div>
                        </div>
                        <div class="type__items__item__price">
                            $5
                        </div>
                    </div>
                    <div class="type__items__item">
                        <div class="type__items__item__icon">
                            <font-awesome-icon icon="fa-solid fa-comment-dots" color="#2972fe" />
                        </div>
                        <div class="type__items__item__text">
                            <div class="type__items__item__text__title">
                                Voice Call
                            </div>
                            <div class="type__items__item__text__describe">
                                Can make a voice call with doctor
                            </div>
                        </div>
                        <div class="type__items__item__price">
                            $10
                        </div>
                    </div>
                    <div class="type__items__item active">
                        <div class="type__items__item__icon">
                            <font-awesome-icon icon="fa-solid fa-comment-dots" color="#2972fe" />
                        </div>
                        <div class="type__items__item__text">
                            <div class="type__items__item__text__title">
                                Video Call
                            </div>
                            <div class="type__items__item__text__describe">
                                Can make a video call with doctor
                            </div>
                        </div>
                        <div class="type__items__item__price">
                            $20
                        </div>
                    </div>
                </div>
            </div>

            <div class="buttons mt-auto">
                <router-link :to="{ name: 'appointment-book-create-step-02' }">
                    <FormButton primary lg rounded>Book Appointment</FormButton>
                </router-link>
            </div>


        </article>
    </main>
</template>
<style lang="scss" scoped>
.artice {
    @apply flex flex-col gap-6 pt-4;
}

.type {
    @apply flex flex-col gap-2;

    &__title {
        @apply block text-sm font-semibold;
    }

    &__items {
        @apply flex flex-col gap-2;

        &__item {

            @apply flex items-center gap-4 rounded-2xl border border-neutral-1/10 px-4 py-5;

            &__icon {
                @apply flex rounded-full items-center justify-center bg-primary/10 h-14 w-14;
            }

            &__text {
                &__title {
                    @apply font-semibold;
                }

            }

            &__price {
                @apply text-xl text-primary font-semibold ml-auto;
            }


        }

    }
}

.describe {
    &__title {
        @apply font-semibold;
    }

    &__content {
        @apply text-sm;
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