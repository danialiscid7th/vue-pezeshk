<!-- eslint-disable vue/require-prop-type-constructor -->



<template>
    <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2 rounded-sm">
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-6">
            <p class="flex-grow-0 flex-shrink-0 text-neutral-1 text-base font-semibold text-left">
                {{ label }}
            </p>
            <p class="flex-grow-0 px-1 flex-shrink-0 opacity-80 text-sm font-semibold text-left text-[#da1414]">
                {{ required ? '*' : '' }}
            </p>
        </div>
        <div class="relative w-full ">
            <div class="absolute my-auto right-4 text-neutral-5 text-[20px] top-0 block h-max  bottom-2 z-20">
                <font-awesome-icon icon="fa-solid fa-sort-down" />
            </div>
            <select ref="inputValue" :class="[
                status == 'warning' ? '!border-warning text-warning' : '',
                status == 'error' ? '!border-error text-error' : '',
                status == 'success' ? '!border-success text-success' : '',
            ]" :placeholder="placeholder"
                class="flex  justify-start placeholder:opacity-50 w-full text-base text-left gap-1 items-start self-stretch flex-grow-0 flex-shrink-0 relative px-6 py-3 rounded-[100px] bg-white border border-[#ebeef2]">
                <slot></slot>
            </select>
        </div>
        <div>
            <p class="px-6 self-stretch flex-grow-0 flex-shrink-0 opacity-60 text-sm text-left">
                {{ description }}
            </p>
        </div>
</div>
</template>
<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        required: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        description: {
            type: String,
        },
        status: {
            type: String,
        },
    },
    data() {
        return {
            InputValue: this.value || '',
            status: this.status || '',
        }
    },


}
</script>
