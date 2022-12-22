$(document).ready(function () {
    // // Init Scrollspy
    // $('.scrollspy').scrollSpy();
    // Init slider
    $('.slider').slider({
        indicators: false,
        interval: 5000
    });

    $('.fixed-action-btn').floatingActionButton();

    $('.parallax').parallax();

    $('.tooltipped').tooltip();

    $('.materialboxed').materialbox();


    // $('.scrollspy').scrollSpy({
    //     activeClass: 'animate__animated'
    // });
});