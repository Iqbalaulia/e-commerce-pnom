<template>
  <div class="user">
    <navbar />
    <div class="user_content">
      <div class="row">
        <div class="col-md-3 user_content_sidebar">
          <div class="images_profile">
            <img
              src="~/assets/images/recomanded/recomanded-1.png"
              alt="category-1"
            />
            <div>
              <div class="images_profile_name">iqbalaulia</div>
              <div class="images_profile_username">auliaaulia</div>
            </div>
          </div>
          <div class="sidebar_menu">
            <ul>
              <li class="title_menu">Profil Akun</li>
              <li
                @click="onChangeMenu(`akun-saya`)"
                :class="
                  $route.query.menu === `akun-saya` ? `sub_menu_active` : ``
                "
                class="sub_menu"
              >
                <i class="fa-regular fa-circle-user"></i>
                Akun Saya
              </li>
              <li
                @click="onChangeMenu(`alamat`)"
                :class="$route.query.menu === `alamat` ? `sub_menu_active` : ``"
                class="sub_menu"
              >
                <i class="fa-regular fa-address-card"></i> Alamat
              </li>
              <li
                @click="onChangeMenu(`dropshipper`)"
                :class="
                  $route.query.menu === `dropshipper` ? `sub_menu_active` : ``
                "
                class="sub_menu"
              >
                <i class="fa-solid fa-truck-fast"></i>
                Dropshipper
              </li>
              <li
                @click="onChangeMenu(`pengaturan-notifikasi`)"
                :class="
                  $route.query.menu === `pengaturan-notifikasi`
                    ? `sub_menu_active`
                    : ``
                "
                class="sub_menu"
              >
                <i class="fa-solid fa-gears"></i>
                Pengaturan Notifikasi
              </li>
              <li
                @click="onChangeMenu(`pesanan-saya`)"
                :class="
                  $route.query.menu === `pesanan-saya`
                    ? `title_menu_active`
                    : ``
                "
                class="title_menu"
              >
                Pesanan saya
              </li>
              <li
                @click="onChangeMenu(`wishlist`)"
                :class="
                  $route.query.menu === `wishlist` ? `title_menu_active` : ``
                "
                class="title_menu"
              >
                Wishlist
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-9">
          <my-account-component v-if="menu === `akun-saya`" />
          <my-address-component v-if="menu === `alamat`" />
          <my-notification-component v-if="menu === `pengaturan-notifikasi`" />
          <my-dropshipper-component v-if="menu === `dropshipper`" />
          <my-order-component v-if="menu === `pesanan-saya`" />

        </div>
      </div>
    </div>
    <footer-ecommerce />
  </div>
</template>
<script>
export default {
  name: "UserAccount",
  data() {
    return {
      menu: "akun-saya",
    };
  },
  mounted() {
    this.onChangeMenu(`akun-saya`);
  },
  methods: {
    onChangeMenu(item) {
      this.menu = item;
      this.$router.push({
        path: this.$route.path,
        query: {
          menu: item,
        },
      });
    },
  },
};
</script>
