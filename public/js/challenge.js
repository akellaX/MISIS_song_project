var inf;
var id;
var artist_id;
var album_id;
var guessed = 0;
var passed = 0;
var num;
var arr;
var onStart = function () {
	var url_string = $(location).attr('href');
	var url = new URL(url_string);
	id = url.searchParams.get("valid");
	$.ajax({
		type: 'POST',
		url: 'http://localhost:3000/getChallengeInfo',
		data: 'id=' + id,
		success: function (data) {
			console.log(data);
			num = data.num;
			$('#greetings').text("Challenge: " + data.title);
			$('#song_num').text("played " + passed + " songs out of " + data.num);
		}
	})
			$.ajax({
		type: 'POST',
		url: 'http://localhost:3000/getType',
		success: function (data) {
			console.log(data);
			if (data == "guest")
				{
			$('#editp').hide();
			$('#addp').hide();
				}
		}
	});
	$.ajax({
		type: 'POST',
		url: 'http://localhost:3000/getChallengeSongs',
		data: 'id=' + id,
		success: function (data) {
			console.log(data);
			arr = data;
		}
	})
}
$(onStart);
var curr_song;
$(document).on('click', '#getSong', function () {
	if (passed == num) {
		$("#getSong").text("Get Results");
		$("#getSong").on("click", alert("you guessed " + guessed + " out of " + num));
	} else {
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/main/giveChallengeSong',
			data: 'id=' + arr[passed].song_id,
			success: function (data) {
				curr_song = data;
				$('#player').attr("src", data.song_audio);
			}
		});
		$('#song_num').text("played " + passed + " songs out of " + num);
		$('#answerBlock').show();
		$('#getSong').hide();
	}
})

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
			if (data == 1) {
				guessed++;
				$('.table').append(
					'<tr class="right choosenSong" id= "' + curr_song.artist_id + '">' +
					'<td>' + curr_song.song_title + '</td>' +
					'<td>' + curr_song.artist_name + '</td>' +
					'<td><img src=' + curr_song.song_cover + '></td>' +
					'</tr>')
			} else {
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



	$('#answerBlock').hide();
	$('#getSong').show();
	passed++;


})