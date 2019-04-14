var artist;
var song;
var url;
var cover;
var artistUrl;
var album;
var album_year;

function getDrowDownMenu() {
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
}

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
$(getDrowDownMenu());
function simpleGet()
{
    var tmp_artist=$('#getArtist').val();
    var tmp_song=$('#getSong').val();

    $.ajax({
        url: "http://itunes.apple.com/search?term="+tmp_artist+"+"+tmp_song,
        dataType: 'JSON'
    })
    .done(function(data) { 
        try{
		console.log(data);
		artist = data.results[0].artistName;
		song = data.results[0].trackName;
		url = data.results[0].previewUrl;
		cover = data.results[0].artworkUrl100;
		artistUrl = data.results[0].artistViewUrl;
		album = data.results[0].collectionName;
		album_year = data.results[0].releaseDate;
		album_year = album_year.substring(0,4);
		fillGaps();
        }
        catch(e)
            {
             alert("Artist or/and song are not found");                
            }
 })
    .fail(function(data) { 
        console.log(data);
                         })
	$("#addSong").show();
	$("#albumDescr").show();
}

$(document).on("click","#searcheng",simpleGet);

function fillGaps()
{
	$('#artist_add').val(artist);
	$('#song_add').val(song);
	$('#cover').attr("src", cover);
	$('#player').attr("src", url);
	$('#albumTitle_add').val(album);
	$('#albumYear_add').val(album_year);
}


$('#openModal').on('click', function(e) {
    e.preventDefault();
	console.log(artistUrl);
    $(".modal-body").html('<iframe width="100%" height="100%" frameborder="0" scrolling="yes" allowtransparency="true" src="'+artistUrl+"&output=embed"+'"></iframe>');
});

$('#add_artist').on('click',function(e){
	var artist = $('#artist_add').val();
	var photo = $('#photo_add').val();
	var description = $('#description_add').val();
	var album = $('#albumTitle_add').val();
	var year = $('#albumYear_add').val();
	var ganre = $('#sel1').val();
	var album_cover = $('#albumCover_add').val();
	var song = $('#song_add').val();
	
	console.log(album + " " + year +" "+ ganre + " "+ album_cover);
	$.ajax({
        type : 'POST',
        url : 'http://localhost:3000/addPage/addArtist',
        data : 'artist='+artist+'&photo='+photo+'&description='+description,
        success: function(data){
                    console.log(data);
            $.ajax({
            type : 'POST',
            url : 'http://localhost:3000/addPage/addAlbum',
            data : 'artist='+artist+'&album='+album+'&year='+album_year+'&ganre='+ganre + '&album_cover='+ album_cover,
            success: function(data){
            console.log(data);
            $.ajax({
                type : 'POST',
                url : 'http://localhost:3000/addPage/addSong',
                data :'album='+album+'&song='+song+'&cover='+cover + '&url='+ url,
                success: function(data){
                    console.log(data);
                    }

    });
                
                }

    });
	
            }

    });


});

$('#albumDescr').on('click', function(e) {
	    window.location.replace(artistUrl);
});


