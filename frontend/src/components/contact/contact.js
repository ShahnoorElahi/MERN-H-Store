// import "../styles.css";
// import HeaderMini from "./header-mini";
// import Footer from "./footer";
import React, { useState } from "react";
// import "../App.css"


export default function Contact() {
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
                            <a href="javascript:;">Contact Us</a>
                        </li>
                    </ol>
                </nav>
            </div>

            <div class="container-xxl mmbl-65">
                <div class="row">
                    
                    <div class="col-12 mb-3">
                        <div class="bg-white border-radius12 p-md-4 p-3">
                            <h1 class="page-heading">Contact Us</h1>
                            <div class="row mb-5">
                                <div class="col-md-7 col-12 contact-form">
                                    <form action="#" method="post" id="contact-form">
                                        <input type="hidden" name="status" value="1" />
                                        <input type="hidden" name="comment" value="" />
                                        <input type="hidden" name="rid" value="0" />
                                        <div class="form-group mb-3">
                                            <label for="name" class="mb-0">Name <span class="tred">*</span> </label>
                                            <input type="text" name="name" class="form-control" placeholder="Your Name" required />
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="email" class="mb-0">Email</label>
                                            <input name="email" class="form-control" placeholder="Email" />
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="mobile" class="mb-0">Mobile <span class="tred">*</span></label>
                                            <input type="number" name="mobile" class="form-control onlyNumerics" placeholder="Mobile Number" maxlength="11" required />
                                        </div>
                                        <div class="form-group mb-3">
                                            <label for="inquiries_types" class="mb-0">Nature Of Contact <span class="tred">*</span></label>
                                            <select class="form-control " id="inquiries_types" name="inquiries_types" required="required"   ><option value="0">--Select--</option><option value="1" >General Inquiry</option><option value="2" >Complaint</option><option value="3" >Suggestion</option><option value="4" >Bulk Order</option><option value="5" >Get a Call Back</option><option value="6" >Un Subscribe Newsletter</option></select>                            </div>
                                        <div class="form-group mb-3">
                                            <label for="message" class="mb-0">Message <span class="tred">*</span></label>
                                            <textarea class="form-control" name="message" placeholder="Comment" rows="10" required></textarea>
                                            <span class="tred">(Do not forget to mention your Order ID, if it relates to an order.)</span>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-8">
                                                <div class="g-recaptcha clrfield" data-sitekey="6Lc3O2EiAAAAANwaDXCjXN-ZI0jEkb2dBxpHkDm8"></div>
                                            </div>
                                            <div class="col-lg-4 my-lg-auto mt-3 text-end">
                                                <button type="submit" name="submit" class="btn bg-primary">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-md-5 col-12 mx-auto contact-detail pt-4">
                                    <object>
                                        {/* <embed class="mb-4" frameborder="1" scrolling="no" marginheight="0" marginwidth="0" width="100%" height="300" src="https://maps.google.com/maps" allowfullscreen><div><small><a href="http://embedgooglemaps.com/"> </a></small></div></embed> */}
                                    </object>
                                    <div class="border-box box-detail">
                                        <ul class="list-unstyled">
                                            <li class="mt-2 text-capitalize">
                                                <span class="font-weight-bold">SMS/Whatsapp:</span>
                                                <br />
                                                <a href="https://api.whatsapp.com/send?phone=923436663323" target="_blank" rel="noopener" class="text-dark">92-343-6663323</a>
                                                <br />
                                            </li>
                                            <li class="mt-2 text-capitalize">
                                                <span class="font-weight-bold">Landline:</span>
                                                <br />
                                                <a href="tel:02132227750" rel="noopener" class="text-dark">02132227750</a>
                                            </li>
                                            <li class="mt-2">
                                                <span class="font-weight-bold">Email:</span><br />
                                                <a href="mailto:info@hamzastore.pk" class='text-dark'>
                                                    info@hamzastore.pk            </a>
                                            </li>
                                            <li class="mt-2 text-capitalize">
                                                <span class="font-weight-bold">Address:</span><br />
                                                Office Amma Tower Shop No 87 Second Floor , Warehouse SITE Karachi      </li>
                                            <li class="mt-2 mb-2 text-capitalize">
                                                <span class="font-weight-bold">Working days/hours:</span><br />
                                                Mon - Sat / 10:00AM - 6:00PM      </li>
                                        </ul>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    )
}
