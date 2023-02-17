<template>
    <nav
        class="fixed bottom-0 w-full  rounded-t-3xl z-10 flex px-6 items-center justify-between border py-5 bg-white inset-x-0">


        <router-link :to="{ name: 'home' }"
            class="flex justify-center items-center relative gap-3 px-3 py-2 rounded-xl bg-primary/10">
            <img src="@assets/svg/home.svg">
            <p :class="active == 'home' ? '' : 'hidden'" class="text-primary text-lg font-medium text-center">Home</p>
        </router-link>
        <router-link :to="{ name: 'appointment-past' }"
            class="flex justify-center items-center relative gap-3 px-3 py-2 rounded-xl bg-primary/10">
            <img src="@assets/svg/date.svg">
            <p :class="active == 'appointment' ? '' : 'hidden'" class="  text-primary text-lg font-medium text-center">
                Appointment
            </p>
        </router-link>
        <a href="#" class="flex justify-center items-center relative gap-3 px-3 py-2 rounded-xl bg-primary/10">
            <img src="@assets/svg/list.svg">
            <p :class="active == 'list' ? '' : 'hidden'" class="  text-primary text-lg font-medium text-center">
                okeye
            </p>
        </a>
        <router-link :to="{ name: 'profile-start' }">
            <div class="flex justify-center items-center relative gap-3 px-3 py-2 rounded-xl bg-primary/10">
                <img src="@assets/svg/person.svg">
                <p :class="active == 'profile' ? '' : 'hidden'" class="  text-primary text-lg font-medium text-center">
                    Profile
                </p>
            </div>
        </router-link>
    </nav>
</template>
<script >
export default {
    props: {
        active: {
            type: String,
            default: 'home'
        }
    }
}
</script>