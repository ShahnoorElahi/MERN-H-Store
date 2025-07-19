function myFunction(t) {
    t.classList.toggle("change");
    let e = $(t)[0].className;
    e.indexOf("change") > 0 ? (console.log(e.indexOf("change")), $("#social-plugin-h")[0].style.display = "block") : (console.log(e.indexOf("change")), $("#social-plugin-h")[0].style.display = "none"), console.log($("#social-plugin-h")[0])
}
function filter_hide_show(e) {
    $("#toggle_aero" + e).toggleClass("toggle_aero"), $("#scroll" + e).toggleClass("hide_filter_cs")
}

function brand_filter_hide_show() {
    $("#toggle_aero").toggleClass("toggle_aero"), $("#scroll_brand").toggleClass("hide_filter_cs")
}

$(document).ready(function () {
    new Swiper("#swipper-cat-7", {
        slidesPerView: 5,
        spaceBetween: 2,
        autoplay: {delay: 3e3},
        navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
        breakpoints: {
            300: {slidesPerView: 2.25, spaceBetween: 5},
            667: {slidesPerView: 2.25, spaceBetween: 5},
            768: {slidesPerView: 3.25, spaceBetween: 10, scrollbar: !1},
            1024: {slidesPerView: 4.25, spaceBetween: 10, loop: !1},
            1280: {slidesPerView: 4.25, spaceBetween: 10, loop: !1},
        }
    }), new Swiper("#swipper-cat-8", {
        autoplay: false,
        slidesPerView: 6,
        spaceBetween: 5,
        navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
        breakpoints: {
            300: {slidesPerView: 2.25, spaceBetween: 5},
            667: {slidesPerView: 3.25, spaceBetween: 5},
            768: {slidesPerView: 3.25, spaceBetween: 5, scrollbar: !1},
            1024: {slidesPerView: 4.25, spaceBetween: 10, scrollbar: !1},
            1280: {slidesPerView: 4.25, spaceBetween: 5, scrollbar: !1},
        }
    }), new Swiper("#swiper-main-slider", {
        autoplay: false,
        slidesPerView: 1,
        navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}
    }), new Swiper("#swiper-brands-slider", {
        slidesPerView: 6,
        navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
        breakpoints: {
            300: {slidesPerView: 4, spaceBetween: 4},
            667: {slidesPerView: 5, spaceBetween: 4},
            768: {slidesPerView: 6, spaceBetween: 5},
            1024: {slidesPerView: 7, spaceBetween: 4},
            1280: {slidesPerView: 10, spaceBetween: 2},
            1366: {slidesPerView: 10, spaceBetween: 2},
            1600: {slidesPerView: 12, spaceBetween: 2},
            1900: {slidesPerView: 12, spaceBetween: 2}
        }
    }), new Swiper("#swiper-brands-slider-cat", {
        slidesPerView: 6,
        autoplay: 3e3,
        navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
        breakpoints: {
            300: {slidesPerView: 4, spaceBetween: 4},
            667: {slidesPerView: 5, spaceBetween: 4},
            768: {slidesPerView: 6, spaceBetween: 5},
            1024: {slidesPerView: 7, spaceBetween: 4},
            1280: {slidesPerView: 8, spaceBetween: 2},
            1366: {slidesPerView: 8, spaceBetween: 2},
            1600: {slidesPerView: 12, spaceBetween: 2},
            1900: {slidesPerView: 12, spaceBetween: 2}
        }
    }),new Swiper("#swiper-brands-slider", {
        slidesPerView: 4,
        navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
        breakpoints: {
            300: {slidesPerView: 3, spaceBetween: 4},
            667: {slidesPerView: 3, spaceBetween: 4},
            768: {slidesPerView: 3, spaceBetween: 5},
            1024: {slidesPerView: 4, spaceBetween: 4},
            1280: {slidesPerView: 4, spaceBetween: 0},
            1366: {slidesPerView: 4, spaceBetween: 0},
            1600: {slidesPerView: 4, spaceBetween: 0},
            1900: {slidesPerView: 4, spaceBetween: 0}
        }
    }),new Swiper("#blogsSlider", {
        slidesPerView: 2,
        autoplay: 3e3,
        // navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
        breakpoints: {
            300: {slidesPerView: 1.25, spaceBetween: 10},
            667: {slidesPerView: 2.25, spaceBetween: 10},
            768: {slidesPerView: 2.25, spaceBetween: 10},
            1024: {slidesPerView: 3, spaceBetween: 15},
            1280: {slidesPerView: 4, spaceBetween: 15},
            1366: {slidesPerView: 4, spaceBetween: 15},
            1600: {slidesPerView: 4, spaceBetween: 15},
            1900: {slidesPerView: 4, spaceBetween: 15}
        }
    }),new Swiper("#product_reviews_container", {
        slidesPerView: 3,
        autoplay: 3e3,
        navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
        breakpoints: {
            300: {slidesPerView: 1, spaceBetween: 10},
            320: {slidesPerView: 1, spaceBetween: 10},
            375: {slidesPerView: 1.25, spaceBetween: 10},
            667: {slidesPerView: 2.25, spaceBetween: 10},
            768: {slidesPerView: 3.25, spaceBetween: 5},
            1024: {slidesPerView: 3.25, spaceBetween: 5},
            1280: {slidesPerView: 3.5, spaceBetween: 5},
            1366: {slidesPerView: 3.5, spaceBetween: 5},
            1600: {slidesPerView: 3.5, spaceBetween: 5},
            1900: {slidesPerView: 3.5, spaceBetween: 5}
        }
    }),
        new Swiper("#product_mobile_slider", {
        lazy: !0,
        preloadImages: !0,
        slidesPerView: 1,
        spaceBetween: 3,
        pagination: {el: ".swiper-pagination", type: "fraction"},
        navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}
    }), $(".product-multiple-images img").each(function (e) {
        $(this).hide().delay(100 * e).fadeIn(300)
    }), function () {
        var e = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
        !function (t, s) {
            var i, a, n, o, r;
            a = function () {
                function s(s) {
                    var i;
                    this.element = s, this._clickEvent = e(this._clickEvent, this), this.element = t(this.element), this.nav = this.element.closest(".nav"), this.dropdown = this.element.parent().find(".dropdown-menu"), this.element.on("click", this._clickEvent), this.nav.closest(".navbar-offcanvas").on("click", (i = this, function () {
                        if (i.dropdown.is(".shown")) return i.dropdown.removeClass("shown").closest(".active").removeClass("active")
                    }))
                }

                return s.prototype._clickEvent = function (e) {
                    return this.dropdown.hasClass("shown") || e.preventDefault(), e.stopPropagation(), t(".dropdown-toggle").not(this.element).closest(".active").removeClass("active").find(".dropdown-menu").removeClass("shown"), this.dropdown.toggleClass("shown"), this.element.parent().toggleClass("active")
                }, s
            }(), n = function () {
                function i(s, i, a, n) {
                    this.button = s, this.element = i, this.location = a, this.offcanvas = n, this._getFade = e(this._getFade, this), this._getCss = e(this._getCss, this), this._touchEnd = e(this._touchEnd, this), this._touchMove = e(this._touchMove, this), this._touchStart = e(this._touchStart, this), this.endThreshold = 130, this.startThreshold = this.element.hasClass("navbar-offcanvas-right") ? t("body").outerWidth() - 60 : 20, this.maxStartThreshold = this.element.hasClass("navbar-offcanvas-right") ? t("body").outerWidth() - 20 : 60, this.currentX = 0, this.fade = !!this.element.hasClass("navbar-offcanvas-fade"), t(document).on("touchstart", this._touchStart), t(document).on("touchmove", this._touchMove), t(document).on("touchend", this._touchEnd)
                }

                return i.prototype._touchStart = function (e) {
                    if (this.startX = e.originalEvent.touches[0].pageX, this.element.is(".in")) return this.element.height(t(s).outerHeight())
                }, i.prototype._touchMove = function (e) {
                    var s;
                    if (t(e.target).parents(".navbar-offcanvas").length > 0) return !0;
                    if (this.startX > this.startThreshold && this.startX < this.maxStartThreshold) {
                        if (e.preventDefault(), s = e.originalEvent.touches[0].pageX - this.startX, s = this.element.hasClass("navbar-offcanvas-right") ? -s : s, Math.abs(s) < this.element.outerWidth()) return this.element.css(this._getCss(s)), this.element.css(this._getFade(s))
                    } else if (this.element.hasClass("in") && (e.preventDefault(), s = e.originalEvent.touches[0].pageX + (this.currentX - this.startX), s = this.element.hasClass("navbar-offcanvas-right") ? -s : s, Math.abs(s) < this.element.outerWidth())) return this.element.css(this._getCss(s)), this.element.css(this._getFade(s))
                }, i.prototype._touchEnd = function (e) {
                    var s, i, a;
                    return t(e.target).parents(".navbar-offcanvas").length > 0 || (i = !1, a = e.originalEvent.changedTouches[0].pageX, Math.abs(a) !== this.startX ? (s = this.element.hasClass("navbar-offcanvas-right") ? Math.abs(a) > this.endThreshold + 50 : a < this.endThreshold + 50, this.element.hasClass("in") && s ? (this.currentX = 0, this.element.removeClass("in").css(this._clearCss()), this.button.removeClass("is-open"), i = !0) : Math.abs(a - this.startX) > this.endThreshold && this.startX > this.startThreshold && this.startX < this.maxStartThreshold ? (this.currentX = this.element.hasClass("navbar-offcanvas-right") ? -this.element.outerWidth() : this.element.outerWidth(), this.element.toggleClass("in").css(this._clearCss()), this.button.toggleClass("is-open"), i = !0) : this.element.css(this._clearCss()), this.offcanvas.bodyOverflow(i)) : void 0)
                }, i.prototype._getCss = function (e) {
                    return {
                        "-webkit-transform": "translate3d(" + (e = this.element.hasClass("navbar-offcanvas-right") ? -e : e) + "px, 0px, 0px)",
                        "-webkit-transition-duration": "0s",
                        "-moz-transform": "translate3d(" + e + "px, 0px, 0px)",
                        "-moz-transition": "0s",
                        "-o-transform": "translate3d(" + e + "px, 0px, 0px)",
                        "-o-transition": "0s",
                        transform: "translate3d(" + e + "px, 0px, 0px)",
                        transition: "0s"
                    }
                }, i.prototype._getFade = function (e) {
                    return this.fade ? {opacity: e / this.element.outerWidth()} : {}
                }, i.prototype._clearCss = function () {
                    return {
                        "-webkit-transform": "",
                        "-webkit-transition-duration": "",
                        "-moz-transform": "",
                        "-moz-transition": "",
                        "-o-transform": "",
                        "-o-transition": "",
                        transform: "",
                        transition: "",
                        opacity: ""
                    }
                }, i
            }(), s.Offcanvas = i = function () {
                function i(s) {
                    var i, o;
                    this.element = s, this.bodyOverflow = e(this.bodyOverflow, this), this._sendEventsAfter = e(this._sendEventsAfter, this), this._sendEventsBefore = e(this._sendEventsBefore, this), this._documentClicked = e(this._documentClicked, this), this._close = e(this._close, this), this._open = e(this._open, this), this._clicked = e(this._clicked, this), this._navbarHeight = e(this._navbarHeight, this), (i = !!this.element.attr("data-target") && this.element.attr("data-target")) ? (this.target = t(i), this.target.length && !this.target.hasClass("js-offcanvas-done") && (this.element.addClass("js-offcanvas-has-events"), this.location = this.target.hasClass("navbar-offcanvas-right") ? "right" : "left", this.target.addClass(transform ? "offcanvas-transform js-offcanvas-done" : "offcanvas-position js-offcanvas-done"), this.target.data("offcanvas", this), this.element.on("click", this._clicked), this.target.on("transitionend", (o = this, function () {
                        if (o.target.is(":not(.in)")) return o.target.height("")
                    })), t(document).on("click", this._documentClicked), this.target.hasClass("navbar-offcanvas-touch") && new n(this.element, this.target, this.location, this), this.target.find(".dropdown-toggle").each(function () {
                        return new a(this)
                    }), this.target.on("offcanvas.toggle", function (e) {
                        return function (t) {
                            return e._clicked(t)
                        }
                    }(this)), this.target.on("offcanvas.close", function (e) {
                        return function (t) {
                            return e._close(t)
                        }
                    }(this)), this.target.on("offcanvas.open", function (e) {
                        return function (t) {
                            return e._open(t)
                        }
                    }(this)))) : console.warn("Offcanvas: `data-target` attribute must be present.")
                }

                return i.prototype._navbarHeight = function () {
                    if (this.target.is(".in")) return this.target.height(t(s).outerHeight())
                }, i.prototype._clicked = function (e) {
                    return e.preventDefault(), this._sendEventsBefore(), t(".navbar-offcanvas").not(this.target).trigger("offcanvas.close"), this.target.toggleClass("in"), this.element.toggleClass("is-open"), this._navbarHeight(), this.bodyOverflow()
                }, i.prototype._open = function (e) {
                    if (e.preventDefault(), !this.target.is(".in")) return this._sendEventsBefore(), this.target.addClass("in"), this.element.addClass("is-open"), this._navbarHeight(), this.bodyOverflow()
                }, i.prototype._close = function (e) {
                    if (e.preventDefault(), !this.target.is(":not(.in)")) return this._sendEventsBefore(), this.target.removeClass("in"), this.element.removeClass("is-open"), this._navbarHeight(), this.bodyOverflow()
                }, i.prototype._documentClicked = function (e) {
                    var s;
                    if (!(s = t(e.target)).hasClass("offcanvas-toggle") && 0 === s.parents(".offcanvas-toggle").length && 0 === s.parents(".navbar-offcanvas").length && !s.hasClass("navbar-offcanvas") && this.target.hasClass("in")) return e.preventDefault(), this._sendEventsBefore(), this.target.removeClass("in"), this.element.removeClass("is-open"), this._navbarHeight(), this.bodyOverflow()
                }, i.prototype._sendEventsBefore = function () {
                    return this.target.hasClass("in") ? this.target.trigger("hide.bs.offcanvas") : this.target.trigger("show.bs.offcanvas")
                }, i.prototype._sendEventsAfter = function () {
                    return this.target.hasClass("in") ? this.target.trigger("shown.bs.offcanvas") : this.target.trigger("hidden.bs.offcanvas")
                }, i.prototype.bodyOverflow = function (e) {
                    if (null == e && (e = !0), this.target.is(".in") ? t("body").addClass("offcanvas-stop-scrolling") : t("body").removeClass("offcanvas-stop-scrolling"), e) return this._sendEventsAfter()
                }, i
            }(), r = this, o = function () {
                var e, t, s, i;
                return i = "translate3d(0px, 0px, 0px)", s = /translate3d\(0px, 0px, 0px\)/g, (t = document.createElement("div")).style.cssText = "-webkit-transform: " + i + "; -moz-transform: " + i + "; -o-transform: " + i + "; transform: " + i, e = t.style.cssText.match(s), r.transform = null != e.length
            }, t(function () {
                return o(), t('[data-toggle="offcanvas"]').each(function () {
                    return new i(t(this))
                }), t(s).on("resize", function () {
                    return t(".navbar-offcanvas.in").each(function () {
                        return t(this).height("").removeClass("in")
                    }), t(".offcanvas-toggle").removeClass("is-open")
                }), t(".offcanvas-toggle").each(function () {
                    return t(this).on("click", function (e) {
                        var s, i;
                        if (!t(this).hasClass("js-offcanvas-has-events") && (i = t(this).attr("data-target"), s = t(i))) return s.height(""), s.removeClass("in"), t("body").css({
                            overflow: "",
                            position: ""
                        })
                    })
                })
            })
        }(window.jQuery, window)
    }.call(this), $("#js-bootstrap-offcanvas").trigger("offcanvas.toggle"), $(function () {
        var e = window.location.href, t = (e = e.split("#"))[1];
        "warranty_policies" == t && ($("a.active").removeClass("active"), $("div.active").removeClass("active"), $('a[href="#' + t + '"]').addClass("active show"), $("#" + t).addClass("active show")), $("#zoomBtn").click(function () {
            $(".zoom-btn-sm").toggleClass("scale-out")
        }), $(document).ready(function () {
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))
        })
    }),new Swiper("#swipper-categories-1", {
        autoplay: {delay: 3e3},
        slidesPerView: 12,
        spaceBetween: 5,
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0,
        breakpoints: {
            300: {slidesPerView: 4, spaceBetween: 0},
            640: {slidesPerView: 6, spaceBetween: 5},
            768: {slidesPerView: 6, spaceBetween: 5, scrollbar: !1},
            1024: {slidesPerView: 11, spaceBetween: 0, loop: !1}
        }
    });new Swiper("#productTypeFilter", {
        autoplay: {delay: 3e3},
        slidesPerView: 12,
        spaceBetween: 5,
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0,
        breakpoints: {
            300: {slidesPerView: 2.8, spaceBetween: 5},
            355: {slidesPerView: 3.3, spaceBetween: 5},
            383: {slidesPerView: 3.5, spaceBetween: 5},
            640: {slidesPerView: 5.3, spaceBetween: 5},
            768: {slidesPerView: 5.7, spaceBetween: 5, scrollbar: !1},
            1024: {slidesPerView: 7.5, spaceBetween: 5, loop: !1},
            1280: {slidesPerView: 8.5, spaceBetween: 5, loop: !1}
        }
    });
    var e = new Swiper(".gallery-thumbs-mbl", {
        direction: "vertical",
        spaceBetween: 5,
        slidesPerView: 4,
        freeMode: !0,
        autoplay: false,
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0,

    });

    new Swiper(".gallery-top-mbl", {
        spaceBetween: 10,
        autoplay: false,
        navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
        thumbs: {swiper: e}

    });
    new Swiper("#swiper-category-banner", {
        autoplay: {delay: 5e3},
        pagination: {el: ".swiper-pagination", clickable: !0},
        navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}
    });
    new Swiper("#swipper-icon", {
        lazyload: !0,
        slidesPerView: 8,
        spaceBetween: 5,
        breakpoints: {
            300: {slidesPerView: 3.5, spaceBetween: 5},
            640: {slidesPerView: 5.5, spaceBetween: 5},
            768: {slidesPerView: 6.5, spaceBetween: 5, scrollbar: !1},
            1024: {slidesPerView: 8.5, spaceBetween: 15, loop: !1},
            1280: {slidesPerView: 10.5, spaceBetween: 15, loop: !1},
        },
    });  new Swiper("#prod_tabs_slider", {
        freeMode: true,
        slidesPerView: 6,
        spaceBetween: 0,
        breakpoints: {
            300: {slidesPerView: 2.25, spaceBetween: 0},
            640: {slidesPerView: 3.25, spaceBetween: 0},
            768: {slidesPerView: 4.25, spaceBetween: 0},
            1024: {slidesPerView: 5, spaceBetween: 0},
            1280: {slidesPerView: 6, spaceBetween: 0},
        },
    }); new Swiper(".gallery-thumbs", {
            spaceBetween: 10,
            slidesPerView: 1,
            freeMode: !0,
            loopedSlides: 5,
            watchSlidesVisibility: !0,
            watchSlidesProgress: !0
    });
    // $('.slideto').click(e,function(){
    //
    //    var index = $(this).attr("slideindex");
    //     console.log(index);
    //     console.log(e);
    //     e.activeIndex(index);
    // })
}),$("#reviews-sect").click(function () {
    $("html, body").animate({scrollTop: $("#reviews-section").offset().top - 100}, 1e3)
}),$("#quick_but_scroll").click(function () {
    $("html, body").animate({scrollTop: $("#quick-buy-section").offset().top - 100}, 1e3)
}), $("#dismiss, .overlay-sidenav").on("click", function () {
    $("#sidebar").removeClass("active"), document.getElementById("mySidenav").style.width = "0", $("#mySidenav").removeClass("active"), $("#filter_sidebar").removeClass("d-block").addClass("d-none"), $(".overlay-sidenav").removeClass("active"), $("body").removeClass("stop_scrolling")
}), $("#sidebarCollapse").on("click", function () {
    $("#sidebar").addClass("active"), $(".overlay-sidenav").addClass("active"), $(".collapse.in").toggleClass("in"), $("a[aria-expanded=true]").attr("aria-expanded", "false"), $("body").addClass("stop_scrolling")
}),
    $("#sidebarCollapsembl, #sidebarCollapsemblcat, #sidebarCollapsemblsticky").on("click", function () {
        // Add sidebar and overlay classes
        $("#sidebar").addClass("active px-0 py-0");
        $(".overlay-sidenav").addClass("active");
        $(".collapse.in").toggleClass("in");
        $("a[aria-expanded=true]").attr("aria-expanded", "false");
        $("body").addClass("stop_scrolling");

        // Check if the mobile category container is empty before making the AJAX call
        if ($.trim($('#GetCategoryMobile').html()) === '') {
            var url = $("#url").val();

            // Add a loading indicator before the AJAX call
            $('#GetCategoryMobile').html('<div id="loadingIndicator">Loading...</div>');

            $.ajax({
                url: url + 'home/getCategoriesMobile', // Adjust the URL as needed
                type: 'GET',
                dataType: 'json',
                success: function(response) {
                    if (response.html) {
                        $('#GetCategoryMobile').html(response.html); // Populate #GetCategoryMobile with categories
                    }
                },
                error: function() {
                    console.error("Error loading categories.");
                    $('#GetCategoryMobile').html('<div>Error loading categories.</div>');
                }
            });
        } else {
            console.log("Categories already loaded.");
        }
    });
$(function() {
    $('iframe').addClass('no-src'),$('iframe').addClass('lazyload');
});
// Stop Scrolling Body
$('#sidebarCollapse, #sidebarCollapsembl, #sidebarCollapsemblcat, #stop_scroll_cart_mobile, #stop_scroll_cart_desktop, #stop_scrolling_filters').click(function() {
    $('html').css('overflow-y', ($('#sidebar, #mySidenav').hasClass('active') || $('#filter_sidebar').hasClass('d-block')) ? 'hidden' : '');
});$('.overlay-sidenav').click(function() {
    $('html').css('overflow-y', '');
});$('#dismiss,#close_side_btn').click(function() {
    $('html').css('overflow-y', '');
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var e = $("#mbl-view");
    $(window).scrollTop() >= 800 ? e.addClass("visible-mbl-view") : e.removeClass("visible-mbl-view")
}, $(".swiperHover").hover(function () {
    this.swiper.autoplay.stop()
}, function () {
    this.swiper.autoplay.start()
});
var a = 0;
"" != $("#counter").text() && $(window).scroll(function () {
    var b = $("#counter").offset().top - window.innerHeight;
    0 == a && $(window).scrollTop() > b && ($(".counter-value").each(function () {
        var a = $(this), b = a.attr("data-count");
        $({countNum: a.text()}).animate({countNum: b}, {
            duration: 2e3, easing: "swing", step: function () {
                a.text(Math.floor(this.countNum))
            }, complete: function () {
                a.text(this.countNum + "+")
            }
        })
    }), a = 1)
})