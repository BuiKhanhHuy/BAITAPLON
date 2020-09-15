/* tạo nút back to top*/
$(document).ready(function() {
    $('#backtop').hide(); // ẩn nút go-to-top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) { //thực hiện lệnh điều kiện Khi lăn chuột xuống dưới hơn 100px
            $('#backtop').slideDown(300); //Xuất hiện nút
        } else {
            $('#backtop').fadeOut(300); //Ngược lại thì ẩn nút
        }
    });
    $('#backtop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800); //Animation giúp hoạt ảnh scroll ngược lên đầu trang sẽ mượt hơn
    });
});



/*tạo hieu ung menu*/
$(document).ready(function() {
    var chieucao;
    var t = document.getElementsByTagName("header").value;
    if (t == undefined) { // kiem tra xem trang co ton tai the header hay khong
        chieucao = parseFloat($("#nav_menu").height()); // khong co ->trang con ->lay chieu cao the nav de xu lí
    } else {
        chieucao = parseFloat($("header").height()); // co -> trang chu ->lay chieu vao the header xu li
    }
    $(window).scroll(function() {
        if ($(this).scrollTop() >= chieucao + 1) {
            $('#nav_menu').addClass("permanent"); // add class
        } else {
            $('#nav_menu').removeClass("permanent"); // remove class
        }
    })
})


/* tao hiệu ứng bong bóng thông tin */

$(window).ready(function() {
    function bongbong() {
        var t = $('.bubbles-zalo').css("padding");
        if (t == '5px') {
            $('.bubbles-zalo').animate({ "padding": "15px" }, 1000, bongbong());
        } else
            $('.bubbles-zalo').animate({ "padding": "5px" }, 1000, bongbong());
    }
})

/* form hỗ trợ khách hàng */
$(document).ready(function() {
    $('#button-image-o').click(function() {
        $('.form-support').animate({ "left": "0vw" }, 1000)
        $('.knoto').css({ "z-index": "-1" });
        $('.knotk').css({ "z-index": "1" });
    })
    $('#button-image-x').click(function() {
        $('.form-support').animate({ "left": "-31.5vw" }, 1000)
        $('.knoto').css({ "z-index": "1" });
        $('.knotk').css({ "z-index": "-1" });
    })
})