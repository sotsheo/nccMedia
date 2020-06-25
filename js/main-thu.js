// Search
$(".search-icon").click(function() {
    $(".box-search-show").addClass("open");
});
$(".close").click(function() {
    $(".box-search-show").removeClass("open");
});
// Menu-bar-mobie
$(".menu-bar-lv-1").each(function(){
    $(this).find(".span-lv-1").click(function(){
        $(this).toggleClass('rotate-menu');
        $(this).parent().find(".menu-bar-lv-2").toggle(500);
    });
});
$(".menu-bar-lv-2").each(function(){
    $(this).find(".span-lv-2").click(function(){
        $(this).toggleClass('rotate-menu');
        $(this).parent().find(".menu-bar-lv-3").toggle(500);
    });
});
$(".shadow-open-menu").click(function() {
    $('.menu-bar-mobile').fadeOut();
    $(".shadow-open-menu").fadeOut();
    $(".iconmenu_").toggleClass("open");
    $(".hide-mobile-check").removeClass('show');
});
$(".iconmenu_").click(function() {
    $(this).toggleClass("open");
    $('.menu-bar-mobile').fadeToggle(500);
    $(".shadow-open-menu").fadeToggle(500);
});
//fiilter

$('.best-sale .nav-fiilter ul li').each(function(){
    $(this).click(function(){
        $('.best-sale .nav-fiilter ul li').removeClass('active');
        $(this).addClass('active');
    })
});
$('.product-new .nav-fiilter ul li').each(function(){
    $(this).click(function(){
        $('.product-new .nav-fiilter ul li').removeClass('active');
        $(this).addClass('active');
    })
});
$('.foods .nav-fiilter ul li').each(function(){
    $(this).click(function(){
        $('.foods .nav-fiilter ul li').removeClass('active');
        $(this).addClass('active');
    })
});
$('.product-baby .nav-fiilter ul li').each(function(){
    $(this).click(function(){
        $('.product-baby .nav-fiilter ul li').removeClass('active');
        $(this).addClass('active');
    })
});
$('.product-makeup .nav-fiilter ul li').each(function(){
    $(this).click(function(){
        $('.product-makeup .nav-fiilter ul li').removeClass('active');
        $(this).addClass('active');
    })
});
$('.houseware .nav-fiilter ul li').each(function(){
    $(this).click(function(){
        $('.houseware .nav-fiilter ul li').removeClass('active');
        $(this).addClass('active');
    })
});
$('.health .nav-fiilter ul li').each(function(){
    $(this).click(function(){
        $('.health .nav-fiilter ul li').removeClass('active');
        $(this).addClass('active');
    })
});

// login
$('.btn-login').click(function(){
    $('.popup-style-login').addClass('active');
    $('.popup-style-login .rigister, .popup-style-login .form-register').removeClass('active');
    $('.popup-style-login .login,  .popup-style-login .form-login').addClass('active');
    $('.menu-bar-mobile').hide();
})
$('.btn-register').click(function(){
    $('.popup-style-login').addClass('active');
    $('.popup-style-login .login,  .popup-style-login .form-login').removeClass('active');
    $('.popup-style-login .rigister, .popup-style-login .form-register').addClass('active');
    $('.menu-bar-mobile').hide();
})
$(".btn-close, .shadow-popup").click(function() {
    $('.popup-style-login').removeClass('active');
    $('.menu-bar-mobile').hide();
});

$(".rigister").click(function(){
    $('.form-login').removeClass('active');
    $('.form-register').addClass('active')
    $(this).addClass('active');
    $('.login').removeClass('active');
});
$('.rigister').hover(function(){
    $(this).addClass('active');
    $('.login').removeClass('active');
})

$(".login").click(function(){
    $('.form-login').addClass('active');
    $('.form-register').removeClass('active')
    $(this).addClass('active');
    $('.rigister').removeClass('active');
});
$('.login').hover(function(){
    $(this).addClass('active');
    $('.rigister').removeClass('active');
})

//pagination

$('.pagination ul li ').hover(function(){
    $('.pagination ul li ').removeClass('active');
    $(this).addClass('active');
})

$(".pagination-review ul li").hover(function(){
    $('.pagination-review ul li ').removeClass('active');
    $(this).addClass('active');
})
$(".btn-comment a").click(function(){
    $('.popup-report').addClass('active');
})
$(".btn-close, .shadow-popup").click(function() {
    $('.popup-report').removeClass('active');
});
//count in detail-product
$(document).ready(function() {

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});
// slider

$('.list-product-best-sale').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    responsive: [
    {
        breakpoint: 1300,
        settings: {
            slidesToShow: 4,
        }
    },
    {
        breakpoint: 993,
        settings: {
            slidesToShow: 3,
        }
    },

    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 415,
        settings: {
            slidesToShow: 2,  
        }
    }
    ]
});
$('.list-product-best-sale2').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    responsive: [
    {
        breakpoint: 1300,
        settings: {
            slidesToShow: 4,
        }
    },
    {
        breakpoint: 993,
        settings: {
            slidesToShow: 3,
        }
    },

    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 415,
        settings: {
            slidesToShow: 2,  
        }
    }
    ]
});
$('.list-product-best-sale4').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
});

$('.list-new').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    responsive: [
    {
        breakpoint: 1300,
        settings: {
            slidesToShow: 3,
            arrows: false   
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            arrows: false

        }
    },
    {
        breakpoint: 475,
        settings: {
            slidesToShow: 1,
            arrows: false   
        }
    }
    ]
});
$('.tag-news ul').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    responsive: [
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 4,
            arrows: false

        }
    },
    {
        breakpoint: 475,
        settings: {
            slidesToShow: 3,
            arrows: false   
        }
    }
    ]
});
$('.list-product-same').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    responsive: [
    {
        breakpoint: 1300,
        settings: {
            slidesToShow: 3,
            arrows: true   
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            arrows: false

        }
    },
    {
        breakpoint: 374,
        settings: {
            slidesToShow: 1,
            arrows: false   
        }
    }
    ]
});
/*js slide vung mien*/
$('.slide-vung').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true,
    responsive: [
    {
        breakpoint: 1300,
        settings: {
            slidesToShow: 4,
            arrows: true   
        }
    },
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 4,
            arrows: false

        }
    },
     {
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            arrows: false   
        }
    },
    {
        breakpoint: 374,
        settings: {
            slidesToShow: 3,
            arrows: false   
        }
    }
    ]
});

/*js slide đôi khách hàng*/
$('.list-product-best-sale3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
        infinite:true,
        pauseOnHover:true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: false,
        responsive: [
        {
            breakpoint: 1300,
            settings: 
            {
            slidesToShow: 3,
            arrows: false   
                }
            },
         {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            arrows: false

                }
             },
         {
        breakpoint: 475,
        settings: {
            slidesToShow: 2,
            arrows: false   
        }
    }
    ]
    });
   

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/

  $(".categrory").click(function(){
      $(".menu-item").toggle();
  });

/*js click menu drowdoun*/
 $(function(){
    $(".dropbtn").on("click",function(){
      $(this).next().slideToggle();
    });
 });

  /*js- menu-select trang gửi yêu cầu*/

var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);