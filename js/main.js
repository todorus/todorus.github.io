//Galleries
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

//Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-45987937-1', 'todorus.com');
ga('send', 'pageview');