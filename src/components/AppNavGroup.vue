<template>
  <div
    class="app-nav-group"
    :class="{ active: level < 2 || group.active }"
    :data-level="level"
  >
    <NuxtLink :to="doc.path || '/'" class="app-nav-group__link">
      {{ doc.menuTitle || doc.title }}
    </NuxtLink>

    <div v-if="groups !== {}" class="app-nav-group__subgroup">
      <AppNavGroup
        v-for="g in groups"
        :key="g.doc.path"
        :group="g"
        :level="level + 1"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNavGroup',
  props: {
    group: {
      required: true,
      type: Object
    },
    level: {
      required: false,
      default: 1,
      type: Number
    }
  },
  computed: {
    doc() {
      return this.group.doc;
    },
    groups() {
      return this.group.groups;
    }
  }
};
</script>

<style lang="scss" scoped>
.app-nav-group {
  $this: &;

  padding-left: 1rem;
  font-size: 1.6rem;
  letter-spacing: 0.05rem;

  &[data-level='1'],
  &[data-level='2'] {
    padding-left: 0;
  }

  a {
    color: $c-text;
    text-decoration: none;

    &:hover,
    &.active {
      color: $c-primary;
    }
  }

  &__subgroup {
    display: none;
  }

  &.active {
    & > #{$this} {
      &__subgroup {
        display: block;
      }

      &__link {
        color: $c-primary;
        font-weight: 700;
      }
    }
  }
}
</style>
