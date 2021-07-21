<template>
  <main class="app-content">
    <NuxtContent :document="document" />
  </main>
</template>

<script>
export default {
  props: {
    document: {
      required: true,
      type: Object
    }
  }
};
</script>

<style lang="scss">
.app-content {
  pre {
    font-size: 1.5rem;
    margin-bottom: $m-bottom;
  }
}
</style>
