import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; // REQUIRED for navigation buttons
import 'swiper/css/pagination'; // REQUIRED if you ever use pagination, good to have
import 'swiper/css/autoplay';
// Import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Optional: If you have a custom CSS file for this component, uncomment this
// import "../App.css"

export default function FBlogs() {
  return (
    <div>
      <section className="py-3 bg-white">
        <div className="container-xxl px-0">
          <div className="text-center w-100">
            <div className="text-uppercase font-weight-semi-bold text-primary font-size28">
              Latest news &amp; blogs
            </div>
          </div>

          <Swiper
            // Add required modules here
            modules={[Autoplay, Navigation, Pagination]} // Pagination is added as it's often linked to nav

            // 1. Auto Scrolling (Autoplay)
            autoplay={{
              delay: 3000, // 3 seconds delay between slides
              disableOnInteraction: false, // Continue autoplay after user interaction (e.g., drag)
            }}

            // 2. Loop
            loop={true} // Enable continuous loop mode

            // 3. Scrolling Buttons (Navigation)
            navigation={true} // Enable navigation arrows (prev/next buttons)

            // Existing Swiper parameters
            spaceBetween={15}
            slidesPerView={1}
            grabCursor={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}

            className="mySwiper py-md-4 mt-md-0 mt-2"
          >
            {/* Each item in your slider should be a SwiperSlide component */}
            <SwiperSlide>
              <div className="text-start bg-light-gray-blog border-radius16 p-2">
                <a
                  href="blog/trends-in-online-shopping-in-pakistan-2025-hamzastorepk"
                  title="Trends in Online Shopping in Pakistan 2025 | HamzaStore.pk"
                  className="text-decoration-none"
                >
                  <div className="homeBlogBox">
                    <div className="homeBlogBoxImg">
                      <img
                        data-src="images/blogs/1204BLOGonTrendsinonlineshoppinginpaksitan.png"
                        className="img-fluid border-radius16 no-src lazyloaded"
                        width="420"
                        height="280"
                        alt="Trends in Online Shopping in Pakistan 2025 | HamzaStore.pk"
                        src="images/blogs/4191Top10Must-HaveKitchenToolsForEveryHomeCook.webp"
                      />
                    </div>
                    <div className="homeBlogBoxContent mt-3 mb-3 px-2">
                      <div className="bg-white rounded-pill d-inline-block text-start font-size12 font-weight-regular px-2 py-1">
                        14 Feb 2025
                      </div>
                      <div className="font-size16 font-weight-medium text-start title-height my-2">
                        Trends in Online Shopping in Pakistan 20...
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="text-start bg-light-gray-blog border-radius16 p-2">
                <a
                  href="blog/best-online-shopping-experience-in-pakistan-with-hamzastorepk"
                  title="Best Online Shopping Experience in Pakistan with Hamzastore.pk"
                  className="text-decoration-none"
                >
                  <div className="homeBlogBox">
                    <div className="homeBlogBoxImg">
                      <img
                        data-src="images/noimage.jpg"
                        className="img-fluid border-radius16 no-src lazyloaded"
                        width="420"
                        height="280"
                        alt="Best Online Shopping Experience in Pakistan with Hamzastore.pk"
                        src="images/noimage.jpg"
                      />
                    </div>
                    <div className="homeBlogBoxContent mt-3 mb-3 px-2">
                      <div className="bg-white rounded-pill d-inline-block text-start font-size12 font-weight-regular px-2 py-1">
                        31 Aug 2024
                      </div>
                      <div className="font-size16 font-weight-medium text-start title-height my-2">
                        Best Online Shopping Experience in Pakis...
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="text-start bg-light-gray-blog border-radius16 p-2">
                <a
                  href="#"
                  title="Upgrade Your Fitness Journey with Hamza Store Premium Gym Equipment"
                  className="text-decoration-none"
                >
                  <div className="homeBlogBox">
                    <div className="homeBlogBoxImg">
                      <img
                        data-src="images/noimage.jpg"
                        className="img-fluid border-radius16 no-src lazyloaded"
                        width="420"
                        height="280"
                        alt="Upgrade Your Fitness Journey with Hamza Store Premium Gym Equipment"
                        src="images/noimage.jpg"
                      />
                    </div>
                    <div className="homeBlogBoxContent mt-3 mb-3 px-2">
                      <div className="bg-white rounded-pill d-inline-block text-start font-size12 font-weight-regular px-2 py-1">
                        01 Aug 2024
                      </div>
                      <div className="font-size16 font-weight-medium text-start title-height my-2">
                        Upgrade Your Fitness Journey with Hamza ...
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="text-start bg-light-gray-blog border-radius16 p-2">
                <a
                  href="blog/top-10-musthave-kitchen-tools-for-every-home-cook"
                  title="Top 10 Must-Have Kitchen Tools for Every Home Cook"
                  className="text-decoration-none"
                >
                  <div className="homeBlogBox">
                    <div className="homeBlogBoxImg">
                      <img
                        data-src="images/blogs/4191Top10Must-HaveKitchenToolsForEveryHomeCook.webp"
                        className="img-fluid border-radius16 no-src lazyloaded"
                        width="420"
                        height="280"
                        alt="Top 10 Must-Have Kitchen Tools for Every Home Cook"
                        src="images/blogs/4191Top10Must-HaveKitchenToolsForEveryHomeCook.webp"
                      />
                    </div>
                    <div className="homeBlogBoxContent mt-3 mb-3 px-2">
                      <div className="bg-white rounded-pill d-inline-block text-start font-size12 font-weight-regular px-2 py-1">
                        24 Jun 2024
                      </div>
                      <div className="font-size16 font-weight-medium text-start title-height my-2">
                        Top 10 Must-Have Kitchen Tools for Every...
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="text-start bg-light-gray-blog border-radius16 p-2">
                <a
                  href="blog/shop-smarter-not-harder-online-shopping-hacks-for-2024"
                  title="Shop Smarter, Not Harder | Online Shopping Hacks for 2024"
                  className="text-decoration-none"
                >
                  <div className="homeBlogBox">
                    <div className="homeBlogBoxImg">
                      <img
                        data-src="images/blogs/1367ShopSmarterNotHarder.jpg"
                        className="img-fluid border-radius16 no-src lazyloaded"
                        width="420"
                        height="280"
                        alt="Shop Smarter, Not Harder | Online Shopping Hacks for 2024"
                        src="images/blogs/4191Top10Must-HaveKitchenToolsForEveryHomeCook.webp"
                      />
                    </div>
                    <div className="homeBlogBoxContent mt-3 mb-3 px-2">
                      <div className="bg-white rounded-pill d-inline-block text-start font-size12 font-weight-regular px-2 py-1">
                        15 Apr 2024
                      </div>
                      <div className="font-size16 font-weight-medium text-start title-height my-2">
                        Shop Smarter, Not Harder | Online Shoppi...
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>





      <section className="bg-white py-md-5 py-2" id="HomePageClientTestimonials">
        <div className="container-xxl mt-md-0 mt-3">
          <div className="text-uppercase text-center font-weight-semi-bold text-dark font-size28">
            Clients Testimonials
          </div>

          <Swiper
            // Add required modules
            modules={[Autoplay, Navigation, Pagination]}

            // 1. Auto Scrolling (Autoplay)
            autoplay={{
              delay: 4000, // 4 seconds delay between slides
              disableOnInteraction: false, // Continue autoplay after user interaction
              pauseOnMouseEnter: true, // Pause autoplay when mouse enters the slider
            }}

            // 2. Loop
            loop={true} // Enable continuous loop mode

            // 3. Scrolling Buttons (Navigation)
            navigation={true} // Enable navigation arrows (prev/next buttons)

            // Additional Swiper parameters for testimonials
            spaceBetween={15} // Space between testimonial cards
            slidesPerView={1} // Default: show 1 testimonial at a time
            grabCursor={true} // Shows a grab cursor when hovering

            // Responsive breakpoints
            breakpoints={{
              // When window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 20, // Slightly more space on tablets
              },
              // When window width is >= 992px (typical for Bootstrap 'lg')
              992: {
                slidesPerView: 3,
                spaceBetween: 25, // More space on desktops
              },
              // When window width is >= 1200px (typical for Bootstrap 'xl')
              1200: {
                slidesPerView: 3, // Keep 3 for consistency or adjust as needed
                spaceBetween: 30, // Even more space
              },
            }}

            className="mySwiper my-3 reviews" // Apply existing classes
          // Remove the id="product_reviews_container" if not used externally
          // Swiper React component manages its own internal IDs.
          >
            {/* Testimonial Slide 1 */}
            <SwiperSlide>
              <div className="bg-white w-100 p-4 text-start rounded shadow" id="deal-box">
                <div className="row">
                  <div className="col-md-3 col-3 text-start pe-0">
                    <a target="_blank" href="rabito-powerful-scented-tablet-300flush-shot-each-tablet--m6442" rel="noopener noreferrer">
                      <img
                        data-src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg"
                        height="80"
                        width="80"
                        alt="products-reviews"
                        className="img-fluid rounded-circle overflow-hidden border no-src lazyloaded"
                        src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg"
                      />
                    </a>
                  </div>
                  <div className="col-md-9 col-9">
                    <div className="clearfix">
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                    </div>
                    <p className="text-dark font-size16 font-weight-medium mb-0">A</p>
                    <p className="font-size12 color-gray-light mb-0 font-weight-normal">Tue Oct 2024</p>
                  </div>
                </div>
                <ul className="list-inline mb-0 ps-md-2 pt-3">
                  <li>
                    <p className="mb-0 font-weight-regular font-size12 text-dark"></p>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            {/* Testimonial Slide 2 - Duplicated for demonstration */}
            <SwiperSlide>
              <div className="bg-white w-100 p-4 text-start rounded shadow" id="deal-box">
                <div className="row">
                  <div className="col-md-3 col-3 text-start pe-0">
                    <a target="_blank" href="rabito-powerful-scented-tablet-300flush-shot-each-tablet--m6442" rel="noopener noreferrer">
                      <img
                        data-src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg"
                        height="80"
                        width="80"
                        alt="products-reviews"
                        className="img-fluid rounded-circle overflow-hidden border no-src lazyloaded"
                        src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg"
                      />
                    </a>
                  </div>
                  <div className="col-md-9 col-9">
                    <div className="clearfix">
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                    </div>
                    <p className="text-dark font-size16 font-weight-medium mb-0">B</p>
                    <p className="font-size12 color-gray-light mb-0 font-weight-normal">Wed Oct 2024</p>
                  </div>
                </div>
                <ul className="list-inline mb-0 ps-md-2 pt-3">
                  <li>
                    <p className="mb-0 font-weight-regular font-size12 text-dark"></p>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            {/* Testimonial Slide 3 - Duplicated for demonstration */}
            <SwiperSlide>
              <div className="bg-white w-100 p-4 text-start rounded shadow" id="deal-box">
                <div className="row">
                  <div className="col-md-3 col-3 text-start pe-0">
                    <a target="_blank" href="rabito-powerful-scented-tablet-300flush-shot-each-tablet--m6442" rel="noopener noreferrer">
                      <img
                        data-src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg"
                        height="80"
                        width="80"
                        alt="products-reviews"
                        className="img-fluid rounded-circle overflow-hidden border no-src lazyloaded"
                        src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg"
                      />
                    </a>
                  </div>
                  <div className="col-md-9 col-9">
                    <div className="clearfix">
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                    </div>
                    <p className="text-dark font-size16 font-weight-medium mb-0">C</p>
                    <p className="font-size12 color-gray-light mb-0 font-weight-normal">Thu Oct 2024</p>
                  </div>
                </div>
                <ul className="list-inline mb-0 ps-md-2 pt-3">
                  <li>
                    <p className="mb-0 font-weight-regular font-size12 text-dark"></p>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            {/* Testimonial Slide 4 - Duplicated for demonstration */}
            <SwiperSlide>
              <div className="bg-white w-100 p-4 text-start rounded shadow" id="deal-box">
                <div className="row">
                  <div className="col-md-3 col-3 text-start pe-0">
                    <a target="_blank" href="rabito-powerful-scented-tablet-300flush-shot-each-tablet--m6442" rel="noopener noreferrer">
                      <img
                        data-src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg"
                        height="80"
                        width="80"
                        alt="products-reviews"
                        className="img-fluid rounded-circle overflow-hidden border no-src lazyloaded"
                        src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg"
                      />
                    </a>
                  </div>
                  <div className="col-md-9 col-9">
                    <div className="clearfix">
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                    </div>
                    <p className="text-dark font-size16 font-weight-medium mb-0">D</p>
                    <p className="font-size12 color-gray-light mb-0 font-weight-normal">Fri Oct 2024</p>
                  </div>
                </div>
                <ul className="list-inline mb-0 ps-md-2 pt-3">
                  <li>
                    <p className="mb-0 font-weight-regular font-size12 text-dark"></p>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            {/* Testimonial Slide 5 - Duplicated for demonstration */}
            <SwiperSlide>
              <div className="bg-white w-100 p-4 text-start rounded shadow" id="deal-box">
                <div className="row">
                  <div className="col-md-3 col-3 text-start pe-0">
                    <a target="_blank" href="rabito-powerful-scented-tablet-300flush-shot-each-tablet--m6442" rel="noopener noreferrer">
                      <img
                        data-src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg"
                        height="80"
                        width="80"
                        alt="products-reviews"
                        className="img-fluid rounded-circle overflow-hidden border no-src lazyloaded"
                        src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg"
                      />
                    </a>
                  </div>
                  <div className="col-md-9 col-9">
                    <div className="clearfix">
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                    </div>
                    <p className="text-dark font-size16 font-weight-medium mb-0">E</p>
                    <p className="font-size12 color-gray-light mb-0 font-weight-normal">Sat Oct 2024</p>
                  </div>
                </div>
                <ul className="list-inline mb-0 ps-md-2 pt-3">
                  <li>
                    <p className="mb-0 font-weight-regular font-size12 text-dark"></p>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            {/* Testimonial Slide 6 - Duplicated for demonstration */}
            <SwiperSlide>
              <div className="bg-white w-100 p-4 text-start rounded shadow" id="deal-box">
                <div className="row">
                  <div className="col-md-3 col-3 text-start pe-0">
                    <a target="_blank" href="rabito-powerful-scented-tablet-300flush-shot-each-tablet--m6442" rel="noopener noreferrer">
                      <img
                        data-src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg"
                        height="80"
                        width="80"
                        alt="products-reviews"
                        className="img-fluid rounded-circle overflow-hidden border no-src lazyloaded"
                        src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg"
                      />
                    </a>
                  </div>
                  <div className="col-md-9 col-9">
                    <div className="clearfix">
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16" />
                    </div>
                    <p className="text-dark font-size16 font-weight-medium mb-0">F</p>
                    <p className="font-size12 color-gray-light mb-0 font-weight-normal">Sun Oct 2024</p>
                  </div>
                </div>
                <ul className="list-inline mb-0 ps-md-2 pt-3">
                  <li>
                    <p className="mb-0 font-weight-regular font-size12 text-dark"></p>
                  </li>
                </ul>
              </div>
            </SwiperSlide>

            {/* Add more SwiperSlide components here if you have more testimonials */}

          </Swiper>
        </div>
      </section>







    </div>
  );
}





{/* <section class="bg-white py-md-5 py-2" id="HomePageClientTestimonials"><div class="container-xxl mt-md-0 mt-3">
  <div class="text-uppercase text-center font-weight-semi-bold text-dark font-size28">Clients Testimonials</div>
    <div class="swiper-container swiper-container-initialized swiper-container-horizontal" id="product_reviews_container">
      <div class="swiper-wrapper my-3 reviews" style="transform: translate3d(-382px, 0px, 0px); transition: all;">

      <div class="swiper-slide bg-transparent swiper-slide-active" style="width: 367px; margin-right: 15px;">
          <div class="bg-white w-100 p-4 text-start rounded shadow" id="deal-box">
            <div class="row">
              <div class="col-md-3 col-3 text-start pe-0">
                <a target="_blank" href="rabito-powerful-scented-tablet-300flush-shot-each-tablet--m6442">
                  <img data-src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg" height="80" width="80" alt="products-reviews" class="img-fluid rounded-circle overflow-hidden border no-src lazyloaded" src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg"/>
                </a>
              </div>
              <div class="col-md-9 col-9">
                <div class="clearfix">
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                    </div>
                  <p class="text-dark font-size16 font-weight-medium mb-0">A</p>
                  <p class="font-size12 color-gray-light mb-0 font-weight-normal">Tue Oct 2024</p>
                </div>
              </div>
            <ul class="list-inline mb-0 ps-md-2 pt-3">
              <li>
                <p class="mb-0 font-weight-regular font-size12 text-dark">
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div class="swiper-slide bg-transparent swiper-slide-active" style="width: 367px; margin-right: 15px;">
          <div class="bg-white w-100 p-4 text-start rounded shadow" id="deal-box">
            <div class="row">
              <div class="col-md-3 col-3 text-start pe-0">
                <a target="_blank" href="rabito-powerful-scented-tablet-300flush-shot-each-tablet--m6442">
                  <img data-src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg" height="80" width="80" alt="products-reviews" class="img-fluid rounded-circle overflow-hidden border no-src lazyloaded" src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg"/>
                </a>
              </div>
              <div class="col-md-9 col-9">
                <div class="clearfix">
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                    </div>
                  <p class="text-dark font-size16 font-weight-medium mb-0">A</p>
                  <p class="font-size12 color-gray-light mb-0 font-weight-normal">Tue Oct 2024</p>
                </div>
              </div>
            <ul class="list-inline mb-0 ps-md-2 pt-3">
              <li>
                <p class="mb-0 font-weight-regular font-size12 text-dark">
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div class="swiper-slide bg-transparent swiper-slide-active" style="width: 367px; margin-right: 15px;">
          <div class="bg-white w-100 p-4 text-start rounded shadow" id="deal-box">
            <div class="row">
              <div class="col-md-3 col-3 text-start pe-0">
                <a target="_blank" href="rabito-powerful-scented-tablet-300flush-shot-each-tablet--m6442">
                  <img data-src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg" height="80" width="80" alt="products-reviews" class="img-fluid rounded-circle overflow-hidden border no-src lazyloaded" src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg"/>
                </a>
              </div>
              <div class="col-md-9 col-9">
                <div class="clearfix">
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                    </div>
                  <p class="text-dark font-size16 font-weight-medium mb-0">A</p>
                  <p class="font-size12 color-gray-light mb-0 font-weight-normal">Tue Oct 2024</p>
                </div>
              </div>
            <ul class="list-inline mb-0 ps-md-2 pt-3">
              <li>
                <p class="mb-0 font-weight-regular font-size12 text-dark">
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div class="swiper-slide bg-transparent swiper-slide-active" style="width: 367px; margin-right: 15px;">
          <div class="bg-white w-100 p-4 text-start rounded shadow" id="deal-box">
            <div class="row">
              <div class="col-md-3 col-3 text-start pe-0">
                <a target="_blank" href="rabito-powerful-scented-tablet-300flush-shot-each-tablet--m6442">
                  <img data-src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg" height="80" width="80" alt="products-reviews" class="img-fluid rounded-circle overflow-hidden border no-src lazyloaded" src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg"/>
                </a>
              </div>
              <div class="col-md-9 col-9">
                <div class="clearfix">
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                    </div>
                  <p class="text-dark font-size16 font-weight-medium mb-0">A</p>
                  <p class="font-size12 color-gray-light mb-0 font-weight-normal">Tue Oct 2024</p>
                </div>
              </div>
            <ul class="list-inline mb-0 ps-md-2 pt-3">
              <li>
                <p class="mb-0 font-weight-regular font-size12 text-dark">
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div class="swiper-slide bg-transparent swiper-slide-active" style="width: 367px; margin-right: 15px;">
          <div class="bg-white w-100 p-4 text-start rounded shadow" id="deal-box">
            <div class="row">
              <div class="col-md-3 col-3 text-start pe-0">
                <a target="_blank" href="rabito-powerful-scented-tablet-300flush-shot-each-tablet--m6442">
                  <img data-src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg" height="80" width="80" alt="products-reviews" class="img-fluid rounded-circle overflow-hidden border no-src lazyloaded" src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg"/>
                </a>
              </div>
              <div class="col-md-9 col-9">
                <div class="clearfix">
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                    </div>
                  <p class="text-dark font-size16 font-weight-medium mb-0">A</p>
                  <p class="font-size12 color-gray-light mb-0 font-weight-normal">Tue Oct 2024</p>
                </div>
              </div>
            <ul class="list-inline mb-0 ps-md-2 pt-3">
              <li>
                <p class="mb-0 font-weight-regular font-size12 text-dark">
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div class="swiper-slide bg-transparent swiper-slide-active" style="width: 367px; margin-right: 15px;">
          <div class="bg-white w-100 p-4 text-start rounded shadow" id="deal-box">
            <div class="row">
              <div class="col-md-3 col-3 text-start pe-0">
                <a target="_blank" href="rabito-powerful-scented-tablet-300flush-shot-each-tablet--m6442">
                  <img data-src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg" height="80" width="80" alt="products-reviews" class="img-fluid rounded-circle overflow-hidden border no-src lazyloaded" src="images/product_gallery/md_1715002128_1698658915_WhatsApp_Image_2023-10-28_at_5_45_03_PM.jpeg"/>
                </a>
              </div>
              <div class="col-md-9 col-9">
                <div class="clearfix">
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                      <img src="images/theme_icons/star-fill-small-01.svg" alt="star-fill-small" width="16" height="16"/>
                    </div>
                  <p class="text-dark font-size16 font-weight-medium mb-0">A</p>
                  <p class="font-size12 color-gray-light mb-0 font-weight-normal">Tue Oct 2024</p>
                </div>
              </div>
            <ul class="list-inline mb-0 ps-md-2 pt-3">
              <li>
                <p class="mb-0 font-weight-regular font-size12 text-dark">
                </p>
              </li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  </div>
</section> */}