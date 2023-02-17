<template>
    <main class="main">
        <div class="logo">
            <img src="@assets/img/logo-xl.png">
        </div>
        <div class="title">
            Welcome to Avicenna!
        </div>
        <div class="buttons">
            <router-link to="/auth/login">
                <FormButton rounded primary>Sign in </FormButton>
            </router-link>
            <router-link to="/auth/login">
                <FormButton rounded primary_outline>Sign out</FormButton>
            </router-link>
        </div>
    </main>
</template>
<style scoped>
.main {
    @apply flex flex-col justify-around;
}

.logo img {
    @apply mx-auto px-6;
}

.title {
    @apply text-center font-semibold;
}

.buttons {
    @apply gap-2 flex-col flex;
}
</style>