



function B1() { $('.texteditor').css('font-weight', 'Bold') };

function B2() {$('.texteditor').css('font-style', "italic") };

function B3() {$('.texteditor').css('text-Decoration' , "underline") };


$('#textSize') .change (function(){
    $('.texteditor').css('font-size', $('#textSize').val() ) ;
    // console.log($('.texteditor').html() , 'hhhh')
// alert()
    console.log( $('#textSize').val())  ;
})

//function size23 (){
//    document.querySelector('.texteditor').style.fontSize  = document.getElementById('textSize').value + "px";
//
//    console.log(document.getElementById('textSize').value) ;
//}


function police (){
    $('.texteditor').css('font-family',   $('#policetype').val()) ;

    console.log(document.getElementById('policetype').value) ;
}




// function Size1() {document.querySelector('.texteditor').style.fontSize = "10px"; }
// function Size2() {document.querySelector('.texteditor').style.fontSize = "20px"; }
// function Size3() {document.querySelector('.texteditor').style.fontSize = "30px"; }
// function Size4() {document.querySelector('.texteditor').style.fontSize = "40px"; }