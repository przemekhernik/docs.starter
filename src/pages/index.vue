<template>
  <div class="home">
    <h1>{{ document.title }}</h1>
    <AppArchive v-if="document.isArchive" :document="document" />
    <AppContent :document="document" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, store, app, params, error }) {
    const path = `/${params.pathMatch || 'index'}`;
    const [document] = await $content({ deep: true }).where({ path }).fetch();

    if (!document) {
      return error({ statusCode: 404, message: 'Page not found' });
    }

    return {
      document
    };
  },

  head() {
    return {
      title: this.document.title
    };
  }
};
</script>
