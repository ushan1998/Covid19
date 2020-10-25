<template>
  <card type="user">
    <p class="card-text"></p>
    <div class="author">
      <div class="block block-one"></div>
      <div class="block block-two"></div>
      <div class="block block-three"></div>
      <div class="block block-four"></div>
      <a href="#">
        <img class="avatar" src="img/ushan.jpg" alt="..." />
        <h5 class="title">{{ user.fullName }}</h5>
      </a>
      <p class="description">
        {{ user.title }}
      </p>
    </div>
    <p></p>
    <p class="card-description">
      {{ user.description }}
    </p>
    <div slot="footer" class="button-container">
      <base-button icon round class="btn-facebook">
        <a href="https://www.facebook.com/ushan.alwis">
          <i class="fab fa-facebook"></i>
        </a>
      </base-button>
      <base-button icon round class="btn-twitter">
        <a href="https://github.com/ushan1998">
          <i class="fab fa-github"></i>
        </a>
      </base-button>
      <base-button icon round class="btn-google">
        <a href="https://www.linkedin.com/in/ushan-alwis-80ba02147/">
          <i class="fab fa-linkedin"></i
        ></a>
      </base-button>
    </div>
  </card>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
};
</script>
<style></style>
