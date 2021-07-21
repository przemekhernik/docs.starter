<template>
  <header class="app-header">
    <div class="app-header__logo">
      <NuxtLink to="/"><AppLogo /></NuxtLink>
    </div>
  </header>
</template>

<style lang="scss">
.app-header {
  padding: 2.5rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  border-bottom: 1px solid $c-gray;
  margin-bottom: 3rem;

  &__logo {
    max-width: 13.2rem;
  }
}
</style>
