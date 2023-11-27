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
    const formData = $(this).serialize();
    $.ajax({
        url: 'https://api-visit.jdv2022-projects.tech/form/submit',
        method: 'POST',
        data: formData,
        success: function(response) {
            if(response['message'] === 'Success'){
                $('#success').modal('show');
            }
            else{
                $('#failed').modal('show');
            }
        },
        error: function(xhr, status, error) {
            $('#failed').modal('show');
            console.error('Request failed:', status, error);
        }
    });
});