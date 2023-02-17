
<script>
import router from '../../router/router';
import { useCookies } from "vue3-cookies";
export default {

    data() {
        return {
            PhoneNumber: '',
            PhoneCountry: '',
            PhoneValid: false,
            ErrorMessage: '',
            CounterValue: '',
            cookiesObject: null,

        }
    },
    methods: {
        phoneChanged() {
            this.PhoneNumber = this.$refs.phone.ModelPhoneNumber;
            this.PhoneCountry = this.$refs.phone.ModelPhoneCountry;
            this.PhoneValid = this.$refs.phone.ModelPhoneValid;
            if (this.PhoneValid == true) {
                console.log("this.PhoneValid")
            }
        },
        registerSubmited() {


            if (!this.PhoneValid) {
                this.ErrorMessage = 'Phone is not valid';
            }
            else {
                this.ErrorMessage = '';
                this.sendSmsAndRouteToSmsPage()
            }

        },


        sendSmsAndRouteToSmsPage() {
            const cookiesObject = useCookies();
            cookiesObject.cookies.set("UserPhoneNumber", this.PhoneNumber);
            router.push('/auth/sms')
        }
    },

    mounted() {

        //connect to cookies
        this.cookiesObject = useCookies();
        //if user phone number exists in cookies
        if (this.cookiesObject.cookies.get("UserPhoneNumber")) {
            //Route to sms page
            router.push('/auth/sms')
        }



    }
}

</script>
<template>



    <main class="main">
        <div class="logo">
            <img src="@assets/img/logo-lg.png">
        </div>
        <div class="form">
            <div class="form__title">Sign in to your account</div>
            <div class="form__fields">
                <FormPhone :error="ErrorMessage" @click="phoneChanged" @input="phoneChanged" ref="phone"
                    label="Phone Number" description="You will recvive SMS on this numberd">
                </FormPhone>

            </div>
            <div class="form__buttons">
                <FormButton @click="registerSubmited()" rounded primary :class="[!PhoneValid ? 'opacity-80' : '']">
                    Sign up
                </FormButton>
            </div>
            <div class="form__register">
                <router-link to="/auth/login">
                    <div>Already have account ?</div>
                </router-link>
            </div>
        </div>
        <footer class="footer">
            <div class="footer__copyright">
                Copyright © 2022 - 2023
            </div>
        </footer>
    </main>


</template>




<style lang="scss" scoped>
.main {
    @apply flex flex-col justify-around;

}

.logo img {
    @apply mx-auto px-6;
}

.form {
    &__title {
        @apply text-center font-medium;
    }

    &__fields {
        @apply py-12;
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