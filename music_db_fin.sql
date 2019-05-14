-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: music_db
-- ------------------------------------------------------
-- Server version	5.7.20-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `album`
--

DROP TABLE IF EXISTS `artist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `artist` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `photo` text,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


DROP TABLE IF EXISTS `album`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `album` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ganre` varchar(255) DEFAULT NULL,
  `album_title` varchar(255) DEFAULT NULL,
  `artist_id` int(11) DEFAULT NULL,
  `description` text,
  `cover` varchar(255) DEFAULT NULL,
  `released_date` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `Album_fk0` (`artist_id`),
  CONSTRAINT `Album_fk0` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `album`
--

LOCK TABLES `artist` WRITE;
/*!40000 ALTER TABLE `artist` DISABLE KEYS */;
INSERT INTO `artist` VALUES (1,'Tegan and Sara','Tegan and Sara /ˈtiːɡən, ˈsɛərə/ are a Canadian indie pop band formed in 1998 in Calgary, Alberta, composed of identical twin sisters Tegan Rain Quin and Sara Keirsten Quin (born September 19, 1980).[2][3] Both musicians are songwriters and multi-instrumentalists.','https://media.glamour.com/photos/575f282a225ba9336fea5689/1:1/w_352/TeganAndSara-01.jpg'),(2,'Blondie','Blondie is an American rock band founded by singer Debbie Harry and guitarist Chris Stein.[1] The band was a pioneer in the early American new wave and punk scenes of the mid-late 1970s. Its first two albums contained strong elements of these genres, and although successful in the United Kingdom and Australia, Blondie was regarded as an underground band in the United States until the release of Parallel Lines in 1978. Over the next three years, the band achieved several hit singles[2] including \"Heart of Glass\", \"Call Me\", \"Rapture\" and \"The Tide Is High\" and became noted for its eclectic mix of musical styles incorporating elements of disco, pop, reggae, and early rap music.','https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Blondie1977.jpg/1200px-Blondie1977.jpg'),(3,'Heart',' Heart is an American rock band that first found success in Canada and later in the United States and worldwide. Over the group\'s four-decade history, it has had three primary lineups, with the constant center of the group since 1973 being sisters Ann Wilson (lead singer) and Nancy Wilson (guitarist).','http://img.wennermedia.com/social/rs-248025-RS-Heart.jpg'),(4,'Muse','британская рок-группа, образованная в 1994 году в городе Тинмут (графство Девон). Группа состоит из трёх участников: Мэттью Беллами (вокал, гитара, клавиши), Криса Уолстенхолма (бас-гитара, бэк-вокал, вокал) и Доминика Ховарда (ударные).','http://images.genius.com/01ea82c74a235e08af02847715fcab35.750x750x1.jpg'),(5,'George Michael','Georgios Kyriacos Panayiotou (25 June 1963 – 25 December 2016), known professionally as George Michael, was an English singer, songwriter, record producer, and philanthropist who rose to fame as a member of the music duo Wham! He was best known for his work in the 1980s and 1990s, including hit singles ','http://img.wennermedia.com/480-width/george-75b14a92-253c-420d-a2c2-d3a431d19c24.jpg'),(7,'Rihanna','Robyn Rihanna Fenty known mononymously as Rihanna, is a Barbadian singer, songwriter, and actress. Born in Saint Michael, Barbados and raised in Bridgetown, during 2003 she recorded demo tapes under the direction of record producer Evan Rogers and signed a recording contract','https://n1s1.elle.ru/84/8d/55/848d554f90fb26f17531af8d460daee3/460x650_1_f99bd19c581173a181239804b661e463@460x650_0xc35dbb80_10059974911504876848.png'),(8,'Bruce Springsteen','Брюс Фредерик Джозеф Спрингстин (англ. Bruce Frederick Joseph Springsteen; род. 23 сентября 1949 года, Лонг-Бранч, Нью-Джерси, США) — американский рок- и фолк-музыкант и автор песен. Стал известен благодаря своим рок-песням с поэтичными текстами, основной темой которых является его ...','http://static.tvtropes.org/pmwiki/pub/images/bruce-springsteen.jpg'),(10,'Kendrick Lamar','','https://www.famousbirthdays.com/faces/lamar-kendrick-image.jpg'),(12,'Soul II Soul','',''),(14,'k.d. lang','',''),(25,'Kaleo','исландская музыкальная группа, созданная в 2012 году. В состав входят: Йокуль Юлиуссон, Давид Антонссон, Даниль Кристьянсон, Рубин Поллок.\n\nЗа 4 года существования группа выпустила 2 альбома: «Kaleo» (2013) и «A/B» (2016), а также 1 EP — «Glasshouse» (2013).','http://cdndl.zaycev.net/commonImage/274151_square250.jpg'),(26,'Bruce Springsteen','',''),(27,'Nothing More','',''),(28,'The Doors','',''),(29,'Dua Lipa','британская певица, автор песен и модель. Её музыкальная карьера началась в возрасте 14 лет, когда она начала размещать на YouTube кавер-версии песен Кристины Агилеры и Нелли Фуртадо.','http://www.radiopoison.com/wp-content/uploads/2017/09/duaa.jpg'),(30,'Taylor Swift','',''),(31,'Dashboard Confessional','',''),(32,'Led Zeppelin','',''),(33,'Nine Inch Nails','',''),(34,'P!nk','','https://www.billboard.com/files/styles/article_main_image/public/stylus/501138-pink-617-409.jpg'),(35,'Aretha Franklin','','https://www.biography.com/.image/c_fit,cs_srgb,h_406,q_50,w_620/MTE5NDg0MDU0OTY5MTU3MTM1/aretha-franklin-1-raw.jpg'),(36,'Nina Simone','ina Simone was an American singer, songwriter, pianist, arranger, and activist in the Civil Rights Movement. Simone employed a broad range of musical styles including classical, jazz, blues, folk, R','http://ninasimone.com/wp-content/uploads/2010/09/nina_hpos.jpg'),(37,'Coolio','',''),(38,'Serena Ryder','','https://cdn.torontolife.com/wp-content/uploads/2013/05/serena-ryder-spotlight.jpg'),(39,'MGMT','','https://cdn-s3.allmusic.com/release-covers/500/0000/716/0000716356.jpg'),(40,'Pearl Jam','','https://www.alternativenation.net/wp-content/uploads/2017/03/pearljamblack2013.jpg'),(41,'Madonna','','http://swjournal.ru/wp-content/uploads/2016/02/1-1.png'),(42,'Bleachers','Bleachers is an American indie pop act based in New York City. It is the official stage name of songwriter and record producer Jack Antonoff, who is also part of the bands Steel Train and Fun. Bleachers\' pop music was heavily influenced by the late \'80s, early \'90s and the','https://pbs.twimg.com/profile_images/847660426393337858/3zF5tYUO_400x400.jpg'),(43,'Heart','Heart is an American rock band that first found success in Canada and later in the United States and worldwide. Over the group\'s four-decade history, it has had three primary lineups, with the constant center of the group since 1973 being sisters Ann Wilson (lead singer) and Nancy Wilson (guitarist). Heart rose to fame in','http://bhcourier.com/wp-content/uploads/2012/09/Nancy-and-Ann-Wilson-of-Heart.jpg'),(44,'Indigo Girls','','https://s-media-cache-ak0.pinimg.com/originals/ef/84/4b/ef844bd30eb2703d33323ecc80c81093.jpg'),(45,'LP',' американская певица, автор-исполнитель. Автор песен для таких исполнителей как Рианна, Кристина Агилера, Рита Ора, Backstreet Boys, Шер, Джо Уолш, Cher Lloyd, Элла Хендерсон, The Veronicas ','http://www.muzoko.ru/wp-content/uploads/2016/10/lp01.jpg'),(46,'Ria Mae','Ria MacNutt, known professionally as Ria Mae, is a Canadian singer and songwriter from Halifax, Nova Scotia.','http://m.socan.ca/files/images/RiaMae_SOCANsweat_CS.jpg');
/*!40000 ALTER TABLE `artist` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `album` WRITE;
/*!40000 ALTER TABLE `album` DISABLE KEYS */;
INSERT INTO `album` VALUES (1,'pop','Love You to Death',1,'Love You to Death is the eighth studio album by Canadian rock duo Tegan and Sara, released on June 3, 2016, on Neil Young\'s label Vapor Records through Warner Bros. Records. Produced by Greg Kurstin, it is the follow-up to the duo\'s 2013 release Heartthrob, also produced in part by Kurstin.[1] \"Boyfriend\" was released as the album\'s lead single on April 8, 2016. The same day, \"U-Turn\" was also released as a promotional single. As of February 2017, Love You to Death has sold 27,000 copies in the US and 50,000 worldwide.','https://upload.wikimedia.org/wikipedia/en/d/df/Tegan_and_Sara_-_Love_You_to_Death.png',2017),(2,'New wave','Pollinator',2,'Pollinator is the eleventh studio album by American rock band Blondie, released on May 5, 2017 by BMG Rights Management.','https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Blondie%27s_%22Pollinator%22_album_cover.png/220px-Blondie%27s_%22Pollinator%22_album_cover.png',NULL),(3,'rock','The Best of Blondie',2,NULL,'',1978),(4,'pop','Twenty Five',5,NULL,'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/TwentyFive_Cover.jpg/220px-TwentyFive_Cover.jpg',1990),(6,'pop','ANTI (Deluxe)',7,NULL,'https://images-na.ssl-images-amazon.com/images/I/71b2iu4ezaL._SY355_.jpg',2016),(7,'rock','Born in the U.S.A.',8,NULL,'https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/BornInTheUSAsinglecover.jpg/220px-BornInTheUSAsinglecover.jpg',1984),(9,'rap','DAMN.',10,NULL,'',2017),(10,'rap','DAMN.',10,NULL,'',2017),(11,'hip-hop','Keep On Movin\'',12,NULL,'',1989),(12,'hip-hop','Keep On Movin\'',12,NULL,'',1989),(13,'pop','Hallelujah - EP',14,NULL,'',2010),(18,'rock','A / B',25,NULL,'',2015),(19,'rock','Born in the U.S.A.',8,NULL,'',1984),(20,'rock','The Stories We Tell Ourselves',27,NULL,'',2017),(21,'rock','The Very Best of the Doors',28,NULL,'',1967),(22,'pop','Dua Lipa',29,NULL,'',2017),(23,'pop','1989',30,NULL,'',2014),(24,'rock','Dusk and Summer',31,NULL,'',2007),(25,'rock','Led Zeppelin II (Remastered)',32,NULL,'',1969),(26,'rock','The Downward Spiral (Deluxe Edition)',33,NULL,'',1994),(27,'pop','Beautiful Trauma',34,NULL,'',2017),(28,'pop','Lady Soul',35,NULL,'',1967),(29,'pop','Compact Jazz: Nina Simone',36,NULL,'',1965),(30,'rap','Gangsta\'s Paradise',37,NULL,'',1995),(31,'rap','Heartthrob (Deluxe Version)',1,NULL,'',2013),(32,'pop','Electric Love',38,NULL,'',2017),(33,'rock','Little Dark Age - Single',39,NULL,'',2017),(34,'rock','Ten',40,NULL,'',1991),(35,'rock','Like a Prayer',41,NULL,'',1989),(36,'rock','Strange Desire',42,NULL,'',2014),(37,'rock','Greatest Hits',3,NULL,'',1977),(38,'rock','Indigo Girls (Expanded Edition)',44,NULL,'',1962),(39,'rock','Lost on You',45,NULL,'',2016),(40,'pop','Clothes Off - Single',46,NULL,'',2015);
/*!40000 ALTER TABLE `album` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artist`
--


--
-- Dumping data for table `artist`
--

--
-- Table structure for table `challenge_song`
--

DROP TABLE IF EXISTS `challenge_song`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `challenge_song` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `challenge_id` int(11) DEFAULT NULL,
  `song_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `challenge_song`
--

LOCK TABLES `challenge_song` WRITE;
/*!40000 ALTER TABLE `challenge_song` DISABLE KEYS */;
INSERT INTO `challenge_song` VALUES (1,1,4),(2,1,5),(3,1,6),(4,1,7),(5,1,8);
/*!40000 ALTER TABLE `challenge_song` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `challenges`
--

DROP TABLE IF EXISTS `challenges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `challenges` (
  `ID` int(11) NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `discr` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `challenges`
--

LOCK TABLES `challenges` WRITE;
/*!40000 ALTER TABLE `challenges` DISABLE KEYS */;
INSERT INTO `challenges` VALUES (1,'easy',5,'first challenge');
/*!40000 ALTER TABLE `challenges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `score`
--

DROP TABLE IF EXISTS `score`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `score` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `wins` int(11) DEFAULT NULL,
  `losses` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `Score_fk0` (`user_id`),
  CONSTRAINT `Score_fk0` FOREIGN KEY (`user_id`) REFERENCES `user` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `score`
--

LOCK TABLES `score` WRITE;
/*!40000 ALTER TABLE `score` DISABLE KEYS */;
INSERT INTO `score` VALUES (1,1,112,373),(3,6,8,27);
/*!40000 ALTER TABLE `score` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `song`
--

DROP TABLE IF EXISTS `song`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `song` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `artist_id` int(11) DEFAULT NULL,
  `album_id` int(11) DEFAULT NULL,
  `cover` text,
  `url` text,
  PRIMARY KEY (`ID`),
  KEY `Song_fk0` (`artist_id`),
  KEY `Song_fk1` (`album_id`),
  CONSTRAINT `Song_fk0` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`ID`),
  CONSTRAINT `Song_fk1` FOREIGN KEY (`album_id`) REFERENCES `album` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `song`
--

LOCK TABLES `song` WRITE;
/*!40000 ALTER TABLE `song` DISABLE KEYS */;
INSERT INTO `song` VALUES (3,'U-turn',1,1,'http://is5.mzstatic.com/image/thumb/Music69/v4/db/a9/f5/dba9f512-b03e-e3b2-e63b-4752d62c0096/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview20/v4/3b/2d/6f/3b2d6f1d-9d06-c551-9d16-8b94a8b1b0fc/mzaf_6787295277954263208.plus.aac.p.m4a'),(4,'Freedom! \'90',5,4,'http://is5.mzstatic.com/image/thumb/Music7/v4/51/6c/5f/516c5f84-64d5-9eea-ac89-28e4ba0f13c1/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/3b/3d/c2/mzm.yzveebdd.aac.p.m4a'),(5,'Love on the Brain',7,6,'http://is5.mzstatic.com/image/thumb/Music69/v4/32/e1/b1/32e1b173-b932-f618-11b5-29ae9374f92b/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music49/v4/f9/12/a9/f912a97c-87ac-81c0-77bd-7fc8837f8284/mzaf_5968498706965109933.plus.aac.p.m4a'),(6,'I\'m On Fire',8,7,'http://is5.mzstatic.com/image/thumb/Music5/v4/5d/fa/37/5dfa370a-76a1-fba9-1768-23d2d73ab437/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview71/v4/08/8a/0e/088a0e46-d4a2-53e3-878f-15b50bec580c/mzaf_5659427979958300828.plus.aac.p.m4a'),(7,'DNA.',10,9,'http://is4.mzstatic.com/image/thumb/Music111/v4/56/46/3f/56463f62-0d8d-3595-368b-38a995f10e36/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview122/v4/50/ab/4a/50ab4a2c-6ec1-2dfe-6bd8-502a0772997d/mzaf_5801811468097873278.plus.aac.p.m4a'),(8,'Back to Life',12,11,'http://is3.mzstatic.com/image/thumb/Music6/v4/b4/e7/9e/b4e79e01-ac06-b724-14e6-a2cb801723ec/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music1/v4/3a/8a/e5/3a8ae515-0d15-062e-b6b6-3a2caf106306/mzaf_8591892253078336375.plus.aac.p.m4a'),(10,'Way Down We Go',25,18,'http://is3.mzstatic.com/image/thumb/Music30/v4/a7/3b/be/a73bbe99-57d9-a10f-6638-b3b666a05c1f/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview30/v4/02/4e/35/024e3534-92b4-6e6d-217e-b5714b6faa20/mzaf_5572571419358472776.plus.aac.p.m4a'),(11,'I\'m On Fire',8,7,'http://is5.mzstatic.com/image/thumb/Music5/v4/5d/fa/37/5dfa370a-76a1-fba9-1768-23d2d73ab437/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview71/v4/08/8a/0e/088a0e46-d4a2-53e3-878f-15b50bec580c/mzaf_5659427979958300828.plus.aac.p.m4a'),(12,'Go to War',27,20,'http://is3.mzstatic.com/image/thumb/Music127/v4/a6/ba/5c/a6ba5c60-82e2-4e47-d731-ba745e065636/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview117/v4/1c/f2/d1/1cf2d1b6-c829-cacd-2179-c1ef9243d98a/mzaf_526621224343330872.plus.aac.p.m4a'),(13,'People Are Strange',28,21,'http://is3.mzstatic.com/image/thumb/Music/v4/03/42/ed/0342ed40-fd34-917b-7c4d-96e283723bfb/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview71/v4/3d/94/d0/3d94d00d-852e-2bba-9c77-f60f1c3cd36a/mzaf_3258402813428714072.plus.aac.p.m4a'),(14,'New Rules',29,22,'http://is4.mzstatic.com/image/thumb/Music111/v4/6d/1e/c6/6d1ec6e3-775b-97d0-f329-6956a550310f/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/69/d4/43/69d44360-2618-ae8d-5156-ba00b78d0cbd/mzaf_5141661955712111898.plus.aac.p.m4a'),(15,'Style',30,23,'http://is3.mzstatic.com/image/thumb/Music5/v4/29/fa/b6/29fab67f-c950-826f-26a0-5eebcd0e262b/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music5/v4/4f/6e/ba/4f6eba13-0b76-6b33-3ee8-48cf4606712d/mzaf_8264677660824429098.plus.aac.p.m4a'),(16,'Stolen',31,24,'http://is5.mzstatic.com/image/thumb/Music/v4/7d/cf/e4/7dcfe464-7731-1613-bb82-dfd1e5eef938/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/36/6e/01/mzm.gzimvpfi.aac.p.m4a'),(17,'Heartbreaker',32,25,'http://is1.mzstatic.com/image/thumb/Music1/v4/12/92/36/1292365e-2951-c1ff-3c09-a91ba9927d26/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music7/v4/69/26/2b/69262ba9-ab55-0910-463d-a03f66dd2df9/mzaf_3021379161038161964.plus.aac.p.m4a'),(18,'Closer',33,26,'http://is2.mzstatic.com/image/thumb/Music71/v4/54/2f/d5/542fd5cf-c02a-761c-9839-327363719f81/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview62/v4/4f/58/f2/4f58f2fc-3fa3-4f7e-9958-54edf9930fe4/mzaf_359933723388282702.plus.aac.p.m4a'),(19,'What About Us',34,27,'http://is3.mzstatic.com/image/thumb/Music118/v4/b7/d7/cb/b7d7cb57-9272-f63d-23b4-6d9d84580fca/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/fa/74/55/fa7455fa-98df-0112-63ca-25e17e8371fa/mzaf_3951109232445852383.plus.aac.p.m4a'),(20,'Chain of Fools',35,28,'http://is5.mzstatic.com/image/thumb/Music5/v4/c9/f5/c2/c9f5c2a1-e2be-45f6-550d-ff69fbce2a1b/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music3/v4/e1/7a/c0/e17ac0ba-7ecc-0508-c830-48e2fbee4f89/mzaf_7236859309821429744.plus.aac.p.m4a'),(21,'Feeling Good',36,29,'http://is5.mzstatic.com/image/thumb/Music/v4/c9/c7/f9/c9c7f999-0240-f370-cfab-1ed6410a6574/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/31/87/d4/mzm.ouaqrfjy.aac.p.m4a'),(22,'Gangsta\'s Paradise (feat. L.V.)',37,30,'http://is2.mzstatic.com/image/thumb/Music118/v4/7a/a5/fa/7aa5fa5b-e2f7-f2e2-d48c-2dc02ca365f1/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview118/v4/dd/b8/c8/ddb8c8b0-1d49-3a36-1356-1f40aa5a0df0/mzaf_5601068130742642082.plus.aac.p.m4a'),(23,'I Was a Fool',1,31,'http://is1.mzstatic.com/image/thumb/Music/v4/a7/12/b6/a712b63d-bd4f-9d33-5618-d07c89c37865/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/v4/6f/6f/a1/6f6fa146-4259-498a-9a6d-fd2995e2211d/mzaf_2098941410571401953.plus.aac.p.m4a'),(24,'Utopia',38,32,'http://is5.mzstatic.com/image/thumb/Music117/v4/8f/22/f6/8f22f614-ec1a-d89e-226f-2688754833ec/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview117/v4/f0/74/5a/f0745a41-c31b-6fc2-57e6-45240e0e190a/mzaf_6468181688079422194.plus.aac.p.m4a'),(25,'Little Dark Age',39,33,'http://is3.mzstatic.com/image/thumb/Music118/v4/86/c4/27/86c42799-0850-8bab-bb82-860e128bed27/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview128/v4/1a/6b/ac/1a6bac44-780a-13d4-6fba-99b1518047e9/mzaf_2569909428019826193.plus.aac.p.m4a'),(26,'Black',40,34,'http://is3.mzstatic.com/image/thumb/Music71/v4/86/27/f2/8627f2b9-0e43-9e25-b2fa-a44ffc6f42f2/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview62/v4/8e/b2/26/8eb226d8-691f-10ca-2476-ce07afa9dd89/mzaf_6362323763366506830.plus.aac.p.m4a'),(27,'Like a Prayer',41,35,'http://is4.mzstatic.com/image/thumb/Music/v4/28/9d/04/289d0422-437c-5c9b-b86f-3afecc326ed4/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/dc/45/31/mzm.kteqltlu.aac.p.m4a'),(28,'Wake Me',42,36,'http://is5.mzstatic.com/image/thumb/Music4/v4/90/ed/e1/90ede180-6c33-c0c7-6cb3-44b0b0088c6f/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/v4/d8/fd/46/d8fd46c1-bd72-fcb5-f772-6b424271bfdb/mzaf_4241470468393237653.plus.aac.p.m4a'),(29,'Barracuda',3,37,'http://is3.mzstatic.com/image/thumb/Music49/v4/93/05/62/930562df-b301-9715-a884-b6d1e8bb89b8/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/3d/45/f1/mzm.avdiztqt.aac.p.m4a'),(30,'Closer to Fine',44,38,'http://is4.mzstatic.com/image/thumb/Music/v4/85/18/6b/85186b10-fe77-060f-23eb-69a9cee315ff/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/ed/36/44/mzm.zrcsarjx.aac.p.m4a'),(31,'No Witness',45,39,'http://is3.mzstatic.com/image/thumb/Music122/v4/6b/0f/79/6b0f7925-57ec-70bd-eedf-d9be8631891b/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/AudioPreview122/v4/64/3b/e2/643be239-9616-1419-0b34-ea800ce04ef4/mzaf_3960579943437624601.plus.aac.p.m4a'),(32,'Clothes Off',46,40,'http://is2.mzstatic.com/image/thumb/Music5/v4/4b/31/e9/4b31e932-88ce-b8e9-f41b-c32aaa6c9e54/source/100x100bb.jpg','https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music7/v4/17/67/80/17678067-55b6-cf2f-a0a1-dd0543b0e18f/mzaf_5553193145489640681.plus.aac.p.m4a');
/*!40000 ALTER TABLE `song` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `type` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','admin','Anna','Dodonova','admin'),(6,'batman','batman','Bruce','Wayne','guest');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-28  8:34:46
