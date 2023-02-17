<!-- Icons : phone - message - video -->
<template>
  <router-link :to="{name:'appointment-book-create-step-01'}">
    <div class="item">
      <div class="relative">
        <img src="@assets/img/doctor.png" class="item__image" />

        <div v-if="icon != 'none'"
          class="bg-primary w-9 h-9 bottom-0 absolute flex items-center justify-center right-0 rounded-tl-xl">
          <font-awesome-icon v-if="icon == 'phone'" icon="fa-solid fa-phone" color="white" />
          <font-awesome-icon v-if="icon == 'video'" icon="fa-solid fa-video" color="white" />
          <font-awesome-icon v-if="icon == 'message'" icon="fa-solid  fa-comment-dots" color="white" />
        </div>
      </div>
      <div class="item__content bg-white">
        <div class="item__content__title">Dr. Ralph Edwards</div>
        <div class="item__content__review">
          <img src="@assets/svg/star-half.svg" />
          <span> 4.7 (469 reviews) </span>
        </div>
        <p class="item__content__info">Cardio Specialist - Ramsay College Hospital</p>
      </div>
      <div v-if="action != 'none'" class="item__action ml-auto">
        <font-awesome-icon v-if="action == 'like'" icon="fa-regular fa-heart" color="#2972fe" />
        <font-awesome-icon v-if="action == 'like-filled'" icon="fa-solid fa-heart" color="#2972fe" />
        <font-awesome-icon v-if="action == 'phone'" icon="fa-solid fa-phone" color="#2972fe" />
        <font-awesome-icon v-if="action == 'video'" icon="fa-solid fa-video" color="#2972fe" />
        <font-awesome-icon v-if="action == 'message'" icon="fa-solid  fa-comment-dots" color="#2972fe" />
      </div>
    </div>
  </router-link>
</template>
<style lang="scss" scoped>
.item {
  @apply flex items-center pr-3 w-full rounded-xl border;

  &__image {
    @apply w-[100px] h-[100px] rounded-tl-xl rounded-bl-xl object-cover;
  }

  &__content {
    @apply flex flex-col justify-center h-[100px] gap-1 pl-5 py-2;

    &__title {
      @apply font-semibold;
    }

    &__review {
      @apply flex text-xs;
    }

    &__info {
      @apply flex text-xs;
    }
  }

  &__action {
    @apply bg-primary/10 h-9 w-9 flex items-center justify-center rounded-lg;

    img {
      @apply w-4 h-4;
    }
  }
}
</style>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: "none",
    },
    action: {
      type: String,
      default: "none",
    },
  },
};
</script>
