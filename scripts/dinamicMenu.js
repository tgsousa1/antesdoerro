$('.container').on("scroll", function() {
    let navbar = $('.navbar');
    let img = $('#home-img');
    let imgPosition = img.position().top + img.outerHeight(true);
    let death = document.querySelector(".navbar").classList;
    
    if (imgPosition < 0){
        navbar.addClass("fixed-navbar");
    }
    else if(death.contains("fixed-navbar"))
    {
        navbar.removeClass("fixed-navbar");
    }
});