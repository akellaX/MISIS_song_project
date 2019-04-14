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
    })
}

$(fillTable());
