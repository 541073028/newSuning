
//banner
{
    const imgs = document.querySelectorAll(".banner_tu li");
    const pagers = document.querySelectorAll(".lunbo_dian li");
    const banner_tu = document.querySelector(".banner_tu");
    const banner_lbtn = document.querySelector(".banner_lbtn");
    const banner_rbtn = document.querySelector(".banner_rbtn");
    pagers.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            for (let i = 0; i < pagers.length; i++) {
                imgs[i].classList.remove("active");
                pagers[i].classList.remove("active");
            }
            //this ele pagers[index]指的都是一个
            this.classList.add("active");
            imgs[index].classList.add("active");
            n = index;
        }
    });
    let n = 0;
    let t = setInterval(move, 3000);

    function move() {
        n++;
        if (n === imgs.length) {
            n = 0;
        }
        if (n < 0) {
            n = imgs.length - 1;
        }
        for (let i = 0; i < pagers.length; i++) {
            imgs[i].classList.remove("active");
            pagers[i].classList.remove("active");
        }
        imgs[n].classList.add("active");
        pagers[n].classList.add("active");
    }

    banner_tu.onmouseenter = function () {
        clearInterval(t)
    };
    banner_tu.onmouseleave = function () {
        t = setInterval(move, 3000);
    };
    let flag = true;
    banner_rbtn.onclick = function () {
        if (flag) {
            flag = false;
            move();
        }
    }
    banner_lbtn.onclick = function () {
        if (flag) {
            flag = false;
            n -= 2;
            move();
        }
    };
    imgs.forEach(function (ele) {
        ele.addEventListener("transitionend", function () {
            flag = true;
        })
    })
}
//li_word
{
    let li_words = document.querySelectorAll(".li_word");
    let lixiangqings = document.querySelectorAll(".lixiangqing");
    let obj = lixiangqings[0];
    li_words.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            lixiangqings[index].style.display = "block";
            obj = lixiangqings[index];
        };
        ele.onmouseleave = function () {
            lixiangqings[index].style.display = "none";
        }
    });

}
//djh
{
    let djhleft_lunbo = document.querySelector(".djhleft_lunbo");
    let djh_lbtn = document.querySelector(".djh_lbtn");
    let djh_rbtn = document.querySelector(".djh_rbtn");
    let n = 1;
    let flag = true;
    djh_rbtn.onclick = function () {
        if (flag) {
            flag = false;
            n++;
            djhleft_lunbo.style.transition = "all .5s";
            djhleft_lunbo.style.marginLeft = -1000 * n + "px";
        }
    };
    djh_lbtn.onclick = function () {
        if (flag) {
            flag = false;
            n--;
            djhleft_lunbo.style.transition = "all .5s";
            djhleft_lunbo.style.marginLeft = -1000 * n + "px";
        }
    };
    djhleft_lunbo.addEventListener("transitionend", function () {
        flag = true;
        if (n === 4) {
            djhleft_lunbo.style.transition = "none";
            djhleft_lunbo.style.marginLeft = "-1000px";
            n = 1;
        }
        if (n === 0) {
            djhleft_lunbo.style.transition = "none";
            djhleft_lunbo.style.marginLeft = "-3000px";
            n = 3;
        }
    })
}
//topbar
{
    let position = document.querySelector(".position");
    let caidanldaohang = document.querySelector(".caidanldaohang");
    let floatbar = document.querySelector(".floatbar");
    let active2 = document.querySelector(".active2 ");
    let active6 = document.querySelector(".active6");


    window.onscroll = function () {
        let bt = document.documentElement.scrollTop;
        if (bt > 1250) {
            position.style.display = "block";
            active2.onmouseenter = function () {
                active6.style.display = "block";
            };
            caidanldaohang.onmouseleave = function () {
                active6.style.display = "none";
            };
        } else {
            position.style.display = "none";
        }
        if (bt > 2450) {
            floatbar.style.display = "block";
        } else {
            floatbar.style.display = "none";
        }
    }


}
//leftbar
{
    let floattop = document.querySelector(".floattop");
    floattop.onclick = function () {
        // document.documentElement.scrollTop=0;
        let st = document.documentElement.scrollTop;
        // console.log(st);

        let t = setInterval(function () {
            st -= 200;
            if (st < 0) {
                st = 0;
                clearInterval(t);
            }
            document.documentElement.scrollTop = st;
        }, 20)
    };

    //左边list
    let floatbarlis = document.querySelectorAll(".floatbarli");
    let containers = document.querySelectorAll(".container");
    floatbarlis.forEach(function (ele, index) {
        ele.onclick = function () {
            let ot = containers[index].offsetTop - 100;
            // console.log(ot);
            // document.documentElement.scrollTop=ot;
            let now = document.documentElement.scrollTop;
            let speed = (ot - now) / 10;
            let time = 0;
            let t = setInterval(function () {
                time += 25;
                now += speed;
                if (time === 250) {
                    clearInterval(t);
                }
                document.documentElement.scrollTop = now;
            }, 25);
            for (let i = 0; i < floatbarlis.length; i++) {
                floatbarlis[i].classList.remove("active5")
            }
            floatbarlis[index].classList.add("active5")
        };
    })
    window.addEventListener("scroll", function () {
        let st = document.documentElement.scrollTop;
        for (let i = 0; i < containers.length; i++) {
            if (st > containers[i].offsetTop - 500) {
                for (let i = 0; i < floatbarlis.length; i++) {
                    floatbarlis[i].classList.remove("active5");
                }
                floatbarlis[i].classList.add("active5");
            }
        }
    })
}
//xinwengengxin
{
    let inner = document.querySelector(".rdh_centerbox ");
    let rdhc_wenzi = document.querySelector(".rdhc_wenzi  ");

    var n = 0;
    setInterval(function () {
        n++;
        inner.style.transition="all .3s";
        inner.style.marginTop= -n * 96+"px";
    }, 3000);
    inner.addEventListener("transitionend",function () {
        if (n>=2){
            n=0;
            inner.style.transition="none";
            inner.style.marginTop="0";
        }
    })
}
//dingbuwenzi
{
    $(".head_lefticon")
        .mouseenter(function () {
            let index = $(this).index(".head_lefticon");
            $(".nav-list").eq(index).slideDown(100);
        })
        .mouseleave(function () {
            let index = $(this).index(".head_lefticon");
            $(".nav-list").eq(index).slideUp(100);
        })
    $(".public0_none_daohang_close").click(function () {
        $(".ng-sn-site-nav").css("display","none");
    })

}
//panghangbang
{
    let next = document.querySelector(".hh_btnsright");
    let prev = document.querySelector(".hh_btnsleft");
    let shop = document.querySelector(".shangpin_changtu");
    let lunbos = document.querySelectorAll(".ts_lunbo1");
    let shangpins = document.querySelectorAll(".hh_shangpin");
    let n = 1;
    let flag = true;
    next.onclick = function () {
        if (flag) {
            flag = false;
            n++;
            shop.style.transition = "all 0.5s";
            shop.style.marginLeft = n * -380 + "px";
        }
    };
    prev.onclick = function () {
        if (flag) {
            flag = false;
            n--;
            shop.style.transition = "all 0.5s";
            shop.style.marginLeft = n * -380 + "px";
        }
    };
    shop.addEventListener("transitionend", function () {
        flag = true;
        if (n === 4) {
            shop.style.transition = "none";
            shop.style.marginLeft = "-380px";
            n = 1;
        }
        if (n === 0) {
            shop.style.transition = "none";
            shop.style.marginLeft = "-1140px";
            n = 3;
        }
    });
    lunbos.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            for (let i = 0; i < lunbos.length; i++) {
                lunbos[i].classList.remove("active7");
            }
            lunbos[index].classList.add("active7");
            // if(){
            //
            // }
            shop.style.marginLeft = index * -380 + "px";
            n = index;
        }
    })
}
//shipin
{
    let limgs = document.querySelectorAll(".kp_lunbospimg");
    let simgs = document.querySelectorAll(".kp_limg1");
    let zhegais = document.querySelectorAll(".kp_zhegai");
    let obj = simgs[0];
    // let obj1=zhegais[0];
    simgs.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            obj.style.zIndex = "";
            limgs[index].style.zIndex = "999";
            obj = limgs[index];
            // for(let i=0;i<zhegais.length;i++){
            //     zhegais[index].style.opacity="0.2";
            // }
            // zhegais[index].style.opacity="0";
        };
    });

    let box = document.querySelector(".kplimgs");
    let kpimgs = document.querySelectorAll(".kp_limg1");
    let prev = document.querySelector(".kp_leftjt");
    let next = document.querySelector(".kp_rightjt");
    let n = 0;
    next.onclick = function () {
        n++;
        if(n>=2){
            n=1;
            return;
        }
        box.style.marginLeft = -390 * n + "px";

    };
    prev.onclick = function () {
        n--;
        if(n===-1){
            n=0;
            return;
        }
        box.style.marginLeft = -390 * n + "px";

    }

}
//right fixed
{
    let icons = document.querySelectorAll(".ct3_icon ");
    let iconct = document.querySelectorAll(".rightyin");
    let totop=document.querySelector(".ct4_icon5");
    // let ctsytzis = document.querySelectorAll(".ctsytzi");

    icons.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            iconct[index].style.display = "block";
            obj = iconct[index];
        };
        ele.onmouseleave = function () {
            iconct[index].style.display = "none";
        }
    });
    totop.onclick=function () {
        let st=document.documentElement.scrollTop;
        let t = setInterval(function () {
            st -= 200;
            if (st < 0) {
                st = 0;
                clearInterval(t);
            }
            document.documentElement.scrollTop = st;
        }, 20)
    }
}