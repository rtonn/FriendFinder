
$(document).ready(function () {
    $('select').material_select();
    $('.modal').modal({
        dismissible: false, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%' // Ending top style attribute
    });
});
// Activate submit button
$('#submitButton').on('click', function (event) {
    event.preventDefault();
    // Gather user inputs
    var userInput = {
        name: $('#userName').val().trim(),
        photo: $('#userPhoto').val().trim(),
        scores: [
            $('#item1').val().trim(),
            $('#item2').val().trim(),
            $('#item3').val().trim(),
            $('#item4').val().trim(),
            $('#item5').val().trim(),
            $('#item6').val().trim(),
            $('#item7').val().trim(),
            $('#item8').val().trim(),
            $('#item9').val().trim(),
            $('#item10').val().trim()
        ]
    };

    // Add user inputs to friends list
    $.post('/api/friends', userInput)
        .done(function (data) {

            // Set the name and image values of friend match
            $('#userMatch').html(data.matchName);
            $("#userMatchImage").attr("src", data.matchImage);

            // Pop open the modal dialog
            $('#modal1').modal('open');
        });
});