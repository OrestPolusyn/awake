"use strict";


$(document).ready(function () {

	$(".btn-style").on("click", function(e){
		
		$.ajax({
			type: "POST",
			url: 'opect.pol@i.ua',
			data: {
				fn: $('input[name=fn]').val(),
				tel: $('input[name=tel]').val(),
				ms: $('textarea[name=ms]').val(),
			},
			success: function (result) {
				alert('Your message send!');
			},
			error: function (xhr, status, p3) {
				alert(xhr.responseText);
			}
		});
		
		e.preventDefault();
	})
		
	
})


// const urlDB = "https://newsdirect.newsquantified.com/support/SendEmailFromLandingPage";

// const addUser = (fn, co, em, ph, ct, ms) => {
//     const newPost = {
//         fn: fn,
//         co: co,
//         em: em,
//         ph: ph,
//         ct: ct,
//         ms: ms
//     };
//     return fetch(urlDB, {
//         method: 'POST',
//         body: JSON.stringify(newPost),
//         headers: {
//             "Content-type": "application/json"
//         }
//     })
//         .then(response => {
//             if (response.ok) return alert('Your message send!');
//             throw new Error('Error:' + response.statusText);
//         })
//         .catch(error => console.log(error));
// }

// let form = document.querySelector('.js-form'),
//     userName = document.querySelector('input[name=fn]'),
//     userCorporation = document.querySelector('input[name=co]'),
//     userEmail = document.querySelector('input[name=em]'),
//     userPhone = document.querySelector('input[name=ph]'),
//     userCountry = document.querySelector('select[name=ct]'),
//     userMessage = document.querySelector('textarea[name=ms]');

// form.addEventListener("click", getUsersData);

// function getUsersData(event) {
//     event.preventDefault();
//     const target = event.target;
//     if (target.dataset.action === "create")  {
//         addUser(userName.value,
//             userCorporation.value,
//             userEmail.value,
//             userPhone.value,
//             userCountry.value,
//             userMessage.value)
//             .then(alert('Your message send!'));
//     }
// }