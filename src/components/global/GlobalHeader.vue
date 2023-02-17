<template>
    <header v-if="instance == 'basic'" class="header-basic">
        <GlobalNavigation :route="route" :title="title"></GlobalNavigation>
        <GlobalSearch></GlobalSearch>
    </header>

    <!-- support slot -->
    <header v-if="instance == 'back'" class="header-back">
        <GlobalNavigationBack :title="title">
            <slot></slot>
        </GlobalNavigationBack>
    </header>



    <header v-if="instance == 'logo'" class="header-logo">
        <GlobalNavigationLogo :title="title">
            <slot></slot>
        </GlobalNavigationLogo>
    </header>
</template>
<script>
export default {
    props: {
        instance: {
            type: String,
            default: 'basic',
        },
        title: {
            type: String,
            default: 'fill-me-please'
        },
        route: {
            type: String,
            default: ''
        }
    },

}
</script>
<style scoped>
.header-basic {
    @apply flex flex-col gap-6;
}
</style>