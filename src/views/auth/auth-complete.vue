<template>
    <main class="main flex flex-col gap-8">
        <header>
            <global-header instance="logo" title="Profile"></global-header>
        </header>
        <article class="flex gap-6 flex-grow flex-col">
            <divider class="w-full block h-[1px] bg-neutral-8"></divider>
            <hidden v-if="false">
                <avatar class="w-max mx-auto">
                    <img src="https://picsum.photos/id/1067/400/400" class="block rounded-full w-24 h-24">
                </avatar>
                <divider class="w-full block h-[1px] bg-neutral-8"></divider>
            </hidden>
            <p class="flex-grow-0  flex-shrink-0 text-neutral-1 text-lg font-semibold text-left">
                What we should call you?
            </p>
            <form-input @input="inputNameChange" ref="inputName" label="Full Name" required
                placeholder="Adam Smith"></form-input>
            <form-select ref="inputGendar" label="Gendar" required>
                <option value="Man" selected>Man</option>
                <option value="Woman">Woman</option>
            </form-select>
            <divider class="w-full block h-[1px] bg-neutral-8"></divider>
            <p class="flex-grow-0  flex-shrink-0 text-neutral-1 text-lg font-semibold text-left">
                When is your birth day?
            </p>
            <birthday class="flex gap-4">
                <column class="w-full">
                    <form-select ref="inputYear" label="Year">
                        <option value="2022" selected>2022</option>
                    </form-select>
                </column>
                <column class="w-full">
                    <form-select ref="inputMonth" label="Month">
                        <option value="January" selected>January</option>
                    </form-select>
                </column>
                <column class="w-full">
                    <form-select ref="inputDay" label="Day">
                        <option value="31" selected>31</option>
                    </form-select>
                </column>
            </birthday>
            <divider class="w-full block h-[1px] bg-neutral-8"></divider>
            <p class="flex-grow-0  flex-shrink-0 text-neutral-1 text-lg font-semibold text-left">
                Please choose a password
                <span class="block text-neutral-6 font-light text-xs ">it will be usefull when you dont have your
                    phone</span>
            </p>
            <row>
                <form-input id="passwordMain" ref="passwordMain" v-on:input="PasswordIsTyping" type="password"
                    label="Password" required placeholder="********"></form-input>
                <div v-if="characterError"
                    class="mx-auto block text-center rounded-full w-full  px-4 text-sm py-1 text-error ">
                    Password should be at least 8 characters
                </div>
            </row>
            <row>
                <form-input id="passwordConfrim" ref="passwordConfrim" v-on:input="PasswordIsTyping" type="password"
                    label="Confirm New Password" required placeholder="********"></form-input>
                <div v-if="matchError" class="mx-auto block text-center rounded-full w-full  px-4 text-sm py-1 text-error ">
                    Passwords not match
                </div>
            </row>
            <form-button :class="!submitable && 'opacity-75 pointer-events-none'" primary rounded @click="formSubmited">
                Submit </form-button>
        </article>
    </main>
<!-- 

       


 --></template>
<script >
import axios from 'axios'
import router from '../../router/router';

export default {
    data() {
        return {
            passwordMain: "",
            passwordConfrim: "",
            characterError: false,
            matchError: false,
            nameNotValid: false,
            submitable: false,
            pas1typed: false,
            pas2typed: false,
            nametyped: false,
        }
    },

    methods: {
        ///code is super nasti FIXME:
        PasswordIsTyping(e) {
            if (e.target.id == "passwordMain") {
                this.pas1typed = true;
                this.passwordMain = e.target.value;
            }
            if (e.target.id == "passwordConfrim") {
                this.pas2typed = true;
                this.passwordConfrim = e.target.value;
            }
            //password main
            if (this.passwordMain.length < 8 && this.passwordMain.length != 0) {
                this.characterError = true;
                this.$refs.passwordMain.status = 'error'
            } else {
                this.characterError = false;
                if (this.passwordMain.length != 0) {
                    this.$refs.passwordMain.status = 'success'
                } else {
                    this.$refs.passwordConfrim.status = ''
                }
            }
            //password confirm
            if (this.passwordConfrim != this.passwordMain && this.passwordConfrim.length != 0) {
                this.matchError = true;
                this.$refs.passwordConfrim.status = 'error'
            } else {
                this.matchError = false;
                if (this.passwordConfrim.length != 0) {
                    this.$refs.passwordConfrim.status = 'success'
                } else {
                    this.$refs.passwordConfrim.status = ''
                }
            }
            this.activeSubmit()
        },
        //name
        inputNameChange(e) {
            this.nametyped = true;
            if (e.target.value.length > 3) {
                this.$refs.inputName.status = 'success';
                this.nameNotValid = false;
            } else {
                this.$refs.inputName.status = '';
                this.nameNotValid = true;
            }
            this.activeSubmit()
        },
        activeSubmit() {
            console.log(this.matchError);
            if (
                !this.mathError
                && !this.characterError
                && !this.nameNotValid
                && this.pas1typed
                && this.pas2typed
                && this.nametyped
            ) {
                this.submitable = true;
            } else {
                this.submitable = false;
            }
        },
        formSubmited() {
            let Password = this.$refs.passwordMain.InputValue;
            let Name = this.$refs.inputName.InputValue;
            let Gendar = this.$refs.inputGendar.$refs.inputValue.value;
            let Year = this.$refs.inputYear.$refs.inputValue.value;
            let Month = this.$refs.inputMonth.$refs.inputValue.value;
            let Day = this.$refs.inputDay.$refs.inputValue.value;

            if (this.submitable = true) {
                axios.post(`${import.meta.env.VITE_HOST}/api/register`, {
                    password: Password,
                    name: Name,
                    gendar: Gendar,
                    year: Year,
                    month: Month,
                    day: Day,
                    // api_token: localStorage.getItem("api_token")
                }).then(response => {
                    if (response.data.success == true) {
                        localStorage.setItem("api_token", response.data.api_token)
                    }
                    //you are registered we do check_login function for being sure then we push route to home view
                    axios.post(`${import.meta.env.VITE_HOST}/api/auth_check`,
                        {
                            api_token: localStorage.getItem("api_token")
                        })
                        .then(res => {
                            if (res.data.user_auth == true) {
                                router.push({ name : 'home'})
                            }
                        })
                        .catch(err => {
                            console.error(err);
                        })
                })
                    .catch(error => console.log(error))

            }
            // localStorage.setItem("api_token",
        }
    },
    mounted() {
        if (localStorage.getItem("phone_valid") != 'true') {
            router.push('/auth/sms');
        }

    },
}
</script>
