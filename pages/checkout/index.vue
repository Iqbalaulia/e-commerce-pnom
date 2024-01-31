<template>
  <div class="checkout">
    <navbar/>
    <div class="checkout_content">
      <div class="row">
        <div class="col-md-12">
          <div class="data-title">
            <div class="devider"></div>
            <label for="">checkout</label>
          </div>
          <div class="devider-bottom"></div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="address">
            <div class="title_address">
              <i class="fas fa-map-marker-alt"></i>
              <label for="alamat pengiriman">
                alamat pengiriman
              </label>
            </div>
            <div class="section_dropshipper">
              <b-form-checkbox
                id="checkbox-1"
                name="checkbox-1"
                v-model="sendDropshipper"
                @change="onChangeDropshipper"
              >
                Kirim Sebagai Dropshipper
              </b-form-checkbox>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="address_primary">
            <div class="address_primary_badge">
              utama
            </div>
            <div class="address_primary_name">
              <label for="Andrew Subiakto">Andrew Subiakto</label>
              <div class="contact">
                (+62)851 6223 1908
              </div>
            </div>
            <div class="address_primary_location">
              Jl. Arief Rahman Hakim, Ruko No 6, Perumahan Citra Puri Keniten 1, Kab. Ponorogo, Kec. Babadan, Jawa Timur, 63491.
            </div>
            <div class="btn_edit">
              <b-button class="btn_edit">
                <i class="far fa-edit"></i>
              </b-button>
            </div>
          </div>
        </div>
      </div>

      <div class="row" v-if="sendDropshipper">
        <div class="col-md-12">
          <div class="address_dropshipper">
            <div class="address_dropshipper_title">
              alamat penerima
            </div>
            <div class="address_dropshipper_content">
              <div class="address_dropshipper_content_name">
                <label for="Andrew Subiakto">Andrew Subiakto</label>
                <div class="contact">
                  (+62)851 6223 1908
                </div>
              </div>
              <div class="address_dropshipper_content_location" v-if="!locationDropshipper">
                {{formData.locationDropshipper}}
              </div>
              <div class="address_dropshipper_content_edit_location" v-if="saveLocationDropshipper">
                <b-form-textarea
                  id="textarea"
                  v-model="formData.locationDropshipper"
                  placeholder="Enter something..."
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </div>
              <div>
                <b-button v-if="!saveLocationDropshipper" @click="editedLocationDropshipper()" class="pnom-btn-white">
                  <i class="far fa-edit"></i>
                </b-button>
                <b-button v-else @click="savedLocationDropshipper()" class="pnom-btn-white">
                  <i class="far fa-save"></i>
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="order">
            <div class="order_content">
              <label for="">Pesanan 1</label>
              <div class="order_data_content">
                <b-img-lazy class="images-cart" src="https://picsum.photos/1024/400/?image=41" alt="Responsive image"/>
                <div class="information_order">
                  <div class="information_order_title">
                    Striping Beat Pelindung Dashboard Tankpad Stiker Beat Deluxe 2020 2021 2022 2023 Stiker Motor Keren Variasi
                  </div>
                  <div class="information_order_variant">
                    Variasi : P001, TIPIS
                  </div>
                  <div class="information_order_price">
                    Rp40.500
                  </div>
                  <div class="information_order_reserve">
                    <div class="nominal_reserve">
                      1 Pcs
                    </div>
                    <div class="btn_edit">
                      <b-button class="btn_edit">
                        <i class="far fa-edit"></i>
                      </b-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-4">
          <div class="information_promo">
            <img class="thumbnail" src="~/assets/images/icon/icon_promo.svg" alt="thumbnail">
            <label for="">
              JANGAN KELEWATAN
              BELI LEBIH MURAH
              GUNAKAN KODE PROMO
            </label>
          </div>
          <div class="total_purchasing">
            <label for="">ringkasan pembelian</label>
            <div class="total_promo">
              <label for="">Total Belanja</label>
            </div>
            <div class="total_product">
              <label for="">Total ( 1 Produk)</label>
              <div class="count">
                Rp.40
              </div>
            </div>
            <div class="total_product">
              <label for="">Total Ongkos Kirim</label>
              <div class="count">
                Rp.40
              </div>
            </div>
            <div class="total_product">
              <label for="">Asuransi Pengiriman</label>
              <div class="count">
                Rp.40
              </div>
            </div>
            <div class="total_promo">
              <label for="">Potongan Promo</label>
            </div>
            <div class="total_product">
              <label for="">Potongan Produk</label>
              <div class="count">
                Rp.40
              </div>
            </div>
            <div class="total_product">
              <label for="">Potongan Ongkir</label>
              <div class="count">
                Rp.40
              </div>
            </div>
            <div class="total_product">
              <label for="">Biaya Pelayanan</label>
              <div class="count">
                Rp.40
              </div>
            </div>
            <div class="total_price">
              <label for="">Total Harga</label>
              <div class="count">
                Rp.2
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-6">
          <div class="method_payment">
            <div class="method_payment_label">
              metode pembayaran
            </div>
            <div class="row mt-4">
              <div class="col-md-6">
               <router-link to="#">
                <b-button class="pnom-btn-red w-100">
                  c.o.d
                </b-button>
               </router-link>
              </div>
              <div class="col-md-6">
                <router-link to="#">
                  <b-button class="pnom-btn-red w-100">
                    qris
                  </b-button>
                 </router-link>
              </div>
              <div class="col-md-12 mt-5">
                <router-link to="#">
                  <b-button class="pnom-btn-red w-100">
                    proses pesanan
                  </b-button>
                 </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-ecommerce/>
  </div>
</template>

<script>
export default {
  name:'PageCheckout',
  data() {
    return {
      sendDropshipper: false,
      locationDropshipper: false,
      saveLocationDropshipper: false,
      formData:{
        locationDropshipper: ''
      }
    }
  },
  methods: {
    onChangeDropshipper(checked) {
      this.sendDropshipper = checked
    },

    editedLocationDropshipper() {
      this.locationDropshipper = true
      this.saveLocationDropshipper = true
    },

    savedLocationDropshipper() {
      this.saveLocationDropshipper = false
      this.locationDropshipper = false
    }
  }
}
</script>
