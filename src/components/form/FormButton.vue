<!-- eslint-disable vue/require-prop-type-constructor -->
<!-- primary && 'bg-red-200' mean if primary was true write bg-red-200 -->
<template>
    <div v-bind:class="[
        rounded ? 'rounded-full' : 'rounded',
        primary && 'bg-primary text-white border-primary',
        secondary && 'bg-secondary text-white border-secondary',
        primary_outline && 'bg-white text-primary border-primary',
        primary_outline_deactive && 'bg-white text-primary/50 border-primary/50',
        secondary_outline && 'bg-white text-secondary border-secondary',
        lg && ' py-4 text-lg',
        md && '  py-2.5 text-base',
        sm && '  py-2  text-sm',
    ]"
        class="cursor-pointer px-5 flex text-lg font-semibold  border-2  flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2  ">
        {{ $slots.default ? $slots.default()[0].children : "" }}
    </div>
</template>
<script>
export default {
    props: {
        rounded: {
            type: Boolean,
            default: false
        },
        primary: {
            type: Boolean,
            default: false
        },
        secondary: {
            type: Boolean,
            default: false
        },
        primary_outline: {
            type: Boolean,
            default: false
        },
        primary_outline_deactive: {
            type: Boolean,
            default: false
        },
        secondary_outline: {
            type: Boolean,
            default: false
        },
        lg: {
            type: Boolean,
            default: false
        },
        md: {
            type: Boolean,
            default: true // default
        },
        sm: {
            type: Boolean,
            default: false
        }
    }
}
</script>