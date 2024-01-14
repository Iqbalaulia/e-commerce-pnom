<template>
    <div class="pnom-filter-recomanded">
        <div class="pnom-filter-recomanded_title">
           <div class="data-title">
                <div class="devider"></div>
                <label for="">rekomendasi</label>
           </div>
           <div class="another-link">
               <a href="#">
                    lihat lainnya
               </a> 
           </div>
        </div>

        <div class="pnom-filter-recomanded_content">
            <b-row>
                <b-col md="3">
                    <a href="#" class="section_content">
                        <img class="images-recomanded" src="~/assets/images/recomanded/recomanded-1.png" alt="category-1">
                        <div class="section_content_title">
                            tankpad vario 160 pelindung  dashboard motor
                        </div>
                        <div class="section_content_rupiah">
                            Rp 24.000 - 99.000
                        </div>
                        <div class="section_content_rating">
                            <div class="star-rating">
                                <span
                                    v-for="star in [1, 2, 3, 4, 5]"
                                    :key="star"
                                    class="star"
                                >
                                    ★
                                </span>
                            </div>
                            <div class="total">1.2K Terjual/bulan</div>
                        </div>
                    </a>
                </b-col>
                <b-col md="3">
                    <a href="#" class="section_content">
                        <img class="images-recomanded" src="~/assets/images/recomanded/recomanded-2.png" alt="category-1">
                        <div class="section_content_title">
                            tankpad pelindung dashboard motor beat esp 2017 - 2019
                        </div>
                        <div class="section_content_rupiah">
                            Rp 24.000 - 99.000
                        </div>
                        <div class="section_content_rating">
                            <div class="star-rating">
                                <span
                                    v-for="star in [1, 2, 3, 4, 5]"
                                    :key="star"
                                    class="star"
                                >
                                    ★
                                </span>
                            </div>
                            <div class="total">1.2K Terjual/bulan</div>
                        </div>
                    </a>
                </b-col>
                <b-col md="3">
                    <a href="#" class="section_content">
                        <img class="images-recomanded" src="~/assets/images/recomanded/recomanded-3.png" alt="category-1">
                        <div class="section_content_title">
                            tankpad pelindung dashboard motor beat deluxe 2020 - 2023 ...
                        </div>
                        <div class="section_content_rupiah">
                            Rp 24.000 - 99.000
                        </div>
                        <div class="section_content_rating">
                            <div class="star-rating">
                                <span
                                    v-for="star in [1, 2, 3, 4, 5]"
                                    :key="star"
                                    class="star"
                                >
                                    ★
                                </span>
                            </div>
                            <div class="total">1.2K Terjual/bulan</div>
                        </div>
                    </a>
                </b-col>
                <b-col md="3">
                    <a href="#" class="section_content">
                        <img class="images-recomanded" src="~/assets/images/recomanded/recomanded-4.png" alt="category-1">
                        <div class="section_content_title">
                            108 pcs sticker random aes-thetic anti air untuk hp/laptop/
                        </div>
                        <div class="section_content_rupiah">
                            Rp 24.000 - 99.000
                        </div>
                        <div class="section_content_rating">
                            <div class="star-rating">
                                <span
                                    v-for="star in [1, 2, 3, 4, 5]"
                                    :key="star"
                                    class="star"
                                >
                                    ★
                                </span>
                            </div>
                            <div class="total">1.2K Terjual/bulan</div>
                        </div>
                    </a>
                </b-col>
            </b-row>
        </div>
    </div>
</template>


<script>
export default {
    name:'FilterRecomanded'
}
</script>