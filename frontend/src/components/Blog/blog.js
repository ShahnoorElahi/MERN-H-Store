// import "../styles.css";
// import HeaderMini from "./header-mini";
// import Footer from "./footer";
import React, { useState } from "react";
// import "../App.css"


export default function Blog1() {
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
                            <a href="javascript:;">Blog</a>
                        </li>
                    </ol>
                </nav>
            </div>

            <div class="container-xxl mt-md-0 mt-5 pt-md-0 pt-3">
                <nav aria-label="breadcrumb">
                    
                </nav>
                <div class="blogCategoryTitle">
                    <a class="d-inline-block font-size40" href="blog/category/general.html">General</a>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-md-5">
                        <a href="blog/1111-sale-in-pakistan-biggest-discount-offers-at-hamza-store.html" class="cursor-pointer">
                            <img src="images/blogs/683011.11-sale-blog-cover.webp" class="img-fluid w-100" alt="11.11 Sale in Pakistan: Biggest Discount Offers at Hamza Store" width="614" height="921" />
                        </a>
                    </div>
                    <div class="col-md-6 text-center my-auto">
                        <p class="my-2 font-size14 text-uppercase border-bottom border-dark font-weight-medium d-inline-block mb-0">General</p>
                        <br />
                        <a href="blog/1111-sale-in-pakistan-biggest-discount-offers-at-hamza-store.html" class="font-size40 sm-font18 text-uppercase text-decoration-none">
                            11.11 Sale in Pakistan: Biggest Discount Offers at Hamza Store                        </a>
                        <div class="font-size14 my-2">
                            01 Nov 2022                        </div>
                    </div>

                    <div class="col-12 my-md-5 my-3">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/best-online-shopping-experience-in-pakistan-with-hamzastorepk.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/noimage.jpg" class="img-fluid w-100 no-src lazyload" alt="Best Online Shopping Experience in Pakistan with Hamzastore.pk" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Best Online Shopping Experience in Pakistan with Hamzastore.pk</h3>
                                            <div class="my-2">
                                                31 Aug 2024                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/upgrade-your-fitness-journey-with-hamza-store-premium-gym-equipment.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/noimage.jpg" class="img-fluid w-100 no-src lazyload" alt="Upgrade Your Fitness Journey with Hamza Store Premium Gym Equipment" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Upgrade Your Fitness Journey with Hamza Store Premium Gym Equipment</h3>
                                            <div class="my-2">
                                                01 Aug 2024                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/top-10-musthave-kitchen-tools-for-every-home-cook.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/4191Top10Must-HaveKitchenToolsForEveryHomeCook.webp" class="img-fluid w-100 no-src lazyload" alt="Top 10 Must-Have Kitchen Tools for Every Home Cook" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Top 10 Must-Have Kitchen Tools for Every Home Cook</h3>
                                            <div class="my-2">
                                                24 Jun 2024                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/shop-smarter-not-harder-online-shopping-hacks-for-2024.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/1367ShopSmarterNotHarder.jpg" class="img-fluid w-100 no-src lazyload" alt="Shop Smarter, Not Harder | Online Shopping Hacks for 2024" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Shop Smarter, Not Harder | Online Shopping Hacks for 2024</h3>
                                            <div class="my-2">
                                                15 Apr 2024                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/best-ramadan-kitchen-product-in-pakistan-hamzastore.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/3301BestRamadanKitchenProductInPakistan.webp" class="img-fluid w-100 no-src lazyload" alt="Best Ramadan Kitchen Product in Pakistan | Hamzastore" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Best Ramadan Kitchen Product in Pakistan | Hamzastore</h3>
                                            <div class="my-2">
                                                22 Feb 2024                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/organize-and-decorate-your-personal-space-with-a-trusted-retailer-in-pakistan.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/4729OrganizeAndDecorateYourPersonalSpace.webp" class="img-fluid w-100 no-src lazyload" alt="Organize and Decorate your Personal Space with a Trusted Retailer in Pakistan" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Organize and Decorate your Personal Space with a Trusted Retailer in Pakistan</h3>
                                            <div class="my-2">
                                                26 Dec 2023                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/1111-sale-in-pakistan-for-the-best-deals-and-discounts.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/6602red_11_11_sale.webp" class="img-fluid w-100 no-src lazyload" alt="11.11 Sale in Pakistan for the Best Deals and Discounts" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">11.11 Sale in Pakistan for the Best Deals and Discounts</h3>
                                            <div class="my-2">
                                                10 Nov 2023                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/unlock-your-beauty-arsenal-makeup-musthaves-from-hamzastorepk.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/1967Unlock-Your-Beauty-Arsenal-Makeup-Must-Haves-from-Hamzastore.pk.webp" class="img-fluid w-100 no-src lazyload" alt="Unlock Your Beauty Arsenal: Makeup Must-Haves from Hamzastore.pk" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Unlock Your Beauty Arsenal: Makeup Must-Haves from Hamzastore.pk</h3>
                                            <div class="my-2">
                                                30 Aug 2023                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/spice-rack-organize-your-kitchen-essentials.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/1873Spice-Rack---Organize-Your-Kitchen-Essentials.webp" class="img-fluid w-100 no-src lazyload" alt="Spice Rack - Organize Your Kitchen Essentials" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Spice Rack - Organize Your Kitchen Essentials</h3>
                                            <div class="my-2">
                                                03 Jul 2023                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/kitchen-accessories-quick-recipes-with-these-kitchen-essentials.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/1267KitchenAccessoriesblog.webp" class="img-fluid w-100 no-src lazyload" alt="Kitchen Accessories: Quick Recipes With These Kitchen Essentials" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Kitchen Accessories: Quick Recipes With These Kitchen Essentials</h3>
                                            <div class="my-2">
                                                01 Jun 2023                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/tips-for-choosing-durable-and-longlasting-home-essentials.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/9099Tips-For-Choosing-Durable-and-long-lasting-home-essentials-blog.webp" class="img-fluid w-100 no-src lazyload" alt="Tips for Choosing Durable and Long-Lasting Home Essentials" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Tips for Choosing Durable and Long-Lasting Home Essentials</h3>
                                            <div class="my-2">
                                                01 Jun 2023                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/get-the-best-deals-on-mobile-accessories-online-in-pakistan.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/5676Get-The-Best-Deals-on-mobile-accessories-blog.webp" class="img-fluid w-100 no-src lazyload" alt="Get the Best Deals on Mobile Accessories Online in Pakistan" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Get the Best Deals on Mobile Accessories Online in Pakistan</h3>
                                            <div class="my-2">
                                                20 May 2023                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/revamp-your-style-trending-bathroom-accessories-in-pakistan.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/2466Revamp-Your-Style-blog.webp" class="img-fluid w-100 no-src lazyload" alt="Revamp Your Style: Trending Bathroom Accessories in Pakistan" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Revamp Your Style: Trending Bathroom Accessories in Pakistan</h3>
                                            <div class="my-2">
                                                18 May 2023                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/what-are-the-best-health-and-fitness-products.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/285138-What-Are-the-Best-Health-and-Fitness-Products.webp" class="img-fluid w-100 no-src lazyload" alt="What Are the Best Health and Fitness Products?" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">What Are the Best Health and Fitness Products?</h3>
                                            <div class="my-2">
                                                02 May 2023                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/beauty-essentials-best-makeup-accessories-in-pakistan.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/159337-Beauty-Essentials-Best-Makeup-Accessories-in-Pakistan.webp" class="img-fluid w-100 no-src lazyload" alt="Beauty Essentials: Best Makeup Accessories in Pakistan" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Beauty Essentials: Best Makeup Accessories in Pakistan</h3>
                                            <div class="my-2">
                                                02 May 2023                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/what-cooking-products-people-must-buy-online-in-2023.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/641536-What-Cooking-Products-People-Must-Buy-Online-in-2023.webp" class="img-fluid w-100 no-src lazyload" alt="What Cooking Products People Must Buy Online in 2023?" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">What Cooking Products People Must Buy Online in 2023?</h3>
                                            <div class="my-2">
                                                26 Apr 2023                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/-what-are-the-best-wall-decoration-products.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/361035-What-Are-The-Best-Wall-Decoration-Products.webp" class="img-fluid w-100 no-src lazyload" alt="What Are The Best Wall Decoration Products?" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">What Are The Best Wall Decoration Products?</h3>
                                            <div class="my-2">
                                                17 Apr 2023                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/summer-ready-find-the-latest-table-fans-price-in-pakistan.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/222834-Summer-Ready-Find-The-Latest-Table-Fans-Price-In-Pakistan.webp" class="img-fluid w-100 no-src lazyload" alt="Summer Ready: Find The Latest Table Fans Price In Pakistan" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Summer Ready: Find The Latest Table Fans Price In Pakistan</h3>
                                            <div class="my-2">
                                                13 Apr 2023                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/how-should-i-decorate-my-living-room-wall.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/775433-How-Should-I-Decorate-My-Living-Room-Wall.webp" class="img-fluid w-100 no-src lazyload" alt="How Should I Decorate My Living Room Wall?" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">How Should I Decorate My Living Room Wall?</h3>
                                            <div class="my-2">
                                                22 Mar 2023                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/decorate-a-dining-room-on-a-budget.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/3311Decorate-A-Dining-Room-On-A-Budget.webp" class="img-fluid w-100 no-src lazyload" alt="Decorate A Dining Room On A Budget" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Decorate A Dining Room On A Budget</h3>
                                            <div class="my-2">
                                                28 Feb 2023                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/how-to-maximize-kitchen-storage-of-small-space.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/9442How-to-Maximize-Kitchen-Storage-of-Small-Space.webp" class="img-fluid w-100 no-src lazyload" alt="How to Maximize Kitchen Storage of Small Space?" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">How to Maximize Kitchen Storage of Small Space?</h3>
                                            <div class="my-2">
                                                20 Feb 2023                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/list-of-kitchen-essentials-you-need-in-2023.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/321826-List-Of-Kitchen-Essentials-You-Need-In-2023.webp" class="img-fluid w-100 no-src lazyload" alt="List Of Kitchen Essentials You Need In 2023" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">List Of Kitchen Essentials You Need In 2023</h3>
                                            <div class="my-2">
                                                31 Jan 2023                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/top-07-baking-tools-every-baker-needs.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/770125-Top-07-Baking-Tools-Every-Baker-Needs.webp" class="img-fluid w-100 no-src lazyload" alt="Top 07 Baking Tools Every Baker Needs" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Top 07 Baking Tools Every Baker Needs</h3>
                                            <div class="my-2">
                                                31 Jan 2023                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/say-goodbye-to-cracked-heels-with-these-home-remedies.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/71728-Say-Goodbye-to-Cracked-Heels-With-These-Home-Remedies.webp" class="img-fluid w-100 no-src lazyload" alt="Say Goodbye to Cracked Heels With These Home Remedies" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Say Goodbye to Cracked Heels With These Home Remedies</h3>
                                            <div class="my-2">
                                                31 Jan 2023                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/winter-season-find-what-to-buy-online-in-pakistan.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/667429-Winter-Season-Find-What-To-Buy-Online-In-Pakistan.webp" class="img-fluid w-100 no-src lazyload" alt="Winter Season: Find What To Buy Online In Pakistan" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Winter Season: Find What To Buy Online In Pakistan</h3>
                                            <div class="my-2">
                                                31 Jan 2023                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/why-do-you-need-them-laundry-baskets.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/986227-Laundry-Baskets-Why-Do-You-Need-Them.webp" class="img-fluid w-100 no-src lazyload" alt="Why Do You Need Them Laundry Baskets?" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Why Do You Need Them Laundry Baskets?</h3>
                                            <div class="my-2">
                                                14 Jan 2023                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/7-best-food-storage-containers-of-2023.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/68837-Best-Food-Storage-Containers-Of-2023.webp" class="img-fluid w-100 no-src lazyload" alt="7 Best Food Storage Containers Of 2023" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">7 Best Food Storage Containers Of 2023</h3>
                                            <div class="my-2">
                                                29 Dec 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/orange-juice-in-winter-how-effective-is-it.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/2281Orange-Juice-In-Winter-How-Effective-Is-It.webp" class="img-fluid w-100 no-src lazyload" alt="Orange Juice In Winter: How Effective Is It?" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Orange Juice In Winter: How Effective Is It?</h3>
                                            <div class="my-2">
                                                27 Dec 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/decorating-for-new-year-new-year-decoration-ideas.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/2142Decorating-For-New-Year---New-Year-Decoration-Ideas.webp" class="img-fluid w-100 no-src lazyload" alt="Decorating For New Year - New Year Decoration Ideas" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Decorating For New Year - New Year Decoration Ideas</h3>
                                            <div class="my-2">
                                                27 Dec 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/a-new-years-celebration-for-2023-what-you-need-to-know.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/7879A-New-Year's-Celebration-For-2023---What-You-Need-To-Know.webp" class="img-fluid w-100 no-src lazyload" alt="A New Year's Celebration For 2023 - What You Need To Know" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">A New Year's Celebration For 2023 - What You Need To Know</h3>
                                            <div class="my-2">
                                                23 Dec 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/the-home-essentials-of-2023-find-them-at-hamza-store.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/6001The-Home-Essentials-of-2023-–-Find-Them-at-Hamza-Store.webp" class="img-fluid w-100 no-src lazyload" alt="The Home Essentials of 2023 – Find Them at Hamza Store" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">The Home Essentials of 2023 – Find Them at Hamza Store</h3>
                                            <div class="my-2">
                                                23 Dec 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/cereal-dispenser-the-most-genius-invention.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/9581cereal-dispensor(1).webp" class="img-fluid w-100 no-src lazyload" alt="Cereal Dispenser: The Most Genius Invention!" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Cereal Dispenser: The Most Genius Invention!</h3>
                                            <div class="my-2">
                                                16 Dec 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/tissue-holders-add-convenience-to-your-life.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/1464Tissue-Holders---Add-Convenience-To-Your-Life!.webp" class="img-fluid w-100 no-src lazyload" alt="Tissue Holders - Add Convenience To Your Life!" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Tissue Holders - Add Convenience To Your Life!</h3>
                                            <div class="my-2">
                                                12 Dec 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/buy-wall-art-to-make-your-home-beautiful.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/28617-Buy-Wall-Art-To-Make-Your-Home-Beautiful.webp" class="img-fluid w-100 no-src lazyload" alt="Buy Wall Art To Make Your Home Beautiful" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Buy Wall Art To Make Your Home Beautiful</h3>
                                            <div class="my-2">
                                                24 Nov 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/a-musthave-accessories-you-should-own-winter-essentials-blog.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/375016-Winter-Essentials---A-Must-Have-Accessories-You-Should-Own.webp" class="img-fluid w-100 no-src lazyload" alt="A Must-Have Accessories You Should Own | Winter Essentials Blog" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">A Must-Have Accessories You Should Own | Winter Essentials Blog</h3>
                                            <div class="my-2">
                                                24 Nov 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/italian-pizza-the-essential-pizza-tools-you-need-.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/562ITALIAN-PIZZA.webp" class="img-fluid w-100 no-src lazyload" alt="Italian Pizza: The Essential Pizza Tools You Need" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Italian Pizza: The Essential Pizza Tools You Need</h3>
                                            <div class="my-2">
                                                25 Oct 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/things-to-consider-before-online-shopping-in-pakistan.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/6358THINGS-TO-CONSIDER.webp" class="img-fluid w-100 no-src lazyload" alt="Things to Consider Before Online Shopping in Pakistan" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Things to Consider Before Online Shopping in Pakistan</h3>
                                            <div class="my-2">
                                                22 Oct 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/vanity-mirror-you-cant-get-enough-of-them.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/506VANITY-MIRROR.webp" class="img-fluid w-100 no-src lazyload" alt="Vanity Mirror: You can't get enough of them!" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Vanity Mirror: You can't get enough of them!</h3>
                                            <div class="my-2">
                                                20 Oct 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/wall-stickers-lets-make-your-home-look-great.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/5867wallpapers.webp" class="img-fluid w-100 no-src lazyload" alt="Wall Stickers: Let’s Make Your Home Look Great" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Wall Stickers: Let’s Make Your Home Look Great</h3>
                                            <div class="my-2">
                                                17 Oct 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/how-to-bake-like-a-pro-with-baking-tools.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/2384Bake-like-a-pro.webp" class="img-fluid w-100 no-src lazyload" alt="How to Bake Like a Pro with Baking Tools" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">How to Bake Like a Pro with Baking Tools</h3>
                                            <div class="my-2">
                                                11 Oct 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/decorate-your-space-with-these-stunning-home-decor-ideas.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/1338Decorate-Your-Space-With-These-Stunning-Home-Decor-Ideas.webp" class="img-fluid w-100 no-src lazyload" alt="Decorate your Space with these Stunning Home Decor Ideas" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Decorate your Space with these Stunning Home Decor Ideas</h3>
                                            <div class="my-2">
                                                23 Sep 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/6-essential-cleaning-products-for-every-house.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/48926-Essential-Cleaning-Products.webp" class="img-fluid w-100 no-src lazyload" alt="6 Essential Cleaning Products For Every House" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">6 Essential Cleaning Products For Every House</h3>
                                            <div class="my-2">
                                                23 Sep 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/trendy-accessories-for-women-at-hamza-store.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/4497Trendy-Accessories-For-Women.webp" class="img-fluid w-100 no-src lazyload" alt="Trendy Accessories for Women At Hamza Store" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Trendy Accessories for Women At Hamza Store</h3>
                                            <div class="my-2">
                                                23 Sep 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/flat-vs-brush-straightener-which-is-the-best-hair-straightener.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/7693Flat-Vs-Brush-Straightner.webp" class="img-fluid w-100 no-src lazyload" alt="Flat vs. Brush Straightener: Which is the Best Hair Straightener?" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Flat vs. Brush Straightener: Which is the Best Hair Straightener?</h3>
                                            <div class="my-2">
                                                16 Sep 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/storage-organizers-a-way-to-clear-mess-effectively.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/6096Storage-Organizers-A-Way-To-Clear-Mess-Effectively.webp" class="img-fluid w-100 no-src lazyload" alt="Storage Organizers - A way to Clear Mess Effectively" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Storage Organizers - A way to Clear Mess Effectively</h3>
                                            <div class="my-2">
                                                16 Sep 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/travel-essentials-never-leave-the-house-without-these-essentials.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/1652Travel-Essentials-Never-Leave-The-House-Without-These-Essentials.webp" class="img-fluid w-100 no-src lazyload" alt="Travel essentials: Never leave the house without these essentials" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Travel essentials: Never leave the house without these essentials</h3>
                                            <div class="my-2">
                                                01 Sep 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/5-utmost-summer-essentials-refresh-your-day-.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/77875-Utmost-Summer-Essentials---Refresh-Your-Day.webp" class="img-fluid w-100 no-src lazyload" alt="5 Utmost Summer Essentials - Refresh your Day" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">5 Utmost Summer Essentials - Refresh your Day</h3>
                                            <div class="my-2">
                                                25 Aug 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/manage-your-kitchen-with-spice-organizers.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/846Manage-your-Kitchen-with-spice-organizer.webp" class="img-fluid w-100 no-src lazyload" alt="Manage Your Kitchen with Spice Organizers" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Manage Your Kitchen with Spice Organizers</h3>
                                            <div class="my-2">
                                                24 Aug 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/10-items-you-can-buy-at-an-online-store-in-pakistan-under-rs1000.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/41210-Items-You-Can-Buy-At-An-Online-Store-In-Pakistan.webp" class="img-fluid w-100 no-src lazyload" alt="10 Items You Can Buy At An Online Store In Pakistan Under Rs.1000" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">10 Items You Can Buy At An Online Store In Pakistan Under Rs.1000</h3>
                                            <div class="my-2">
                                                24 Aug 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/pakistan-independence-day-warm-celebrations-around-the-country.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/3295BlogCover.webp" class="img-fluid w-100 no-src lazyload" alt="Pakistan Independence Day: Warm Celebrations Around the Country" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Pakistan Independence Day: Warm Celebrations Around the Country</h3>
                                            <div class="my-2">
                                                12 Aug 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/top-5-online-websites-in-pakistan-.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/7695blogcoverHamzastore.jpg" class="img-fluid w-100 no-src lazyload" alt="Top 5 Online Websites in Pakistan" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Top 5 Online Websites in Pakistan</h3>
                                            <div class="my-2">
                                                02 Aug 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/top-products-you-can-find-at-hamza-store.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/9017HamzaStoreBlog5coverimage.jpg" class="img-fluid w-100 no-src lazyload" alt="Top Products You Can Find at Hamza Store" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Top Products You Can Find at Hamza Store</h3>
                                            <div class="my-2">
                                                02 Aug 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/discover-top-gym-essentials-at-affordable-prices.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/985HamzaStoreBlog.jpg" class="img-fluid w-100 no-src lazyload" alt="Discover Top Gym Essentials at Affordable Prices" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Discover Top Gym Essentials at Affordable Prices</h3>
                                            <div class="my-2">
                                                27 Jul 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/jewelry-storage-boxes-with-unique-designs.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/6249HamzaStoreCover.jpg" class="img-fluid w-100 no-src lazyload" alt="Jewelry Storage Boxes With Unique Designs" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Jewelry Storage Boxes With Unique Designs</h3>
                                            <div class="my-2">
                                                27 Jul 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/buy-bathroom-accessories-at-best-prices-in-pakistan.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/6416HamzaStoreBlog1.jpg" class="img-fluid w-100 no-src lazyload" alt="Buy Bathroom Accessories at Best Prices in Pakistan" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Buy Bathroom Accessories at Best Prices in Pakistan</h3>
                                            <div class="my-2">
                                                21 Jul 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/make-your-eid-special-with-these-best-kitchen-accessories.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/3032HamzaStoreBlog5Cover.jpg" class="img-fluid w-100 no-src lazyload" alt="Make your Eid Special with these best Kitchen Accessories" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Make your Eid Special with these best Kitchen Accessories</h3>
                                            <div class="my-2">
                                                20 Jul 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/fun-toys-vanish-the-boredom-of-your-kids.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/5158HamzaStoreBlog4.webp" class="img-fluid w-100 no-src lazyload" alt="Fun Toys - Vanish the Boredom of your Kids" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Fun Toys - Vanish the Boredom of your Kids</h3>
                                            <div class="my-2">
                                                27 Jun 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/top-10-mobile-accessories-you-must-have.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/2157HamzaStore-Blog3cover.jpg" class="img-fluid w-100 no-src lazyload" alt="Top 10 Mobile Accessories You Must Have" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">Top 10 Mobile Accessories You Must Have</h3>
                                            <div class="my-2">
                                                27 Jun 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/5-creative-ways-to-decorate-your-home-with-wall-stickers.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/9831HamzaStoreBlog2.jpg" class="img-fluid w-100 no-src lazyload" alt="5 Creative Ways to Decorate your home with Wall Stickers" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">5 Creative Ways to Decorate your home with Wall Stickers</h3>
                                            <div class="my-2">
                                                27 Jun 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                            <div class="col-lg-3 col-md-6 mb-md-3">
                                <a href="blog/10-smart-kitchen-gadgets-to-buy-in-2022.html" class="text-decoration-none cursor-pointer">
                                    <div class="row">
                                        <div class="col-sm-12 col-4 pe-sm-3 pe-0">
                                            <img data-src="https://www.hamzastore.pk/images/blogs/8725Hamza-Store-blog-1(1).jpg" class="img-fluid w-100 no-src lazyload" alt="10 Smart Kitchen Gadgets to buy in 2022" width="310" height="165" />
                                        </div>
                                        <div class="col-sm-12 col-8">
                                            <div class="my-2 text-uppercase color-gray">General</div>
                                            <h3 class="blogBoxTitle">10 Smart Kitchen Gadgets to buy in 2022</h3>
                                            <div class="my-2">
                                                07 Jun 2022                                        </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <hr class="border-dark w-100 d-lg-none d-block" />
                        </div>
                    </div>
                </div>
            </div>

            

            {/* <Footer /> */}
        </>
    )
}
