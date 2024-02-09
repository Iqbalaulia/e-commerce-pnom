<template>
  <div class="my_address">
    <div class="my_address_title">
      <div class="my_address_title_address">Alamat Saya</div>
      <div class="my_address_title_add_address">
        <b-button class="btn-primary"> + tambah alamat baru </b-button>
      </div>
    </div>
    <div class="my_address_content">
      <div class="line-devider"></div>
      <div class="my_address_content_list">
        <div >
          <div class="title">andrew subekti home <span class="mark-primary">utama</span></div>
          <div class="personal_name">andrew subekti</div>
          <div class="phone">0821 2345 6789</div>
          <div class="address">
            Unit 2278, Skyloft SOHO Ciputra World, Jl. Mayjend Sungkono No 89,
            Dukuh Pakis, Kota Surabaya
          </div>
          <div class="action">
            <a class="mr-2" href="#"> <i class="far fa-edit"></i> ubah </a>
            <a href="#"> <i class="fas fa-trash-alt"></i> hapus </a>
          </div>
        </div>
        <div class="choose_address">
          <b-button @click="onChangeAddress()" v-if="chooseAddress === false" class="btn-primary">pilih</b-button>
          <i v-else class="fas fa-check checklist"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyAddress",
  data() {
    return {
      chooseAddress: false
    }
  },
  methods: {
    onChangeAddress() {
      this.chooseAddress = true
    }
  },
};
</script>
