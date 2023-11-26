<template>
    <div class="register">
        <header-login/>
        <div class="register_content">
            <div class="container-fluid">
                <div class="row d-flex align-items-center">
                    <div class="col-md-8">
                        <div class="background-register"/>
                    </div>
                    <div class="col-md-4">
                        <div class="section_register_form">
                            <b-row>
                                <b-col md="12" class="d-flex justify-content-center">
                                    <div class="pnom-form_header">
                                        <div class="title p-blue-9 text-center">Daftar</div>
                                        <div class="sub-title">
                                            Sudah punya akun <router-link to="/login">Masuk</router-link>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col md="12">
                                    <div class="pnom-form_content">
                                        <div class="mt-4">
                                            <label for="">Nama Lengkap: </label>
                                            <b-form-input placeholder="Nama Lengkap"/>
                                        </div>
                                        <div class="mt-4">
                                            <label for="">Username: </label>
                                            <b-form-input placeholder="Username"/>
                                        </div>
                                        <div class="mt-4">
                                            <label for="">Email: </label>
                                            <b-form-input placeholder="email"/>
                                        </div>
                                        <div class="mt-4">
                                            <label for="">Nomor HP: </label>
                                            <b-form-input placeholder="Nomor HP"/>
                                        </div>
                                        <div class="mt-4">
                                            <label for="">Password: </label>
                                            <b-input-group>
                                                <b-form-input placeholder="Password"></b-form-input>
                                                <b-input-group-append>
                                                    <b-input-group-text>
                                                        <b-icon icon="eye-fill" />
                                                      </b-input-group-text>                                            
                                                </b-input-group-append>
                                              </b-input-group>
                                        </div>
                                        <div class="mt-4">
                                            <label for="">Konfirmasi Password: </label>
                                            <b-input-group>
                                                <b-form-input placeholder="Konfirmasi Password"></b-form-input>
                                                <b-input-group-append>
                                                    <b-input-group-text>
                                                        <b-icon icon="eye-fill" />
                                                      </b-input-group-text>                                            
                                                </b-input-group-append>
                                              </b-input-group>
                                        </div>
                                        <div class="mt-4 mb-4">
                                            <b-form-checkbox
                                                id="checkbox-1"
                                                name="checkbox-1"
                                                value="accepted"
                                                unchecked-value="not_accepted"
                                                >
                                                Dengan ini saya menerima <router-link class="href-data" to="#"> Syarat & Ketentuan</router-link> 
                                                serta <router-link class="href-data" to="#">Kebijakan Privasi</router-link> dari Pnomsticklite
                                            </b-form-checkbox>
                                        </div>
                                        <b-button variant="primary" class="btn-pnom-primary w-100">DAFTAR</b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-login/>
    </div>
</template>

<script>
export default {
    name:'DaftarPage',
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    components:{

    }
}
</script>