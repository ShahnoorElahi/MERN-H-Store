import React, { useState } from "react";
// import "../App.css"

export default function FBlogs() {

    return (
        <div>
            <section class="py-3 bg-white">
                <div class="container-xxl px-0">
                    <div class="text-center w-100">
                        <div class="text-uppercase font-weight-semi-bold text-primary font-size28">Latest news &amp; blogs</div>
                    </div>
                    <div class="swiper-container py-md-4 mt-md-0 mt-2 swiper-container-initialized swiper-container-horizontal" id="blogsSlider">
                        <div class="swiper-wrapper" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                            <div class="swiper-slide text-start bg-light-gray-blog border-radius16 p-2 swiper-slide-active" style={{width: '424.222px', marginRight: '10px'}}>
                                <a href="https://www.hamzastore.pk/blog/best-online-shopping-experience-in-pakistan-with-hamzastorepk" title="Best Online Shopping Experience in Pakistan with Hamzastore.pk" class="text-decoration-none">
                                    <div class="homeBlogBox">
                                        <div class="homeBlogBoxImg">
                                            <img data-src="images/noimage.jpg" class="img-fluid border-radius16 no-src lazyloaded" width="420" height="280" alt="Best Online Shopping Experience in Pakistan with Hamzastore.pk" src="images/noimage.jpg"/>
                                        </div>
                                        <div class="homeBlogBoxContent mt-3 mb-3 px-2">
                                            <div class="bg-white rounded-pill d-inline-block text-start font-size12 font-weight-regular px-2 py-1">
                                                31 Aug 2024                                        </div>
                                            <div class="font-size16 font-weight-medium text-start title-height my-2">
                                                Best Online Shopping Experience in Pakis...                                        </div>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide text-start bg-light-gray-blog border-radius16 p-2 swiper-slide-next" style={{width: '424.222px', marginRight: '10px'}}>
                                <a href="https://www.hamzastore.pk/blog/upgrade-your-fitness-journey-with-hamza-store-premium-gym-equipment" title="Upgrade Your Fitness Journey with Hamza Store Premium Gym Equipment" class="text-decoration-none">
                                    <div class="homeBlogBox">
                                        <div class="homeBlogBoxImg">
                                            <img data-src="images/noimage.jpg" class="img-fluid border-radius16 no-src lazyloaded" width="420" height="280" alt="Upgrade Your Fitness Journey with Hamza Store Premium Gym Equipment" src="images/noimage.jpg"/>
                                        </div>
                                        <div class="homeBlogBoxContent mt-3 mb-3 px-2">
                                            <div class="bg-white rounded-pill d-inline-block text-start font-size12 font-weight-regular px-2 py-1">
                                                01 Aug 2024                                        </div>
                                            <div class="font-size16 font-weight-medium text-start title-height my-2">
                                                Upgrade Your Fitness Journey with Hamza ...                                        </div>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide text-start bg-light-gray-blog border-radius16 p-2" style={{width: '424.222px', marginRight: '10px'}}>
                                <a href="https://www.hamzastore.pk/blog/top-10-musthave-kitchen-tools-for-every-home-cook" title="Top 10 Must-Have Kitchen Tools for Every Home Cook" class="text-decoration-none">
                                    <div class="homeBlogBox">
                                        <div class="homeBlogBoxImg">
                                            <img data-src="images/blogs/4191Top10Must-HaveKitchenToolsForEveryHomeCook.webp" class="img-fluid border-radius16 no-src lazyloaded" width="420" height="280" alt="Top 10 Must-Have Kitchen Tools for Every Home Cook" src="images/blogs/4191Top10Must-HaveKitchenToolsForEveryHomeCook.webp"/>
                                        </div>
                                        <div class="homeBlogBoxContent mt-3 mb-3 px-2">
                                            <div class="bg-white rounded-pill d-inline-block text-start font-size12 font-weight-regular px-2 py-1">
                                                24 Jun 2024                                        </div>
                                            <div class="font-size16 font-weight-medium text-start title-height my-2">
                                                Top 10 Must-Have Kitchen Tools for Every...                                        </div>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide text-start bg-light-gray-blog border-radius16 p-2" style={{width: '424.222px', marginRight: '10px'}}>
                                <a href="https://www.hamzastore.pk/blog/shop-smarter-not-harder-online-shopping-hacks-for-2024" title="Shop Smarter, Not Harder | Online Shopping Hacks for 2024" class="text-decoration-none">
                                    <div class="homeBlogBox">
                                        <div class="homeBlogBoxImg">
                                            <img data-src="images/blogs/1367ShopSmarterNotHarder.jpg" class="img-fluid border-radius16 no-src lazyloaded" width="420" height="280" alt="Shop Smarter, Not Harder | Online Shopping Hacks for 2024" src="images/blogs/1367ShopSmarterNotHarder.jpg"/>
                                        </div>
                                        <div class="homeBlogBoxContent mt-3 mb-3 px-2">
                                            <div class="bg-white rounded-pill d-inline-block text-start font-size12 font-weight-regular px-2 py-1">
                                                15 Apr 2024                                        </div>
                                            <div class="font-size16 font-weight-medium text-start title-height my-2">
                                                Shop Smarter, Not Harder | Online Shoppi...                                        </div>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide text-start bg-light-gray-blog border-radius16 p-2" style={{width: '424.222px', marginRight: '10px'}}>
                                <a href="https://www.hamzastore.pk/blog/best-ramadan-kitchen-product-in-pakistan-hamzastore" title="Best Ramadan Kitchen Product in Pakistan | Hamzastore" class="text-decoration-none">
                                    <div class="homeBlogBox">
                                        <div class="homeBlogBoxImg">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/3301BestRamadanKitchenProductInPakistan.webp" class="img-fluid border-radius16 no-src lazyloaded" width="420" height="280" alt="Best Ramadan Kitchen Product in Pakistan | Hamzastore" src="https://www.hamzastore.pk/images/blogs/3301BestRamadanKitchenProductInPakistan.webp"/>
                                        </div>
                                        <div class="homeBlogBoxContent mt-3 mb-3 px-2">
                                            <div class="bg-white rounded-pill d-inline-block text-start font-size12 font-weight-regular px-2 py-1">
                                                22 Feb 2024                                        </div>
                                            <div class="font-size16 font-weight-medium text-start title-height my-2">
                                                Best Ramadan Kitchen Product in Pakistan...                                        </div>

                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                </div>
            </section>
        </div>
    );
}