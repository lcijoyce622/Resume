var skillArray = [
    { title: 'JAVA', context: '-在校期間使用的語言</br>-學習演算法、資料結構等課程</br>-刷leetcode解題' },
    { title: 'Android', context: '-撰寫畢業專題line up</br>-使用語言Java</br>-負責客戶端前端功能撰寫' },
    { title: 'JavaScript', context: '-撰寫專題山野閃靈</br>-個人履歷介紹網站</br>-負責網頁前端及整合' },
    { title: 'HTML', context: '-撰寫專題山野閃靈</br>-個人履歷介紹網站' },
    { title: 'JQuery', context: '-更輕鬆方便的製作網站功能</br>-使用jquery套件' },
    { title: 'MySQL', context: '-撰寫基本語法</br>-學校課程使用</br>-專案使用phpmyadmin建立資料庫' },
    { title: 'PHP', context: '-連結後端資料庫</br>-過濾資料避免瀏覽器負荷過大' },
    { title: 'GIT', context: '-版本控制</br>-Github專案練習' },
    { title: 'BootStrap', context: '-統一網站風格樣式</br>-更加流暢的製作動畫效果</br>-RWD響應式網頁設計' },
    { title: 'SCSS/CSS', context: '-美化網頁<br>-個人化的設計<br>-簡單動畫特效' },
    { title: 'Illustrator', context: '-製作wireframe、<br>-設計icon、名片等物件' },
    { title: 'PhotoShop', context: '-matte painting<br>-修圖、繪畫、mockup' }
]



var v = skillArray.length;
var count = 1;


for (let i = 0; i < skillArray.length; i++) {

    if (v > 0) {
        $('.cardpool').append('<div class=" row row' + (i + 1) + ' justify-content-around"></div>');
        v = v - 3;
    }
    if (i > 2 && i % 3 == 0) {
        count++;
    }
    $('.row' + count).append('<div class="card' + (i + 1) + ' card col-md-12 col-lg"data-toggle="collapse" href="#card' + (i + 1) + '" role="button"  aria-controls="card' + (i + 1) + '"><div class="front"><h2 class="card-title">' + skillArray[i].title + '</h2></div><div class="collapse multi-collapse" id="card' + (i + 1) + '"><div class="card-body back text-center"><p class="card-text">' + skillArray[i].context + '</p></div></div></div>');

}

$(document).ready(function () {
    collapse();
    AOS.init();
});
$(window).resize(function () {
    collapse();
});


//=============控制card開關的事件==============//
function collapse() {
    if ($(window).width() > 991.98) {
        $('.collapse').addClass('show');
        $('.card').click(function (e) {
            if (
                $(this).find('.collapse').hasClass('show')
            ) {
                e.stopPropagation();
            }
        });
    }
    else if ($(window).width() < 991.98) {
        $('.collapse').removeClass('show');
        $('.card').unbind("click");
    }
}


var mybutton = document.getElementById("backtotop");
window.onscroll = function () { scrollFunction(); }
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}