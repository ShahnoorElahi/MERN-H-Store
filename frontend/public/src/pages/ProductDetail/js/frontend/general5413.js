function isValidEmailAddress(e) {
    return new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    ).test(e);
}
function see_more_products() {

    var e = $("#url").val(), t = $("div[id*='deal-box']").length, a = $("#seg").val() != undefined ? $("#seg").val() : $("#seg1").val(),
        s = $("#search_param").val(),
        c = getUrlParameter("sort"),
        d = getUrlParameter("price_min"),
        u = getUrlParameter("price_max"),
        p = (getUrlParameter("brand[]"), t(".attribute_filters:checked", "#search_filter"), t(".attribute_filters:checked"));
    var r = [];
    $(" input:checkbox:checked.brands").each(function () {
        r.push($(this).val());
    });
    var i = [],
        o = [];
    p.map(function (e, t) {
        if (null != t.getAttribute("groups")) {
            var a = t.getAttribute("groups"),
                l = t.value;
            if (o.indexOf(a) > -1) {
                var r = o.indexOf(a);
                i[r].push(l);
            } else {
                o.push(a);
                var n = [];
                n.push(l), i.push(n), 1;
            }
        }
    });
    $("#see_more_btn").hide(), $("#home_loader").show(), $.post(e + "general_functions/see_more_products", {
        offset: t,
        seg: a,
        search_param: s,
        sort: c,
        price_min: d,
        price_max: u,
        brand: r,
        search_attributes: i,
        search_groups: o,
        change_col_val: $("#change_col_val").val()
    }, function (e) {
        if (0 === e.trim().length) return $("#home_loader").replaceWith('<div className="alert alert-danger">No More Products Found!</div>');
        $("#see_more_btn").show(), $("#home_loader").hide(), $("#load_all_products").val() != undefined ? $("#load_all_products").append(e) : $("#products_listing").append(e)
    })
}
function delete_by_id(e, t) {
    var a = $("#url").val();
    confirm_to_delete("show"),
        $("#yes_delete").click(function () {
            $("#row_" + t).slideUp(), confirm_to_delete("hide"), $.post(a + "general_functions/delete_by_id", { table: e, id: t }, function (e) {});
        });
}
function topFunction() {
    $("html, body").animate({scrollTop: 0}, "slow");
}

function showit(e) {
    jQuery(e).removeClass("d-none").addClass("d-block");
}

function hideit(e) {
    jQuery(e).removeClass("d-block").addClass("d-none");
}

function confirm_to_delete(e) {
    $("#confirmation_modal").modal(e);
}

function printDiv(e) {
    var t = document.getElementById(e).innerHTML,
        a = document.body.innerHTML;
    (document.body.innerHTML = "<html><head><title></title></head><body>" + t + "</body>"), window.print(), (document.body.innerHTML = a);
}

function get_side_menu() {
    var e = $("#url").val();
    $("#sidebar-wrapper").addClass("opened"),
        $("#category_menu_side").toggleClass("is-closed"),
        $.post(e + "general_functions/get_side_menu", {}, function (e) {
            e && ($("#sidebar-wrapper").removeClass("bgloader"), $("#side_menu").html(e));
        });
}

function show_modal_refer_friend(e) {
    $("#product_id").val(e), $("#refer_friend_modal").modal({show: !0});
}

function refer_friend() {
    var e = grecaptcha.getResponse();
    if (e) {
        $("#refer_message").html("");
        var t = $("#url").val(),
            a = $("#refer_name").val(),
            l = $("#product_id").val(),
            r = $("#refer_email").val(),
            i = $("#refer_by_email").val();
        if ("" == a || !isValidEmailAddress(r) || !isValidEmailAddress(i)) return $("#refer_message").html('<div className="alert alert-danger">Please enter valid data.</div>'), !1;
        $("#refer_message").html(""),
            $.post(t + "general_functions/refer_friend", {
                product_id: l,
                name: a,
                email: r,
                refer_by_email: i,
                response: e
            }, function (e) {
                $("#refer_name").val(""), $("#refer_email").val(""), $("#refer_message").html(e);
            });
    } else alert("Please verify your self by using capcha.");
}

function show_modal_callback(e) {
    $("#callback_product_id").val(e), $("#request_call_back_modal").modal({show: !0});
}

function request_for_callback() {
    $("#callback_message").html("");
    var e = $("#url").val(),
        t = $("#callback_product_id").val(),
        a = $("#callback_name").val(),
        l = $("#callback_email").val(),
        r = $("#callback_mobile").val();
    return "" == l || isValidEmailAddress(l)
        ? "" == a || "" == r
            ? ($("#callback_message").html('<div className="alert alert-danger">Please enter valid data.</div>'), !1)
            : void $.post(e + "general_functions/request_for_callback", {
                id: t,
                name: a,
                email: l,
                mobile: r
            }, function (e) {
                0 == e && alert("Your request is already in process."),
                1 == e && $("#callback_message").html('<div className="alert alert-success">Your request has been submitted. Our Representative will contact you Soon!.</div>'),
                    $("#callback_name").val(""),
                    $("#callback_email").val(""),
                    $("#callback_mobile").val("");
            })
        : ($("#callback_message").html('<div className="alert alert-danger">Please enter valid email.</div>'), !1);
}

function add_to_wishlist(e) {
    var t = $("#url").val();
    $.post(t + "general_functions/add_to_wishlist", {id: e}, function (e) {
        0 == e && ($("#message-modal-body").html('<div className="alert alert-danger">Please <a href="' + t + 'login">Login/Signup</a> First to add product(s) to your wishlist.</div>'), $("#message_modal").modal({show: !0})),
        1 == e &&
        ($("#message-modal-body").html('<div className="alert text-success">This Product has been added to your Wishlist. Click Here to see your <a href="' + t + 'user#v-pills-wishlist">Wishlist!</a></div>'),
            $("#message_modal").modal({show: !0})),
        2 == e &&
        ($("#message-modal-body").html('<div className="alert text-danger">This Product is already in your Wishlist. Click Here to see your <a href="' + t + 'user#v-pills-wishlist">Wishlist!</a></div>'),
            $("#message_modal").modal({show: !0}));
    });
}

function load_facebook_reviews() {
    var e = $("#url").val();
    $("#seemore_reviews").hide(), $(".balls_loader").show();
    var t = $("div[id*='facebook-review']").length;
    $.post(e + "general_functions/load_facebook_reviews", {offset: t}, function (e) {
        $("#seemore_reviews").show(), $(".balls_loader").hide(), 0 != e ? $("#facebook_reviews").append(e) : $("#load-btn").remove();
    });
}

function deactivate_from_front(e) {
    var t = $("#url").val();
    $.post(t + "general_functions/deactivate_from_front", {id: e}, function (e) {
        1 == e && (window.location.href = t);
    });
}

function get_product(e) {
    var t = $("#url").val();
    $("#product-added-to-cart").html(""),
        $("#add_to_cart_modal").modal("show"),
        e
            ? ($("#add_to_cart_btn").removeClass("hideit"),
                $.post(t + "general_functions/get_product", {id: e}, function (e) {
                    e ? $("#add-to-cart-modal-body").html(e) : ($("#add_to_cart_btn").addClass("hideit"), $("#add-to-cart-modal-body").html("<div className='alert alert-danger'>Sorry! there is problem in loading product.</div>"));
                }))
            : ($("#add_to_cart_btn").addClass("hideit"), $("#add-to-cart-modal-body").html("<div className='alert alert-danger'>Sorry! there is problem in loading product.</div>"));
}

function add_to_cart() {
    try {
        event.preventDefault();
    } catch (e) {
        try {
            e.preventDefault();
        } catch (e) {
        }
    }
    var e = $("#url").val(),
        t = $("#id").val(),
        a = $("#title" + t).val(),
        l = $("#code" + t).val(),
        r = $("#price" + t).val(),
        i = $("#del_charge" + t).val(),
        o = $("#image" + t).val(),
        n = $("#bqty" + t).val(),
        s = ($("#attrqty" + t).val(), $(".attributes"));
    $("#product-added-to-cart").html("");
    var c = "",
        d = 0,
        u = "";
    n < 1 && ((u = "Quantity, "), (d = 1));
    var p,
        v = "";
    if (((_ = ""), 0 != s.length)) {
        for (var g = 0; g < s.length; g++) {
            var m = s[g].value.replace(" ", "_");
            (_ = $("#" + m).val()),
            ("--select--" != $("select#attributes" + _ + " option:selected").text() && "" != $("select#attributes" + _ + " option:selected").text()) || ((u += " , " + m), (d = 1)),
                (c = c + m + ":" + $("select#attributes" + _ + " option:selected").text() + ", "),
                (p += "," + $("select#attributes" + _ + " option:selected").attr("val-id"));
        }
        v = p.split(",");
    }
    var f = $("select#attributes" + _ + " option:selected").text();
    "function" == typeof gtag &&
    gtag("event", "add_to_cart", {
        items: [{
            id: t,
            name: a,
            list_name: $("#g_last_categorys").val(),
            brand: $("#g_brand").val(),
            category: $("#g_categorys").val(),
            variant: f || "",
            list_position: 1,
            quantity: n,
            price: r
        }]
    });
    let google_event_credential = JSON.parse($('#google_event_credential').val());
    '' !=  $('#google_event_credential').val() && "function" == typeof gtag &&  gtag('event', 'conversion', {
        'send_to': google_event_credential.send_to,
        'value': r,
        'currency': 'PKR',
    });
    '' !=  $('#google_event_credential').val() && "function" == typeof gtag && gtag('event', 'page_view', {
        'send_to': google_event_credential.conversion_id,
        'value': r,
        'items': [
            {
                'id': t,
                'google_business_vertical': 'retail'
            }
        ]
    });
    "function" == typeof fbq && fbq("track", "AddToCart", {
        content_ids: t,
        content_name: a,
        content_type: "product",
        currency: "PKR",
        value: r
    });

    var cat = $("#g_categorys").val().split('/');
    var ar = [];
    for (var x = 0; x < cat.length; x++) {
        ar.push(cat[x]);
    }
    var filtered = ar.filter(function (el) {
        return el != "";
    });

    var total = filtered.length;
    console.log(filtered[total - 1]);
    if('undefined' != typeof dataLayer){
        dataLayer.push({ecommerce: null});  // Clear the previous ecommerce object.
        dataLayer.push({
            event: "add_to_cart",
            ecommerce: {
                items: [
                    {
                        item_id: t,
                        item_name: a,
                        list_name: $("#g_last_categorys").val(),
                        item_brand: $("#g_brand").val(),
                        item_category:filtered[total-1],
                        item_variant: f || "",
                        index: 1,
                        quantity: n,
                        price: r
                    }
                ]
            }
        });
    }


    // Measure when a product is added to a shopping cart

    var h = r * n;
    1 != d
        ? ($("#add_to_cart_btn1").hide(),
            $("#load_btn").show(),
            $.post(e + "general_functions/add_to_cart", {
                id: t,
                title: a,
                code: l,
                qty: n,
                image: o,
                price: r,
                charges: i,
                amount: h,
                option: c,
                selected_attributes: v
            }, function (e) {
                cart_effects();
            }),
            $("#add_to_cart_btn1").show(),
            $("#load_btn").hide(),
            $("#add-to-cart-modal-body").html('<div className="text-center"><i className="fa fa-spinner fa-pulse"></i></div>'),
            cart_effects(),
            $("#add_to_cart_modal").modal("hide"),
            openNav())
        : $("#product-added-to-cart").html("<div className='alert alert-danger text-left'>" + u + " required.</div>");
}
function add_to_cart_current_item_box(e,thisbtn) {
    try {
        event.preventDefault();
    } catch (t) {
        try {
            t.preventDefault();
        } catch (t) {}
    }
    var t = $("#url").val(),
        a = e,
        l = $("#title" + a).val(),
        r = $("#code" + a).val(),
        i = $("#price" + a).val(),
        o = $("#del_charge" + a).val(),
        n = $("#image" + a).val(),
        s = $("#bqty" + a).val() != undefined  ? $("#bqty" + a).val() : 1,
        c = ($("#attrqty" + a).val(), $(".attributes"+a));
    $("#product-added-to-cart").html("");
    var d,
        u = "",
        p = 0,
        _ = "";
    if ((s < 1 && ((_ = "Quantity, "), (p = 1)), 0 != c.length)) {
        for (var v = 0; v < c.length; v++) {
            var m = c[v].value.replace(" ", "_");
            console.log(m);
            var g = $("#" + m).val();
            if ((console.log(g), "--select--" == $("#attributes" + g + " option:selected").text())) return void alert(m + " Required");
            (u = u + m + ":" + $("#attributes" + g + " option:selected").text() + ", "), (d += "," + $("#attributes" + g + " option:selected").attr("val-id"));
        }
        var h = d.split(",");
    }
    var f = i * s;
    var q = $("#attributes" + g + " option:selected").text();
    "function" == typeof gtag &&
    gtag("event", "add_to_cart", {
        items: [{
            id: a,
            name: l,
            list_name: $("#g_last_categorys"+a).val(),
            brand: $("#g_brand"+a).val(),
            category: $("#g_categorys"+a).val(),
            variant: q || "",
            list_position: 1,
            quantity: s != undefined ? s : 1,
            price: i
        }]
    });
    let google_event_credential = JSON.parse($('#google_event_credential'+a).val());

    null !=   google_event_credential.send_to &&  "function" == typeof gtag && gtag('event', 'conversion', {
        'send_to': google_event_credential.send_to,
        'value': i,
        'currency': 'PKR',

    });
    null !=   google_event_credential.send_to &&  "function" == typeof gtag && gtag('event', 'page_view', {
        'send_to': google_event_credential.conversion_id,
        'value': i,
        'items': [
            {
                'id': a,
                'google_business_vertical': 'retail'
            }
        ]
    });
    var event_id =$('#event_id'+a).val()+"-AddToCart";
    "function" == typeof fbq && fbq("track", "AddToCart", {
        content_ids: a,
        content_name: l,
        content_type: "product",
        currency: "PKR",
        value: i
    },{eventID:event_id});
    conversion_facebook_addtocart_itembox(i,a,l);
    var cat = $("#g_categorys"+a).val().split('/');
    var ar = [];
    for (var x = 0; x < cat.length; x++) {
        ar.push(cat[x]);
    }
    var filtered = ar.filter(function (el) {
        return el != "";
    });

    var total = filtered.length;

    if(typeof dataLayer ==="function") {
        dataLayer.push({ecommerce: null});  // Clear the previous ecommerce object.
        dataLayer.push({
            event: "add_to_cart",
            ecommerce: {
                items: [
                    {
                        item_id: a,
                        item_name: l,
                        list_name: $("#g_last_categorys").val(),
                        item_brand: $("#g_brand").val(),
                        item_category: filtered[total - 1],
                        item_variant: q || "",
                        index: 1,
                        quantity: s != undefined ? s : 1,
                        price: i
                    }
                ]
            }
        });
    }
    if(typeof snaptr ==="function") {
        snaptr('track', 'ADD_CART', {'number_items': s != undefined ? s : 1});
    }
    if(typeof ttq ==="object") {
        ttq.track('AddToCart', {
            content_type:"product",
            quantity: s != undefined ? s : 1,
            description:l,
            content_id:a,
            currency: 'PKR',
            value: i
        });
    }
    var cart_items = [];
    if(is_cart()){
        cart_items = JSON.parse(localStorage.getItem('products'));
        let index = (cart_items.length-1)+1;

        for(var xl = 0; xl < cart_items.length;xl++){
            if(cart_items[xl].id == a && cart_items[xl].price == i){
                index = xl
            }
        }
        let  qty = s;
        let amt = f;
        if(cart_items[index] != undefined){
            qty = (parseInt(cart_items[index].qty) + parseInt(s != undefined ? s : 1));
            amt = (parseInt(cart_items[index].amount) + parseInt(f));
            cart_items[index].qty = qty;
            cart_items[index].amount = amt;
        }else{

            cart_items.push({
                id: parseInt(a),
                title: l,
                code: r,
                qty: parseInt(s != undefined ? s : 1),
                image: n,
                price: parseInt(i),
                charges: parseInt(o),
                amount: parseInt(f),
                option: u,
                selected_attributes: h
            });
        }
        localStorage.setItem('products', JSON.stringify(cart_items));
    }else{
        cart_items.push({
            id: parseInt(a),
            title: l,
            code: r,
            qty: parseInt(s),
            image: n,
            price: parseInt(i),
            charges: parseInt(o),
            amount: parseInt(f),
            option: u,
            selected_attributes: h
        });
        localStorage.setItem('products', JSON.stringify(cart_items));
    }
    var url= $("#url").val();
    1 != p
        ? ($("#add_to_cart_btn1").hide(),
            $("#load_btn").show(),
            $("#add_to_cart_btn"+a).attr("disabled",true).find("img").attr("src",url+'images/loader.gif'),
            $.post(t + "general_functions/add_to_cart", { id: a, title: l, code: r, qty: s, image: n, price: i, charges: o, amount: f, option: u, selected_attributes: h }, function (e) {
                cart_effects_add_to_cart_item_box(a);
            }),
            $("#add_to_cart_btn1").show(),
            $("#load_btn").hide(),

            "checkout" == window.location.href.split("/")[3] ? location.reload() : '') : $("#product-added-to-cart").html("<div className='alert alert-danger text-left'>" + _ + " required.</div>");
}
function add_to_cart_current() {
    try {
        event.preventDefault();
    } catch (e) {
        try {
            e.preventDefault();
        } catch (e) {
        }
    }
    var e = $("#url").val(),
        t = $("#product_types").val(),
        a = $("#current_id").val(),
        l = $("#product_title").val(),
        r = $("#product_code").val(),
        i = $("#product_price").val(),
        o = $("#del_charge").val(),
        n = $("#product_image").val(),
        s = $("#product_bqty").val(),
        qty = $('#product_qty').val(),
        c = $("#product_attrqty").val(),
        xd=$(".attributes"),
        d = $(".attributes_values"),
        u = $(".groups_titles"),
        attribute_view  = $('#attribute_view').val(),
        attribute_view_grouped  = $('#attribute_view_grouped').val();
    $("#product-added-to-cart").html("");
    var options,
        _ = "",
        v = 0,
        g = "",
        m = "",
        vlc = "";
    // if (parseInt(s) <= parseInt(qty)) {
    if ((s < 1 && ((g = "Quantity, "), (v = 1)), "1" === t)) {
        if (0 != xd.length) {
            for (var f = 0; f < xd.length; f++) {

                var vl = xd[f].value.replace(" ", "_");


                var _l = $("#" + vl).val();
                if ("1" == attribute_view) {
                    if ($("#attributes" + _l + " li.active_border").length == 0) {
                        $('#cartflag').html(vl + " Required"),
                            $("html, body").animate({scrollTop: $("#cartflag").offset().top - 250}, 1000);
                        // alert(vl + ' Required');
                        return;
                    }
                    vlc = vlc + vl + ":" + $("#attributes" + _l + " li.active_border").text() + ", ";

                    var options_id = $("#attributes" + _l + " li.active_border").attr('val-id');
                    options += "," + options_id;
                }else if("2" == attribute_view){
                    if ($("#attributes" + _l + " option.active_border").length == 0) {
                        $('#cartflag').html(vl + " Required"),
                            $("html, body").animate({scrollTop: $("#cartflag").offset().top - 250}, 1000);
                        // alert(vl + ' Required');
                        return;
                    }
                    vlc = vlc + vl + ":" + $("#attributes" + _l + " option.active_border").text() + ", ";

                    var options_id = $("#attributes" + _l + " option.active_border").attr('val-id');
                    options += "," + options_id;
                }
            }
            m = options.split(",");
        }
    } else if ("2" === t) {
        if ("1" == attribute_view_grouped) {
            d = $(".attributes_values");
            for(var y = 0; y < d.length; y++) {
                var w = u[y].innerHTML;
                if ($("#attributes"+$(".attributes")[y].value+" li.active_border").length ==0){
                    $('#cartflag').html(w + " Required"),
                        $("html, body").animate({scrollTop: $("#cartflag").offset().top - 250}, 1000); return;
                }
                (vlc = vlc + w + ":" + $("#attributes"+$(".attributes")[y].value+" li.active_border").text()+ ", "), (options += "," + $("#attributes"+$(".attributes")[y].value+" li.active_border").attr('value'));
            }
            m = options.split(",");
        }else if("2" == attribute_view_grouped){
            for(var y = 0; y < d.length; y++) {
                var w = u[y].innerHTML;
                if ("" == d[y].value){
                    $('#cartflag').html(w + " Required"),
                        $("html, body").animate({scrollTop: $("#cartflag").offset().top - 250}, 1000); return
                }
                (vlc = vlc + w + ":" + d[y].options[d[y].selectedIndex].innerHTML + ", "), (options += "," + d[y].value);
            }
            m = options.split(",");
        }
    }
    var url= $("#url").val();
    var k = i * s;
    1 != v
        ? ($("#add_to_cart_btn1").hide(),
            $("#load_btn").show(),
            $("button#add_to_cart_btn").attr("disabled",true),
            $("button#add_to_cart_btn").html("<img src='"+url+"images/loader.gif' width='30' height='30'/>"),
            $.post(e + "general_functions/add_to_cart", {
                id: a,
                title: l,
                code: r,
                qty: s,
                image: n,
                price: i,
                charges: o,
                amount: k,
                option: vlc,
                selected_attributes: m
            }, function (e) {
                var  q = $("#attributes" + _l + " li.active_border").text();

                var purchase_limit = parseInt($("#product_purchase_limit").val());
                var product_manage_inventory = parseInt($("#product_manage_inventory").val());
                var product_qty = parseInt($("#product_qty").val());
                var purchase_qty = 0;

                if (product_manage_inventory === 1 && product_qty < purchase_limit) {
                    purchase_qty = product_qty;
                } else {
                    purchase_qty = purchase_limit;
                }


                $("#product-added-to-cart-new").html("");
                if(e != "0") {
                    "function" == typeof gtag &&
                    gtag("event", "add_to_cart", {
                        items: [{
                            id: a,
                            name: l,
                            list_name: $("#g_last_categorys").val(),
                            brand: $("#g_brand").val(),
                            category: $("#g_categorys").val(),
                            variant: q || "",
                            list_position: 1,
                            quantity: s,
                            price: i
                        }]
                    });
                    let google_event_credential = JSON.parse($('#google_event_credential').val());

                    '' !=  $('#google_event_credential').val() &&  "function" == typeof gtag && gtag('event', 'conversion', {
                        'send_to': google_event_credential.send_to,
                        'value': i,
                        'currency': 'PKR',

                    });
                    '' !=  $('#google_event_credential').val() &&  "function" == typeof gtag && gtag('event', 'page_view', {
                        'send_to': google_event_credential.conversion_id,
                        'value': i,
                        'items': [
                            {
                                'id': a,
                                'google_business_vertical': 'retail'
                            }
                        ]
                    });
                    var event_id =$('#event_id').val()+"-AddToCart";
                    "function" == typeof fbq && fbq("track", "AddToCart", {
                        content_ids: a,
                        content_name: l,
                        content_type: "product",
                        currency: "PKR",
                        value: i
                    },{eventID:event_id});
                    conversion_facebook_addtocart(i,a,l);
                    var cat = $("#g_categorys").val().split('/');
                    var ar = [];
                    for (var x = 0; x < cat.length; x++) {
                        ar.push(cat[x]);
                    }
                    var filtered = ar.filter(function (el) {
                        return el != "";
                    });

                    var total = filtered.length;
                    if(typeof dataLayer ==="function") {
                        dataLayer.push({ecommerce: null});  // Clear the previous ecommerce object.
                        dataLayer.push({
                            event: "add_to_cart",
                            ecommerce: {
                                items: [
                                    {
                                        item_id: a,
                                        item_name: l,
                                        list_name: $("#g_last_categorys").val(),
                                        item_brand: $("#g_brand").val(),
                                        item_category: filtered[total - 1],
                                        item_variant: q || "",
                                        index: 1,
                                        quantity: s,
                                        price: i
                                    }
                                ]
                            }
                        });
                    }
                    if(typeof snaptr ==="function") {
                        snaptr('track', 'ADD_CART', {'number_items': s != undefined ? s : 1});
                    }
                    if(typeof ttq ==="object") {
                        ttq.track('AddToCart', {
                            content_type:"product",
                            quantity: s != undefined ? s : 1,
                            description:l,
                            content_id:a,
                            currency: 'PKR',
                            value: i
                        });
                    }
                    var cart_items = [];

                    if(is_cart()){
                        cart_items = JSON.parse(localStorage.getItem('products'));
                        let index = (cart_items.length-1)+1;

                        for(var xl = 0; xl < cart_items.length;xl++){
                            if(cart_items[xl].id == a && cart_items[xl].price == i){
                                index = xl
                            }
                        }
                        let  qty = s;
                        let amt = k;
                        if(cart_items[index] != undefined){
                            qty = (parseInt(cart_items[index].qty) + parseInt(s));
                            amt = (parseInt(cart_items[index].amount) + parseInt(k));
                            cart_items[index].qty = qty;
                            cart_items[index].amount = amt;
                        }else{

                            cart_items.push({
                                id: parseInt(a),
                                title: l,
                                code: r,
                                qty: parseInt(s),
                                image: n,
                                price: parseInt(i),
                                charges: parseInt(o),
                                amount: parseInt(k),
                                option: vlc,
                                selected_attributes: m
                            });
                        }
                        localStorage.setItem('products', JSON.stringify(cart_items));
                    }else{
                        cart_items.push({
                            id: parseInt(a),
                            title: l,
                            code: r,
                            qty: parseInt(s),
                            image: n,
                            price: parseInt(i),
                            charges: parseInt(o),
                            amount: parseInt(k),
                            option: vlc,
                            selected_attributes: m
                        });
                        localStorage.setItem('products', JSON.stringify(cart_items));
                    }
                    if ($("input[name='addon_ids[]']").length > 0) {
                        var addonIds = $("input[name='addon_ids[]']");
                        var addonBqty = $("input[name='addon_bqty']");

                        for (var x = 0; x < addonIds.length; x++) {
                            if (addonIds[x].checked) {
                                add_to_cart_addon(addonIds[x].value);
                            } else if (x < addonBqty.length && parseInt(addonBqty[x].value) > 0) {
                                add_to_cart_addon(addonIds[x].value);
                            }
                        }
                    }

                    // if($("input[name='addon_ids[]']").length > 0){
                    //     for(var x = 0;x <$("input[name='addon_ids[]']").length;x++ ){
                    //         if($("input[name='addon_ids[]']")[x].checked){
                    //             add_to_cart_addon($("input[name='addon_ids[]']")[x].value);
                    //         }else if(parseInt($('input[name="addon_bqty"]')[x].value) > 0){
                    //             add_to_cart_addon($("input[name='addon_ids[]']")[x].value);
                    //         }
                    //     }
                    // }


                }else {
                    $("#product-added-to-cart-new").html("<div className='alert alert-danger'> Purchase Limit Only " + purchase_qty + "</div>");
                }
                cart_effects_add_to_cart();
            }))
        : $("#product-added-to-cart-new").html("<div className='alert alert-danger text-left'>" + g + " required.</div>");

}

function add_to_cart_quick_item_box(id) {
    try {
        event.preventDefault();
    } catch (e) {
        try {
            e.preventDefault();
        } catch (e) {
        }
    }
    var e = $("#url").val(),
        t = $("#product_types"+id).val(),
        a = id,
        l = $("#title"+id).val(),
        r = $("#code"+id).val(),
        i = $("#price"+id).val(),
        o = $("#del_charge"+id).val(),
        n = $("#image"+id).val(),
        s = 1,
        qty = 1,
        c = 1,
        xd=$(".attributes"),
        d = $(".attributes_values"),
        u = $(".groups_titles"),
        attribute_view  = $('#attribute_view').val(),
        attribute_view_grouped  = $('#attribute_view_grouped').val();
    $("#product-added-to-cart").html("");
    var options,
        _ = "",
        v = 0,
        g = "",
        m = "",
        vlc = "";
    // if (parseInt(s) <= parseInt(qty)) {
    if ((s < 1 && ((g = "Quantity, "), (v = 1)), "1" === t)) {
        if (0 != xd.length) {
            for (var f = 0; f < xd.length; f++) {

                var vl = xd[f].value.replace(" ", "_");

                var _l = $("#" + vl).val();
                if ("1" == attribute_view) {
                    if ($("#attributes" + _l + " li.active_border").length == 0) {
                        $('#cartflag').html(vl + " Required"),
                            $("html, body").animate({scrollTop: $("#cartflag").offset().top - 250}, 1000);
                        // alert(vl + ' Required');
                        return;
                    }
                    vlc = vlc + vl + ":" + $("#attributes" + _l + " li.active_border").text() + ", ";

                    var options_id = $("#attributes" + _l + " li.active_border").attr('val-id');
                    options += "," + options_id;

                }else if("2" == attribute_view){
                    if ($("#attributes" + _l + " option.active_border").length == 0) {
                        $('#cartflag').html(vl + " Required"),
                            $("html, body").animate({scrollTop: $("#cartflag").offset().top - 250}, 1000);
                        // alert(vl + ' Required');
                        return;
                    }
                    vlc = vlc + vl + ":" + $("#attributes" + _l + " option.active_border").text() + ", ";

                    var options_id = $("#attributes" + _l + " option.active_border").attr('val-id');
                    options += "," + options_id;

                }


            }
            m = options.split(",");
        }
    } else if ("2" === t) {
        // console.log(t);
        if ("1" == attribute_view_grouped) {
            d = $(".attributes_values");
            for(var y = 0; y < d.length; y++) {
                var w = u[y].innerHTML;
                if ($("#attributes"+$(".attributes")[y].value+" li.active_border").length ==0){
                    $('#cartflag').html(w + " Required"),
                        $("html, body").animate({scrollTop: $("#cartflag").offset().top - 250}, 1000); return;
                }
                (vlc = vlc + w + ":" + $("#attributes"+$(".attributes")[y].value+" li.active_border").text()+ ", "), (options += "," + $("#attributes"+$(".attributes")[y].value+" li.active_border").attr('value'));
            }
            m = options.split(",");
        }else if("2" == attribute_view_grouped){
            for(var y = 0; y < d.length; y++) {
                var w = u[y].innerHTML;
                if ("" == d[y].value){
                    $('#cartflag').html(w + " Required"),
                        $("html, body").animate({scrollTop: $("#cartflag").offset().top - 250}, 1000); return
                }
                (vlc = vlc + w + ":" + d[y].options[d[y].selectedIndex].innerHTML + ", "), (options += "," + d[y].value);
            }
            m = options.split(",");
        }
    }
    var k = i * s;

    1 != v
        ? ($("#add_to_cart_btn1").hide(),
                $("#load_btn").show(),

                $.post(e + "general_functions/add_to_cart", {
                    id: a,
                    title: l,
                    code: r,
                    qty: s,
                    image: n,
                    price: i,
                    charges: o,
                    amount: k,
                    option: vlc,
                    selected_attributes: m,
                    quick_buy:1
                }, function (res) {
                    var purchase_limit = $("#product_purchase_limit").val();
                    $("#product-added-to-cart-new").html("");
                    if(res != "0") {
                        var q = $("#attributes" + _l + " li.active_border").text();
                        "function" == typeof gtag &&
                        gtag("event", "add_to_cart", {
                            items: [{
                                id: a,
                                name: l,
                                list_name: $("#g_last_categorys"+id).val(),
                                brand: $("#g_brand"+id).val(),
                                category: $("#g_categorys"+id).val(),
                                variant: q || "",
                                list_position: 1,
                                quantity: s,
                                price: i
                            }]
                        });
                        if(undefined != $('#google_event_credential'+id).val()){
                            let google_event_credential = JSON.parse($('#google_event_credential'+id).val());

                            '' !=  $('#google_event_credential'+id).val() &&  "function" == typeof gtag && gtag('event', 'conversion', {
                                'send_to': google_event_credential.send_to,
                                'value': i,
                                'currency': 'PKR',

                            });
                            '' !=  $('#google_event_credential'+id).val() &&  "function" == typeof gtag && gtag('event', 'page_view', {
                                'send_to': google_event_credential.conversion_id,
                                'value': i,
                                'items': [
                                    {
                                        'id': a,
                                        'google_business_vertical': 'retail'
                                    }
                                ]
                            });
                        }
                        var event_id =$('#event_id'+id).val()+"-AddToCart";
                        "function" == typeof fbq && fbq("track", "AddToCart", {
                            content_ids: a,
                            content_name: l,
                            content_type: "product",
                            currency: "PKR",
                            value: i
                        },{eventID:event_id});
                        conversion_facebook_addtocart(i,a,l);
                        var cat = $("#g_categorys"+id).val().split('/');
                        var ar = [];
                        for (var x = 0; x < cat.length; x++) {
                            ar.push(cat[x]);
                        }
                        var filtered = ar.filter(function (el) {
                            return el != "";
                        });

                        var total = filtered.length;

                        if(typeof dataLayer ==="function") {
                            dataLayer.push({ecommerce: null});  // Clear the previous ecommerce object.
                            dataLayer.push({
                                event: "add_to_cart",
                                ecommerce: {
                                    items: [
                                        {
                                            item_id: a,
                                            item_name: l,
                                            list_name: $("#g_last_categorys"+id).val(),
                                            item_brand: $("#g_brand"+id).val(),
                                            item_category: filtered[total - 1],
                                            item_variant: q || "",
                                            index: 1,
                                            quantity: s,
                                            price: i
                                        }
                                    ]
                                }
                            });
                        }
                        if(typeof snaptr ==="function") {
                            snaptr('track', 'ADD_CART', {'number_items': s != undefined ? s : 1});
                        }
                        var cart_items = [];
                        if(is_cart()){
                            cart_items = JSON.parse(localStorage.getItem('products'));
                            let index = (cart_items.length-1)+1;

                            for(var xl = 0; xl < cart_items.length;xl++){
                                if(cart_items[xl].id == a && cart_items[xl].price == i){
                                    index = xl
                                }
                            }
                            let  qty = s;
                            let amt = k;
                            if(cart_items[index] != undefined){
                                qty = (parseInt(cart_items[index].qty) + parseInt(s));
                                amt = (parseInt(cart_items[index].amount) + parseInt(k));
                                cart_items[index].qty = qty;
                                cart_items[index].amount = amt;
                            }else{

                                cart_items.push({
                                    id: parseInt(a),
                                    title: l,
                                    code: r,
                                    qty: parseInt(s),
                                    image: n,
                                    price: parseInt(i),
                                    charges: parseInt(o),
                                    amount: parseInt(k),
                                    option: vlc,
                                    selected_attributes: m
                                });
                            }
                            localStorage.setItem('products', JSON.stringify(cart_items));
                        }else{
                            cart_items.push({
                                id: parseInt(a),
                                title: l,
                                code: r,
                                qty: parseInt(s),
                                image: n,
                                price: parseInt(i),
                                charges: parseInt(o),
                                amount: parseInt(k),
                                option: vlc,
                                selected_attributes: m
                            });
                            localStorage.setItem('products', JSON.stringify(cart_items));
                        }
                        $("#add_to_cart_btn_quick").html("<img src='"+e+"images/theme_icons/loader_buy_now.webp' width='22' height='22'/>"),
                            $(".add_to_cart_btn_quick").html("<img src='"+e+"images/theme_icons/loader_buy_now.webp' width='22' height='22'/>"),
                            $("#add_to_cart_btn").attr("disabled", "disabled", !0);
                        setTimeout(function () {
                            $("#add_to_cart_btn").attr("disabled", "disabled", !1),
                                window.location.href = e + "checkout";
                        }, 3e3);
                    }else{ $("#product-added-to-cart-new").html("<div className='alert alert-danger'> Purchase Limit Only "+purchase_limit+"</div>");
                    }
                    cart_effects();

                    if($("input[name='addon_ids[]']").length > 0){
                        for(var x = 0;x <$("input[name='addon_ids[]']").length;x++ ){
                            if($("input[name='addon_ids[]']")[x].checked){
                                add_to_cart_addon($("input[name='addon_ids[]']")[x].value);
                            }
                        }
                    }
                })

        )
        : $("#product-added-to-cart").html("<div className='alert alert-danger text-left'>" + g + " required.</div>");
    // } else {
    //     alert('Only ' + qty + ' are available.');
    // }
}
function add_to_cart_quick() {
    try {
        event.preventDefault();
    } catch (e) {
        try {
            e.preventDefault();
        } catch (e) {
        }
    }
    var e = $("#url").val(),
        t = $("#product_types").val(),
        a = $("#current_id").val(),
        l = $("#product_title").val(),
        r = $("#product_code").val(),
        i = $("#product_price").val(),
        o = $("#del_charge").val(),
        n = $("#product_image").val(),
        s = $("#product_bqty").val(),
        qty = $('#p_qty' + a).val(),
        c = $("#attrqty" + a).val(),
        xd=$(".attributes"),
        d = $(".attributes_values"),
        u = $(".groups_titles"),
        attribute_view  = $('#attribute_view').val(),
        attribute_view_grouped  = $('#attribute_view_grouped').val();
    $("#product-added-to-cart").html("");
    var options,
        _ = "",
        v = 0,
        g = "",
        m = "",
        vlc = "";
    // if (parseInt(s) <= parseInt(qty)) {
    if ((s < 1 && ((g = "Quantity, "), (v = 1)), "1" === t)) {
        if (0 != xd.length) {
            for (var f = 0; f < xd.length; f++) {

                var vl = xd[f].value.replace(" ", "_");

                var _l = $("#" + vl).val();
                if ("1" == attribute_view) {
                    if ($("#attributes" + _l + " li.active_border").length == 0) {
                        $('#cartflag').html(vl + " Required"),
                            $("html, body").animate({scrollTop: $("#cartflag").offset().top - 250}, 1000);
                        // alert(vl + ' Required');
                        return;
                    }
                    vlc = vlc + vl + ":" + $("#attributes" + _l + " li.active_border").text() + ", ";

                    var options_id = $("#attributes" + _l + " li.active_border").attr('val-id');
                    options += "," + options_id;

                }else if("2" == attribute_view){
                    if ($("#attributes" + _l + " option.active_border").length == 0) {
                        $('#cartflag').html(vl + " Required"),
                            $("html, body").animate({scrollTop: $("#cartflag").offset().top - 250}, 1000);
                        // alert(vl + ' Required');
                        return;
                    }
                    vlc = vlc + vl + ":" + $("#attributes" + _l + " option.active_border").text() + ", ";

                    var options_id = $("#attributes" + _l + " option.active_border").attr('val-id');
                    options += "," + options_id;

                }


            }
            m = options.split(",");
        }
    } else if ("2" === t) {
        // console.log(t);
        if ("1" == attribute_view_grouped) {
            d = $(".attributes_values");
            for(var y = 0; y < d.length; y++) {
                var w = u[y].innerHTML;
                if ($("#attributes"+$(".attributes")[y].value+" li.active_border").length ==0){
                    $('#cartflag').html(w + " Required"),
                        $("html, body").animate({scrollTop: $("#cartflag").offset().top - 250}, 1000); return;
                }
                (vlc = vlc + w + ":" + $("#attributes"+$(".attributes")[y].value+" li.active_border").text()+ ", "), (options += "," + $("#attributes"+$(".attributes")[y].value+" li.active_border").attr('value'));
            }
            m = options.split(",");
        }else if("2" == attribute_view_grouped){
            for(var y = 0; y < d.length; y++) {
                var w = u[y].innerHTML;
                if ("" == d[y].value){
                    $('#cartflag').html(w + " Required"),
                        $("html, body").animate({scrollTop: $("#cartflag").offset().top - 250}, 1000); return
                }
                (vlc = vlc + w + ":" + d[y].options[d[y].selectedIndex].innerHTML + ", "), (options += "," + d[y].value);
            }
            m = options.split(",");
        }
    }
    var k = i * s;

    1 != v
        ? ($("#add_to_cart_btn1").hide(),
                $("#load_btn").show(),

                $.post(e + "general_functions/add_to_cart", {
                    id: a,
                    title: l,
                    code: r,
                    qty: s,
                    image: n,
                    price: i,
                    charges: o,
                    amount: k,
                    option: vlc,
                    selected_attributes: m,
                    quick_buy:2
                }, function (res) {

                    var purchase_limit = parseInt($("#product_purchase_limit").val());
                    var product_manage_inventory = parseInt($("#product_manage_inventory").val());
                    var product_qty = parseInt($("#product_qty").val());
                    var purchase_qty = 0;

                    if (product_manage_inventory === 1 && product_qty < purchase_limit) {
                        purchase_qty = product_qty;
                    } else {
                        purchase_qty = purchase_limit;
                    }

                    $("#product-added-to-cart-new").html("");
                    if(res != "0") {
                        var q = $("#attributes" + _l + " li.active_border").text();
                        "function" == typeof gtag &&
                        gtag("event", "add_to_cart", {
                            items: [{
                                id: a,
                                name: l,
                                list_name: $("#g_last_categorys").val(),
                                brand: $("#g_brand").val(),
                                category: $("#g_categorys").val(),
                                variant: q || "",
                                list_position: 1,
                                quantity: s,
                                price: i
                            }]
                        });
                        if(undefined != $('#google_event_credential').val()){
                            let google_event_credential = JSON.parse($('#google_event_credential').val());

                            '' !=  $('#google_event_credential').val() &&  "function" == typeof gtag && gtag('event', 'conversion', {
                                'send_to': google_event_credential.send_to,
                                'value': i,
                                'currency': 'PKR',

                            });
                            '' !=  $('#google_event_credential').val() &&  "function" == typeof gtag && gtag('event', 'page_view', {
                                'send_to': google_event_credential.conversion_id,
                                'value': i,
                                'items': [
                                    {
                                        'id': a,
                                        'google_business_vertical': 'retail'
                                    }
                                ]
                            });
                        }
                        var event_id =$('#event_id').val()+"-AddToCart";
                        "function" == typeof fbq && fbq("track", "AddToCart", {
                            content_ids: a,
                            content_name: l,
                            content_type: "product",
                            currency: "PKR",
                            value: i
                        },{eventID:event_id});
                        conversion_facebook_addtocart(i,a,l);
                        var cat = $("#g_categorys").val().split('/');
                        var ar = [];
                        for (var x = 0; x < cat.length; x++) {
                            ar.push(cat[x]);
                        }
                        var filtered = ar.filter(function (el) {
                            return el != "";
                        });

                        var total = filtered.length;

                        if(typeof dataLayer ==="function") {
                            dataLayer.push({ecommerce: null});  // Clear the previous ecommerce object.
                            dataLayer.push({
                                event: "add_to_cart",
                                ecommerce: {
                                    items: [
                                        {
                                            item_id: a,
                                            item_name: l,
                                            list_name: $("#g_last_categorys").val(),
                                            item_brand: $("#g_brand").val(),
                                            item_category: filtered[total - 1],
                                            item_variant: q || "",
                                            index: 1,
                                            quantity: s,
                                            price: i
                                        }
                                    ]
                                }
                            });
                        }
                        if(typeof snaptr ==="function") {
                            snaptr('track', 'ADD_CART', {'number_items': s != undefined ? s : 1});
                        }
                        if(typeof ttq ==="object") {
                            ttq.track('AddToCart', {
                                content_type:"product",
                                quantity: s != undefined ? s : 1,
                                description:l,
                                content_id:a,
                                currency: 'PKR',
                                value: i
                            });
                        }
                        var cart_items = [];
                        if(is_cart()){
                            cart_items = JSON.parse(localStorage.getItem('products'));
                            let index = (cart_items.length-1)+1;

                            for(var xl = 0; xl < cart_items.length;xl++){
                                if(cart_items[xl].id == a && cart_items[xl].price == i){
                                    index = xl
                                }
                            }
                            let  qty = s;
                            let amt = k;
                            if(cart_items[index] != undefined){
                                qty = (parseInt(cart_items[index].qty) + parseInt(s));
                                amt = (parseInt(cart_items[index].amount) + parseInt(k));
                                cart_items[index].qty = qty;
                                cart_items[index].amount = amt;
                            }else{

                                cart_items.push({
                                    id: parseInt(a),
                                    title: l,
                                    code: r,
                                    qty: parseInt(s),
                                    image: n,
                                    price: parseInt(i),
                                    charges: parseInt(o),
                                    amount: parseInt(k),
                                    option: vlc,
                                    selected_attributes: m
                                });
                            }
                            localStorage.setItem('products', JSON.stringify(cart_items));
                        }else{
                            cart_items.push({
                                id: parseInt(a),
                                title: l,
                                code: r,
                                qty: parseInt(s),
                                image: n,
                                price: parseInt(i),
                                charges: parseInt(o),
                                amount: parseInt(k),
                                option: vlc,
                                selected_attributes: m
                            });
                            localStorage.setItem('products', JSON.stringify(cart_items));
                        }
                        $("#add_to_cart_btn_quick").html("<img src='"+e+"images/theme_icons/loader_buy_now.webp' width='22' height='22'/>"),
                            $(".add_to_cart_btn_quick").html("<img src='"+e+"images/theme_icons/loader_buy_now.webp' width='22' height='22'/>"),
                            $("#add_to_cart_btn").attr("disabled", "disabled", !0);
                        setTimeout(function () {
                            $("#add_to_cart_btn").attr("disabled", "disabled", !1),
                                window.location.href = e + "checkout";
                        }, 3e3);
                    }else{ $("#product-added-to-cart-new").html("<div className='alert alert-danger'> Purchase Limit Only "+purchase_qty+"</div>");
                    }
                    cart_effects();

                    if($("input[name='addon_ids[]']").length > 0){
                        for(var x = 0;x <$("input[name='addon_ids[]']").length;x++ ){
                            if($("input[name='addon_ids[]']")[x].checked){
                                add_to_cart_addon($("input[name='addon_ids[]']")[x].value);
                            }
                        }
                    }
                })

        )
        : $("#product-added-to-cart").html("<div className='alert alert-danger text-left'>" + g + " required.</div>");
    // } else {
    //     alert('Only ' + qty + ' are available.');
    // }
}
function group_value_selected(e,group_id){
    var border =  $('#attributes'+group_id+' li.active_border');
    // console.log(border);
    for(var i = 0; i < border.length;i++){
        if(border.length > 0){
            $(border[i]).removeClass("active_border");
        }
    }
    $('#grouped_variation_selected'+group_id).text($(e).text());
    $(e).addClass('active_border');
}
function add_to_cart_bump() {
    try {
        event.preventDefault();
    } catch (e) {
        try {
            e.preventDefault();
        } catch (e) {
        }
    }
    var e = $("#url").val(),
        t = $("#bump_product_types").val(),
        a = $("#bump_current_id").val(),
        l = $("#bump_title" + a).val(),
        r = $("#bump_code" + a).val(),
        i = $("#bump_price" + a).val(),
        o = $("#bump_del_charge" + a).val(),
        n = $("#bump_image" + a).val(),
        s = $("#bump_bqty" + a).val(),
        c = ($("#bump_attrqty" + a).val(), $(".bump_attributes")),
        d = $(".bump_attributes_values"),
        u = $(".bump_groups_titles");
    $("#product-added-to-cart").html("");
    var p,
        _ = "",
        v = 0,
        g = "",
        m = "";
    if ((s < 1 && ((g = "Quantity, "), (v = 1)), "1" === t)) {
        if (0 != c.length) {
            for (var f = 0; f < c.length; f++) {
                var h = c[f].value.replace(" ", "_"),
                    b = $("#" + h).val();
                if ("--select--" == $("select#attributes" + b + " option:selected").text()) return void alert(h + " Required");
                (_ = _ + h + ":" + $("select#attributes" + b + " option:selected").text() + ", "), (p += "," + $("select#attributes" + b + " option:selected").attr("val-id"));
            }
            m = p.split(",");
        }
    } else if ("2" === t) {
        for (var y = 0; y < d.length; y++) {
            var w = u[y].innerHTML;
            if ("" == d[y].value) return void alert(w + " Required");
            (_ = _ + w + ":" + d[y].options[d[y].selectedIndex].innerHTML + ", "), (p += "," + d[y].value);
        }
        m = p.split(",");
    }
    var k = i * s,
        q = $("select#attributes" + b + " option:selected").text();
    "function" == typeof gtag &&
    gtag("event", "add_to_cart", {
        items: [{
            id: a,
            name: l,
            list_name: $("#g_last_categorys").val(),
            brand: $("#g_brand").val(),
            category: $("#g_categorys").val(),
            variant: q || "",
            list_position: 1,
            quantity: s,
            price: i
        }]
    }),
    "function" == typeof fbq && fbq("track", "AddToCart", {
        content_ids: a,
        content_name: l,
        content_type: "product",
        currency: "PKR",
        value: i
    }),
        1 != v
            ? ($("#add_to_cart_btn1").hide(),
                $("#load_btn").show(),
                $.post(e + "general_functions/add_to_cart", {
                    id: a,
                    title: l,
                    code: r,
                    qty: s,
                    image: n,
                    price: i,
                    charges: o,
                    amount: k,
                    option: _,
                    selected_attributes: m
                }, function (e) {
                    cart_effects();
                }),
                $("#add_to_cart_btn1").show(),
                $("#load_btn").hide(),
                $("#add-to-cart-modal-body").html('<div className="text-center"><i className="fa fa-spinner fa-pulse"></i></div>'),
                cart_effects(),
                $("#add_to_cart_modal").modal("hide"),
                openNav())
            : $("#product-added-to-cart").html("<div className='alert alert-danger text-left'>" + g + " required.</div>");
}

function update_cart_in_navigation() {
    var e = $("#url").val();
    $.post(e + "general_functions/update_cart_in_navigation", {}, function (e) {
        e && ($(".nav-cart-total").html(e), $(".nav-cart-total").show(), update_cart_dropdown());
    });
}
function update_cart_in_navigation_add_to_cart() {
    var e = $("#url").val();
    $.post(e + "general_functions/update_cart_in_navigation", {}, function (e) {
        e && ($(".nav-cart-total").html(e), $(".nav-cart-total").show(), update_cart_dropdown_add_to_cart());
    });
}
function update_cart_in_navigation_add_to_cart_item_box(a) {
    var e = $("#url").val();
    $.post(e + "general_functions/update_cart_in_navigation", {}, function (e) {
        e && ($(".nav-cart-total").html(e), $(".nav-cart-total").show(), update_cart_dropdown_add_to_cart_item_box(a));
    });
}

function update_cart_dropdown() {
    var e = $("#url").val();
    $.post(e + "general_functions/update_cart_dropdown", {}, function (e) {
        e && ($(".load_cart_dropdown").html(e), get_cart_totals());
    });
}
function update_cart_dropdown_add_to_cart() {
    var e = $("#url").val();
    $.post(e + "general_functions/update_cart_dropdown", {}, function (e) {
        e && ($(".load_cart_dropdown").html(e), get_cart_totals_add_to_cart());
    });
}
function update_cart_dropdown_add_to_cart_item_box(a) {
    var e = $("#url").val();
    $.post(e + "general_functions/update_cart_dropdown", {}, function (e) {
        e && ($(".load_cart_dropdown").html(e), get_cart_totals_add_to_cart_item_box(a));
    });
}

function update_cart_item(e, t) {
    var a = $("#url").val(),
        l = $("#cart_row_qty" + e).val(),
        r = $("#cart_row_price" + e).html();
    r = r.replace(",", "");
    var i = parseInt(l) * parseInt(r),
        o = $("#cart_row_qty" + e).val() * parseInt($("input#gprice" + t).val());
    $("span#cart_row_price" + e).html(o),
        $("#cart_row_amount" + e).html(i.toFixed(2)),
        $.post(a + "general_functions/update_cart_item", {id: e, qty: l}, function (e) {
            cart_effects();
        });
}

function remove_cart_item(e, t) {
    var a = $("#url").val();

    // Confirm deletion dialog show
    confirm_to_delete("show");

    // Bind click event for delete confirmation (unbind first to prevent duplicates)
    $("#yes_delete").off("click").on("click", function () {

        // Facebook tracking if fbq is defined
        if (typeof fbq === "function") {
            fbq("track", "RemoveFromCart", {
                content_ids: e,
                content_name: $("#gtitle" + e).val(),
                content_type: "product",
                currency: "PKR",
                value: $("#gprice" + e).val()
            });
        }

        // Google Analytics tracking if gtag is defined
        if (typeof gtag === "function") {
            gtag("event", "remove_from_cart", {
                items: [
                    {
                        id: e,
                        name: $("#gtitle" + e).val(),
                        list_name: $("#glast_category" + e).val(),
                        brand: $("#gbrand" + e).val(),
                        category: $("#gcategory" + e).val(),
                        variant: $("#gvariant" + e).val(),
                        list_position: 1,
                        quantity: $("#gqty" + e).val(),
                        price: $("#gprice" + e).val(),
                    },
                ],
            });
        }

        // Google Tag Manager tracking if dataLayer is defined
        if (typeof dataLayer !== "undefined") {
            dataLayer.push({ ecommerce: null });  // Clear previous ecommerce object.
            dataLayer.push({
                event: "remove_from_cart",
                ecommerce: {
                    items: [{
                        item_name: $("#gtitle" + e).val(),
                        item_id: e,
                        price: $("#gprice" + e).val(),
                        item_brand: $("#gbrand" + e).val(),
                        item_category: $("#glast_category" + e).val(),
                        item_variant: $("#gvariant" + e).val(),
                        item_list_name: $("#glast_category" + e).val(),
                        item_list_id: $("#glast_category_id" + e).val(),
                        index: 1,
                        quantity: $("#gqty" + e).val()
                    }]
                }
            });
        }

        // Update localStorage for products
        let item_record = JSON.parse(localStorage.getItem("products"));
        if (item_record && item_record.length > 0) {
            let filtered_item = item_record.filter(record => parseInt(record.id) !== e);
            localStorage.setItem("products", JSON.stringify(filtered_item));
        }

        // Hide delete confirmation dialog and make AJAX request to remove item from server
        confirm_to_delete("hide");
        $.post(a + "general_functions/remove_cart_item", { id: e, index: t }, function (response) {
            if (response) {
                cart_effects();
                $("#row_" + t).remove();
                if (window.location.pathname === "/checkout") {
                    $(".row_" + t).remove();
                    get_cart_totals();

                    // Reload the page if all items are removed
                    if ($(".row_count_checkout").length === 0) {
                        setTimeout(function () {
                            window.location.reload();
                        }, 3000);
                    }
                }
            }
        }).fail(function () {
            console.error("Failed to remove cart item from server.");
        });
    });
}


function get_cart_totals() {
    var e = $("#url").val();
    $.post(e + "general_functions/get_cart_totals", function (e) {
        $("#cart_total_container").html(e);
        $('.btn-checkout').attr('disabled',false);
    });
}
function get_cart_totals_add_to_cart() {
    var e = $("#url").val();
    $.post(e + "general_functions/get_cart_totals", function (e) {
        $("#cart_total_container").html(e);
        $('.btn-checkout').attr('disabled',false);
        $("button#add_to_cart_btn").html("Add To Cart");
        $("button#add_to_cart_btn").attr("disabled",false);
        openNav();
    });
}
function get_cart_totals_add_to_cart_item_box(a) {
    var e = $("#url").val();
    $.post(e + "general_functions/get_cart_totals", function (e) {
        $("#cart_total_container").html(e);
        $('.btn-checkout').attr('disabled',false);
        $("#add_to_cart_btn"+a).attr("disabled",false).find("img").attr("src",$("#url").val()+'images/shopping-cart.svg');
        openNav();
    });
}

function apply_coupon() {
    var e = $("#url").val(),
        t = $("#couponcode").val();
    $(".coupon_response").html(""),
        "" == t
            ? $(".coupon_response").html("<div className='alert alert-danger'>Please enter valid coupon code.</div>")
            : $.post(e + "general_functions/apply_coupon", {coupon: t}, function (e) {
                '<div className="alert alert-success">Coupon applied.</div>' == e && $(".cart_qty").attr("disabled", !0), $(".coupon_response").html(e), cart_effects();
            });
}

function remove_coupon_amount() {
    var e = $("#url").val();
    $.post(e + "general_functions/remove_coupon_amount", {}, function (e) {
        $(".cart_qty").attr("disabled", !1), $(".coupon_response").html("<div className='alert alert-success'>Updated.</div>"), $("#couponcode").val(""), cart_effects();
    });
}

function apply_wallet_balance() {
    var e = $("#url").val(),
        t = parseInt($("#wallet_balance").html()),
        a = parseInt($("#redeem_amount").val());
    a > 0 &&
    (a > t
        ? $("#redeem_response").html("<div className='alert alert-danger'>Sorry! You can not use more then " + t + " balance.</div>")
        : $.post(e + "general_functions/apply_wallet_balance", {amount: a}, function (e) {
            $("#redeem_response").html("<div className='alert alert-success'>Redeem amount applied.</div>"), cart_effects();
        }));
}

function remove_redeem_amount() {
    var e = $("#url").val();
    $.post(e + "general_functions/remove_redeem_amount", {}, function (e) {
        $("#redeem_response").html("<div className='alert alert-success'>Updated.</div>"), $("#redeem_amount").val(""), cart_effects();
    });
}

function show_payment_description(e) {
    var t = $("#url").val();
    if($("#pm_type").val() == 2) {
        $('#payment_box label').removeClass('border-primary'), $("label[for=payment_methods" + e + "]").addClass('border-primary'),
            $('#payment_box input[type=radio]').attr('checked', false), $("#payment_box input[id=payment_methods" + e + "]").attr('checked', true);
    }
    $.post(t + "general_functions/show_payment_description", {id: e}, function (e) {
        $("#payment_method_description").html(e);
    });
}

function cart_effects() {
    update_cart_in_navigation();
}
function cart_effects_add_to_cart_item_box(a) {
    update_cart_in_navigation_add_to_cart_item_box(a);
}
function cart_effects_add_to_cart() {
    update_cart_in_navigation_add_to_cart();
}

function place_order_update_total() {
    var e = 0,
        t = 0;
    $("td.qty").each(function () {
        t += parseInt(this.innerHTML, 10);
    }),
        $("td.amount").each(function () {
            e += parseInt(this.innerHTML, 10);
        }),
        $("#place_order_total_qty").html(t),
        $("#place_order_total").html(e);
}

function place_order_remove_item(e) {
    var t = $("#adminurl").val();
    delete_confirmation("show"),
        $("#yes_delete").click(function () {
            $.post(t + "orders/place_order_remove_item", {id: e}, function (t) {
                delete_confirmation("hide"), place_order_update_total(), t && $("#row_" + e).remove();
            });
        });
}

function get_product_quick_view(e) {
    var t = $("#url").val();
    $("#quick-view-modal-body").html('<div className="text-center"><i className="fa fa-spinner fa-pulse"></i></div>'),
        $("#quick_view_modal").modal("show"),
        e
            ? ($("#quick_buy_btn").removeClass("hideit"),
                $.post(t + "general_functions/get_product_quick_view", {id: e, ref: "q"}, function (e) {
                    e ? $("#quick-view-modal-body").html(e) : ($("#quick_buy_btn").addClass("hideit"), $("#quick-view-modal-body").html("<div className='alert alert-danger'>Sorry! there is problem in loading product.</div>")),
                        $(".js-example-basic-single1").select2({dropdownParent: $("#quick_view_modal")});
                }))
            : ($("#quick_buy_btn").addClass("hideit"), $("#quick-buy-modal-body").html("<div className='alert alert-danger'>Sorry! there is problem in loading product.</div>"));
}

function get_product_quick_buy(e) {
    var t = $(".attributes"),
        a = $("#product_types").val(),
        l = $(".attributes_values"),
        r = $(".groups_titles");
    if ("1" === a) {
        if (0 != t.length)
            for (var i = 0; i < t.length; i++) {
                var o = t[i].value.replace(" ", "_"),
                    n = $("#" + o).val();
                if ("--select--" == $("select#attributes" + n + " option:selected").text()) return void alert(o + " Required");
                "," + $("select#attributes" + n + " option:selected").attr("val-id");
            }
    } else
        for (var s = 0; s < l.length; s++) {
            var c = r[s].innerHTML;
            if ("" == l[s].value) return void alert(c + " Required");
        }
    var d = $("#current_id").val();
    if (
        ("function" == typeof gtag &&
        gtag("event", "begin_checkout", {
            items: [
                {
                    id: d,
                    name: $("#title" + d).val(),
                    list_name: $("#g_last_categorys").val(),
                    brand: $("#g_brand").val(),
                    category: $("#g_categorys").val(),
                    variant: $("#g_variant").val(),
                    list_position: 1,
                    quantity: $("#g_qty").val(),
                    price: $("#price" + d).val(),
                },
            ],
            coupon: "",
        }),
        "function" == typeof fbq && fbq("track", "InitiateCheckout", {
            content_ids: d,
            content_name: $("#title" + d).val(),
            content_type: "product",
            currency: "PKR",
            value: $("#price" + d).val()
        }),
        "function" == typeof gtag &&
        gtag("event", "add_to_cart", {
            items: [
                {
                    id: d,
                    name: $("#title" + d).val(),
                    list_name: $("#g_last_categorys").val(),
                    brand: $("#g_brand").val(),
                    category: $("#g_categorys").val(),
                    variant: $("#g_variant").val(),
                    list_position: 1,
                    quantity: $("#g_qty").val(),
                    price: $("#price" + d).val(),
                },
            ],
            coupon: "",
        }),
        "function" == typeof fbq && fbq("track", "AddToCart", {
            content_ids: d,
            content_name: $("#title" + d).val(),
            content_type: "product",
            currency: "PKR",
            value: $("#price" + d).val()
        }),
            (color = $("#inputcolor").val()),
            (size = $("#inputsize").val()),
        "0" != color)
    )
        if ("0" != size) {
            var u = $("#url").val();
            $("#quick_buy_modal").modal("show"),
                e
                    ? ($("#quick_buy_btn").removeClass("hideit"),
                        $.post(u + "general_functions/get_product_quick_buy", {id: e, ref: "q"}, function (e) {
                            e ? $("#quick-buy-modal-body").html(e) : ($("#quick_buy_btn").addClass("hideit"), $("#quick-buy-modal-body").html("<div className='alert alert-danger'>Sorry! there is problem in loading product.</div>")),
                                $(".select_city").select2({dropdownParent: $("#quick_buy_modal")});
                        }))
                    : ($("#quick_buy_btn").addClass("hideit"), $("#quick-buy-modal-body").html("<div className='alert alert-danger'>Sorry! there is problem in loading product.</div>"));
        } else $("#sflag").html('<div className="alert alert-danger"> Please Select Size</div>');
    else $("#sflag").html('<div className="alert alert-danger"> Please Select Color</div>');
}

function quick_view() {
    var e,
        t,
        a = $("#payauth").val(),
        l = $("#url").val(),
        r = $("#id").val(),
        i = $("#title" + r).val(),
        o = $("#code" + r).val(),
        n = $("#price" + r).val(),
        s = $("#del_charge" + r).val(),
        c = $("#bqty" + r).val(),
        d = ($("#qattrqty" + r).val(), $("#qordertype").val()),
        u = $("#qname").val(),
        p = $("#qemail").val(),
        _ = $("#qmobile").val(),
        v = $("#qphone").val(),
        g = $("#cityq").val(),
        m = $("#qaddress").val(),
        f = $("#qinstructions").val(),
        h = 0,
        b = 0,
        y = "",
        w = $(".attributes"),
        k = "";
    if (0 != w.length) {
        for (var q = 0; q < w.length; q++) {
            var x = w[q].value.replace(" ", "_"),
                C = $("#" + x).val();
            (t = t + x + ":" + $("select#attributes" + C + " option:selected").text() + ", "),
                (e += "," + $("select#attributes" + C + " option:selected").attr("val-id")),
            "--select--" == $("select#attributes" + C + " option:selected").text() && ((y += x + ","), (b = 1), $("#attributes_flag").html("<div className='alert alert-danger'>" + x + " Required</div>"));
        }
        k = e.split(",");
    }
    if (
        ($("#qregister").is(":checked") && (h = 1),
        "" == a && ((y += "Payment Method, "), (b = 1)),
        "" == a && ((y += "Payment Method, "), (b = 1)),
        "--select--" == $("select#attributes" + C + " option:selected").text() && ((y = x + ","), (b = 1)),
        "" == u && ((y += "Name, "), (b = 1)),
        ("" != g && "0" != g) || ((y += "City, "), (b = 1)),
        ("" != _ && 11 == $("#qmobile").val().length) || ((y += "Mobile Number, "), (b = 1)),
        "" == m && ((y += "Address, "), (b = 1)),
        c < 1 && ((y += "Quantity, "), (b = 1)),
        1 == b)
    )
        return $("#qflag").html("<div className='alert alert-danger'>" + y + " required.</div>"), !1;
    var I = n * c;
    1 != b
        ? ($("#add_to_cart_btn").hide(),
            $("#qload_btn").show(),
            $("#single_add_to_cart_btn").hide(),
            $("#single_qload_btn").show(),
            $.post(
                l + "general_functions/quick_buy",
                {
                    id: r,
                    qty: c,
                    price: n,
                    charges: s,
                    title: i,
                    code: o,
                    amount: I,
                    ordertype: d,
                    name: u,
                    email: p,
                    mobile: _,
                    phone: v,
                    city: g,
                    address: m,
                    instructions: f,
                    register: h,
                    payment_method: a,
                    selected_attributes: k
                },
                function (e) {
                    e && ($("#quick_buy_modal").modal("hide"), $(".balls_loader").hide(), $("#quick-buy-modal-body").html('<div className="text-center"><i className="fa fa-spinner fa-pulse"></i></div>')),
                        (window.location.href = 7 == a ? l + "pay-auth/ecom/" + e : l + "thank-you/" + e);
                }
            ))
        : $("#qflag").html("<div className='alert alert-danger'>" + y + " required.</div>");
}

function quick_view_single() {
    var e,
        t = $("#qmpayauth").val(),
        a = $("#product_types").val(),
        l = $("#url").val(),
        r = $("#qmid").val(),
        i = $("#qmtitle" + r).val(),
        o = $("#qmcode" + r).val(),
        n = $("#qmprice" + r).val(),
        s = $("#qmdel_charge").val(),
        c = $("#bqty" + r).val(),
        d = ($("#qmattrqty" + r).val(), $("#qmordertype").val()),
        u = $("#qmname").val(),
        p = $("#qmemail").val(),
        _ = $("#qmmobile").val(),
        v = $("#qmphone").val(),
        g = $("#cityqm").val(),
        m = $("#qmaddress").val(),
        f = $("#qminstructions").val(),
        h = 0,
        b = 0,
        y = "",
        w = $(".attributes"),
        k = $(".attributes_values"),
        q = $(".groups_titles"),
        x = "",
        C = "";
    if ("1" == a) {
        if (0 != w.length) {
            for (var I = 0; I < w.length; I++) {
                var P = w[I].value.replace(" ", "_"),
                    T = $("#" + P).val();
                (x = x + P + ":" + $("select#attributes" + T + " option:selected").text() + ", "),
                    (e += "," + $("select#attributes" + T + " option:selected").attr("val-id")),
                "--select--" == $("select#attributes" + T + " option:selected").text() && ((y += P + ","), (b = 1), $("#attributes_flag").html("<div className='alert alert-danger'>" + P + " Required</div>"));
            }
            C = e.split(",");
        }
    } else {
        for (var E = 0; E < k.length; E++) {
            var B = q[E].innerHTML;
            if ("" == k[E].value) return void $("#attributes_flag").html("<div className='alert alert-danger'>" + B + " Required</div>");
            (x = x + B + ":" + k[E].options[k[E].selectedIndex].innerHTML + ", "), (e += "," + k[E].value);
        }
        C = e.split(",");
    }
    if (
        ($("#qmregister").is(":checked") && (h = 1),
        "" == t && ((y += "Payment Method, "), (b = 1)),
        "" == u && ((y += "Name, "), (b = 1)),
        ("" != g && "0" != g) || ((y += "City, "), (b = 1)),
        ("" != _ && 11 == $("#qmmobile").val().length) || ((y += "Mobile Number, "), (b = 1)),
        "" == m && ((y += "Address, "), (b = 1)),
        c < 1 && ((y += "Quantity, "), (b = 1)),
        1 == b)
    )
        return $("#qmflag").html("<div className='alert alert-danger'>" + y + " required.</div>"), !1;
    var S = n * c;
    1 != b
        ? ($("#add_to_cart_btn").hide(),
            $("#qload_btn").show(),
            $("#single_add_to_cart_btn").hide(),
            $("#single_qload_btn").show(),
            $.post(
                l + "general_functions/quick_buy",
                {
                    id: r,
                    qty: c,
                    price: n,
                    charges: s,
                    title: i,
                    code: o,
                    amount: S,
                    ordertype: d,
                    name: u,
                    email: p,
                    mobile: _,
                    phone: v,
                    city: g,
                    address: m,
                    instructions: f,
                    register: h,
                    payment_method: t,
                    options: x,
                    selected_attributes: C,
                },
                function (e) {
                    e && ($("#quick_buy_modal").modal("hide"), $(".balls_loader").hide(), $("#quick-buy-modal-body").html('<div className="text-center"><i className="fa fa-spinner fa-pulse"></i></div>')),
                        (window.location.href = 7 == t ? l + "pay-auth/ecom/" + e : l + "thank-you/" + e);
                }
            ))
        : $("#qmflag").html("<div className='alert alert-danger'>" + y + " required.</div>");
}

function quick_buy() {
    var paymentMethod = $("#payauth").val(),
        productType = $("#product_types").val(),
        url = $("#url").val(),
        productId = $("#current_id").val(),
        productTitle = $("#product_title").val(),
        productCode = $("#product_code").val(),
        price = $("#product_price").val(),
        deliveryCharge = $("#del_charge").val(),
        quantity = 1,
        name = $("#qname").val(),
        email = $("#qemail").val(),
        mobile = $("#qmobile").val(),
        phone = $("#qmobile").val(),
        city = $("#cityq").val(),
        address = $("#qaddress").val(),
        nearest_landmark = $("#nearest_landmark").val(),
        instructions = $("#qinstructions").val(),
        attributes = $(".attributes"),
        attributeValues = $(".attributes_values"),
        groupTitles = $(".groups_titles"),
        attributeView = $('#attribute_view').val(),
        attributeViewGrouped = $('#attribute_view_grouped').val(),
        register = $("#qregister").is(":checked") ? 1 : 0;

    $("#product-added-to-cart").html("");

    var errorFlag = false,
        errorMessage = "",
        selectedOptions = "",
        selectedAttributes = [],
        totalAmount = price * quantity;

    if (deliveryCharge < 1) {
        errorMessage += "Quantity, ";
        errorFlag = true;
    }

    if (productType === "1") {
        if (attributes.length > 0) {
            attributes.each(function () {
                var attributeId = $(this).val().replace(" ", "_");
                var selectedAttribute = $("#" + attributeId).val();

                if (attributeView === "1") {
                    if ($("#attributes" + selectedAttribute + " li.active_border").length === 0) {
                        errorMessage += attributeId+", ";
                        errorFlag = true;
                        $("html, body").animate({ scrollTop: $("#cartflag").offset().top - 250 }, 1000);
                        return false;
                    }
                    selectedOptions += attributeId + ":" + $("#attributes" + selectedAttribute + " li.active_border").text() + ", ";
                    selectedAttributes.push($("#attributes" + selectedAttribute + " li.active_border").attr('val-id'));
                } else if (attributeView === "2") {
                    if ($("#attributes" + selectedAttribute + " option.active_border").length === 0) {
                        errorMessage += attributeId+", ";
                        errorFlag = true;
                        $("html, body").animate({ scrollTop: $("#cartflag").offset().top - 250 }, 1000);
                        return false;
                    }
                    selectedOptions += attributeId + ":" + $("#attributes" + selectedAttribute + " option.active_border").text() + ", ";
                    selectedAttributes.push($("#attributes" + selectedAttribute + " option.active_border").attr('val-id'));
                }
            });
        }
    } else if (productType === "2") {
        if (attributeViewGrouped === "1") {
            attributeValues.each(function (index) {
                var groupTitle = groupTitles[index].innerHTML;
                if ($("#attributes" + attributes[index].value + " li.active_border").length === 0) {

                    errorMessage += groupTitle+", ";
                    errorFlag = true;
                    $("html, body").animate({ scrollTop: $("#cartflag").offset().top - 250 }, 1000);
                    return false;
                }
                selectedOptions += groupTitle + ":" + $("#attributes" + attributes[index].value + " li.active_border").text() + ", ";
                selectedAttributes.push($("#attributes" + attributes[index].value + " li.active_border").attr('value'));
            });
        } else if (attributeViewGrouped === "2") {
            attributeValues.each(function (index) {
                var groupTitle = groupTitles[index].innerHTML;
                if ($(this).val() === "") {
                    errorMessage += groupTitle+", ";
                    $("html, body").animate({ scrollTop: $("#cartflag").offset().top - 250 }, 1000);
                    errorFlag = true;
                    return false;
                }
                selectedOptions += groupTitle + ":" + $(this).find("option:selected").text() + ", ";
                selectedAttributes.push($(this).val());
            });
        }
    }

    if (!paymentMethod) {
        errorMessage += "Payment Method, ";
        errorFlag = true;
    }
    if (!name) {
        errorMessage += "Name, ";
        errorFlag = true;
    }
    if (!city) {
        errorMessage += "City, ";
        errorFlag = true;
    }
    if (mobile.length !== 11) {
        errorMessage += "Mobile Number, ";
        errorFlag = true;
    }
    if (!address) {
        errorMessage += "Address, ";
        errorFlag = true;
    }
    if (quantity < 1) {
        errorMessage += "Quantity, ";
        errorFlag = true;
    }

    if (errorFlag) {
        $("#qflag").html("<div className='alert alert-danger'>" + errorMessage + "required.</div>");
        return false;
    }

    $("#add_to_cart_btn").hide();
    $("#qload_btn").show();
    $("#single_add_to_cart_btn").hide();
    $("#single_qload_btn").show();

    $.post(
        url + "general_functions/quick_buy",
        {
            id: productId,
            qty: quantity,
            price: price,
            charges: deliveryCharge,
            title: productTitle,
            code: productCode,
            amount: totalAmount,
            name: name,
            email: email,
            mobile: mobile,
            phone: phone,
            city: city,
            address: address,
            nearest_landmark: nearest_landmark,
            instructions: instructions,
            register: register,
            payment_method: paymentMethod,
            options: selectedOptions,
            selected_attributes: selectedAttributes,
        },
        function (response) {
            if (response) {
                $("#quick_buy_button").html("<img src='"+url+"images/theme_icons/loader_buy_now.webp' width='22' height='22'/>");
                window.location.href = url + "thank-you/" + response;
            }
        }
    );
}


function empty_cart() {
    var e = $("#url").val();
    $.post(e + "general_functions/empty_cart", {}, function (e) {
        $("#removefromcart").click(),
            location.reload();
        localStorage.setItem("products",JSON.stringify([]));
    });
}

function forget_password() {
    var e = $("#url").val(),
        t = $("#forget_password_email").val();
    $.post(e + "general_functions/forget_password", {email: t}, function (e) {
        $(".forget_password_resposnse").html(e);
    });
}

function subscribe() {
    var e = $("#url").val(),
        t = $("#subscriber_email").val();
    isValidEmailAddress(t)
        ? $.post(e + "general_functions/subscribe", {email: t}, function (e) {
            1 == e && ($(".subscribe_response").html('<div className="alert alert-success">Successfully Subscribed!</div>'), $("#subscriber_email").val(""),$('input.submit').click()),
            0 == e && $(".subscribe_response").html('<div className="alert alert-danger">Email already Subscribed!</div>'),
            2 == e && $(".subscribe_response").html('<div className="alert alert-danger">Please enter valid email!</div>');
        })
        : $(".subscribe_response").html('<div className="alert alert-danger">Please enter valid email!</div>');
}

function minusqty(e) {
    var t = $("#bqty" + e).val();
    t < 2 ? (t = 1) : (t -= 1), $("#bqty" + e).val(t), get_total("#bqty" + e, parseInt($("#price" + e).val()), parseInt($("#del_charge" + e).val()));
}

function plusqty(e) {
    var t = $("#bqty" + e).val();
    (t = t > 9 ? 10 : parseInt(t) + 1), $("#bqty" + e).val(t), get_total("#bqty" + e, parseInt($("#price" + e).val()), parseInt($("#del_charge" + e).val()));
}
function product_minusqty(e) {
    var t = $("#product_bqty").val();
    t < 2 ? (t = 1) : (t -= 1), $("#product_bqty").val(t), get_total("#product_bqty", parseInt($("#price" + e).val()), parseInt($("#del_charge" + e).val()));
}

function product_plusqty(e) {
    var t = $("#product_bqty").val();
    var max = parseInt($("#product_bqty").attr("max"));
    (t = t > max-1 ? max : parseInt(t) + 1), $("#product_bqty").val(t), get_total("#product_bqty", parseInt($("#price" + e).val()), parseInt($("#del_charge" + e).val()));
}
function get_all_qty_product(r) {
    // Retrieve max and min values from attributes
    var max = parseInt($(r).attr('max'), 10);
    const min = parseInt($(r).attr('min'), 10);

    // Retrieve the current value from the input
    let value = parseInt($(r).val(), 10);

    // Ensure the value is within the min and max range
    if (isNaN(value)) {
        value = min; // Default to min if value is NaN
    } else if (value < min) {
        value = min; // Set to min if value is less than min
    } else if (value > max) {
        value = max; // Set to max if value is greater than max
    }

    // Update the input field value
    $(r).val(value);

    // Update the value of another element
    $("#product_bqty").val(value);
}



function addon_minusqty(e) {
    var t = $("#addon_bqty" + e).val();
    t < 2 ? (t = 1) : (t -= 1), $("#addon_bqty" + e).val(t), get_total("#addon_bqty" + e, parseInt($("#price" + e).val()), parseInt($("#del_charge" + e).val()));
}

function addon_plusqty(e) {
    var t = $("#addon_bqty" + e).val();
    (t = t > 9 ? 10 : parseInt(t) + 1), $("#addon_bqty" + e).val(t), get_total("#addon_bqty" + e, parseInt($("#price" + e).val()), parseInt($("#del_charge" + e).val()));
}

/*const*/ formatter = new Intl.NumberFormat({style: "currency"});

function minusqty_cart(e,id) {
    var t = $("#url").val(), a = $("#bqty_cart" + e).val(), l = $("#cart_panel_row_price" + e).html();

    if(localStorage.getItem('products')){
        let cart_items = JSON.parse(localStorage.getItem('products'));
        let cart_qty = a;
        cart_qty < 2 ? cart_qty=1: cart_qty-=1;
        for(var x=0;x<cart_items.length;x++){
            if(parseInt(cart_items[x].id) === parseInt(id)){
                cart_items[x].qty = parseInt(cart_qty);
                cart_items[x].amount =  cart_items[x].price * cart_items[x].qty;
            }
        }
        localStorage.setItem('products',JSON.stringify(cart_items));
    }
    a < 2 ? a = 1 : a -= 1, $("#bqty_cart" + e).val(a), l = l.replace("Rs. ", "").replace(",", "");
    parseInt(a), parseInt(l);
    $.post(t + "general_functions/update_sidemenu_cart_item", {id: e, qty: a}, function (e) {
        $("#cart_total_sidemenu").html(formatter.format(e)), cart_effects()
    })
}

function plusqty_cart(e,id) {
    var t = $("#url").val(),
        a = $("#bqty_cart" + e).val(),
        l = $("#cart_panel_row_price" + e).html(),
        r = $("#bqty_cart" + e)[0].max;

    if(localStorage.getItem('products')){
        let cart_items = JSON.parse(localStorage.getItem('products'));
        let cart_qty = a;
        let max_cart_qty = r;
        cart_qty = cart_qty > max_cart_qty-1 ? max_cart_qty : parseInt(cart_qty) +1;

        for(var x=0;x<cart_items.length;x++){
            if(parseInt(cart_items[x].id) === parseInt(id)){
                cart_items[x].qty = parseInt(cart_qty);
                cart_items[x].amount =  cart_items[x].price * cart_items[x].qty;
            }
        }
        localStorage.setItem('products',JSON.stringify(cart_items));
    }

    a = a > r - 1 ? r : parseInt(a) + 1, $("#bqty_cart" + e).val(a), l = l.replace(",", "");
    parseInt(a), parseInt(l);
    $.post(t + "general_functions/update_sidemenu_cart_item", {id: e, qty: a}, function (e) {
        $("#cart_total_sidemenu").html(formatter.format(e)), cart_effects()
    })
}

function get_all_qty_cart(r) {
    var t = $("#url").val(); // URL value
    let value = parseInt($(r).val()); // Current input value
    const min = parseInt($(r).attr('min')); // Minimum value from the attribute
    const id = $(r).attr('id'); // ID of the input field
    const proid = $(r).data('proid'); // Assuming proid is a data attribute on the input field

    // Ensure the value is not less than the minimum allowed
    if (isNaN(value) || value < min) {
        value = min;
        $(r).val(min);
    }

    console.log(`Value: ${value}`);

    const index = id.replace('bqty_cart', ''); // Extract the index from the ID
    if($("#cart_panel_row_price" + index).length >0){
        var l = $("#cart_panel_row_price" + index).html(); // Price associated with the cart item row
    }
    // Ensure qty doesn't exceed the max allowed
    let max_cart_qty = parseInt($(r).attr('max')); // Max value from the attribute
    let cart_qty = value > max_cart_qty ? max_cart_qty : value;

    // Update localStorage with the new quantity
    if (localStorage.getItem('products')) {
        let cart_items = JSON.parse(localStorage.getItem('products'));

        // Update the item quantity and amount in local storage
        for (let x = 0; x < cart_items.length; x++) {
            if (parseInt(cart_items[x].id) === parseInt(proid)) {
                cart_items[x].qty = cart_qty;
                cart_items[x].amount = cart_items[x].price * cart_items[x].qty;
            }
        }
        localStorage.setItem('products', JSON.stringify(cart_items));
    }

    // Set the input value according to the max limit
    $("#bqty_cart" + index).val(cart_qty);

    // Convert price to an integer and remove commas
    if($("#cart_panel_row_price" + index).length >0) {
        let price = parseInt(l.replace(",", ""));
    }
    // Send an update request to the server
    $.post(t + "general_functions/update_sidemenu_cart_item", { id: index, qty: cart_qty }, function (e) {
        $("#cart_total_sidemenu").html(formatter.format(e)); // Update the cart total display
        cart_effects(); // Apply any cart-related visual effects
    });

    console.log(`Index: ${index}, Quantity: ${cart_qty}, Product ID: ${proid}`);
}



function add_review() {
    var e = $("#recaptcha_response").val() != '';
    // var e = grecaptcha.getResponse();
    if (e) {
        $("#url").val();
        var e = $("#current_id").val(),
            t = $("#review_name").val(),
            a = $("#email").val(),
            l = $("#review_title").val(),
            r = $("#review").val(),
            i = $("#review_rating").val();
        $("#rating_flag").html(""),
            "" != t && "" != a && "" != l && "" != r && "" != i
                ? $.post("/general_functions/add_review", {
                    review: r,
                    rate: i,
                    id: e,
                    name: t,
                    email: a,
                    review_title: l
                }, function (e) {
                    $("HTML").animate({scrollTop: $("#rating_flag").offset().top - 150}, 1e3);
                    $("#review_name").val(""), $("#email").val(""), $("#review").val(""), $("#review_title").val(""), $("#rating_flag").html(e);
                })
                :   $("HTML").animate({scrollTop: $("#rating_flag").offset().top - 150}, 1e3);
        $("#rating_flag").html("<div className='alert alert-danger'>All Fields Are Required</div>");
    }else{
        $("HTML").animate({scrollTop: $("#rating_flag").offset().top - 150}, 1e3);
        $("#rating_flag").html("<div className='alert alert-danger'>Please verify your self by using capcha.</div>");
    }
}

$("#WriteReview").submit(function(e){
    e.preventDefault();
    var recapctcha = $("#recaptcha_response").val() != '';
    if (recapctcha) {
        // e.preventDefault(), $("#add_review").attr("disabled", !0);
        for (var t = $("#url").val(), a = (e = $("#current_id").val(), new FormData(document.getElementById('WriteReview'))), l = document.getElementById("review_image").files.length, r = 0; r < l; r++) a.append("files[]", document.getElementById("review_image").files[r]);
        "0" === $("#review_rating").val() ? alert("rating Required") : (a.append("id", e), $.ajax({
            url: t + "general_functions/add_review",
            dataType: "text",
            type: "POST",
            data: a,
            contentType: !1,
            cache: !1,
            processData: !1,
            success: function (e) {
                $("HTML").animate({scrollTop: $("#rating_flag").offset().top - 150}, 1e3);
                $("#review_name").val(""), $("#email").val(""), $("#review").val(""), $("#review_title").val(""), $("#review_image").val(""), $("#rating_flag").html(e)
            },
            error: function (e) {
                $("HTML").animate({scrollTop: $("#rating_flag").offset().top - 150}, 1e3);
                $("#rating_flag").html("<div className='alert alert-danger'>All Fields Are Required</div>" + e)
            }
        }))
    }else{
        $("HTML").animate({scrollTop: $("#rating_flag").offset().top - 150}, 1e3);
        $("#rating_flag").html("<div className='alert alert-danger'>Please verify your self by using capcha.</div>");
    }
});


function send_password() {
    var e = $("#url").val(),
        t = $("#forgot_passsword_email").val();
    if (!isValidEmailAddress(t)) return $("#forgot_password_flag").html('<div className="alert alert-danger">Please enter valid email.</div>'), !1;
    $("#forgot_password_flag").html(""),
        $.post(e + "general_functions/forgot_password", {email: t}, function (e) {
            $("#forgot_passsword_email").val(""), $("#forgot_password_flag").html(e);
        });
}

function forgot_password() {
    var e = $("#url").val(),
        t = $("#forgot_passsword_email").val();
    if (!isValidEmailAddress(t)) return $("#forgot_password_flag").html('<div className="alert alert-danger">Please enter valid email.</div>'), !1;
    $("#forgot_password_flag").html(""),
        $.post(e + "general_functions/forgot_password", {email: t}, function (e) {
            $("#forgot_passsword_email").val(""), $("#forgot_password_flag").html(e);
        });
}

/*
* Light YouTube Embeds by @labnol
* Credit: https://www.labnol.org/
*/

function labnolIframeModal(div) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + div.dataset.id + '?autoplay=1&rel=0&mute=1');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '1');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
    div.parentNode.replaceChild(iframe, div);
}

function initYouTubeVideosModal() {
    var playerElements = document.getElementsByClassName('youtube-player');
    for (var n = 0; n < playerElements.length; n++) {
        var videoId = playerElements[n].dataset.id;
        var div = document.createElement('div');
        div.setAttribute('data-id', videoId);
        var thumbNode = document.createElement('img');
        thumbNode.src = '//i.ytimg.com/vi/ID/hqdefault.jpg'.replace('ID', videoId);
        div.appendChild(thumbNode);
        var playButton = document.createElement('div');
        playButton.setAttribute('class', 'play');
        div.appendChild(playButton);
        div.onClick = function () {
            labnolIframeModal(this);
        };
        playerElements[n].appendChild(div);
    }
}

function show_video(e) {
    var t = $("#url").val();
    $.post(t + "general_functions/show_video", {id: e}, function (e) {
        0 != e && ($("#view-image-body").html(e), $("#view_image").modal('show'),$('iframe').addClass('no-src'),$('iframe').addClass('lazyload'));
    });
    $('#view_image').on('shown.bs.modal', function (e) {
        initYouTubeVideosModal();
    })
}

function show_large_image(e) {
    $("#view-image-body").html('<img className="img-fluid" src="' + e + '" />'), $("#view_image").modal({show: !0});
}

function openNav() {
    (document.getElementById("mySidenav").style.width = "300px"), $("#mySidenav").addClass("active"), $(".overlay-sidenav").addClass("active"), $("body").addClass("stop_scrolling");
}

function closeNav() {
    (document.getElementById("mySidenav").style.width = "0"), $("#mySidenav").removeClass("active"), $(".overlay-sidenav").removeClass("active"), $("body").removeClass("stop_scrolling");
}

function openFilterNav() {
    (document.getElementById("filter_sidebar").style.width = "300px"),$("#filter_sidebar").removeClass("d-none"), $("#filter_sidebar").addClass("d-block"), $(".overlay-sidenav").addClass("active"), $("body").addClass("stop_scrolling");
}

function closeFilterNav() {
    (document.getElementById("filter_sidebar").style.width = "0"), $("#filter_sidebar").removeClass("d-block"), $("#filter_sidebar").addClass("d-none"), $(".overlay-sidenav").removeClass("active"), $("body").removeClass("stop_scrolling");
}

function show_menu() {
    $("#example-search-input4").val().length < 2 || $("#search-menu").addClass("show-menu");
}
function show_menu_side() {
    $("#example-search-input5").val().length < 2 || $("#search-menu-side").addClass("show-menu-side");
}

function filter_products_cat() {
    for (
        var e = document.getElementsByClassName("cat_filters"),
            t = document.getElementsByClassName("price_filters"),
            a = document.getElementsByClassName("brand_filters"),
            l = $("#category_id").val(),
            r = $("#brand_id").val(),
            i = $("#order_by").val(),
            o = new FormData(),
            n = 0;
        n < e.length;
        n++
    )
        e[n].checked && o.append("cat[]", e[n].value);
    for (n = 0; n < t.length; n++) t[n].checked && o.append("price[]", t[n].value);
    for (n = 0; n < a.length; n++) a[n].checked && o.append("brand[]", a[n].value);
    o.append("category_id", l), o.append("brand_id", r), o.append("order_by", i), o.append("current_cat", window.location.pathname.replace("/", ""));
    var s = $("#url").val();
    call_ajax_with_functions("products_listing", s + "search/products_filter", o, [
        function () {
            try {
                if (((count = $("#page_num_count").val()), (count = parseInt(count / 24)), (row = ""), 0 != count)) {
                    for (var e = 0; e <= count; e++)
                        (row +=
                            0 == e
                                ? '<li className="page-item disabled"><button className="page-link text-dark right-border py-1" id="pre-page" style="border: none;" onClick="page(null,this)" value="0" tabindex="-1">Previous</button></li>'
                                : '<li className="page-item"><button className="page-link text-dark left-border py-1" onClick="page(' + e + ",'')\">" + e + "</button></li>"),
                        e == count &&
                        (row +=
                            '<li className="page-item"><button className="page-link text-dark right-border py-1" id="next-page" onClick="page(null,this)" value="2">Next <i className="pl-2 fa fa-angle-double-right" aria-hidden="true"></i></button></li>');
                    $(".pagination").html(row);
                    var t = $("#page_num").val(),
                        a = $("#total_count").val();
                    if (t > 0) {
                        var l = t - 1,
                            r = parseInt(t) + parseInt(1);
                        $("#pre-page").val(l),
                            $("#next-page").val(r),
                        t <= 1 && ($("#pre-page").closest("li").addClass("disabled"), $("#next-page").closest("li").removeClass("disabled")),
                        t > 1 && ($("#pre-page").closest("li").removeClass("disabled"), $("#next-page").closest("li").removeClass("disabled")),
                        t >= a && ($("#next-page").closest("li").addClass("disabled"), $("#pre-page").closest("li").removeClass("disabled"));
                    }
                }
            } catch (e) {
                console.log(e);
            }
        },
        function () {
            echo.init({offset: 100, throttle: 10, unload: !1});
        },
        function () {
            window.scrollBy(0, 10), window.scrollBy(10, 0);
        },
        function () {
            var e = $("#count").val();
            $("#count_view").html(e);
        },
    ]);
}

function page2() {
    $("#scrollbar").submit();
}

function page(e = null, t = null) {
    null == e && null != t ? (e = $(t).val()) : null == t && (e = 1);
    var a = document.getElementsByClassName("cat_filters"),
        l = document.getElementsByClassName("price_filters"),
        r = document.getElementsByClassName("brand_filters"),
        i = $("#category_id").val(),
        o = $("#seg1").val(),
        n = ($("#brand_id").val(), $("#order_by_filter_dd").val()),
        s = $("#order_by_filter_dd")[0].options[$("#order_by_filter_dd")[0].selectedIndex].getAttribute("data-val"),
        c = $("#url").val(),
        d = new FormData();
    d.append("category_id", i), d.append("page_num", e), d.append("sort_by", s), d.append("sort_order", n), d.append("current_cat", o);
    for (var u = 0; u < a.length; u++) a[u].checked && d.append("cat[]", a[u].value);
    for (u = 0; u < l.length; u++) l[u].checked && d.append("price[]", l[u].value);
    for (u = 0; u < r.length; u++) r[u].checked && d.append("brand[]", r[u].value);
    var p = function () {
        try {
            let e = $("#page_num_count").val(),
                t = parseInt($("#page_num").val()),
                a = parseInt($("#page_num").val()),
                l = (e = Math.ceil(parseInt(e) / 24)) - t;
            for (
                e > 10 && l < 10 && ((t -= 10 - l), console.log(t)),
                    page_limit = 0,
                    row = "",
                t > 1 &&
                (row +=
                    '<li className="page-item disabled"><button className="page-link text-dark right-border py-1" id="pre-page" style="border: none;" onClick="page(null,this)" value="1" tabindex="-1"><i className="pl-2 fa fa-angle-double-left" aria-hidden="true"></i> Previous</button></li>'),
                e > 10 &&
                t > 1 &&
                (row += '<li className="page-item"><button className="page-link text-dark py-1" onClick="page(1,\'\')">1</button></li> <li className="page-item"><button className="page-link text-dark right-border py-1"> ... </button></li>'),
                e < 10 && (t = 1),
                    p = t;
                p <= e && ((active = ""), p == a && (active = " active"), (row += '<li className="page-item' + active + '"><button className="page-link text-dark py-1" onClick="page(' + p + ",'')\">" + p + "</button></li>"), !(page_limit >= 10));
                p++
            )
                page_limit++;
            (t = parseInt($("#page_num").val())),
            (t += 10) < e &&
            (row +=
                '<li className="page-item"><button className="page-link text-dark right-border py-1"> ... </button></li> <li className="page-item"><button className="page-link text-dark py-1" onClick="page(' + e + ",'')\">" + e + "</button></li>"),
            (t = parseInt($("#page_num").val())) < e &&
            (row +=
                '<li className="page-item"><button className="page-link text-dark right-border py-1" id="next-page" onClick="page(null,this)" value="2">Next <i className="pl-2 fa fa-angle-double-right" aria-hidden="true"></i></button></li>'),
                $(".pagination").html(row);
        } catch (e) {
            console.log(e);
        }
    };
    call_ajax_with_functions("products_listing", c + "search/page_filter", d, [
        p,
        function () {
            echo.init({offset: 100, throttle: 10, unload: !1});
        },
        function () {
            $("HTML").animate({scrollTop: $("#scrollTo").offset().top}, 1e3), window.scrollBy(0, 10), window.scrollBy(10, 0);
        },
        function () {
            var e = $("#page_num").val(),
                t = $("#total_count").val();
            if (e > 0) {
                var a = e - 1,
                    l = parseInt(e) + parseInt(1);
                $("#pre-page").val(a),
                    $("#next-page").val(l),
                e <= 1 && ($("#pre-page").closest("li").addClass("disabled"), $("#next-page").closest("li").removeClass("disabled")),
                e > 1 && ($("#pre-page").closest("li").removeClass("disabled"), $("#next-page").closest("li").removeClass("disabled")),
                e >= t && ($("#next-page").closest("li").addClass("disabled"), $("#pre-page").closest("li").removeClass("disabled"));
            }
        },
    ]);
}

function deals_page(e = null, t = null) {
    null == e && null != t ? (e = $(t).val()) : null == t && (e = 1);
    var a = $("#order_by_filter_dow").val(),
        l = $("#order_by_filter_dow")[0].options[$("#order_by_filter_dow")[0].selectedIndex].getAttribute("data-val"),
        r = $("#url").val(),
        i = new FormData();
    i.append("page_num", e), i.append("sort_by", l), i.append("sort_order", a), i.append("current_cat", window.location.pathname.replace("/", ""));
    var o = function () {
        try {
            let e = $("#page_num_count").val(),
                t = parseInt($("#page_num").val()),
                a = parseInt($("#page_num").val()),
                l = (e = Math.ceil(parseInt(e) / 24)) - t;
            for (
                e > 10 && l < 10 && ((t -= 10 - l), console.log(t)),
                    page_limit = 0,
                    row = "",
                t > 1 &&
                (row +=
                    '<li className="page-item disabled"><button className="page-link text-dark right-border py-1" id="pre-page" style="border: none;" onClick="deals_page(null,this)" value="1" tabindex="-1"><i className="pl-2 fa fa-angle-double-left" aria-hidden="true"></i> Previous</button></li>'),
                e > 10 &&
                t > 1 &&
                (row += '<li className="page-item"><button className="page-link text-dark py-1" onClick="deals_page(1,\'\')">1</button></li> <li className="page-item"><button className="page-link text-dark right-border py-1"> ... </button></li>'),
                e < 10 && (t = 1),
                    o = t;
                o <= e &&
                ((active = ""), o == a && (active = " active"), (row += '<li className="page-item' + active + '"><button className="page-link text-dark py-1" onClick="deals_page(' + o + ",'')\">" + o + "</button></li>"), !(page_limit >= 10));
                o++
            )
                page_limit++;
            (t = parseInt($("#page_num").val())),
            (t += 10) < e &&
            (row +=
                '<li className="page-item"><button className="page-link text-dark right-border py-1"> ... </button></li> <li className="page-item"><button className="page-link text-dark py-1" onClick="deals_page(' +
                e +
                ",'')\">" +
                e +
                "</button></li>"),
            (t = parseInt($("#page_num").val())) < e &&
            (row +=
                '<li className="page-item"><button className="page-link text-dark right-border py-1" id="next-page" onClick="deals_page(null,this)" value="2">Next <i className="pl-2 fa fa-angle-double-right" aria-hidden="true"></i></button></li>'),
                $(".pagination").html(row);
        } catch (e) {
            console.log(e);
        }
    };
    call_ajax_with_functions("products_listing", r + "search/deals_page_filters", i, [
        o,
        function () {
            echo.init({offset: 100, throttle: 10, unload: !1});
        },
        function () {
            $("HTML").animate({scrollTop: $("#scrollTo").offset().top}, 1e3), window.scrollBy(0, 10), window.scrollBy(10, 0);
        },
        function () {
            var e = $("#page_num").val(),
                t = $("#total_count").val();
            if (e > 0) {
                var a = e - 1,
                    l = parseInt(e) + parseInt(1);
                $("#pre-page").val(a),
                    $("#next-page").val(l),
                e <= 1 && ($("#pre-page").closest("li").addClass("disabled"), $("#next-page").closest("li").removeClass("disabled")),
                e > 1 && ($("#pre-page").closest("li").removeClass("disabled"), $("#next-page").closest("li").removeClass("disabled")),
                e >= t && ($("#next-page").closest("li").addClass("disabled"), $("#pre-page").closest("li").removeClass("disabled"));
            }
        },
    ]);
}

function brands_page(e = null, t = null) {
    null == e && null != t ? (e = $(t).val()) : null == t && (e = 1);
    var a = $("#order_by_filter_dow").val(),
        l = $("#order_by_filter_dow")[0].options[$("#order_by_filter_dow")[0].selectedIndex].getAttribute("data-val"),
        r = $("#url").val(),
        i = new FormData();
    i.append("page_num", e), i.append("sort_by", l), i.append("sort_order", a), i.append("current_cat", window.location.pathname.replace("/", ""));
    var o = function () {
        try {
            let e = $("#page_num_count").val(),
                t = parseInt($("#page_num").val()),
                a = parseInt($("#page_num").val()),
                l = (e = Math.ceil(parseInt(e) / 24)) - t;
            for (
                e > 10 && l < 10 && ((t -= 10 - l), console.log(t)),
                    page_limit = 0,
                    row = "",
                t > 1 &&
                (row +=
                    '<li className="page-item disabled"><button className="page-link text-dark right-border py-1" id="pre-page" style="border: none;" onClick="brands_page(null,this)" value="1" tabindex="-1"><i className="pl-2 fa fa-angle-double-left" aria-hidden="true"></i> Previous</button></li>'),
                e > 10 &&
                t > 1 &&
                (row += '<li className="page-item"><button className="page-link text-dark py-1" onClick="brands_page(1,\'\')">1</button></li> <li className="page-item"><button className="page-link text-dark right-border py-1"> ... </button></li>'),
                e < 10 && (t = 1),
                    o = t;
                o <= e &&
                ((active = ""), o == a && (active = " active"), (row += '<li className="page-item' + active + '"><button className="page-link text-dark py-1" onClick="brands_page(' + o + ",'')\">" + o + "</button></li>"), !(page_limit >= 10));
                o++
            )
                page_limit++;
            (t = parseInt($("#page_num").val())),
            (t += 10) < e &&
            (row +=
                '<li className="page-item"><button className="page-link text-dark right-border py-1"> ... </button></li> <li className="page-item"><button className="page-link text-dark py-1" onClick="brands_page(' +
                e +
                ",'')\">" +
                e +
                "</button></li>"),
            (t = parseInt($("#page_num").val())) < e &&
            (row +=
                '<li className="page-item"><button className="page-link text-dark right-border py-1" id="next-page" onClick="brands_page(null,this)" value="2">Next <i className="pl-2 fa fa-angle-double-right" aria-hidden="true"></i></button></li>'),
                $(".pagination").html(row);
        } catch (e) {
            console.log(e);
        }
    };
    call_ajax_with_functions("products_listing", r + "search/brands_page_filters", i, [
        o,
        function () {
            echo.init({offset: 100, throttle: 10, unload: !1});
        },
        function () {
            $("HTML").animate({scrollTop: $("#scrollTo").offset().top}, 1e3), window.scrollBy(0, 10), window.scrollBy(10, 0);
        },
        function () {
            var e = $("#page_num").val(),
                t = $("#total_count").val();
            if (e > 0) {
                var a = e - 1,
                    l = parseInt(e) + parseInt(1);
                $("#pre-page").val(a),
                    $("#next-page").val(l),
                e <= 1 && ($("#pre-page").closest("li").addClass("disabled"), $("#next-page").closest("li").removeClass("disabled")),
                e > 1 && ($("#pre-page").closest("li").removeClass("disabled"), $("#next-page").closest("li").removeClass("disabled")),
                e >= t && ($("#next-page").closest("li").addClass("disabled"), $("#pre-page").closest("li").removeClass("disabled"));
            }
        },
    ]);
}

function reset_filters() {
    $(".cat_filters").prop("checked", !1), $(".price_filters").prop("checked", !1), $(".brand_filters").prop("checked", !1);
    var e = $("#url").val(),
        t = new FormData();
    t.append("current_cat", window.location.pathname.replace("/", "")),
        call_ajax_with_functions("products_listing", e + "search/products_filter", t, [
            function () {
                echo.init({offset: 100, throttle: 10, unload: !1});
            },
            function () {
                window.scrollBy(0, 10), window.scrollBy(10, 0);
            },
            function () {
                var e = $("#count").val();
                $("#count_view").html(e);
            },
        ]);
}

function show_attr_product(e) {

    var a = $("#url").val(),
        r = e.value;
    if (((t = $("#attr_size").val()), (l = $("#attr_color").val()), null != t && null != l)) {
        var o = $("#prev_size").val(),
            n = $("#prev_color").val();
        if (((t = t.split(",")), 1 == (l = l.split(",")).length || 1 == t.length)) return void go_attr_product(e);
        let s = "";
        for (i = 0; i < t.length; i++) for (z = 0; z < l.length; z++) t[i] == l[z] && ((s = t[i]), console.log(s));
        if ("" != s)
            return (
                $('#attr_size option[value="' + o + '"]').prop("selected", !0),
                    $('#attr_color option[value="' + n + '"]').prop("selected", !0),
                    o == t ? alertify.error("This Color is not Available in this size!") : n == l ? alertify.error("This Size is not Available in this Color!") : void 0
            );
        window.location.href = a + r;
    } else go_attr_product(e);
}

function get_total(e, t, a) {
    var l = parseInt($(e).val());
    $("#qb_total_amount").text(l * t + a);
}

function get_total2(e, t, a) {
    var l = parseInt($(e).val());
    $("#qb2_total_amount").text(l * t + a);
}

function change_tab1(e, t) {
    var a = 0;
    if ("#step-1" == e) {
        if ("" == $("#full_name").val()) return (a = 1), alertify.error("Please Enter Full Name");
        if ("" == $("#cnic").val()) return (a = 1), alertify.error("Please Enter CNIC");
        if ("" == $("#phone").val()) return (a = 1), alertify.error("Please Enter Phone");
        if ("" == $("#mobile").val()) return (a = 1), alertify.error("Please Enter Mobile");
        if ("" == $("#email").val()) return (a = 1), alertify.error("Please Enter Email");
        if (!isValidEmailAddress($("#email").val())) return (a = 1), alertify.error("Please Valid Email");
        if ("" == $("#business_type").val()) return (a = 1), alertify.error("Please Enter Business Type");
        if ("" == $("#adress").val()) return (a = 1), alertify.error("Please Enter address");
        if ("" == $("#city").val()) return (a = 1), alertify.error("Please Select City");
    } else {
        if ("" == $("#legal_business_name").val()) return (a = 1), alertify.error("Please Enter Legal Business Name");
        if ("" == $("#display_store_name").val()) return (a = 1), alertify.error("Please Enter Display Store Name");
        if ("" == $("#category").val()) return (a = 1), alertify.error("Please Select category");
        if (!$("#return_policy").is(":checked") && !$("#return_policy1").is(":checked")) return (a = 1), alertify.error("Please Check an option Return Policy");
        if (!$("#exchange_policy").is(":checked") && !$("#exchange_policy1").is(":checked")) return (a = 1), alertify.error("Please Check an option Exchange Policy");
        if (!$("#warranty").is(":checked") && !$("#warranty1").is(":checked")) return (a = 1), alertify.error("Please Check an option Warranty");
    }
    1 != a &&
    ($(window).scrollTop(0), $(e.replace("#", ".")).removeClass("btn-primary").addClass("btn-default"), $(t.replace("#", ".")).removeClass("btn-default").addClass("btn-primary"), $(t).removeAttr("style"), $(e).css("display", "none"));
}

function submit_merchant_form() {
    var e = 0;
    return "" == $("#bank_name").val()
        ? ((e = 1), alertify.error("Please Enter Bank Name"))
        : "" == $("#ac_title").val()
            ? ((e = 1), alertify.error("Please Enter Account Title"))
            : "" == $("#ac_number").val()
                ? ((e = 1), alertify.error("Please Enter Account Number"))
                : "" == $("#branch_code").val()
                    ? ((e = 1), alertify.error("Please Enter Branch Code"))
                    : void (1 != e && $("#merchant_registration").submit());
}

function openSidebarMenu(e) {
    "block" == $(".cat_" + e).css("display") ? $(".cat_" + e).css("display", "none") : $(".cat_" + e).css("display", "block");
}

function ntn_check() {
    (ntn = $("#ntn_number").val()), ntn.length > 7 && $("#ntn_number").val(ntn.slice(0, -1));
}

function filter_merchants_cat() {
    for (
        var e = document.getElementsByClassName("cat_filters"),
            t = document.getElementsByClassName("price_filters"),
            a = document.getElementsByClassName("brand_filters"),
            l = $("#category_id").val(),
            r = $("#brand_id").val(),
            i = $("#order_by").val(),
            o = new FormData(),
            n = 0;
        n < e.length;
        n++
    )
        e[n].checked && o.append("cat[]", e[n].value);
    for (n = 0; n < t.length; n++) t[n].checked && o.append("price[]", t[n].value);
    for (n = 0; n < a.length; n++) a[n].checked && o.append("brand[]", a[n].value);
    o.append("category_id", l), o.append("brand_id", r), o.append("order_by", i), o.append("current_cat", window.location.pathname.replace("/", ""));
    var s = $("#url").val();
    call_ajax_with_functions("products_listing", s + "search/merchant_filter", o, [
        function () {
            try {
                if (((count = $("#page_num_count").val()), (count = parseInt(count / 24)), (row = ""), 0 != count)) {
                    for (var e = 0; e <= count; e++)
                        (row +=
                            0 == e
                                ? '<li className="page-item disabled"><button className="page-link text-dark right-border py-1" id="pre-page" style="border: none;" onClick="merchant_page(null,this)" value="0" tabindex="-1">Previous</button></li>'
                                : '<li className="page-item"><button className="page-link text-dark left-border py-1" onClick="merchant_page(' + e + ",'')\">" + e + "</button></li>"),
                        e == count &&
                        (row +=
                            '<li className="page-item"><button className="page-link text-dark right-border py-1" id="next-page" onClick="merchant_page(null,this)" value="2">Next <i className="pl-2 fa fa-angle-double-right" aria-hidden="true"></i></button></li>');
                    $(".pagination").html(row);
                    var t = $("#page_num").val(),
                        a = $("#total_count").val();
                    if (t > 0) {
                        var l = t - 1,
                            r = parseInt(t) + parseInt(1);
                        $("#pre-page").val(l),
                            $("#next-page").val(r),
                        t <= 1 && ($("#pre-page").closest("li").addClass("disabled"), $("#next-page").closest("li").removeClass("disabled")),
                        t > 1 && ($("#pre-page").closest("li").removeClass("disabled"), $("#next-page").closest("li").removeClass("disabled")),
                        t >= a && ($("#next-page").closest("li").addClass("disabled"), $("#pre-page").closest("li").removeClass("disabled"));
                    }
                }
            } catch (e) {
                console.log(e);
            }
        },
        function () {
            echo.init({offset: 100, throttle: 10, unload: !1});
        },
        function () {
            window.scrollBy(0, 10), window.scrollBy(10, 0);
        },
        function () {
            var e = $("#count").val();
            $("#count_view").html(e);
        },
    ]);
}

function merchant_page(e = null, t = null) {
    null == e && null != t ? (e = $(t).val()) : null == t && (e = 1);
    var a = $("#url").val(),
        l = $("#order_by_filter_dd").val(),
        r = $("#order_by_filter_dd")[0].options[$("#order_by_filter_dd")[0].selectedIndex].getAttribute("data-val"),
        i = new FormData();
    i.append("page_num", e), i.append("sort_order", l), i.append("sort_by", r), i.append("current_cat",$('#seg1').val());
    var o = function () {
        try {
            let e = $("#page_num_count").val(),
                t = parseInt($("#page_num").val()),
                a = parseInt($("#page_num").val()),
                l = (e = Math.ceil(parseInt(e) / 24)) - t;
            for (
                e > 10 && l < 10 && ((t -= 10 - l), console.log(t)),
                    page_limit = 0,
                    row = "",
                t > 1 &&
                (row +=
                    '<li className="page-item disabled"><button className="page-link text-dark right-border py-1" id="pre-page" style="border: none;" onClick="merchant_page(null,this)" value="1" tabindex="-1"><i className="pl-2 fa fa-angle-double-left" aria-hidden="true"></i> Previous</button></li>'),
                e > 10 &&
                t > 1 &&
                (row +=
                    '<li className="page-item"><button className="page-link text-dark py-1" onClick="merchant_page(1,\'\')">1</button></li> <li className="page-item"><button className="page-link text-dark right-border py-1"> ... </button></li>'),
                e < 10 && (t = 1),
                    o = t;
                o <= e &&
                ((active = ""), o == a && (active = " active"), (row += '<li className="page-item' + active + '"><button className="page-link text-dark py-1" onClick="merchant_page(' + o + ",'')\">" + o + "</button></li>"), !(page_limit >= 10));
                o++
            )
                page_limit++;
            (t = parseInt($("#page_num").val())),
            (t += 10) < e &&
            (row +=
                '<li className="page-item"><button className="page-link text-dark right-border py-1"> ... </button></li> <li className="page-item"><button className="page-link text-dark py-1" onClick="merchant_page(' +
                e +
                ",'')\">" +
                e +
                "</button></li>"),
            (t = parseInt($("#page_num").val())) < e &&
            (row +=
                '<li className="page-item"><button className="page-link text-dark right-border py-1" id="next-page" onClick="merchant_page(null,this)" value="2">Next <i className="pl-2 fa fa-angle-double-right" aria-hidden="true"></i></button></li>'),
                $(".pagination").html(row);
        } catch (e) {
            console.log(e);
        }
    };
    call_ajax_with_functions("products_listing", a + "search/merchant_page_filter", i, [
        o,
        // function () {
        //     echo.init({offset: 100, throttle: 10, unload: !1});
        // },
        function () {
            $("HTML").animate({scrollTop: $("#scrollTo").offset().top}, 1e3), window.scrollBy(0, 10), window.scrollBy(10, 0);
        },
        function () {
            var e = $("#page_num").val(),
                t = $("#total_count").val();
            if (e > 0) {
                var a = e - 1,
                    l = parseInt(e) + parseInt(1);
                $("#pre-page").val(a),
                    $("#next-page").val(l),
                e <= 1 && ($("#pre-page").closest("li").addClass("disabled"), $("#next-page").closest("li").removeClass("disabled")),
                e > 1 && ($("#pre-page").closest("li").removeClass("disabled"), $("#next-page").closest("li").removeClass("disabled")),
                e >= t && ($("#next-page").closest("li").addClass("disabled"), $("#pre-page").closest("li").removeClass("disabled"));
            }
        },
    ]);
}

function swipedetect(e, t) {
    var a,
        l,
        r,
        i,
        o,
        n,
        s = e,
        c = t || function (e) {
        };
    s.addEventListener(
        "touchstart",
        function (e) {
            var t = e.changedTouches[0];
            (a = "none"), (dist = 0), (l = t.pageX), (r = t.pageY), (n = new Date().getTime());
        },
        !1
    ),
        s.addEventListener("touchmove", function (e) {
        }, !1),
        s.addEventListener(
            "touchend",
            function (e) {
                var t = e.changedTouches[0];
                (i = t.pageX - l),
                    (o = t.pageY - r),
                new Date().getTime() - n <= 300 && (Math.abs(i) >= 150 && Math.abs(o) <= 100 ? (a = i < 0 ? "left" : "right") : Math.abs(o) >= 150 && Math.abs(i) <= 100 && (a = o < 0 ? "up" : "down")),
                    c(a);
            },
            !1
        );
}

$(".coverimg").on("click", function (e) {
    var t = $(this).attr("src");
    $("#view-image-body").html("<img className='img-fluid' src='" + t + "'>");
}),
    $(document).ready(function () {
        for (var e = !1, t = 0; t < $(".category-sidebar ul").length; t++) $("#scroll" + t).height() > 250 && $("#scroll" + t).addClass("scrollable");
        var a = $("#url").val(),
            l = ["review-box-primary", "review-box-secondary"];
        $("#reviews-slider .review-box").each(function () {
            $(this).addClass(l[~~(Math.random() * l.length)]);
        }),
            (l = ["review-box-primary", "review-box-secondary"]),
            $("#reviews-slider .review-box").each(function () {
                $(this).addClass(l[~~(Math.random() * l.length)]);
            }),
            (async function (t) {
                async function l(a, l) {
                    if (!loading && !end_record) {
                        loading = true; // Prevent multiple executions
                        let e = t("div[id*='deal-box']").length > 0 ? t("div[id*='deal-box']").length : t("#total_products").val(),
                            n = t("#seg1").val(),
                            s = t("#search_param").val(),
                            c = getUrlParameter("sort"),
                            d = getUrlParameter("price_min"),
                            u = getUrlParameter("price_max"),
                            p = t(".attribute_filters:checked");

                        var r = [];
                        $("input:checkbox:checked.brands").each(function () {
                            r.push($(this).val());
                        });

                        var i = [],
                            o = [];
                        p.map(function (e, t) {
                            if (null != t.getAttribute("groups")) {
                                var a = t.getAttribute("groups"),
                                    l = t.value;
                                if (o.indexOf(a) > -1) {
                                    var r = o.indexOf(a);
                                    i[r].push(l);
                                } else {
                                    o.push(a);
                                    var n = [];
                                    n.push(l), i.push(n), 1;
                                }
                            }
                        });

                    }
                }

                t.fn.loaddata = function (r) {
                    var i = t.extend({ data_url: a + "general_functions/see_more_products" }, r),
                        o = this;

                    loading = false;
                    end_record = false;

                    t(window).scroll(function () {
                        var a = t("#seg1").val();
                        if (a != null) {
                            ("search" === a.split(",")[0]
                                ? t(window).scrollTop() + t(window).height() > t("#loading-data").height() && !loading && !end_record && l(o, i)
                                : t(window).scrollTop() + t(window).height() > 550 + t("#products_listing").height() + t("#loading-data").height() && !loading && !end_record && l(o, i));
                        }
                    });
                };
            })(jQuery);

        // var search_param = new URLSearchParams(window.location.search).size;
        if ($("#seg1").val() != undefined && $("#seg1").val() != "") {
            $("#loading-data").loaddata();
        }

        $(".alphaonly").bind("keyup blur", function () {
            $(this).val(
                $(this)
                    .val()
                    .replace(/[^a-z^A-Z\s]/g, "")
            );
        }),
            $(".onlyNumerics").keydown(function (e) {
                var t = e.keyCode;
                (t > 95 && t < 106) || (t > 36 && t < 41) || 9 == t || (e.shiftKey || e.ctrlKey || e.altKey ? e.preventDefault() : 46 != t && 8 != t && isNaN(parseInt(String.fromCharCode(e.which))) && e.preventDefault());
            }),
            $("#view_image").on("hidden.bs.modal", function (e) {
                $("#view-image-body").html("");
            });
    }),
    $(document).ready(function () {
        $(".thumbnail").click(function () {
            $(".modal-body").empty();
            var e = $(this).parent("a").attr("title");
            $(".modal-title").html(e), $($(this).parents("div").html()).appendTo(".modal-body"), $("#myModal").modal({show: !0});
        });
    }),
    $("#btnExport").click(function (e) {
        window.open("data:application/vnd.ms-excel,Content-Type: text/plain" + encodeURIComponent($("#print_area").html())), e.preventDefault();
    }),
    $("#example-search-input4").click(function (e) {
    }),
    $("#example-search-input4").keyup(function (e) {
        if ((0 == $("#example-search-input4").val() && ($(".search-menu").removeClass("show-menu"), $(".search-menu").addClass("hide-menu")), !($("#example-search-input4").val().length < 2))) {
            var t = $("#example-search-input4").val(),
                a = $("#url").val(),
                l = new FormData();
            l.append("search", t);
            var r = get_XmlHttp();
            r.open("POST", a + "search/dynamic_search", !0),
                r.send(l),
                $(".search_loader").css("display", "block"),
                (r.onreadystatechange = function () {
                    if (4 == r.readyState) {
                        $(".search_loader").css("display", "none");
                        var e = JSON.parse(r.responseText);
                        $("#search_tags").html(e.tags), $("#search_result").html(e.items);
                    }
                });
        }
    }),
    $("#example-search-input5").keyup(function (e) {
        if ((0 == $("#example-search-input5").val() && ($("#search-menu-side").removeClass("show-menu-side"), $("#search-menu-side").addClass("hide-menu-side")), !($("#example-search-input5").val().length < 2))) {
            var t = $("#example-search-input5").val(),
                a = $("#url").val(),
                l = new FormData();
            l.append("search", t);
            var r = get_XmlHttp();
            r.open("POST", a + "search/dynamic_search_mobile", !0),
                r.send(l),
                $(".search_loader").css("display", "block"),
                (r.onreadystatechange = function () {
                    if (4 == r.readyState) {
                        $(".search_loader").css("display", "none");
                        var e = JSON.parse(r.responseText);
                        $("#search_tags").html(e.tags), $("#search_result_side").html(e.tags);
                    }
                });
        }
    }),
    $(document).ready(function () {
        $(".owl-carousel").find(".owl-nav").removeClass("disabled"),
            $(".owl-carousel").on("changed.owl.carousel", function (e) {
                $(this).find(".owl-nav").removeClass("disabled");
            });
    }),
    $(function () {
        var e = $(".lrg-logo");
        $(window).scroll(function () {
            $(window).scrollTop() >= 100
                ? e.hasClass("sml-logo") || (e.hide(), e.removeClass("lrg-logo").addClass("sml-logo").fadeIn("fast"), $(".fixed-top").removeClass("img-gif").fadeIn("slow"))
                : e.hasClass("lrg-logo") || (e.hide(), e.removeClass("sml-logo").addClass("lrg-logo").fadeIn("fast"), $(".fixed-top").addClass("img-gif").fadeIn("slow"));
        });
    }),
    $("body").on("click.hideMenu", function (e) {
        $(".search-menu").hasClass("show-menu") && ($(e.target).parent().hasClass("search-menu") || ($(".search-menu").removeClass("show-menu"), $(".search-menu").addClass("hide-menu")));
    }),
    $("#attr_size").on("focus", function () {
        $("#prev_size").val(this.value);
    }),
    $("#attr_color").on("focus", function () {
        $("#prev_color").val(this.value);
    }),
    $("#product-page").ready(function () {
        let e = $("#url").val(),
            t = parseInt($("#qb_total_amount").text()),
            a = window.location.pathname;
        (a = a.slice(1)),
        0 == t &&
        $.ajax({
            url: e + "general_functions/get_shipping?slug=" + a,
            success: function (e) {
                if (1 == e) {
                    let e = parseInt($("#price").val()),
                        t = 0;
                    $("#qb_delivery").text(t), $("#qb_total_amount").text(e + t);
                } else {
                    let e = parseInt($("#price").val()),
                        t = parseInt($("#del_charge").val());
                    $("#qb_total_amount").text(e + t);
                }
            },
        });
    }),
    $(document).ready(function () {
        let e = $(".nav-cart-total").text();
        0 == parseInt(e) && $(".nav-cart-total").hide(),
            $(".gotocart").click(function () {
                (url = $("#url").val()), (window.location.href = url + "checkout");
            });
    });
for (var eles = document.getElementsByClassName("owl-carousel"), i = 2; i < eles.length; i++)
    swipedetect(eles[i], function (e) {
        echo.init({
            offset: 100, throttle: 10, unload: !1, callback: function (e, t) {
            }
        });
    });

function get_charges_by_city() {
    var e = $("#url").val(),
        tx = parseFloat($("#product_price").val()),
        t = $("#cityq").val();
    "" != t &&
    $.post(e + "general_functions/get_charges_by_city/" + t,{total:tx}, function (e) {
        var t = parseFloat(e);
        $("#del_charge").val(t), $(".charges").val(t), $(".delivery").html("<span><strong>Delivery Charges: </strong>" + t + "</span>");
        var a = $("#current_id").val(),
            l = parseFloat($("#price" + a).val()) + t;
        $(".qb_total_amount").html("<span><strong>Total Amount: </strong>" + l + "</span>");
    });
}

function get_charges_by_city_checkout() {
    var e = $("#url").val(),
        t = parseFloat($("#price").val()),
        a = $("#city").val();
    if(a ===""){
        a = 0;
    }
    "" != a &&
    $('.btn-checkout').attr('disabled',true),$.post(e + "general_functions/get_charges_by_city/" + a, {total: t}, function (e) {
        cart_effects();
    });
}

function get_charges_by_city_qm() {
    var e = $("#url").val(),
        t = $("#cityqm").val();
    $.post(e + "general_functions/get_charges_by_city/" + t, function (e) {
        var t = parseFloat(e);
        $("#qmdel_charge").val(t),
            $(".charges").val(t),
            $(".charges_checkout").html("Rs." + t),
            $(".delivery").html('<input type="radio" name="" className="charges" id="" value="" checked="checked"><span><strong>Delivery Charges: </strong>' + t + "</span>"),
            $("#qmcurrent_id").val();
        var a = parseFloat($("#qmprice").val()) + t;
        $(".charges_checkout_total").html("<strong>Rs." + a + "</strong>"), $(".qb_total_amount").html("<span><strong>Total Amount: </strong>" + a + "</span>");
    });
}

function WriteReview() {
    var url = $('#url').val();
    var e = document.getElementById("WriteReview");
    "none" === e.style.display ? (e.style.display = "block") : (e.style.display = "none");
    var s = document.createElement( 'script' );
    s.setAttribute( 'src', "https://www.google.com/recaptcha/api.js" );
    s.setAttribute( 'async', "true" );
    document.body.appendChild( s );

    var h = document.getElementsByTagName('head')[0];
    var l = document.createElement('link');
    h.parentNode.insertBefore(l, h);
    l = document.createElement('link');
    l.rel = 'stylesheet';
    l.type = 'text/css';
    l.href = url+'css/frontend/font-awesome-4.7.0/css/font-awesome.min.css';
    h.parentNode.insertBefore(l, h);

    setTimeout(function(){
        var captchaContainer = null;
        var loadCaptcha = function() {
            captchaContainer = grecaptcha.render('product_recaptcha', {
                'sitekey' : $("#recaptcha_site_key").val(),
                'callback' : function(response) {
                    $("#recaptcha_response").val(response)
                    console.log(response);
                }
            });
        };
        loadCaptcha();
    },2000)
    // $("#product_recaptcha").html('<div className="g-recaptcha clrfield" data-sitekey="'+$("#recaptcha_secret_key")[0].value+'"></div>');
}

function show_search() {
    $("#show_search").show(), $("input#example-search-input4").focus(), $("input#example-search-input4-mbl").focus();
}

function close_search() {
    $("#show_search").hide();
}
function show_search_lg() {
    $('.show_search_lg').addClass('active');

    // Wait for a short delay before focusing on the input
    setTimeout(function() {
        $('input#example-search-input4').focus();
    }, 100); // Adjust the delay time if needed
}
function close_search_lg(){
    $('.show_search_lg').removeClass('active');
}
function close_search_lsg(){
    $('.show_search_lg').removeClass('active');
}
function search_main_box() {
    if($('.search-main-box').hasClass('d-none')){
        $('.search-main-box').removeClass('d-none');
        $('input.search-input').focus()
    }else{
        $('search-main-box').addClass('active');
        $('input.search-input').focus()
    }
}
function search_box_close() {
    if($('.search-main-box').hasClass('d-none')){
        $('.search-main-box').removeClass('d-none');
    }else {
        $('.search-main-box').addClass('d-none');
    }

}
function hideCat(e) {
    $("#mega-menu" + e).removeClass("display-on");
}

function displayCat(e) {
    $("#menutoggle").click(function () {
        $(".xs-menu").toggleClass("displaynone");
    }),
        $("ul li").click(function (e) {
            e.preventDefault(), $("li").removeClass("active"), $(this).addClass("active");
        }),
        $("#mega-menu" + e).addClass("display-on");
}

function attributes_update_2(group_id,val,group_array,attribute_id,prod_slug,parent_attr_id,product_attribute){

    var border =  $('#attributes'+group_id+' li.active_border');
    for(var i = 0; i < border.length;i++){
        if(border.length > 0){
            $(border[i]).removeClass("active_border");
        }
    }
    let  url = $('#url').val(),

        product_slug = prod_slug,
        product_value =  $('#selected'+parent_attr_id).text();
    // attr_group = $('option:selected',val).attr('group_val');
    // let val_slug = $('#selected'+attribute_id).attr('value');
    // let val_slug = $('#selected'+parent_attr_id);

    // go_attr_product(val_slug);

    setTimeout(function(){
        $.post(url+'general_functions/attributes_update',{product_slug:product_slug,product_value:product_value,group_array:group_array,group_id_current:group_id,parent_attribute_id:parent_attr_id},function(data){
            // console.log('here 2');
            var array = group_array.split(',');
            for(var i=0;i<array.length;i++){
                if(array[i] != group_id){
                    // $('#attributes'+array[i]).prop("disabled", false);
                    $('#attributes'+array[i]).html(data);
                }
            }




        })
        setTimeout(function(){
            $("#selected"+parent_attr_id).addClass('active_border');
            $('#selected'+product_attribute).addClass('active_border');
            $(".loading-product").hide();
        },1000)

    }, 1000);


    // $('#selected'+attribute_id).addClass('active_border');

    // console.log(val);


}
$(".loading-product").hide();
function go_attr_product(e,param,gid) {
    // console.log(param);
    var a = $("#url").val();
    // console.log($(e).attr('value'));

    if(gid !== undefined){
        var p_id =$('#attributes'+gid+' li.active_border').attr('p_id');

    }else{

        var p_id =$('#attributes'+param[3]+' li.active_border').attr('p_id');
    }
    console.log(p_id);
    window.location.href !== a && (get_products_by_variation("response",a+"products/get_product_by_id/"+$(e).attr('value'),null,param,p_id),

        $.post(a + "products/get_product_by_id/" + $(e).attr('value'), function(t) {
            //+'?product=product'+attr_group+attr_val
            $("#select_size").remove(), $("#select_color").remove(), window.history.pushState("page2", "Title", a + $(e).attr('value'))
        })), "add_to_cart_model" === $("#add_to_cart_model").val() && ($("#product-added-to-cart").hide(), $.post(a+"general_functions/get_product/"+$(e).val(),{
        slug:$(e).val(),
        selected: "selected",
        param:param
    },function(e) {
        e ? $("#add-to-cart-modal-body").html(e) : ($("#add_to_cart_btn").addClass("hideit"), $("#add-to-cart-modal-body").html("<div className='alert alert-danger'>Sorry! there is problem in loading product.</div>"))
    })), "quick_buy_model" === $("#quick_buy_model").val() && $.post(a + "general_functions/get_product_quick_view/" + $(e).val(), {
        selected: "selected",
        slug:$(e).val(),
        param:param,
        ref: "q"
    }, function(e) {

        e ? $("#quick-view-modal-body").html(e) : ($("#quick_buy_btn").addClass("hideit"), $("#quick-view-modal-body").html("<div className='alert alert-danger'>Sorry! there is problem in loading product.</div>"))
    })
    if($("#add_to_cart_model").val() === "add_to_cart_model"){
        // console.log(param);
        if(param){
            // let parent_slug = $('#attributes'+param[1]);
            // $('#attributes'+param[1]+' option').removeAttr('selected').filter('[value='+param[0]+']').attr('selected', true);
            // $(".loading-product").show();
            // setTimeout(function(){
            // $('#attributes'+param[1]+' option[value='+param[0]+']').attr('selected',true);

            let parent_slug = $('#attributes'+param[1]);
            $('.selected_size').html(param[4])
            // console.log($('#attributes'+param[1]+' option[value='+param[0]+']'))
            // console.log(parent_slug.attr('group_multiple'));
            attributes_update_2(param[1],parent_slug,parent_slug.attr('group_multiple'),param[3],param[2],param[5],param[6]);
            // },600);

            // setTimeout(function() {
            //     $('#attributes' + param[3] + ' option[value=' + param[2] + ']').attr('selected', true);
            // },50);
        }else{
            // $('.loading-product').hide();
        }
    }
    if($("#quick_buy_model").val() === "quick_buy_model"){
        // console.log(param);
        if(param){
            // let parent_slug = $('#attributes'+param[1]);
            // $('#attributes'+param[1]+' option').removeAttr('selected').filter('[value='+param[0]+']').attr('selected', true);
            // $(".loading-product").show();
            // setTimeout(function(){
            $('#attributes'+param[1]+' option[value='+param[0]+']').attr('selected',true);
            let parent_slug = $('#attributes'+param[1]);
            $('.selected_size').html(param[4])
            // console.log($('#attributes'+param[1]+' option[value='+param[0]+']'))
            // console.log(parent_slug.attr('group_multiple'));
            attributes_update_2(param[1],parent_slug,parent_slug.attr('group_multiple'),param[3],param[2],param[5],param[6]);
            // },600);

            // setTimeout(function() {
            //     $('#attributes' + param[3] + ' option[value=' + param[2] + ']').attr('selected', true);
            // },50);
        }else{
            // $('.loading-product').hide();
        }
    }
}
function attributes_update(group_id,val,group_array,attribute_id){

    var border =  $('#attributes'+group_id+' li.active_border');
    for(var i = 0; i < border.length;i++){
        if(border.length > 0){
            $(border[i]).removeClass("active_border");
        }
    }
    $('#selected'+attribute_id).addClass('active_border');
    let  url = $('#url').val(),

        product_slug = $('#selected'+attribute_id).attr('value'),
        product_value =  $('#selected'+attribute_id).text();
    // attr_group = $('option:selected',val).attr('group_val');
// let val_slug = $('#selected'+attribute_id).attr('value');
    let val_slug = $('#selected'+attribute_id);
    go_attr_product(val_slug,'',group_id);

    setTimeout(function(){
        $.post(url+'general_functions/attributes_update',{product_slug:product_slug,product_value:product_value,group_array:group_array,group_id_current:group_id,parent_attribute_id:attribute_id},function(data){
            var array = group_array.split(',');
            for(var i=0;i<array.length;i++){
                if(array[i] != group_id){
                    // $('#attributes'+array[i]).prop("disabled", false);
                    $('#attributes'+array[i]).html(data);
                }
            }

            // $(".loading-product").hide();
        })
    }, 1000);


    // console.log(val);


}
function child_attributes(group_id,val,group_array,parent_group,attribute_id,parent_attr_id){
    //
    // console.log(group_id);
    var border =  $('#attributes'+group_id+' li.active_border');
    for(var i = 0; i < border.length;i++){
        if(border.length > 0){
            $(border[i]).removeClass("active_border");
        }
    }
    $('#selected'+attribute_id).addClass('active_border');

    // console.log(parent_group);
    // console.log(attribute_id);
    let  url = $('#url').val(),

        product_slug =$('#selected'+attribute_id).attr('value'),
        parent_slug = $("#selected"+parent_attr_id).attr('value'),
        product_value = $('#selected'+attribute_id).text();
    // attr_group = $('option:selected',val).attr('group_val');
// console.log(parent_slug);
// console.log(product_value);


    // if(product_value == "--select--"){
    //     window.location.reload();
    // }
    let val_slug = $('#selected'+attribute_id);
    //,'&'+parent_group+'='+'&'+parent_value+attr_group,'='+product_value
    go_attr_product(val_slug,[parent_slug,parent_group,product_slug,group_id,product_value,parent_attr_id,attribute_id]);
    // setTimeout(function(){
    //     // $.post(url+'general_functions/attributes_update',{product_slug:product_slug,product_value:product_value,group_array:group_array,group_id_current:group_id},function(data){
    //         // console.log(group_array);
    //         var array = group_array.split(',');
    //         for(var i=0;i<array.length;i++){
    //             if(array[i] != group_id){
    //                 $('#attributes'+array[i]).prop("disabled", false);
    //                 // $('#attributes'+array[i]).html(data);
    //             }
    //         }


    // })
    // }, 1000);
}

function nav_spec() {
    $('.nav-tabs a[href="#nav-specification"]').tab("show"), $("html,body").animate({scrollTop: $("#scrollup").offset().top}, "slow");
}

function mobileCheck() {
    let e = !1;
    var t;
    return (
        (t = navigator.userAgent || navigator.vendor || window.opera),
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            t
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                t.substr(0, 4)
            )) &&
        (e = !0),
            e
    );
}
// $(".loading-product").hide(),
$("#scroll_cat1").height() > 400 && (console.log($("#scroll_cat1").height()), $("#scroll_cat1").addClass("scrollable")),
$("#scroll_brand").height() > 400 && (console.log($("#scroll_brand").height()), $("#scroll_brand").addClass("scrollable")),
    $("form[id=search_filter] select#sort").on("change", function () {
        $("#search_filter")
            .find(":input")
            .filter(function () {
                return !this.value;
            })
            .attr("disabled", "disabled")
        // $("form[id=search_filter]")[0].submit();
    }),
    $("form[id=search_filter] input[type=checkbox]").on("change", function () {
        !1 === mobileCheck() &&
        ($("#search_filter")
                .find(":input")
                .filter(function () {
                    return !this.value;
                })
                .attr("disabled", "disabled")
            // $("form[id=search_filter]")[0].submit()
        )
    }),
    $("form[id=search_filter] input[type=radio]").on("change", function () {
        $("#search_filter")
            .find(":input")
            .filter(function () {
                return !this.value;
            })
            .attr("disabled", "disabled")
        // $("form[id=search_filter]")[0].submit();
    });
var getUrlParameter = function (e) {
    var t,
        a,
        l = window.location.search.substring(1).split("&");
    for (a = 0; a < l.length; a++) if ((t = l[a].split("="))[0] === e) return void 0 === t[1] || decodeURIComponent(t[1]);
};

function select_check(e) {
    !0 === $("input[value='" + e + "']")[0].checked ? ($("input[value='" + e + "']")[0].checked = !1) : ($("input[value='" + e + "']")[0].checked = !0)
    // , $("#search_filter")[0].submit();
}

function selectsort(e, t) {


    for (var a = 0; a < $("select#sort  > option").length; a++) {
        var l = $("select#sort > option")[a].value;
        $("select#sort")
            .find("option[value=" + l + "]")
            .attr("selected", !1),
        e == $("select#sort > option")[a].value &&
        $("select#sort")
            .find("option[value=" + l + "]")
            .attr("selected", !0);
    }

    // $(t).addClass("font-weight-bold");
    // $(t).addClass("selected-sort");
    // $(t).addClass("active");

    var border = $("ul.sort_order li button");
    for(var i = 0; i < border.length;i++){
        if(border.length >0){

            $(border[i]).removeClass("font-weight-bold");
            $(border[i]).removeClass("selected-sort");
            $(border[i]).removeClass("active");
        }
    }
    $(t).addClass("font-weight-bold");
    $(t).addClass("selected-sort");
    $(t).addClass("active");

    // , $("#search_filter")[0].submit();
    var data = $('form#search_filter').serialize();
// Check if 'sort' parameter exists in the serialized data
    if (data.indexOf('sort=') !== -1) {
        // Remove the existing 'sort' parameter and its value
        data = data.replace(/&?sort=[^&]*/g, '');
    }

// Append the new 'sort' parameter if 'e' exists
    if (e) {
        data += "&sort=" + e;
    }
    var url = $("#url").val();
    $(".loading-products").show(),window.history.pushState("page1", "s1", window.location.href.split("?")[0]),$("#products_listing").html(""),$("#loading-data").html(""),$.ajax({
        type:"POST",
        url:url+"products/search_filter",
        data:data,//only input
        success: function(response){
            $(".loading-products").hide(),
                window.history.pushState("page2", "s2", window.location.href +"?"+JSON.parse(response).url_param),
                $("#products_listing").html(JSON.parse(response).itembox);
            $("html,body").animate({scrollTop: $(".innerpage").offset().top},'slow');
        }
    });
}

function checkthis(e) {


    !1 === mobileCheck() && ((document.getElementById(e).checked = !document.getElementById(e).checked));


    // var border = $("ul.front_attribute li label");
    // for(var i = 0; i < border.length;i++){
    //     if(border.length >0){
    // $(border[i]).removeClass("font-weight-bold");
    // $(border[i]).removeClass("selected-sort");
    // $(border[i]).removeClass("active");
    //     }
    // }
    if($("."+e).hasClass("font-weight-bold") && $("."+e).hasClass("selected-types") && $("."+e).hasClass("active_t")){
        $("."+e).removeClass("font-weight-bold");
        $("."+e).removeClass("selected-types");
        $("."+e).removeClass("active_t");
    }else {
        $("."+e).addClass("font-weight-bold");
        $("."+e).addClass("selected-types");
        $("."+e).addClass("active_t");
    }
    checkbox_handle();
}
function getCookie(e) {
    let t = e + "=", a = decodeURIComponent(document.cookie).split(";");
    for (let e = 0; e < a.length; e++) {
        let l = a[e];
        for (; " " == l.charAt(0);) l = l.substring(1);
        if (0 == l.indexOf(t)) return l.substring(t.length, l.length)
    }
    return ""
}
function show_filter_mobile() {
    $(".Filter").removeClass("d-none");
}

function close_filter() {
    $(".Filter").addClass("d-none");
}

function submit_form_mobile() {
    $("#search_filter")[0].submit();
}

function update_cart() {
    let e = $("#url").val();
    $.post(e + "general_functions/update_cart_total", function (e) {
        cart_effects();
    });
}

function change_image(e, t, a, l, r) {
    $("#btn-" + t).attr("onClick", "get_product('" + r + "')");
    for (var i = $("ul#attributes" + a + " li.active_border"), o = 0; o < i.length; o++) i.length > 0 && $(i[o]).removeClass("active_border");
    var n = $("#url").val(),
        s = $(e).attr("value");
    $.post(n + "general_functions/change_image", {slug: s}, function (e) {
        // e && (
        $(".change_image" + t).attr("src", e);
        // , $(".change_slug" + t).attr("href", n + s));
    }),
        $("#selected" + l + t).addClass("active_border");
}

function add_to_cart_upselling(id) {
    try {
        event.preventDefault();
    } catch (e) {
        try {
            e.preventDefault();
        } catch (e) {
        }
    }
    var e = $("#url").val(),
        t = "1",
        a = $("#current_id").val(),
        l = $("#title" + id).val(),
        r = $("#code" + id).val(),
        i = $("#price" + id).val(),
        o = $("#del_charge" + id).val(),
        n = $("#image" + id).val(),
        s = ($("#attrqty" + id).val(), $(".attributes")),
        c = $(".attributes_values"),
        d = $(".groups_titles");
    $("#product-added-to-cart").html("");
    var u,
        p = "",
        _ = 0,
        v = "",
        g = "";
    if ("1" === t) {
        if (0 != s.length) {
            for (var m = 0; m < s.length; m++) {
                var f = s[m].value.replace(" ", "_"),
                    h = $("#" + f).val();
                if ("--select--" == $("select#attributes" + h + " option:selected").text()) return void alert(f + " Required");
                (p = p + f + ":" + $("select#attributes" + h + " option:selected").text() + ", "), (u += "," + $("select#attributes" + h + " option:selected").attr("val-id"));
            }
            g = u.split(",");
        }
    } else {
        for (var b = 0; b < c.length; b++) {
            var y = d[b].innerHTML;
            if ("" == c[b].value) return void alert(y + " Required");
            (p = p + y + ":" + c[b].options[c[b].selectedIndex].innerHTML + ", "), (u += "," + c[b].value);
        }
        g = u.split(",");
    }
    var w = 1 * i,
        k = $("select#attributes" + h + " option:selected").text();
    "function" == typeof gtag &&
    gtag("event", "add_to_cart", {
        items: [{
            id: a,
            name: l,
            list_name: $("#g_last_categorys").val(),
            brand: $("#g_brand").val(),
            category: $("#g_categorys").val(),
            variant: k || "",
            list_position: 1,
            quantity: 1,
            price: i
        }]
    }),
    "function" == typeof fbq && fbq("track", "AddToCart", {
        content_ids: a,
        content_name: l,
        content_type: "product",
        currency: "PKR",
        value: i
    }),
        1 != _
            ? ($("#add_to_cart_btn1").hide(),
                $("#load_btn").show(),
                $.post(e + "general_functions/add_to_cart", {
                    id: a,
                    title: l,
                    code: r,
                    qty: 1,
                    image: n,
                    price: i,
                    charges: o,
                    amount: w,
                    option: p,
                    selected_attributes: g
                }, function (e) {
                }),
                $("#upselling-modal-body").html('<div className="text-center"><i className="fa fa-spinner fa-pulse"></i></div>'),
                $("#upselling_modal").modal("hide"),
                $('form#checkout_form button[name="submit"]').click())
            : $("#product-upselling").html("<div className='alert alert-danger text-left'>" + v + " required.</div>");
}

function cancel_upselling() {
    $('form#checkout_form button[name="submit"]').click();
}

function click_submit() {

    $('#upselling_modal').modal('show'), $("#upselling_btn").remove(), $("#sub_btn").show();

}

function get_cart_message(e, t) {
    var a = $(".delivery_message").text(),
        l = t;
    a ? (localStorage.setItem("delivery_message", a), (l = localStorage.getItem("delivery_message"))) : (l = t), $(e).html(l);
}

function myFunctionSocial(e) {
    e.classList.toggle("change");
    let t = $(e)[0].className;
    t.indexOf("change") > 0 ? (console.log(t.indexOf("change")), ($("#social-plugin-h")[0].style.display = "block")) : (console.log(t.indexOf("change")), ($("#social-plugin-h")[0].style.display = "none")),
        console.log($("#social-plugin-h")[0]);
}

$(".pr").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);
    $(".pr.active").not($this).removeClass("active");
    $this.addClass("active");

    var colClass = $this.data("col");

    $(".change_cols [class*='col-']").removeClass((index, className) => {
        return (className.match(/(^|\s)col-\S+/g) || []).join(" ");
    }).addClass("col-" + colClass);

    $("#change_col_val").val(colClass);
});

function minusqty_checkout(e,id) {
    var t = $("#url").val(), a = $("#bqty" + e).val(), l = $("#cart_row_price" + e).html();

    if(localStorage.getItem('products')){
        let cart_items = JSON.parse(localStorage.getItem('products'));
        let cart_qty = a;
        cart_qty < 2 ? cart_qty=1: cart_qty-=1;
        for(var x=0;x<cart_items.length;x++){
            if(parseInt(cart_items[x].id) === parseInt(id)){
                cart_items[x].qty = parseInt(cart_qty);
                cart_items[x].amount =  cart_items[x].price * cart_items[x].qty;
            }
        }
        localStorage.setItem('products',JSON.stringify(cart_items));
    }
    a < 2 ? a = 1 : a -= 1, $("#bqty" + e).val(a), l = l.replace(",", "");
    var r = parseInt(a) * parseInt(l);
    $("#cart_row_amount" + e).html(r.toFixed(2)), $(".btn-checkout").attr("disabled", !0), $.post(t + "general_functions/update_cart_item", {
        id: e,
        qty: a
    }, function (e) {
        cart_effects()
    })
}

function plusqty_checkout(e,id) {
    var t = $("#url").val(), a = $("#bqty" + e).val(), l = $("#cart_row_price" + e).html(), r = $("#bqty" + e)[0].max;
    if(localStorage.getItem('products')){
        let cart_items = JSON.parse(localStorage.getItem('products'));
        let cart_qty = a;
        let max_cart_qty = r;
        (cart_qty = cart_qty > max_cart_qty-1 ? max_cart_qty : parseInt(cart_qty) +1);
        for(var x=0;x<cart_items.length;x++){
            if(parseInt(cart_items[x].id) === parseInt(id)){
                cart_items[x].qty = parseInt(cart_qty);
                cart_items[x].amount =  cart_items[x].price * cart_items[x].qty;
            }
        }
        localStorage.setItem('products',JSON.stringify(cart_items));
    }
    a = a > r - 1 ? r : parseInt(a) + 1, $("#bqty" + e).val(a), l = l.replace(",", "");
    var i = parseInt(a) * parseInt(l);
    $("#cart_row_amount" + e).html(i.toFixed(2)), $(".btn-checkout").attr("disabled", !0), $.post(t + "general_functions/update_cart_item", {
        id: e,
        qty: a
    }, function (e) {
        cart_effects()
    })
}
function get_all_qty_checkout(r) {
    var t = $("#url").val(); // URL value
    let value = parseInt($(r).val()); // Current input value
    const min = parseInt($(r).attr('min')); // Minimum value from the attribute
    const id = $(r).attr('id'); // ID of the input field
    const proid = $(r).data('proid'); // Assuming proid is a data attribute on the input field

    // Ensure the value is not less than the minimum allowed
    if (isNaN(value) || value < min) {
        value = min;
        $(r).val(min);
    }

    console.log(`Value: ${value}`);

    const index = id.replace('bqty', ''); // Extract the index from the ID
    if($("#cart_row_price" + index).length >0){
        var l = $("#cart_row_price" + index).text(); // Price associated with the cart item row
    }
    // Ensure qty doesn't exceed the max allowed
    let max_cart_qty = parseInt($(r).attr('max')); // Max value from the attribute
    let cart_qty = value > max_cart_qty ? max_cart_qty : value;

    // Update localStorage with the new quantity
    if (localStorage.getItem('products')) {
        let cart_items = JSON.parse(localStorage.getItem('products'));

        // Update the item quantity and amount in local storage
        for (let x = 0; x < cart_items.length; x++) {
            if (parseInt(cart_items[x].id) === parseInt(proid)) {
                cart_items[x].qty = cart_qty;
                cart_items[x].amount = cart_items[x].price * cart_items[x].qty;
            }
        }
        localStorage.setItem('products', JSON.stringify(cart_items));
    }

    // Set the input value according to the max limit
    $("#bqty" + index).val(cart_qty);


    // Send an update request to the server

    $(".btn-checkout").attr("disabled", !0),
        $.post(t + "general_functions/update_cart_item", { id: index, qty: cart_qty }, function (e) {
            cart_effects();
        });

    console.log(`Index: ${index}, Quantity: ${cart_qty}, Product ID: ${proid}`);
}
function displayFilterCat(e) {
    $(`#filter-category-${e}`).toggleClass("d-none");
    var icon = $(`#filter-caticon-${e}`);
    if(icon.hasClass('active')){
        icon.removeClass('active').removeClass('fa-minus').addClass('fa-plus');
    }else{
        icon.removeClass('fa-plus').addClass('fa-minus').addClass('active');
    }
    // $("ul li").click(function (e) {
    //     e.preventDefault(), $("li").removeClass("active"), $(this).addClass("active");
    // }),
    // $("#mega-menu" + e).addClass("display-on");
}
function checkbox_handle(){
    var data = $('form#search_filter').serialize();
    var url = $("#url").val();

    $(".loading-products").show(),window.history.replaceState("page1", "s1", window.location.href.split("?")[0]),$("#products_listing").html(""),$("#loading-data").html(""),$.ajax({
        type:"POST",
        url:url+"products/search_filter",
        data:data+ "&cols=" + $("#change_col_val").val(),//only input
        success: function(response){
            $(".loading-products").hide(),
                window.history.replaceState("page2", "s2", window.location.href +"?"+JSON.parse(response).url_param),
                $("#products_listing").html(JSON.parse(response).itembox);
            $("html,body").animate({scrollTop: $(".innerpage").offset().top},'slow');
        }
    });
}
$("form#search_filter :checkbox").click(function(){
    checkbox_handle();
    // var data = $('form#search_filter').serialize();
    // var url = $("#url").val();
    //
    // $(".loading-products").show(),window.history.pushState("page1", "s1", window.location.href.split("?")[0]),$("#products_listing").html(""),$("#loading-data").html(""),$.ajax({
    //     type:"POST",
    //     url:url+"products/search_filter",
    //     data:data+ "&cols=" + $("#change_col_val").val(),//only input
    //     success: function(response){
    //         $(".loading-products").hide(),
    //             window.history.pushState("page2", "s2", window.location.href +"?"+JSON.parse(response).url_param),
    //             $("#products_listing").html(JSON.parse(response).itembox);
    //         $("html,body").animate({scrollTop: $(".innerpage").offset().top},'slow');
    //     }
    // });
});
function variation_level_1(e,c,p,group_id,product_id){

    // changeslideto(e,4);
    var product_obj = $("#product_obj"+product_id).val(),
        product_obj = JSON.parse(product_obj.replaceAll("'",'"')),
        current_date = new Date().getTimestamp(),
        a =$("#url").val(),
        z =$("#img_url").val();
    var brand = product_obj.brand_title,
        selected_variant = $(e).attr("value_title"),
        id=product_obj.id,
        product_purchase_limit=product_obj.purchase_limit,
        product_title = product_obj.title,
        manage_inventory = product_obj.manage_inventory,
        product_qty = product_obj.product_qty,
        product_code = product_obj.product_code,
        product_price =currencyConverter(product_obj.price),
        product_discounted =currencyConverter(product_obj.discounted),
        product_percent =product_obj.percent,
        start_date =product_obj.start_date,
        end_date =product_obj.end_date,
        show_timer =product_obj.show_timer,
        model_no =product_obj.model_no,
        description =htmlspecialchars_decode(product_obj.description),
        specification =htmlspecialchars_decode(product_obj.specification),
        short_description =htmlspecialchars_decode(product_obj.short_description),
        product_main_image =product_obj.images,
        product_image = $("#variation_image"+product_id).val(),
        product_image = JSON.parse(product_image.replaceAll("'",'"'));
    if(product_price != 0){
        $(".discount-price").text("Rs. "+product_price);
        $(".percent").text(""+product_percent+"% Off");
    }else{
        $(".discount-price").text("");
        $(".percent").text("");
    }
    $("#g_brand").val(brand);
    $("#product_title").val(product_title);
    $(".single-product-title").text(product_title +' '+selected_variant);
    $("#g_qty").val(product_qty);
    $("#product_qty").val(product_qty);
    $("#product_purchase_limit").val(product_purchase_limit);
    $("#product_code").val(product_code);
    $("#g_variant").val(selected_variant);
    $("#model_no").text("Model Number: "+model_no);
    $("#product_description").html(description);
    $("#product_specification").html(specification);
    $("#product_short_description").html(short_description);
    var price=0;
    if(current_date >= start_date && current_date <= end_date && show_timer =="1"){
        price = product_discounted;
    }else{
        if(product_obj.discounted !=0 && product_obj.show_timer =="0"){
            price = product_discounted;
        }else{
            price = product_price;
        }
    }

    $("#product_price").val(price);
    $(".prices").text("Rs. " +price);
    var save_discount = product_price-product_discounted;
    $(".save_discount").text("Rs. " +save_discount);
    $("#product_image").val(product_main_image);
    var group_2="";
    var thumb="";
    var img_slide = "";
    var dx="";
    var cx = "";
    var img_thumb = "";
    for(var img = 0;img < product_image.length;img++){
        if (img === 0) {
            dx = "";
            cx = "";
        } else {
            dx = "data-";
            cx = "no-src lazyload";
        }
        // console.log(product_image[img].images);

        if(getFileExtension(product_image[img].images) ==="webp"){
            thumb = product_image[img].images;
        }else{
            thumb = product_image[img].sm_images;
        }

        img_slide+="<div className='swiper-slide'>";
        img_slide+="<a href='#'><img id='imgv' src='"+z+product_image[img].images+"' alt='"+product_title+"' height='557' width='557' className='img-fluid img-zoom'></a>";
        img_slide+="</div>";
        var tb =z+thumb;
        img_thumb+="<div className='swiper-slide'><img id='imgt' src='"+tb+"' alt='"+product_title+"' className='img-fluid' width='50' height='50' /></div>";

        $("#img_slide").html(img_slide);
        $("#img_thumb").html(img_thumb);
        $('#cartflag').html('');


    }

    //    $("img#imgv").attr("src",z+p_image);
    //    $("img#imgt").attr("src",z+p_image);
    $("#current_id").val(product_id);
    // window.history.replaceState("page2", "Title", a + product_obj.slug)
    var border =  $('#attributes'+group_id+' li.active_border');
    for(var i = 0; i < border.length;i++){
        if(border.length > 0){
            $(border[i]).removeClass("active_border");
        }
    }

    if(p!= ""){
        $("#"+p).html($('[id="'+c+'"]:last').html());
        group_2 = p.replace('attributes','');
    }
    $(e).addClass("active_border");
    $("#additional_attributes"+group_id+" p").text($(e).attr("value_title"));
    $("#variation_level"+group_id+"_value").val($(e).attr("value_title"));
    $("#variation_level"+group_id+"_value").attr("group",group_id);
    $("#variation_level2_value_title").html("");
    $("#variation_level"+group_id+"_value_title").html($(e).attr("value_title"));

    // if($("#variation_level"+group_2+"_value").val() != undefined){
    // $(".single-product-title").text(product_title +' '+$(e).attr("value_title")+' '+ $("#variation_level"+group_2+"_value").val());
    // }
    if(!mobileCheck()){
        var ez = new Swiper(".gallery-thumbs-mbl", {
            direction: "vertical",
            spaceBetween: 10,
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
            thumbs: {swiper: ez}

        });

        ez.update();
    }else{
        var em =  new Swiper("#product_mobile_slider", {
            lazy: !0,
            preloadImages: !0,
            slidesPerView: 1,
            spaceBetween: 3,
            pagination: {el: ".swiper-pagination", type: "fraction"},
            navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}
        })
        em.update();
    }
    $('.img-zoom').okzoom({
        width: 250,
        height: 250,
        round: true,
        background: "#fff",
        backgroundRepeat: "repeat",
        shadow: "0 0 5px #000",
    });
    var all_cats =  $('#g_categorys').val().substring(0, $('#g_categorys').val().length - 1);
    var incremental = parseInt($('#incremental').val());
    $('#incremental').val(++incremental);
    // var value_inc = parseInt(1);
    // value_inc = isNaN(value_inc) ? 0 : value_inc;
    // value_inc++;
    var event_id_val = $('#event_id').val();
    var event_id =parseInt(incremental)+event_id_val+"-ViewContent";
    "function" == typeof fbq &&  fbq('track', 'ViewContent', {
        content_name: product_title,
        content_category:all_cats.replaceAll('/'," > "),
        content_ids: id,
        content_type: 'product',
        value: price,
        currency: 'PKR'
    },{eventID:event_id});
    facebook_conversion_view_content(price,id,product_title,event_id);
}
function variation_level_2(e,c,p,group_id,product_id){
    if($("#clear_all").length <1) {
        $("#attributes_all").append("<div className='col-12'><a href='javascript:clear_all_btn()' id='clear_all' className='btn btn-sm btn-danger btn-link text-white my-2'>Clear</a></div>");
    }
    // if($("#clear_all_2").length <1) {
    //     $("#attributes" + group_id).append("<a href='javascript:clear_all_btn_2(`" + group_id + "`)' id='clear_all_2' className='btn btn-link text-dark'>clear</a>");
    // }
    var product_obj = $("#product_obj"+product_id).val(),
        product_obj = JSON.parse(product_obj.replaceAll("'",'"')),
        current_date = new Date().getTimestamp(),
        a =$("#url").val(),
        z =$("#img_url").val();
    var brand = product_obj.brand_title,
        selected_variant = $(e).attr("value_title"),
        id=product_obj.id,
        product_title = product_obj.title,
        manage_inventory = product_obj.manage_inventory,
        product_purchase_limit=product_obj.purchase_limit,
        product_qty = product_obj.product_qty,
        product_code = product_obj.product_code,
        product_price =currencyConverter(product_obj.price),
        product_discounted =currencyConverter(product_obj.discounted),
        product_percent =product_obj.percent,
        start_date =product_obj.start_date,
        end_date =product_obj.end_date,
        show_timer =product_obj.show_timer,
        model_no =product_obj.model_no,
        description =htmlspecialchars_decode(product_obj.description),
        specification =htmlspecialchars_decode(product_obj.specification),
        short_description =htmlspecialchars_decode(product_obj.short_description),
        product_main_image =product_obj.images,
        product_image = $("#variation_image"+product_id).val(),
        product_image = JSON.parse(product_image.replaceAll("'",'"'));
    if(product_price != 0){
        $(".discount-price").text("Rs. "+product_price);
        $(".percent").text(""+product_percent+"% Off");
    }else{
        $(".discount-price").text("");
        $(".percent").text("");
    }
    $("#g_brand").val(brand);
    $("#product_title").val(product_title);
    $(".single-product-title").text(product_title +' '+selected_variant);
    $("#g_qty").val(product_qty);
    $("#product_qty").val(product_qty);
    $("#product_purchase_limit").val(product_purchase_limit);
    $("#product_code").val(product_code);
    $("#g_variant").val(selected_variant);
    $("#model_no").text("Model Number: "+model_no);
    $("#product_description").html(description);
    $("#product_specification").html(specification);
    $("#product_short_description").html(short_description);
    var price=0;
    if(current_date >= start_date && current_date <= end_date && show_timer =="1"){
        price = product_discounted;
    }else{
        if(product_obj.discounted !=0 && product_obj.show_timer =="0"){
            price = product_discounted;
        }else{
            price = product_price;
        }
    }

    $("#product_price").val(price);
    $(".prices").text("Rs. " +price);
    var save_discount = product_price-product_discounted;
    $(".save_discount").text("Rs. " +save_discount);
    $("#product_image").val(product_main_image);
    var group_2="";
    var thumb="";
    var img_slide = "";
    var dx="";
    var cx = "";
    var img_thumb = "";
    for(var img = 0;img < product_image.length;img++){
        if (img === 0) {
            dx = "";
            cx = "";
        } else {
            dx = "data-";
            cx = "no-src lazyload";
        }
        // console.log(product_image[img].images);

        if(getFileExtension(product_image[img].images) ==="webp"){
            thumb = product_image[img].images;
        }else{
            thumb = product_image[img].sm_images;
        }

        img_slide+="<div className='swiper-slide'>";
        img_slide+="<a href='#'><img id='imgv' src='"+z+product_image[img].images+"' alt='"+product_title+"' height='557' width='557' className='img-fluid img-zoom'></a>";
        img_slide+="</div>";
        var tb =z+thumb;
        img_thumb+="<div className='swiper-slide'><img id='imgt' src='"+tb+"' alt='"+product_title+"' className='img-fluid' width='50' height='50' /></div>";

        $("#img_slide").html(img_slide);
        $("#img_thumb").html(img_thumb);
        $('#cartflag').html('');


    }

    // $("img#imgv").attr("src",z+p_image);
    // $("img#imgt").attr("src",z+p_image);
    $("#current_id").val(product_id);
    // window.history.replaceState("page2", "Title", a + product_obj.slug)
    var border =  $('#attributes'+group_id+' li.active_border');
    for(var i = 0; i < border.length;i++){
        if(border.length > 0){
            $(border[i]).removeClass("active_border");
        }
    }
    if(p!= ""){
        $("#"+p).html($('[id="'+c+'"]:last').html());
        group_2 = p.replace('attributes','');
    }else{
        group_2 = $("#"+$(".attributes")[0].value).val();
    }
    $(e).addClass("active_border");
    $("#additional_attributes"+group_id+" p").text($(e).attr("value_title"));
    $("#variation_level"+group_id+"_value").val($(e).attr("value_title"));
    $("#variation_level"+group_id+"_value").attr("group",group_id);
    $("#variation_level"+group_id+"_value_title").html($(e).attr("value_title"));

    if($("#variation_level"+group_2+"_value").val() != undefined){
        $(".single-product-title").text(product_title +' '+$("#variation_level"+group_2+"_value").val()+' '+ $(e).attr("value_title"));
    }
    if(!mobileCheck()) {
        var ez = new Swiper(".gallery-thumbs-mbl", {
            direction: "vertical",
            spaceBetween: 10,
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
            thumbs: {swiper: ez}

        });
        ez.update();
    }else{
        var em =  new Swiper("#product_mobile_slider", {
            lazy: !0,
            preloadImages: !0,
            slidesPerView: 1,
            spaceBetween: 3,
            pagination: {el: ".swiper-pagination", type: "fraction"},
            navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}
        })
        em.update();
    }
    $('.img-zoom').okzoom({
        width: 250,
        height: 250,
        round: true,
        background: "#fff",
        backgroundRepeat: "repeat",
        shadow: "0 0 5px #000",
    });
    var all_cats =  $('#g_categorys').val().substring(0, $('#g_categorys').val().length - 1);
    var incremental = parseInt($('#incremental').val());
    $('#incremental').val(++incremental);
    // var value_inc = parseInt(1);
    // value_inc = isNaN(value_inc) ? 0 : value_inc;
    // value_inc++;
    var event_id_val = $('#event_id').val();
    var event_id =parseInt(incremental)+event_id_val+"-ViewContent";
    "function" == typeof fbq && fbq('track', 'ViewContent', {
        content_name: product_title,
        content_category:all_cats.replaceAll('/'," > "),
        content_ids: id,
        content_type: 'product',
        value: price,
        currency: 'PKR'
    },{eventID:event_id});
    facebook_conversion_view_content(price,id,product_title,event_id);
}
function variation_level_btn(e,c,p,group_id,product_id,index){
    if($("#clear_all").length <1) {
        $("#attributes_all").append("<div className='col-12'><a href='javascript:clear_all_btn()' id='clear_all' className='btn btn-sm btn-danger btn-link text-white my-2'>Clear</a></div>");
    }
    var product_obj = $("#product_obj"+product_id).val(),
        product_obj = JSON.parse(product_obj.replaceAll("'",'"')),
        current_date = new Date().getTimestamp(),
        a =$("#url").val(),
        z =$("#img_url").val();
    var brand = product_obj.brand_title,
        selected_variant = $(e).attr("value_title"),
        id=product_obj.id,
        product_purchase_limit=product_obj.purchase_limit,
        product_title = product_obj.title,
        manage_inventory = product_obj.manage_inventory,
        product_qty = product_obj.product_qty,
        product_code = product_obj.product_code,
        product_price =currencyConverter(product_obj.price),
        product_discounted =currencyConverter(product_obj.discounted),
        product_percent =product_obj.percent,
        start_date =product_obj.start_date,
        end_date =product_obj.end_date,
        show_timer =product_obj.show_timer,
        model_no =product_obj.model_no,
        product_main_image =product_obj.images,
        product_image = $("#variation_image"+product_id).val(),
        product_image = JSON.parse(product_image.replaceAll("'",'"'));
    if(product_price != 0){
        $(".discount-price").text("Rs. "+product_price);
        $(".percent").text(""+product_percent+"% Off");
    }else{
        $(".discount-price").text("");
        $(".percent").text("");
    }
    $("#g_brand").val(brand);
    $("#product_title").val(product_title);
    $(".single-product-title").text(product_title);
    $("#g_qty").val(product_qty);
    $("#product_qty").val(product_qty);
    $("#product_purchase_limit").val(product_purchase_limit);
    $("#product_code").val(product_code);
    $("#g_variant").val(selected_variant);
    $("#model_no").text("Model Number: "+model_no);
    var price=0;
    if(current_date >= start_date && current_date <= end_date && show_timer =="1"){
        price = product_discounted;
    }else{
        if(product_obj.discounted !=0 && product_obj.show_timer =="0"){
            price = product_discounted;
        }else{
            price = product_price;
        }
    }

    $("#product_price").val(price);
    $(".prices").text("Rs. " +price);
    var save_discount = product_price-product_discounted;
    $(".save_discount").text("Rs. " +save_discount);
    $("#product_image").val(product_main_image);
    var thumb="";
    var img_slide = "";
    var dx="";
    var cx = "";
    var img_thumb = "";
    for(var img = 0;img < product_image.length;img++){
        if (img === 0) {
            dx = "";
            cx = "";
        } else {
            dx = "data-";
            cx = "no-src lazyload";
        }
        // console.log(product_image[img].images);

        if(getFileExtension(product_image[img].images) ==="webp"){
            thumb = product_image[img].images;
        }else{
            thumb = product_image[img].sm_images;
        }

        img_slide+="<div className='swiper-slide'>";
        img_slide+="<a href='#'><img id='imgv' src='"+z+product_image[img].images+"' alt='"+product_title+"' height='557' width='557' className='img-fluid img-zoom'></a>";
        img_slide+="</div>";
        var tb =z+thumb;
        img_thumb+="<div className='swiper-slide'><img id='imgt' src='"+tb+"' alt='"+product_title+"' className='img-fluid' width='50' height='50' /></div>";

        $("#img_slide").html(img_slide);
        $("#img_thumb").html(img_thumb);
        $('#cartflag').html('');


    }
    if(p!= ""){
        $("#"+p).html($("#"+c).html());
    }
    // $("img#imgv").attr("src",z+p_image);
    // $("img#imgt").attr("src",z+p_image);
    $("#current_id").val(product_id);
    // window.history.replaceState("page2", "Title", a + product_obj.slug)
    var border = $('#attributes' + group_id + ' li.active_border');
    border.removeClass("active_border"); // Remove active_border class from all elements

    console.log($(e));
    $(e).addClass("active_border"); // Add active_border class to the clicked element

    $("#additional_attributes"+group_id+" p").text($(e).attr("value_title"));
    $("#variation_level"+index+"_value").val($(e).attr("value_title"));
    $("#variation_level"+index+"_value").attr("group",group_id);
    $("#variation_level"+index+"_value_title").html("");
    $("#variation_level"+index+"_value_title").html($(e).attr("value_title"));
    if(!mobileCheck()){
        var ez = new Swiper(".gallery-thumbs-mbl", {
            spaceBetween: 10,
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
            thumbs: {swiper: ez}

        });
        ez.update();
    }else{
        var em =  new Swiper("#product_mobile_slider", {
            lazy: !0,
            preloadImages: !0,
            slidesPerView: 1,
            spaceBetween: 3,
            pagination: {el: ".swiper-pagination", type: "fraction"},
            navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}
        })
        em.update();
    }
    $('.img-zoom').okzoom({
        width: 250,
        height: 250,
        round: true,
        background: "#fff",
        backgroundRepeat: "repeat",
        shadow: "0 0 5px #000",
    });
    var all_cats =  $('#g_categorys').val().substring(0, $('#g_categorys').val().length - 1);
    var incremental = parseInt($('#incremental').val());
    $('#incremental').val(++incremental);
    // var value_inc = parseInt(1);
    // value_inc = isNaN(value_inc) ? 0 : value_inc;
    // value_inc++;
    var event_id_val = $('#event_id').val();
    var event_id =parseInt(incremental)+event_id_val+"-ViewContent";
    "function" == typeof fbq && fbq('track', 'ViewContent', {
        content_name: product_title,
        content_category:all_cats.replaceAll('/'," > "),
        content_ids: id,
        content_type: 'product',
        value: price,
        currency: 'PKR'
    },{eventID:event_id});
    facebook_conversion_view_content(price,id,product_title,event_id);
}
function variation_level_1_dropdown(e,c,p,group_id,product_id){

    // changeslideto(e,4);
    var product_obj = $("#product_obj"+product_id).val(),
        product_obj = JSON.parse(product_obj.replaceAll("'",'"')),
        current_date = new Date().getTimestamp(),
        a =$("#url").val(),
        z =$("#img_url").val();
    var brand = product_obj.brand_title,
        selected_variant = $(e).attr("value_title"),
        id=product_obj.id,
        product_purchase_limit=product_obj.purchase_limit,
        product_title = product_obj.title,
        manage_inventory = product_obj.manage_inventory,
        product_qty = product_obj.product_qty,
        product_code = product_obj.product_code,
        product_price =currencyConverter(product_obj.price),
        product_discounted =currencyConverter(product_obj.discounted),
        product_percent =product_obj.percent,
        start_date =product_obj.start_date,
        end_date =product_obj.end_date,
        show_timer =product_obj.show_timer,
        model_no =product_obj.model_no,
        product_main_image =product_obj.images,
        product_image = $("#variation_image"+product_id).val(),
        product_image = JSON.parse(product_image.replaceAll("'",'"'));
    if(product_price != 0){
        $(".discount-price").text("Rs. "+product_price);
        $(".percent").text(""+product_percent+"% Off");
    }else{
        $(".discount-price").text("");
        $(".percent").text("");
    }
    $("#g_brand").val(brand);
    $("#product_title").val(product_title);
    $(".single-product-title").text(product_title);
    $("#g_qty").val(product_qty);
    $("#product_qty").val(product_qty);
    $("#product_purchase_limit").val(product_purchase_limit);
    $("#product_code").val(product_code);
    $("#g_variant").val(selected_variant);
    $("#model_no").text("Model Number: "+model_no);
    var price=0;
    if(current_date >= start_date && current_date <= end_date && show_timer =="1"){
        price = product_discounted;
    }else{
        if(product_obj.discounted !=0 && product_obj.show_timer =="0"){
            price = product_discounted;
        }else{
            price = product_price;
        }
    }

    $("#product_price").val(price);
    $(".prices").text("Rs. " +price);
    $("#product_image").val(product_main_image);
    var thumb="";
    var img_slide = "";
    var dx="";
    var cx = "";
    var img_thumb = "";
    for(var img = 0;img < product_image.length;img++){
        if (img === 0) {
            dx = "";
            cx = "";
        } else {
            dx = "data-";
            cx = "no-src lazyload";
        }
        // console.log(product_image[img].images);

        if(getFileExtension(product_image[img].images) ==="webp"){
            thumb = product_image[img].images;
        }else{
            thumb = product_image[img].sm_images;
        }

        img_slide+="<div className='swiper-slide'>";
        img_slide+="<a href='#'><img id='imgv' src='"+z+product_image[img].images+"' alt='"+product_title+"' height='557' width='557' className='img-fluid img-zoom'></a>";
        img_slide+="</div>";
        var tb =z+thumb;
        img_thumb+="<div className='swiper-slide'><img id='imgt' src='"+tb+"' alt='"+product_title+"' className='img-fluid' width='50' height='50' /></div>";

        $("#img_slide").html(img_slide);
        $("#img_thumb").html(img_thumb);
        $('#cartflag').html('');


    }

    //    $("img#imgv").attr("src",z+p_image);
    //    $("img#imgt").attr("src",z+p_image);
    $("#current_id").val(product_id);
    // window.history.replaceState("page2", "Title", a + product_obj.slug)
    var border =  $('#attributes'+group_id+' option.active_border');
    for(var i = 0; i < border.length;i++){
        if(border.length > 0){
            $(border[i]).removeClass("active_border");
        }
    }

    if(p!= ""){
        $("#"+p).html($('[id="'+c+'"]:last').html());
    }
    if($(e).find('option:selected').attr("value_title") != '') {
        $(e).find('option:selected').addClass("active_border");
    }
    $("#additional_attributes"+group_id+" p").text($(e).find('option:selected').attr("value_title"));
    $("#variation_level1_value").val($(e).find('option:selected').attr("value_title"));
    $("#variation_level1_value").attr("group",group_id);

    $("#variation_level"+group_id+"_value_title").html($(e).find('option:selected').attr("value_title"));
    if(!mobileCheck()){
        var ez = new Swiper(".gallery-thumbs-mbl", {
            spaceBetween: 10,
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
            thumbs: {swiper: ez}

        });

        ez.update();
    }else{
        var em =  new Swiper("#product_mobile_slider", {
            lazy: !0,
            preloadImages: !0,
            slidesPerView: 1,
            spaceBetween: 3,
            pagination: {el: ".swiper-pagination", type: "fraction"},
            navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}
        })
        em.update();
    }
    $('.img-zoom').okzoom({
        width: 250,
        height: 250,
        round: true,
        background: "#fff",
        backgroundRepeat: "repeat",
        shadow: "0 0 5px #000",
    });
    var all_cats =  $('#g_categorys').val().substring(0, $('#g_categorys').val().length - 1);
    var incremental = parseInt($('#incremental').val());
    $('#incremental').val(++incremental);
    // var value_inc = parseInt(1);
    // value_inc = isNaN(value_inc) ? 0 : value_inc;
    // value_inc++;
    var event_id_val = $('#event_id').val();
    var event_id =parseInt(incremental)+event_id_val+"-ViewContent";
    "function" == typeof fbq &&  fbq('track', 'ViewContent', {
        content_name: product_title,
        content_category:all_cats.replaceAll('/'," > "),
        content_ids: id,
        content_type: 'product',
        value: price,
        currency: 'PKR'
    },{eventID:event_id});
    facebook_conversion_view_content(price,id,product_title,event_id);
}
function variation_level_2_dropdown(e,c,p,group_id,product_id){
    console.log(c);
    console.log(p);
    if($("#clear_all").length <1) {
        $("#attributes_all").append("<div className='col-12'><a href='javascript:clear_all_btn()' id='clear_all' className='btn btn-sm btn-danger btn-link text-white my-2'>Clear</a></div>");
    }
    // if($("#clear_all_2").length <1) {
    //     $("#attributes" + group_id).append("<a href='javascript:clear_all_btn_2(`" + group_id + "`)' id='clear_all_2' className='btn btn-link text-dark'>clear</a>");
    // }
    var product_obj = $("#product_obj"+product_id).val(),
        product_obj = JSON.parse(product_obj.replaceAll("'",'"')),
        current_date = new Date().getTimestamp(),
        a =$("#url").val(),
        z =$("#img_url").val();
    var brand = product_obj.brand_title,
        selected_variant = $(e).attr("value_title"),
        id=product_obj.id,
        product_title = product_obj.title,
        manage_inventory = product_obj.manage_inventory,
        product_purchase_limit=product_obj.purchase_limit,
        product_qty = product_obj.product_qty,
        product_code = product_obj.product_code,
        product_price =currencyConverter(product_obj.price),
        product_discounted =currencyConverter(product_obj.discounted),
        product_percent =product_obj.percent,
        start_date =product_obj.start_date,
        end_date =product_obj.end_date,
        show_timer =product_obj.show_timer,
        model_no =product_obj.model_no,
        product_main_image =product_obj.images,
        product_image = $("#variation_image"+product_id).val(),
        product_image = JSON.parse(product_image.replaceAll("'",'"'));
    if(product_price != 0){
        $(".discount-price").text("Rs. "+product_price);
        $(".percent").text(""+product_percent+"% Off");
    }else{
        $(".discount-price").text("");
        $(".percent").text("");
    }
    $("#g_brand").val(brand);
    $("#product_title").val(product_title);
    $(".single-product-title").text(product_title);
    $("#g_qty").val(product_qty);
    $("#product_qty").val(product_qty);
    $("#product_purchase_limit").val(product_purchase_limit);
    $("#product_code").val(product_code);
    $("#g_variant").val(selected_variant);
    $("#model_no").text("Model Number: "+model_no);
    var price=0;
    if(current_date >= start_date && current_date <= end_date && show_timer =="1"){
        price = product_discounted;
    }else{
        if(product_obj.discounted !=0 && product_obj.show_timer =="0"){
            price = product_discounted;
        }else{
            price = product_price;
        }
    }

    $("#product_price").val(price);
    $(".prices").text("Rs. " +price);
    $("#product_image").val(product_main_image);
    var thumb="";
    var img_slide = "";
    var dx="";
    var cx = "";
    var img_thumb = "";
    for(var img = 0;img < product_image.length;img++){
        if (img === 0) {
            dx = "";
            cx = "";
        } else {
            dx = "data-";
            cx = "no-src lazyload";
        }
        // console.log(product_image[img].images);

        if(getFileExtension(product_image[img].images) ==="webp"){
            thumb = product_image[img].images;
        }else{
            thumb = product_image[img].sm_images;
        }

        img_slide+="<div className='swiper-slide'>";
        img_slide+="<a href='#'><img id='imgv' src='"+z+product_image[img].images+"' alt='"+product_title+"' height='557' width='557' className='img-fluid img-zoom'></a>";
        img_slide+="</div>";
        var tb =z+thumb;
        img_thumb+="<div className='swiper-slide'><img id='imgt' src='"+tb+"' alt='"+product_title+"' className='img-fluid' width='50' height='50' /></div>";

        $("#img_slide").html(img_slide);
        $("#img_thumb").html(img_thumb);
        $('#cartflag').html('');


    }
    if(p!= ""){
        $("#"+p).html($('[id="'+c+'"]:last').html());
    }
    // $("img#imgv").attr("src",z+p_image);
    // $("img#imgt").attr("src",z+p_image);
    $("#current_id").val(product_id);
    // window.history.replaceState("page2", "Title", a + product_obj.slug)
    var border =  $('#attributes'+group_id+' option.active_border');
    for(var i = 0; i < border.length;i++){
        if(border.length > 0){
            $(border[i]).removeClass("active_border");
        }
    }
    if($(e).find('option:selected').attr("value_title") != '') {
        $(e).find('option:selected').addClass("active_border");
    }
    $("#additional_attributes"+group_id+" p").text($(e).find('option:selected').attr("value_title"));
    $("#variation_level2_value").val($(e).find('option:selected').attr("value_title"));
    $("#variation_level2_value").attr("group",group_id);

    $("#variation_level"+group_id+"_value_title").html($(e).find('option:selected').attr("value_title"));
    if(!mobileCheck()) {
        var ez = new Swiper(".gallery-thumbs-mbl", {
            spaceBetween: 10,
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
            thumbs: {swiper: ez}

        });
        ez.update();
    }else{
        var em =  new Swiper("#product_mobile_slider", {
            lazy: !0,
            preloadImages: !0,
            slidesPerView: 1,
            spaceBetween: 3,
            pagination: {el: ".swiper-pagination", type: "fraction"},
            navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"}
        })
        em.update();
    }
    $('.img-zoom').okzoom({
        width: 250,
        height: 250,
        round: true,
        background: "#fff",
        backgroundRepeat: "repeat",
        shadow: "0 0 5px #000",
    });
    var all_cats =  $('#g_categorys').val().substring(0, $('#g_categorys').val().length - 1);
    var incremental = parseInt($('#incremental').val());
    $('#incremental').val(++incremental);
    // var value_inc = parseInt(1);
    // value_inc = isNaN(value_inc) ? 0 : value_inc;
    // value_inc++;
    var event_id_val = $('#event_id').val();
    var event_id =parseInt(incremental)+event_id_val+"-ViewContent";
    "function" == typeof fbq && fbq('track', 'ViewContent', {
        content_name: product_title,
        content_category:all_cats.replaceAll('/'," > "),
        content_ids: id,
        content_type: 'product',
        value: price,
        currency: 'PKR'
    },{eventID:event_id});
    facebook_conversion_view_content(price,id,product_title,event_id);
}
function conversion_facebook_addtocart(value,content_ids,content_name){
    let event_time = $('#event_time').val(),
        client_user_agent = $('#client_user_agent').val(),
        event_id = $('#event_id').val(),
        ip_address = $('#ip_address').val();
    let fb_event_credential = typeof $('#fb_event_credential').val() != 'undefined' ? JSON.parse($('#fb_event_credential').val()) : null;
    var test_event_code = "";
    if(typeof $('#fb_event_credential').val() != 'undefined' && fb_event_credential.test_event_code && fb_event_credential.test_event_code != null && fb_event_credential.test_event_code != ""){
        test_event_code = "&test_event_code="+fb_event_credential.test_event_code
    }
    // console.log('https://graph.facebook.com/v11.0/'+fb_event_credential.event_id+'/events?data=[{"event_name":"AddToCart","event_time":"'+event_time+'","action_source":"website","event_id":"'+event_id+'-AddToCart","user_data":{"client_user_agent":"'+client_user_agent+'","client_ip_address":"'+ip_address+'"},"custom_data":{"currency":"PKR","value":"'+value+'","content_type":"product","content_name":"'+content_name+'",content_ids:"'+content_ids+'"}}]'+test_event_code+'&access_token='+fb_event_credential.access_token+'');
    let fbp="";
    let fbc="";

    getCookie("_fbc") != "" ?  fbc =',"fbc":"'+getCookie("_fbc")+'"' : fbc = "";
    getCookie("_fbp") != "" ?  fbp = ',"fbp":"'+getCookie("_fbp")+'"' : fbp = "";
    if(fb_event_credential) {
        if ($('#fb_event_credential').val() != '' && typeof $('#fb_event_credential').val() != 'undefined' && fb_event_credential.event_id != null && fb_event_credential.access_token != null) {
            let settings = {
                "url": 'https://graph.facebook.com/v11.0/' + fb_event_credential.event_id + '/events?data=[{"event_name":"AddToCart","event_time":"' + event_time + '","action_source":"website","event_id":"' + event_id + '-AddToCart","user_data":{"client_user_agent":"' + client_user_agent + '","client_ip_address":"' + ip_address + '"' + fbc + '' + fbp + '},"custom_data":{"currency":"PKR","value":"' + value + '","content_type":"product","content_name":"' + content_name + '",content_ids:"' + content_ids + '"}}]' + test_event_code + '&access_token=' + fb_event_credential.access_token + '',
                "method": "POST",
                "timeout": 0,
            };

            $.ajax(settings).done(function (response) {
                console.log(response);
            });
        }
    }
}
function facebook_conversion_view_content(value,content_ids,content_name,event_id=null){
    let event_time = $('#event_time').val(),
        client_user_agent = $('#client_user_agent').val(),
        ip_address = $('#ip_address').val();
    let evid= "";
    if(event_id){
        evid= event_id;
    }else{
        evid= $('#event_id').val()+"-ViewContent";
    }


    let fb_event_credential = typeof $('#fb_event_credential').val() != 'undefined' ? JSON.parse($('#fb_event_credential').val()) : null;
    var test_event_code = "";
    if(typeof $('#fb_event_credential').val() != 'undefined' && fb_event_credential.test_event_code && fb_event_credential.test_event_code != null && fb_event_credential.test_event_code != ""){
        test_event_code = "&test_event_code="+fb_event_credential.test_event_code
    }
    // console.log();
    let fbp="";
    let fbc="";

    getCookie("_fbc") != "" ?  fbc =',"fbc":"'+getCookie("_fbc")+'"' : fbc = "";
    getCookie("_fbp") != "" ?  fbp = ',"fbp":"'+getCookie("_fbp")+'"' : fbp = "";
    if($('#fb_event_credential').val() != '' && typeof $('#fb_event_credential').val() != 'undefined'  && fb_event_credential.event_id != null && fb_event_credential.access_token != null){
        let settings = {
            "url": 'https://graph.facebook.com/v11.0/'+fb_event_credential.event_id+'/events?data=[{"event_name":"ViewContent","event_time":"'+event_time+'","action_source":"website","event_id":"'+evid+'","user_data":{"client_user_agent":"'+client_user_agent+'","client_ip_address":"'+ip_address+'"'+fbc+''+fbp+'},"custom_data":{"currency":"PKR","value":"'+value+'","content_type":"product","content_name":"'+content_name+'",content_ids:"'+content_ids+'"}}]'+test_event_code+'&access_token='+fb_event_credential.access_token+'',
            "method": "POST",
            "timeout": 0,
        };
// console.log(settings.url);
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }
}
function conversion_facebook_addtocart_itembox(value,content_ids,content_name){
    let event_time = $('#event_time'+content_ids).val(),
        client_user_agent = $('#client_user_agent'+content_ids).val(),
        event_id = $('#event_id'+content_ids).val(),
        ip_address = $('#ip_address'+content_ids).val();
    let fb_event_credential = typeof $('#fb_event_credential'+content_ids).val() != 'undefined' ? JSON.parse($('#fb_event_credential'+content_ids).val()) : null;
    var test_event_code = "";
    if(typeof $('#fb_event_credential'+content_ids).val() != 'undefined' && fb_event_credential.test_event_code && fb_event_credential.test_event_code != null && fb_event_credential.test_event_code != ""){
        test_event_code = "&test_event_code="+fb_event_credential.test_event_code
    }
    // console.log('https://graph.facebook.com/v11.0/'+fb_event_credential.event_id+'/events?data=[{"event_name":"AddToCart","event_time":"'+event_time+'","action_source":"website","event_id":"'+event_id+'-AddToCart","user_data":{"client_user_agent":"'+client_user_agent+'","client_ip_address":"'+ip_address+'"},"custom_data":{"currency":"PKR","value":"'+value+'","content_type":"product","content_name":"'+content_name+'",content_ids:"'+content_ids+'"}}]'+test_event_code+'&access_token='+fb_event_credential.access_token+'');
    let fbp="";
    let fbc="";

    getCookie("_fbc") != "" ?  fbc =',"fbc":"'+getCookie("_fbc")+'"' : fbc = "";
    getCookie("_fbp") != "" ?  fbp = ',"fbp":"'+getCookie("_fbp")+'"' : fbp = "";
    if(fb_event_credential) {
        if ($('#fb_event_credential'+content_ids).val() != '' && typeof $('#fb_event_credential'+content_ids).val() != 'undefined' && fb_event_credential.event_id != null && fb_event_credential.access_token != null) {
            let settings = {
                "url": 'https://graph.facebook.com/v11.0/' + fb_event_credential.event_id + '/events?data=[{"event_name":"AddToCart","event_time":"' + event_time + '","action_source":"website","event_id":"' + event_id + '-AddToCart","user_data":{"client_user_agent":"' + client_user_agent + '","client_ip_address":"' + ip_address + '"' + fbc + '' + fbp + '},"custom_data":{"currency":"PKR","value":"' + value + '","content_type":"product","content_name":"' + content_name + '",content_ids:"' + content_ids + '"}}]' + test_event_code + '&access_token=' + fb_event_credential.access_token + '',
                "method": "POST",
                "timeout": 0,
            };

            $.ajax(settings).done(function (response) {
                console.log(response);
            });
        }
    }
}
function facebook_conversion_view_content_itembox(value,content_ids,content_name,event_id=null){
    let event_time = $('#event_time'+content_ids).val(),
        client_user_agent = $('#client_user_agent'+content_ids).val(),
        ip_address = $('#ip_address'+content_ids).val();
    let evid= "";
    if(event_id){
        evid= event_id;
    }else{
        evid= $('#event_id'+content_ids).val()+"-ViewContent";
    }


    let fb_event_credential = typeof $('#fb_event_credential'+content_ids).val() != 'undefined' ? JSON.parse($('#fb_event_credential'+content_ids).val()) : null;
    var test_event_code = "";
    if(typeof $('#fb_event_credential'+content_ids).val() != 'undefined' && fb_event_credential.test_event_code && fb_event_credential.test_event_code != null && fb_event_credential.test_event_code != ""){
        test_event_code = "&test_event_code="+fb_event_credential.test_event_code
    }
    // console.log();
    let fbp="";
    let fbc="";

    getCookie("_fbc") != "" ?  fbc =',"fbc":"'+getCookie("_fbc")+'"' : fbc = "";
    getCookie("_fbp") != "" ?  fbp = ',"fbp":"'+getCookie("_fbp")+'"' : fbp = "";
    if($('#fb_event_credential'+content_ids).val() != '' && typeof $('#fb_event_credential'+content_ids).val() != 'undefined'  && fb_event_credential.event_id != null && fb_event_credential.access_token != null){
        let settings = {
            "url": 'https://graph.facebook.com/v11.0/'+fb_event_credential.event_id+'/events?data=[{"event_name":"ViewContent","event_time":"'+event_time+'","action_source":"website","event_id":"'+evid+'","user_data":{"client_user_agent":"'+client_user_agent+'","client_ip_address":"'+ip_address+'"'+fbc+''+fbp+'},"custom_data":{"currency":"PKR","value":"'+value+'","content_type":"product","content_name":"'+content_name+'",content_ids:"'+content_ids+'"}}]'+test_event_code+'&access_token='+fb_event_credential.access_token+'',
            "method": "POST",
            "timeout": 0,
        };
// console.log(settings.url);
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }
}

function labnolIframe(div) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + div.dataset.id + '?autoplay=1&rel=0&mute=1');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '1');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
    div.parentNode.replaceChild(iframe, div);
}

function initYouTubeVideos() {
    var playerElements = document.getElementsByClassName('youtube-player');
    for (var n = 0; n < playerElements.length; n++) {
        var videoId = playerElements[n].dataset.id;
        var div = document.createElement('div');
        div.setAttribute('data-id', videoId);
        var thumbNode = document.createElement('img');
        thumbNode.src = '//i.ytimg.com/vi/ID/hqdefault.jpg'.replace('ID', videoId);
        div.appendChild(thumbNode);
        var playButton = document.createElement('div');
        playButton.setAttribute('class', 'play');
        div.appendChild(playButton);
        div.onClick = function () {
            labnolIframe(this);
        };
        playerElements[n].appendChild(div);
    }
}
function submit_claim(){

    let url =  $('#url').val();
    let $form = $('#claim_form')[0];
    $('#submit').prop('disabled', true);
    let $formData = new FormData($form);
// console.log(window.parent.tinymce.get('issue_detail').getContent());
//     let issue_detail= window.parent.tinymce.get('issue_detail').getContent();
//     $formData.append("issue_detail",issue_detail);
    $formData.append('submit',true);
    $.ajax({
        url: url+'claims/add',
        type: 'POST',
        data: $formData,
        dataType: 'html',
        contentType: false,
        processData: false,
        success: function ($data) {
            var result = JSON.parse($data);
            console.log(result.status);
            if (result.status){
                $('#claim_flag').html("<div className='alert alert-success'>"+result.message+"</div>");
                $("HTML").animate({
                    scrollTop: $("#claim_flag").offset().top
                }, 1e3);
                $('#claim_form')[0].reset();
            }else{
                $('#claim_flag').html("<div className='alert alert-danger'>"+result.message+"</div>");
                $("HTML").animate({
                    scrollTop: $("#claim_flag").offset().top
                }, 1e3);
                $('#submit').prop('disabled', false);
                grecaptcha.reset();
            }
        },
    });

}
document.addEventListener('DOMContentLoaded', initYouTubeVideos);
function currencyConverter(currency_input){
    var currency_output = currency_input;
    var currency_rate = $('#currencyConverter').val();
    if(currency_rate != ''){
        var currency_output = currency_input * currency_rate;
    }
    return currency_output;
}
function setCookie(e, t, a) {
    const l = new Date;
    l.setTime(l.getTime() + 24 * a * 60 * 60 * 1e3);
    let r = "expires=" + l.toUTCString();
    document.cookie = e + "=" + t + ";" + r + ";path=/"
}

function deleteCookie(e) {
    const t = new Date;
    t.setTime(t.getTime() + 864e5);
    let a = "expires=" + t.toUTCString();
    document.cookie = e + "=;" + a + ";path=/"
}

// function getCookie(e) {
//     let t = e + "=", a = decodeURIComponent(document.cookie).split(";");
//     for (let e = 0; e < a.length; e++) {
//         let l = a[e];
//         for (; " " == l.charAt(0);) l = l.substring(1);
//         if (0 == l.indexOf(t)) return l.substring(t.length, l.length)
//     }
//     return ""
// }

function closeDownloadPop() {
    deleteCookie("user_cookie_consent"), setCookie("user_cookie_consent", 1, 30), $("#downloadAppPop").hide("slow")
}
setInterval(function () {
    "" != getCookie("user_cookie_consent") ? $("#downloadAppPop").hide("slow") : $("#downloadAppPop").show("slow")
}, 5e3);

$(function () {
    var e = $(".lrg-logo");
    $(window).scroll(function () {
        $(window).scrollTop() >= 100
            ? e.hasClass("sml-logo") || (e.hide(), e.removeClass("lrg-logo").addClass("sml-logo").fadeIn("fast"), $(".sticky-top").removeClass("img-gif").fadeIn("slow"))
            : e.hasClass("lrg-logo") || (e.hide(), e.removeClass("sml-logo").addClass("lrg-logo").fadeIn("fast"), $(".sticky-top").addClass("img-gif").fadeIn("slow"));
    });
})

function add_to_cart_addon(id){
    var url = $("#url").val(),
        t = id,
        a = $("#addon_title" + t).text(),
        o = $("#addon_image" + t).attr('src'),
        n =  $("#addon_bqty"+t).val() != undefined ? $("#addon_bqty"+t).val() : 1;

    $.post(url + "general_functions/add_to_cart", {
        id: t,
        title: a,
        qty: n,
        image: o.replace($('#img_url').val(),''),
    }, function (e) {
        cart_effects();

    });

}

function is_cart(){
    var output = 0;
    var cart_items =JSON.parse(localStorage.getItem('products'))
    if (cart_items != null && cart_items.length > 0) {
        output = 1;
    }
    return output;
}

function htmlspecialchars_decode(string) {
    if(string != null){
        var entities = [
            ['&amp;', '&'],
            ['&lt;', '<'],
            ['&gt;', '>'],
            ['&quot;', '"'],
            ['&#039;', "'"]
            // Add more HTML entities and their corresponding characters if needed
        ];

        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            var regex = new RegExp(entity[0], 'g');
            string = string.replace(regex, entity[1]);
        }
    }else{
        string='';
    }
    return string;
}