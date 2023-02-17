// stores/counter.js
import { defineStore } from 'pinia'

export const useOtpStore = defineStore('otp', {
    state: () => ({
        otp: {
            OTPCode: null,
        },
    }),

})