/* 
|   This is for the nav bar colors
*/
$(window).scroll(function(){
    const navTop = $('nav').offset().top
    const hasClass = $('nav').hasClass('nav-design')
    if(navTop === 0){
        $('nav').removeClass('nav-design')
        $('nav').addClass('nav-design-reverse')
        $('.nav-r-text').css('color', 'white')
        $('.smooch-texts').css('color', 'white');
    }
    else if(!hasClass){
        $('nav').addClass('nav-design')
        $('nav').removeClass('nav-design-reverse')
        $('.nav-r-text').css('color', 'black')
        $('.smooch-texts').css('color', 'black');
    }   
});
/* 
|   Ajax                    
*/
$('#contactMeForm').submit(function(event) {
    event.preventDefault();
    console.log('this is working')
    const formData = $(this).serialize();
    console.log('formdata', formData);
    $.ajax({
        url: 'https://api-visit.jdv2022-projects.tech/form/submit',
        method: 'POST',
        data: formData,
        success: function(response) {
            console.log(response);
        },
        error: function(xhr, status, error) {
            console.error('Request failed:', status, error);
        }
    });
});