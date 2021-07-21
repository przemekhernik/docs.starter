<template>
  <aside class="app-nav">
    <AppNavGroup v-for="group in groups" :key="group.doc.path" :group="group" />
  </aside>
</template>

<script>
export default {
  computed: {
    groups() {
      return this.$store.getters.docsGroupedByTree(this.$route.fullPath);
    }
  },
  methods: {
    isLinkActive(item) {
      return item.path === this.$route.fullPath;
    }
  }
};
</script>

<style lang="scss">
.app-nav {
  font-size: 1.2rem;
}
</style>
