<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">© {{ year }} - 2021 Copy Right Recived</li>
      </ul>
      <div class="copyright">
        Developed by
        <a href="https://github.com/ushan1998" target="_blank" rel="noopener"
          >Ushan Alwis</a
        >
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>
