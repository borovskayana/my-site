
$(document).ready(function(){
    $(".slider-min").slick({
         arrows:true,
         dots:true,
         adaptiveHight:true,
         slidesToShow:3,
         asNavFor:".slider-big",
         responsive: [
            {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
            },
            {
            breakpoint: 991,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots:false,
            }
            },
            {
            breakpoint: 500,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots:false,
            adaptiveHight:true,
            }
            }
            ]
      
  
        
   }); 
   $(".slider-big").slick({
      arrows:false,
      fade:true,
      asNavFor:".slider-min",
     
   
     
}); 
});
   