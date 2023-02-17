<template>
    <div>
        <div class="flex justify-start items-center h-12 gap-3">
            <div class="flex justify-start items-center flex-grow relative gap-5">
                <img src="@/assets/svg/logo-sm.svg">
                <p class=" text-[24px] font-semibold text-center ">
                    {{ title }}
                </p>
            </div>
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Avicenna menu'
        }
    }
}
</script>
