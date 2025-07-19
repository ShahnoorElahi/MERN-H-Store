import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Carousel.module.css';



const BannerSlider1 = ({ banners }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [z, setZ] = useState(1);
    const swiperWrapperRef = useRef(null);
    const autoScrollInterval = useRef(null);
    const [clonedBanners, setClonedBanners] = useState([]);
    const numVisible = 1;
 
    useEffect(() => {
        if (banners.length > 0) {
            const clonesStart = banners.slice(0, numVisible);
            const clonesEnd = banners.slice(-numVisible);
            setClonedBanners([...clonesEnd, ...banners, ...clonesStart]);
            setCurrentIndex(numVisible);
        } else {
            setClonedBanners([]);
        }
    }, [banners, numVisible]);

    const stopAutoScroll = useCallback(() => {
        if (autoScrollInterval.current) {
            clearInterval(autoScrollInterval.current);
            autoScrollInterval.current = null;
        }
    }, []);

    const nextSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => { console.log("hg", prevIndex); setZ(prevIndex + 1); return (prevIndex + 1); });
    }, [isTransitioning]);

    const prevSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => {setZ(prevIndex - 1); return (prevIndex - 1)});
    }, [isTransitioning]);

    const jump = useCallback((a) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(() => { console.log("hg", a); setZ(a); return a;});
    }, []);

    const handleTransitionEnd = useCallback(() => {
        setIsTransitioning(false);
        if (!swiperWrapperRef.current) return;

        if (currentIndex >= clonedBanners.length - numVisible) {
            setZ(1);
            setCurrentIndex(numVisible);
            swiperWrapperRef.current.style.transition = 'none';
            requestAnimationFrame(() => {
                swiperWrapperRef.current.style.transition = 'transform 0.5s ease-in-out';
            });
        } else if (currentIndex < numVisible) {
            setZ(3);
            setCurrentIndex(clonedBanners.length - numVisible * 2);
            swiperWrapperRef.current.style.transition = 'none';
            requestAnimationFrame(() => {
                swiperWrapperRef.current.style.transition = 'transform 0.5s ease-in-out';
            });
        }
    }, [currentIndex, clonedBanners.length, numVisible]);

    const startAutoScroll = useCallback(() => {
        stopAutoScroll();
        autoScrollInterval.current = setInterval(nextSlide, 3000);
    }, [nextSlide, stopAutoScroll]);

    useEffect(() => {
        startAutoScroll();

        const wrapper = swiperWrapperRef.current;
        if (wrapper) {
            wrapper.addEventListener('mouseenter', stopAutoScroll);
            wrapper.addEventListener('mouseleave', startAutoScroll);
            wrapper.addEventListener('transitionend', handleTransitionEnd);
        }

        return () => {
            stopAutoScroll();
            if (wrapper) {
                wrapper.removeEventListener('mouseenter', stopAutoScroll);
                wrapper.removeEventListener('mouseleave', startAutoScroll);
                wrapper.removeEventListener('transitionend', handleTransitionEnd);
            }
        };
    }, [startAutoScroll, stopAutoScroll, handleTransitionEnd]);

    useEffect(() => {
        if (swiperWrapperRef.current && clonedBanners.length > 0) {
            const offset = -currentIndex * (100);
            swiperWrapperRef.current.style.transform = `translateX(${offset}%)`;
            if (!isTransitioning) {
                swiperWrapperRef.current.style.transition = 'none';
            } else {
                swiperWrapperRef.current.style.transition = 'transform 0.5s ease-in-out';
            }
        }
    }, [currentIndex, clonedBanners.length, isTransitioning]);

    if (clonedBanners.length === 0) {
        return null;
    }

    return (
        <>
            <div class="swiper-container gallery-top-mbl swiper-container-initialized swiper-container-horizontal" id="">
                <div class="swiper-wrapper" ref={swiperWrapperRef} id="img_slide" style={{ transform: "translate3d(0px, 0px, 0px)" }}>

                    {clonedBanners.map((banner, index) => (
                        <div class="swiper-slide" key={index} style={{ width: "100%", marginRight: "0px" }}>
                            {/* <div class="swiper-slide swiper-slide-active" key={index} style={{ width: "431px", marginRight: "10px" }}> */}


                            <a href={banner.link} title={banner.alt}>
                                {/* <img id="imgv" alt="1pc Vanity Makeup Organizer, Spacious Countertop Design With Drawers" height="557" width="557" class="img-fluid border-radius12 img-zoom " src="images/product_gallery/1719156634_1718986551_makeup_organizer_.jpg" /> */}
                                <img
                                    id="imgv"
                                    src={banner.src}
                                    className="img-fluid width-vw"
                                    alt="1pc Vanity Makeup Organizer, Spacious Countertop Design With Drawers"//{banner.alt}
                                    width="100%"
                                    height="auto"
                                />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="swiper-button-next" onClick={nextSlide}></div>
                <div className="swiper-button-prev" onClick={prevSlide}></div>
            </div >




            <div className="swiper-container gallery-thumbs-mbl text-center swiper-container-initialized swiper-container-vertical swiper-container-free-mode swiper-container-thumbs">
                <div className="swiper-wrapper" id="img_thumb" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                    <div onClick={()=>jump(1)} className={`swiper-slide swiper-slide-visible ${z==1 ? "swiper-slide-thumb-active" : ""}  `} style={{ height: '48.75px', marginBottom: '5px' }}>                                                                                            <img id="imgt" src="images/product_gallery/sm_1719156634_1718986551_makeup_organizer_.jpg" alt="1pc Vanity Makeup Organizer, Spacious Countertop Design With Drawers" className="img-fluid " width="50" height="50" />
                    </div>
                    <div onClick={()=>jump(2)} className={`swiper-slide swiper-slide-visible ${z==2 ? "swiper-slide-thumb-active" : ""} `} style={{ height: '48.75px', marginBottom: '5px' }}>                                                                                            <img id="imgt" data-src="images/product_gallery/sm_1719156634_1718986551_makeup_organizer__.jpg" alt="1pc Vanity Makeup Organizer, Spacious Countertop Design With Drawers" className="img-fluid no-src lazyloaded" width="50" height="50" src="images/product_gallery/sm_1719156634_1718986551_makeup_organizer__.jpg" />
                    </div>
                    <div onClick={()=>jump(3)} className={`swiper-slide swiper-slide-visible ${z==3 ? "swiper-slide-thumb-active" : ""} `} style={{ height: '48.75px', marginBottom: '5px' }}>                                                                                            <img id="imgt" data-src="images/product_gallery/sm_1719156634_1718986551_makeup_organizer___.jpg" alt="1pc Vanity Makeup Organizer, Spacious Countertop Design With Drawers" className="img-fluid no-src lazyloaded" width="50" height="50" src="images/product_gallery/sm_1719156634_1718986551_makeup_organizer___.jpg" />
                    </div>
                </div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>
        </>
    );
};

export default BannerSlider1;
