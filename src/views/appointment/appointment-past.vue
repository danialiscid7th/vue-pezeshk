
<template>
    <main class="main">
        <!-- header -->
        <div class="header">
            <GlobalHeader instance="back" title="My Appointments">
                <a href="#" class="header__icon">
                    <img src="@assets/svg/search.svg" alt="">
                </a>
            </GlobalHeader>
        </div>
        <!-- appointments    -->
        <AppointmentHeader active="past"></AppointmentHeader>

        <article>
            <!-- list -->
            <section class="list">
                <section class='list__section'>
                    <title>
                        Yesterday, March 25 2022
                    </title>
                    <GlobalDoctor icon="phone" action="phone"></GlobalDoctor>
                    <GlobalDoctor icon="video" action="video"></GlobalDoctor>
                </section>
                <section class='list__section'>
                    <title>
                        Monday, March 24 2022
                    </title>
                    <GlobalDoctor icon="message" action="message"></GlobalDoctor>
                    <GlobalDoctor icon="message" action="like"></GlobalDoctor>
                    <GlobalDoctor icon="message" action="like-filled"></GlobalDoctor>
                </section>

            </section>
        </article>
    </main>
    <GlobalMenu active="appointment"></GlobalMenu>
</template>
<style lang="scss" scoped>
.swiper-slide {
    width: max-content;
    display: flex;
}

.list {
    @apply flex flex-col gap-6;

    &__section {
        @apply flex flex-col gap-2;

        title {
            @apply block text-neutral-1;
        }
    }
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
import "swiper/css";

export default {
    data() {
        return {
            links:
                ['Brain', 'Cardio', 'Eye', 'Dentist', 'Nerve'],
        }
    },
    components: {
    },

};
</script>


