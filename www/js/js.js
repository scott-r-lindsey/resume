!function( $ ){

    $(document).ready(function(){

        $('div.content').each(function(i, elem){
            console.log(elem);
            setTimeout(function(){
                $(elem).addClass('visible');
            }, 100*i);
        });

    });

}( window.jQuery );



