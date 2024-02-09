<template>
  <div class="my_account">
    <div class="my_account_title">Akun saya</div>
    <div class="row">
      <div class="col-md-4">
        <div class="my_account_images">
          <img
            src="~/assets/images/recomanded/recomanded-1.png"
            alt="category-1"
          />
          <div class="upload_button">
            <b-form-file plain />
            Upload File
          </div>
          <div class="size">
            <div class="size_images">Ukuran Gambar : Maks 1 MB</div>
            <div class="size_formats">Format Gambar : JPG, PNG</div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <b-form-group
          label-cols="4"
          label-cols-lg="3"
          label="Nama"
          label-for="input-default"
        >
          <b-form-input id="input-default"></b-form-input>
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="3"
          label="Username"
          label-for="input-default"
        >
          <b-form-input id="input-default"></b-form-input>
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="3"
          label="Email"
          label-for="input-default"
        >
          <b-form-input id="input-default"></b-form-input>
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="3"
          label="No. Telp"
          label-for="input-default"
        >
          <b-form-input id="input-default"></b-form-input>
        </b-form-group>
        <b-form-group
          label-cols="4"
          label-cols-lg="3"
          label="Role"
          label-for="input-default"
        >
          <b-form-input id="input-default"></b-form-input>
        </b-form-group>
        <b-form-group label-cols="4" label-cols-lg="3" label="Jenis Kelamin">
          <b-form-radio-group
            :options="['Laki - laki', 'Perempuan']"
          ></b-form-radio-group>
        </b-form-group>
        <b-form-group label-cols="4" label-cols-lg="3" label="Tanggal Lahir">
          <b-form-datepicker
            size="lg"
            id="example-datepicker"
          ></b-form-datepicker>
        </b-form-group>
        <b-form-group label-cols="4" label-cols-lg="3" label="Password">
          <b-button class="btn-primary">Ubah Password</b-button>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserMyAccount",
};
</script>
