window.onload = () => {
    let input = document.querySelector("#input");
    input.oninput = function() {
        let value = this.value.trim();
        let list = document.querySelectorAll(".searchdiv");

        if (value != "") {

            list.forEach(elem => {
                if(elem.innerText.search(value) == -1) {
                    elem.classList.add("hide")
                };
            });
        } else {
            list.forEach(elem => {
                elem.classList.remove("hide");
            });
        };


        console.log(this.value);
    };
};


$(document).ready(function(){
 $("#home-titles").slick({
    arrows:true,
     dots:true,
      slidesToShow:3,
      initialSlide:2,
      centerMode:true,
      autoplay:true,
      autoplaySpeed:2000,
      pauseOnFocus:false,
      pauseOnHover:false,
      responsive: [
        {
        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        }
        },
        {
        breakpoint: 991,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        }
        },
        {
        breakpoint: 500,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
        }
        ]
       
  });
}); 


