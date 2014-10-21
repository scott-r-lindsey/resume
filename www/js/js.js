!function( $ ){

    $(document).ready(function(){

        $('div.content').each(function(i, elem){
            setTimeout(function(){
                $(elem).addClass('visible');
            }, 100*i);
        });

        $(".various").fancybox({
            maxWidth    : 800,
            maxHeight   : 600,
            fitToView   : false,
            width       : '70%',
            height      : '70%',
            autoSize    : false,
            closeClick  : false,
            openEffect  : 'elastic',
            closeEffect : 'none'
        });
    });

}( window.jQuery );




