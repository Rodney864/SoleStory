$('nav a').on('click', function(event) {
    event.preventDefault();

    var href = $(this).attr('href');

    $('#slider').hide();

    if (href === 'ContactUs.html' || href === 'index.html') {
        window.location.href = href;
    } else {
        $.ajax({
            url: href,
            success: function(data) {
                $('#content').html(data);
            }
        });
    }
});

