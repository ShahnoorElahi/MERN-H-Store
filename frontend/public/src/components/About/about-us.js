// import "../styles.css";
// import HeaderMini from "./header-mini";
// import Footer from "./footer";
import React, { useState } from "react";
// import "../App.css"


export default function AboutUs() {
    return (
        <>
            {/* <HeaderMini /> */}

            <div class="d-sm-block d-none">
                <div class="container">
                    <div class="bg-white mx-auto search-menu hide-menu" id="search-menu">
                        <div class="row m-0">
                            <div class="col-lg-3 menu-left">
                                <div class="search-suggestions my-3">
                                    <h6 class="ibm-plex text-uppercase font-weight-bold my-2">Search Suggestions</h6>
                                    <ul class="list-group list-group-flush bg-transparent" id="search_tags"></ul>
                                </div>
                            </div>
                            <div class="col-lg-9 product-matches">
                                <div class="row">
                                    <div class="col-12 mt-1">
                                        <h6 class="ibm-plex text-uppercase ibm-plex text-uppercase my-2 font-weight-bold">product matches</h6>
                                        <p></p>
                                    </div>
                                </div>
                                <div class="row pt-3 px-5" id="search_result"></div>
                            </div>
                        </div>
                        <div class="row bg-dark p-1 m-0">
                            <div class="col-12 text-center text-dark menu-footer">
                                <p class="mb-0"><small></small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-xxl mt-md-0 mt-5 pt-4 mmbl-65">
                <nav aria-label="breadcrumb" class="mt-md-0 mt-3">
                    <ol class="breadcrumb bg-white rounded-0 border-bottom padding-mobile-view">
                        <li class="breadcrumb-item">
                            <a href="index.html" class="text-dark ">Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="javascript:;">About Us</a>
                        </li>
                    </ol>
                </nav>
            </div>

            <div class="banner-bg mb-3">
                <div class="container-xxl">
                    <div class="position-relative">
                    </div>
                </div>
               
            </div>
            <div class="container-xxl" id="inner-pages">
                <div class="bg-white border-radius12 p-3">
                    <div class="">


                       

                            <div class="row my-0">
                                <div class="col-md-12 mx-auto d-block">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1 class="text-capitalize text-center">Discover your Favorite Digital Marketplace</h1>
                                            <p>We believe in values and connecting with our customers. Hamza Store is an innovative market place that brings the top essential items to your doorstep. From Home and Living Accessories, Kids Toys, Wall Clocks to Fashion Accessories, we aim to provide you with a pleasant and reliable shopping experience. Each product offered by Hamza Store strives to create a unique impact on its user. Ultimately, we formed the policy of satisfaction which helps in building positive growth.</p>
                                            <p>Online shopping in Pakistan has become more convenient with us. Hamza Store provides quality products and effective customer service to build a long trustable relationship. With thousands of products, you can explore a flexible service just at Hamza Store. Additionally, you can enjoy weekly discounts, coupons, lucky draws, and free delivery all over Pakistan on a purchase of Rs. 5000 and above. Happy Shopping.</p>
                                            <h4>Our Top Product Categories</h4>
                                            <ul>
                                                <li><a href="shop.html">Shop</a></li>
                                                <li><a href="wall-clocks.html">Wall Clocks</a></li>
                                                <li><a href="womens-fashion.html">Women's Fashion</a></li>
                                                <li><a href="mobile-accessories.html">Mobile Accessories</a></li>
                                                <li><a href="baby-kids-toys.html">Baby, Kids & Toys</a></li>
                                                <li><a href="home-living.html">Home & Living</a></li>
                                                <li><a href="kitchen-accessories.html">Kitchen Accessories</a></li>
                                                <li><a href="health-fitness.html">Health & Fitness</a></li>
                                                <li><a href="tool-kits.html">Tool Kits</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="counter" class="row my-4">
                                        <div class="col-md-4 col-6 text-center">
                                            <div class="card-box bg-primary py-3 px-4">
                                                <h2 class="text-white mb-3"><span class="counter-value" data-count="50000">0</span></h2>
                                                <p class="text-capitalize text-white font-size18">Satisfied Customers</p>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-6 text-center">
                                            <div class="card-box bg-primary py-3 px-4">
                                                <h2 class="text-white mb-3"><span class="counter-value" data-count="200">0</span></h2>
                                                <p class="text-capitalize text-white font-size18">Cities</p>
                                            </div>
                                        </div>
                                        <div class="col-md-4 col-6 mx-auto mt-md-0 mt-4 text-center">
                                            <div class="card-box bg-primary py-3 px-4">
                                                <h2 class="text-white mb-3 counter-value" data-count="1000">0</h2>
                                                <p class="text-capitalize text-white font-size18">Products</p>
                                            </div>
                                        </div>
                                    </div>            </div>
                            </div>


                
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}
