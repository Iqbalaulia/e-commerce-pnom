import broker from "~/utils/broker";

export const actions = {
  async insertData({ commit, dispatch, getters }, { url, body, headers } = {}) {
    return broker.fetchCUD
      .post(url, body, {
        headers,
      })
      .then((res) => {
        return res;
      });
  },

  async updateData({ commit, dispatch, getters }, { url, body, headers } = {}) {
    return broker.fetchCUD
      .patch(url, body, {
        headers,
      })
      .then((res) => {
        return res;
      });
  },

  async updateDataPut(
    { commit, dispatch, getters },
    { url, body, headers } = {}
  ) {
    if (this.$storage.getCookie("token"))
      broker.setToken(this.$storage.getCookie("token"));

    return broker.fetchCUD
      .put(url, body, {
        headers,
      })
      .then((res) => {
        return res;
      });
  },

  async putData({ commit, dispatch, getters }, { url, body, headers } = {}) {
    return broker.fetchCUD.put(url, body).then((res) => {
      return res;
    });
  },

  async updateDataPost(
    { commit, dispatch, getters },
    { url, body, headers } = {}
  ) {
    return broker.fetchCUD
      .post(url, body, {
        headers,
      })
      .then((res) => {
        return res;
      });
  },

  getData({ commit, dispatch, getters }, { url, headers } = {}) {
    return broker.fetch
      .get(url, {
        headers,
      })
      .then((res) => {
        return res;
      });
  },
  listData({ commit, dispatch, getters }, { url, headers } = {}) {
    return broker.fetch
      .get(url, {
        headers,
      })
      .then((res) => {
        return res;
      });
  },

  async deleteData({ commit, dispatch, getters }, { url, headers } = {}) {
    return broker.fetchCUD
      .delete(url, {
        headers,
      })
      .then((res) => {
        return res;
      });
  },
};
