$(function() {
    // AJAX call logic:
    var submit_form = function(e) {
        $.ajax({
            method: "POST",
            url: $SCRIPT_ROOT + "/_add_numbers",
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify(
                {
                    a: $('input[name="a"]').val(),
                    b: $('input[name="b"]').val()
                }, 
                null, 
                '\t'
            ),
        })
        .done(function( data ) {
            $('#result').text(data.result);
            $('input[name=a]').focus().select();
        });

        return false;
    };

    // Make AJAX call when: 
    //      1. The button is clicked -OR- 
    //      2. The return key is pressed
    $('a#calculate').bind('click', submit_form);
    $('input[type=text]').bind('keydown', function(e) {
        if (e.keyCode == 13) {
            submit_form(e);
        }
    });

    // Make the first textbox gain focus...
    $('input[name=a]').focus();
});