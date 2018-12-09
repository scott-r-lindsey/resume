!function( $ ){

    $(document).ready(function(){

        // animation on each paragraph
        $('.main div.content').each(function(i, elem){
            setTimeout(function(){
                $(elem).addClass('visible');
            }, 100*i);
        });

        function pauseVideo(slick){
            var currentSlide, slideType, startTime, player, video;

            currentSlide  = slick.find(".slick-current");
            player        = currentSlide.find("iframe").get(0);


//            $(player)[0].src = $(player)[0].src;

            postMessageToPlayer(player, {
                "event": "command",
                "func": "pauseVideo"
            });

        };

        // POST commands to YouTube or Vimeo API
        function postMessageToPlayer(player, command){
            if (player == null || command == null) return;
            console.log('sup');
            console.log(player.contentWindow);
            console.log(JSON.stringify(command));

            player.contentWindow.postMessage(JSON.stringify(command), "*");
        }

        $('.slides').slick({
            dots: true,
            initialSlide: 0
        });

        $('.slides').on("beforeChange", function(slick){
            slick = $(slick.currentTarget);

            pauseVideo(slick);
        });

        setTimeout(function(){
          $('.slideshow_scaffold').removeClass('teased');
        }, 2000);


        $('.launcher').click(function (e){
          e.preventDefault();
          e.stopPropagation();

          $('.circle_wrapper').addClass('expanded');
          $('.circle_wrapper').removeClass('shrunk');

          $('.slides').slick('slickGoTo', 0);
          $('.slideshow_scaffold').addClass('visible');
          $('.slideshow_scaffold .content').addClass('visible');
        });


        $('.slideshow_shape .close').click(function(e){
          e.preventDefault();
          e.stopPropagation();

          $('.circle_wrapper').addClass('shrunk');
          $('.circle_wrapper').removeClass('expanded');

          $('.slideshow_scaffold').removeClass('visible');
          $('.slideshow_scaffold .content').removeClass('visible');
        });

        $(document).keyup(function(e) {
            if (e.key === "Escape") {
                $('.circle_wrapper').addClass('shrunk');
                $('.circle_wrapper').removeClass('expanded');

                $('.slideshow_scaffold').removeClass('visible');
                $('.slideshow_scaffold .content').removeClass('visible');
            }
        });

    });

}( window.jQuery );




