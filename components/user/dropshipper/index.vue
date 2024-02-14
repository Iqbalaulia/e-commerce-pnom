<template>
  <div class="my_dropshipper">
    <b-tabs class="tabs_dropshipper">
      <b-tab class="data_tabs" title="Semua Pesanan" active>
        <div class="search_dropshipper">
          <b-input-group class="input-search">
            <b-form-input
              placeholder="Temukan Pesanan Kamu Disini Berdasarkan No Pesanan atau Nama Produk"
              class="form-input"
            ></b-form-input>
            <b-input-group-append>
              <b-button class="button-search">Cari</b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
        <div class="upload_data">
          <b-button class="btn-primary">Upload AWB</b-button>
          <b-button class="ml-2 btn-outline-primary">Export</b-button>
        </div>
        <div
          v-for="(item, index) in mockDataDropshipper.all_order"
          :key="index"
        >
          <div class="data_tabs_list">
            <div class="row">
              <div class="col-md-3">
                <b-img-lazy
                  class="images-cart"
                  :src="item.images"
                  alt="Responsive image"
                />
              </div>
              <div class="col-md-9">
                <div class="data_tabs_information">
                  <div class="title">
                    Striping Beat Pelindung Dashboard Tankpad Stiker Beat Deluxe
                    2020 2021 2022 2023 Stiker Motor Keren Variasi
                    <span class="status">dikirim</span>
                  </div>
                  <div class="variasi">Variasi : P001, TIPIS</div>
                  <div class="number_order">No Pesanan : PNS74676477</div>
                  <div class="description">
                    <div class="description_text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </div>
                    <div class="description_nominal">
                      <div class="discount">Rp59.500</div>
                      <div class="total">Rp40.500</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="count_order">
            <div class="row">
              <div class="col-md-12 count_order_total">
                <div>
                  <b-button class="btn-primary">Berikan Ulasan</b-button>
                  <b-button class="ml-3 btn-outline-primary"
                    >Beli lagi</b-button
                  >
                </div>
                <div class="d-flex align-items-center">
                  <label class="mb-0 mr-2">total pesanan: </label>
                  <div class="total_count">Rp. 40.500</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-tab>
      <b-tab title="Lacak Pesanan">
        <div class="search_dropshipper">
          <b-input-group class="input-search">
            <b-form-input
              placeholder="Temukan Pesanan Kamu Disini Berdasarkan No Pesanan atau Nama Produk"
              class="form-input"
            ></b-form-input>
            <b-input-group-append>
              <b-button class="button-search">Cari</b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
        <div class="upload_data">
          <b-button class="btn-primary">Upload AWB</b-button>
          <b-button class="ml-2 btn-outline-primary">Export</b-button>
        </div>
        <div
          v-for="(item, indexTracking) in mockDataDropshipper.tracking_order"
          :key="indexTracking"
        >
          <div class="data_tabs_list">
            <div class="row">
              <div class="col-md-3">
                <b-img-lazy
                  class="images-cart"
                  :src="item.images"
                  alt="Responsive image"
                />
              </div>
              <div class="col-md-9">
                <div class="data_tabs_information">
                  <div class="title">
                    {{item.title}}
                    <span class="status">{{item.status_order}}</span>
                  </div>
                  <div class="variasi">Variasi : {{item.variant}}</div>
                  <div class="number_order">No Pesanan : {{item.number_order}}</div>
                  <div class="description">
                    <div class="description_text">
                      {{item.desription}}
                    </div>
                    <div class="description_nominal">
                      <div class="discount">Rp {{ item.discount }}</div>
                      <div class="total">Rp{{item.total_after_discount }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="count_order">
            <div class="row">
              <div class="col-md-12 count_order_total">
                <div>
                  <b-button class="btn-primary">Berikan Ulasan</b-button>
                  <b-button class="ml-3 btn-outline-primary"
                    >Beli lagi</b-button
                  >
                </div>
                <div class="d-flex align-items-center">
                  <label class="mb-0 mr-2">total pesanan: </label>
                  <div class="total_count">Rp. {{ item.total_order }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-tab>
      <b-tab title="Cek Tagihan">
        <div class="search_dropshipper">
          <b-input-group class="input-search">
            <b-form-input
              placeholder="Temukan Pesanan Kamu Disini Berdasarkan No Pesanan atau Nama Produk"
              class="form-input"
            ></b-form-input>
            <b-input-group-append>
              <b-button class="button-search">Cari</b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
        <div class="upload_data">
          <b-button class="btn-primary">Upload AWB</b-button>
          <b-button class="ml-2 btn-outline-primary">Export</b-button>
        </div>
        <div
          v-for="(item, indexBill) in mockDataDropshipper.bill_order"
          :key="indexBill"
        >
          <div class="data_tabs_list">
            <div class="row">
              <div class="col-md-3">
                <b-img-lazy
                  class="images-cart"
                  :src="item.images"
                  alt="Responsive image"
                />
              </div>
              <div class="col-md-9">
                <div class="data_tabs_information">
                  <div class="title">
                    {{item.title}}
                    <span class="status">{{item.status_order}}</span>
                  </div>
                  <div class="variasi">Variasi : {{item.variant}}</div>
                  <div class="number_order">No Pesanan : {{item.number_order}}</div>
                  <div class="description">
                    <div class="description_text">
                      {{item.desription}}
                    </div>
                    <div class="description_nominal">
                      <div class="discount">Rp {{ item.discount }}</div>
                      <div class="total">Rp{{item.total_after_discount }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="count_order">
            <div class="row">
              <div class="col-md-12 count_order_total">
                <div>
                  <b-button class="btn-primary">Berikan Ulasan</b-button>
                  <b-button class="ml-3 btn-outline-primary"
                    >Beli lagi</b-button
                  >
                </div>
                <div class="d-flex align-items-center">
                  <label class="mb-0 mr-2">total pesanan: </label>
                  <div class="total_count">Rp. {{ item.total_order }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
import { mockDataDropshipper } from "~/store/mock/mockData";
export default {
  name: "MyDropshipperUser",
  data() {
    return {
      mockDataDropshipper: mockDataDropshipper,
    };
  },
  methods: {},
};
</script>
