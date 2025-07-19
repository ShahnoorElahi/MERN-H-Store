// import "../styles.css";
// import HeaderMini from "./header-mini";
// import Footer from "./footer";
import React, { useState } from "react";
// import "../App.css"


export default function KitchenAccessories() {
    const [sixCols, setSixCols] = useState(false);
    const [fourCols, setFourCols] = useState(true);
    const [threeCols, setThreeCols] = useState(false);
    const [twoCols, setTwoCols] = useState(false);

   console.log("width ",window.innerWidth);
    const funSixCols = () => {
        setSixCols(true);
        setFourCols(false);
        setThreeCols(false);
        setTwoCols(false);
    };
    const funfourCols = () => {
        setSixCols(false);
        setFourCols(true);
        setThreeCols(false);
        setTwoCols(false);

    };
    const funthreeCols = () => {
        setSixCols(false);
        setFourCols(false);
        setThreeCols(true);
        setTwoCols(false);

    };    const funtwoCols = () => {
        setSixCols(false);
        setFourCols(false);
        setThreeCols(false);
        setTwoCols(true);

    };
    return (
        <>
            {/* <HeaderMini /> */}

            <div class="container-xxl mmbl-65" id="scrollTo">
                <div class="row">
                    <div class="col-12">
                    </div>
                </div>

                <div class="row mx-0 mt-3">
                    <div class="col-lg-3 mb-4">
                        <div class="bg-white p-md-3 stickySidebar">
                            <form action="https://www.hamzastore.pk/kitchen-accessories?" method="GET" style={{}} id="search_filter" class="category-sidebar">
                                <input type="hidden" name="cat_id" id="cat_id" value="6" />

                                <div class="form-group my-3 border-bottom pb-3">
                                    <p class="text-left font-weight-medium text-uppercase font-size16 mb-2"><span>Price</span>
                                    </p>
                                    <div class="form-price-range-filter">
                                        <div id="slider-range" class="my-2 ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header" style={{ left: '0', width: '0' }}></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style={{ left: '0' }}></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style={{ left: '0' }}></span></div>
                                        <div class="row">
                                            <div class="col-5 pe-0">
                                                <input title="price min" class="form-control" type="number" placeholder="price min" id="min" name="price_min" value="100" />
                                            </div>
                                            <div class="col-5">
                                                <input title="price max" class="form-control" type="number" placeholder="price max" id="max" name="price_max" value="107086" />
                                            </div>
                                            <div class="col-2 px-0">
                                                <input type="submit" value="GO" class="btn btn-sm bg-primary text-white my-auto py-2" />
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div class="border-bottom my-3">
                                    <p class="text-start font-weight-medium text-uppercase font-size16 side-underline mb-2">
                                        <span>Brands</span>
                                    </p>
                                    <ul class="list-unstyled scroll_cat filter_wrapper hide_filter_cs px-1" id="scroll_brand">
                                        <li class="cursor-pointer d-lg-block d-inline-block my-2 me-lg-0 me-2 filter_font">
                                            <div class="form-check brands-style">
                                                <div><input class="brands form-check-input" type="checkbox" name="brand[]" value="hamza-store" id="hamza-store" /><label class="mb-0" for="hamza-store">Hamza Store</label></div><span>(1003)</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>


                                <div class="col-12 mb-3">
                                    <p class="text-start mb-2 font-weight-medium text-uppercase font-size16 groups">
                                        <span>Colors</span>
                                    </p>
                                    <ul class="list-unstyled ps-1 list-style-filter filter_wrapper hide_filter_cs border-bottom scrollable" id="scroll0">
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr12" value="White" />
                                                <label  for="attr3" class="mb-0 font-weight-normal w-100">White</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr25" value="Grey" />
                                                <label for="attr3" class="mb-0 font-weight-normal w-100">Grey</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr14" value="Green" />
                                                <label  for="attr3" class="mb-0 font-weight-normal w-100">Green</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr15" value="Pink" />
                                                <label  for="attr3" class="mb-0 font-weight-normal w-100">Pink</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr28" value="Red" />
                                                <label  for="attr3" class="mb-0 font-weight-normal w-100">Red</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr13" value="Black" />
                                                <label  for="attr3" class="mb-0 font-weight-normal w-100">Black</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr18" value="Blue" />
                                                <label  for="attr3" class="mb-0 font-weight-normal w-100">Blue</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr123" value="Midnight Blue" />
                                                <label for="attr3" class="mb-0 font-weight-normal w-100">Midnight Blue</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr121" value="Moss Green" />
                                                <label  for="attr3" class="mb-0 font-weight-normal w-100">Moss Green</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr87" value="Off White" />
                                                <label  for="attr3" class="mb-0 font-weight-normal w-100">Off White</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr37" value="Orange" />
                                                <label  for="attr3" class="mb-0 font-weight-normal w-100">Orange</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr122" value="Violet Blue" />
                                                <label  for="attr3" class="mb-0 font-weight-normal w-100">Violet Blue</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr38" value="Yellow" />
                                                <label for="attr3" class="mb-0 font-weight-normal w-100">Yellow</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                    </ul>
                                    <p class="text-start mb-2 font-weight-medium text-uppercase font-size16 groups">
                                        <span>Size</span>
                                    </p>
                                    <ul class="list-unstyled ps-1 list-style-filter filter_wrapper hide_filter_cs border-bottom scrollable" id="scroll1">
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr42" value=" 2 TIER" />
                                                <label  for="attr1" class="mb-0 font-weight-normal w-100"> 2 TIER</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr54" value="10 Pound" />
                                                <label  for="attr1" class="mb-0 font-weight-normal w-100">10 Pound</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr118" value="2 Layer" />
                                                <label  for="attr1" class="mb-0 font-weight-normal w-100">2 Layer</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr88" value="3 Layer" />
                                                <label  for="attr1" class="mb-0 font-weight-normal w-100">3 Layer</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr52" value="3 Pound" />
                                                <label  for="attr1" class="mb-0 font-weight-normal w-100">3 Pound</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr43" value="3 TIER" />
                                                <label  for="attr1" class="mb-0 font-weight-normal w-100">3 TIER</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr139" value="3-layer" />
                                                <label  for="attr1" class="mb-0 font-weight-normal w-100">3-layer</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr44" value="4 TIER" />
                                                <label for="attr1" class="mb-0 font-weight-normal w-100">4 TIER</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr53" value="5 Pound" />
                                                <label  for="attr1" class="mb-0 font-weight-normal w-100">5 Pound</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr45" value="5 TIER" />
                                                <label  for="attr1" class="mb-0 font-weight-normal w-100">5 TIER</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr205" value="Pack of 10" />
                                                <label for="attr1" class="mb-0 font-weight-normal w-100">Pack of 10</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr206" value="Pack of 20" />
                                                <label for="attr1" class="mb-0 font-weight-normal w-100">Pack of 20</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr207" value="Pack of 30" />
                                                <label  for="attr1" class="mb-0 font-weight-normal w-100">Pack of 30</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                    </ul>
                                    <p class="text-start mb-2 font-weight-medium text-uppercase font-size16 groups">
                                        <span>Color</span>
                                    </p>
                                    <ul class="list-unstyled ps-1 list-style-filter filter_wrapper hide_filter_cs border-bottom" id="scroll2">
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Color6[]" groups="Color" id="attr637" value="Random" />
                                                <label for="attr6" class="mb-0 font-weight-normal w-100">Random</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>


                                <div class="col-12 text-end pb-2 pe-2">
                                    <a href="kitchen-accessories.html" class="btn btn-sm bg-primary">Reset</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-12 col-lg-9 innerpage">
                        <div class="row bg-white mb-3 rounded">
                            <div class="text-left ">
                                <nav aria-label="breadcrumb" class="w-100">
                                    <ol class="breadcrumb text-dark px-0 m-0 font-size12">
                                        <li class="breadcrumb-item "><a class="text-uppercase" href="index.html">Home</a></li><a class="text-uppercase" href="index.html">
                                        </a><li class="breadcrumb-item active" aria-current="page"><a class="text-uppercase" href="index.html"></a><a class="text-uppercase" href="kitchen-accessories.html">Kitchen Accessories</a></li>
                                    </ol>
                                </nav>
                                <input type="hidden" id="total_products" value="24" />
                                <div class="row border-bottom pb-2">
                                    <div class="col-6">
                                        <h1 class="font-size17 font-weight-bold"> Kitchen Accessories</h1>
                                    </div>
                                    <div class="col-6">
                                        <div class="result-count">
                                            <div class="col-switch flex justify-content-end">
                                                <span onClick={funSixCols} className={`cursor-pointer pr six me-2 ${sixCols ? 'active' : ''}`}  data-col="2"></span>
                                                <span onClick={funfourCols} className={`cursor-pointer pr four me-2 ${fourCols ? 'active' : ''}`}  data-col="3"></span>
                                                <span onClick={funthreeCols} className={`cursor-pointer pr three me-2 ${threeCols ? 'active' : ''}`}  data-col="4"></span>
                                                <span onClick={funtwoCols} className={`cursor-pointer pr two me-2 ${twoCols ? 'active' : ''}`}  data-col="6"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                            </div>

                            <div class="col-12 pb-2">
                                <ul class="list-inline mb-0 sort_order">
                                    <li class="list-inline-item mx-0 sort-by-title font-weight-bold">Sort By : </li>
                                    <li class="list-inline-item mx-0">
                                        <button type="button" class="bg-transparent sort-selector-font font-weight-normal sort-selector-hover my-0 border-0 py-2 my-1">Featured
                                            Product</button>
                                    </li>
                                    <li class="list-inline-item mx-0">
                                        <button type="button" class="bg-transparent sort-selector-font font-weight-normal sort-selector-hover my-0 border-0 py-2 my-1">New
                                            Arrivals</button>
                                    </li>
                                    <li class="list-inline-item mx-0">
                                        <button type="button" class="bg-transparent sort-selector-font font-weight-normal sort-selector-hover my-0 border-0 py-2 my-1">Price
                                            (Low - High)</button>
                                    </li>
                                    <li class="list-inline-item mx-0">
                                        <button type="button" class="bg-transparent sort-selector-font font-weight-normal sort-selector-hover my-0 border-0 py-2 my-1">Price
                                            (High - Low)</button>
                                    </li>
                                    <li class="list-inline-item mx-0">
                                        <button type="button" class="bg-transparent sort-selector-font font-weight-normal sort-selector-hover my-0 border-0 py-2 my-1">Discount
                                            % (Low - High)</button>
                                    </li>
                                    <li class="list-inline-item mx-0">
                                        <button type="button"  class="bg-transparent sort-selector-font font-weight-normal sort-selector-hover my-0 border-0 py-2 my-1">Discount
                                            % (High - Low)</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="row d-none">
                            <div class="col-md-4 col-4">
                                <div class="form-group">
                                    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <label for="staticEmail" class=" col-md-12 col-sm-12 col-form-label pr-0 text-left mt-0">Sort by:</label>
                                        <select class="form-control rounded-0" onchange="page()" id="order_by_filter_dd">
                                            <option data-val="sort = 0, sort, id" value="DESC">Featured Product</option>
                                            <option data-val="discounted" value="ASC">Price (Low - High)</option>
                                            <option data-val="discounted" value="DESC">Price (High - Low)</option>
                                            <option data-val="title" value="ASC">Alphabetical (A - Z)</option>
                                            <option data-val="title" value="DESC">Alphabetical (Z - A)</option>
                                            <option data-val="discount_percent" value="ASC">Discount % (Low - High)</option>
                                            <option data-val="discount_percent" value="DESC">Discount % (High - Low)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="hidden" id="change_col_val" value="3" />
                        <div class="row">
                            <div class="col-12 px-md-2">
                                <div class="row change_cols" id="products_listing"> <input type="hidden" id="g_brand12270" value="Hamza Store" />
                                    <input type="hidden" id="g_categorys12270" value="kitchen-accessories" />
                                    <input type="hidden" id="g_last_categorys12270" value="" />
                                    <input type="hidden" id="qordertype" value="11" />
                                    <input type="hidden" name="id" id="current_id" value="12270" />
                                    <input type="hidden" id="title12270" value="80 Pcs Heavy Duty Kitchen Wipes" />
                                    <input type="hidden" id="code12270" value="1.74e17" />
                                    <input type="hidden" id="price12270" value="720" />
                                    <input type="hidden" id="price" value="720" />
                                    <input type="hidden" id="image12270" value="/0fdcb5a2f5fc4ac5b1bb812d0a956dc4-goods.webp" />
                                    <input type="hidden" id="event_time12270" value="1739292762" />
                                    <input type="hidden" id="client_user_agent12270" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36" />
                                    <input type="hidden" id="ip_address12270" value="202.47.40.139" />
                                    <input type="hidden" id="fb_event_credential12270" value="{&quot;id&quot;:1,&quot;event_id&quot;:&quot;1233542923706556&quot;,&quot;test_event_code&quot;:&quot;TEST98066&quot;,&quot;access_token&quot;:&quot;EAAHwgFkLlQcBO8oUCgV69xQ9KNXklJhOlBk53CiImXg4edfDVgRyRtZAzanZBtEm4ZAKKTo8agRZCmhqQCyQuESLKQHwzwZAhnmiENl0rxZCXKZASgtPZBwHSXDVZBot9dFCsKHQUwMZCBtFQLNSXNFOSIuKSGLFmIMMCBDrnQJ2vklXQpv9yRff9ZAsWWALTEWibJsRQZDZD&quot;,&quot;active&quot;:1}" />

                                    <input type="hidden" id="google_event_credential12270" value="{&quot;id&quot;:2,&quot;title&quot;:&quot;Add to cart&quot;,&quot;conversion_id&quot;:null,&quot;send_to&quot;:null,&quot;active&quot;:1}" />
                                    <input type="hidden" id="event_id12270" value="0" />
                                    <input type="hidden" id="incremental12270" value="1" />

                                    <div className={`px-1 get_cart_totals ${sixCols ? 'col-2' : ''} ${fourCols ? 'col-3' : ''} ${threeCols ? 'col-4' : ''} ${twoCols ? 'col-6' : ''}`}  >
                                        <div id="deal-box" class="position-relative">
                                            <div class="item-box bg-white">
                                                <div class="w-100 position-relative">
                                                    <div class="w-100 d-block mx-auto position-relative product-image-loader">
                                                        <div class="product_img_continer">
                                                            <a href="https://www.hamzastore.pk/80-pcs-heavy-duty-kitchen-wipes" class="change_slug12270">
                                                                <img src="https://www.hamzastore.pk/images/product_gallery/0fdcb5a2f5fc4ac5b1bb812d0a956dc4-goods.webp" data-src="https://www.hamzastore.pk/images/product_gallery/0fdcb5a2f5fc4ac5b1bb812d0a956dc4-goods.webp" height="466" width="466" class="img-fluid w-100 d-block change_image12270 lazyloaded" alt="80 Pcs Heavy Duty Kitchen Wipes" />
                                                            </a>
                                                        </div>
                                                        <div class="addtocart_overlay text-center px-0">
                                                            <div class="row mx-0">
                                                                <div class="w-50 bg-secondary px-0">
                                                                    <button class="btn btn-transparent text-decoration-none px-0  sm-font9 text-white  font-size10" >
                                                                        Add To Cart
                                                                    </button>
                                                                </div>
                                                                <div class="w-50 bg-primary px-0 ">
                                                                    <button class="btn bg-primary rounded btn-block sm-font9 text-uppercase font-size10 sm-font10 px-md-1 px-0  text-decoration-none" >
                                                                        Buy Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="box-style px-2 py-2 text-start">

                                                    <div class="box-title text-start">
                                                        <a href="https://www.hamzastore.pk/80-pcs-heavy-duty-kitchen-wipes" class="item-link font-size12 font-weight-regular change_slug12270">80
                                                            Pcs Heavy Duty Kitchen Wipes</a>
                                                    </div>

                                                    <div class="row mx-1 mt-1">
                                                        <div class="w-50 my-auto pricing px-0">
                                                            <p class="mb-0 font-weight-normal text-dark font-size14">Rs. 720</p>
                                                            <div class="d-flex align-items-center resp-flex">
                                                                <p class="discount-price pe-1 mb-0">Rs. 999</p>
                                                            </div>
                                                        </div>
                                                        <div class="w-50 text-end px-0 my-auto ">
                                                            <small class="discount-label text-dark font-size10 font-weight-semi-bold p-1">28%
                                                                Off</small>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" id="g_brand12267" value="Hamza Store" />
                                    <input type="hidden" id="g_categorys12267" value="kitchen-accessories/" />
                                    <input type="hidden" id="g_last_categorys12267" value="" />
                                    <input type="hidden" id="qordertype" value="11" />
                                    <input type="hidden" name="id" id="current_id" value="12267" />
                                    <input type="hidden" id="title12267" value="Ribbed Textured Plastic Storage Box with Golden Handles" />
                                    <input type="hidden" id="code12267" value="1.74e17" />
                                    <input type="hidden" id="price12267" value="1750" />
                                    <input type="hidden" id="price" value="1750" />
                                    <input type="hidden" id="image12267" value="/51KdldGswDL._AC_SX679.jpg" />
                                    <input type="hidden" id="event_time12267" value="1739292762" />
                                    <input type="hidden" id="client_user_agent12267" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36" />
                                    <input type="hidden" id="ip_address12267" value="202.47.40.139" />
                                    <input type="hidden" id="fb_event_credential12267" value="{&quot;id&quot;:1,&quot;event_id&quot;:&quot;1233542923706556&quot;,&quot;test_event_code&quot;:&quot;TEST98066&quot;,&quot;access_token&quot;:&quot;EAAHwgFkLlQcBO8oUCgV69xQ9KNXklJhOlBk53CiImXg4edfDVgRyRtZAzanZBtEm4ZAKKTo8agRZCmhqQCyQuESLKQHwzwZAhnmiENl0rxZCXKZASgtPZBwHSXDVZBot9dFCsKHQUwMZCBtFQLNSXNFOSIuKSGLFmIMMCBDrnQJ2vklXQpv9yRff9ZAsWWALTEWibJsRQZDZD&quot;,&quot;active&quot;:1}" />

                                    <input type="hidden" id="google_event_credential12267" value="{&quot;id&quot;:2,&quot;title&quot;:&quot;Add to cart&quot;,&quot;conversion_id&quot;:null,&quot;send_to&quot;:null,&quot;active&quot;:1}" />
                                    <input type="hidden" id="event_id12267" value="0" />
                                    <input type="hidden" id="incremental12267" value="1" />

                                    <div className={`px-1 get_cart_totals ${sixCols ? 'col-2' : ''} ${fourCols ? 'col-3' : ''} ${threeCols ? 'col-4' : ''} ${twoCols ? 'col-6' : ''} ${threeCols ? 'col-4' : ''} ${twoCols ? 'col-6' : ''}`}>
                                        <div id="deal-box" class="position-relative">
                                            <div class="item-box bg-white">
                                                <div class="w-100 position-relative">
                                                    <div class="w-100 d-block mx-auto position-relative product-image-loader">
                                                        <div class="product_img_continer">
                                                            <a href="https://www.hamzastore.pk/ribbed-textured-plastic-storage-box-with-golden-handles" class="change_slug12267">
                                                                <img src="https://www.hamzastore.pk/images/product_gallery/md_714mOtr3f9L._AC_SL1352.jpg" data-src="https://www.hamzastore.pk/images/product_gallery/md_714mOtr3f9L._AC_SL1352.jpg" height="466" width="466" class="img-fluid w-100 d-block change_image12267 lazyloaded" alt="Ribbed Textured Plastic Storage Box with Golden Handles" />
                                                            </a>
                                                        </div>
                                                        <div class="addtocart_overlay text-center px-0">
                                                            <div class="row mx-0">
                                                                <div class="w-50 bg-secondary px-0">
                                                                    <button class="btn btn-transparent text-decoration-none px-0  sm-font9 text-white  font-size10" >
                                                                        Add To Cart
                                                                    </button>
                                                                </div>
                                                                <div class="w-50 bg-primary px-0 ">
                                                                    <button class="btn bg-primary rounded btn-block sm-font9 text-uppercase font-size10 sm-font10 px-md-1 px-0  text-decoration-none" >
                                                                        Buy Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="box-style px-2 py-2 text-start">

                                                    <div class="box-title text-start">
                                                        <a href="https://www.hamzastore.pk/ribbed-textured-plastic-storage-box-with-golden-handles" class="item-link font-size12 font-weight-regular change_slug12267">Ribbed
                                                            Textured Plastic Storage Box with Golden Handles</a>
                                                    </div>

                                                    <div class="row mx-1 mt-1">
                                                        <div class="w-50 my-auto pricing px-0">
                                                            <p class="mb-0 font-weight-normal text-dark font-size14">Rs. 1,750
                                                            </p>
                                                            <div class="d-flex align-items-center resp-flex">
                                                                <p class="discount-price pe-1 mb-0">Rs. 2,199</p>
                                                            </div>
                                                        </div>
                                                        <div class="w-50 text-end px-0 my-auto ">
                                                            <small class="discount-label text-dark font-size10 font-weight-semi-bold p-1">20%
                                                                Off</small>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" id="g_brand12262" value="Hamza Store" />
                                    <input type="hidden" id="g_categorys12262" value="kitchen-accessories/" />
                                    <input type="hidden" id="g_last_categorys12262" value="" />
                                    <input type="hidden" id="qordertype" value="11" />
                                    <input type="hidden" name="id" id="current_id" value="12262" />
                                    <input type="hidden" id="title12262" value="46 Pcs All-in-One Outdoor Picnic Set" />
                                    <input type="hidden" id="code12262" value="1.74e17" />
                                    <input type="hidden" id="price12262" value="7000" />
                                    <input type="hidden" id="price" value="7000" />
                                    <input type="hidden" id="image12262" value="/WhatsAppImage2025-01-28at9.34.47PM_1.jpg" />
                                    <input type="hidden" id="event_time12262" value="1739292762" />
                                    <input type="hidden" id="client_user_agent12262" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36" />
                                    <input type="hidden" id="ip_address12262" value="202.47.40.139" />
                                    <input type="hidden" id="fb_event_credential12262" value="{&quot;id&quot;:1,&quot;event_id&quot;:&quot;1233542923706556&quot;,&quot;test_event_code&quot;:&quot;TEST98066&quot;,&quot;access_token&quot;:&quot;EAAHwgFkLlQcBO8oUCgV69xQ9KNXklJhOlBk53CiImXg4edfDVgRyRtZAzanZBtEm4ZAKKTo8agRZCmhqQCyQuESLKQHwzwZAhnmiENl0rxZCXKZASgtPZBwHSXDVZBot9dFCsKHQUwMZCBtFQLNSXNFOSIuKSGLFmIMMCBDrnQJ2vklXQpv9yRff9ZAsWWALTEWibJsRQZDZD&quot;,&quot;active&quot;:1}" />

                                    <input type="hidden" id="google_event_credential12262" value="{&quot;id&quot;:2,&quot;title&quot;:&quot;Add to cart&quot;,&quot;conversion_id&quot;:null,&quot;send_to&quot;:null,&quot;active&quot;:1}" />
                                    <input type="hidden" id="event_id12262" value="0" />
                                    <input type="hidden" id="incremental12262" value="1" />

                                    <div className={`px-1 get_cart_totals ${sixCols ? 'col-2' : ''} ${fourCols ? 'col-3' : ''} ${threeCols ? 'col-4' : ''} ${twoCols ? 'col-6' : ''}`}>
                                        <div id="deal-box" class="position-relative">
                                            <div class="item-box bg-white">
                                                <div class="w-100 position-relative">
                                                    <div class="w-100 d-block mx-auto position-relative product-image-loader">
                                                        <div class="product_img_continer">
                                                            <a href="https://www.hamzastore.pk/46-pcs-all-in-one-outdoor-picnic-set" class="change_slug12262">
                                                                <img src="https://www.hamzastore.pk/images/product_gallery/md_WhatsAppImage2025-01-28at9.34.47PM_1.jpg" data-src="https://www.hamzastore.pk/images/product_gallery/md_WhatsAppImage2025-01-28at9.34.47PM_1.jpg" height="466" width="466" class="img-fluid w-100 d-block change_image12262 lazyloaded" alt="46 Pcs All-in-One Outdoor Picnic Set" />
                                                            </a>
                                                        </div>
                                                        <div class="addtocart_overlay text-center px-0">
                                                            <div class="row mx-0">
                                                                <div class="w-50 bg-secondary px-0">
                                                                    <button class="btn btn-transparent text-decoration-none px-0  sm-font9 text-white  font-size10" >
                                                                        Add To Cart
                                                                    </button>
                                                                </div>
                                                                <div class="w-50 bg-primary px-0 ">
                                                                    <button class="btn bg-primary rounded btn-block sm-font9 text-uppercase font-size10 sm-font10 px-md-1 px-0  text-decoration-none" >
                                                                        Buy Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="box-style px-2 py-2 text-start">

                                                    <div class="box-title text-start">
                                                        <a href="https://www.hamzastore.pk/46-pcs-all-in-one-outdoor-picnic-set" class="item-link font-size12 font-weight-regular change_slug12262">46
                                                            Pcs All-in-One Outdoor Picnic Set</a>
                                                    </div>

                                                    <div class="row mx-1 mt-1">
                                                        <div class="w-50 my-auto pricing px-0">
                                                            <p class="mb-0 font-weight-normal text-dark font-size14">Rs. 7,000
                                                            </p>
                                                            <div class="d-flex align-items-center resp-flex">
                                                                <p class="discount-price pe-1 mb-0">Rs. 7,800</p>
                                                            </div>
                                                        </div>
                                                        <div class="w-50 text-end px-0 my-auto ">
                                                            <small class="discount-label text-dark font-size10 font-weight-semi-bold p-1">10%
                                                                Off</small>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" id="g_brand11570" value="Hamza Store" />
                                    <input type="hidden" id="g_categorys11570" value="kitchen-accessories/" />
                                    <input type="hidden" id="g_last_categorys11570" value="" />
                                    <input type="hidden" id="qordertype" value="11" />
                                    <input type="hidden" name="id" id="current_id" value="11570" />
                                    <input type="hidden" id="title11570" value="Spice Control Bottle - Quantitative Spice Shaker Dispenser Tank" />
                                    <input type="hidden" id="code11570" value="" />
                                    <input type="hidden" id="price11570" value="999" />
                                    <input type="hidden" id="price" value="999" />
                                    <input type="hidden" id="image11570" value="/Salt2.jpg" />
                                    <input type="hidden" id="event_time11570" value="1739292762" />
                                    <input type="hidden" id="client_user_agent11570" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36" />
                                    <input type="hidden" id="ip_address11570" value="202.47.40.139" />
                                    <input type="hidden" id="fb_event_credential11570" value="{&quot;id&quot;:1,&quot;event_id&quot;:&quot;1233542923706556&quot;,&quot;test_event_code&quot;:&quot;TEST98066&quot;,&quot;access_token&quot;:&quot;EAAHwgFkLlQcBO8oUCgV69xQ9KNXklJhOlBk53CiImXg4edfDVgRyRtZAzanZBtEm4ZAKKTo8agRZCmhqQCyQuESLKQHwzwZAhnmiENl0rxZCXKZASgtPZBwHSXDVZBot9dFCsKHQUwMZCBtFQLNSXNFOSIuKSGLFmIMMCBDrnQJ2vklXQpv9yRff9ZAsWWALTEWibJsRQZDZD&quot;,&quot;active&quot;:1}" />

                                    <input type="hidden" id="google_event_credential11570" value="{&quot;id&quot;:2,&quot;title&quot;:&quot;Add to cart&quot;,&quot;conversion_id&quot;:null,&quot;send_to&quot;:null,&quot;active&quot;:1}" />
                                    <input type="hidden" id="event_id11570" value="0" />
                                    <input type="hidden" id="incremental11570" value="1" />

                                    <div className={`px-1 get_cart_totals ${sixCols ? 'col-2' : ''} ${fourCols ? 'col-3' : ''} ${threeCols ? 'col-4' : ''} ${twoCols ? 'col-6' : ''}`}>
                                        <div id="deal-box" class="position-relative">
                                            <div class="item-box bg-white">
                                                <div class="w-100 position-relative">
                                                    <div class="w-100 d-block mx-auto position-relative product-image-loader">
                                                        <div class="product_img_continer">
                                                            <a href="https://www.hamzastore.pk/salt-control-bottle-quantitative-salt-shaker-dispenser-tank-household-kitchen-seasoning-bottle-for-sugar-pepper-salt-cumin" class="change_slug11570">
                                                                <img src="https://www.hamzastore.pk/images/product_gallery/md_Salt2.jpg" data-src="https://www.hamzastore.pk/images/product_gallery/md_Salt2.jpg" height="466" width="466" class="img-fluid w-100 d-block change_image11570 lazyloaded" alt="Spice Control Bottle - Quantitative Spice Shaker Dispenser Tank" />
                                                            </a>
                                                        </div>
                                                        <div class="addtocart_overlay text-center px-0">
                                                            <div class="row mx-0">
                                                                <div class="w-50 bg-secondary px-0">
                                                                    <button class="btn btn-transparent text-decoration-none px-0  sm-font9 text-white  font-size10">
                                                                        Add To Cart
                                                                    </button>
                                                                </div>
                                                                <div class="w-50 bg-primary px-0 ">
                                                                    <button class="btn bg-primary rounded btn-block sm-font9 text-uppercase font-size10 sm-font10 px-md-1 px-0  text-decoration-none">
                                                                        Buy Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="box-style px-2 py-2 text-start">

                                                    <div class="box-title text-start">
                                                        <a href="https://www.hamzastore.pk/salt-control-bottle-quantitative-salt-shaker-dispenser-tank-household-kitchen-seasoning-bottle-for-sugar-pepper-salt-cumin" class="item-link font-size12 font-weight-regular change_slug11570">Spice
                                                            Control Bottle - Quantitative Spice Shaker Dispenser Tank</a>
                                                    </div>

                                                    <div class="row mx-1 mt-1">
                                                        <div class="w-50 my-auto pricing px-0">
                                                            <p class="mb-0 font-weight-normal text-dark font-size14">Rs. 999</p>
                                                            <div class="d-flex align-items-center resp-flex">
                                                                <p class="discount-price pe-1 mb-0">Rs. 1,399</p>
                                                            </div>
                                                        </div>
                                                        <div class="w-50 text-end px-0 my-auto ">
                                                            <small class="discount-label text-dark font-size10 font-weight-semi-bold p-1">29%
                                                                Off</small>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" id="g_brand11559" value="" />
                                    <input type="hidden" id="g_categorys11559" value="kitchen-accessories/" />
                                    <input type="hidden" id="g_last_categorys11559" value="" />
                                    <input type="hidden" id="qordertype" value="11" />
                                    <input type="hidden" name="id" id="current_id" value="11559" />
                                    <input type="hidden" id="title11559" value="1 Set Swan Dessert Spoon Holder" />
                                    <input type="hidden" id="code11559" value="" />
                                    <input type="hidden" id="price11559" value="1399" />
                                    <input type="hidden" id="price" value="1399" />
                                    <input type="hidden" id="image11559" value="/swan-01.png" />
                                    <input type="hidden" id="event_time11559" value="1739292762" />
                                    <input type="hidden" id="client_user_agent11559" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36" />
                                    <input type="hidden" id="ip_address11559" value="202.47.40.139" />
                                    <input type="hidden" id="fb_event_credential11559" value="{&quot;id&quot;:1,&quot;event_id&quot;:&quot;1233542923706556&quot;,&quot;test_event_code&quot;:&quot;TEST98066&quot;,&quot;access_token&quot;:&quot;EAAHwgFkLlQcBO8oUCgV69xQ9KNXklJhOlBk53CiImXg4edfDVgRyRtZAzanZBtEm4ZAKKTo8agRZCmhqQCyQuESLKQHwzwZAhnmiENl0rxZCXKZASgtPZBwHSXDVZBot9dFCsKHQUwMZCBtFQLNSXNFOSIuKSGLFmIMMCBDrnQJ2vklXQpv9yRff9ZAsWWALTEWibJsRQZDZD&quot;,&quot;active&quot;:1}" />

                                    <input type="hidden" id="google_event_credential11559" value="{&quot;id&quot;:2,&quot;title&quot;:&quot;Add to cart&quot;,&quot;conversion_id&quot;:null,&quot;send_to&quot;:null,&quot;active&quot;:1}" />
                                    <input type="hidden" id="event_id11559" value="0" />
                                    <input type="hidden" id="incremental11559" value="1" />

                                    <div className={`px-1 get_cart_totals ${sixCols ? 'col-2' : ''} ${fourCols ? 'col-3' : ''} ${threeCols ? 'col-4' : ''} ${twoCols ? 'col-6' : ''}`}>
                                        <div id="deal-box" class="position-relative">
                                            <div class="item-box bg-white">
                                                <div class="w-100 position-relative">
                                                    <div class="w-100 d-block mx-auto position-relative product-image-loader">
                                                        <div class="product_img_continer">
                                                            <a href="https://www.hamzastore.pk/1-set-swan-dessert-spoon-dessert-spoons-spoon-storage-holder-spoon-and-fork-holder-kitchen-mixing-spoons-storage-holder-coffee-spoon-holder-dessert-eating-spoons" class="change_slug11559">
                                                                <img src="https://www.hamzastore.pk/images/product_gallery/md_swan-01.png" data-src="https://www.hamzastore.pk/images/product_gallery/md_swan-01.png" height="466" width="466" class="img-fluid w-100 d-block change_image11559 lazyloaded" alt="1 Set Swan Dessert Spoon Holder" />
                                                            </a>
                                                        </div>
                                                        <div class="addtocart_overlay text-center px-0">
                                                            <div class="row mx-0">
                                                                <div class="w-50 bg-secondary px-0">
                                                                    <button class="btn btn-transparent text-decoration-none px-0  sm-font9 text-white  font-size10">
                                                                        Add To Cart
                                                                    </button>
                                                                </div>
                                                                <div class="w-50 bg-primary px-0 ">
                                                                    <button class="btn bg-primary rounded btn-block sm-font9 text-uppercase font-size10 sm-font10 px-md-1 px-0  text-decoration-none" >
                                                                        Buy Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="box-style px-2 py-2 text-start">

                                                    <div class="box-title text-start">
                                                        <a href="https://www.hamzastore.pk/1-set-swan-dessert-spoon-dessert-spoons-spoon-storage-holder-spoon-and-fork-holder-kitchen-mixing-spoons-storage-holder-coffee-spoon-holder-dessert-eating-spoons" class="item-link font-size12 font-weight-regular change_slug11559">1
                                                            Set Swan Dessert Spoon Holder</a>
                                                    </div>

                                                    <div class="row mx-1 mt-1">
                                                        <div class="w-50 my-auto pricing px-0">
                                                            <p class="mb-0 font-weight-normal text-dark font-size14">Rs. 1,399
                                                            </p>
                                                            <div class="d-flex align-items-center resp-flex">
                                                                <p class="discount-price pe-1 mb-0">Rs. 1,599</p>
                                                            </div>
                                                        </div>
                                                        <div class="w-50 text-end px-0 my-auto ">
                                                            <small class="discount-label text-dark font-size10 font-weight-semi-bold p-1">13%
                                                                Off</small>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" id="g_brand11558" value="Hamza Store" />
                                    <input type="hidden" id="g_categorys11558" value="kitchen-accessories/" />
                                    <input type="hidden" id="g_last_categorys11558" value="" />
                                    <input type="hidden" id="qordertype" value="11" />
                                    <input type="hidden" name="id" id="current_id" value="11558" />
                                    <input type="hidden" id="title11558" value="Coffee Swan Spoon And Fork Set With Holder" />
                                    <input type="hidden" id="code11558" value="" />
                                    <input type="hidden" id="price11558" value="1599" />
                                    <input type="hidden" id="price" value="1599" />
                                    <input type="hidden" id="image11558" value="/slider_images_3_02cf3b85-5ab3-4024-ba22-149978e6cd84.jpg" />
                                    <input type="hidden" id="event_time11558" value="1739292762" />
                                    <input type="hidden" id="client_user_agent11558" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36" />
                                    <input type="hidden" id="ip_address11558" value="202.47.40.139" />
                                    <input type="hidden" id="fb_event_credential11558" value="{&quot;id&quot;:1,&quot;event_id&quot;:&quot;1233542923706556&quot;,&quot;test_event_code&quot;:&quot;TEST98066&quot;,&quot;access_token&quot;:&quot;EAAHwgFkLlQcBO8oUCgV69xQ9KNXklJhOlBk53CiImXg4edfDVgRyRtZAzanZBtEm4ZAKKTo8agRZCmhqQCyQuESLKQHwzwZAhnmiENl0rxZCXKZASgtPZBwHSXDVZBot9dFCsKHQUwMZCBtFQLNSXNFOSIuKSGLFmIMMCBDrnQJ2vklXQpv9yRff9ZAsWWALTEWibJsRQZDZD&quot;,&quot;active&quot;:1}" />

                                    <input type="hidden" id="google_event_credential11558" value="{&quot;id&quot;:2,&quot;title&quot;:&quot;Add to cart&quot;,&quot;conversion_id&quot;:null,&quot;send_to&quot;:null,&quot;active&quot;:1}" />
                                    <input type="hidden" id="event_id11558" value="0" />
                                    <input type="hidden" id="incremental11558" value="1" />

                                    <div className={`px-1 get_cart_totals ${sixCols ? 'col-2' : ''} ${fourCols ? 'col-3' : ''} ${threeCols ? 'col-4' : ''} ${twoCols ? 'col-6' : ''}`}>
                                        <div id="deal-box" class="position-relative">
                                            <div class="item-box bg-white">
                                                <div class="w-100 position-relative">
                                                    <div class="w-100 d-block mx-auto position-relative product-image-loader">
                                                        <div class="product_img_continer">
                                                            <a href="https://www.hamzastore.pk/coffee-spoon-set-with-holder-swan-spoon-and-fork-holder-gold-durable-spoons-coffee-station-storage-organizer-for-home-kitchen-christmas-universal-gift" class="change_slug11558">
                                                                <img src="https://www.hamzastore.pk/images/product_gallery/md_slider_images_1_e923c6c9-bff8-449b-9399-e555ff399990.jpg" data-src="https://www.hamzastore.pk/images/product_gallery/md_slider_images_1_e923c6c9-bff8-449b-9399-e555ff399990.jpg" height="466" width="466" class="img-fluid w-100 d-block change_image11558 lazyloaded" alt="Coffee Swan Spoon And Fork Set With Holder" />
                                                            </a>
                                                        </div>
                                                        <div class="addtocart_overlay text-center px-0">
                                                            <div class="row mx-0">
                                                                <div class="w-50 bg-secondary px-0">
                                                                    <button class="btn btn-transparent text-decoration-none px-0  sm-font9 text-white  font-size10" >
                                                                        Add To Cart
                                                                    </button>
                                                                </div>
                                                                <div class="w-50 bg-primary px-0 ">
                                                                    <button class="btn bg-primary rounded btn-block sm-font9 text-uppercase font-size10 sm-font10 px-md-1 px-0  text-decoration-none" >
                                                                        Buy Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="box-style px-2 py-2 text-start">

                                                    <div class="box-title text-start">
                                                        <a href="https://www.hamzastore.pk/coffee-spoon-set-with-holder-swan-spoon-and-fork-holder-gold-durable-spoons-coffee-station-storage-organizer-for-home-kitchen-christmas-universal-gift" class="item-link font-size12 font-weight-regular change_slug11558">Coffee
                                                            Swan Spoon And Fork Set With Holder</a>
                                                    </div>

                                                    <div class="row mx-1 mt-1">
                                                        <div class="w-50 my-auto pricing px-0">
                                                            <p class="mb-0 font-weight-normal text-dark font-size14">Rs. 1,599
                                                            </p>
                                                            <div class="d-flex align-items-center resp-flex">
                                                                <p class="discount-price pe-1 mb-0">Rs. 1,899</p>
                                                            </div>
                                                        </div>
                                                        <div class="w-50 text-end px-0 my-auto ">
                                                            <small class="discount-label text-dark font-size10 font-weight-semi-bold p-1">16%
                                                                Off</small>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" id="g_brand11543" value="Hamza Store" />
                                    <input type="hidden" id="g_categorys11543" value="kitchen-accessories/" />
                                    <input type="hidden" id="g_last_categorys11543" value="" />
                                    <input type="hidden" id="qordertype" value="11" />
                                    <input type="hidden" name="id" id="current_id" value="11543" />
                                    <input type="hidden" id="title11543" value="6pcs Gold Luxury Swan Coffee Set" />
                                    <input type="hidden" id="code11543" value="" />
                                    <input type="hidden" id="price11543" value="1399" />
                                    <input type="hidden" id="price" value="1399" />
                                    <input type="hidden" id="image11543" value="/color_images_1_bfc52eed-1998-4aa6-8f03-74488bf3ae13.jpg" />
                                    <input type="hidden" id="event_time11543" value="1739292762" />
                                    <input type="hidden" id="client_user_agent11543" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36" />
                                    <input type="hidden" id="ip_address11543" value="202.47.40.139" />
                                    <input type="hidden" id="fb_event_credential11543" value="{&quot;id&quot;:1,&quot;event_id&quot;:&quot;1233542923706556&quot;,&quot;test_event_code&quot;:&quot;TEST98066&quot;,&quot;access_token&quot;:&quot;EAAHwgFkLlQcBO8oUCgV69xQ9KNXklJhOlBk53CiImXg4edfDVgRyRtZAzanZBtEm4ZAKKTo8agRZCmhqQCyQuESLKQHwzwZAhnmiENl0rxZCXKZASgtPZBwHSXDVZBot9dFCsKHQUwMZCBtFQLNSXNFOSIuKSGLFmIMMCBDrnQJ2vklXQpv9yRff9ZAsWWALTEWibJsRQZDZD&quot;,&quot;active&quot;:1}" />

                                    <input type="hidden" id="google_event_credential11543" value="{&quot;id&quot;:2,&quot;title&quot;:&quot;Add to cart&quot;,&quot;conversion_id&quot;:null,&quot;send_to&quot;:null,&quot;active&quot;:1}" />
                                    <input type="hidden" id="event_id11543" value="0" />
                                    <input type="hidden" id="incremental11543" value="1" />

                                    <div className={`px-1 get_cart_totals ${sixCols ? 'col-2' : ''} ${fourCols ? 'col-3' : ''} ${threeCols ? 'col-4' : ''} ${twoCols ? 'col-6' : ''}`}>
                                        <div id="deal-box" class="position-relative">
                                            <div class="item-box bg-white">
                                                <div class="w-100 position-relative">
                                                    <div class="w-100 d-block mx-auto position-relative product-image-loader">
                                                        <div class="product_img_continer">
                                                            <a href="https://www.hamzastore.pk/6pcs-gold-luxury-swan-coffee-set" class="change_slug11543">
                                                                <img src="https://www.hamzastore.pk/images/product_gallery/md_color_images_1_bfc52eed-1998-4aa6-8f03-74488bf3ae13.jpg" data-src="https://www.hamzastore.pk/images/product_gallery/md_color_images_1_bfc52eed-1998-4aa6-8f03-74488bf3ae13.jpg" height="466" width="466" class="img-fluid w-100 d-block change_image11543 lazyloaded" alt="6pcs Gold Luxury Swan Coffee Set" />
                                                            </a>
                                                        </div>
                                                        <div class="addtocart_overlay text-center px-0">
                                                            <div class="row mx-0">
                                                                <div class="w-50 bg-secondary px-0">
                                                                    <button class="btn btn-transparent text-decoration-none px-0  sm-font9 text-white  font-size10">
                                                                        Add To Cart
                                                                    </button>
                                                                </div>
                                                                <div class="w-50 bg-primary px-0 ">
                                                                    <button class="btn bg-primary rounded btn-block sm-font9 text-uppercase font-size10 sm-font10 px-md-1 px-0  text-decoration-none" >
                                                                        Buy Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="box-style px-2 py-2 text-start">

                                                    <div class="box-title text-start">
                                                        <a href="https://www.hamzastore.pk/6pcs-gold-luxury-swan-coffee-set" class="item-link font-size12 font-weight-regular change_slug11543">6pcs
                                                            Gold Luxury Swan Coffee Set</a>
                                                    </div>

                                                    <div class="row mx-1 mt-1">
                                                        <div class="w-50 my-auto pricing px-0">
                                                            <p class="mb-0 font-weight-normal text-dark font-size14">Rs. 1,399
                                                            </p>
                                                            <div class="d-flex align-items-center resp-flex">
                                                                <p class="discount-price pe-1 mb-0">Rs. 1,599</p>
                                                            </div>
                                                        </div>
                                                        <div class="w-50 text-end px-0 my-auto ">
                                                            <small class="discount-label text-dark font-size10 font-weight-semi-bold p-1">13%
                                                                Off</small>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" id="g_brand10791" value="Hamza Store" />
                                    <input type="hidden" id="g_categorys10791" value="kitchen-accessories/" />
                                    <input type="hidden" id="g_last_categorys10791" value="" />
                                    <input type="hidden" id="qordertype" value="11" />
                                    <input type="hidden" name="id" id="current_id" value="10791" />
                                    <input type="hidden" id="title10791" value="Electric Double Burner Electric Stove Kitchen" />
                                    <input type="hidden" id="code10791" value="m10791                                    " />
                                    <input type="hidden" id="price10791" value="4749" />
                                    <input type="hidden" id="price" value="4749" />
                                    <input type="hidden" id="image10791" value="/sm_1735229372_352476e4dc2cad53f235b9c3ad75cadf_jpg_720x720q80_jpg_1024x1024@2x.jpeg" />
                                    <input type="hidden" id="event_time10791" value="1739292762" />
                                    <input type="hidden" id="client_user_agent10791" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36" />
                                    <input type="hidden" id="ip_address10791" value="202.47.40.139" />
                                    <input type="hidden" id="fb_event_credential10791" value="{&quot;id&quot;:1,&quot;event_id&quot;:&quot;1233542923706556&quot;,&quot;test_event_code&quot;:&quot;TEST98066&quot;,&quot;access_token&quot;:&quot;EAAHwgFkLlQcBO8oUCgV69xQ9KNXklJhOlBk53CiImXg4edfDVgRyRtZAzanZBtEm4ZAKKTo8agRZCmhqQCyQuESLKQHwzwZAhnmiENl0rxZCXKZASgtPZBwHSXDVZBot9dFCsKHQUwMZCBtFQLNSXNFOSIuKSGLFmIMMCBDrnQJ2vklXQpv9yRff9ZAsWWALTEWibJsRQZDZD&quot;,&quot;active&quot;:1}" />

                                    <input type="hidden" id="google_event_credential10791" value="{&quot;id&quot;:2,&quot;title&quot;:&quot;Add to cart&quot;,&quot;conversion_id&quot;:null,&quot;send_to&quot;:null,&quot;active&quot;:1}" />
                                    <input type="hidden" id="event_id10791" value="0" />
                                    <input type="hidden" id="incremental10791" value="1" />

                                    <div className={`px-1 get_cart_totals ${sixCols ? 'col-2' : ''} ${fourCols ? 'col-3' : ''} ${threeCols ? 'col-4' : ''} ${twoCols ? 'col-6' : ''}`}>
                                        <div id="deal-box" class="position-relative">
                                            <div class="item-box bg-white">
                                                <div class="w-100 position-relative">
                                                    <div class="position-absolute behaveImage">
                                                        <img class="img-fluid" src="https://www.hamzastore.pk/images/behave/673201be56fca.png" alt="" height="50" width="50" />
                                                    </div>
                                                    <div class="w-100 d-block mx-auto position-relative product-image-loader">
                                                        <div class="product_img_continer">
                                                            <a href="https://www.hamzastore.pk/electric-double-burner-electric-stove-kitchen--m10791" class="change_slug10791">
                                                                <img src="https://www.hamzastore.pk/images/product_gallery/md_1735229372_352476e4dc2cad53f235b9c3ad75cadf_jpg_720x720q80_jpg_1024x1024@2x.jpeg" data-src="https://www.hamzastore.pk/images/product_gallery/md_1735229372_352476e4dc2cad53f235b9c3ad75cadf_jpg_720x720q80_jpg_1024x1024@2x.jpeg" height="466" width="466" class="img-fluid w-100 d-block change_image10791 lazyloaded" alt="Electric Double Burner Electric Stove Kitchen" />
                                                            </a>
                                                        </div>
                                                        <div class="addtocart_overlay text-center px-0">
                                                            <div class="row mx-0">
                                                                <div class="w-50 bg-secondary px-0">
                                                                    <button class="btn btn-transparent text-decoration-none px-0  sm-font9 text-white  font-size10">
                                                                        Add To Cart
                                                                    </button>
                                                                </div>
                                                                <div class="w-50 bg-primary px-0 ">
                                                                    <button class="btn bg-primary rounded btn-block sm-font9 text-uppercase font-size10 sm-font10 px-md-1 px-0  text-decoration-none" >
                                                                        Buy Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="box-style px-2 py-2 text-start">

                                                    <div class="box-title text-start">
                                                        <a href="https://www.hamzastore.pk/electric-double-burner-electric-stove-kitchen--m10791" class="item-link font-size12 font-weight-regular change_slug10791">Electric
                                                            Double Burner Electric Stove Kitchen</a>
                                                    </div>

                                                    <div class="row mx-1 mt-1">
                                                        <div class="w-50 my-auto pricing px-0">
                                                            <p class="mb-0 font-weight-normal text-dark font-size14">Rs. 4,749
                                                            </p>
                                                            <div class="d-flex align-items-center resp-flex">
                                                                <p class="discount-price pe-1 mb-0">Rs. 5,499</p>
                                                            </div>
                                                        </div>
                                                        <div class="w-50 text-end px-0 my-auto ">
                                                            <small class="discount-label text-dark font-size10 font-weight-semi-bold p-1">14%
                                                                Off</small>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" id="g_brand10790" value="Hamza Store" />
                                    <input type="hidden" id="g_categorys10790" value="kitchen-accessories/" />
                                    <input type="hidden" id="g_last_categorys10790" value="" />
                                    <input type="hidden" id="qordertype" value="11" />
                                    <input type="hidden" name="id" id="current_id" value="10790" />
                                    <input type="hidden" id="title10790" value="Electric Single Burner 1000W Kitchen" />
                                    <input type="hidden" id="code10790" value="m10790                                    " />
                                    <input type="hidden" id="price10790" value="2999" />
                                    <input type="hidden" id="price" value="2999" />
                                    <input type="hidden" id="image10790" value="/1735228249_51Kc7paffL__AC_110x110@2x.jpg" />
                                    <input type="hidden" id="event_time10790" value="1739292762" />
                                    <input type="hidden" id="client_user_agent10790" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36" />
                                    <input type="hidden" id="ip_address10790" value="202.47.40.139" />
                                    <input type="hidden" id="fb_event_credential10790" value="{&quot;id&quot;:1,&quot;event_id&quot;:&quot;1233542923706556&quot;,&quot;test_event_code&quot;:&quot;TEST98066&quot;,&quot;access_token&quot;:&quot;EAAHwgFkLlQcBO8oUCgV69xQ9KNXklJhOlBk53CiImXg4edfDVgRyRtZAzanZBtEm4ZAKKTo8agRZCmhqQCyQuESLKQHwzwZAhnmiENl0rxZCXKZASgtPZBwHSXDVZBot9dFCsKHQUwMZCBtFQLNSXNFOSIuKSGLFmIMMCBDrnQJ2vklXQpv9yRff9ZAsWWALTEWibJsRQZDZD&quot;,&quot;active&quot;:1}" />

                                    <input type="hidden" id="google_event_credential10790" value="{&quot;id&quot;:2,&quot;title&quot;:&quot;Add to cart&quot;,&quot;conversion_id&quot;:null,&quot;send_to&quot;:null,&quot;active&quot;:1}" />
                                    <input type="hidden" id="event_id10790" value="0" />
                                    <input type="hidden" id="incremental10790" value="1" />

                                    <div className={`px-1 get_cart_totals ${sixCols ? 'col-2' : ''} ${fourCols ? 'col-3' : ''} ${threeCols ? 'col-4' : ''} ${twoCols ? 'col-6' : ''}`}>
                                        <div id="deal-box" class="position-relative">
                                            <div class="item-box bg-white">
                                                <div class="w-100 position-relative">
                                                    <div class="position-absolute behaveImage">
                                                        <img class="img-fluid" src="https://www.hamzastore.pk/images/behave/673201be56fca.png" alt="" height="50" width="50" />
                                                    </div>
                                                    <div class="w-100 d-block mx-auto position-relative product-image-loader">
                                                        <div class="product_img_continer">
                                                            <a href="https://www.hamzastore.pk/electric-single-burner-1000w-kitchen--m10790" class="change_slug10790">
                                                                <img src="https://www.hamzastore.pk/images/product_gallery/md_1735228249_51Kc7paffL__AC_110x110@2x.jpg" data-src="https://www.hamzastore.pk/images/product_gallery/md_1735228249_51Kc7paffL__AC_110x110@2x.jpg" height="466" width="466" class="img-fluid w-100 d-block change_image10790 lazyloaded" alt="Electric Single Burner 1000W Kitchen" />
                                                            </a>
                                                        </div>
                                                        <div class="addtocart_overlay text-center px-0">
                                                            <div class="row mx-0">
                                                                <div class="w-50 bg-secondary px-0">
                                                                    <button class="btn btn-transparent text-decoration-none px-0  sm-font9 text-white  font-size10" >
                                                                        Add To Cart
                                                                    </button>
                                                                </div>
                                                                <div class="w-50 bg-primary px-0 ">
                                                                    <button class="btn bg-primary rounded btn-block sm-font9 text-uppercase font-size10 sm-font10 px-md-1 px-0  text-decoration-none">
                                                                        Buy Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="box-style px-2 py-2 text-start">

                                                    <div class="box-title text-start">
                                                        <a href="https://www.hamzastore.pk/electric-single-burner-1000w-kitchen--m10790" class="item-link font-size12 font-weight-regular change_slug10790">Electric
                                                            Single Burner 1000W Kitchen</a>
                                                    </div>

                                                    <div class="row mx-1 mt-1">
                                                        <div class="w-50 my-auto pricing px-0">
                                                            <p class="mb-0 font-weight-normal text-dark font-size14">Rs. 2,999
                                                            </p>
                                                            <div class="d-flex align-items-center resp-flex">
                                                                <p class="discount-price pe-1 mb-0">Rs. 3,499</p>
                                                            </div>
                                                        </div>
                                                        <div class="w-50 text-end px-0 my-auto ">
                                                            <small class="discount-label text-dark font-size10 font-weight-semi-bold p-1">14%
                                                                Off</small>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" id="g_brand10787" value="Hamza Store" />
                                    <input type="hidden" id="g_categorys10787" value="kitchen-accessories/" />
                                    <input type="hidden" id="g_last_categorys10787" value="" />
                                    <input type="hidden" id="qordertype" value="11" />
                                    <input type="hidden" name="id" id="current_id" value="10787" />
                                    <input type="hidden" id="title10787" value="Dish Drying Mat For Kitchen Counter Top Mat" />
                                    <input type="hidden" id="code10787" value="M10787" />
                                    <input type="hidden" id="price10787" value="1199" />
                                    <input type="hidden" id="price" value="1199" />
                                    <input type="hidden" id="image10787" value="/357711193_843405524017290_2687963180166433197_n.jpg" />
                                    <input type="hidden" id="event_time10787" value="1739292762" />
                                    <input type="hidden" id="client_user_agent10787" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36" />
                                    <input type="hidden" id="ip_address10787" value="202.47.40.139" />
                                    <input type="hidden" id="fb_event_credential10787" value="{&quot;id&quot;:1,&quot;event_id&quot;:&quot;1233542923706556&quot;,&quot;test_event_code&quot;:&quot;TEST98066&quot;,&quot;access_token&quot;:&quot;EAAHwgFkLlQcBO8oUCgV69xQ9KNXklJhOlBk53CiImXg4edfDVgRyRtZAzanZBtEm4ZAKKTo8agRZCmhqQCyQuESLKQHwzwZAhnmiENl0rxZCXKZASgtPZBwHSXDVZBot9dFCsKHQUwMZCBtFQLNSXNFOSIuKSGLFmIMMCBDrnQJ2vklXQpv9yRff9ZAsWWALTEWibJsRQZDZD&quot;,&quot;active&quot;:1}" />

                                    <input type="hidden" id="google_event_credential10787" value="{&quot;id&quot;:2,&quot;title&quot;:&quot;Add to cart&quot;,&quot;conversion_id&quot;:null,&quot;send_to&quot;:null,&quot;active&quot;:1}" />
                                    <input type="hidden" id="event_id10787" value="0" />
                                    <input type="hidden" id="incremental10787" value="1" />

                                    <div className={`px-1 get_cart_totals ${sixCols ? 'col-2' : ''} ${fourCols ? 'col-3' : ''} ${threeCols ? 'col-4' : ''} ${twoCols ? 'col-6' : ''}`}>
                                        <div id="deal-box" class="position-relative">
                                            <div class="item-box bg-white">
                                                <div class="w-100 position-relative">
                                                    <div class="position-absolute behaveImage">
                                                        <img class="img-fluid" src="https://www.hamzastore.pk/images/behave/673201be56fca.png" alt="" height="50" width="50" />
                                                    </div>
                                                    <div class="w-100 d-block mx-auto position-relative product-image-loader">
                                                        <div class="product_img_continer">
                                                            <a href="https://www.hamzastore.pk/dish-drying-mat" class="change_slug10787">
                                                                <img src="https://www.hamzastore.pk/images/product_gallery/md_357711193_843405524017290_2687963180166433197_n.jpg" data-src="https://www.hamzastore.pk/images/product_gallery/md_357711193_843405524017290_2687963180166433197_n.jpg" height="466" width="466" class="img-fluid w-100 d-block change_image10787 lazyloaded" alt="Dish Drying Mat For Kitchen Counter Top Mat" />
                                                            </a>
                                                        </div>
                                                        <div class="addtocart_overlay text-center px-0">
                                                            <div class="row mx-0">
                                                                <div class="w-50 bg-secondary px-0">
                                                                    <button class="btn btn-transparent text-decoration-none px-0  sm-font9 text-white  font-size10" >
                                                                        Add To Cart
                                                                    </button>
                                                                </div>
                                                                <div class="w-50 bg-primary px-0 ">
                                                                    <button class="btn bg-primary rounded btn-block sm-font9 text-uppercase font-size10 sm-font10 px-md-1 px-0  text-decoration-none" >
                                                                        Buy Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="box-style px-2 py-2 text-start">

                                                    <div class="box-title text-start">
                                                        <a href="https://www.hamzastore.pk/dish-drying-mat" class="item-link font-size12 font-weight-regular change_slug10787">Dish
                                                            Drying Mat For Kitchen Counter Top Mat</a>
                                                    </div>

                                                    <div class="row mx-1 mt-1">
                                                        <div class="w-50 my-auto pricing px-0">
                                                            <p class="mb-0 font-weight-normal text-dark font-size14">Rs. 1,199
                                                            </p>
                                                            <div class="d-flex align-items-center resp-flex">
                                                                <p class="discount-price pe-1 mb-0">Rs. 1,299</p>
                                                            </div>
                                                        </div>
                                                        <div class="w-50 text-end px-0 my-auto ">
                                                            <small class="discount-label text-dark font-size10 font-weight-semi-bold p-1">8%
                                                                Off</small>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" id="g_brand10786" value="Hamza Store" />
                                    <input type="hidden" id="g_categorys10786" value="kitchen-accessories/" />
                                    <input type="hidden" id="g_last_categorys10786" value="" />
                                    <input type="hidden" id="qordertype" value="11" />
                                    <input type="hidden" name="id" id="current_id" value="10786" />
                                    <input type="hidden" id="title10786" value="360 Degree Rotating Crevice Cleaning Brush" />
                                    <input type="hidden" id="code10786" value="M10786" />
                                    <input type="hidden" id="price10786" value="1399" />
                                    <input type="hidden" id="price" value="1399" />
                                    <input type="hidden" id="image10786" value="/51lDeFnoRWL._AC_SX679.jpg" />
                                    <input type="hidden" id="event_time10786" value="1739292762" />
                                    <input type="hidden" id="client_user_agent10786" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36" />
                                    <input type="hidden" id="ip_address10786" value="202.47.40.139" />
                                    <input type="hidden" id="fb_event_credential10786" value="{&quot;id&quot;:1,&quot;event_id&quot;:&quot;1233542923706556&quot;,&quot;test_event_code&quot;:&quot;TEST98066&quot;,&quot;access_token&quot;:&quot;EAAHwgFkLlQcBO8oUCgV69xQ9KNXklJhOlBk53CiImXg4edfDVgRyRtZAzanZBtEm4ZAKKTo8agRZCmhqQCyQuESLKQHwzwZAhnmiENl0rxZCXKZASgtPZBwHSXDVZBot9dFCsKHQUwMZCBtFQLNSXNFOSIuKSGLFmIMMCBDrnQJ2vklXQpv9yRff9ZAsWWALTEWibJsRQZDZD&quot;,&quot;active&quot;:1}" />

                                    <input type="hidden" id="google_event_credential10786" value="{&quot;id&quot;:2,&quot;title&quot;:&quot;Add to cart&quot;,&quot;conversion_id&quot;:null,&quot;send_to&quot;:null,&quot;active&quot;:1}" />
                                    <input type="hidden" id="event_id10786" value="0" />
                                    <input type="hidden" id="incremental10786" value="1" />

                                    <div className={`px-1 get_cart_totals ${sixCols ? 'col-2' : ''} ${fourCols ? 'col-3' : ''} ${threeCols ? 'col-4' : ''} ${twoCols ? 'col-6' : ''}`}>
                                        <div id="deal-box" class="position-relative">
                                            <div class="item-box bg-white">
                                                <div class="w-100 position-relative">
                                                    <div class="position-absolute behaveImage">
                                                        <img class="img-fluid" src="https://www.hamzastore.pk/images/behave/673201be56fca.png" alt="" height="50" width="50" />
                                                    </div>
                                                    <div class="w-100 d-block mx-auto position-relative product-image-loader">
                                                        <div class="product_img_continer">
                                                            <a href="https://www.hamzastore.pk/360-degree-rotating-crevice-cleaning-brush" class="change_slug10786">
                                                                <img src="https://www.hamzastore.pk/images/product_gallery/md_51lDeFnoRWL._AC_SX679.jpg" data-src="https://www.hamzastore.pk/images/product_gallery/md_51lDeFnoRWL._AC_SX679.jpg" height="466" width="466" class="img-fluid w-100 d-block change_image10786 lazyloaded" alt="360 Degree Rotating Crevice Cleaning Brush" />
                                                            </a>
                                                        </div>
                                                        <div class="addtocart_overlay text-center px-0">
                                                            <div class="row mx-0">
                                                                <div class="w-50 bg-secondary px-0">
                                                                    <button class="btn btn-transparent text-decoration-none px-0  sm-font9 text-white  font-size10">
                                                                        Add To Cart
                                                                    </button>
                                                                </div>
                                                                <div class="w-50 bg-primary px-0 ">
                                                                    <button class="btn bg-primary rounded btn-block sm-font9 text-uppercase font-size10 sm-font10 px-md-1 px-0  text-decoration-none">
                                                                        Buy Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="box-style px-2 py-2 text-start">

                                                    <div class="box-title text-start">
                                                        <a href="https://www.hamzastore.pk/360-degree-rotating-crevice-cleaning-brush" class="item-link font-size12 font-weight-regular change_slug10786">360
                                                            Degree Rotating Crevice Cleaning Brush</a>
                                                    </div>

                                                    <div class="row mx-1 mt-1">
                                                        <div class="w-50 my-auto pricing px-0">
                                                            <p class="mb-0 font-weight-normal text-dark font-size14">Rs. 1,399
                                                            </p>
                                                            <div class="d-flex align-items-center resp-flex">
                                                                <p class="discount-price pe-1 mb-0">Rs. 3,000</p>
                                                            </div>
                                                        </div>
                                                        <div class="w-50 text-end px-0 my-auto ">
                                                            <small class="discount-label text-dark font-size10 font-weight-semi-bold p-1">53%
                                                                Off</small>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" id="g_brand10784" value="Hamza Store" />
                                    <input type="hidden" id="g_categorys10784" value="kitchen-accessories/" />
                                    <input type="hidden" id="g_last_categorys10784" value="" />
                                    <input type="hidden" id="qordertype" value="11" />
                                    <input type="hidden" name="id" id="current_id" value="10784" />
                                    <input type="hidden" id="title10784" value="Stainless Jet Cattel, 2 Liter" />
                                    <input type="hidden" id="code10784" value="M10784" />
                                    <input type="hidden" id="price10784" value="2100" />
                                    <input type="hidden" id="price" value="2100" />
                                    <input type="hidden" id="image10784" value="/51yOHzDnbKL._AC_SX569.jpg" />
                                    <input type="hidden" id="event_time10784" value="1739292762" />
                                    <input type="hidden" id="client_user_agent10784" value="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36" />
                                    <input type="hidden" id="ip_address10784" value="202.47.40.139" />
                                    <input type="hidden" id="fb_event_credential10784" value="{&quot;id&quot;:1,&quot;event_id&quot;:&quot;1233542923706556&quot;,&quot;test_event_code&quot;:&quot;TEST98066&quot;,&quot;access_token&quot;:&quot;EAAHwgFkLlQcBO8oUCgV69xQ9KNXklJhOlBk53CiImXg4edfDVgRyRtZAzanZBtEm4ZAKKTo8agRZCmhqQCyQuESLKQHwzwZAhnmiENl0rxZCXKZASgtPZBwHSXDVZBot9dFCsKHQUwMZCBtFQLNSXNFOSIuKSGLFmIMMCBDrnQJ2vklXQpv9yRff9ZAsWWALTEWibJsRQZDZD&quot;,&quot;active&quot;:1}" />

                                    <input type="hidden" id="google_event_credential10784" value="{&quot;id&quot;:2,&quot;title&quot;:&quot;Add to cart&quot;,&quot;conversion_id&quot;:null,&quot;send_to&quot;:null,&quot;active&quot;:1}" />
                                    <input type="hidden" id="event_id10784" value="0" />
                                    <input type="hidden" id="incremental10784" value="1" />

                                    <div className={`px-1 get_cart_totals ${sixCols ? 'col-2' : ''} ${fourCols ? 'col-3' : ''} ${threeCols ? 'col-4' : ''} ${twoCols ? 'col-6' : ''}`}>
                                        <div id="deal-box" class="position-relative">
                                            <div class="item-box bg-white">
                                                <div class="w-100 position-relative">
                                                    <div class="position-absolute behaveImage">
                                                        <img class="img-fluid" src="https://www.hamzastore.pk/images/behave/673201be56fca.png" alt="" height="50" width="50" />
                                                    </div>
                                                    <div class="w-100 d-block mx-auto position-relative product-image-loader">
                                                        <div class="product_img_continer">
                                                            <a href="https://www.hamzastore.pk/stainless-jet-cattel-2-liter" class="change_slug10784">
                                                                <img src="https://www.hamzastore.pk/images/product_gallery/md_51yOHzDnbKL._AC_SX569.jpg" data-src="https://www.hamzastore.pk/images/product_gallery/md_51yOHzDnbKL._AC_SX569.jpg" height="466" width="466" class="img-fluid w-100 d-block change_image10784 lazyloaded" alt="Stainless Jet Cattel, 2 Liter" />
                                                            </a>
                                                        </div>
                                                        <div class="addtocart_overlay text-center px-0">
                                                            <div class="row mx-0">
                                                                <div class="w-50 bg-secondary px-0">
                                                                    <button class="btn btn-transparent text-decoration-none px-0  sm-font9 text-white  font-size10" >
                                                                        Add To Cart
                                                                    </button>
                                                                </div>
                                                                <div class="w-50 bg-primary px-0 ">
                                                                    <button class="btn bg-primary rounded btn-block sm-font9 text-uppercase font-size10 sm-font10 px-md-1 px-0  text-decoration-none" >
                                                                        Buy Now
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="box-style px-2 py-2 text-start">

                                                    <div class="box-title text-start">
                                                        <a href="https://www.hamzastore.pk/stainless-jet-cattel-2-liter" class="item-link font-size12 font-weight-regular change_slug10784">Stainless
                                                            Jet Cattel, 2 Liter</a>
                                                    </div>

                                                    <div class="row mx-1 mt-1">
                                                        <div class="w-50 my-auto pricing px-0">
                                                            <p class="mb-0 font-weight-normal text-dark font-size14">Rs. 2,100
                                                            </p>
                                                            <div class="d-flex align-items-center resp-flex">
                                                                <p class="discount-price pe-1 mb-0">Rs. 2,499</p>
                                                            </div>
                                                        </div>
                                                        <div class="w-50 text-end px-0 my-auto ">
                                                            <small class="discount-label text-dark font-size10 font-weight-semi-bold p-1">16%
                                                                Off</small>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div id="loading-data" class="row page_1 change_cols"></div>
                        <div class="col-12 text-center">
                            <img data-src="https://www.hamzastore.pk/images/loader.gif" class="balls_loader img-fluid no-src lazyloaded" height="50" width="50" alt="Loading..." src="https://www.hamzastore.pk/images/loader.gif" style={{}} />

                        </div>
                    </div>
                </div>
            </div>

            {/* <div class="container-xxl mmbl-65" id="scrollTo">
                <div class="row">
                    <div class="col-12">
                    </div>
                </div>

                <div class="row mx-0 mt-3">
                    <div class="col-lg-3 mb-4">
                        <div class="bg-white p-md-3 stickySidebar">
                            <form action="https://www.hamzastore.pk/kitchen-accessories?" method="GET" style={{}} id="search_filter" class="category-sidebar">
                                <input type="hidden" name="cat_id" id="cat_id" value="6" />

                                <div class="form-group my-3 border-bottom pb-3">
                                    <p class="text-left font-weight-medium text-uppercase font-size16 mb-2"><span>Price</span></p>
                                    <div class="form-price-range-filter">
                                        <div id="slider-range" class="my-2"></div>
                                        <div class="row">
                                            <div class="col-5 pe-0">
                                                <input title="price min" class="form-control" type="number" placeholder="price min" id="min" name="price_min" value="100" />
                                            </div>
                                            <div class="col-5">
                                                <input title="price max" class="form-control" type="number" placeholder="price max" id="max" name="price_max" value="107086" />
                                            </div>
                                            <div class="col-2 px-0">
                                                <input type="submit" value="GO" class="btn btn-sm bg-primary text-white my-auto py-2" />
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div class="border-bottom my-3">
                                    <p class="text-start font-weight-medium text-uppercase font-size16 side-underline mb-2"><span>Brands</span></p>
                                    <ul class="list-unstyled scroll_cat filter_wrapper hide_filter_cs px-1" id="scroll_brand">
                                        <li class='cursor-pointer d-lg-block d-inline-block my-2 me-lg-0 me-2 filter_font'><div class='form-check brands-style'><div><input class='brands form-check-input' type='checkbox' name='brand[]' value='hamza-store' id='hamza-store' /><label class='mb-0' for='hamza-store'>Hamza Store</label></div><span>(1003)</span></div></li>            </ul>
                                </div>


                                <div class="col-12 mb-3">
                                    <p class="text-start mb-2 font-weight-medium text-uppercase font-size16 groups"><span>Colors</span></p>
                                    <ul class="list-unstyled ps-1 list-style-filter filter_wrapper hide_filter_cs border-bottom" id="scroll0">
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr12"
                                                    value="White" />
                                                <label onclick="checkthis('attr12')" for="attr3" class="mb-0 font-weight-normal w-100">White</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr25"
                                                    value="Grey" />
                                                <label onclick="checkthis('attr25')" for="attr3" class="mb-0 font-weight-normal w-100">Grey</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr14"
                                                    value="Green" />
                                                <label onclick="checkthis('attr14')" for="attr3" class="mb-0 font-weight-normal w-100">Green</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr15"
                                                    value="Pink" />
                                                <label onclick="checkthis('attr15')" for="attr3" class="mb-0 font-weight-normal w-100">Pink</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr28"
                                                    value="Red" />
                                                <label onclick="checkthis('attr28')" for="attr3" class="mb-0 font-weight-normal w-100">Red</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr13"
                                                    value="Black" />
                                                <label onclick="checkthis('attr13')" for="attr3" class="mb-0 font-weight-normal w-100">Black</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr18"
                                                    value="Blue" />
                                                <label onclick="checkthis('attr18')" for="attr3" class="mb-0 font-weight-normal w-100">Blue</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr123"
                                                    value="Midnight Blue" />
                                                <label onclick="checkthis('attr123')" for="attr3" class="mb-0 font-weight-normal w-100">Midnight Blue</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr121"
                                                    value="Moss Green" />
                                                <label onclick="checkthis('attr121')" for="attr3" class="mb-0 font-weight-normal w-100">Moss Green</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr87"
                                                    value="Off White" />
                                                <label onclick="checkthis('attr87')" for="attr3" class="mb-0 font-weight-normal w-100">Off White</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr37"
                                                    value="Orange" />
                                                <label onclick="checkthis('attr37')" for="attr3" class="mb-0 font-weight-normal w-100">Orange</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr122"
                                                    value="Violet Blue" />
                                                <label onclick="checkthis('attr122')" for="attr3" class="mb-0 font-weight-normal w-100">Violet Blue</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Colors3[]" groups="Colors" id="attr38"
                                                    value="Yellow" />
                                                <label onclick="checkthis('attr38')" for="attr3" class="mb-0 font-weight-normal w-100">Yellow</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                    </ul>
                                    <p class="text-start mb-2 font-weight-medium text-uppercase font-size16 groups"><span>Size</span></p>
                                    <ul class="list-unstyled ps-1 list-style-filter filter_wrapper hide_filter_cs border-bottom" id="scroll1">
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr42"
                                                    value=" 2 TIER" />
                                                <label onclick="checkthis('attr42')" for="attr1" class="mb-0 font-weight-normal w-100"> 2 TIER</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr54"
                                                    value="10 Pound" />
                                                <label onclick="checkthis('attr54')" for="attr1" class="mb-0 font-weight-normal w-100">10 Pound</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr118"
                                                    value="2 Layer" />
                                                <label onclick="checkthis('attr118')" for="attr1" class="mb-0 font-weight-normal w-100">2 Layer</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr88"
                                                    value="3 Layer" />
                                                <label onclick="checkthis('attr88')" for="attr1" class="mb-0 font-weight-normal w-100">3 Layer</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr52"
                                                    value="3 Pound" />
                                                <label onclick="checkthis('attr52')" for="attr1" class="mb-0 font-weight-normal w-100">3 Pound</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr43"
                                                    value="3 TIER" />
                                                <label onclick="checkthis('attr43')" for="attr1" class="mb-0 font-weight-normal w-100">3 TIER</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr139"
                                                    value="3-layer" />
                                                <label onclick="checkthis('attr139')" for="attr1" class="mb-0 font-weight-normal w-100">3-layer</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr44"
                                                    value="4 TIER" />
                                                <label onclick="checkthis('attr44')" for="attr1" class="mb-0 font-weight-normal w-100">4 TIER</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr53"
                                                    value="5 Pound" />
                                                <label onclick="checkthis('attr53')" for="attr1" class="mb-0 font-weight-normal w-100">5 Pound</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr45"
                                                    value="5 TIER" />
                                                <label onclick="checkthis('attr45')" for="attr1" class="mb-0 font-weight-normal w-100">5 TIER</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr205"
                                                    value="Pack of 10" />
                                                <label onclick="checkthis('attr205')" for="attr1" class="mb-0 font-weight-normal w-100">Pack of 10</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr206"
                                                    value="Pack of 20" />
                                                <label onclick="checkthis('attr206')" for="attr1" class="mb-0 font-weight-normal w-100">Pack of 20</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Size1[]" groups="Size" id="attr207"
                                                    value="Pack of 30" />
                                                <label onclick="checkthis('attr207')" for="attr1" class="mb-0 font-weight-normal w-100">Pack of 30</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                    </ul>
                                    <p class="text-start mb-2 font-weight-medium text-uppercase font-size16 groups"><span>Color</span></p>
                                    <ul class="list-unstyled ps-1 list-style-filter filter_wrapper hide_filter_cs border-bottom" id="scroll2">
                                        <li class="list-item d-lg-block d-inline-block my-2 me-lg-0 me-2 cursor-pointer filter_font">
                                            <div class="form-check mb-0">
                                                <input title="attributes" type="checkbox" class="attribute_filters filters form-check-input " name="Color6[]" groups="Color" id="attr637"
                                                    value="Random" />
                                                <label onclick="checkthis('attr637')" for="attr6" class="mb-0 font-weight-normal w-100">Random</label><span class="float-right"></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>


                                <div class="col-12 text-end pb-2 pe-2">
                                    <a href="kitchen-accessories.html" class="btn btn-sm bg-primary">Reset</a>
                                </div>
                            </form>
                        </div>
                    </div>            <div class="col-12 col-lg-9 innerpage">
                        <div class="row bg-white mb-3 rounded">
                            <div class="text-left ">
                                <nav aria-label="breadcrumb" class="w-100"><ol class="breadcrumb text-dark px-0 m-0 font-size12"><li class="breadcrumb-item "><a class="text-uppercase" href="index.html">Home</a></li><li class="breadcrumb-item active" aria-current="page"><a class="text-uppercase" href="kitchen-accessories.html">Kitchen Accessories</a></li></ol></nav>
                                <input type='hidden' id='total_products' value='24' />                            <div class="row border-bottom pb-2">
                                    <div class="col-6">
                                        <h1 class="font-size17 font-weight-bold"> Kitchen Accessories</h1>
                                    </div>
                                    <div class="col-6">
                                        <div class="result-count">
                                            <div class="col-switch flex justify-content-end">
                                                <span class="cursor-pointer pr six  me-2" data-col="2"></span>
                                                <span class="cursor-pointer pr four active  me-2 " data-col="3"></span>
                                                <span class="cursor-pointer pr three  me-2 " data-col="4"></span>
                                                <span class="cursor-pointer pr two  me-2" data-col="6"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                            </div>

                            <div class="col-12 pb-2">
                                <ul class="list-inline mb-0 sort_order">
                                    <li class="list-inline-item mx-0 sort-by-title font-weight-bold">Sort By : </li>
                                    <li class="list-inline-item mx-0">
                                        <button type="button" onclick="selectsort('featured-product',this)" class="bg-transparent sort-selector-font font-weight-normal sort-selector-hover my-0 border-0 py-2 my-1" >Featured Product</button>
                                    </li>
                                    <li class="list-inline-item mx-0">
                                        <button type="button" onclick="selectsort('new-arrivals',this)" class="bg-transparent sort-selector-font font-weight-normal sort-selector-hover my-0 border-0 py-2 my-1"   >New Arrivals</button>
                                    </li>
                                    <li class="list-inline-item mx-0">
                                        <button type="button" onclick="selectsort('price-low-to-high',this)" class="bg-transparent sort-selector-font font-weight-normal sort-selector-hover my-0 border-0 py-2 my-1">Price (Low - High)</button>
                                    </li>
                                    <li class="list-inline-item mx-0">
                                        <button type="button" onclick="selectsort('price-high-to-low',this)" class="bg-transparent sort-selector-font font-weight-normal sort-selector-hover my-0 border-0 py-2 my-1">Price (High - Low)</button>
                                    </li>
                                    <li class="list-inline-item mx-0">
                                        <button type="button" onclick="selectsort('discount-low-to-high',this)" class="bg-transparent sort-selector-font font-weight-normal sort-selector-hover my-0 border-0 py-2 my-1">Discount % (Low - High)</button>
                                    </li>
                                    <li class="list-inline-item mx-0">
                                        <button type="button" onclick="selectsort('discount-high-to-low',this)" class="bg-transparent sort-selector-font font-weight-normal sort-selector-hover my-0 border-0 py-2 my-1">Discount % (High - Low)</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="row d-none">
                            <div class="col-md-4 col-4">
                                <div class="form-group">
                                    <div class="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <label for="staticEmail" class=" col-md-12 col-sm-12 col-form-label pr-0 text-left mt-0">Sort by:</label>
                                        <select class="form-control rounded-0" onchange="page()" id="order_by_filter_dd">
                                            <option data-val="sort = 0, sort, id" value="DESC">Featured Product</option>
                                            <option data-val="discounted" value="ASC">Price (Low - High)</option>
                                            <option data-val="discounted" value="DESC">Price (High - Low)</option>
                                            <option data-val="title" value="ASC">Alphabetical (A - Z)</option>
                                            <option data-val="title" value="DESC">Alphabetical (Z - A)</option>
                                            <option data-val="discount_percent" value="ASC">Discount % (Low - High)</option>
                                            <option data-val="discount_percent" value="DESC">Discount % (High - Low)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="hidden" id="change_col_val" value="3" />
                        <div class="row">
                            <div class="col-12 px-md-2">
                                <div class="row change_cols" id="products_listing">


                                    <div class="col-6 col-md-3 px-2">
                                        <div class="product-image-loader shimmer-effect shimmer-placeholder"></div>
                                    </div>
                                    <div class="col-6 col-md-3 px-2">
                                        <div class="product-image-loader shimmer-effect shimmer-placeholder"></div>
                                    </div>
                                    <div class="col-6 col-md-3 px-2">
                                        <div class="product-image-loader shimmer-effect shimmer-placeholder"></div>
                                    </div>
                                    <div class="col-6 col-md-3 px-2">
                                        <div class="product-image-loader shimmer-effect shimmer-placeholder"></div>
                                    </div>
                                    <div class="col-6 col-md-3 px-2">
                                        <div class="product-image-loader shimmer-effect shimmer-placeholder"></div>
                                    </div>
                                    <div class="col-6 col-md-3 px-2">
                                        <div class="product-image-loader shimmer-effect shimmer-placeholder"></div>
                                    </div>
                                    <div class="col-6 col-md-3 px-2">
                                        <div class="product-image-loader shimmer-effect shimmer-placeholder"></div>
                                    </div>
                                    <div class="col-6 col-md-3 px-2">
                                        <div class="product-image-loader shimmer-effect shimmer-placeholder"></div>
                                    </div>






                                </div>
                            </div>
                        </div>

                        <div id="loading-data" class="row page_1 change_cols"></div>
                        <div class="col-12 text-center">
                            <img data-src="https://www.hamzastore.pk/images/loader.gif" class="balls_loader img-fluid no-src lazyload" height="50" width="50" alt="Loading..." />

                        </div>
                    </div>
                </div>
            </div> */}

            {/* <Footer /> */}
        </>
    )
}
