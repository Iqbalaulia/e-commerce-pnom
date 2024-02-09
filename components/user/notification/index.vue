<template>
  <div class="my_notification">
    <div class="my_notification_title">pusat notifikasi</div>
    <div class="my_notification_content">
      <div class="my_notification_content_title">notifikasi Email</div>
      <ul>
        <li>
          <div>
            <div class="title">notifikasi email</div>
          </div>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            class="checkbox-notification"
            unchecked-value="not_accepted"
          >
          </b-form-checkbox>
        </li>
        <li>
          <div>
            <div class="title">Status Pesanan</div>
            <div class="sub_title">
              Beritahu saya bila ada update mengenai pesanan saya, termasuk
              semua informasi mengenai pembayarannya.
            </div>
          </div>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            class="checkbox-notification"
            unchecked-value="not_accepted"
          >
          </b-form-checkbox>
        </li>
        <li>
          <div>
            <div class="title">Email Berlangganan</div>
            <div class="sub_title">
              Kirimkan ke saya notifikasi mengenai update produk, trend dan
              produk-produk dengan tawaran terbaik.
            </div>
          </div>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            class="checkbox-notification"
            unchecked-value="not_accepted"
          >
          </b-form-checkbox>
        </li>
        <li>
          <div>
            <div class="title">Event & Promo</div>
            <div class="sub_title">
              Beritahu saya bila ada Promo yang sedang berlangsung dan Event
              yang akan datang
            </div>
          </div>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            class="checkbox-notification"
            unchecked-value="not_accepted"
          >
          </b-form-checkbox>
        </li>
        <li>
          <div>
            <div class="title">Personalisasi Konten</div>
            <div class="sub_title">
              Kirimkan ke saya mengenai update personal (contoh; kado ulang
              tahun untuk Anda)
            </div>
          </div>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            class="checkbox-notification"
            unchecked-value="not_accepted"
          >
          </b-form-checkbox>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyNotificationUser",
};
</script>
