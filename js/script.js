$(document).ready(function () {
    // scroll
    $(window).scroll(function () {
        if ($(document).scrollTop() > 350) {
            $("#main_nav").addClass("fixed-top bgnav");
        } else {
            $("#main_nav").removeClass("fixed-top bgnav");
        }
    });
    //onepagenav
    $('.navbar').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {
            //I get fired when the animation is starting
        },
        end: function () {
            //I get fired when the animation is ending
        },
        scrollChange: function ($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });
    //simpleLightbox
    var glightbox = $('.glightbox a').simpleLightbox({});
    //scrollToTop
    var $button = $.backToTop({
        // background color
        backgroundColor: '#962323',
        // text color
        color: '#FFF',
        // width/height of the back to top button
        height: 40,
        width: 40,
    });
});