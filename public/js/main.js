$(function() {
	console.log('hello');
    $('#posting-form').submit(function() {
        $.ajax({
            type: 'POST',
            url: '/api/posting',
            data: $("#posting-form").serialize(),
            success: function(data) {
            	$('#success-message').show();
            }
        });
        return false;
    }); 
})