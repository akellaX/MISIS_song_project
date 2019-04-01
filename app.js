var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');

var login;
var user_id;
var curr_artist;
var curr_song;
var type;

app.use('/index.html', express.static(__dirname + '/index.html'));
app.use('/mainPage.html', express.static(__dirname + '/mainPage.html'));
app.use('/addPage.html', express.static(__dirname + '/addPage.html'));
app.use('/editPage.html', express.static(__dirname + '/editPage.html'));
app.use('/editModal.html', express.static(__dirname + '/editPage.html'));
app.use('/score.html', express.static(__dirname + '/score.html'));
app.use('/challengePage.html', express.static(__dirname + '/score.html'));



app.use( express.static(__dirname + '/public'));

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




app.get('/', function(req, res){
    res.sendFile('index.html', { root: __dirname } );
});

app.get('/addPage', function(req, res){
    res.sendFile('addPage.html', { root: __dirname } );
});
app.get('/score', function(req, res){
    res.sendFile('score.html', { root: __dirname } );
});

app.get('/main', function(req, res){
    res.sendFile('mainPage.html', { root: __dirname } );
});

app.get('/editPage', function(req, res){
    res.sendFile('editPage.html', { root: __dirname } );
});
app.get('/editModal', function(req, res){
    res.sendFile('editModal.html', { root: __dirname } );
});
app.get('/challengePage', function(req, res){
    res.sendFile('challengePage.html', { root: __dirname } );
});
var urlencodedParser = bodyParser.urlencoded({extended: false});


app.use(bodyParser.json());
var mysql = require('mysql');

app.listen('3000',function(){
    console.log("Server started on port 3000");
});

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '53772626',
    database: 'music_db'
});

db.connect(function(err){
    if(err)
        throw err;
    else console.log('Connected');
});

app.post('/main/giveRandomSong', function(req, res){
    var sql = "select count(id) as num from song";
    var q= db.query(sql, function(err, rows){
        if(err)
            throw err
        else {
            var num = rows[0].num;
    sql = 'select song.title as song_title, song.cover as song_cover, song.url as song_audio, artist.name as artist_name, artist.description as artist_description, artist.photo as artist_photo, album.ganre as ganre, album_title, album.description as album_description, album.released_date, song.artist_id, song.album_id from song, artist, album where song.artist_id = artist.id and song.album_id = album.id';
    q= db.query(sql, function(err, rows){
        if(err)
            throw err
        else {
            var rand = getRandomInt(0,num-1);
            console.log(rows[rand]);
            curr_artist = rows[rand].artist_name;
            curr_song = rows[rand].song_title;
             res.send(rows[rand]);
             }
    });
        }
});
    });

app.post('/main/giveChallengeSong',urlencodedParser , function(req, res){
	var id = req.body.id;
    var sql = 'select song.title as song_title, song.cover as song_cover, song.url as song_audio, artist.name as artist_name, artist.description as artist_description, artist.photo as artist_photo, album.ganre as ganre, album_title, album.description as album_description, album.released_date, song.artist_id, song.album_id from song, artist, album where song.artist_id = artist.id and song.album_id = album.id and song.id='+id;
    var q= db.query(sql, function(err, rows){
        if(err)
            throw err
        else {
			curr_artist = rows[0].artist_name;
            curr_song = rows[0].song_title;	
			res.send(rows[0]);
             }
    });
    
 });

app.post('/checkLogIn',urlencodedParser, function(req ,res){
    var sql='SELECT id, password, type from user where login="'+req.body.login+'"';
    var q = db.query(sql, function(err, rows){
        if (err)
            throw err
        else {
			login = req.body.login;
            if(rows[0].password==req.body.password)
                {
                user_id = rows[0].id;
				type = rows[0].type;
                console.log("password is right");
                res.send({redirect: '/main'});
				}

            else console.log("Incorrect password");
        }
    })

});

app.get('/getUser', function(req, res){
	res.send(login);
})
