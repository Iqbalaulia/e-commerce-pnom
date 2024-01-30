<template>
  <div class="cart_product">
    <navbar/>
    <div class="cart_product_content">
      <div class="row">
        <div class="col-md-12">
          <div class="data-title">
            <div class="devider"></div>
            <label for="">keranjang</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="select_all">
            <b-form-checkbox
              id="checkbox-1"
              name="checkbox-1"
              value="accepted"
            >
              Pilih Semua
            </b-form-checkbox>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 show_cart">

        </div>
        <div class="col-md-12 show_cart" v-for="(cartItem, index) in mockDataCart" :key="index">
          <div class="show_cart_select mr-3">
            <b-form-checkbox
              id="checkbox-1"
              name="checkbox-1"
              value="accepted"
            />
            <b-img-lazy class="images-cart" src="https://picsum.photos/1024/400/?image=41" alt="Responsive image"/>
          </div>
          <div class="show_cart_information" >
            <label for="">
              Striping Beat Pelindung Dashboard Tankpad Stiker Beat Deluxe 2020 2021 2022 2023 Stiker Motor Keren Variasi
            </label>
            <div class="action_variant">
              <div class="variant">
                <label for="">
                  Variasi: P001, TIPIS
                </label>
                <div class="money">
                  Rp40.500
                </div>
              </div>
              <div class="delete_list">
                <b-button class="btn_trash">
                  <i class="far fa-trash-alt" />
                </b-button>
              </div>
            </div>
            <div class="action_cart">
              <b-form-textarea
                id="textarea-rows"
                placeholder="Tulis Catatan Untuk Produk Ini"
                rows="4"
                v-model="cartItem.notes"
              />

              <div class="action_button">
                <div class="btn_edit">
                  <b-button class="btn_edit">
                    <i class="far fa-edit"></i>
                  </b-button>
                </div>
                <div class="btn_whislist">
                  <b-button class="btn_whislist">
                    <i class="far fa-heart" />
                  </b-button>
                </div>
                <div class="btn_quantity">
                  <b-button class="btn_count-min">-</b-button>
                  <b-form-input v-model="cartItem.countProduct" class="input_quantity"/>
                  <b-button class="btn_count-plus">+</b-button>
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
        </div>
        <div class="col-md-4">
          <div class="total_purchasing">
            <label for="">ringkasan pembelian</label>
            <div class="total_product">
              <label for="">Total ( {{ mockDataCart.length }} Produk)</label>
              <div class="count">
                Rp.{{totalCalculatePrice}}
              </div>
            </div>
            <div class="total_promo">
              <label for="">Potongan Promo</label>
              <div class="count">
               - Rp.{{ nominalPromo }}
              </div>
            </div>
            <div class="total_price">
              <label for="">Total Harga</label>
              <div class="count">
                Rp.{{totalCalculatePrice - parseInt(nominalPromo)}}
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-md-custom">
          <div class="checkout">
            <router-link to="/checkout">
              <b-button class="btn_checkout">
                checkout
              </b-button>
            </router-link>
            <div class="whislist">
              <i class="far fa-heart" />
              Tambahkan Ke Wishlist
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-ecommerce/>
  </div>
</template>

<script>
import { mockDataCart } from '~/store/mock/mockData'
export default {
  name:'Cart',
  data() {
    return {
      mockDataCart:mockDataCart,
      nominalPromo:'20000'
    }
  },
  computed:{
    totalCalculatePrice() {
      return this.mockDataCart.reduce((total, product) => {
        return total + (parseInt(product.price) * parseInt(product.countProduct));
      }, 0)
    }
  }
}
</script>
