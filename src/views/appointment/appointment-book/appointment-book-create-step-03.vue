<template>
    <main>
        <GlobalHeader title="Dr. Jenny Wilson" instance="back">
            <!-- empty slot -->
        </GlobalHeader>
        <article class="artice h-full grow flex flex-col gap-6 py-8">
            <div class="name">
                <FormInput label="Full name" placeholder="John doe" required></FormInput>
            </div>
            <div class="age flex flex-col gap-2">
                <div class="age__title px-6 text-neutral-1 text-base font-semibold text-left">
                    Select Your Age Range
                </div>
                <div class="age__buttons">
                    <div class="age__button flex gap-1.5 ">
                        <FormButton rounded sm primary_outline> 10+ </FormButton>
                        <FormButton rounded sm primary_outline> 20+ </FormButton>
                        <FormButton rounded sm primary_outline> 30+ </FormButton>
                        <FormButton rounded sm primary> 40+ </FormButton>
                        <FormButton rounded sm primary_outline> 50+ </FormButton>
                    </div>
                </div>
            </div>
            <div class="gender flex flex-col gap-2">
                <div class="gender__title  px-6 text-neutral-1 text-base font-semibold text-left">
                    Gender
                </div>
                <div class="gender__radios px-6 flex items-center gap-12 ">
                    <label class="gender__radios__label">
                        <input class="gender__radios__label__radio rounded-full w-4 h-4 " name="gender" type="radio">
                        Man
                    </label>
                    <label class="gender__radios__label">
                        <input class="gender__radios__label__radio rounded-full w-4 h-4 " name="gender" type="radio">
                        Woman
                    </label>
                </div>

            </div>
            <div class="phone">
                <FormInput label="Phone number" placeholder="09121004455" required></FormInput>
            </div>
            <div class="problem flex flex-col gap-2">
                <div class="problem__title px-6 text-neutral-1 text-base font-semibold text-left">
                    Write Your Problem
                </div>
                <FormTextarea class="h-32" placeholder="Example : I am a Cardio patient. Feel headsick last 2 weeks.">
                </FormTextarea>
            </div>
            <div class="buttons mt-auto ">
                <router-link :to="{ name: 'home' }">
                    <FormButton primary lg rounded>submit</FormButton>
                </router-link>
            </div>
        </article>
    </main>
</template>
