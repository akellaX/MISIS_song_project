$(function () {
		$.ajax({
		type: 'POST',
		url: 'http://localhost:3000/getType',
		success: function (data) {
			console.log(data);
			if (data == "guest")
				{
					console.log("asdads");
			$('#editp').hide();
			$('#addp').hide();
				}
		}
	});
	
	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/getUser',
		success: function (data) {
			$('#greetings').text("Hello, " + data);
		}
	});

	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/getScore',
		success: function (data) {
			$('#wins').text("wins: " + data.wins);
			$('#losses').text("losses: " + data.losses);
		}
	});

	$('#answerBlock').hide();

	$.ajax({
		type: 'POST',
		url: 'http://localhost:3000/getChallenges',
		success: function (data) {
			console.log(data);
			for (var i = 0; i < data.length; i++)
				$(".dropdown-menu").append('<li><a class="chosen_challenge"  id="' + data[i].id + '" href="#">' + data[i].title + '</a></li>');
			$('.chosen_challenge').on('click', function () {
				console.log("pressed");
				getChellPage(this.id);
			});
		}

	});


})
var getChellPage = function (id) {
	$.ajax({
		type: 'POST',
		url: 'http://localhost:3000/goToChallengePage',
		data: 'id=' + id,
		success: function (data) {
			window.location = data.redirect;
		}
	});
}

$(document).on('click', '#check', function () {
	var pass = $('#password').val();
	var login = $('#login').val();

	$.ajax({
		type: 'POST',
		url: 'http://localhost:3000/checkLogIn',
		data: 'login=' + login + '&password=' + pass,
		success: function (data) {
			console.log(data);
			window.location = data.redirect;

		}

	});

})
var curr_song;
$(document).on('click', '#getSong', function () {
	$.ajax({
		type: 'POST',
		url: 'http://localhost:3000/main/giveRandomSong',
		success: function (data) {
			curr_song = data;
			//           $('#cover').attr("src",data.song_cover);
			$('#player').attr("src", data.song_audio);
		}
	});
	$('#answerBlock').show();
	$('#getSong').hide();
})

function getItunesInf(artist, song) {
	console.log(artist + " " + song);
	$.ajax({
			url: "http://itunes.apple.com/search?term=" + artist + "+" + song,
			dataType: 'JSON'
		})
		.done(function (data) {
			console.log(data);
			temp = data;
			fillGaps(data);
		})
		.fail(function (data) {
			console.log(data);
		})
	//        $('#artist').text(artist);
	//        $('#song').text(song);

}

function fillGaps(data) {
	//   $('#cover').attr("src",data.results[0].artworkUrl100);
	$('#player').attr("src", data.results[0].previewUrl);
}

$(document).on('click', '#checkButton', function () {
	var artist = $("#guessArtist").val();
	var song = $("#guessSong").val();
	var ans;
	$.ajax({
		type: 'POST',
		url: 'http://localhost:3000/main/checkSong',
		data: 'song=' + song + '&artist=' + artist,
		success: function (data) {
			console.log(data);
			console.log(data == 1)
			if (data == 1)
				$('.table').append(
					'<tr class="right choosenSong" id= "' + curr_song.artist_id + '">' +
					'<td>' + curr_song.song_title + '</td>' +
					'<td>' + curr_song.artist_name + '</td>' +
					'<td><img src=' + curr_song.song_cover + '></td>' +
					'</tr>')
			else {
				$('.table').append(
					'<tr class="wrong choosenSong" id= "' + curr_song.artist_id + '">' +
					'<td>' + curr_song.song_title + '</td>' +
					'<td>' + curr_song.artist_name + '</td>' +
					'<td><img src=' + curr_song.song_cover + '></td>' +
					'</tr>')

			};

			$('.choosenSong').on('click', function () {
				var id = this.id;
				$('#myModal').modal('show');
				$.ajax({
					type: 'POST',
					url: 'http://localhost:3000/artistInfo',
					data: 'id=' + id,
					success: function (data) {
						$('.modal-title').text(data.name);
						$('.photo').attr('src', data.photo);
						$('.desc').text(data.description);
					},

				});
				$.ajax({
					type: 'POST',
					url: 'http://localhost:3000/artistAlbumInfo',
					data: 'id=' + id,
					success: function (data) {
						console.log(data);
						$('.albums').empty();
						console.log(data.length);
						for (var i = 0; i < data.length; i++) {
							$('.albums').append(
								'<td>' +
								'<img src="' + data[i].cover + '">' +
								'<p>' + data[i].album_title + '</p>' +
								'<p>' + data[i].released_date + '</p>' +
								'</td>'
							)
						}
					},

				});
			});
		}
	});
	$("#guessArtist").val("");
	$("#guessSong").val("");

	$('#player').each(function () {
		this.pause();
		this.currentTime = 0;
	});

	$.ajax({
		type: 'GET',
		url: 'http://localhost:3000/getScore',
		success: function (data) {
			$('#wins').text("wins: " + data.wins);
			$('#losses').text("losses: " + data.losses);
		}
	});


	$('#answerBlock').hide();
	$('#getSong').show();

})