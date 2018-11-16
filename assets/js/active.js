    jQuery(document).ready(function ($) {

        // MOBILE MENU
        $('.mobile-trigger').on('click', function () {
            $('.mobile-menu').addClass('open');
        });
        $('.mobile-trigger').on('click', function () {
            $('.overlay').addClass('open');
        });

        $('.mobile-close').on('click', function () {
            $('.mobile-menu').removeClass('open');
        });
        $('.mobile-close').on('click', function () {
            $('.overlay').removeClass('open');
        });



    });

    //scroll to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    // Client Comment Section
    function openClient(evt, clientCopy) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("client-comment");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("client-links");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(clientCopy).style.display = "block";
        evt.currentTarget.className += " active";
    }



    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });


    $(document).scroll(function (e) {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 0) {
            console.log(scrollTop);
            $('.header-wrapper').removeClass('navbar-static-top').addClass('navbar-fixed-top');
        } else {
            $('.header-wrapper').removeClass('navbar-fixed-top').addClass('navbar-static-top');
        }
    });
