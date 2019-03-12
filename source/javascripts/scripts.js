TweenMax.from('.logo-top', 1, {y:-50, opacity:0} );
TweenMax.from('.img-main', 1, {opacity:0, delay: 1})
TweenMax.staggerTo('.img-colors', 1, {opacity:1, y:50, delay:2}, 0.2);
TweenMax.from('.img-colors', 1, {delay:3, onComplete: loadFinish});


function loadFinish(){
    var elmnt = document.getElementById("colors");
    elmnt.scrollIntoView();
    TweenMax.to('.menu-colores', 1, {opacity:1, delay: 1});
}

function functionClick(){
    // alert("Ejercicio R/GA");
    
}