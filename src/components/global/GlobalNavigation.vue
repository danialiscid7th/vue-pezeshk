<template>
    <div>
        <div class="flex justify-start items-center h-12 gap-3">

            <router-link class="flex justify-start items-center flex-grow relative gap-5" :to="{ name: route }">
                <img src="@/assets/svg/logo-sm.svg">
                <p class=" text-[24px] font-semibold text-center ">
                    {{ title }}
                </p>
            </router-link>
            <div class="flex justify-end items-center flex-grow-0 flex-shrink-0 gap-4">
                <div
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 rounded-xl bg-primary/10">
                    <img src="@/assets/svg/notification.svg">
                </div>
                <div
                    class="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 p-2.5 rounded-xl bg-primary/10">
                    <img src="@/assets/svg/favorites.svg">
                </div>
            </div>
        </div>
    </div>
</template>


<script >
export default {
    props: {
        title: {
            type: String,
            default: 'Avicenna menu'
        },
        route: {
            type: String,
            default: ''
        }
    }
}
</script>
