
<template>
  <RouterView />
</template>
<style lang="scss">
main {
 
  @apply sm:border sm:mx-auto  sm:w-[428px] min-h-screen antialiased px-6 py-12 w-full flex flex-col overflow-y-scroll relative;
}
</style>
<script >
export default {
  data() {
    return {
      env: import.meta.env,

    }
  }
}
</script>