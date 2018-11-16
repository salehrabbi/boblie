    jQuery(document).ready(function($){

        // MOBILE MENU
        $('.mobile-trigger').on('click',function(){
            $('.mobile-menu').addClass('open');
        });
        $('.mobile-trigger').on('click',function(){
            $('.overlay').addClass('open');
        });

        $('.mobile-close').on('click',function(){
            $('.mobile-menu').removeClass('open');
        });
        $('.mobile-close').on('click',function(){
            $('.overlay').removeClass('open');
        });



    });

        //scroll to top
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn();
                } else {
                $('.scrollup').fadeOut();
            }
        });
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 1000);
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