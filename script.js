var activeElement = function () {  

    getReset();
    activClass();

};

var activClass = function () {
    
    if (event.target.className == 'block_box'){

        event.target.classList.add ('block_box_red');
        
    }

};

var getReset = function () {

    var element = document.getElementsByClassName('block_box_red');

    for (var i = 0; i < element.length; i++) {

        element[i].classList.remove('block_box_red');

    }
}

addEventListener ('click', activeElement);