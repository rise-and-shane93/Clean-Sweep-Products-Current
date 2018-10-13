/*smooth scrolling
this will be an arrow that appears on the bottom
right-hand corner of the page after you scroll
more than 400px from the top. Upon click, it will
scroll you back to the top.
*/
var $upArrow = $('.up-arrow');

$upArrow.css('opacity', '0');
$(window).scroll(function(event) {
    if($(this).scrollTop() > 400) {
        $upArrow.css('opacity', '1').fadeIn();
    } else {
        $upArrow.css('opacity', '0').fadeOut();
    }
});
$upArrow.click(function() {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
});

//select correct nav tab on sweeping compound page
/*when a user clicks on "(read more)"
on a link in the home page's nav tabs, it will
then link them to the correct nav tab on the 
sweeping compound page
*/
//on index.html page
var $tabLinkLessReg = $('.regular');

//on sweeping-compound.html page
var $regPanelMore = $('#regPanelMore');

$tabLinkLessReg.click(function() {
    $regPanelMore.addClass("active");
});

/*smooth scrolling
this will be an arrow that appears just below
'click to continue.' Upon click, it will smooth
scroll to the private label article.
*/
/*
var $downArrow = $('.down-arrow');
var $privateLabel = $('#private-label');

$downArrow.hide().delay(2000).fadeIn(1000);

$downArrow.click(function() {
    $('html, body').animate({scrollTop: $downArrow.offset().top}, 800);
});
*/
//form submitted button
var $submitMessage = $('form .btn-outline-success');
var $submitBtn = $('form .btn-submit');
var $cardFront = $('.about-front');
var $returnButton = $('.return-button');

$submitMessage.hide();
$submitBtn.click(function() {
    if($(":input, textarea").val() !== "" )
    $submitMessage.slideDown(500).delay(5000).slideUp(500);
});

var images = [
    "images/compound1.png",
    "images/compound2.png",
    "images/compound3.png",
    "images/compound4.png",
    "images/compound6.png"
];

var sweepingProduct = document.querySelector('.compoundImage');

var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("minus");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

function getRandomImage() {
    var img = '<img alt=\"An image of sweeping compound.\" class=\"img-fluid random-image\" src=\"';
    var randomImg;
    randomImg = Math.floor(Math.random() * images.length);
    img += images[randomImg];
    img += '\">';
    return img;
};

// sweepingProduct.innerHTML = getRandomImage();
//Company Statement hover effect
/*
var $statement = $('.CEOstatement');
var $message = $('.message');
var $statementBtn = $('.message button');
var $statementText = $('.statement h3, .statement p');

$statementBtn.click(function() {
    $message.hide();
    $statementText.css({"color": "black", "text-shadow": "none"});
});
*/