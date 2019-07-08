function playRandomSong() {
  var songs = [
    "file:///D:/MUSIK/yuiko%20-%20Petit%20Bonheur.mp3",
    "file:///D:/MUSIK/Kamisama%20to%20Unmei%20Kakumei%20no%20Paradox~feat.%CE%BC's%20(Love%20Live!)/MP3/01.%20Kakumei%20desu%20ne,%20Kamisama!.mp3",
    "file:///E:/Barusan/video/jp/[ACHanime]_Sangatsu_no_Phantasia_-_Rubicon.mp3",
    "file:///E:/Barusan/video/M/MP3/[ACHanime]Sangatsu_no_Phantasia_-_Kaze_no_Koe_wo_Kiki_nagara.mp3"
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
