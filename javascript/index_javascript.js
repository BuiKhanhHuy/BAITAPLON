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
        if ($(this).scrollTop() > chieucao) {
            $('#nav_menu').addClass("permanent"); // add class
        } else {
            $('#nav_menu').removeClass("permanent"); // remove class
        }
    })
})

/*bang thong tin lien he*/
$(document).ready(function() {
        $('.bubbles-zalo').hover(function() {
            $('.bubbles-zalo').css({ "right": "0px", "background-color": "#00e600" })
        }, function() {
            $('.bubbles-zalo').css({ "right": "-128px", "background-color": "#ffa500" })
        });
        $('.bubbles-mesenge').hover(function() {
            $('.bubbles-mesenge').css({ "right": "0px", "background-color": "#00e600" })
        }, function() {
            $('.bubbles-mesenge').css({ "right": "-128px", "background-color": "#ffa500" })
        });
        $('.bubbles-mail').hover(function() {
            $('.bubbles-mail').css({ "right": "0px", "background-color": "#00e600" })
        }, function() {
            $('.bubbles-mail').css({ "right": "-128px", "background-color": "#ffa500" })
        });
        $('.bubbles-phone').hover(function() {
            $('.bubbles-phone').css({ "right": "0px", "background-color": "#00e600" })
        }, function() {
            $('.bubbles-phone').css({ "right": "-128px", "background-color": "#ffa500" })
        });

    })
    // neu hover zalo thi thay doi css nguoc lai la ban dau, nguoc lại nua là tới mesenge cũng tương tự lặp lại