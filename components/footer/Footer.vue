<template>
  <div>
    <div v-if="$route.path !== `/user/account`" class="footer-newslater">
      <b-row>
        <b-col md="12">
          <div class="footer-newslater_title">subscribe to our newsletter</div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="4">
          <b-form-group
            id="input-group-1"
            label="Nama Lengkap"
            label-for="input-1"
            class="label"
          >
            <b-form-input
              id="input-1"
              placeholder="Ketikan Nama Lengkap"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            id="input-group-1"
            label="Nomor Telepon"
            label-for="input-1"
            class="label"
          >
            <b-form-input
              id="input-1"
              type="number"
              placeholder="Ketikan Nomor Telepon"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            id="input-group-1"
            label="E-mail"
            label-for="input-1"
            class="label"
          >
            <b-form-input
              id="input-1"
              type="email"
              placeholder="Ketikan Email"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <div class="footer-newslater_action">
            <b-button class="pnom-btn-yellow">SUBSCRIBE</b-button>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="footer">
      <b-row>
        <b-col md="3" class="footer_about">
          <label for="">About Us</label>
          <div class="custom_html" v-html="aboutUs.value"></div>
          <div
            class="location"
            v-for="(itemContact, indexContact) in contactData"
            :key="indexContact"
          >
            {{ itemContact.value }}
          </div>
        </b-col>
        <b-col md="3" class="footer_category">
          <label for="">Category</label>
          <ul class="list_store">
            <li
              v-for="(itemCategory, indexCategory) in dataCategory"
              :key="indexCategory"
            >
              <a :href="itemCategory.slug" target="_blank">
                {{ itemCategory.name }}
              </a>
            </li>
          </ul>
        </b-col>
        <b-col md="2" class="footer_store_information">
          <div class="">
            <label for="">Our Store</label>
            <ul class="list_store">
              <li
                v-for="(itemStore, indexStore) in onlineStore"
                :key="indexStore"
              >
                <a :href="itemStore.value" target="_blank">
                  {{ itemStore.name }}
                </a>
              </li>
            </ul>
          </div>
          <div class="">
            <label for="">Information</label>
            <ul class="list_information">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Order & Returns</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </b-col>
        <b-col md="4" class="footer_maps">
          <div class="maps w-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15810.054677400469!2d111.4809527!3d-7.8411819!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e799f9d4c43f839%3A0x26cf51ebbc048b5b!2sPnomsticklite%20Sticker%20Cutting%20%26%20Decal%20Manufaktur!5e0!3m2!1sid!2sid!4v1702477419577!5m2!1sid!2sid"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="footer_content">
      <div class="footer_content_identitas">
        Copyright © 2024 All rights reserved | This template is made with by
        Rakaro Creative Agency
      </div>
    </div>
  </div>
</template>

<script>
import { crudMethods } from "~/store/helpers";

export default {
  name: "Footer",
  data() {
    return {
      aboutUs: {},
      contactData: {},
      onlineStore: {},
      dataCategory: [],
    };
  },
  mounted() {
    this.getDataAboutUs();
    this.getDataStore();
    this.getDataContact();
    this.getListCategory();
  },
  methods: {
    ...crudMethods,
    async getDataAboutUs() {
      try {
        let response = await this.getData({
          url: `/v1.0/about-us`,
        });
        this.aboutUs = response?.data?.data;
      } catch (error) {
        console.error(JSON.stringify(error));
      }
    },
    async getDataStore() {
      try {
        let response = await this.getData({
          url: `/v1.0/online-store`,
        });
        this.onlineStore = response?.data?.data;
      } catch (error) {
        console.error(JSON.stringify(error));
      }
    },
    async getDataContact() {
      try {
        let response = await this.getData({
          url: `/v1.0/contact`,
        });
        this.contactData = response?.data?.data;
      } catch (error) {
        console.error(JSON.stringify(error));
      }
    },
    async getListCategory() {
      try {
        let response = await this.getData({
          url: `/v1.0/category`,
        });
        this.dataCategory = response?.data?.data;
      } catch (error) {
        console.error(JSON.stringify(error));
      }
    },
  },
};
</script>
