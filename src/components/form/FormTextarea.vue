<template>
    <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2 rounded-sm">
        <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-6">
            <p class="flex-grow-0 flex-shrink-0 text-neutral-1 text-base font-semibold text-left">
                {{ label }}
            </p>
            <p class="flex-grow-0 px-1 flex-shrink-0 opacity-80 text-sm font-semibold text-left text-[#da1414]">
                {{ required? '*': '' }}
            </p>
        </div>

        <textarea v-model="InputValue" type="text" :class="class" :placeholder="placeholder"
            class="flex  justify-start placeholder:opacity-50 rounded-xl w-full text-base text-left gap-1 items-start self-stretch flex-grow-0 flex-shrink-0 relative px-6 py-3  bg-white border border-[#ebeef2]">{{ $slots.default ? $slots.default()[0].children : '' }} </textarea>
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
        class: {
            type: String,
        },
    },
    data() {
        return {
            InputValue: this.value || ''
        }
    },

}
</script>
