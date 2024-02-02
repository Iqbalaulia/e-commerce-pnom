<template>
  <div class="login">
    <header-login />
    <div class="login_content">
      <div class="container">
        <b-row>
          <b-col md="12">
            <div class="login_content_form">
              <div class="pnom-form">
                <b-row>
                  <b-col md="12" class="d-flex justify-content-center">
                    <div class="pnom-form_header">
                      <div class="title p-blue-9 text-center">masuk</div>
                      <div class="sub-title">
                        Belum punya akun
                        <router-link to="/daftar">Daftar</router-link>
                      </div>
                    </div>
                  </b-col>
                  <b-col md="12">
                    <div class="pnom-form_content">
                      <div>
                        <label for="">Username / Email: </label>
                        <b-form-input placeholder="Enter your name" />
                      </div>
                      <div class="mt-2">
                        <label for="">Password: </label>
                        <b-form-input placeholder="Enter your name" />
                      </div>
                      <div class="forgot-password text-right mt-2">
                        <router-link to="#">Lupa Password</router-link>
                      </div>

                      <b-button variant="primary" class="btn-pnom-primary w-100"
                        >MASUK</b-button
                      >
                    </div>
                  </b-col>
                </b-row>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
    <footer-login />
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {};
  },
  components: {},
};
</script>
