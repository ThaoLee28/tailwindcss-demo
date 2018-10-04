jQuery(function($) {
    "use strict";

    var SLZ = window.SLZ || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    SLZ.mainFunction = function() {
        /*=======================================
        =    SHOW/HIDE SUB MENU MOBILE         =
        =======================================*/
        var menumobile = function () {
            $('.btn-menu ').on('click', function () {
                if ($('.menu-mobile').hasClass('hidden')) {
                    $('.menu-mobile').removeClass('hidden');

                } else {
                    $('.menu-mobile').addClass('hidden');
                }
                return false;
            });
        };
        menumobile();
        $(document).click(function (e) {
            if ($('.menu-mobile').has(e.target).length === 0 && !$('.menu-mobile').is(e.target) && !$(e.target).is('.menu-mobile')) {
                $('.menu-mobile').addClass('hidden');
            }
        });
    };
    $(document).ready(function() {
        SLZ.mainFunction();
    });
    
});