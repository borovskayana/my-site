    

window.onload = () => {
    let input = document.querySelector("#input-dance");
    input.oninput = function() {
        let value = this.value.trim();
        let list = document.querySelectorAll(".jumbotron");

        if (value != "") {

            list.forEach(function (elem) {
                if(elem.innerText.search((RegExp(value, "gi"))) == -1) {
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

