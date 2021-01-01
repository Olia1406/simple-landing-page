
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
// це ^ я просто скопіювала з нету, і практично нічого не міняла, це мабуть якась універсальна штука
//  для повільного переходу по всіх ссилках (щоправда я тут майже нічо не зрозуміла):\)



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



// $(document).ready(function(){
//     $("#page1").on("click","a", function (event) {
//         event.preventDefault();
//         let id  = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({scrollTop: top}, 1000);
//         $('.cloud4').animate({
//             top: '+=400px'
//         },1000)
//     });
//     $("#page2").on("click","a", function (event) {
//         event.preventDefault();
//         let id  = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({scrollTop: top}, 1000);
//         $('.cloud4').animate({
//             top: '-=400px'
//         },1000)
//     });

// });

//    