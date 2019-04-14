var fillTable = function(data){
     $('.table').append('<thead>'+'<tr>'+'<th>Song</th>'+'<th>Artist</th>'+'<th>Album</th>'+'</tr></thead>');
    for(var i=0 ;i< data.length;i++)
    {
       $('.table').append('<tbody>'+
                        '<tr class="choosenSong" id= "'+data[i].id+'">'+
                        '<td>'+data[i].title+'</td>'+
                        '<td>'+data[i].artist_name+'</td>'+
                        '<td>'+data[i].album_title+'</td>'+
                        '</tr>'+
                          '</tbody>');
    }
    $('.choosenSong').on('click', function(){
        getPage(this.id);
    })
}

var getTable = function(){
    $.ajax({
        type : 'POST',
        url : 'http://localhost:3000/editSong',
        success: function(data){
                console.log(data);
                fillTable(data);
            
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

$(getTable());

var getPage = function(id){
    	$.ajax({
        type : 'POST',
        url : 'http://localhost:3000/editPage/edit',
        data : 'id='+id,
        success: function(data){
            window.location = data.redirect; 
        }
        });
}
            