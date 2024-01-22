function showTab(hash) {
    var tab = $(".wrap_contact a[data-hash='" + hash + "']");
    if (tab.length) {
        tab.tab('show');
    }
};
(function ($) {
    $(document).ready(function () {
        window.addEventListener("popstate", function (e) {
            showTab(location.hash);
        });
        $('a').on('shown.bs.tab', function (e) {
			console.log(1);
            window.location.hash = e.target.hash;
            $(document).scrollTop(0);
        });

        showTab(document.location.hash);
    });
})(jQuery);
// This code for crosbrauser
$(document).ready(function () {
 


    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    if (isFirefox) $('body').addClass('isFirefox');
    if (isSafari) $('body').addClass('isSafari');
    if (isIE) {
        $('body').addClass('isIE');
        $('.navbar-default, .blockPlay, #wrapper').removeClass('wow flipInX bounceInDown');
        $('.navbar-default').removeAttr('data-wow-delay')
        
    }
    if (isEdge) $('body').addClass('isEdge');
});
function detectmob() {
    if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    }
    else {
        return false;
    }
}
/*----------------------------------------*/
/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */
/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */
var for_arrow_svg5 = 5000;
var arrow_svg5 = {
    "arrow_svg5": {
        "strokepath": [
            {
                "path": "M221,543.3V345.5h153.5c0,0-8.3,20-11.5,119.3   c-8.1-4-13-10.5-38.3-17.3c5-10.8,6.9-10.1,13.5-29c5.8-24.3,26.3-66,28.3-68.5",
                "duration": for_arrow_svg5
            },
            {
                "path": "M 8 543.3 L 219.8 543.3",
                "duration": for_arrow_svg5
            },
            {
                "path": "M408.5,539.3l88.8-32.5v14L608,539.3l1.5,4   c0,0-21.5,17.8,2.8,23c12.8-1,12-13.3,12-13.3l-210.5-7l-1,6c0,0,9,1.5,9.3,11.3s-8.3,9.8-11,9.8c-5.3,1.3-9.3-6.3-9.3-6.3v-22   c-51.5,9.8-46.8-2.8-53.5,0c-9,5-12.5,6.5-20.8,9.5s-17.5-0.8-19.3,10.8c29,16,66.3,2.3,66.3,2.3v5.8h21.8c0,0,1-50.3,2.8-61.8   c-29.3,27.3-51.5,27-51.5,27l2.8-29.8l10.3-3.3c0,0,3-25.5,3-29.8c-4-6-26.5-21.8-40-22.3c-16.3,16.3-24.8,17-36.5,19.5   s-24.9-0.1-29.3,12.5C272.3,504.8,321,499,321,499v6.3",
                "duration": for_arrow_svg5
            },
            {
                "path": "M598.5,259.3c0,0,17.5,36-33.3,106.8   c-70-30-139.5,0.5-139.5,0.5l-26.3-24c0,0,14.5,21.8,19.8,29.8c-19.5,28.2-40.5,62-52.8,109.5c-18.8-1.3-22.8,25-22.8,25h-23",
                "duration": for_arrow_svg5
            },
            {
                "path": "M 369.8 344 L 382.3 325.8",
                "duration": for_arrow_svg5
            },
            /*{
                "path": "M391.3,320.8",
                "duration": 600
            },*/
            {
                "path": "M391.3,320c0,0,45,3.5,101.5,38.5",
                "duration": for_arrow_svg5
            },
            {
                "path": "M516,270.5c0,0-23.5,60.7-24.1,87.5",
                "duration": for_arrow_svg5
            },
            {
                "path": "M457.3,314.2c0,0,28,12.8,35.5-55   c1.3,3.5,0,23.3,0,23.3l22.3-12",
                "duration": for_arrow_svg5
            },
            {
                "path": "M518.3,222c0,0,2.8,1.3,6,10.8   c5.8-8.3,24.8-20.3,24.8-20.3l5.5,10c0,0-22.5,13.5-27.3,20c-4.3-3.3-4-3.2-6.8-6.3c-6.8,15.5-19,52.3-25.5,78   c-21,14-37.8,9.8-37.8,9.8s-9.1-18.1-4.3-31.3c5.8-15.8,22.8-48,22.8-48s10.8,10,18.5,7.8s9-14,15.8-17.3c1.3-5,3.3-8.8,3.3-8.8   s-7.5-10.8-25-7.8c-13.5,14.8-1.5,17-8,34.3s-21.7,33.5-23,59.8",
                "duration": for_arrow_svg5
            },
            {
                "path": "M597.5,244c0,0-10.5-19.3-35.5-24.8   c-1.8-4-3.8-8-3.8-8s17.8-24.8-1.3-52.5s-56.8-11-55.8-5.5s3.1,0.5,1.8,5.3c-1.3,4.8-16,66,14,63",
                "duration": for_arrow_svg5
            },
            {
                "path": "M597.5,245.5c0,0-21.8-29-55,0   c-13,20.8-20,51.7-22,64c-4.8,4.5-12.8,10.5-12.8,10.5s3.8,17.5,8.3,18c-8.3-1.5-14.8-17.3-14.8-17.3s-33.2,3.5-33.6,23   c1.6,8.1,26.3,11.6,43.6,11.8c17.3,0.1,41.3,3,41.3,3",
                "duration": for_arrow_svg5
            },
            {
                "path": "M597.5,260.5c0,0-5.8,32.8-25.5,56.1   c-11.9,19.7-26.8,37-45.8,36.6",
                "duration": for_arrow_svg5
            },
            {
                "path": "M408.8,537.3c0,0,0.8-28.8-7-40   c10.3-34.8,7.9-47.3,11.8-61.5c6.8-11.5,25.8-22.8,72-9.3c46.8,10.5,79.8,7.3,84.3-21.3c3.3-20.5,3.3-35,3.3-35s10-10.3,21.8-44.5   s13.5-43.5,13.5-43.5S626,279,622,299.8c-1.5,8.5-19,6.8-29,62.3c-7.8,45-27.5,72.3-41.5,77c-8.8,1.8-44.5,1.3-44.5,1.3v39.3h4   v28.8L614.5,534l0.3,9.3h67.8",
                "duration": for_arrow_svg5
            },
            {
                "path": "M369.8,315.2l23.3-0.9l5.7-5l43.3-0.7l-26.3-76H334   l27.3,75.7l10,0.6l-5.4,7.4l-32,0.3l-6,9.1h-11l5.7-35.1l-24.9,0.3l2.8,32.1l-93.5,1.2v8.3h254L443.7,322c-18,0-36,0-54,0   c-2.7,0-5.3,0-8,0",
                "duration": for_arrow_svg5
            }
        ],
        "dimensions": {
            "width": 700,
            "height": 700
        }
    }
};


/* 
 Setup and Paint your lazyline! 
 */

$(document).ready(function () {
    $('#arrow_svg5').lazylinepainter(
    {
        "svgData": arrow_svg5,
        "strokeWidth": 2,
        "strokeColor": "#ad8c42",
        drawSequential: false
    }).lazylinepainter('paint');
    setTimeout(function () {
        $('.img_circle').fadeIn();
    }, 4500);
    setTimeout(function () {
        $('.img').fadeIn(2000);
    }, 500);
    
});

 

var arrow_svg = {
    "arrow_svg": {
        "strokepath": [
           
            
            {
                "path": "M86.9,208.1c0,0,1.4-4.9,17.5-5.7",
                "duration": 300
            },
            {
                "path": "M104.8,202.5c-17.7-6.9-16.5-15.3-16.5-15.3",
                "duration": 300
            },
             {
                 "path": "M102.8,202C4.5,197.3,3,101.4,3,101.4l102.3-0.7c0,0,0.4-99-0.3-99",
                 "duration": 1500
             }
        ],
        "dimensions": {
            "width": 110,
            "height": 210
        }
    }
};

var arrow_svg2 = {
    "arrow_svg2": {
        "strokepath": [


            {
                "path": "M86.9,208.1c0,0,1.4-4.9,17.5-5.7",
                "duration": 300
            },
            {
                "path": "M104.8,202.5c-17.7-6.9-16.5-15.3-16.5-15.3",
                "duration": 300
            },
             {
                 "path": "M102.8,202C4.5,197.3,3,101.4,3,101.4l102.3-0.7c0,0,0.4-99-0.3-99",
                 "duration": 1500
             }
        ],
        "dimensions": {
            "width": 110,
            "height": 210
        }
    }
};

var arrow_svg3 = {
    "arrow_svg3": {
        "strokepath": [


            {
                "path": "M86.9,208.1c0,0,1.4-4.9,17.5-5.7",
                "duration": 300
            },
            {
                "path": "M104.8,202.5c-17.7-6.9-16.5-15.3-16.5-15.3",
                "duration": 300
            },
             {
                 "path": "M102.8,202C4.5,197.3,3,101.4,3,101.4l102.3-0.7c0,0,0.4-99-0.3-99",
                 "duration": 1500
             }
        ],
        "dimensions": {
            "width": 110,
            "height": 210
        }
    }
};

/* 
 Setup and Paint your lazyline! 
 */

$(document).ready(function () {
    $('#arrow_svg').lazylinepainter(
    {
        "svgData": arrow_svg,
        "strokeWidth": 2,
        "strokeColor": "#949494",
        "delay": 1000,
        "reverse": true
    });
    var hendler6 = 0;
    $(document).scroll(function () {
        if ($(this).scrollTop() >= 500) {
            hendler6++;
            if (hendler6 == 1) {
                $('#arrow_svg').lazylinepainter('paint');
                $('.about_us_svg_block1').addClass('active');
            }
        }
    });


    $('#arrow_svg2').lazylinepainter(
    {
        "svgData": arrow_svg2,
        "strokeWidth": 2,
        "strokeColor": "#949494",
        "delay": 1000,
        "reverse": true
    });

    var hendler7 = 0;
    $(document).scroll(function () {
        if ($(this).scrollTop() >= 600) {
            hendler7++;
            if (hendler7 == 1) {
                $('#arrow_svg2').lazylinepainter('paint');
                $('.about_us_svg_block2').addClass('active');
            }
        }
    });



    $('#arrow_svg3').lazylinepainter(
    {
        "svgData": arrow_svg3,
        "strokeWidth": 2,
        "strokeColor": "#949494",
        "delay": 1000,
        "reverse": true
    });

    var hendler8 = 0;
    $(document).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            hendler8++;
            if (hendler8 == 1) {
                $('#arrow_svg3').lazylinepainter('paint');
                $('.about_us_svg_block3').addClass('active');
            }
        }
    });
});
/*---------------------------------------*/

/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */

var snakesTwo = {
    "snakesTwo": {
        "strokepath": [
            {
                "path": "M109.2,0v55.8c0,0-0.9,27.6,29.1,33.7c34.5,2.7,97.9,1.5,97.9,1.5  s28.6-1.5,32.1,29.1c2.9,24.9,2.9,25-0.8,89.9c0,0-7.4,24.9-31.5,26s-101,0-101,0s-30.5,3-32.4,30.5c-1.9,27.5-1.9,81.4-1.9,81.4  s3,31.6,28.6,32.4c25.6,0.8,159.7,2.3,159.7,2.3s30.5,0.8,31.6,31.6s0,53.9,0,53.9",
                "duration": 2000
            }
        ],
        "dimensions": {
            "width": 415,
            "height": 468
        }
    }
};


/* 
 Setup and Paint your lazyline! 
 */

$(document).ready(function () {
    $('#snakesTwo').lazylinepainter(
    {
        "svgData": snakesTwo,
        "strokeWidth": 3,
        "strokeColor": "#e5e5e5",
        drawSequential: false,
        delay: 1000
    });
    var hendler3 = 0;
    if(innerWidth > 413){
        $(document).scroll(function () {
            if ($(this).scrollTop() >= 600) {
                hendler3++;
                if (hendler3 == 1) {
                    $('#snakesTwo').lazylinepainter('paint');
                }
            }
        });
    }
});

var snakes = {
    "snake": {
        "strokepath": [
            {
                "path": "M335,0c-1.1,42.3,16.7,98.7-36,117  c-58,3-137,0-137,0s-38,6-40,44s0,105,0,105s5,44.5,39.5,45.5s138.5,0,138.5,0s40,6.8,44,46c0,39.5-2.5,104-2.5,104  s-1,44.5-42.5,44.5s-204,0-204,0s-42.5,1.5-44,42.5s0,276,0,276s1,44,45,48s199.3-0.5,202.3,1.8c3,2.3,41.3,0.3,42.3,41.3  s0.7,77.7,0.7,77.7",
                "duration": 3500
            }
        ],
        "dimensions": {
            "width": 349,
            "height": 1069
        }
    }
};
/* 
 Setup and Paint your lazyline! 
 */

$(document).ready(function () {
    $('#snake').lazylinepainter(
    {
        "svgData": snakes,
        "strokeWidth": 3,
        "strokeColor": "#e5e5e5",
        drawSequential: false,
        delay: 1000
    });
    var hendler4 = 0;
    if(innerWidth > 413){
        $(document).scroll(function () {
            if ($(this).scrollTop() >= 600) {
                hendler4++;
                if (hendler4 == 1) {
                    $('#snake').lazylinepainter('paint');
                }
            }
        });
    }
});



var speedPen = 5000;
var pathObj = {
    "bull_vektor3": {
        "strokepath": [
            {
                "path": "M61.25,301c0,0,20.25,12,25.75,18.75",
                "duration": speedPen
            },
            {
                "path": "M14.667,346c0,0,9.167-47.834,44.5-45.167   C59.834,298.166,57,298,61,293.333c5.667-4.666,15.333-10.666,25.333-20.333S103,231.001,113,230.667   c4-9.167,7.333-33.168,24-54.501c15.167-15.5,16.833-14.167,29.5-30.167c12.167-21.167,28.833-29.999,33.5-32.666",
                "duration": speedPen
            },
            {
                "path": "M14.667,350c0,0,57.083-1,76.333-8.25c0-10.5,0-19.75,0-19.75   s8.5-3.75,11-6.5s18.5-40,26.25-46c7.133-6.63,17.205-16.757,28-24c12-6,17.25-13.916,24-15.833   C192,227.75,196.5,285.5,208.5,288.75c9.75,9,34.155-1.611,54.5-12.25",
                "duration": speedPen
            },
            {
                "path": "M228.25,292.25c0,0-3.75,6.75-2,8.75s30.25,3.75,30.25,3.75",
                "duration": speedPen
            },
            {
                "path": "M283.75,282.75c0,0-23.5,19.25-24.25,22s3.5,5.625,3.5,5.625",
                "duration": speedPen
            },
            {
                "path": "M308.25,333.75c0,0-23.25-32.5-57-18   c-13.22,6.699-18.5,20.75-16.75,29s75.25,2.5,75.25,2.5v-11.5",
                "duration": speedPen
            },
            {
                "path": "M309.75,334.75c0,0,7.75-36,13.75-42.5s29.75-22.25,31.75-36   c8.25-8.25,34.37-34.117,46-48.75c10.25-16,16.75-26.5,12.25-54",
                "duration": speedPen
            },
            {
                "path": "M414.95,152.5c0,0,13.3,15,11.55,30.5c2,7,9.25,16.75-8.5,46.62   c0,6.13-4.75,36.38-5.25,41.63c3.75,6.5,5.75,10.75,6.323,16c3.677,2,13.427,11.549,11.177,24.774   c-14.279,8.047-50.25,8.226-50.25,8.226s6.75-22.879,7.75-30.439s2.25-14.561,1-19.061s-10.332-29.161-10-33.911",
                "duration": speedPen
            },
            {
                "path": "M389.75,289.811c0,0,12-9.811,28-2.811",
                "duration": speedPen
            },
            {
                "path": "M247.75,204.25c0,0-13,8.25-10.25,26.75c4.5,14.75,8,11.25,14.75,21   s10.75,29.25,33.25,27.25s23.5-7.75,32.5-19.5c9.5-6.5,14.25,1,22.25-15.625c2.5-13.375,2.5-13.375,2.5-21.125   c-1.25-4.5-4.25-4-4.75-8s0.25-5.25-1.25-13.25s-24.25-5.75-41-6C244.75,180.5,247.75,204.25,247.75,204.25z",
                "duration": speedPen
            },
            {
                "path": "M264.25,195.75c0,0-2.75,12.75-10.75,16.25   c-3.5-3-2.007-7.58-1-9.333C254.75,199.042,264.25,195.75,264.25,195.75z",
                "duration": speedPen
            },
            {
                "path": "M323.167,200.167c0,0,5.834,17.167,9.667,18.667   c2.666-4.167,3.333-8.5,1.666-13.834C331,199.5,323.167,200.167,323.167,200.167z",
                "duration": speedPen
            },
            {
                "path": "M336.667,223.334c0,0,5.333,20.332-13.5,22.166   s-56.999-3.499-66.333-6.166s-11.166-12.333-11-16s-0.001-11.168-2.334-9.334s-1.5,13.167-1.5,13.667",
                "duration": speedPen
            },
            {
                "path": "M257.777,240.332c0,0-0.767,29.987,25.973,29.667   s24.417-10.164,28.417-14.832s5.001-3.002,5.667-8.002",
                "duration": speedPen
            },
            {
                "path": "M259.411,248.332c0,0,18.089,9.5,50.339,6.835",
                "duration": speedPen
            },
            {
                "path": "M342.75,233.838c0,0,13.584-11.667,15.917-34.667   s-0.135-17.499,3.683-25.333s6.984-12,5.817-30.167",
                "duration": speedPen
            },
            {
                "path": "M342,241.504c0,0,20.834-20.017,29.334-30.5   c7.5-10.666,7.481-21,7.407-27.833s-3.241-20.5-7.574-22.833s23.834,3.167,30.667,3.667s25-31.333,25-42.5",
                "duration": speedPen
            },
            {
                "path": "M235.666,226.172c0,0-14.166-19.167-13.833-47   c3.558-20.297,11.333-25,13.833-27.667",
                "duration": speedPen
            },
            {
                "path": "M237.118,161c0,0,1.882-5,1.382-7.5s-3.58-3.5,0.085-14.75   C218.75,128.25,204,145.75,200,101c-4.25-7-22.5-23.75-21-58.75c4.25-37.5,10.5-38.5,11-42.25c18,10.5-2.75,75.5,54.25,84.25   c16-1.5,21.5-16,61.5-14.25s59,30,76,30.5S415,96,421,72.25s14.25-47.75,19.25-50.5s14.955,59.81,0.5,83.75   s-71.25,38.171-71.25,38.171",
                "duration": speedPen
            },
            {
                "path": "M245.5,82.75c0,0,17.75-20.5,26.25-24.25s28.5,4.25,34.25,10.25",
                "duration": speedPen
            },
            {
                "path": "M308,68.75c0,0,8.5-6.25,18.75-5.5s35.824,11,41.662,12.5   S392.25,78.5,403,77.25S414.95,72,414.95,72",
                "duration": speedPen
            },
            {
                "path": "M353.25,84.5c0,0,19,1.5,28.75,4.5s28.971,2.235,28.971,2.235",
                "duration": speedPen
            },
            {
                "path": "M281.5,109.25c6.5,0.75,6.75,23.25,0,37",
                "duration": speedPen
            },
            {
                "path": "M269.5,113.333c0,0,6.25,9.417-1.25,28.917",
                "duration": speedPen
            },
            {
                "path": "M264.25,109.25c0,0-18-1.5-17,6.5c-0.5,11,8.479,23.75,8.479,23.75",
                "duration": speedPen
            },
            {
                "path": "M247.21,123c0,0-6.499,6-5.354,7.75s20.645,15.011,23.645,20.755",
                "duration": speedPen
            },
            {
                "path": "M244.923,133.388c0,0-4.962,6.112-3.067,8.862   c3.395,5.25,15.895,3.011,22.395,9.255",
                "duration": speedPen
            },
            {
                "path": "M331.5,111.25c0,0-15,9-11.25,38.5",
                "duration": speedPen
            },
            {
                "path": "M342,120.25c0,0-5,1.893-5.5,22.196",
                "duration": speedPen
            },
            {
                "path": "M353.25,116.25c0,0,13.656,6.542,11.906,12.75   c-3.25,9.708-22.906,19.25-31.656,39.25",
                "duration": speedPen
            },
            {
                "path": "M361.475,134.861l3.837,4.639c0,0-20.333,16-27.947,24.75",
                "duration": speedPen
            },
            {
                "path": "M361.475,145.158c0,0,8.65,11.467-2.1,14.967   c-9.625,1-10.875-1.25-14.375,0.875",
                "duration": speedPen
            }
        ],
        "dimensions": {
            "width": 449,
            "height": 355
        }
    }
};


/* 
 Setup and Paint your lazyline! 
 */

$(document).ready(function () {
    $('#bull_vektor3').lazylinepainter(
    {
        "svgData": pathObj,
        "strokeWidth": 1,
        "strokeColor": "#4d4d4e",
        drawSequential:false
    }).lazylinepainter('paint');
});

/*button up*/
var top_show = 150;
var delay = 1000;
$(document).ready(function () {
    if (innerWidth < 900) {
        $('.blockPlay, .navbar').attr("data-wow-delay", "1s");
    }
    if (innerWidth < 1025) {
        $('.vsLogoRight, .vs, .vsLogoLeft, .advantages').attr("data-wow-delay", "1s");   
    }
    if (innerWidth < 768) {
        $('.vs_icons').addClass('wow fadeInDown').attr("data-wow-delay", "0.5s");
        $('.how_to_trade_block3 div,.how_to_trade_block3 img').removeClass('wow fadeInDown bounceIn');
    }
    if (!detectmob()) {
        $('.next-page').addClass('wow bounceInLeft').attr("data-wow-delay", "0.5s");
    }
});
$(window).load(function () {
    
    var gam = true;
    $('.navbar-toggle').on('click', function () {
        if (gam == true) {
            $(this).addClass('active');
            $(this).removeClass('no-active');
            gam = false;
        } else {
            $(this).addClass('no-active');
            $(this).removeClass('active');
            gam = true;
        }
    })
    setTimeout(function () {
        $('.animLeft').addClass('active');
        $('.animRight').addClass('active');
    }, 3500);
    setTimeout(function () {
        $('.animLeft').css({
            'opacity': '0',
            'transition': '2s'
        });
        $('.animRight').css({
            'opacity': '0',
            'transition': '2s'
        });
    }, 15000);
    if(innerWidth>1200){
        $(document).mousemove(function (e) {
            $('#cube').css({
                'transform': 'rotateX(' + e.pageY + 'deg) rotateY(' + e.pageX + 'deg)'
            });
        });
        // Edge 20+
        var isEdge = !isIE && !!window.StyleMedia;
        // Internet Explorer 6-11
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        $('.play').on('mouseover', function () {
            if (!isIE || !isEdge) {
                $('#wrapper').addClass('active');
                $('#cube').addClass('active');
                $('.side').addClass('active');
                $('.play').addClass('active');
            }
        });
        $('.play, #wrapper').on('mouseover', function () {
            $('.side').css({
                'width':'50px',
                'height': '50px',
                'backface-visibility': 'visible'
            });
        });
        $('.play, #wrapper').on('mouseout', function () {
            $('.side').css({
                'width': '70px',
                'height': '70px',
                'backface-visibility': 'hidden'
            });
        });
        function change() {
            $('#html5-lightbox-overlay, #html5-close').on('click', function () {
                if (toogleForBoom == true) {
                    $('.side').addClass('boomPause');
                    $('.side').removeClass('boomPlay');
                    toogleForBoom = false;
                } else {
                    $('.side').removeClass('boomPause');
                    $('.side').addClass('boomPlay');
                    toogleForBoom = true;
                }
            })
        }
        var toogleForBoom = true;
        $('.play').on('click', function () {
            if (toogleForBoom == true){
                $('.side').addClass('boomPause');
                $('.side').removeClass('boomPlay');
                toogleForBoom = false;
                change();
            } else {
                $('.side').removeClass('boomPause');
                $('.side').addClass('boomPlay');
                toogleForBoom = true;
            }
        })
    
    }

    //vs animation

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;
    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    var res = 0;
    var hendler = 0;
    if (isIE || isEdge) {
        $(document).scroll(function (){
        if ($(this).scrollTop() >= 2500) {
            hendler++;
            if (hendler == 1) {
                console.log(2);
                setTimeout(function () {
                    $('.vs_icon1Left').addClass('active');
                    $('.vs_icon2').addClass('active');
                }, 1500);
                setTimeout(function () {
                    $('.vs_icon2Left').addClass('active');
                    $('.vs_icon3').addClass('active');
                }, 2000);
                setTimeout(function () {
                    $('.vs_icon3Left').addClass('active');
                    $('.vs_icon4').addClass('active');
                }, 2500);
                setTimeout(function () {
                    $('.vs_icon5').addClass('active');
                }, 3000);
                setTimeout(function () {
                    $('.vs_icon6').addClass('active');
                }, 3500);
                setTimeout(function () {
                    $('.vs_icon7').addClass('active');
                }, 4000);
                setTimeout(function () {
                    $('.vs_icon9').addClass('active');
                }, 4500);
             }
         }
        });
    }else{
    $(document).scroll(function () {
        if (innerWidth > 1023){
            if ($(this).scrollTop() >= 2700) {
                hendler++;
                if (hendler == 1) {
                    $('.vs_center').addClass('active');
                    setTimeout(function () {
                        $('.vs_center').removeClass('active');
                    }, 3000);
                }
                setTimeout(function () {
                    res++;
                    if (res == 1) {
                        $('.ves').addClass('ves1');
                        $('.g1, .g4').addClass('active');
                        $('.vs_icon1Left').addClass('active');
                        $('.vs_icon2').addClass('active');
                        setTimeout(function () {
                            $('.g2, .g5').addClass('active');
                            $('.vs_icon2Left').addClass('active');
                            $('.vs_icon3').addClass('active');
                        }, 500);
                        setTimeout(function () {
                            $('.g3, .g6').addClass('active');
                            $('.vs_icon3Left').addClass('active');
                            $('.vs_icon4').addClass('active');
                        }, 1000);
                        setTimeout(function () {
                            $('.g7').addClass('active');
                            $('.vs_icon5').addClass('active');
                        }, 2000);
                        setTimeout(function () {
                            $('.g8').addClass('active');
                            $('.vs_icon6').addClass('active');
                        }, 3000);
                        setTimeout(function () {
                            $('.g9').addClass('active');
                            $('.vs_icon7').addClass('active');
                        }, 4000);
                        setTimeout(function () {
                            $('.g10').addClass('active');
                            $('.vs_icon9').addClass('active');
                        }, 5000);

                        function groupOne(top, left) {
                            var groupTop = $('.sub_group1').css('top');
                            groupTop = parseInt(groupTop) + top;
                            $('.sub_group1').css('top', groupTop + 'px');

                            var group2Left = $('.sub_group1').css('left');
                            group2Left = parseInt(group2Left) - left;
                            $('.sub_group1').css('left', group2Left + 'px');
                        }

                        function groupTwo(top, left) {
                            var group2Top = $('.sub_group2').css('top');
                            group2Top = parseInt(group2Top) + top;
                            $('.sub_group2').css('top', group2Top + 'px');

                            var group2Left = $('.sub_group2').css('left');
                            group2Left = parseInt(group2Left) - left;
                            $('.sub_group2').css('left', group2Left + 'px');
                        }

                        setTimeout(function () {
                            groupOne(-9, 5);
                            groupTwo(30, 20);
                            $('.ves').addClass('ves3_1');
                        }, 3000);
                        setTimeout(function () {
                            groupOne(-9, 2);
                            groupTwo(25, -10);
                            $('.ves').addClass('ves3_2');
                        }, 4000);
                        setTimeout(function () {
                            groupOne(-10, 2);
                            groupTwo(10, 30);
                            $('.ves').addClass('ves3_3');
                        }, 5000);
                        setTimeout(function () {
                            groupOne(-15, 2);
                            groupTwo(10, 0);
                            $('.ves').addClass('ves4_1');
                        }, 6000);

                        setTimeout(function () {
                            groupOne(10, 2);
                            groupTwo(10, 2);
                            $('.ves').addClass('ves4_2');
                        }, 8000);
                        setTimeout(function () {
                            groupOne(35, 10);
                            groupTwo(35, 10);
                            $('.ves').addClass('ves5_2');
                        }, 10000);

                        setTimeout(function () {
                            $('.sub_bull').addClass('active');
                        }, 7000);
                        setTimeout(function () {
                            $('.bull').addClass('active');
                        }, 8000);
                        setTimeout(function () {
                            groupTwo(15, 0);
                            $('.ves').addClass('ves4_2');
                        }, 8000);
                        setTimeout(function () {
                            $('.monye').addClass('active');
                        }, 10000);

                        var xNum = 2000;
                        var yNum = -1500;
                        var animationTime = 1;
                        setTimeout(function () {
                            var g3 = $('.g3');
                            TweenMax.to(g3, animationTime, { bezier: [{ x: 0, y: 0 }, { x: xNum, y: yNum }, { x: 483, y: 55 }], ease: Power0.easeNone });
                        }, 8000);
                        setTimeout(function () {
                            var g2 = $('.g2');
                            TweenMax.to(g2, animationTime, { bezier: [{ x: 0, y: 0 }, { x: xNum, y: yNum }, { x: 579, y: 55 }], ease: Power0.easeNone });
                        }, 8100);
                        setTimeout(function () {
                            var g1 = $('.g1');
                            TweenMax.to(g1, animationTime, { bezier: [{ x: 0, y: 0 }, { x: xNum, y: yNum }, { x: 602, y: 20 }], ease: Power0.easeNone });
                        }, 8200);
                    }
                }, 2500);

            }
        } else {//if<1024
            if (innerWidth < 768) {
             
            } else {
                if ($(this).scrollTop() >= 2500) {
                    hendler++;
                    if (hendler == 1) {
                        setTimeout(function () {
                            $('.vs_icon1Left').addClass('active');
                            $('.vs_icon2').addClass('active');
                        }, 1500);
                        setTimeout(function () {
                            $('.vs_icon2Left').addClass('active');
                            $('.vs_icon3').addClass('active');
                        }, 2000);
                        setTimeout(function () {
                            $('.vs_icon3Left').addClass('active');
                            $('.vs_icon4').addClass('active');
                        }, 2500);
                        setTimeout(function () {
                            $('.vs_icon5').addClass('active');
                        }, 3000);
                        setTimeout(function () {
                            $('.vs_icon6').addClass('active');
                        }, 3500);
                        setTimeout(function () {
                            $('.vs_icon7').addClass('active');
                        }, 4000);
                        setTimeout(function () {
                            $('.vs_icon9').addClass('active');
                        }, 4500);
                    }
                }
            }
        }
    });
}
    //and vs animation
   

    $(window).scroll(function () {
        if (innerWidth < 1200){
            if (innerWidth < 414){
                if ($(this).scrollTop() > 5700) {
                    $('.ellipseNum').addClass('active');
                  $('.ellipseNum').animate({ num: 45/* - начало */ }, {
              
                    duration: 5000,
                    step: function (num) {
                        this.innerHTML = '0,' + num.toFixed(0) + '%'
                    }
                });
                }
            } else {
                if ($(this).scrollTop() > 3000) {
                    $('.ellipseNum').addClass('active');
                    $('.ellipseNum').animate({ num: 45/* - начало */ }, {

                        duration: 5000,
                        step: function (num) {
                            this.innerHTML = '0,' + num.toFixed(0) + '%'
                        }
                    });
                }
            }
        } else {
            if ($(this).scrollTop() > 3750) {
                $('.ellipseNum').addClass('active');
                $('.ellipseNum').animate({ num: 45/* - начало */ }, {

                    duration: 5000,
                    step: function (num) {
                        this.innerHTML = '0,' + num.toFixed(0) + '%'
                    }
                });
            }
        }
    });

    $('.sub_moreIcon a').on('mouseover', function () {
        $(this).siblings('span').addClass('active');
    })
    $('.sub_moreIcon a').on('mouseout', function () {
        $(this).siblings('span').removeClass('active');
    })

    //begunok
    setTimeout(function () {
        $('.scrollBlock').addClass('active');
    }, 4000);
    $('.play').on('mouseover', function () {
        $('.circle').addClass('active');
    })
    $('.play').on('mouseout', function () {
        $('.circle').removeClass('active');
    });
   

    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
});

/* end button up*/
if ($(window).innerWidth() > 768) {
    var blog_left_menue = false;
} else {
    var blog_left_menue = true;
    $('.blog_left_menue').removeClass('active');
}

$('.blog_left_menue_btn').on('click', function () {
    if (blog_left_menue == true) {
        $('.blog_left_menue').addClass('active');
        blog_left_menue = false;
    } else {
        $('.blog_left_menue').removeClass('active');
        blog_left_menue = true;
    }
})


$(document).ready(function () {
    setTimeout(function () {
        $('.fxl_animation_block1').css('transform', 'scale(1.1)');
    }, 3500);
    setTimeout(function () {
        $('.fxl_animation_block1').css('transform', 'scale(1)');
    }, 3900);

    setTimeout(function () {
        $('.fxl_animation_block2').css('transform', 'scale(1.1)');
    }, 3800);
    setTimeout(function () {
        $('.fxl_animation_block2').css('transform', 'scale(1)');
    }, 4200);

    setTimeout(function () {
        $('.fxl_animation_block3').css('transform', 'scale(1.1)');
    }, 4100);
    setTimeout(function () {
        $('.fxl_animation_block3').css('transform', 'scale(1)');
    }, 4600);
});
//TUT

$('#myModal1').on('shown.bs.modal', function () {
    $('#myInput').focus()
})

$('#accordion h3').on('click', function () {
    if ($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).siblings('div').removeClass('active');
    } else {
        $(this).addClass('active');
        $(this).siblings('div').addClass('active');
    }
});

$('.faq_my_account h3').on('click', function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).siblings('div').removeClass('active');
    } else {
        $(this).addClass('active');
        $(this).siblings('div').addClass('active');
    }
});

$('.menue_trade_userName span').on('click', function () {
    $('.menue_trade_dropdown').toggleClass('active');
});
$('.welcom span').on('click', function () {
    $('.menue_login_dropdown').toggleClass('active');
});

$('.toolsDropdown').on('click', function () {
    $('.noActive').siblings('div').toggleClass('active');
})

$('.toolsDropdown div').on('mouseleave', function () {
    $('.noActive').siblings('div').toggleClass('active');
})







