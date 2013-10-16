$(document).ready(function() {

    $(function(){
        $('.swiper-container').each(function(index){
            $(this).swiper({
                autoplay: 5000,
                mode:'horizontal',
                loop: true
            })
        });
    })

});