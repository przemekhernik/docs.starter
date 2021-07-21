<template>
  <div v-if="items" class="app-archive">
    <div v-for="item in items" :key="item.slug" class="app-archive__item">
      <a :href="item.path">
        <h3>{{ item.title }}</h3>
        <p v-if="item.description">{{ item.description }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    document: {
      required: true,
      type: Object
    }
  },
  computed: {
    items() {
      return this.$store.getters.docsGroupedByDir(this.document.path);
    }
  }
};
</script>

<style lang="scss">
.app-archive {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  &__item {
    margin-bottom: 2rem;
    flex-basis: 49%;
    padding: 1rem 2rem;
    border: 1px dashed $c-gray;
    will-change: opacity;
    transition: opacity 0.2s ease-in-out;

    a {
      display: block;
      text-decoration: none;
      color: $c-text !important;
    }

    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
