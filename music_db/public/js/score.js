var fillTable = function(){
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
        type : 'POST',
        url : 'http://localhost:3000/getScore',
        success: function(data){
                console.log(data);
			
			   for(var i=0 ;i< data.length;i++)
    {
       $('.table').append('<tbody>'+
                        '<tr class="choosenSong" id= "'+data[i].login+'">'+
                        '<td>'+data[i].login+'</td>'+
						 '<td>'+data[i].wins+'</td>'+
                        '<td>'+data[i].losses+'</td>'+
                        '</tr>'+
                          '</tbody>');
    }
			
               
        }
	});
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

$(fillTable());
