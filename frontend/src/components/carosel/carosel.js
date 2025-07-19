import React, { useEffect, useRef, useCallback } from 'react';
import './Carousel.css';

const Carousel = () => {
    const productss = [
        { 
            id: 12336,
            name: '2 in 1 Dumpling Maker Mold',
            price: 599,
            discountPrice: 999,
            discount: '40% Off',
            image: 'https://www.hamzastore.pk/images/product_gallery/md_1695477287_WhatsApp_Image_2023-09-23_at_3_27_38_PM.jpeg',
            link: 'https://www.hamzastore.pk/2-in-1-Dumpling-Maker-Mold-copym12336',
            behaveImage: '/images/behave/673201be56fca.png'
        },
        { 
            id: 12337,
            name: 'Portable Blender Bottle',
            price: 799,
            discountPrice: 1299,
            discount: '38% Off',
            image: 'product2.jpg',
            link: '#',
            behaveImage: '/images/behave/673201be56fca.png'
        },
        { 
            id: 12338,
            name: 'Stainless Steel Lunch Box',
            price: 899,
            discountPrice: 1499,
            discount: '40% Off',
            image: 'product3.jpg',
            link: '#',
            behaveImage: '/images/behave/673201be56fca.png'
        },
        { 
            id: 12339,
            name: 'Electric Coffee Grinder',
            price: 1499,
            discountPrice: 2499,
            discount: '40% Off',
            image: 'product4.jpg',
            link: '#',
            behaveImage: '/images/behave/673201be56fca.png'
        },
        { 
            id: 12340,
            name: 'Silicone Baking Mats Set',
            price: 999,
            discountPrice: 1699,
            discount: '41% Off',
            image: 'product5.jpg',
            link: '#',
            behaveImage: '/images/behave/673201be56fca.png'
        },
        { 
            id: 12341,
            name: 'Reusable Food Wrap Set',
            price: 699,
            discountPrice: 1199,
            discount: '42% Off',
            image: 'product6.jpg',
            link: '#',
            behaveImage: '/images/behave/673201be56fca.png'
        }
    ];

    const visibleSlides = 6;
    const buffer = visibleSlides;
    const extendedProducts = [
        ...productss.slice(-buffer),
        ...productss,
        ...productss.slice(0, buffer),
    ];

    const currentIndex = useRef(buffer);
    const isTransitioning = useRef(false);
    const slidesContainerRef = useRef(null);
    const autoScrollInterval = useRef(null);
    const slideWidth = 202.333; // Fixed slide width
    const marginRight = 10; // Margin between slides

    // Update carousel position
    const updatePosition = useCallback((instant = false) => {
        if (!slidesContainerRef.current) return;
        const totalWidth = slideWidth + marginRight;
        const offset = -currentIndex.current * totalWidth;

        slidesContainerRef.current.style.transition = instant ? 'none' : 'transform 0.5s ease-in-out';
        slidesContainerRef.current.style.transform = `translateX(${offset}px)`;
    }, [slideWidth, marginRight]);

    // Handle transition end
    const handleTransitionEnd = useCallback(() => {
        isTransitioning.current = false;

        // Reset position if out of bounds
        if (currentIndex.current >= productss.length + buffer) {
            currentIndex.current = buffer;
            updatePosition(true);
        } else if (currentIndex.current < buffer) {
            currentIndex.current = productss.length + buffer - 1;
            updatePosition(true);
        }
    }, [buffer, productss.length, updatePosition]);

// In the next function
const next = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    currentIndex.current++;
    updatePosition();

    slidesContainerRef.current.addEventListener('transitionend', () => {
        isTransitioning.current = false;
        if (currentIndex.current >= productss.length + buffer) {
            currentIndex.current = buffer;
            updatePosition(true);
            // eslint-disable-next-line no-unused-expressions
            slidesContainerRef.current.offsetWidth;  // Line 122
            updatePosition();
        }
    }, { once: true });
}, [buffer, productss.length, updatePosition]);

// In the prev function
const prev = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    currentIndex.current--;
    updatePosition();

    slidesContainerRef.current.addEventListener('transitionend', () => {
        isTransitioning.current = false;
        if (currentIndex.current < buffer) {
            currentIndex.current = productss.length + buffer - 1;
            updatePosition(true);
            // eslint-disable-next-line no-unused-expressions
            slidesContainerRef.current.offsetWidth;  // Line 141
            updatePosition();
        }
    }, { once: true });
}, [buffer, productss.length, updatePosition]);

    // Start auto-scroll
    const startAutoScroll = useCallback(() => {
        stopAutoScroll();
        autoScrollInterval.current = setInterval(next, 3000);
    }, [next]);

    // Stop auto-scroll
    const stopAutoScroll = useCallback(() => {
        if (autoScrollInterval.current) {
            clearInterval(autoScrollInterval.current);
            autoScrollInterval.current = null;
        }
    }, []);

    // Initialize carousel
    useEffect(() => {
        updatePosition(true);
        startAutoScroll();

        const container = slidesContainerRef.current;
        container.addEventListener('transitionend', handleTransitionEnd);

        return () => {
            stopAutoScroll();
            container.removeEventListener('transitionend', handleTransitionEnd);
        };
    }, [handleTransitionEnd, startAutoScroll, stopAutoScroll, updatePosition]);

    return (
        <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
            <div className="slides" ref={slidesContainerRef}>
                {extendedProducts.map((product, index) => (
                    <div 
                        key={index} 
                        className="swiper-slide" 
                        style={{ width: `${slideWidth}px`, marginRight: `${marginRight}px` }}
                    >
                        <div id="deal-box" className="position-relative">
                            <div className="item-box bg-white">
                                <div className="w-100 position-relative">
                                    <div className="position-absolute behaveImage">
                                        <img className="img-fluid" src={product.behaveImage} alt="" height="50" width="50" />
                                    </div>
                                    <div className="w-100 d-block mx-auto position-relative product-image-loader">
                                        <div className="product_img_continer">
                                            <a href={product.link} className={`change_slug${product.id}`}>
                                                <img
                                                    src={product.image}
                                                    data-src={product.image}
                                                    className={`img-fluid d-block w-100 change_image${product.id} lazyloaded`}
                                                    alt={product.name}
                                                    height="300"
                                                    width="300"
                                                />
                                            </a>
                                        </div>
                                        <div className="addtocart_overlay text-center px-0">
                                            <div className="row mx-0">
                                                <div className="w-50 bg-secondary px-0">
                                                    <button 
                                                        className=" btn btn-transparent text-decoration-none px-0 sm-font9 text-white font-size10"
                                                        onClick={() => console.log(`Add to cart: ${product.id}`)}
                                                    >
                                                        Add To Cart
                                                    </button>
                                                </div>
                                                <div className="w-50 bg-primary px-0">
                                                    <button 
                                                        className=" btn bg-primary rounded btn-block sm-font9 text-uppercase font-size10 sm-font10 px-md-1 px-0 text-decoration-none"
                                                        onClick={() => console.log(`Buy now: ${product.id}`)}
                                                    >
                                                        Buy Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-style px-2 py-2 text-start">
                                    <div className="box-title text-start">
                                        <a href={product.link} className="item-link font-size12 font-weight-regular">
                                            {product.name}
                                        </a>
                                    </div>
                                    <div className="row mx-1 mt-1">
                                        <div className="w-50 my-auto pricing px-0">
                                            <p className="mb-0 font-weight-normal text-dark font-size14">Rs. {product.price}</p>
                                            <div className="d-flex align-items-center resp-flex">
                                                <p className="discount-price pe-1 mb-0">Rs. {product.discountPrice}</p>
                                            </div>
                                        </div>
                                        <div className="w-50 text-end px-0 my-auto">
                                            <small className="discount-label text-dark font-size10 font-weight-semi-bold p-1">
                                                {product.discount}
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="aka prev"
                onClick={() => {
                    stopAutoScroll();
                    prev();
                    startAutoScroll();
                }}
            >
                ❮
            </button>
            <button
                className="aka next"
                onClick={() => {
                    stopAutoScroll();
                    next();
                    startAutoScroll();
                }}
            >
                ❯
            </button>
        </div>
    );
};

export default Carousel;