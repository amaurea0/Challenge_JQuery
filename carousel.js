$(document).ready(function () {

    var $carrousel = $('#carrousel'),
        $img = $('#carrousel img'),
        indexImg = $img.length - 1, // last element index
        i = 0; // comptor

    function showImg() {
        $img.css('display', 'none');
        $currentImg = $img.eq(i);   //display current picture
        $currentImg.css('display', 'block');
    }

    showImg();

    $('.next').click(function () { // next picture
        i++; 
        if (i > indexImg) i = 0;
        showImg();

    });

    $('.prev').click(function () { // previous picture
        i--;
        if (i > indexImg) i = indexImg;
        showImg();
    });

    function slideImg() {
        setInterval(function () {
            i++;
            if (i > indexImg) i = 0;
            showImg();
        }, 3000); // interval 3000 millisecondes (3s)
    }

    slideImg();

});
