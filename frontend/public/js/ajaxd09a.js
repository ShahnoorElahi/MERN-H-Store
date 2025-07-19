function call_ajax(e, t, n) {
    var a = get_XmlHttp();
    a.open("POST", t, !0),
        a.send(n),
        $("body").append(modal),
        $("#background_fade").fadeIn(),
        $("#processing").modal(),
        $(".btn").attr("disabled", "disabled"),
        (a.onreadystatechange = function () {
            4 == a.readyState &&
            ($("#background_fade").fadeOut(function () {
                $(this).remove(),
                    $(".modal-backdrop").fadeOut(function () {
                        $(this).remove();
                    });
            }),
                $(".btn").removeAttr("disabled"),
                "" == e ? (-1 != a.responseText.toLowerCase().search("fail") ? alertify.error(a.responseText) : alertify.success(a.responseText)) : "" != a.responseText && (document.getElementById(e).innerHTML = a.responseText));
        });
}
function call_ajax_without_modal(e, t, n) {
    var a = get_XmlHttp();
    a.open("POST", t, !0),
        a.send(n),
        $(".btn").attr("disabled", "disabled"),
        (a.onreadystatechange = function () {
            4 == a.readyState &&
            ($(".btn").removeAttr("disabled"),
                "" == e ? (-1 != a.responseText.toLowerCase().search("fail") ? alertify.error(a.responseText) : alertify.success(a.responseText)) : "" != a.responseText && (document.getElementById(e).innerHTML = a.responseText));
        });
}
function call_ajax_with_functions(e, t, n, a) {
    var o = get_XmlHttp();
    o.open("POST", t, !0),
        o.send(n),
        $("#background_fade").fadeIn(),
        $(".btn").attr("disabled", "disabled"),
        (o.onreadystatechange = function () {
            if (4 == o.readyState) {
                if (
                    ($(".btn").removeAttr("disabled"),
                        $("#background_fade").fadeOut(function () {
                            $(this).remove();
                        }),
                    "" == e)
                )
                    -1 != o.responseText.toLowerCase().search("fail") ? alertify.error(o.responseText) : alertify.success(o.responseText);
                else {
                    // $(function () {
                    //     $(".lazy").Lazy();
                    // }),
                        (document.getElementById(e).innerHTML = o.responseText),
                        document.addEventListener("DOMContentLoaded", function () {
                            var e,
                                t = document.querySelectorAll("img.lazy");
                            function n() {
                                e && clearTimeout(e),
                                    (e = setTimeout(function () {
                                        var e = window.pageYOffset;
                                        t.forEach(function (t) {
                                            t.offsetTop < window.innerHeight + e && ((t.src = t.dataset.src), t.classList.remove("lazy"));
                                        }),
                                        0 == t.length && (document.removeEventListener("scroll", n), window.removeEventListener("resize", n), window.removeEventListener("orientationChange", n));
                                    }, 20));
                            }
                            document.addEventListener("scroll", n), window.addEventListener("resize", n), window.addEventListener("orientationChange", n);
                        });
                }
                if (a.length > 0)
                    if (-1 != o.responseText.search("fail"));
                    else for (; a.length; ) a.shift().call();
            }
        });
}
function call_ajax_with_functions_for_notes(e, t, n, a) {
    var o = get_XmlHttp();
    o.open("POST", t, !0),
        console.log(t),
        o.send(n),
        $("body").append(modal),
        $("#background_fade").fadeIn(),
        $(".btn").attr("disabled", "disabled"),
        (o.onreadystatechange = function () {
            if (
                4 == o.readyState &&
                (console.log(o.responseText),
                    $(".btn").removeAttr("disabled"),
                    $("#background_fade").fadeOut(function () {
                        $(this).remove();
                    }),
                    "" == e ? (-1 != o.responseText.toLowerCase().search("fail") ? alertify.error(o.responseText) : alertify.success(o.responseText)) : (document.getElementById(e).innerHTML = o.responseText),
                a.length > 0)
            )
                for (; a.length; ) a.shift().call();
        });
}
function call_ajax_modal(e, t, n) {
    var a = get_XmlHttp();
    a.open("POST", e, !0),
        a.send(t),
        $("body").append(modal),
        $("#background_fade").fadeIn(),
        $(".btn").attr("disabled", "disabled"),
        (a.onreadystatechange = function () {
            4 == a.readyState &&
            ($(".btn").removeAttr("disabled"),
                "" != a.responseText
                    ? ((document.getElementById("modal_title").innerHTML = n), (document.getElementById("modal_data").innerHTML = a.responseText))
                    : (alertify.error("No Responce.."),
                        $("#background_fade").fadeOut(function () {
                            $(this).remove();
                        })));
        });
}
function call_ajax_modal_with_functions(e, t, n, a) {
    var o = get_XmlHttp();
    o.open("POST", e, !0),
        o.send(t),
        $("body").append(modal),
        $("#background_fade").fadeIn(),
        $(".btn").attr("disabled", "disabled"),
        (o.onreadystatechange = function () {
            if (
                4 == o.readyState &&
                ($(".btn").removeAttr("disabled"),
                    "" != o.responseText
                        ? ((document.getElementById("modal_title").innerHTML = n), (document.getElementById("modal_data").innerHTML = o.responseText))
                        : (alertify.error("No Responce.."),
                            $("#background_fade").fadeOut(function () {
                                $(this).remove();
                            })),
                a.length > 0)
            )
                for (; a.length; ) a.shift().call();
        });
}
function get_XmlHttp() {
    var e = null;
    return window.XMLHttpRequest ? (e = new XMLHttpRequest()) : window.ActiveXObject && (e = new ActiveXObject("Microsoft.XMLHTTP")), e;
}
function get_products_by_variation(e, t, n,param,pid) {
    var a = get_XmlHttp();
    a.open("POST", t, !0),
        a.send(n),
        $(".loading-product").show(),
        (a.onreadystatechange = function () {
            $(".loading-product").hide(),
            4 === a.readyState &&
            ("" === e ? (-1 !== a.responseText.toLowerCase().search("fail") ? alertify.error(a.responseText) : alertify.success(a.responseText)) : "" !== a.responseText && (document.getElementById(e).innerHTML = a.responseText),
                $(document).ready(function () {
                    // fire_pixel();
                    $(function () {
                        $('[data-toggle="tooltip"]').tooltip()
                    })
                    function myFunctionSocial(t){
                        t.classList.toggle("change");let e=$(t)[0].className;e.indexOf("change")>0?(console.log(e.indexOf("change")),$("#social-plugin-h")[0].style.display="block"):(console.log(e.indexOf("change")),$("#social-plugin-h")[0].style.display="none"),console.log($("#social-plugin-h")[0])
                    }
                    new Swiper('#customer_viewed', {
                        autoplay: {
                            delay: 3000,
                        },
                        slidesPerView: 6,
                        spaceBetween: 15,
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                        breakpoints: {
                            300:{
                                slidesPerView: 2,
                                spaceBetween: 15,

                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 15,
                            },
                        }

                    });
                    new Swiper('#product_mobile_slider', {
                        lazy: true,
                        preloadImages: true,
                        slidesPerView: 1,
                        spaceBetween: 3,
                        pagination: {
                            el: '.swiper-pagination',
                            type: 'fraction',
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    });
                    var galleryThumbs = new Swiper(".gallery-thumbs-mbl", {
                            spaceBetween: 10,
                            slidesPerView: 4,
                            freeMode: !0,
                            watchSlidesVisibility: !0,
                            watchSlidesProgress: !0
                        }),
                        galleryTop = new Swiper(".gallery-top-mbl", {
                            spaceBetween: 10,
                            navigation: {
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev"
                            },
                            thumbs: {
                                swiper: galleryThumbs
                            }
                        });
                    // $('.single_city').select2();
                    // $(".sp-wrap").smoothproducts(),
                    $(".rating input:radio").attr("checked", !1),
                        $(".rating input").click(function () {
                            $(".rating span").removeClass("checked"), $(this).parent().addClass("checked");
                        }),
                        $("input:radio").change(function () {
                            var e = this.value;
                            $("#review_rating").val(e);
                        });
                    product_timer(pid);
                }),
                $("button#qb").click(function () {
                    $("html,body").animate(
                        {
                            scrollTop: $(".quick-form").offset().top,
                        },
                        "slow"
                    );
                }));
            if(param){
                // console.log(param)
                // let parent_slug = $('#attributes'+param[1]);
                // $('#attributes'+param[1]+' option').removeAttr('selected').filter('[value='+param[0]+']').attr('selected', true);
                $(".loading-product").show();
                // setTimeout(function(){
                // $('#attributes'+param[1]+' option[value='+param[0]+']').attr('selected',true);
                let parent_slug = $("#attributes"+param[1]);

                // console.log(parent_slug);
                // $('.selected_size').html(param[4])
                // console.log($('#attributes'+param[1]+' option[value='+param[0]+']'))
                // console.log(parent_slug.attr('group_multiple'));
                // console.log(parent_slug.attr('group_multiple'));
                attributes_update_2(param[1],parent_slug,parent_slug.attr('group_multiple'),param[3],param[2],param[5],param[6]);
                // },600);

                // setTimeout(function() {
                //     $('#attributes' + param[3] + ' option[value=' + param[2] + ']').attr('selected', true);
                // },50);
            }else{
                // $('.loading-product').hide();
            }

        });

}

function product_timer(id){

    var end_date = $('#end_date').val();
    if(end_date != undefined){
    end_date =  end_date.replaceAll("-","/");
    const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let current_datetime = new Date(end_date)
    // let formatted_date =  + "-" +  + "-" +
    // let format = months[current_datetime.getMonth()] +' '+current_datetime.getDate()+', '+current_datetime.getFullYear()
    // console.log()
// var formated =  end_date;
// console.log(current_datetime.getFullYear(),current_datetime.getMonth(),current_datetime.getDate(),0,0,0,0);
    var times = [
        {
            'id': id,
            'end': new Date(current_datetime.getFullYear(),current_datetime.getMonth(),current_datetime.getDate(),0,0,0,0).getTime(),
        },
    ];

    // Initialize the table values
    $.each(times, function( key, value ) {
        $('#table-auctions'+id).html('<div className="timeParent col-12 font-weight-700 text-center font-weight-bold"><div className="row text-center justify-content-center" id="player-'+value.id+'-expiration"></div></div>');
    });
    function countdown_product() {
        var now = new Date();


        $.each(times, function (key, value) {
            var left = value.end - now;
            var days = Math.floor(left / (1000 * 60 * 60 * 24));

            var hours = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((left % (1000 * 60)) / 1000);

            displayTime = '';
            if (days > 0) {
                displayTime = "<div className='col-3 px-1'><span className='days time mx-auto d-block'>"+days+"</span><span className='staticTime'>Days</span></div>" ;
                // displayTime = " Hours: "  + hours;
                // displayTime = " Minutes: " + minutes;
                // displayTime = " Seconds: "  + seconds;
            }
            if (hours >= 0 && minutes >= 0) {
                displayTime = displayTime +"<div className='col-3 px-1'><span className='hours time mx-auto d-block'>"+hours+"</span><span className='staticTime'>hours</span></div><div className='col-3 px-1'><span className='minutes time mx-auto d-block'>"+minutes+"</span><span className='staticTime'>Minutes</span></div><div className='col-3 px-1'><span className='seconds time mx-auto d-block'>"+seconds+"</span><span className='staticTime'>Seconds</span></div>";
            } else {
                displayTime = displayTime +"<div className='col-3 px-1'><span className='hours time mx-auto d-block'>"+0+"</span><span className='staticTime'>hours</span></div><div className='col-3 px-1'><span className='minutes time mx-auto d-block'>"+0+"</span><span className='staticTime'>Minutes</span></div><div className='col-3 px-1'><span className='seconds time mx-auto d-block'>"+0+"</span><span className='staticTime'>Seconds</span></div>";
            }
            $('#player-' + value.id + '-expiration').html(displayTime)
        });

    }
    timer = setInterval(countdown_product, 1000);
    }
}