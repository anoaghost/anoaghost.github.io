function playRandomSong() {
  var songs = [
    "https://anoaghost.github.io/assets/music/ACHanime_Rachel_(CV._Haruka_Chisuga)_-_Pray.mp3",
    "https://anoaghost.github.io/assets/music/[ACHanime]_Asaka_-_Marine_SNOW.mp3",
    "https://anoaghost.github.io/assets/music/[ACHanime]_MYTH___ROID_-_VORACITY.mp3",
    "https://anoaghost.github.io/assets/music/[ACHanime]_Sangatsu_no_Phantasia_-_Rubicon.mp3"
  ];
  
  // Pick a random song.
  var songIndex = Math.floor(Math.random() * songs.length);
  
  $('#song-name').text('Playing ' + songs[songIndex]);
  $('#song-source').prop('src', songs[songIndex]);
  
  // Grab the actual <audio> element from the jQuery object.
  var audio = $('#song-audio')[0];
  
  // Just in case.
  audio.pause();
  
  // Load the audio into the buffer.
  audio.load();
  
  // Start the song.
  audio.play();
}

// This little $(function() { ... }) tells jQuery to run 
// this function when the page loads.
$(function() {
  playRandomSong();
  
  $('#song-audio').on('ended', function() {
    playRandomSong();
  });
  
  $('#song-play-random').on('click', playRandomSong);
});
