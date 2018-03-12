// Open up the database file in the DB Browser for SQLite application to see it
// Copy and paste the queries below into your queries.sql file and comment them out. Then you can write a query for each requrement and refer back to them later as a resource
// When you have written a query, paste it into DB Browser and test it by clicking the tab labeled "Execute SQL"
// For each of the following exercises, provide the appropriate query. Everything from class and the Sqlite documentation for SQL keywords and functions is fair game.

// Query all of the entries in the Genre table
SElECT * 
FROM genre
// Using the INSERT statement, add one of your favorite artists to the Artist table.

// Using the INSERT statement, add one, or more, albums by your artist to the Album table.
INSERT into Album
Values 
(SELECT artistId FROM artist WHERE artistName ="Artistname"), 4)
// Using the INSERT statement, add some songs that are on that album to the Song table.
INSERT into Song
VALUES (null, "SongName", 343, 2004,
(SELECT genreid FROM album a WHERE title = "AblumTitle"),
(Select artistid FROM album a WHERE title = "AAlbumTitle"),
(SELECT albumid FROM album a WHERE title ="AlbumTitle"));


// Write a SELECT query that provides the song titles, album title, and artist name for all of the data you just entered in. Use the LEFT JOIN keyword sequence to connect the tables, and the WHERE keyword to filter the results to the album and artist you added. Here is some more info on joins that might help.
SELECT s.title as songTitle, a.title as albumTitle, b.artistName
FROM song s 
LEFT JOIN album a 
ON s.albumid = a.albumid
LEFT JOIN artist as b
ON s.artistid = b.artistid
WHERE s.albumid = (SELECT albumid from album WHERE title = "albumtitle")
or try this -
WHERE b.artistname = "artistname"

// Reminder: Direction of join matters. Try the following statements and see the difference in results.

// SELECT a.Title, s.Title FROM Album a LEFT JOIN Song s ON s.AlbumId = a.AlbumId;
// SELECT a.Title, s.Title FROM Song s LEFT JOIN Album a ON s.AlbumId = a.AlbumId;


// Write a SELECT statement to display how many songs exist for each album. You'll need to use the COUNT() function and the GROUP BY keyword sequence.
SELECT count(song.songid) "song count", album.title Album
FROM song 
JOIN album
ON song.albumid = album.albumid
GROUP BY album.title

// Write a SELECT statement to display how many songs exist for each artist. You'll need to use the COUNT() function and the GROUP BY keyword sequence.

// Write a SELECT statement to display how many songs exist for each genre. You'll need to use the COUNT() function and the GROUP BY keyword sequence.

// Using MAX() function, write a select statement to find the album with the longest duration. The result should display the album title and the duration.
SELECT title, MAX(albumlength)"album lenght"
from album


// Using MAX() function, write a select statement to find the song with the longest duration. The result should display the song title and the duration.

// Modify the previous query to also display the title of the album.