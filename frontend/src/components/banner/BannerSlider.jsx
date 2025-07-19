import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Carousel.module.css';

const BannerSlider = ({ banners }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
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
        setCurrentIndex((prevIndex) => prevIndex + 1);
    }, [isTransitioning]);

    const prevSlide = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
    }, [isTransitioning]);

    const handleTransitionEnd = useCallback(() => {
        setIsTransitioning(false);
        if (!swiperWrapperRef.current) return;

        if (currentIndex >= clonedBanners.length - numVisible) {
            setCurrentIndex(numVisible);
            swiperWrapperRef.current.style.transition = 'none';
            requestAnimationFrame(() => {
                swiperWrapperRef.current.style.transition = 'transform 0.5s ease-in-out';
            });
        } else if (currentIndex < numVisible) {
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
            const offset = -currentIndex * (100 );
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
        <div className="swiper-container" id="swiper-main-slider">
            <div className="swiper-wrapper" ref={swiperWrapperRef}>
                {clonedBanners.map((banner, index) => (
                    <div
                        className="swiper-slide"
                        key={index}
                        style={{ width: `${100}%` }}
                    >
                        <a href={banner.link} title={banner.alt}>
                            <img
                                src={banner.image}
                                className="img-fluid width-vw"
                                alt={banner.alt}
                                width="100%"  // Ensure image takes full width
                                height="auto"
                            />
                        </a>
                    </div>
                ))}
            </div>
            <div className="swiper-button-next" onClick={nextSlide}></div>
            <div className="swiper-button-prev" onClick={prevSlide}></div>
        </div>
    );
};

export default BannerSlider;
