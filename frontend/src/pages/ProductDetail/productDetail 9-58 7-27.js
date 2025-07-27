import Swiper from "swiper";
// import "../styles.css";
// import HeaderMini from "./header-mini";
// import Footer from "./footer";
import React, { useState } from "react";
// import MiniHeaderFixed from "./miniHeaderFixed"
// import CustomerReviews from "./customerReviews"
// import CustomerAlsoViewed from "./customerAlsoViewed"
import BannerSlider1 from "../../components/detail/BannerSlider";
import "./App.css"

export default function ProductDetail(see) {

    const bannerData = [
        { src: "images/product_gallery/1719156634_1718986551_makeup_organizer_.jpg" },
        { src: "images/product_gallery/1719156634_1718986551_makeup_organizer__.jpg" },
        { src: "images/product_gallery/1719156634_1718986551_makeup_organizer___.jpg" }
    ];

    const [quantit, setQuantit] = useState(1);
    if (see == "ab") {
        setQuantit(2);
        console.log("kyhgkglkih;l", quantit);
    }


    const [quantity, setQuantity] = useState(1);
    const product_minusqty = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const product_plusqty = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1)
        }
    }   

    return (
        <>
            {/* <MiniHeaderFixed /> */}

            <div id="response" >
                <div className="container-xxl">
                    <div className="page-content pt-3">


                        <div className="row mx-md-0">
                            <div className="col-lg-6 col-12 deal-gallery-box pe-md-0 px-0 mb-3">










                                <div className="sticky-top stickyPosition  bg-white border-radius12 p-2">
                                    <div className="position-absolute behaveImage">
                                        <img className="img-fluid" src="images/behave/673201be56fca.png" alt="" height="70" width="70" />
                                    </div>
                                    {/* <div className="swiper-container gallery-top-mbl swiper-container-initialized swiper-container-horizontal" id="">
                                        <div className="swiper-wrapper" id="img_slide" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>                                                                <div className="swiper-slide swiper-slide-active" style={{ width: '431px', marginRight: '10px' }}>                                    <a href="#">
                                            <img id="imgv" src="images/product_gallery/1719156634_1718986551_makeup_organizer_.jpg" alt="1pc Vanity Makeup Organizer, Spacious Countertop Design With Drawers" height="557" width="557" className="img-fluid border-radius12 img-zoom " />
                                        </a>
                                        </div>                                                                    <div className="swiper-slide swiper-slide-next" style={{ width: '431px', marginRight: '10px' }}>                                    <a href="#">
                                            <img id="imgv" data-src="images/product_gallery/1719156634_1718986551_makeup_organizer__.jpg" alt="1pc Vanity Makeup Organizer, Spacious Countertop Design With Drawers" height="557" width="557" className="img-fluid border-radius12 img-zoom no-src lazyloaded" src="images/product_gallery/1719156634_1718986551_makeup_organizer__.jpg" />
                                        </a>
                                            </div>                                                                    <div className="swiper-slide" style={{ width: '431px', marginRight: '10px' }}>                                    <a href="#">
                                                <img id="imgv" data-src="images/product_gallery/1719156634_1718986551_makeup_organizer___.jpg" alt="1pc Vanity Makeup Organizer, Spacious Countertop Design With Drawers" height="557" width="557" className="img-fluid border-radius12 img-zoom no-src lazyloaded" src="images/product_gallery/1719156634_1718986551_makeup_organizer___.jpg" />
                                            </a>
                                            </div>                                                            </div>                                                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div> */}
                                    <BannerSlider1 banners={bannerData} />
                                    {/* <div className="swiper-container gallery-thumbs-mbl text-center swiper-container-initialized swiper-container-vertical swiper-container-free-mode swiper-container-thumbs">
                                        <div className="swiper-wrapper" id="img_thumb" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                                            <div onClick={jump(1)} className="swiper-slide swiper-slide-visible swiper-slide-active swiper-slide-thumb-active" style={{ height: '48.75px', marginBottom: '5px' }}>                                                                                            <img id="imgt" src="images/product_gallery/sm_1719156634_1718986551_makeup_organizer_.jpg" alt="1pc Vanity Makeup Organizer, Spacious Countertop Design With Drawers" className="img-fluid " width="50" height="50" />
                                            </div>
                                            <div onClick={jump(2)} className="swiper-slide swiper-slide-visible swiper-slide-next" style={{ height: '48.75px', marginBottom: '5px' }}>                                                                                            <img id="imgt" data-src="images/product_gallery/sm_1719156634_1718986551_makeup_organizer__.jpg" alt="1pc Vanity Makeup Organizer, Spacious Countertop Design With Drawers" className="img-fluid no-src lazyloaded" width="50" height="50" src="images/product_gallery/sm_1719156634_1718986551_makeup_organizer__.jpg" />
                                            </div>
                                            <div onClick={jump(3)} className="swiper-slide swiper-slide-visible" style={{ height: '48.75px', marginBottom: '5px' }}>                                                                                            <img id="imgt" data-src="images/product_gallery/sm_1719156634_1718986551_makeup_organizer___.jpg" alt="1pc Vanity Makeup Organizer, Spacious Countertop Design With Drawers" className="img-fluid no-src lazyloaded" width="50" height="50" src="images/product_gallery/sm_1719156634_1718986551_makeup_organizer___.jpg" />
                                            </div>                                                                            
                                        </div>
                                        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 mt-lg-0 mt-2 px-lg-2 px-0">
                                <div className="row bg-white border-radius12 px-2 py-3 mx-0">
                                    <div className="col-12">
                                        <nav aria-label="breadcrumb" className="d-none d-md-block my-2">
                                            <ol className="breadcrumb text-uppercase padding-mobile-view font-size11 p-0 m-0">
                                                <li className="breadcrumb-item my-auto">
                                                    <a href="https://www.hamzastore.pk/" className="brd-link">Home</a>
                                                </li>
                                                <li className="breadcrumb-item my-auto">
                                                    <a href="https://www.hamzastore.pk//home-living" className="brd-link">Home &amp; Living</a>
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                    <input type="hidden" id="g_brand" value="Hamza Store" />
                                    <input type="hidden" id="g_qty" value="23" />
                                    <input type="hidden" id="g_categorys" value="home-living/" />
                                    <input type="hidden" id="g_last_categorys" value="" />
                                    <input type="hidden" id="g_variant" value="" />
                                    <input type="hidden" id="qordertype" value="11" />
                                    <input type="hidden" name="id" id="current_id" value="6664" />
                                    <input type="hidden" id="product_title" value="1pc Vanity Makeup Organizer, Spacious Countertop Design With Drawers" />
                                    <input type="hidden" id="product_qty" value="23" />
                                    <input type="hidden" id="product_code" value="-m6664" />
                                    <input type="hidden" id="product_price" value="3999" />
                                    <input type="hidden" id="product_manage_inventory" value="1" />
                                    <input type="hidden" id="product_purchase_limit" value="10" />
                                    <input type="hidden" id="event_time" value="1739715123" />
                                    <input type="hidden" id="client_user_agent" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36" />
                                    <input type="hidden" id="ip_address" value="202.47.40.139" />
                                    <input type="hidden" id="fb_event_credential" value="{&quot;id&quot;:1,&quot;event_id&quot;:&quot;1233542923706556&quot;,&quot;test_event_code&quot;:&quot;TEST98066&quot;,&quot;access_token&quot;:&quot;EAAHwgFkLlQcBO8oUCgV69xQ9KNXklJhOlBk53CiImXg4edfDVgRyRtZAzanZBtEm4ZAKKTo8agRZCmhqQCyQuESLKQHwzwZAhnmiENl0rxZCXKZASgtPZBwHSXDVZBot9dFCsKHQUwMZCBtFQLNSXNFOSIuKSGLFmIMMCBDrnQJ2vklXQpv9yRff9ZAsWWALTEWibJsRQZDZD&quot;,&quot;active&quot;:1}" />
                                    <input type="hidden" id="google_event_credential" value="{&quot;id&quot;:2,&quot;title&quot;:&quot;Add to cart&quot;,&quot;conversion_id&quot;:null,&quot;send_to&quot;:null,&quot;active&quot;:1}" />
                                    <input type="hidden" id="event_id" value="69714573967b1f2327e247" />
                                    <input type="hidden" id="incremental" value="1" />
                                    <input type="hidden" id="product_image" value="/md_1719156634_1718986551_makeup_organizer_.jpg" />
                                    <input type="hidden" id="product_attrqty" value="0" />
                                    <input type="hidden" id="product_qattrqty" value="0" />
                                    <input type="hidden" id="product_types" value="1" />
                                    <input type="hidden" id="img_url" value="https://www.hamzastore.pk/images/product_gallery" />
                                    <input type="hidden" id="attribute_view" value="1" />
                                    <input type="hidden" id="attribute_view_grouped" value="1" />
                                    <input type="hidden" id="currency_symbol" value="Rs. " />
                                    <div className="col-12">
                                        <div className="row">

                                            <div className="col-6">
                                                <a className="color-gray-light font-size17" href="https://www.hamzastore.pk/hamza-store">
                                                    Brand: <span className="font-size17 sm-font15"> Hamza Store</span>
                                                </a>
                                            </div>

                                            <div className="col-12">
                                                <h1 className="single-product-title text-capitalize mb-1 font-size22" title="1pc Vanity Makeup Organizer, Spacious Countertop Design With Drawers">
                                                    1pc Vanity Makeup Organizer, Spacious Countertop Design With Drawers                                        <span className="selected_size"></span>
                                                </h1>
                                            </div>

                                            <div className="col-6 star-rating">
                                                <div className="signal-product-rating cursor-pointer " id="reviews-sect">
                                                    <img src="https://www.hamzastore.pk/images/theme_icons/star-outline-small.svg" alt="star-outline-small" width="12" height="12" />
                                                    <img src="https://www.hamzastore.pk/images/theme_icons/star-outline-small.svg" alt="star-outline-small" width="12" height="12" />
                                                    <img src="https://www.hamzastore.pk/images/theme_icons/star-outline-small.svg" alt="star-outline-small" width="12" height="12" />
                                                    <img src="https://www.hamzastore.pk/images/theme_icons/star-outline-small.svg" alt="star-outline-small" width="12" height="12" />
                                                    <img src="https://www.hamzastore.pk/images/theme_icons/star-outline-small.svg" alt="star-outline-small" width="12" height="12" />
                                                    <small className="color-gray-light font-size10">
                                                        <button className="btn btn-sm font-size10">( 0 reviews )</button>
                                                    </small>
                                                </div>
                                            </div>

                                            <div className="col-6 text-end">
                                                <span className="text-success font-weight-bold">In Stock</span>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-10 my-auto">
                                                <div className="row">
                                                    <div className="col-9 my-auto">
                                                        <div className="progress">
                                                            <div className="progress-bar progress-bar-striped progress-bar-animated" aria-label="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="13" aria-valuemax="200" style={{ width: '59%' }}></div>
                                                        </div>
                                                    </div>
                                                    <p className="col-3 text-start mb-0">13 Sold</p>
                                                </div>
                                            </div>
                                            <div className="col-2 my-auto text-end">




                                                <div className="position-relative">
                                                    <button className="btn bg-transparent text-dark heart-btn" type="button" id="sharer-button">
                                                        <img src="https://www.hamzastore.pk/images/theme_icons/share-icon.svg" alt="Share" width="18" height="18" />
                                                    </button>
                                                    <div className="px-2" id="sharer-content">
                                                        <ul className="list-unstyled my-2 text-md-start text-center">
                                                            <li>
                                                                <a href="https://www.facebook.com/Hamzastorepakistan/" target="_blank" title="Facebook" rel="noopener">
                                                                    <img src="https://www.hamzastore.pk/images/social_icon_filled/facebook_icon.svg" className="m-2 img-fluid" alt="facebook" width="18" height="18" />
                                                                    Facebook
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.instagram.com/hamzastorepakistan/" target="_blank" title="Instagram" rel="noopener">
                                                                    <img src="https://www.hamzastore.pk/images/social_icon_filled/instagram_icon.svg" className="m-2 img-fluid" alt="instagram" width="18" height="18" />
                                                                    Instagram
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://twitter.com/" target="_blank" title="Twitter" rel="noopener">
                                                                    <img src="https://www.hamzastore.pk/images/social_icon_filled/twitter_icon.svg" className="m-2 img-fluid" alt="twitter" width="18" height="18" />
                                                                    Twitter
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="https://www.pinterest.com/" target="_blank" title="Pintrest" rel="noopener">
                                                                    <img src="https://www.hamzastore.pk/images/social_icon_filled/pinterest_icon.svg" className="m-2 img-fluid" alt="pinterest" width="18" height="18" />
                                                                    Pinterest
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <li className="list-inline-item bg-whatsapp p-2 border-radius50 ">
                                                    <a href="https://api.whatsapp.com/send?phone=923436663323" target="_blank" title="whatsapp" rel="noopener">
                                                        <img src="https://www.hamzastore.pk/images/social_icon_filled/whatsapp_icon.svg" alt="Instagram Icon" className="hvr-bounce-out white-icons" width="26" height="26" />
                                                    </a>
                                                </li>

                                            </div>
                                        </div>


                                    </div>
                                    <div className="col-12 single-product-price deal_prices">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="d-flex align-items-center">
                                                    <ul className="list-inline mb-0">
                                                        <li className="list-inline-item">
                                                            <p className="font-size24 font-weight-bold prices text-primary mb-0">Rs.  3,999</p>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <span className="discount-price font-weight-normal font-size16">Rs.  4,999</span>
                                                        </li>
                                                    </ul>
                                                    <p className="saving-label percent d-inline-block mb-0 ms-2">20% Off</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <input type="hidden" id="prev_color" value="" />
                                    <input type="hidden" id="prev_size" value="" />


                                    <div className="col-12">
                                        <div className="row my-0 disable-selection" id="attributes_all">
                                            <div className="col-12">
                                                <div className="text-danger font16" id="cartflag"></div>
                                            </div>
                                            <div id="sflag"></div>
                                        </div>
                                        <div id="product-added-to-cart-new"></div>
                                    </div>






                                    <div className="col-12 mt-2 py-3">
                                        <div className="row" id="mbl-view">
                                            <div className="col-sm-2 pe-0 my-auto">
                                                <label className="qunty-label font-size12" for="bqty">Quantity:</label>
                                                <div className="input-group rounded border-primary border">
                                                    <span className="input-group-addon btn btn-primary border-0 rounded-0 px-1 py-0" onClick={product_minusqty} id="btnGroupAddon">
                                                        <img src="https://www.hamzastore.pk/images/theme_icons/minus-icon.svg" className="font-weight-light icon-clr-flt white-icons" alt="minus-icon" height="14" width="14" />
                                                    </span>
                                                    <input readonly="" type="text" aria-label="Input Number" onInput="" data-proid="" name="bqty" id="product_bqty" className="form-control  input-number text-center border-0 py-0" value={quantity} min="1" max="10" aria-describedby="btnGroupAddon" />
                                                    <span className="input-group-addon btn btn-primary border-0 rounded-0 px-1 py-0" onClick={product_plusqty} id="btnGroupAddon1">
                                                        <img src="https://www.hamzastore.pk/images/theme_icons/plus-icon.svg" className="font-weight-light icon-clr-flt white-icons" alt="plus-icon" height="14" width="14" />
                                                    </span>
                                                </div>
                                            </div>





                                            <div className="col-md-5 col-6 mbl-view my-auto">
                                                <button className="btn rounded bg-primary text-white text-uppercase hover-btn-primary h50px font-weight-medium text-decoration-none font-size18 w-100 py-2 px-md-2 px-0 shake-animation" onClick="add_to_cart_current();" type="button" id="add_to_cart_btn">
                                                    Add To Cart
                                                </button>
                                            </div>
                                            <div className="col-md-5 col-6 mbl-view my-auto ps-1">
                                                <button className="btn bg-secondary text-white rounded text-uppercase h50px font-weight-medium text-decoration-none font-size18 w-100 py-2" onClick="add_to_cart_quick();" type="button" id="add_to_cart_btn_quick">
                                                    Buy Now
                                                </button>
                                            </div>





                                        </div>
                                    </div>





                                    <div className="col-12 mt-2 py-md-4">
                                        <input type="hidden" value="2025-12-31 00:00:00" id="end_date" />
                                        <input type="hidden" value="2025-01-01 00:00:00" id="start_date" />
                                        <div className="row auction_box bg-primary rounded py-3 mx-0">
                                            <div className="col-12 px-0 color-primary text-center mb-1">
                                                <span className="font13 font-weight-bold text-white">
                                                    <img src="https://www.hamzastore.pk/images/flash-icon.svg" className="" alt="flash-icon" width="7" height="13" />
                                                    Flash Sale Ends in
                                                </span>
                                            </div>
                                            <div className="col-md-12 my-auto" id="table-auctions"><div className="timeParent"><div className="row timer-bg-style mx-0" id="player-expiration"><div className="col-4 text-center px-1"><span className="hours time mx-auto d-block">4</span><span className="staticTime">hours</span></div><div className="col-4 text-center px-1"><span className="minutes time mx-auto d-block">47</span><span className="staticTime">Minutes</span></div><div className="col-4 text-center px-1"><span className="seconds time mx-auto d-block">40</span><span className="staticTime">Seconds</span></div></div></div></div>

                                        </div>
                                    </div>



                                    <div className="col-12 pt-3 mt-2 border-top">
                                        <div className="row justify-content-center">
                                            <div className="col-4">
                                                <div className="row">
                                                    <div className="col-12 text-center">
                                                        <img data-src="https://www.hamzastore.pk/images/theme_icons/delivery_icon.webp" className="no-src lazyloaded" width="40" height="40" alt="Delivery Icon" src="https://www.hamzastore.pk/images/theme_icons/delivery_icon.webp" />
                                                        <p className="text-uppercase text-dark font-weight-bold mb-0">Delivery</p>
                                                        <p className="text-capitalize font-size10 mb-0">Karachi 2 Days | Other City : 3 to 4 working Days</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="row">
                                                    <div className="col-12 text-center">
                                                        <img data-src="https://www.hamzastore.pk/images/theme_icons/home_icon.webp" className="no-src lazyloaded" width="40" height="40" alt="Delivery Icon" src="https://www.hamzastore.pk/images/theme_icons/home_icon.webp" />
                                                        <p className="text-uppercase text-dark font-weight-bold mb-0">Sold By</p>
                                                        <a className="font-size10 text-primary text-decoration-underline" href="https://www.hamzastore.pk/store/hamzastore">hamzastore</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="bg-white border-radius12 px-md-2 px-3 py-3 mt-3">
                                    <div className="row mx-0">
                                        <div className="col-12">
                                            <p className="mb-0 font-size14 text-dark font-weight-medium">                                                                    </p>
                                        </div>
                                    </div>
                                </div>


                                <div className="bg-white border-radius12 px-md-2 px-3 py-3 mt-3">
                                    <div className="row mx-0 text-center">
                                        <div className="col-md-3 col-6 footer-setting-icon">
                                            <img data-src="https://www.hamzastore.pk/images/banners/674d8ce696ca9.webp" className="img-fluid no-src  mb-1 me-2 lazyloaded" height="50" width="50" alt="Easy and Secure Payment" src="https://www.hamzastore.pk/images/banners/674d8ce696ca9.webp" />
                                            <div>
                                                <p className="text-uppercase font-weight-medium font-size12 mb-0">Easy and Secure Payment</p>
                                                <p className="text-capitalize font-weight-regular font-size10 mb-0"></p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6 footer-setting-icon">
                                            <img data-src="https://www.hamzastore.pk/images/banners/674d8ce697d59.webp" className="img-fluid no-src  mb-1 me-2 lazyloaded" height="50" width="50" alt="7 Days Return Policy" src="https://www.hamzastore.pk/images/banners/674d8ce697d59.webp" />
                                            <div>
                                                <p className="text-uppercase font-weight-medium font-size12 mb-0">7 Days Return Policy</p>
                                                <p className="text-capitalize font-weight-regular font-size10 mb-0"></p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6 footer-setting-icon">
                                            <img data-src="https://www.hamzastore.pk/images/banners/674d8ce697fd0.webp" className="img-fluid no-src  mb-1 me-2 lazyloaded" height="50" width="50" alt="100% Original Products" src="https://www.hamzastore.pk/images/banners/674d8ce697fd0.webp" />
                                            <div>
                                                <p className="text-uppercase font-weight-medium font-size12 mb-0">100% Original Products</p>
                                                <p className="text-capitalize font-weight-regular font-size10 mb-0"></p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-6 footer-setting-icon">
                                            <img data-src="https://www.hamzastore.pk/images/banners/674d8ce698385.webp" className="img-fluid no-src  mb-1 me-2 lazyloaded" height="50" width="50" alt="Customer Satisfaction" src="https://www.hamzastore.pk/images/banners/674d8ce698385.webp" />
                                            <div>
                                                <p className="text-uppercase font-weight-medium font-size12 mb-0">Customer Satisfaction</p>
                                                <p className="text-capitalize font-weight-regular font-size10 mb-0"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="bg-white border-radius12 px-md-2 px-3 py-3 mt-3 mb-3">
                                    <div className="row mx-0">
                                        <div className="col-12">
                                            <div className="pt-0" id="scrollup">
                                                <nav className="spec-nav swiper-container bg-white px-3 px-lg-5 swiper-container-initialized swiper-container-horizontal swiper-container-free-mode" id="prod_tabs_slider">
                                                    <div className="nav nav-tabs justify-content-center swiper-wrapper border-0" id="nav-tab" role="tablist">
                                                        <a className="nav-item swiper-slide active nav-link rounded-0 mx-2 single-page-tabslink text-uppercase nav-pills-hover swiper-slide-active" id="nav-highlights-tab" data-bs-toggle="tab" href="#nav-highlights" role="tab" aria-controls="nav-highlights" aria-selected="false" style={{ width: '74.2px' }}>Description</a>
                                                        <a className="nav-item swiper-slide nav-link itemrounded-0 mx-2 single-page-tabslink text-uppercase nav-pills-hover swiper-slide-next" id="nav-specification-tab" data-bs-toggle="tab" href="#nav-specification" role="tab" aria-controls="nav-specification" aria-selected="false" style={{ width: '74.2px' }}>Specification</a>
                                                    </div>
                                                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></nav>
                                                <div className="tab-content p-0 single-page-tabs ibm-plex" id="nav-tabContent">
                                                    <div className="tab-pane fade  description text-left bg-new-gray" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab">
                                                    </div>
                                                    <div className="tab-pane fade active show" id="nav-highlights" role="tabpanel" aria-labelledby="nav-highlights-tab">
                                                        <div className="mt-3">
                                                            <ul style={{ marginBottom: '1rem' }}><li><span><font color="#000000">Transparent and visible, easy to find at a glance.</font></span></li><li><span ><font color="#000000">Top compartment for quick and easy access.</font></span></li><li><span  >Reinforced ribbed structure for durability and strength.</span><br /></li><li><span  >Safety clips, anti-dislodgement design, not easy to fall even upside down.</span><br /></li><li><span  ><font color="#000000">Drawer design, categorized storage, strong load-bearing capacity.</font></span><br /></li><li><font color="#000000"><span  ><font color="#000000">Suitable for multi-scene storage: dressing table, living room, office desk, etc.</font></span><br /></font></li><li><span  ><font color="#000000">Material: PP, PS</font></span></li><li><font color="#000000">Description: only the storage box, does not include other items in the picture.</font></li></ul>                                                </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="nav-specification" role="tabpanel" aria-labelledby="nav-specification-tab">
                                                        <div className="specsDetail mt-3">
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div >
                                </div >
                            </div >
                        </div >
                    </div >
                </div >
            </div >

            {/* <CustomerReviews />

            <CustomerAlsoViewed/>

            <Footer /> */}
        </>
    )
}

