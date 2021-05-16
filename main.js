$(document).ready(function() {
    $("#lines").click(function() {
        $(this).hide();
        $('#cross').fadeIn(700);
        $('#nav-hid').fadeIn(700);
    });

    // $("#cross").click(function () {
    //     $(this).hide();
    //     $('#lines').css('display', 'block');
    //     $('#nav-hid').hide();
    // });
});

$(document).on('click', function(event) {
    // ... clicked on the 'body', but not inside of #nav-hid
    $('#cross').hide();
    $('#lines').fadeIn(700);
    $('#nav-hid').fadeOut(500);
});
$('#nav-hid').on('click', function(event) {
    event.stopPropagation();
});
$('#lines').on('click', function(event) {
    event.stopPropagation();
});
// that's one steeep cliff face
// in episode 3 of jojo's bizarre adventure, there's this really short scene when jojo arrives at london and the city is introduced in a similar way. 
// This method is pretty common in many animated shows. 
// I got lazy and stopped making my own art assets and put this together with images found from around the web -_-
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
    })
    .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
    }).add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i + 1)
    }).add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });