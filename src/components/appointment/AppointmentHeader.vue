<template>
    <div class="grid grid-cols-2 gap-3 py-4 ">
        <router-link :to="{ name: 'appointment-upcoming' }">
            <FormButton :primary="active == 'upcoming'" :primary_outline="active == 'past'" rounded class="w-full">Upcoming
            </FormButton>
        </router-link>
        <router-link :to="{ name: 'appointment-past' }">
            <FormButton :primary="active == 'past'" :primary_outline="active == 'upcoming'" rounded class="w-full"> Past
            </FormButton>
        </router-link>
        <div class="col-span-2 items-center flex">
            <GlobalSearch class="w-full"></GlobalSearch>
        </div>
    </div>
</template>
<script>
export default {
    props: ['active']
}
</script>