$(document).ready(function() {

    $('.nav a').click(function(e) {
        e.preventDefault()
        $(this).addClass('.active')
    });
});
