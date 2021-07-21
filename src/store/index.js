import { find, filter, groupBy, set } from 'lodash';

export const state = () => ({
  docs: {}
});

export const getters = {
  docs: (state) => {
    return state.docs;
  },

  docsGroupedByDir:
    (state) =>
    (dir = '/') => {
      const docs = groupBy(state.docs, 'dir');
      return docs[dir] ? docs[dir] : [];
    },

  docsGroupedByTree: (state, getters) => (path) => {
    const groups = { '/': getters.tree('/', path) };
    return parseActivity(groups, path);
  },

  docstest:
    (state) =>
    (routerPath = '/') => {
      const parentPath = routerPath.split('/').slice(0, -1).join('/') || '/';
      const grouped = groupBy(state.docs, 'dir');
      const groups = [];

      for (const path of Object.keys(grouped)) {
        if (path === parentPath) {
          for (const doc of grouped[parentPath]) {
            groups.push({
              doc,
              childs: doc.path === routerPath ? grouped[doc.path] : []
            });
          }
        }
      }

      return groups;
    },

  tree:
    (state, getters) =>
    (dirPath = '/') => {
      const doc = find(state.docs, (doc) => doc.path === dirPath) || {};
      const groups = {
        doc,
        groups: {}
      };

      for (const doc of filter(state.docs, (doc) => doc.dir === dirPath)) {
        groups.groups[doc.path] = getters.tree(doc.path);
      }

      return groups;
    }
};

export const mutations = {
  SET_DOCS(state, docs) {
    state.docs = docs;
  }
};

export const actions = {
  async fetchDocs({ commit }) {
    const docs = await this.$content({ deep: true })
      .where({ inNav: { $ne: false } })
      .sortBy('position', 'asc')
      .fetch();
    commit('SET_DOCS', docs);
  }
};

/**
 * Don't ask... 😬
 */
const parseActivity = function (groups, path) {
  let check = [];
  let parts = path
    .split('/')
    .filter((part) => part)
    .map((part) => `${part}`);
  while (parts.length > 0) {
    check.push(`${parts.join('/')}`);
    parts = parts.slice(0, -1);
  }
  check.reverse();
  parts = check;
  check = [];
  while (parts.length > 0) {
    check.push(`/.groups./${parts.join('.groups./')}.active`);
    parts = parts.slice(0, -1);
  }
  check.reverse();
  for (const part of check) {
    set(groups, part, true);
  }
  return groups;
};
