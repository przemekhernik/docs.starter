export default async function ({ store }) {
  if (process.server) {
    await store.dispatch('fetchDocs');
  }
  if (process.client && !store.state.categories) {
    await store.dispatch('fetchDocs');
  }
  // Hot reload on development
  if (process.client && process.dev) {
    window.onNuxtReady(() => {
      window.$nuxt.$on('content:update', async () => {
        await store.dispatch('fetchDocs');
      });
    });
  }
}
