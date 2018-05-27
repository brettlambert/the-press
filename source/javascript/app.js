// Shared mainNav toggle function
var toggleMainNav = function(){

    // Get main-nav element
    var mainNav = document.querySelector('.main-nav');

    // If mainNav is found, toggle 'open' class
    if(mainNav !== undefined){
        mainNav.classList.toggle('open');
    }

};

document.addEventListener('DOMContentLoaded', function () {

    // Get navbar-burger element
    var $navbarBurger = document.querySelector('.navbar-burger');

    // If navbar-burger exists, add EventListener
    if ($navbarBurger !== undefined) {

        // Add click event listener to burger
        $navbarBurger.addEventListener('click', function(e) {
            toggleMainNav();
        });
    }

    // Get nav-close element
    var $navbarClose = document.querySelector('.nav-close button');

    // If nav-close exists, add EventListener
    if ($navbarClose !== undefined) {

        // Add click event listener to close button
        $navbarClose.addEventListener('click', function(e) {
            toggleMainNav();
        });
    }

    baguetteBox.run('.bolt-imagelist');
});
