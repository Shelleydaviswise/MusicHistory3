
// Use JavaScript arrays, loops, and innerHTML to show the music you love.

// Students must use JavaScript to create a list of songs in the index.html file for their Music History project. 
// Have them download the resources/js-101.js file, which contains an array of strings with song information.

// Each student must add one song to the beginning and the end of the array.
// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.


// Must add each string to the DOM in index.html in the main content area.

var updatedRightFlex = document.getElementById("right-flex");
var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


songs.unshift("Fiona by Lyle Lovett on the album Road to Ensenada");
songs.push("Loveshack by the B52's on the album Cosmic Thing");

var output = "";
for (var i = 0; i < songs.length; i++) {
	var songInfo = songs[i];
	songInfo = songInfo.replace(">","-");
	songInfo = songInfo.replace(/\*/g, "");
	songInfo = songInfo.replace(/@/g, "");
	songInfo = songInfo.replace(/\(/g, "");
	songInfo = songInfo.replace(/!/g, "");
	output+= "<p  class = songinfo>" + songInfo + "</p>";
	
}
console.log("Output",output);
updatedRightFlex.innerHTML = output;
console.log ("Songs",songs);