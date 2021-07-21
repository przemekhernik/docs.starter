<template>
  <div class="app-alert">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info'
    }
  }
};
</script>

<style scoped lang="scss">
.app-alert {
  display: block;
  width: 100%;
  margin-bottom: $m-bottom;
  padding: 2rem;
  font-size: 1.6rem;
  background: $c-gray;
}
</style>
