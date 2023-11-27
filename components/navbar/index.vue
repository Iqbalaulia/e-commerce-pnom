<template>
    <div class="pnom-navbar">
        <div class="pnom-navbar_header-1">
            <div class="container">
                <b-navbar>                
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
                      <b-navbar-nav>
                        <b-nav-item href="#">
                            <i class="fas fa-phone mr-1" />
                            +62851 6255 1908
                        </b-nav-item>
                        <b-nav-item href="#">
                            <i class="fas fa-envelope mr-1" />
                            admin@pnomsitcklite.id
                        </b-nav-item>
                        <b-nav-item href="#">
                            <i class="fas fa-location-dot mr-1" />
                            Ponorogo - East Java - Indonesia
                        </b-nav-item>
                      </b-navbar-nav>
                
                      <b-navbar-nav class="ml-auto">                    
                        <b-nav-item href="/daftar">Sign Up</b-nav-item>
                        <b-nav-item href="/login">Sign In</b-nav-item>

                      </b-navbar-nav>
                    </b-collapse>
                  </b-navbar>
            </div>
        </div>
        <div class="pnom-navbar_header-2">
            <div class="container-fluid">
                <b-navbar>
                    <b-navbar-nav>
                        <b-nav-item href="/">
                            <img class="logo" src="~/assets/images/logo/logo-pnom-white.png" alt="logo-white">
                        </b-nav-item>
                    </b-navbar-nav>
                    <b-navbar-nav>
                        <b-input-group class="input-search" prepend="Kategori Produk">
                            <b-form-input placeholder="Temukan Produk Disini" class="form-input"></b-form-input>
                            <b-input-group-append>
                              <b-button class="button-search">Cari</b-button>
                            </b-input-group-append>
                          </b-input-group>
                    </b-navbar-nav>
                    <b-navbar-nav>
                        <div class="badge-pnom">
                            <b-badge class="badge-wishlist" variant="danger">
                                <span>99</span>
                            </b-badge>
                            <b-nav-item href="#" class="wishlist text-center">
                                <i class="fas fa-heart" />
                                <div class="wishlist_title text-white">Your Wishlist</div>
                            </b-nav-item>
                        </div>
                        <div class="badge-pnom">
                            <b-badge class="badge-cart" variant="danger">
                                <span>99</span>
                            </b-badge>
                            <b-nav-item href="#" class="cart text-center">
                                <i class="fas fa-cart-shopping" />
                                <div class="cart_title text-white">Your Cart</div>
                            </b-nav-item>
                        </div>
                    </b-navbar-nav>
                </b-navbar>
            </div>
        </div>
        <div class="pnom-navbar_header-3">
            <div class="container">
                <b-navbar>                
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
                      <b-navbar-nav>
                        <b-nav-item href="#">
                           Home
                        </b-nav-item>
                        <b-nav-item href="#">
                            Tentang Kami
                        </b-nav-item>
                        <b-nav-item href="#">
                           Kategori
                        </b-nav-item>
                        <b-nav-item href="#">
                            Kontak
                         </b-nav-item>
                         <b-nav-item href="#">
                            Promo
                         </b-nav-item>
                         <b-nav-item href="#">
                            Reseller
                         </b-nav-item>
                      </b-navbar-nav>
                    </b-collapse>
                  </b-navbar>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Navbar',
    data() {
        return {
            
        }
    },
    methods:{
        
    },
    components:{

    }
}
</script>