// $('#navHamburger').click(function() {
//     $('#navHamburger').toggleClass('open');
//     $('#topNavBackdrop').toggleClass('open');
//     $('#topNav').toggleClass('open');
//     // $("body").toggleClass("no-scroll");
// });

// $('#topNavBackdrop').click(function() {
//     $('#navHamburger').toggleClass('open');
//     $('#topNavBackdrop').toggleClass('open');
//     $('#topNav').toggleClass('open');
//     // $("body").toggleClass("no-scroll");
// });

$("#hamburger").click(function() {
    $("#hamburgerMaxArea").toggleClass("open");
    $("#hamburgerArea").toggleClass("open");
    $("#hamburger").toggleClass("open");
    $("#hero-logo").toggleClass("open");
});

$("#hero-logo").click(function() {
    $("#hamburgerMaxArea").removeClass("open");
    $("#hamburgerArea").removeClass("open");
    $("#hamburger").removeClass("open");
    $("#hero-logo").removeClass("open");
});

$("#hamburgerMaxArea").click(function() {
    $("#hamburgerMaxArea").addClass("open");
    $("#hamburgerArea").addClass("open");
    $("#hamburger").addClass("open");
    $("#hero-logo").addClass("open");
});