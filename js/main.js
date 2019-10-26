
let dark = false;

$(document).ready(function (){
    console.log("what");
    var stickydock = $('#nav').offset();
    var $window = $(window);
    $window.scroll(function() {
        if($window.scrollTop() >= stickydock.top){
            $('#nav').addClass('is-fixed-top');
        } else {
            $('#nav').removeClass('is-fixed-top');
        }
    });
});

function switchmode(){
    if (dark){
        dark = false;
        setP('--background-color', 'white')
        setP('--background-secondary', "white");
        setP('--box-color', "white")
        setP('--text-color', "black")
        setP('--background-image', "url('../img/city2.png')");
    } else {
        dark = true;
        setP('--background-color', '#222831');
        setP('--background-secondary', "#3B4048");
        setP('--box-color', "#393e46");
        setP('--text-color', "white");
        setP('--background-image', "url('../img/city.png')");
    }
}

function setP(property, value){
    document.documentElement.style.setProperty(property, value);
}

function openDropdown(){
    if($("#menu").hasClass('is-active')){
        $("#menu").removeClass('is-active');
    }else {
        $("#menu").addClass('is-active');
    }
}