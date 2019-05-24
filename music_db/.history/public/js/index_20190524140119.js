$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('#loginbtn').on('click',function(e){
	e.preventDefault();
	var pass = $('#password').val();
	var login = $('#loginfield').val();

	if (!login || !pass) {
		alert('write down login and/or password');
		return;
	}
	$.ajax({
		type: 'POST',
		url: 'http://localhost:3000/checkLogIn',
		data: 'login=' + login + '&password=' + pass,
		success: function (data) {
			console.log(data);
			window.location = data.redirect;
		},
		error: function(err) {
			alert('wrong login or password, please try again');
		}

	})
	});
$('#registration').on('click',function(e){
	e.preventDefault();
	var pass = $('#pass').val();
	var login = $('#log').val();
	var fn = $('#fn').val();
	var ln = $('#ln').val();


	$.ajax({
		type: 'POST',
		url: 'http://localhost:3000/addUser',
		data: 'log=' + login + '&pass=' + pass + '&fn='+fn + '&ln='+ln,
		success: function (data) {
			alert(data);

		}

	})
	});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});





