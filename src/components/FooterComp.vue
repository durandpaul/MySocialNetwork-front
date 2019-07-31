<template>
  <div id="footer-comp">
    <v-footer :inset="footer.inset" app>
      <span class="px-3">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    footer: {
      inset: false
    }
  })
};
</script>

<style>
</style>
