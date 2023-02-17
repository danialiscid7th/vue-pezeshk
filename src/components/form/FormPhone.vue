<template>
    <div class="wrapper" @click="changeFlag">
        <div class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2 rounded-sm">
            <div class="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-6">
                <p class="flex-grow-0 flex-shrink-0 opacity-80 text-base font-semibold text-left">
                    {{ label }}
                </p>
                <p class="flex-grow-0 px-1 flex-shrink-0 opacity-80 text-sm font-semibold text-left text-[#da1414]">
                    {{ required? "*": "" }}
                </p>
            </div>
            <input :placeholder="placeholder" v-model="InputValue" @input="checkPhone()" ref="phone" :class="
            [
                TheClass == 'inactive' && 'focus:border-neutral-1',
                TheClass == 'valid' && 'focus:border-success ',
                TheClass == 'invalid' && 'focus:border-error',
            ]" class=" flex justify-start outline-none border placeholder:opacity-50 w-full text-base text-left gap-1
                items-start self-stretch flex-grow-0 flex-shrink-0 relative px-6 py-3 rounded-[100px] bg-white
                border-[#ebeef2]" />

            <div v-if="error"
                class="flex justify-start items-center  text-sm text-left text-error self-stretch flex-grow relative gap-1 px-6 py-1.5 rounded-[100px] bg-[#feefef]">
                <font-awesome-icon icon="fa-solid fa-circle-exclamation" color="#da1414" />
                <p>{{ error }}</p>
            </div>

            <div>
                <p class="px-6 self-stretch flex-grow-0 flex-shrink-0 opacity-60 text-sm text-left">
                    {{ description }}
                </p>
            </div>
        </div>
        <input type="text" class="bg-red-200 hidden" v-model="ModelPhoneNumber" />
        <input type="text" class="bg-blue-200 hidden" v-model="ModelPhoneCountry" />
        <input type="text" class="bg-gray-200 hidden" v-model="ModelPhoneValid" />
    </div>
</template>
<style>
.iti {
    @apply w-full;
}

.iti__flag-box,
.iti__country-name,
.iti__dial-code {
    pointer-events: none;
}
</style>
<script>
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
export default {
    data() {
        return {
            InputValue: this.value || "",
            TheInput: "",
            ThePhone: "",
            TheCountry: "",
            ModelPhoneNumber: "",
            ModelPhoneCountry: "",
            TheClass: "inactive",
        };
    },
    props: {
        value: {
            type: String,
            default: "",
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
        error: {
            type: String,
        },
    },
    methods: {
        setError(ErrorMessage) {
            this.error = ErrorMessage;
        },
        changeFlag(event) {
            const target = event.target;
            if (target.classList.contains("iti__country")) {
                this.checkPhone();
            }
        },
        checkPhone() {
            if (this.TheInput == "") {
                this.TheInput = intlTelInput(this.$refs.phone, {
                    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
                    initialCountry: 'ir',
                });
            }
            if (this.TheInput.isValidNumber()) {
                this.TheClass = "valid";
            } else {
                this.TheClass = "inactive";
            }
            this.ModelPhoneNumber = this.TheInput.getNumber();
            this.ModelPhoneValid = this.TheInput.isValidNumber();
            this.ModelPhoneCountry = this.TheInput.getSelectedCountryData().iso2;
        },
    },
    mounted() {
        this.checkPhone();
    },
};


</script>

<!-- 
https://intl-tel-input.com/node_modules/intl-tel-input/examples/gen/default-country-ip.html
get country by id
" -->
