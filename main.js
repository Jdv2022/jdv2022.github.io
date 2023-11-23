/* 
|   This is for the nav bar colors
*/
$(window).scroll(function(){
    const navTop = $('nav').offset().top
    const hasClass = $('nav').hasClass('nav-design')
    if(navTop === 0){
        $('nav').removeClass('nav-design')
        $('.nav-r-text').css('color', 'white')
        $('.smooch-texts').css('color', 'white');
    }
    else if(!hasClass){
        $('nav').addClass('nav-design')
        $('.nav-r-text').css('color', 'black')
        $('.smooch-texts').css('color', 'black');
    }   
});