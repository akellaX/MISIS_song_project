var inf;
var id;
var artist_id;
var album_id;
var onStart = function(){
    var url_string = $(location).attr('href'); 
    var url = new URL(url_string);
    id = url.searchParams.get("valid");
    $.ajax({
    type : 'POST',
    url : 'http://localhost:3000/getAllInf',
    data :'id='+id,
    success: function(data){
            console.log(data);
            inf=data;
            fillGaps(data);
        artist_id = data.artist_id;
        album_id = data.album_id;
        }
    })
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
$(onStart);

var fillGaps = function(row){
    $("#albumTitle_add").val(row.album_title);
    $("#albumYear_add").val(row.released_date);
    $("#description_add").val(row.artist_description);
    $("#photo_add").val(row.artist_photo)
    $("#sel1 [value='"+row.ganre+"']").attr("selected", "selected")
    $("#getArtist").val(row.artist_name);
    $("#getSong").val(row.song_title);
    $("#cover").attr('src', row.song_cover);
    $("#player").attr('src', row.song_audio);
    $("#artist_photo").attr('src', row.artist_photo);
}

 $(document).on('click','#reverse',function(){
     fillGaps(inf);
 })

 $(document).on('click','#save',function(){
     var albumTitle = $("#albumTitle_add").val();
     var albumYear =  $("#albumYear_add").val();
     var description =  $("#description_add").val();
     var photo =  $("#photo_add").val();
     var artist_name =  $("#getArtist").val();
     var song_title =  $("#getSong").val();
     var ganre = $('#sel1').val();
     var q = 'id='+ id + '&albumtitle='+ albumTitle + '&albumyear=' +albumYear +'&artistdesc=' + description + '&photo=' + photo + '&artistname='+ artist_name + '&songtitle=' + song_title + '&ganre=' +ganre + '&artistid='+ artist_id +'&albumid=' + album_id;
     $.ajax({
    type : 'POST',
    url : 'http://localhost:3000/changeInf',
    data : q,
    success: function(data){
        alert(data);
        onStart();
        }
    })  
     
 });



