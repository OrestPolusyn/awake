"use strict";


$(document).ready(function () {

	$(".btn-style").on("click", function(e){
		$.ajax({
			type: "POST",
			url: 'awake.studio@yandex.com',
			data: {
				fn: $('input[name=fn]').val(),
				tel: $('input[name=tel]').val(),
				ms: $('textarea[name=ms]').val(),
			},
			success: function (result) {
				// alert('Your message send!');
			},
			error: function (xhr, status, p3) {
				alert(xhr.responseText);
			}
		});
		
		e.preventDefault();
	})
		
	
})
