import React, { useState } from "react";
// import "../App.css"

export default function HeaderMini() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSidebarOpen1, setIsSidebarOpen1] = useState(false);
    const [isSidebarOpen2, setIsSidebarOpen2] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleSidebar1 = () => {
        setIsSidebarOpen1(!isSidebarOpen1);
    };

    const toggleSidebar2 = () => {
        setIsSidebarOpen2(!isSidebarOpen2);
    };


    return (
        <div>
            <section  className="Global-padding bg-primary border-bottom d-none d-lg-block">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-xl-6 col-6 my-auto">
                            <marquee className="text-uppercase mt-1 font-weight-medium font-size14">Welcome to Hamza Store | Delivery Charges Rs 210,We offer Free Delivery over purchase of Rs.1600 all over Pakistan , Download Our Mobile App Now Hamzastore.pk</marquee>
                        </div>
                        <div className="col-xl-6 col-6 text-end my-auto">
                            <ul className="list-inline mb-0 text-uppercase">

                                <li className="list-inline-item py-2 px-2">
                                    <div className="dropdown">
                                        <a href="contact.html" className="text-white font-size14">CUSTOMER CARE</a>
                                        <div className="dropdown-menu need_help1" aria-labelledby="dropdownMenuButton">
                                            <div className="dropdown-divider"></div>
                                            <p className="font-size12 mb-2 text-center">Track your order</p>
                                            <form action="https://www.hamzastore.pk/track-your-order" method="post">
                                                <div className="form-group mb-2">
                                                    <label for="ordernumber" className="font-size12 mb-1">Your order
                                                        number</label>
                                                    <input type="text" className="form-control form-control-sm rounded-0" id="ordernumber" name="order_no" aria-describedby="orderHelp" required autocomplete="off" />
                                                </div>
                                                <div className="form-group mb-2">
                                                    <label for="track_email" className="font-size12 mb-1">Your Email or Mobile</label>
                                                    <input type="text" className="form-control form-control-sm rounded-0" id="track_email" name="email" aria-describedby="emailHelp" required autocomplete="off" />
                                                </div>
                                                <button type="submit" name="submit"
                                                    className="btn btn-primary btn-sm btn-block text-white rounded-0">
                                                    Track
                                                </button>
                                            </form>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item pl-1 font-size12" href="contact.html">Contact Us</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item pl-1 font-size12" href="faqs.html">FAQ's</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item pl-1 font-size12" href="https://api.whatsapp.com/send?phone=92-343-6663323" target="_blank">Chat on WhatsApp</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com/Hamzastorepakistan/" title="facebook" rel="noreferrer" target="_blank" className="">
                                        <img src="images/theme_icons/facebook-icon-large.svg" alt="facebook" title="" height="21" width="21" className="fb-filter white-icons" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://api.whatsapp.com/send?phone=923436663323" title="whatsapp" rel="noreferrer" target="_blank" className="text-dark">
                                        <img src="images/theme_icons/whatsapp-icon-large.svg" alt="whatsapp" title="" height="21" width="21" className="whatsapp-filter white-icons" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/hamzastorepakistan/" title="instagram" rel="noreferrer" target="_blank" className="text-dark">
                                        <img src="images/theme_icons/instagram-icon-large.svg" alt="instagram" title="" height="21" width="21" className="insta-filter white-icons" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section id="header-section" className="Global-padding sticky-top img-gif">
                <div id="wrapper" className="bg-white">
                    <div id="main" className="w-100">
                        <div className="container-xxl d-none d-lg-block py-2">
                            <div className="row">
                                <div className="col-3 my-auto">
                                    <a href="index.html">
                                        <img src="images/site_logo/logo_svg_6080.svg" className="img-fluid" height="42" width="180" alt="Hamza Store" />
                                    </a>
                                </div>
                                <div className="col-6 my-auto">
                                    <form className="form-inline search-form" action="https://www.hamzastore.pk/search" method="get">
                                        <div className="row bg-gray py-1 rounded">
                                            <div className="col-xl-10 col-9">
                                                <input className="form-control search bg-transparent border-0 rounded-0" type="search" name="search_key" id="example-search-input4" placeholder="What Are You Looking For" required="required" autoComplete="off" />
                                            </div>
                                            <div className="col-xl-2 col-3 text-end my-auto">
                                                <button className="btn bg-primary rounded px-4 py-1" title="Search Here" type="submit" >
                                                    <img src="images/theme_icons/search_icon.svg" className="white-icons" width="22" height="22" alt="Search" />
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-3 my-auto text-end">
                                    <ul className="list-inline mb-0">
                                        <li className="list-inline-item position-relative me-3">
                                            <a href="tel:02132227750" rel="nofollow" className="text-dark font-size24 text-uppercase text-decoration-none">
                                                <img src="images/theme_icons/telephone.svg" alt="Cart Icon" className="mt-1" width="28" height="28" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item dropdown d-none-dropdown position-relative me-3 py-1" id="account-item">
                                            <a href="user.html">
                                                <img src="images/theme_icons/people.svg" alt="User Icon" width="30" height="30" />
                                            </a>
                                            <div className="dropdown-menu p-3" aria-labelledby='navbarDropdownx'>
                                                <p className="font12 mb-3 text-capitalize text-black">Welcome</p>
                                                <div className="dropdown-divider"></div>
                                                <a href="login.html" className="btn bg-dark text-white d-grid">Login</a>
                                                <p className="font12 mt-2">New customer?<a href="signup.html" className="text-black">
                                                    <b><a href="signup.html">Sign up</a></b></a>
                                                </p>
                                            </div>
                                        </li>
                                        <li className="list-inline-item position-relative">
                                            <button className="btn p-0 text-decoration-none" id="stop_scroll_cart_desktop" onClick={() => { }}>
                                                <img src="images/theme_icons/add-to-cart.svg" alt="Cart Icon" width="30" height="30" />
                                            </button>
                                            <span className="nav-cart-total bg-secondary position-absolute cart_count_style">0</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <section className="bg-white border-bottom border-top d-none py-2 d-lg-block">
                            <div className="container-xxl">
                                <div className="row">
                                    <div className="col-2 my-auto px-xl-2 px-2">
                                        <div className="dropdown">
                                            <button className="all_cat btn bg-primary text-decoration-none text-white rounded text-start py-2 w-100" id="BrowseCategories">
                                                <img className="img-fluid me-2" src="images/theme_icons/align-left-icon.svg" alt="hamburger-icon" width="18" height="18" />
                                                <span className="text-cat text-white">All Categories <img className="img-fluid white-icons float-end mt-2" src="images/theme_icons/angle-down.svg" alt="arrow-bottom" width="15" height="15" /></span>
                                            </button>
                                            <div className="dropdown-menu cat-dropdown catDropdownHeight py-0 my-0 w-100 rounded-0" id="CategoriesDropdown" aria-labelledby="dropdownMenuButton"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 my-auto position-unset">
                                        <ul className="list-inline mb-0">
                                            <li className="list-inline-item mx-xl-3 mx-2  ">
                                                <a href="index.html" className="dropdown-toggle font-size16 font-weight-medium py-4 nav-hover" data-toggle="dropdown">
                                                    Home                                        </a>
                                            </li>
                                            <li className="list-inline-item mx-xl-3 mx-2  ">
                                                <a href="about-us.html" className="dropdown-toggle font-size16 font-weight-medium py-4 nav-hover" data-toggle="dropdown">
                                                    About Us                                        </a>
                                            </li>
                                            <li className="list-inline-item mx-xl-3 mx-2  ">
                                                <a href="blog.html" className="dropdown-toggle font-size16 font-weight-medium py-4 nav-hover" data-toggle="dropdown">
                                                    Blog                                        </a>
                                            </li>
                                            <li className="list-inline-item mx-xl-3 mx-2  ">
                                                <a href="reviews.html" className="dropdown-toggle font-size16 font-weight-medium py-4 nav-hover" data-toggle="dropdown">
                                                    Reviews                                        </a>
                                            </li>
                                            <li className="list-inline-item mx-xl-3 mx-2  ">
                                                <a href="contact.html" className="dropdown-toggle font-size16 font-weight-medium py-4 nav-hover" data-toggle="dropdown">
                                                    Contact Us                                        </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-3 my-auto">
                                        <ul className="list-inline px-0 mb-0 text-end">
                                            <li className="list-inline-item">
                                                <a href="tel:02132227750" rel="nofollow" className="text-dark font-size16 font-weight-medium text-uppercase text-decoration-none">Call us(02132227750)</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </section>

                        <div>
                            <div className=" m-header img-gif d-block d-lg-none">
                                <header id="head" className="fixed-top ">
                                    <div className="container-xxl bg-primary">
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-4 my-auto">
                                                <marquee className="text-uppercase text-white mt-1 font-weight-medium">Welcome to Hamza Store | Delivery Charges Rs 210,We offer Free Delivery over purchase of Rs.1600 all over Pakistan , Download Our Mobile App Now Hamzastore.pk</marquee>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="container-xxl py-2 border-bottom shadow">
                                        <div className="row">
                                            <div className="col-sm-1 col-2 my-auto">
                                                <span className="text-dark sidebar-btn">
                                                    <button className="btn p-0" id="sidebarCollapsembl" onClick={toggleSidebar} title="Mobile Sidebar Menu">
                                                        <img src="images/theme_icons/hamburger-new-icon.svg" width="28" height="28" alt="Menu Button" />
                                                    </button>
                                                </span>
                                            </div>
                                            <div className="col-5 my-auto">
                                                <a href="index.html">
                                                    <img src="images/site_logo/logo_svg_6080.svg" height="75" width="120" className="img-fluid" alt="Hamza Store" />
                                                </a>
                                            </div>
                                            <div className="col-sm-6 col-5 my-auto text-end">
                                                <ul className="list-inline mb-0">
                                                    <li className="list-inline-item ">
                                                        <button className="pb-0 btn search-button p-0" onClick={toggleSidebar2} >
                                                            <img src="images/theme_icons/search_icon.svg" alt="Search" width="25" height="25" />
                                                        </button>
                                                    </li>
                                                    <li className="list-inline-item position-relative">
                                                        <button className="btn p-0 cart-item-list" onClick={toggleSidebar1} id="stop_scroll_cart_mobile">
                                                            <img src="images/theme_icons/add-to-cart.svg" alt="Cart" width="25" height="25" />
                                                        </button>
                                                        <div className="nav-cart-total position-absolute cart_count_style">0</div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <form className="form-inline search-form d-flex justify-content-center position-static" action="https://www.hamzastore.pk/search" method="get">
                                                <div className="position-absolute" id="show_search" style={{ display: isSidebarOpen2 ? 'block' : 'none' }}   >
                                                    <a >
                                                        <img src="images/theme_icons/close-btn-ico.svg" alt="cut-img" width="14" height="14" className="img-fluid close_btn" onClick={toggleSidebar2} />
                                                    </a>
                                                    <input className="form-control search border-0 shadow  w-100 py-3" type="search" name="search_key" id="example-search-input4-mbl" placeholder="Search your products" required="required" autoComplete="off" />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </header>
                            </div>
                            <nav id="sidebar" className={`sidebar-toggle ${isSidebarOpen ? 'active' : ''}`}       >


                                <ul className="nav nav-pills justify-content-center p-1" id="sidebar_tabs" role="tablist">
                                    <li className="nav-item w-50 border-right" role="presentation">
                                        <a className="nav-link active text-center text-uppercase rounded-0 font-size14 py-3 position-relative" href="#mobileCategories" data-bs-toggle="pill" role="tab" aria-label="Categories tab" aria-controls="mobileCategories" aria-selected="true">Categories</a>
                                    </li>
                                    <li className="nav-item w-50 border-left" role="presentation">
                                        <a className="nav-link show text-center text-uppercase rounded-0 font-size14 py-3 position-relative" href="#mobileMenu" data-bs-toggle="pill" role="tab" aria-label="Menu tab" aria-controls="mobileMenu" aria-selected="false">Menu</a>
                                    </li>
                                </ul>





                                <div className="tab-content mb-70">
                                    <div id="mobileCategories" className="container tab-pane active show fade px-0">
                                        <ul className="list-unstyled components pt-md-3 pt-0 border-top">
                                            <li>
                                                <div className="row">
                                                    <div className="col-10 my-auto">
                                                        <a href="home-and-decor.html">Home and Decor</a>
                                                    </div>
                                                </div>

                                                <ul className="collapse list-unstyled" id="homeSubmenu38">

                                                </ul>
                                            </li><li>
                                                <div className="row">
                                                    <div className="col-10 my-auto">
                                                        <a href="women-fashion.html">Women Fashion</a>
                                                    </div>
                                                    <div className="col-2 my-auto px-0">
                                                        <a href="#homeSubmenu2" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle catDropdown" title="See More Women Fashion"><span className="hideit">Women Fashion</span></a>
                                                    </div>
                                                </div>

                                                <ul className="collapse list-unstyled" id="homeSubmenu2">

                                                    <li>
                                                        <div className="row">
                                                            <div className="col-10 my-auto">
                                                                <a href="women-fashion/undergarments-night-suits.html" className="catLink ">Undergarments / Night Suits</a>
                                                            </div>
                                                        </div>
                                                        <ul className="collapse list-unstyled" id="homeSubmenu-child27">
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li><li>
                                                <div className="row">
                                                    <div className="col-10 my-auto">
                                                        <a href="footwear.html">Footwear</a>
                                                    </div>
                                                    <div className="col-2 my-auto px-0">
                                                        <a href="#homeSubmenu33" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle catDropdown" title="See More Footwear"><span className="hideit">Footwear</span></a>
                                                    </div>
                                                </div>

                                                <ul className="collapse list-unstyled" id="homeSubmenu33">

                                                    <li>
                                                        <div className="row">
                                                            <div className="col-10 my-auto">
                                                                <a href="footwear/women-slippers.html" className="catLink ">Women Slippers</a>
                                                            </div>
                                                        </div>
                                                        <ul className="collapse list-unstyled" id="homeSubmenu-child34">
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li><li>
                                                <div className="row">
                                                    <div className="col-10 my-auto">
                                                        <a href="baby-kids-toys.html">Baby, Kids &amp; Toys</a>
                                                    </div>
                                                </div>

                                                <ul className="collapse list-unstyled" id="homeSubmenu4">

                                                </ul>
                                            </li><li>
                                                <div className="row">
                                                    <div className="col-10 my-auto">
                                                        <a href="home-living.html">Home &amp; Living</a>
                                                    </div>
                                                </div>

                                                <ul className="collapse list-unstyled" id="homeSubmenu5">

                                                </ul>
                                            </li><li>
                                                <div className="row">
                                                    <div className="col-10 my-auto">
                                                        <a href="mobile-accessories.html">Mobile Accessories</a>
                                                    </div>
                                                </div>

                                                <ul className="collapse list-unstyled" id="homeSubmenu14">

                                                </ul>
                                            </li><li>
                                                <div className="row">
                                                    <div className="col-10 my-auto">
                                                        <a href="kitchen-accessories.html">Kitchen Accessories</a>
                                                    </div>
                                                </div>

                                                <ul className="collapse list-unstyled" id="homeSubmenu6">

                                                </ul>
                                            </li><li>
                                                <div className="row">
                                                    <div className="col-10 my-auto">
                                                        <a href="health-fitness.html">Health &amp; Fitness</a>
                                                    </div>
                                                </div>

                                                <ul className="collapse list-unstyled" id="homeSubmenu13">

                                                </ul>
                                            </li><li>
                                                <div className="row">
                                                    <div className="col-10 my-auto">
                                                        <a href="tool-kits.html">Tool Kits</a>
                                                    </div>
                                                </div>

                                                <ul className="collapse list-unstyled" id="homeSubmenu17">

                                                </ul>
                                            </li><li>
                                                <div className="row">
                                                    <div className="col-10 my-auto">
                                                        <a href="luxury-house-hold-kitchen.html">Luxury House Hold &amp; Kitchen Products</a>
                                                    </div>
                                                </div>

                                                <ul className="collapse list-unstyled" id="homeSubmenu37">

                                                </ul>
                                            </li><li>
                                                <div className="row">
                                                    <div className="col-10 my-auto">
                                                        <a href="bbqbar-b-que.html">BBQ-Bar B Que</a>
                                                    </div>
                                                </div>

                                                <ul className="collapse list-unstyled" id="homeSubmenu19">

                                                </ul>
                                            </li><li>
                                                <div className="row">
                                                    <div className="col-10 my-auto">
                                                        <a href="clearance-sale.html">Clearance Sale</a>
                                                    </div>
                                                </div>

                                                <ul className="collapse list-unstyled" id="homeSubmenu30">

                                                </ul>
                                            </li><li>
                                                <div className="row">
                                                    <div className="col-10 my-auto">
                                                        <a href="automobile-accessories.html">Automobile Accessories</a>
                                                    </div>
                                                </div>

                                                <ul className="collapse list-unstyled" id="homeSubmenu35">

                                                </ul>
                                            </li><li>
                                                <div className="row">
                                                    <div className="col-10 my-auto">
                                                        <a href="indooroutdoor-lightslamps.html">Indoor/Outdoor Lights/Lamps</a>
                                                    </div>
                                                </div>

                                                <ul className="collapse list-unstyled" id="homeSubmenu36">

                                                </ul>
                                            </li><li>
                                                <div className="row">
                                                    <div className="col-10 my-auto">
                                                        <a href="shop.html">Shop</a>
                                                    </div>
                                                </div>

                                                <ul className="collapse list-unstyled" id="homeSubmenu12">

                                                </ul>
                                            </li><li>
                                                <div className="row">
                                                    <div className="col-10 my-auto">
                                                        <a href="wall-clocks.html">Wall Clocks</a>
                                                    </div>
                                                </div>

                                                <ul className="collapse list-unstyled" id="homeSubmenu15">

                                                </ul>
                                            </li><li>
                                                <div className="row">
                                                    <div className="col-10 my-auto">
                                                        <a href="budget-buying-below-rs499.html">Budget Buying Below Rs499</a>
                                                    </div>
                                                </div>

                                                <ul className="collapse list-unstyled" id="homeSubmenu26">

                                                </ul>


                                            </li></ul></div>










                                    <div id="mobileMenu" className="container tab-pane fade px-0">
                                        <ul className="list-unstyled site-mobile-menu components border-bottom-0 pt-0 border-top">
                                            <li><a className="text-decoration-none" href="https://www.hamzastore.pk/">Home</a></li>
                                            <li><a className="text-decoration-none" href="https://www.hamzastore.pk/about-us">About Us</a></li>
                                            <li><a className="text-decoration-none" href="https://www.hamzastore.pk/blog">Blog</a></li>
                                            <li><a className="text-decoration-none" href="https://www.hamzastore.pk/reviews">Reviews</a></li>
                                            <li><a className="text-decoration-none" href="https://www.hamzastore.pk/contact">Contact Us</a></li>
                                            <li><a className="text-decoration-none" href="https://www.hamzastore.pk/track-your-order">Track Order</a></li>
                                        </ul>
                                    </div>
                                </div>











                                <div className="sign-button p-3">
                                    <a href="login.html" className="btn font-size16 text-uppercase bg-white rounded border w-100">Login</a>
                                    <a href="signup.html" className="btn font-size16 text-uppercase bg-primary rounded w-100">Sign Up</a>
                                </div>

                            </nav>

























                            <div id="mySidenav" className={`sidenav ${isSidebarOpen1 ? 'active' : ''}`} style={{ width: '0px' }}>
                                <div className="row border sidenavheader bg-white">
                                    <div className="col-10 px-0">
                                        <h6 className="text-uppercase text-dark p-1 my-1 cart-heading">SHOPPING CART</h6>
                                    </div>
                                    <div className="col-2 my-auto d-none">
                                        <a href="javascript:closeNav()" className="text-dark font-size20 text-decoration-none"><i className="fa fa-close text-dark cursor-pointer mr-2 close-cart-side" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                                <div className='px-1 load_cart_dropdown' id="load_cart_dropdown" aria-labelledby='navbarDropdown'>


                                    <div className='row text-center pt-md-4 pt-3'>
                                        <div className='col-12'>
                                            <img data-src="https://www.hamzastore.pk/images/cart-cut-icon.svg" className='img-fluid no-src lazyload' alt='Empty Cart' style={{ width: '35%', opacity: 0.1 }} />
                                        </div>
                                        <div className='col-12'>
                                            <p className='my-3 text-dark font-weight-semi-bold'>NO PRODUCTS IN THE CART.</p>
                                            <button className='btn bg-primary text-white rounded-pill px-4 py-2' onClick={toggleSidebar1}>Return To Shop</button>
                                        </div>
                                    </div>
                                    <div className='alert text-danger text-md-left text-center d-none'>Your cart is empty!</div>
                                </div>
                            </div>
                            <div className={`overlay-sidenav ${isSidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
                            <div className={`overlay-sidenav ${isSidebarOpen1 ? 'active' : ''}`} onClick={toggleSidebar1}></div>
                        </div>
                    </div >
                </div >
            </section >
            <div className="Global-padding d-sm-block d-none">
                <div className="container">
                    <div className="bg-white mx-auto search-menu hide-menu" id="search-menu">
                        <div className="row m-0">
                            <div className="col-lg-3 menu-left">
                                <div className="search-suggestions my-3">
                                    <h6 className="ibm-plex text-uppercase font-weight-bold my-2">Search Suggestions</h6>
                                    <ul className="list-group list-group-flush bg-transparent" id="search_tags"></ul>
                                </div>
                            </div>
                            <div className="col-lg-9 product-matches">
                                <div className="row">
                                    <div className="col-12 mt-1">
                                        <h6 className="ibm-plex text-uppercase ibm-plex text-uppercase my-2 font-weight-bold">product matches</h6>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="row pt-3 px-5" id="search_result"></div>
                            </div>
                        </div>
                        <div className="row bg-dark p-1 m-0">
                            <div className="col-12 text-center text-dark menu-footer">
                                <p className="mb-0"><small></small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}