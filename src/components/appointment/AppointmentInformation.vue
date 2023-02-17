<template>
    <div class="information px-11">
        <div class="information__item">
            <div class="information__item__icon">
                <font-awesome-icon color="#2972fe" icon="fa-solid fa-users" />
            </div>
            <div class="information__item__number ">
                5000+
            </div>
            <div class="information__item__describe">
                Patients
            </div>
        </div>
        <div class="information__item">
            <div class="information__item__icon">
                <font-awesome-icon color="#2972fe" icon="fa-solid fa-user" />
            </div>
            <div class="information__item__number ">
                15+
            </div>
            <div class="information__item__describe">
                Years experiences
            </div>
        </div>
        <div class="information__item">
            <div class="information__item__icon">
                <font-awesome-icon color="#2972fe" icon="fa-solid fa-comment-dots" />
            </div>
            <div class="information__item__number ">
                3800+
            </div>
            <div class="information__item__describe">
                Reviews
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.information {
    @apply flex items-center justify-between rounded-[20px] border border-primary;

    &__item {
        @apply p-2 flex flex-col py-4 justify-center items-center gap-2;

        &__icon {
            @apply rounded-full bg-primary/10 w-11 h-11 flex items-center justify-center;
        }

        &__number {
            @apply font-semibold text-center text-primary;
        }

        &__describe {
            @apply text-sm;
        }

    }

}
</style>