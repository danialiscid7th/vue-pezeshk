
<script>
import router from '../../router/router';
import { useCookies } from "vue3-cookies";
import axios from 'axios';

export default {
    data() {
        return {
            PhoneNumber: '',
            IsTimerActive: true,
            SecondsToExpire: '...',
            CheckGeneratedOTP: null,
            CookiesObject: null,
            OtpEnteredCorrect: false,
            CodeIsWrongFlag: false,
            LiveEnteredCode: null,
        }
    },
    methods: {

        //OTP Functions
        async SetOTP() {
            //this function will create otp and send it to phone number in server side laravel
            const response = await axios.get(
                `${import.meta.env.VITE_HOST}/api/set-otp?phone=${this.PhoneNumber}`,
            ).then((response) => {
            });
        },
        async CheckOTP(otp) {
            const response = await axios.get(
                `${import.meta.env.VITE_HOST}/api/check-otp?phone=${this.PhoneNumber}&otp=${otp}`,
            ).then((response) => {
                if (response.data == true) {
                    this.OtpEnteredCorrect = true;
                    this.CodeIsWrongFlag = false;

                    //OTP IS ACCEPTED 
                    //TODO::check user not exisits
                    localStorage.setItem("phone", this.PhoneNumber);
                    localStorage.setItem("phone_valid", 'true');
                    console.log(localStorage.getItem("phone_valid"));
                    console.log(

                        router.push('/auth/complete')

                    );


                }
                if (response.data == false) {
                    this.CodeIsWrongFlag = true;
                }
            });
        },
        //NOTE: GetOTP is Debug only function for development 
        async GetOTP() {
            const response = await axios.get(
                `${import.meta.env.VITE_HOST}/api/get-otp?phone=${this.PhoneNumber}`,
            ).then((response) => {
                this.CheckGeneratedOTP = response.data.otp;
            });
        },



        ResendCode() {
            this.CookiesObject.cookies.set("CounterDate", (new Date().getTime() + 60 * 1000));
            this.SetOTP();
        },

        NumberIsWrong() {
            //remove user phone number from cookies
            this.CookiesObject.cookies.remove("UserPhoneNumber")
            //remove counter date from cookies
            this.CookiesObject.cookies.remove("CounterDate")
            //back to register page
            router.push('/auth/register')
        },
        CodeEnteredChanged(value) {
            this.LiveEnteredCode = value;
        },
        CodeEnteredCompelete(value) {
            this.CheckOTP(value);
            this.LiveEnteredCode = value;

        },

    },


    mounted() {
        // main This is for access This inside functions
        let mainThis = this;

        //connect to cookies
        this.CookiesObject = useCookies();

        //check number is entered 
        if (this.CookiesObject.cookies.get("UserPhoneNumber") == null || this.CookiesObject.cookies.get("UserPhoneNumber") == '') {
            // if is not back to register
            router.push('/auth/register')
        } else {
            // if is set global phone number
            this.PhoneNumber = this.CookiesObject.cookies.get('UserPhoneNumber');
        }

        //check CounterDate cookie exists?
        if (this.CookiesObject.cookies.get("CounterDate") == null || this.CookiesObject.cookies.get("CounterDate") == '') {
            //if CounterDate cookie not exist create it
            this.CookiesObject.cookies.set("CounterDate", (new Date().getTime() + 60 * 1000));
            //then send it as SMS to the phone number
            this.SetOTP();
        }

        setInterval(() => {
            let endTime = this.CookiesObject.cookies.get("CounterDate")
            let now = new Date().getTime();
            let distance = Math.floor((endTime - now) / 1000);
            //if timer was ended
            if (distance <= 0) {
                //turn false timer flag
                mainThis.IsTimerActive = false;
                // if time is running
            } else {
                //turn true timer flag
                mainThis.IsTimerActive = true;
                mainThis.SecondsToExpire = distance;
            }
        }, 1000)

        // if phone already valid 
        if (localStorage.getItem("phone_valid") == "true") {
            router.push('/auth/complete')
        }
    }
}


</script>
<template>
    <main class="main">


        <GlobalHeader title="Phone Verification" instance="logo"></GlobalHeader>
        <article class="flex gap-4 flex-grow flex-col justify-end">
            <div class="logo mt-auto py-6">
                <img src="@assets/svg/sms.svg">
            </div>
            <div class="form__title "> <span @click="NumberIsWrong" class="text-sm block cursor-pointer text-primary">Is
                    it
                    wrong?</span> Code has been send to {{ PhoneNumber }}</div>
            <div class="form__fields mx-auto">
                <v-otp-input ref="otpInput" input-classes="otp-input" separator="" :num-inputs="4" :should-auto-focus="true"
                    :is-input-num="true" :conditionalClass="['one', 'two', 'three', 'four']"
                    @on-complete="CodeEnteredCompelete" @on-change="CodeEnteredChanged" />
            </div>
            <error v-if="CodeIsWrongFlag"
                class="mx-auto block text-center rounded-full w-[280px] bg-error-bg px-4 text-sm py-1 text-error ">Entered
                code is wrong</error>
            <div class="form__resend text-center text-sm">
                <span v-if="IsTimerActive">
                    Resend code in {{ SecondsToExpire }}
                </span>
                <span @click="ResendCode()" v-if="!IsTimerActive" class="text-primary  cursor-pointer semibod"> Resend
                    code </span>
            </div>
            <div class="form__buttons mt-auto">
                <FormButton @click="CheckOTP(LiveEnteredCode)" rounded primary>
                    Verify phone number
                </FormButton>
            </div>
        </article>
</main>
</template>




<style lang="scss" >
.otp-input {
    @apply rounded-xl mx-1.5 border w-[60px] h-12 text-center;
}

/* Background colour of an input field with value */
.otp-input.is-complete {
    @apply border-primary;
}


.logo img {
    @apply mx-auto px-6;
}

.form {
    &__title {
        @apply mx-auto font-medium;
    }



    &__register {
        @apply text-primary text-center font-medium py-4;
    }
}

.footer {
    &__copyright {
        @apply text-center text-sm;
    }
}
</style>