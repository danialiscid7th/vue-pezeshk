<template>
    <main>
        <div class="header ">
            <div class="header__icon">icon</div>
            <div class="header__title ">
                <div class="header__title__text">hello</div>
                <div class="header__title__derscibe">this is describe</div>
            </div>
        </div>
        <article class="article">
            <div class="items">
                <div class="items__item">
                    <div class="items__item__icon ">icon</div>
                    <div class="items__item__title ">
                        Lorem, ipsum dolor sit amet
                    </div>
                </div>
            </div>
        </article>
    </main>
</template>


<style lang="scss" scoped>
.header {
    @apply flex justify-between items-center;

    &__icon {
        @apply block rounded-3xl px-3 py-8;
    }

    &_title {
        @apply block rounded-3xl;

        &__text {
            @apply font-semibold;
        }

        &__derscibe {
            @apply text-sm;
        }
    }
}

.article {
    @apply flex flex-col items-center justify-center;
}

.items {
    &__item {
        &__icon {
            @apply block rounded-3xl px-3 py-8;
        }

        &__title {
            @apply block rounded-3xl;
        }
    }
}
</style>