
jQuery(function($){
    $('a[href*="#"]').on('click.smoothscroll', function( e ){
    let hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
    if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
    let $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
    if( ! $target.length ) return;
    e.preventDefault();
    $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 1000, 'swing', function(){
    window.location.hash = hash;
    
    });
    });


    $('.a2').click( function(){
        $('.cloud4').animate({
            top: '+=400px'
        },1000)
    })
    $('.a1').click( function(){
        $('.cloud4').animate({
            top: '-=400px'
        },1000)
    })
}); 



