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

        <input :class="[
            status == 'warning' ? '!border-warning text-warning' : '',
            status == 'error' ? '!border-error text-error' : '',
            status == 'success' ? '!border-success text-success' : '',
        ]" :id="id" v-model="InputValue" :type="type" :placeholder="placeholder"
            class="flex  justify-start placeholder:opacity-50 w-full text-base text-left gap-1 items-start self-stretch flex-grow-0 flex-shrink-0 relative px-6 py-3 rounded-[100px] bg-white border border-[#ebeef2]">

        <div>
            <p class="px-6 self-stretch flex-grow-0 flex-shrink-0 opacity-60 text-sm text-left">
                {{ description }}
            </p>
        </div>

        <div v-if="error"
            class="mx-auto block text-center rounded-full w-[280px] bg-error-bg px-4 text-sm py-1 text-error ">Entered
            code is wrong
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
        type: {
            type: String,
            default: 'text'
        },
        required: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
        }, id: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        description: {
            type: String,
        },
        error: {
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
