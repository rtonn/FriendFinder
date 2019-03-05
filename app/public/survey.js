

// Listener for submit button click
$('#submit').on('click', function (event) {  
    event.preventDefault();

    // Set local variables
    var matchStatus = $('.modal-title');
    var modalBody = $('.modal-body');

    // set responses to local variables
    var name = $('#name').val().trim();
    var photo = $('#photo').val();
    var item1 = parseInt($('#item1').val());
    var item2 = parseInt($('#item2').val());
    var item3 = parseInt($('#item3').val());
    var item4 = parseInt($('#item4').val());
    var item5 = parseInt($('#item5').val());
    var item6 = parseInt($('#item6').val());
    var item7 = parseInt($('#item7').val());
    var item8 = parseInt($('#item8').val());
    var item9 = parseInt($('#item9').val());
    var item10 = parseInt($('#item10').val());


    // Set data to be sent to server
    var userData = {
        name: name,
        photo: photo,
        scores: [
            item1,
            item2,
            item3,
            item4,
            item5,
            item6,
            item7,
            item8,
            item9,
            item10
        ]
    };
    // If responses are valid...
    if (
        (name !== '') && (photo !== '') && (!isNaN(item1)) &&
        (!isNaN(item2)) && (!isNaN(item3)) && (!isNaN(item4)) &&
        (!isNaN(item5)) && (!isNaN(item6)) && (!isNaN(item7)) &&
        (!isNaN(item8)) && (!isNaN(item9)) && (!isNaN(item10))
    ) {
        // Grab the URL of the website
        var currentURL = window.location.origin;
        // AJAX post the data to the friends API. 
        $.post(currentURL + "/api/friends", userData, function (data) {
            // If the data has a match, then show this
            if (data.name !== undefined) {
                matchStatus.html('Your match...');
                modalBody.html('<p>...is ' + data.name + '!</p><img src="' + data.photo + '" height="200">');
            } else {
                // If no match, show this
                matchStatus.html('Not enough data!');
                modalBody.html('<p>Unfortunately not enough user data to match you</p>');
            }
            // Toggle modal on
            $('.modal').modal('toggle');
        });
    } else {
        // If the form was not valid, this error is shown
        matchStatus.html('Error...');
        modalBody.html('Please answer all questions on the form.');
        // Toggle modal on
        $('.modal').modal('toggle');
    }
});
// $('#friend-form').reset();
