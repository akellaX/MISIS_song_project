var JSAlert = require("js-alert");
var express = require("express");
var app = express();
var http = require("http");
var fs = require("fs");
var bodyParser = require("body-parser");

var login;
var user_id;
var curr_artist;
var curr_song;
var type;

app.use("/index.html", express.static(__dirname + "/index.html"));
app.use("/mainPage.html", express.static(__dirname + "/mainPage.html"));
app.use("/addPage.html", express.static(__dirname + "/addPage.html"));
app.use("/editPage.html", express.static(__dirname + "/editPage.html"));
app.use("/editModal.html", express.static(__dirname + "/editPage.html"));
app.use("/score.html", express.static(__dirname + "/score.html"));
app.use("/challengePage.html", express.static(__dirname + "/score.html"));

app.use(express.static(__dirname + "/public"));

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get("/", function(req, res) {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/addPage", function(req, res) {
  res.sendFile("addPage.html", { root: __dirname });
});
app.get("/score", function(req, res) {
  res.sendFile("score.html", { root: __dirname });
});

app.get("/main", function(req, res) {
  res.sendFile("mainPage.html", { root: __dirname });
});

app.get("/editPage", function(req, res) {
  res.sendFile("editPage.html", { root: __dirname });
});
app.get("/editModal", function(req, res) {
  res.sendFile("editModal.html", { root: __dirname });
});
app.get("/challengePage", function(req, res) {
  res.sendFile("challengePage.html", { root: __dirname });
});
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
var mysql = require("mysql");

app.listen("3000", function() {
  console.log("Server started on port 3000");
});

var db = mysql.createConnection({
  host: "remotemysql.com",
  user: "TDdqhLctfV",
  password: "J6fiIBpUUq",
  database: "TDdqhLctfV"
});

db.connect(function(err) {
  if (err) throw err;
  else console.log("Connected");
});

app.post("/main/giveRandomSong", function(req, res) {
  var sql = "select count(id) as num from song";
  var q = db.query(sql, function(err, rows) {
    if (err) throw err;
    else {
      var num = rows[0].num;
      sql =
        "select song.title as song_title, song.cover as song_cover, song.url as song_audio, artist.name as artist_name, artist.description as artist_description, artist.photo as artist_photo, album.ganre as ganre, album_title, album.description as album_description, album.released_date, song.artist_id, song.album_id from song, artist, album where song.artist_id = artist.id and song.album_id = album.id";
      q = db.query(sql, function(err, rows) {
        if (err) throw err;
        else {
          var rand = getRandomInt(0, num - 1);
          console.log(rows[rand]);
          curr_artist = rows[rand].artist_name;
          curr_song = rows[rand].song_title;
          res.send(rows[rand]);
        }
      });
    }
  });
});

app.post("/main/giveChallengeSong", urlencodedParser, function(req, res) {
  var id = req.body.id;
  var sql =
    "select song.title as song_title, song.cover as song_cover, song.url as song_audio, artist.name as artist_name, artist.description as artist_description, artist.photo as artist_photo, album.ganre as ganre, album_title, album.description as album_description, album.released_date, song.artist_id, song.album_id from song, artist, album where song.artist_id = artist.id and song.album_id = album.id and song.id=" +
    id;
  var q = db.query(sql, function(err, rows) {
    if (err) throw err;
    else {
      curr_artist = rows[0].artist_name;
      curr_song = rows[0].song_title;
      res.send(rows[0]);
    }
  });
});

app.post("/checkLogIn", urlencodedParser, function(req, res) {
    if (!req.body.login || !req.body.password) {
        return;
    }
  var sql =
    'SELECT id, password, type from user where login="' + req.body.login + '"';
  var q = db.query(sql, function(err, rows) {
    if (err) throw err;
    else {
      if (!rows[0]) {
        JSAlert.alert('wrong password/login');
        return;
      }
      login = req.body.login;
      if (rows[0].password == req.body.password) {
        user_id = rows[0].id;
        type = rows[0].type;
        console.log("password is right");
        res.send({ redirect: "/main" });
      } else console.log("Incorrect password");
    }
  });
});

app.get("/getUser", function(req, res) {
  res.send(login);
});

app.get("/getScore", urlencodedParser, function(req, res) {
  var sql =
    'SELECT wins, losses from score, user where score.user_id = user.id and user.login = "' +
    login +
    '"';
  var q = db.query(sql, function(err, rows) {
    if (err) throw err;
    else {
      res.send(rows[0]);
    }
  });
});
app.get("/challenge", urlencodedParser, function(req, res) {
  console.log(req.query.id);
});

app.post("/main/checkSong", urlencodedParser, function(req, res) {
  var artist = req.body.artist;
  var song = req.body.song;
  console.log(artist + " " + song);
  console.log(curr_artist + " " + curr_song);
  if (
    artist.toUpperCase() == curr_artist.toUpperCase() &&
    song.toUpperCase() == curr_song.toUpperCase()
  ) {
    res.send("1");
    var sql = "update score set wins = wins + 1 where user_id = " + user_id;
    var q = db.query(sql, function(err) {
      if (err) throw err;
    });
  } else {
    res.send("0");
    var sql = "update score set losses = losses + 1 where user_id = " + user_id;
    var q = db.query(sql, function(err) {
      if (err) throw err;
    });
  }
});

app.post("/addPage/addArtist", urlencodedParser, function(req, res) {
  var artist = req.body.artist;
  var description = req.body.description;
  var photo = req.body.photo;
  var sql =
    'INSERT INTO artist(name, description, photo) VALUES("' +
    artist +
    '"' +
    "," +
    '"' +
    description +
    '"' +
    "," +
    '"' +
    photo +
    '")';
  var q = db.query(sql, function(err, rows) {
    if (err) throw err;
    else {
      console.log("artist inserted!");
      res.send("Artist inserted!");
    }
  });
});

app.post("/addPage/addAlbum", urlencodedParser, function(req, res) {
  var artist = req.body.artist;
  var album = req.body.album;
  var album_year = req.body.year;
  var ganre = req.body.ganre;
  var album_cover = req.body.album_cover;
  var artist_id;

  var sql = 'select id from artist where name="' + artist + '"';
  var q = db.query(sql, function(err, rows) {
    if (err) throw err;
    else {
      artist_id = rows[0].id;
      sql =
        'INSERT INTO album(ganre, album_title, artist_id, cover, released_date) VALUES("' +
        ganre +
        '"' +
        "," +
        '"' +
        album +
        '"' +
        "," +
        '"' +
        artist_id +
        '"' +
        "," +
        '"' +
        album_cover +
        '"' +
        "," +
        '"' +
        album_year +
        '")';
      var q1 = db.query(sql, function(err, rows) {
        if (err) throw err;
        else {
          console.log("album inserted");
          res.send("album inserted");
        }
      });
    }
  });
});

app.post("/addUser", urlencodedParser, function(req, res) {
  var fn = req.body.fn;
  var ln = req.body.ln;
  var pass = req.body.pass;
  var log = req.body.log;
  var sql =
    'INSERT INTO user(login, password, first_name, last_name, type) VALUES ("' +
    log +
    '","' +
    pass +
    '","' +
    fn +
    '","' +
    ln +
    '","guest")';
  console.log(sql);
  var q = db.query(sql, function(err, rows) {
    if (err) throw err;
    else {
      sql = 'select id from user where login="' + log + '"';
      var q1 = db.query(sql, function(err, rows) {
        if (err) throw err;
        else {
          var id = rows[0].id;
          sql =
            'insert into score(user_id, wins, losses) values ("' +
            id +
            '","0","0")';
          var q2 = db.query(sql, function(err, rows) {
            if (err) throw err;
            else {
              console.log("user " + log + " added");
              res.send("user added");
            }
          });
        }
      });
    }
  });
});

app.post("/addPage/addSong", urlencodedParser, function(req, res) {
  var album = req.body.album;
  var song = req.body.song;
  var cover = req.body.cover;
  var url = req.body.url;
  console.log("addSong position");
  var sql = 'select id, artist_id from album where album_title="' + album + '"';
  var q = db.query(sql, function(err, rows) {
    if (err) throw err;
    else {
      var album_id = rows[0].id;
      var artist_id = rows[0].artist_id;
      sql =
        'INSERT INTO song(title, album_id, artist_id, cover, url) VALUES("' +
        song +
        '"' +
        "," +
        '"' +
        album_id +
        '"' +
        "," +
        '"' +
        artist_id +
        '"' +
        "," +
        '"' +
        cover +
        '"' +
        "," +
        '"' +
        url +
        '")';
      var q1 = db.query(sql, function(err, rows) {
        if (err) throw err;
        else {
          console.log("song inserted");
          res.send("song inserted");
        }
      });
    }
  });
});

app.post("/editSong", urlencodedParser, function(req, res) {
  var sql =
    "select song.id, title, name as artist_name, album_title from song, artist, album where song.artist_id = artist.id and song.album_id = album.id";
  var q = db.query(sql, function(err, rows) {
    if (err) throw err;
    else {
      res.send(rows);
    }
  });
});

app.post("/editPage/edit", urlencodedParser, function(req, res) {
  var string = encodeURIComponent(req.body.id);
  res.send({ redirect: "/editModal?valid=" + string });
});

app.post("/getAllInf", urlencodedParser, function(req, res) {
  var sql =
    "select song.title as song_title, song.cover as song_cover, song.url as song_audio, artist.name as artist_name, artist.description as artist_description, artist.photo as artist_photo, album.ganre as ganre, album_title, album.description as album_description, album.released_date, song.artist_id, song.album_id from song, artist, album where song.artist_id = artist.id and song.album_id = album.id and song.id = " +
    req.body.id;
  var q = db.query(sql, function(err, rows) {
    if (err) throw err;
    else {
      res.send(rows[0]);
      console.log("edit request send: " + rows[0]);
    }
  });
});

app.post("/changeInf", urlencodedParser, function(req, res) {
  var albumTitle = req.body.albumtitle;
  var albumYear = req.body.albumyear;
  var description = req.body.artistdesc;
  var photo = req.body.photo;
  var artist_name = req.body.artistname;
  var song_title = req.body.songtitle;
  var ganre = req.body.ganre;
  var id = req.body.id;
  var artist_id = req.body.artistid;
  var album_id = req.body.albumid;
  var sql = "update song set title = '" + song_title + "' where id=" + id;
  console.log(sql);
  var q = db.query(sql, function(err, rows) {
    if (err) throw err;
    else {
      sql =
        'update album set album_title = "' +
        albumTitle +
        '", ganre = "' +
        ganre +
        '", released_date= ' +
        albumYear +
        " where id=" +
        album_id;
      console.log(sql);
      q = db.query(sql, function(err, rows) {
        if (err) throw err;
        else {
          sql =
            "update artist set name = '" +
            artist_name +
            "' , description = '" +
            description +
            "' , photo= '" +
            photo +
            "' where id=" +
            artist_id;
          q = db.query(sql, function(err, rows) {
            if (err) throw err;
            else {
              console.log("prefectly added");
              res.send("Information about song has changed");
            }
          });
        }
      });
    }
  });
});

app.post("/artistAlbumInfo", urlencodedParser, function(req, res) {
  var sql =
    "select song.cover, album.album_title, album.released_date from song, album where song.artist_id = " +
    req.body.id +
    " and song.album_id = album.id";
  var q = db.query(sql, function(err, rows) {
    if (err) throw err;
    else {
      res.send(rows);
    }
  });
});
app.post("/artistInfo", urlencodedParser, function(req, res) {
  var sql =
    "select name, photo, description from artist where id = " + req.body.id;
  var q = db.query(sql, function(err, rows) {
    if (err) throw err;
    else {
      res.send(rows[0]);
    }
  });
});

app.post("/getScore", urlencodedParser, function(req, res) {
  var sql =
    "select user.login, score.wins, score.losses from score, user where user.id = score.user_id";
  var q = db.query(sql, function(err, rows) {
    if (err) throw err;
    else {
      res.send(rows);
    }
  });
});

app.post("/getChallenges", urlencodedParser, function(req, res) {
  var sql = "select id, title from challenges";
  var q = db.query(sql, function(err, rows) {
    if (err) throw err;
    else {
      res.send(rows);
    }
  });
});
app.post("/goToChallengePage", urlencodedParser, function(req, res) {
  var string = encodeURIComponent(req.body.id);
  res.send({ redirect: "/challengePage?valid=" + string });
});

app.post("/getChallengeSongs", urlencodedParser, function(req, res) {
  var id = req.body.id;
  var sql = "SELECT song_id FROM challenge_song where challenge_id=" + id;
  var q = db.query(sql, function(err, rows) {
    if (err) throw err;
    else {
      res.send(rows);
    }
  });
});

app.post("/getChallengeInfo", urlencodedParser, function(req, res) {
  var id = req.body.id;
  var sql = "SELECT title, num, discr from challenges where id =" + id;
  var q = db.query(sql, function(err, rows) {
    if (err) throw err;
    else {
      res.send(rows[0]);
    }
  });
});

app.post("/getType", urlencodedParser, function(req, res) {
  res.send(type);
});
