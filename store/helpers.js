import { mapState, mapGetters, mapActions } from "vuex";

export const authComputed = {
  ...mapState("auth", {
    currentUser: (state) => state.currentUser,
  }),
  ...mapGetters("auth", ["loggedIn", "getCurrentUser"]),
};

export const generalComputed = {
  ...mapState("general", {
    cartCount: (state) => state.cartCount,
    pageLoaded: (state) => state.pageLoaded,
  }),
  ...mapGetters("general", ["getCartCount", "getPageLoaded"]),
};

export const authMethods = mapActions("auth", [
  "logIn",
  "logOut",
  "setDataUser",
]);

export const generalMethods = mapActions("general", [
  "setCartCount",
  "setPageLoaded",
]);

export const crudMethods = mapActions("crud", [
  "insertData",
  "updateData",
  "putData",
  "updateDataPost",
  "updateDataPut",
  "getData",
  "listData",
  "deleteData",
]);
