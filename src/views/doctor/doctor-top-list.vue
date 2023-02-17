

<template>
    <main class="main">
        <!-- header -->
        <div class="header">
            <GlobalHeader instance="back" title="Top Doctor">
                <a href="#" class="header__icon">
                    <img src="@assets/svg/search.svg" alt="">
                </a>
            </GlobalHeader>
        </div>
        <!-- tags -->
        <section class="tags">
            <swiper :slidesPerView="'auto'" :spaceBetween="8">
                <swiper-slide>
                    <div class="tags__slide active">
                        All
                    </div>
                </swiper-slide>
                <swiper-slide v-for="i in links" :key="i">
                    <div class="tags__slide">
                        {{ i }}
                    </div>
                </swiper-slide>
            </swiper>
        </section>
        <article>
            <!-- list -->
            <section class="list">
                <GlobalDoctor v-for="i in 1" :key="i" icon="phone" action="phone"></GlobalDoctor>
                <GlobalDoctor v-for="i in 1" :key="i" icon="video" action="video"></GlobalDoctor>
                <GlobalDoctor v-for="i in 1" :key="i" icon="message" action="message"></GlobalDoctor>
                <GlobalDoctor v-for="i in 1" :key="i" icon="message" action="like"></GlobalDoctor>
                <GlobalDoctor v-for="i in 1" :key="i" icon="message" action="like-filled"></GlobalDoctor>
            </section>
        </article>
    </main>
    <GlobalMenu active="home"></GlobalMenu>
</template>
<style lang="scss" scoped>
.swiper-slide {
    width: max-content;
    display: flex;
}

.list {
    @apply flex flex-col gap-2;
}

.header {
    &__icon {
        @apply p-3 block rounded bg-primary/10;
    }
}


.tags {
    @apply py-6;

    &__slide {
        @apply px-4 py-1.5 rounded-full text-center border-2 border-primary bg-white text-primary;

        &.active {
            @apply text-white bg-primary;
        }
    }


}
</style>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import GlobalMenu from "../../components/global/GlobalMenu.vue";

export default {
    data() {
        return {
            links:
                ['Brain', 'Cardio', 'Eye', 'Dentist', 'Nerve'],
        }
    },
    components: {
        Swiper,
        SwiperSlide,
        GlobalMenu
    },

};
</script>


