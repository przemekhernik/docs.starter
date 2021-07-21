<template>
  <div class="page">
    <div class="page__header">
      <AppHeader />
    </div>
    <div class="page__sidebar">
      <AppNav />
    </div>
    <div class="page__content">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

html {
  color: $c-text;

  hr {
    margin: 0.5rem 0;
    border: none;
  }

  p {
    & > code {
      color: $c-primary;
    }
  }

  ul,
  ol {
    margin-bottom: $m-bottom;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: $c-primary;
  }

  img {
    height: auto;
    max-width: 100%;
  }

  .page {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 120rem;
    margin: auto auto 5rem auto;

    &__header {
      flex-basis: 100%;
      max-width: 100%;
    }

    &__sidebar {
      position: sticky;
      top: 5rem;
      flex-basis: 25%;
      max-width: 25%;
    }

    &__content {
      flex-basis: 75%;
      max-width: 75%;
    }
  }
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.1s ease-in-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
